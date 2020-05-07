import axios from "axios";
import {
  SET_JURISDICTION,
  GET_DATE,
  SET_DATE_QUERY,
  GET_RUSSIAN_FAST,
  SET_OCA_FAST,
  GET_RUSSIAN_SAINT_LIVES,
} from "./types";

export const setJurisdiction = (jurisdiction) => (dispatch) => {
  dispatch({
    type: SET_JURISDICTION,
    payload: jurisdiction,
  });
};

export const setDateQuery = (query) => (dispatch) => {
  dispatch({
    type: SET_DATE_QUERY,
    payload: query,
  });
};

export const getDate = () => (dispatch, getState) => {
  const {
    calendar: {
      dateQuery: { year, month, day },
    },
    calendar: state,
  } = getState();

  // Fetch the day data
  const apiURL = "https://orthocal.info";
  const url = `${apiURL}/api/${state.jurisdiction}/${
    year ? `${year}/${month ? `${month}/${day ? `${day}/` : ""}` : ""}` : ""
  }`;
  axios
    .get(url)
    .then((res) => {
      const result =
        typeof res.data === "object" && typeof res.data.length !== "number"
          ? { ...res.data }
          : [...res.data];

      if (
        typeof result.length !== "number" &&
        typeof result.fast_level === "number"
      ) {
        if (result.fast_level === 0) {
          result.fast_exception_desc = "Fast Free";
        } else if (result.fast_level > 0) {
          if (!result.fast_exception_desc.replace(" ", "")) {
            result.fast_exception_desc = "Strict Fast";
          } else if (
            result.fast_exception_desc.toLowerCase() === "no overrides"
          ) {
            result.fast_exception_desc = "Strict Fast";
          }
        }
      }

      dispatch({ type: GET_DATE, payload: result });
    })
    .catch((err) => console.error(err));
};

export const getRussianFast = () => (dispatch, getState) => {
  const {
    calendar: {
      dateQuery: { year, month, day },
    },
  } = getState();

  const url = `https://www.holytrinityorthodox.com/calendar/calendar.php?dt=0&lives=0&trp=0&scripture=0${
    year && month && day
      ? `&year=${parseInt(year)}&month=${parseInt(month)}&today=${parseInt(
          day
        )}`
      : ""
  }`;

  axios
    .get(url)
    .then((res) => {
      const result = {
        fastDesc: res.data,
        allowed: "",
        disallowed: "",
        symbol: "",
      };

      result.fastDesc = result.fastDesc
        ? result.fastDesc.split('<span class="headerfast">')[1]
        : "";
      if (result.fastDesc) {
        result.fastDesc = result.fastDesc.replace(/<[^>]+>/g, "");
      }

      if (result.fastDesc.includes("Full abstention from food")) {
        result.disallowed = "All food";

        result.symbol = "octicon:x";
      } else if (result.fastDesc.includes("Strict Fast")) {
        result.allowed = "Raw vegetables, fruit and bread";
        result.disallowed =
          "Cooked food, meat, fish, oil, wine, dairy and eggs";

        result.symbol = "mdi:bolnisi-cross";
      } else if (result.fastDesc.includes("Food without Oil")) {
        result.allowed = "Cooked vegetables, fruit, legumes and bread";
        result.disallowed =
          "Fried foods, meat, fish, oil, wine, dairy and eggs";

        result.symbol = "emojione:pot-of-food";
      } else if (result.fastDesc.includes("Food with Oil")) {
        result.allowed = "All of DRY FAST, wine and oil";
        result.disallowed = "Meat, fish, dairy and eggs";

        result.symbol = "noto:grapes";
      } else if (result.fastDesc.includes("Caviar Allowed")) {
        result.allowed = "All of DRY FAST, wine, oil and caviar";
        result.disallowed = "Meat, fish, dairy and eggs";

        result.symbol = "emojione:letter-c";
      } else if (result.fastDesc.includes("Fish Allowed")) {
        result.allowed = "All of DRY FAST, wine, oil, caviar and fish";
        result.disallowed = "Meat, dairy and eggs";

        result.symbol = "noto:fish";
      } else if (result.fastDesc.includes("Meat is excluded")) {
        result.allowed = "All of DRY FAST, wine, oil, fish, eggs and dairy";
        result.disallowed = "Meat";

        result.symbol = "noto:cheese-wedge";
      }

      dispatch({ type: GET_RUSSIAN_FAST, payload: result });
    })
    .catch((err) => console.error(err));
};

export const getRussianSaintLives = () => (dispatch, getState) => {
  const {
    calendar: {
      dateQuery: { year, month, day },
    },
  } = getState();

  const url = `https://www.holytrinityorthodox.com/calendar/calendar.php?header=0&dt=0&scripture=0&lives=3${
    year && month && day ? `&year=${year}&month=${month}&today=${day}` : ""
  }`;

  axios
    .get(url)
    .then((res) =>
      dispatch({ type: GET_RUSSIAN_SAINT_LIVES, payload: res.data })
    )
    .catch((err) => console.error(err));
};

export const setOCAFast = (ocaFast) => (dispatch) => {
  dispatch({
    type: SET_OCA_FAST,
    payload: ocaFast,
  });
};

window.axios = axios;

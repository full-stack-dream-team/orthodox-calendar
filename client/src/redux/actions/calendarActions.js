import axios from "axios";
import cheerio from "cheerio";
import {
  SET_JURISDICTION,
  GET_DATE,
  SET_DATE_QUERY,
  GET_RUSSIAN_FAST,
  GET_ROC_SAINTS,
  GET_OCA_SAINTS,
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
      jurisdiction,
    },
  } = getState();

  axios
    .post("/api/calendar/calendarapi", { year, month, day, jurisdiction })
    .then((res) => {
      dispatch({ type: GET_DATE, payload: res.data.calendarAPI });
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

      const $ = cheerio.load(result.fastDesc);

      if ($(".headerfast").text().trim()) {
        result.fastDesc = $(".headerfast").text();
      } else if ($(".headernofast").text().trim()) {
        result.fastDesc = $(".headernofast").text();
      } else {
        result.fastDesc = "Fast Free";
      }

      if (result.fastDesc) {
        result.fastDesc = result.fastDesc.replace(/<[^>]+>/g, "");

        if (result.fastDesc.includes("Full abstention from food")) {
          result.disallowed = "All food";

          result.symbol = "emojione-monotone:fork-and-knife";
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
      }

      dispatch({ type: GET_RUSSIAN_FAST, payload: result });
    })
    .catch((err) => console.error(err));
};

export const getROCSaints = () => (dispatch, getState) => {
  const {
    calendar: {
      dateQuery: { year, month, day },
    },
  } = getState();

  axios
    .post("/api/calendar/rocsaints", { year, month, day })
    .then((res) => {
      dispatch({ type: GET_ROC_SAINTS, payload: res.data.saints });
    })
    .catch((err) => console.error(err));
};

export const getOCASaints = () => (dispatch, getState) => {
  const {
    calendar: {
      dateQuery: { year, month, day },
    },
  } = getState();

  axios
    .post("/api/calendar/ocasaints", { year, month, day })
    .then((res) => {
      dispatch({ type: GET_OCA_SAINTS, payload: res.data.saints });
    })
    .catch((err) => console.error(err));
};

window.axios = axios;

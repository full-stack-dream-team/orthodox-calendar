import axios from "axios";
import {
  SET_JURISDICTION,
  GET_DATE,
  SET_DATE_QUERY,
  GET_RUSSIAN_FAST,
  SET_OCA_FAST,
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
  const { calendar: state } = getState();

  // Fetch the day data
  const apiURL = "https://orthocal.info";
  const url = `${apiURL}/api/${state.jurisdiction}/${
    state.dateQuery.year
      ? `${state.dateQuery.year}/${
          state.dateQuery.month
            ? `${state.dateQuery.month}/${
                state.dateQuery.day ? `${state.dateQuery.day}/` : ""
              }`
            : ""
        }`
      : ""
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
    .catch((err) => console.log(err));
};

export const getRussianFast = () => (dispatch, getState) => {
  const { calendar: state } = getState();

  axios
    .get(
      `https://www.holytrinityorthodox.com/calendar/calendar.php?dt=0&lives=0&trp=0&scripture=0${
        state.dateQuery.year && state.dateQuery.month && state.dateQuery.day
          ? `&year=${state.dateQuery.year}&month=${
              state.dateQuery.month + 1
            }&today=${state.dateQuery.day}`
          : ""
      }`
    )
    .then((res) => dispatch({ type: GET_RUSSIAN_FAST, payload: res.data }))
    .catch((err) => console.log(err));
};

export const setOCAFast = (ocaFast) => (dispatch) => {
  dispatch({
    type: SET_OCA_FAST,
    payload: ocaFast,
  });
};

window.axios = axios;

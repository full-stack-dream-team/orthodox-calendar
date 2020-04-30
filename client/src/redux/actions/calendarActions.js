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
    .then((res) => dispatch({ type: GET_DATE, payload: res.data }))
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
    .then((res) => dispatch({ type: GET_RUSSIAN_FAST, payload: res.data }));
};

export const setOCAFast = (ocaFast) => (dispatch) => {
  dispatch({
    type: SET_OCA_FAST,
    payload: ocaFast,
  });
};

window.axios = axios;

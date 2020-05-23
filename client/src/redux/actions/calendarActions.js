import axios from "axios";
import {
  SET_JURISDICTION,
  GET_DATE,
  SET_DATE_QUERY,
  GET_ROC_INFO,
  GET_OCA_SAINTS,
  RESET_SAINTS,
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

export const getROCInfo = () => (dispatch, getState) => {
  const {
    calendar: {
      dateQuery: { year, month, day },
    },
  } = getState();

  axios
    .post("/api/calendar/rocinfo", { year, month, day })
    .then((res) => {
      dispatch({ type: GET_ROC_INFO, payload: res.data });
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

export const resetSaints = () => (dispatch) => {
  dispatch({ type: RESET_SAINTS });
};

window.axios = axios;

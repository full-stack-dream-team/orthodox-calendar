import axios from "axios";
import { SET_JURISDICTION, GET_DATE, SET_DATE_QUERY } from "./types";

const apiURL = "https://orthocal.info";

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

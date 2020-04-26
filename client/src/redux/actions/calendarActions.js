import axios from "axios";
import { SET_JURISDICTION, GET_DATE } from "./types";

const apiURL = "https://orthocal.info";

export const setJurisdiction = (jurisdiction) => ({
  type: SET_JURISDICTION,
  payload: jurisdiction,
});

export const getDate = (dateQuery) => (dispatch, getState) => {
  const { calendar: state } = getState();

  // Fetch the day data
  const url = `${apiURL}/api/${state.jurisdiction}/${
    dateQuery ? dateQuery : ""
  }`;
  axios
    .get(url)
    .then((res) => dispatch({ type: GET_DATE, payload: res.data }))
    .catch((err) => console.log(err));
};

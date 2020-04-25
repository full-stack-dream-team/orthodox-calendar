import axios from "axios";
import { SET_JURISDICTION, SET_DAY } from "./types";

const apiURL = "https://orthocal.info";

export function setJurisdiction(jurisdiction) {
  return {
    type: SET_JURISDICTION,
    payload: jurisdiction,
  };
}

export const fetchDay = () => (dispatch, getState) => {
  const { calendar: state } = getState();

  // Fetch the day data
  const url = `${apiURL}/api/${state.jurisdiction}/`;
  axios
    .get(url)
    .then((res) => dispatch({ type: SET_DAY, payload: res.data }))
    .catch((err) => console.log(err));
};

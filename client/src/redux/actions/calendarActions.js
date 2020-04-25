import axios from "axios";
import { REQUEST_DAY, RECEIVE_DAY, SET_JURISDICTION, SET_DAY } from "./types";

const base_url = process.env.BASE_URL || "https://orthocal.info";

function requestDay() {
  return {
    type: REQUEST_DAY,
  };
}

function receiveDay(day, date) {
  return {
    type: RECEIVE_DAY,
    day,
    date,
  };
}

export function setJurisdiction(jurisdiction) {
  return {
    type: SET_JURISDICTION,
    jurisdiction,
  };
}

export const fetchDay = () => (dispatch) => {
  dispatch(requestDay());

  // Fetch the day data
  const url = `${base_url}/api/oca/2020/1/1/`;
  const promise = axios
    .get(url)
    .then((res) => dispatch({ type: SET_DAY, payload: res.data }))
    .catch((err) => console.log(err));

  return promise;
};

import {
  REQUEST_DAY,
  RECEIVE_DAY,
  SET_JURISDICTION,
  SET_DAY,
} from "../actions/types";

const today = new Date();

export const initialState = {
  isFetching: false,
  date: today,
  jurisdiction: "oca",
  day: {
    titles: [],
    feasts: [],
    fast_level: 0,
    fast_level_desc: "",
    fast_exception_desc: "",
    readings: [],
  },
};

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DAY:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_DAY:
      return {
        ...state,
        isFetching: false,
        day: action.day,
        date: action.date,
      };
    case SET_JURISDICTION:
      return {
        ...state,
        jurisdiction: action.jurisdiction,
      };
    case SET_DAY:
      return {
        ...state,
        day: action.day,
      };
    default:
      return state;
  }
};

export default calendarReducer;

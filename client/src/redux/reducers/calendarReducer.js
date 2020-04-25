import { SET_JURISDICTION, SET_DAY } from "../actions/types";

const today = new Date();

export const initialState = {
  isFetching: false,
  date: today,
  jurisdiction: "oca",
  day: {
    // titles: [],
    // feasts: [],
    // fast_level: 0,
    // fast_level_desc: "",
    // fast_exception_desc: "",
    // readings: [],
  },
};

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JURISDICTION:
      return {
        ...state,
        jurisdiction: action.payload,
      };
    case SET_DAY:
      return {
        ...state,
        day: action.payload,
      };
    default:
      return state;
  }
};

export default calendarReducer;

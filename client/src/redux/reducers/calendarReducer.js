import { SET_JURISDICTION, GET_DATE, SET_DATE_QUERY } from "../actions/types";

export const initialState = {
  isFetching: false,
  jurisdiction: "rocor",
  dateQuery: {},
  date: null,
};
// titles: [],
// feasts: [],
// fast_level: 0,
// fast_level_desc: "",
// fast_exception_desc: "",
// readings: [],

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JURISDICTION:
      return {
        ...state,
        jurisdiction: action.payload,
      };
    case SET_DATE_QUERY:
      return {
        ...state,
        dateQuery: action.payload
          ? {
              year: action.payload.year,
              month: action.payload.month,
              day: action.payload.day,
            }
          : {},
      };
    case GET_DATE:
      return {
        ...state,
        date: action.payload,
      };
    default:
      return state;
  }
};

export default calendarReducer;

import { SET_JURISDICTION, GET_DATE } from "../actions/types";

export const initialState = {
  isFetching: false,
  jurisdiction: "oca",
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

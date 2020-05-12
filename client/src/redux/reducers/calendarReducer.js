import {
  SET_JURISDICTION,
  GET_DATE,
  SET_DATE_QUERY,
  GET_RUSSIAN_FAST,
  GET_RUSSIAN_SAINT_LIVES,
  GET_RUSSIAN_INFO,
  GET_OCA_SAINT_LIVES,
} from "../actions/types";

export const initialState = {
  isFetching: false,
  jurisdiction: "oca",
  dateQuery: {},
  date: null,
  russianFast: {
    fastDesc: "",
    allowed: "",
    disallowed: "",
  },
  russianSaintLives: "",
  russianInfo: "",
  ocaSaintLives: [],
};

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
    case GET_RUSSIAN_FAST:
      return {
        ...state,
        russianFast: action.payload,
      };
    case GET_RUSSIAN_SAINT_LIVES:
      return {
        ...state,
        russianSaintLives: action.payload,
      };
    case GET_RUSSIAN_INFO:
      return {
        ...state,
        russianInfo: action.payload,
      };
    case GET_OCA_SAINT_LIVES:
      return {
        ...state,
        ocaSaintLives: action.payload,
      };
    default:
      return state;
  }
};

export default calendarReducer;

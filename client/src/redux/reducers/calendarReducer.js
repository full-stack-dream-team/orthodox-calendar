import {
  SET_JURISDICTION,
  GET_DATE,
  SET_DATE_QUERY,
  GET_ROC_FAST,
  GET_ROC_SAINTS,
  GET_OCA_SAINTS,
} from "../actions/types";

export const initialState = {
  isFetching: false,
  jurisdiction: "oca",
  dateQuery: {},
  date: null,
  rocFast: {
    fastDesc: "",
    allowed: "",
    disallowed: "",
  },
  rocSaintLives: [],
  ocaSaints: [],
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
    case GET_ROC_FAST:
      return {
        ...state,
        rocFast: action.payload,
      };
    case GET_ROC_SAINTS:
      return {
        ...state,
        rocSaintLives: action.payload,
      };
    case GET_OCA_SAINTS:
      return {
        ...state,
        ocaSaints: action.payload,
      };
    default:
      return state;
  }
};

export default calendarReducer;

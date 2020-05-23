import {
  SET_JURISDICTION,
  GET_DATE,
  SET_DATE_QUERY,
  GET_ROC_INFO,
  GET_OCA_SAINTS,
  RESET_SAINTS,
} from "../actions/types";

export const initialState = {
  isFetching: false,
  jurisdiction: "oca",
  dateQuery: {},
  date: null,
  rocInfo: {
    fast: {
      fastDesc: "",
      allowed: "",
      disallowed: "",
    },
    saints: [],
    feastDay: [],
  },
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

    case GET_ROC_INFO:
      return {
        ...state,
        rocInfo: action.payload
          ? {
              feastDay: action.payload.feastDay,
              saints: action.payload.saints,
              fast: action.payload.fast,
            }
          : {},
      };

    case GET_OCA_SAINTS:
      return {
        ...state,
        ocaSaints: action.payload,
      };
    case RESET_SAINTS:
      return {
        ...state,
        ocaSaints: initialState.ocaSaints,
        rocInfo: initialState.rocInfo,
      };
    default:
      return state;
  }
};

export default calendarReducer;

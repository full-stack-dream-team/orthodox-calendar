import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../../helpers/setAuthToken";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING,
} from "../../constants/actionTypes/index";

export const getErrors = (err) => ({
  type: GET_ERRORS,
  payload: err.response && err.response.data ? err.response.data : err,
});

// Set logged in user
export const setCurrentUser = (decoded) => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});

// User loading
export const setUserLoading = () => ({ type: USER_LOADING });

// Register User
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post("/api/users/register", userData)
    .then((res) => history.push("/login"))
    .catch((err) => {
      // console.log(err.response.data);
      dispatch(getErrors(err));
    });
};

// Login - get user token
export const loginUser = (userData) => (dispatch) => {
  axios
    .post("/api/users/login", userData)
    .then((res) => {
      // Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);

      // Set token to Auth header
      setAuthToken(token);

      // Decode token to get user data
      const decoded = jwt_decode(token);

      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => dispatch(getErrors(err)));
};

// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from storage
  localStorage.removeItem("jwtToken");

  // Remove auth header
  setAuthToken(false);

  // Set current user to empty object which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

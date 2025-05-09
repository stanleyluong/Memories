import * as api from "../api/index";
import { AUTH } from "../constants/actionTypes";

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    if (data?.token) {
      api.setAxiosAuthHeader(data.token);
    }
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.log("Sign in error:", error.response?.data?.message || error.message);
    api.setAxiosAuthHeader(null);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    if (data?.token) {
      api.setAxiosAuthHeader(data.token);
    }
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.log("Sign up error:", error.response?.data?.message || error.message);
    api.setAxiosAuthHeader(null);
  }
};

import axios from "axios";
import { LOGIN_STUDENT, REGISTER_STUDENT, SET_LOADING } from "../constants/actionTypes";
import {
  LOGIN_USER,
  LOGOUT,
  GET_AUTH_USER,
  AUTH_ERROR,
} from "../constants/actionTypes";
import { getStudents } from "./studentActions";

// register student
export const register = (formData) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await axios.post("/api/student/addStudent", formData);
    dispatch({
      type: REGISTER_STUDENT,
      payload: res.data, //{ msg: "Login success", user ,token}
    });
    dispatch(getStudents())
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// login user
export const login = (FormData) => async (dispatch) => {
  dispatch(setLoading());
  try {
    
    if(FormData.type==='admin'){
      const res = await axios.post("/api/auth/login", FormData);
        dispatch({
      type: LOGIN_USER,
      payload: res.data, //{ msg: "Login success", user ,token}
    });}else if(FormData.type==='student'){
      const res = await axios.post("/api/student/loginStudent", FormData);
    dispatch({
      type: LOGIN_STUDENT,
      payload: res.data, //{ msg: "Login success", student ,token}
    })}
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// get auth user
export const getAuthUser = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const option = {
      headers: { "authorization": localStorage.getItem("token") },
    };
    const res = await axios.get("/api/auth/me", option);
    dispatch({
      type: GET_AUTH_USER,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

const setLoading = () => (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
};

import axios from "../@helpers/axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getUser = (options = {}) => {
  return axios.get(`${API_URL}/auth/from-token`, options);
};

export const signIn = (data, options = {}) => {
  return axios.post(`${API_URL}/auth/sign-in`, data, options);
};

import axios from "../@helpers/axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getPresenceData = (options = {}) => {
  return axios.get(`${API_URL}/statistics/presence`, options);
};

export const getNoteData = (data, options = {}) => {
  return axios.get(`${API_URL}/statistics/success`, data, options);
};

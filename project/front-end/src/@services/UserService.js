import axios from "../@helpers/axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getAllAdmins = (options = {}) => {
  return axios.get(`${API_URL}/admins`, options);
};

export const getAllTeachers = (options = {}) => {
  return axios.get(`${API_URL}/users/teacher`, options);
};

export const getAllStudents = (options = {}) => {
  return axios.get(`${API_URL}/users/student`, options);
};

export const deleteAdmin = (email, options = {}) => {
  return axios.delete(`${API_URL}/admins/${email}`, options);
};

export const deleteUser = (email, options = {}) => {
  return axios.delete(`${API_URL}/users/${email}`, options);
};

export const addAdmin = (user, options = {}) => {
  return axios.post(`${API_URL}/admins`, { user }, options);
};

export const addStudent = (user, options = {}) => {
  return axios.post(`${API_URL}/users/student`, { user }, options);
};

export const addTeacher = (user, options = {}) => {
  return axios.post(`${API_URL}/users/teacher`, { user }, options);
};

export const getUserById = (email, options = {}) => {
  return axios.get(`${API_URL}/users/${email}`, options);
};

export const updateAdmin = (email, user, options = {}) => {
  return axios.put(`${API_URL}/admins/${email}`, { user }, options);
};

export const updateStudent = (email, user, options = {}) => {
  return axios.put(`${API_URL}/users/student/${email}`, { user }, options);
};

export const updateTeacher = (email, user, options = {}) => {
  return axios.put(`${API_URL}/users/teacher/${email}`, { user }, options);
};

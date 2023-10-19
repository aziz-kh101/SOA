const TOKEN = "access_token";

export const getToken = () => {
  return localStorage.getItem(TOKEN);
};

export const setToken = (token_value) => {
  return localStorage.setItem(TOKEN, token_value);
};

export const removeToken = () => {
  return localStorage.removeItem(TOKEN);
};

import axios from "axios";

const api = axios.create({
  baseURL: "http://54.94.39.34:3333",
});

const AUTH_TOKEN = sessionStorage.getItem("auth_token")

api.defaults.headers.common[`Authorization`] = AUTH_TOKEN
  ? `Bearer ${AUTH_TOKEN}`
  : "";

export default api;

export const apiCEP = axios.create({
  baseURL: "https://viacep.com.br/ws",
});

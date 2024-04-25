import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { setCookie, getCookie, deleteCookie, hasCookie } from "cookies-next";

const API_URL = "https://dummyjson.com/";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  },
  timeout: 2000, 
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken: string = getCookie("token") || "";
    const token: string | null = JSON.parse(accessToken);
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      alert("You are not authorized");
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  }
);

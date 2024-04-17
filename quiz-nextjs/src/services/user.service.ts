import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { UserLogin } from "../types/user";
import { setCookie, getCookie, deleteCookie, hasCookie } from "cookies-next";

const API_URL = "https://dummyjson.com/auth/";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
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


export async function LoginSample(
  email: string | undefined,
  password: string | undefined
) {
  try {
    const response = await axios.post<UserLogin>(
      `${API_URL}login`,
      {
        username: email,
        password: password,
        expiresInMins: 30,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    // throw error;
  }
}

export async function getCurrentUser() {
  const accessToken: string = getCookie("token") || "";
  const token: string | null = JSON.parse(accessToken);
  try {
    const response = await axiosInstance.get<UserLogin>("/me");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function refreshToken() {
    const accessToken: string = getCookie("token") || "";
    const token: string | null = JSON.parse(accessToken);

  try {
    const response = await axiosInstance.post("refresh",
      {
        expiresInMins: 30,
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

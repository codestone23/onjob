import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { setCookie, getCookie, deleteCookie, hasCookie } from "cookies-next";
// import { refreshToken } from "../user/user.service";
// import { setUserLogin } from "@/stores/slices/account";
import { jwtDecode } from "jwt-decode";
import { useQuery } from "react-query";
import { useRouter } from "next/navigation";

const API_URL = "https://dummyjson.com/";
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
  timeout: 2000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token: string = JSON.parse(getCookie("token") || "");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      return config;
    } else {
      console.log("Token or expiration time not found");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalConfig = error.config;
//     if (error.response.status !== 401) {
//       return Promise.reject(error);
//     }
//     const refreshToken = JSON.parse(getCookie("refreshToken") || "");
//     if (!refreshToken) {
//       logout();
//       return Promise.reject(error);
//     }
//     try {
//       const response = await axios.post(
//         `${API_URL}/auth/refresh`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${refreshToken}`,
//           },
//         }
//       );
//       console.log(response);
//       if (response.status === 200) {
//         const data = response.data.data;
//         setCookie("token", data.token, {
//           maxAge: 60 * 60,
//         });
//         originalConfig.headers.Authorization = `Bearer ${data.token}`;
//         return axios(originalConfig);
//       } else {
//         logout();
//         return Promise.reject(error);
//       }
//     } catch (refreshError) {
//       logout();
//       return Promise.reject(refreshError);
//     }
//   }
// );

const logout = () => {
  const router = useRouter();
  localStorage.removeItem("user");
  localStorage.removeItem("remember");
  router.push("/login", { scroll: false });
};
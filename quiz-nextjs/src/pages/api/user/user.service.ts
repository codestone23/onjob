import axios from "axios";
import { UserLogin, UserResponse } from "../../../types/user";
import { axiosInstance } from "../axios";
import { getCookie } from "cookies-next";

const API_URL = "https://dummyjson.com/auth/";

export async function LoginSample(
  email: string | undefined,
  password: string | undefined
) {
  try {
    const response = await axios.post<UserResponse>(
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

    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function getCurrentUser() {
  try {
    const response = await axiosInstance.get<UserLogin>("/auth/me");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function refreshToken() {
  const token: string = JSON.parse(getCookie("token") || "");
  try {
    const response = await axios.post(`${API_URL}refresh`,
      {
        expiresInMins: 30,
      },{
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`, 
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function getProducts() {
  try{
    const response = await axiosInstance.get("/products");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

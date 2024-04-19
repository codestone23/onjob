import axios from "axios";
import { UserLogin, UserResponse } from "../../../types/user";
import { axiosInstance } from "../axios";

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
    const response = await axiosInstance.get<UserLogin>("/me");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function refreshToken() {
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

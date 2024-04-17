import axios from "axios";
import { UserLogin } from "../types/user";
import { setCookie, getCookie, deleteCookie, hasCookie } from "cookies-next";

const API_URL = "https://dummyjson.com/auth/";

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
    const response = await axios.get<UserLogin>(`${API_URL}me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
    const response = await axios.post<UserLogin>(
      `${API_URL}refresh`,
      {
        expiresInMins: 30,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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

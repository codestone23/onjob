import Router from "next/router";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { setCookie, getCookie, deleteCookie, hasCookie } from "cookies-next";
import "../config/i18n";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { GetStaticPropsContext } from "next";
import { jwtDecode } from "jwt-decode";
import { differenceInHours } from "date-fns";
import { refreshToken } from "./api/user/user.service";
import { useSelector, useDispatch } from "react-redux";
import { setUserLogin } from "@/stores/slices/account";

export default function Home(props: any) {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      try {
        const token = getCookie("token");
        if (token) {
          router.push("/dashboard", { scroll: false });
        } else {
          const { pathname } = Router;
          if (pathname == "/") {
            router.push("/login", { scroll: false });
          }
        }
      } catch (error) {
        router.push("/login", { scroll: false });
        console.error("Error:", error);
      }
    }
    fetchData();
  }, [props]);
  useEffect(() => {
    const interval = setInterval(async () => {
      const now = Date.now();
      const token: string = JSON.parse(getCookie("token") || "");
      const decoded = jwtDecode(token);
      if (decoded && decoded.exp) {
        const expiresAt = new Date(decoded.exp * 1000).getTime();
        console.log(expiresAt);
        console.log(now);
        console.log(differenceInHours(expiresAt, now));
        const date = new Date(expiresAt - now).getTime();
        console.log(date / ( 1000 * 60));
        if (date < 5) {
          refreshToken().then((response) => {
            console.log(response);
            if (response) {
              setCookie("token", JSON.stringify(response.token), {
                maxAge: 60 * 60 * 10,
              });
              dispatch(setUserLogin(response));
              router.push("/dashboard", { scroll: false });
            }
            return response;
          });
        }
      } else {
        console.log("Token or expiration time not found");
      }
    }, 1000 * 60 * 4);
    return () => clearInterval(interval);
  }, []);

  return "";
}

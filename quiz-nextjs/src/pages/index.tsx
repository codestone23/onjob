import Head from "next/head";
import styles from "../styles/Home.module.css";
import Router from "next/router";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { getCurrentUser, refreshToken } from "./api/user/user.service";
import { setCookie, getCookie, deleteCookie, hasCookie } from "cookies-next";
import "../config/i18n";

export default function Home(props: any) {
  const router = useRouter();
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

  return "";
}

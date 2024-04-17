import Head from "next/head";
import styles from "../styles/Home.module.css";
import Router from "next/router";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { getCurrentUser, refreshToken } from "../services/user.service";
import { setCookie, getCookie, deleteCookie, hasCookie } from "cookies-next";

export default function Home(props: any) {
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        // const data = await getCurrentUser();
        // if(data) {
        //     refreshToken().then((response) => {
        //         setCookie("token",response?.token);
        //         localStorage.setItem("user", JSON.stringify(response));
        //     })
        //     router.push('/dashboard', { scroll: false });
        // }else{
        //   const { pathname } = Router;
        //   if (pathname == '/') {
        //     router.push('/login', { scroll: false })
        //   }
        // }
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

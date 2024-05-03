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

  return "";
}

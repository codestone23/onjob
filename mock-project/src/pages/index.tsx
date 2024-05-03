import Router from "next/router";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { setCookie, getCookie, deleteCookie, hasCookie } from "cookies-next";

export default function Home(props: any) {
  const router = useRouter();
  useEffect(() => {
    async function fetchData() {
      try {
        const token = getCookie("token");
        if (token) {
          router.push("/", { scroll: false });
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

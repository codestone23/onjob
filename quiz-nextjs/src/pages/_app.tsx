import "@/styles/globals.css";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import ErrorBoundary from "../utils/ErrorBoundary";
import { CookiesProvider } from "react-cookie";
import React, { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={{ hashed: false }}>
      <CookiesProvider>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </CookiesProvider>
    </ConfigProvider>
  );
}

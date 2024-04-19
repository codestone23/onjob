import "@/styles/globals.css";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import ErrorBoundary from "../utils/ErrorBoundary";
import { CookiesProvider } from "react-cookie";
import React, { useEffect } from "react";
import "../config/i18n";
import { PersistGate } from "redux-persist/integration/react";
import { wrapper } from "../stores/store";
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../stores/store';

function App({ Component, pageProps }: AppProps) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }
  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={storeRef.current.__persistor}>
        <ConfigProvider theme={{ hashed: false }}>
          <CookiesProvider>
            <ErrorBoundary>
              <Component {...pageProps} />
            </ErrorBoundary>
          </CookiesProvider>
        </ConfigProvider>
      </PersistGate>
    </Provider>
  );
}

export default wrapper.withRedux(App);

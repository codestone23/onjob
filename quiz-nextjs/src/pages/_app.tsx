import "@/styles/globals.css";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import ErrorBoundary from "../utils/ErrorBoundary";
import { CookiesProvider } from "react-cookie";
import React, { useEffect } from "react";
import "../config/i18n";
import { PersistGate } from "redux-persist/integration/react";
import { wrapper } from "../stores/store";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../stores/store";
import { appWithTranslation } from "next-i18next";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 300000, 
      staleTime: 60000, 
      refetchOnWindowFocus: false, 
      retry: 3,
    },
    mutations: {
      throwOnError: true, 
    },
  },
});


function App({ Component, pageProps }: AppProps) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default wrapper.withRedux(appWithTranslation(App));

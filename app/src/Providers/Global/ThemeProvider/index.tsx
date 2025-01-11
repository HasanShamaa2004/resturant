"use client";

// Dependencies
import { useState, useEffect, useMemo } from "react";

// Providers
import MaterialUiProvider from "../MaterialUiProvider";

// Services
import ThemeManager from "../../../Services/ThemeManager";

// Global Assets
import { RPO } from "../../../types/vite";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotificationProvider from "../NotificationProvider";
import { Provider } from "react-redux";
import { store } from "@/app/Components/Redux/store";
import { I18nProvider } from "../I18nProvider/I18nProvider";
const ThemeProvider: RPO = ({ children }) => {
  const [load, setLoad] = useState<boolean>(false);
  const themeManager = useMemo(() => new ThemeManager(), []);
  const queryClient = new QueryClient();
  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        await themeManager.loadStoredTheme();
        if (isMounted) {
          setLoad(true);
        }
      } catch (error) {
        console.error("Error loading theme:", error);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [themeManager]);

  return (
    <Provider store={store}>
      <I18nProvider>
        <MaterialUiProvider>
          <NotificationProvider>
            <QueryClientProvider client={queryClient}>
              {load && children}
            </QueryClientProvider>
          </NotificationProvider>
        </MaterialUiProvider>
      </I18nProvider>
    </Provider>
  );
};

export default ThemeProvider;

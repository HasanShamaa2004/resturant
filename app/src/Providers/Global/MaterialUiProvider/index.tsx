"use client";
// Providers
import { ThemeProvider } from "@material-tailwind/react";

const MaterialUiProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default MaterialUiProvider;

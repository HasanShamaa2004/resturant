"use client";
import localFont from "next/font/local";
import ThemeProvider from "./src/Providers/Global/ThemeProvider";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import Head from "next/head";
import Footer from "./Components/Footer/Footer";

const rosario = localFont({
  src: [
    {
      path: "./fonts/Rosario-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Rosario-SemiBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Rosario-Bold.ttf",
      weight: "bold",
      style: "normal",
    },
  ],
  variable: "--font-rosario",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Head>
        <title>Qasr</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Welcome to Qasr" />
      </Head>

      <body className={`${rosario.variable} antialiased bg-background`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

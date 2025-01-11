"use client";

import { useEffect } from "react";
import ServerError from "./Components/ServerError/ServerError";
import NoInternet from "./Components/NoInternet/NoInternet";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  // Check if it's a 500 error
  const is500 =
    error?.message?.includes("500") || error?.digest?.includes("500");

  if (is500) {
    return <ServerError />;
  }

  return <NoInternet />;
}

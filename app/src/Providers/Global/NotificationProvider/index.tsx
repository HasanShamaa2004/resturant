"use client";

// Dependencies
import { ToastContainer } from "react-toastify";

// Styles
import "react-toastify/dist/ReactToastify.css";

// Types
import { ToastOptions } from "react-toastify";
import { RPO } from "@/app/src/types/vite";

const NotificationProvider: RPO<{
  options?: ToastOptions;
}> = ({ children, options }) => {
  const toastsOptions: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme: "light",
    ...(options ?? {}),
  };

  return (
    <>
      {children}
      <ToastContainer {...toastsOptions} />
    </>
  );
};

export default NotificationProvider;

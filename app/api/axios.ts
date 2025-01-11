import axios from "axios";
import i18n from "../i18n/i18n";
export const apiUrl = process.env.VITE_BASEURL;

export const Axios = axios.create({
  baseURL: apiUrl,
});

Axios.interceptors.request.use(
  (config) => {
    const currentLanguage = i18n.language || "en"; 
    config.headers["Accept-Language"] = currentLanguage;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

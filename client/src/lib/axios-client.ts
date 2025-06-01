import { CustomError } from "@/types/custom-error.type";
import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const options = {
  baseURL,
  withCredentials: true,
  timeout: 10000,
};

const API = axios.create(options);

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    // ✅ Ensure error.response exists to prevent runtime errors
    if (!error.response) {
      console.error("Network error:", error);
      return Promise.reject({ errorCode: "NETWORK_ERROR", message: "Network request failed." });
    }

    const { data, status, config } = error.response;

    // ✅ Prevent redirect loops by checking request URL
    const isAuthEndpoint = config.url?.includes("/auth");

    if (status === 401 && data === "Unauthorized" && !isAuthEndpoint) {
      console.warn("User session expired. Redirecting to login...");
      window.location.href = "/"; // Redirect only if accessing protected routes
    }

    // ✅ Include custom error code for improved debugging
    const customError: CustomError = {
      ...error,
      errorCode: data?.errorCode || "UNKNOWN_ERROR",
    };

    return Promise.reject(customError);
  }
);

export default API;

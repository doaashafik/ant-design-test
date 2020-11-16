import axios from "axios";
import { SuccessHandler, ErrorHandler } from "../Interceptors";
export const Instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  params: { key: process.env.REACT_APP_GOOGLE_API_KEY },
});
Instance.interceptors.response.use(
  (response) => SuccessHandler(response),
  (error) => ErrorHandler(error)
);

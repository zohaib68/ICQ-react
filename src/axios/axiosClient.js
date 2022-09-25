import axios from "axios";
import { errorToast, successToast } from "../utils/utils";

export const axiosClient = axios.create();

const baseUrl = "http://localhost:7000/";

axiosClient.defaults.baseURL = baseUrl;

axiosClient.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
axiosClient.interceptors.response.use(
  function (response) {
    successToast("success");
    return response;
  },
  function (error) {
    if (error?.name === "CanceledError") {
      return null;
    } else {
      errorToast("error");
    }

    return Promise.reject(error);
  }
);

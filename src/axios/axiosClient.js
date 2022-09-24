import axios from "axios";

export const axiosClient = axios.create();

const baseUrl =
  "https://5fd2-2400-adc7-1118-9300-3177-5838-5b1c-4ad3.ngrok.io/";

axiosClient.defaults.baseURL = baseUrl;

axiosClient.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
axiosClient.interceptors.response.use(
  function (response) {
    alert("success");
    return response;
  },
  function (error) {
    if (error?.name === "CanceledError") {
      return null;
    } else {
      alert("error");
    }

    return Promise.reject(error);
  }
);

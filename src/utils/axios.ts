import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://dog.ceo/api/",
});

export default axiosInstance;

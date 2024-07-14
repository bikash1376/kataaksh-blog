import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://kataaksh-backend.onrender.com", // the base URL of your backend API
});

export default axiosInstance;

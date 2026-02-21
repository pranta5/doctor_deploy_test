import axios from "axios";

const axios_instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export default axios_instance;

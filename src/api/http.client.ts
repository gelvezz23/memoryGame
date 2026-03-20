import axios from "axios";
import { managerTokenStorage } from "../utils/managerToken";

const apiClient = axios.create({
  baseURL: "https://rickandmortyapi.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token = managerTokenStorage.getToken();
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;

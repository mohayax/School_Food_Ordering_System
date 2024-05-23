import axios from "axios";
import { store } from "../store/store";

const API_URL = 'http://127.0.0.1:8000/api/'

const axiosInstance = axios.create({
    baseURL: API_URL,
})


axiosInstance.interceptors.request.use(
    (config) => {
    const state = store.getState();
    const token = state.auth.accessToken;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    }, 
    (error) => {
        return Promise.reject(error);
    }
)

export default axiosInstance;
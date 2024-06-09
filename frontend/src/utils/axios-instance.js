import axios from "axios";
import { toast } from "react-toastify";


const API_URL = 'http://127.0.0.1:8000/api/'

const api = axios.create({
    baseURL: API_URL,
})


api.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      window.localStorage.removeItem('accessToken');
      window.location.href = '/login'
      toast.error('Session expired. Please log in again.'); 
    }
    return Promise.reject(error);
  }
);

export default api;
import axios from "axios";


const API_URL = 'http://127.0.0.1:8000/api/'

const axiosInstance = axios.create({
    baseURL: API_URL,
})


// axiosInstance.interceptors.request.use(
//     (config) => {
//     const state = store.getState();
//     const token = state.auth.accessToken;
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     }, 
//     (error) => {
//         return Promise.reject(error);
//     }
// )
export const setupAxiosInterceptors = (token) => {
    axiosInstance.interceptors.request.use(
      (config) => {
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  };


export default axiosInstance;
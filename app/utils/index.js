import axios from 'axios';
import { apiEndpoint } from "./config";
import Auth from '../localStorege';


const axiosInstance = axios.create({
    baseURL: `${apiEndpoint}`,
    timeout: 50000
  });

  axiosInstance.interceptors.request.use(
    config => {
      const token = Auth.getToken();
  
      if (token) {
        config.headers.authorization = `Bearer ${token}`; // eslint-disable-line
      }
      return config;
    },
    error => Promise.reject(error)
  );
  
  export default axiosInstance;
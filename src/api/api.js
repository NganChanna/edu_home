import axios from 'axios';
import { ACCESS_TOKEN } from '../constants/constants';
import environment from '../environments/environment';

const api = axios.create({
    baseURL: environment.api_url || ""
})

api.interceptors.request.use( 
    (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);

    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default api;
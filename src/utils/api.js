import axios from 'axios';
import { useAuthStore } from './authStore';

const baseURL = 'http://localhost:8000/api/v1'

const authStore = useAuthStore()
const api = axios.create({
    baseURL,
    timeout: 10000,
    headers: { 'X-Custom-Header': 'foobar' }
});

api.interceptors.request.use(function (config) {
    config.headers.Authorization = authStore.getToken()
    return config;
}, function (error) {
    return Promise.reject(error);
});

export {
    api,
    baseURL
}
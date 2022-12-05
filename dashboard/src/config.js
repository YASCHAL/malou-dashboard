import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://malou-dashboard-production.up.railway.app/api/"
});
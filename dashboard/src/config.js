import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://malou-dashboard-dz.herokuapp.com/api/"
});
// axiosInstance.ts or axios.js
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://maina-and-kids-backend.onrender.com/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;

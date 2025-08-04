// axiosInstance.ts or axios.js
import axios from "axios";

const origin = "https://maina-and-kids-backend.onrender.com";
const axiosInstance = axios.create({
    baseURL: `${origin}/api`,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;

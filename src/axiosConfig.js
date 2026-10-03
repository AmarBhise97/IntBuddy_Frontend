import axios from "axios";

export const API_BASE_URL = import.meta.env.VITE_API_URL || "/api";

const api = axios.create({
    baseURL: API_BASE_URL,
});

api.interceptors.request.use(
    (config) => {

        if (config.data instanceof FormData) {

            delete config.headers["Content-Type"];

        } else {

            config.headers["Content-Type"] =
                "application/json";
        }

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);

export default api;
import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// interceptor cho request
http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // luôn lấy mới mỗi lần gửi request
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default http;

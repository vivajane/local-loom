import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, 
});

console.log("API Base URL:", process.env.NEXT_PUBLIC_API_BASE_URL);
export default api;

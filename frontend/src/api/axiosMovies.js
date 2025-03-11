import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const moviesInstance = axios.create({
  baseURL: `${API_URL}/movies`,
  withCredentials: true,
});

export default moviesInstance;

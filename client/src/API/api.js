import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5500/api", 
  withCredentials: true
});

export default API;

import axios from "axios";

const API = axios.create({
  baseURL: "http://https://portfolio-wyuo.onrender.com/api/v1",
  withCredentials: true,
});

export default API;

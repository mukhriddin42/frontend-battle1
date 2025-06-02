import axios from "axios";

export const api = axios.create({
  baseURL: "https://nt-shopping-list.onrender.com/api",
});

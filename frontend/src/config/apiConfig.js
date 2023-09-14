import axios from "axios";

export const BASE_URL = "http://localhost:8888";
const jwt = localStorage.getItem("jwt");

export const api = axios.create({
   baseURL: BASE_URL,
   headers:{
    "Authorization": `Bearer ${jwt}`,
    "Content-Type" : 'application/json'
   }
   
})
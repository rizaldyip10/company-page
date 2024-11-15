import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8000/api";


export default axios.create({
    baseURL: API_URL
});
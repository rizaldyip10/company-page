import axios from "axios";

const API_URL = "https://jade-squirrel-belt.cyclic.app/api/";


export default axios.create({
    baseURL: API_URL
});
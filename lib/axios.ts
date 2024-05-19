import axios from "axios"

const API_URL = "https://randomuser.me/api"


export default axios.create({
    baseURL: API_URL
})
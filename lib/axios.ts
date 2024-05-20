import axios from "axios";

const API_URL = "https://kukilabs.id/api/rizaldi-api.php";


export default axios.create({
    baseURL: API_URL
});
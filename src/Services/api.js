import axios from "axios";

const api = axios.create({
    baseURL: 'http://10.100.15.226:3333'
})

export default api;
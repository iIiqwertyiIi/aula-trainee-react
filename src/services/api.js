import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3001/api/v1'
})

export const photo = axios.create({
    baseURL: 'http://localhost:3001'
})
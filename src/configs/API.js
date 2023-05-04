import axios from "axios";
import cookie from "react-cookies";

export const endpoints = {
    'courses': '/courses/',
    'mark': '/mark/',
    'users':'/users/',
    'upload':'/upload/',
    'export':'/export/',
    'register':'/register/'
}

export const authAPI = () => axios.create({
    baseURL: "http://latrunghieuvt1.pythonanywhere.com/",
    //baseURL: "http://127.0.0.1:8000/",
    headers: {
        "Authorization": `Bearer ${cookie.load('access-token')}`
    }
})

export default axios.create({
    // baseURL: "http://latrunghieuvt1.pythonanywhere.com/"
    baseURL: "http://127.0.0.1:8000/",
})

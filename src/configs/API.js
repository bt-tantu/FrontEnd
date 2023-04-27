import axios from "axios";
import cookie from "react-cookies";

export const endpoints = {
    'courses': '/courses/',
    'mark': '/mark/',
    'users':'/users/',
    'upload':'/upload/'
}

export const authAPI = () => axios.create({
    baseURL: "http://latrunghieuvt1.pythonanywhere.com/",
    headers: {
        "Authorization": `Bearer ${cookie.load('access-token')}`
    }
})

export default axios.create({
    baseURL: "http://latrunghieuvt1.pythonanywhere.com/"
})

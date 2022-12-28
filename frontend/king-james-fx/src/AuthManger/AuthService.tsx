import axios from 'axios'

const URI = "http://localhost:8000";
const API_URL = `${URI}/users`;

// register user
const register = async (userData:UserObject) => {
    const res = await axios.post(API_URL, userData)

    if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data))
    }

    return res.data
}

 export const authService = {
    register,
};



export interface UserObject {
    userName: string;
    fullName: string;
    email: string;
    password: string;
    country: string;
    btc: string;
    eth: string;
    usdt: string;
    confirmPassword: string;
    inviteCode: string;
}
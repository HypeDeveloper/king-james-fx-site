import axios from 'axios'

const URI = "http://localhost:8000";
const API_URL = `${URI}/users/`;

// register user
const register = async (userData:UserSignUp) => {
    const res = await axios.post(API_URL, userData)

    if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data))
    }

    return res.data
}
const login = async (userData: UserSignIn) => {
    const res = await axios.post(API_URL+'login', userData);

    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

const logout = () => {
    localStorage.removeItem('user')
}



 export const authService = {
     register,
     login,
     logout,
 };

export interface UserSignIn {
    email: string;
    password: string;
}

export interface UserSignUp {
    fullname: string;
    username: string;
    email: string;
    country: string;
    password: string;
    inviteRefCode: string;
}
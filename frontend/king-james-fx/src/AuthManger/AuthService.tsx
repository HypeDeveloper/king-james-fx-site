import axios from 'axios'

const URI = "http://localhost:8000";
const API_URL = `${URI}/users/`;
const API_URL_ADMIN = `${URI}/useadminrs/`;

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
const getLogedInUser =  () => {
    let logedUser;
    try {
        logedUser = JSON.parse(localStorage.getItem("user") || ""); 
        return logedUser;
    } catch (err) {
        console.log(err);
        logedUser =  null
        return logedUser;
    }  
    
};
const logout = () => {
    localStorage.removeItem('user')
}
const token = async (userData: {token: string}) => {
    const res = await axios.post( API_URL_ADMIN + "login", userData);

    return res.data;
};



 export const authService = {
     register,
     login,
     logout,
     getLogedInUser,
     token,
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
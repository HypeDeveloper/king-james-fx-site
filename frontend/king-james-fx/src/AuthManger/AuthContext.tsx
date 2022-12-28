import { createContext, useContext, useEffect, useState } from "react";
import {authService, UserObject } from "./AuthService"; 
const AuthContext = createContext({})

const useAuth = () => useContext(AuthContext)

const AuthContextProvider = ({ children }: any) => {
    const [isLoading, setLoading] =useState(false)
    const [isSuccess, setSuccess] = useState(false);
    const [user, setUser] =useState(null)
    const [message, setMessage] = useState<any>();

    useEffect(() => {
        const localData = localStorage.getItem("user") || "";
        const logedUser = JSON.parse(JSON.stringify(localData));
        setUser(logedUser ? logedUser : null);
    }, [user]);



    async function RegisterUser(user: UserObject) {
        setLoading(true)
        await authService.register(user).then(() => {
            Reset();
            setSuccess(true);
            console.log('Sign up Valid');
            
        }).catch((err) => {
            console.log(err);
            setMessage(err)
        });
    }
    
    function Reset() {
        setLoading(false)
        setMessage('');
    }

    const AuthValues = {
        isLoading,
        user,
        message,
        isSuccess,
        RegisterUser,
        Reset,

    };
    return (
        <AuthContext.Provider value={AuthValues}>
            {children}
        </AuthContext.Provider>
    );
};


export interface Auth {
    isLoading?: boolean;
    user?: null;
    message?: any;
    isSuccess?: boolean;
    RegisterUser?: (user: UserObject) => Promise<void>;
    Reset?: () => void;
}
export { AuthContextProvider, useAuth};

import { createContext, useContext, useEffect, useState } from "react";
import { authService, UserSignIn, UserSignUp } from "./AuthService";
const AuthContext = createContext({});

const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }: any) => {
    const [isLoading, setLoading] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState<any>();

    useEffect(() => {
        const localData = localStorage.getItem("user") || "";
        const logedUser = JSON.parse(JSON.stringify(localData));
        setUser(logedUser ? logedUser : null);
        console.log(user);
    }, [user]);

    async function RegisterUser(user: UserSignUp) {
        setLoading(true);
        await authService
            .register(user)
            .then(() => {
                setSuccess(true);
                console.log("Sign up Valid: You have been registered");
            })
            .catch((err) => {
                console.log(err);
                setMessage(err);
            });
    }

    const AuthUser = async (user: UserSignIn) => {
        setLoading(true);
         await authService
             .login(user)
             .then(() => {
                 setSuccess(true);
                 console.log("Sign In Valid");
             })
             .catch((err) => {
                 console.log(err);
                 setMessage(err);
             });
   };

    function Reset() {
        setLoading(false);
        setSuccess(false);
        setMessage("");
    }

    const AuthValues = {
        isLoading,
        user,
        message,
        isSuccess,
        RegisterUser,
        AuthUser,
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
    RegisterUser?: (user: UserSignUp) => Promise<void>;
    AuthUser?: (user: UserSignIn) => Promise<void>;
    Reset?: () => void;
}
export { AuthContextProvider, useAuth};

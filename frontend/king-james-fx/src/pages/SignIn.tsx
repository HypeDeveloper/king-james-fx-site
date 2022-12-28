import { useState } from "react";
import {NavBar } from "./Home"

export function SignIn() {
    const [loginData, setLogInData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = loginData;

    const onChange = (e: any) => {
        setLogInData((prevState) => ({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }
    
    
    

    return (
        <>
        <NavBar/>
        <div className="sign">
            
            <div className="signWrap">
                <div className="SignIn">
                    <h1>Account Login</h1>
                        <form
                        className="SignBox"
                        id="SignIn-Form"
                    >
                        <img src="" alt="" />
                        <p>Sign into your account</p>
                        <div className="wrapInput">
                            <input
                                type="email"
                                name="email"
                                id="Email Address"
                                placeholder="Email Address"
                                required
                                onChange={onChange}
                            />
                        </div>
                        <div className="wrapInput">
                            <input
                                type="password"
                                name="password"
                                id="Password"
                                placeholder="Password"
                                required
                                onChange={onChange}
                            />
                            <a href="#">Forgot Password</a>
                        </div>
                        <button type="submit">Login</button>
                        <p className="bottomText">
                            Don't have an Account yet?{" "}
                            <a href="/signUp" className="formLink">
                                Create Account
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}


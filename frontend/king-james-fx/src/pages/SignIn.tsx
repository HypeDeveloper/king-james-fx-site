import { useRef } from "react";
import {NavBar } from "./Home"

export function SignIn() {
    const userForm:any = useRef()
    function handleSignIn(e:any) {
        e.preventDefault();
        const Email = document.getElementById("Email Address"),
            Password = document.getElementById("Password");

        const userData = {
            e: Email?.textContent,
            p: Password?.textContent,
        };

        console.log(userData);
    }

    return (
        <>
        <NavBar/>
        <div className="sign">
            
            <div className="signWrap">
                <div className="SignIn">
                    <h1>Account Login</h1>
                        <form
                            ref={userForm}
                        className="SignBox"
                        id="SignIn-Form"
                        onSubmit={handleSignIn}
                    >
                        <img src="" alt="" />
                        <p>Sign into your account</p>
                        <div className="wrapInput">
                            <input
                                type="email"
                                name=""
                                id="Email Address"
                                placeholder="Email Address"
                                required
                            />
                        </div>
                        <div className="wrapInput">
                            <input
                                type="password"
                                name=""
                                id="Password"
                                placeholder="Password"
                                required
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


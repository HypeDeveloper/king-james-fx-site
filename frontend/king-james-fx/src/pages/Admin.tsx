import { Outlet } from "react-router-dom";
import "../style/Dashboard.css";

import kingLogo from "../assets/img/kinglogo.png";
import { useState } from "react";
import { Auth, useAuth } from "../AuthManger/AuthContext";

export function Admin() {
    return (
        <>
            <SignAdmin />
        </>
    );
}


function SignAdmin() {
    const { AuthToken }:Auth= useAuth();
    const [formData, setFormData] = useState({
        token: ''
    })
    const {token} = formData
    const submit = (e: any) => {
        e.preventDefault()
        if (token === "") {
            alert("No token");
            return;
        }
        const tokenData = {
            token: token,
        };
        AuthToken ? AuthToken(tokenData) : null;
    }
    const change = (e:any) => {
        setFormData((preData) => ({
            ...preData,
            [e.target.name] : e.target.value
        }))
    }
    return (
        <div className="adminSign">
            <div className="admin-WrapSign">
                <form action="" onSubmit={submit}>
                    <h1 className="text">AdminSign In</h1>
                    <input
                        type="text"
                        name="token"
                        id="token"
                        onChange={change}
                    />
                    <button type="submit">Log in</button>
                </form>
            </div>
        </div>
    );
}
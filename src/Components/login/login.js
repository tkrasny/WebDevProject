import React from "react";
import ".././header/header.css"
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <header class="headerBar">
            <Link to="/login">
                <button class="login">Login</button>
            </Link>
        </header>
    );
}

export default Login;
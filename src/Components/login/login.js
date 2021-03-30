import React from "react";
import ".././header/header.css"
import axios from 'axios';

export function Login() {

    function createUser(){
        {/* TODO: Implement login/account management */}
        {/* For now, simply mock-post to create a new user */}
        axios({
            method: 'post',
            url: 'https://reqres.in/api/users',
            data: {
                name: 'Test',
                job: 'Tester'
            }
        }).then((response) => {
            alert(response.data.name)
        })
    }

    return (
        <header class="headerBar">
            <button class="login" onClick={createUser}>Login</button>
        </header>
    );
}

export default Login;
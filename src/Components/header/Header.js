import React from "react";

import Login from ".././login/login.js";
import Search from ".././search/search.js";
import HeaderButton from "./headerButton.js";

import { useHistory } from "react-router-dom";

import "./header.css"

export function Header() {
    const history = useHistory();

    const onClickHandler = () => {
        let path = '/';
        history.push(path);
    };

    {/* Header bar with title, search, and login */}
    return (
        <div id="HeaderBar">
            <header class="headerBar title">
                <HeaderButton onClick={onClickHandler()}/>
            </header>
            <Search />
            <Login />
        </div>
    );
};

export default Header;
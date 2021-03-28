import React from "react";

import Login from ".././login/login.js";
import Search from ".././search/search.js";

import "./header.css"

export function Header() {
    {/* TODO: Design a logo for site, display in header bar */}

    {/* Header bar with title, search, and login */}
    return (
        <div id="HeaderBar">
            <header class="headerBar title">
                <h1>BetHuntr.com</h1>
            </header>
            <Search />
            <Login />
        </div>
    );
};

export default Header;
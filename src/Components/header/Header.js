import React from "react";

import Login from ".././login/login.js";
import Search from ".././search/search.js";
import HeaderButton from "./headerButton.js";

import { useHistory, Link} from "react-router-dom";

import "./header.css"
import profImg from "./profile.png"

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
            <div className="headerBar profile">
                <figure>
                    <Link to="/profile">
                        <img src={profImg} className="profile" alt="prof"/>
                    </Link>
                </figure>
            </div>
        </div>
    );
};

export default Header;
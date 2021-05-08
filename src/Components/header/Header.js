import React, { useState, useEffect } from "react";

import Login from ".././login/login.js";
import HeaderButton from "./headerButton.js";

import { useHistory, Link} from "react-router-dom";

import "./header.css"
import profImg from "./profile.png"
import searchImg from "./search.png"
import PopUp from "../../Common/Services/InstantSearch/popup";

export function Header() {
    const history = useHistory();

    const [imgClicked, setimgClicked] = useState(false);

    const onClickHandler = () => {
        let path = '/';
        history.push(path);
    };

    const imgClickHandler = () => {
        setimgClicked(true)
    };

    useEffect(() => {
        if (imgClicked){
            alert('clicked')
        }
    }, [imgClicked]);

    // Header bar with title, search, and login
    return (
        <div>
            <div id="HeaderBar">
                <header className="headerBar title">
                    <HeaderButton onClick={onClickHandler()}/>
                </header>
                <Login />
                <div className="headerBar search">
                    <figure>
                        <img src={searchImg} className="search" alt="search" onClick={() => imgClickHandler()}/>
                    </figure>
                </div>
                <div className="headerBar profile">
                    <figure>
                        <Link to="/profile">
                            <img src={profImg} className="profile" alt="prof"/>
                        </Link>
                    </figure>
                </div>
            </div>,
            {imgClicked ? <PopUp /> : null}
        </div>
    );
};

export default Header;
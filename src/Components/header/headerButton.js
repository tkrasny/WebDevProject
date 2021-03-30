import React from "react";
import ".././header/header.css"

const HeaderButton = ({onClick}) => {
    return (
        <form>
            <button className="TitleButton" onClick={onClick}>BetHuntr.com</button>
        </form>
    );
};

export default HeaderButton;
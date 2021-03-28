import React, { useEffect, useState } from "react";
import Login from "../login/login";

import ".././footer/footer.css"

const SubscribeForm = ({ onClick, onChange }) => {
    return (
        <header className="footerBar">
            <form onClick={onClick}>
                <input className="search" placeholder="Subscribe"
                       onChange={onChange}/>
            </form>
        </header>
    );
};

export default SubscribeForm;
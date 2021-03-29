import React, { useEffect, useState } from "react";
import Login from "../login/login";

import ".././footer/footer.css"

const SubscribeForm = ({ onClick, onChange }) => {
    return (
        <header className="footerBar">
            <form>
                <input className="subscribe" placeholder="Subscribe" onChange={onChange}/>
                <button className="submit" type="submit" onClick={onClick}>Submit</button>
            </form>
        </header>
    );
};

export default SubscribeForm;
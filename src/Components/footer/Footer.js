import React from "react";
import "./footer.css";
import { useHistory } from "react-router-dom";
import AboutButton from "./aboutButton.js";

import Subscribe from "../subscribe/subscribe.js";

export function Footer() {
    const history = useHistory();

    const onClickHandler = (e) => {
        e.preventDefault()
        let path = '/about';
        history.push(path);
    };

    return (
        <div id="FooterBar">
            <footer class="FooterBar about">
                <AboutButton onClick={onClickHandler} />
            </footer>
            <Subscribe />
        </div>
    );
}
export default Footer;
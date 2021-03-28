import React from "react";
import "./footer.css"

import Subscribe from "../subscribe/subscribe.js";

export function Footer() {

    {/* TODO: Convert "about" to reroute to an informational page */}

    return (
        <div id="FooterBar">
            <footer class="FooterBar about">
                <h1>About</h1>
            </footer>
            <Subscribe />
        </div>
    );
}
export default Footer;
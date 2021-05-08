import React from "react";

import "./popup.css"

import FancySearch from "../InstantSearch/instantsearch.js"

export function PopUp() {

    return (
        <div className="modal">
            <div className="content">
                <FancySearch />
            </div>
        </div>
    )
}

export default PopUp
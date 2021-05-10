import React from "react";

import "./popup.css"

import FancySearch from "../InstantSearch/instantsearch.js"

export function PopUp() {

    const reload=()=>window.location.reload();

    const onClick = () => {
        const modal = document.querySelector(".modal")
        modal.style.display = "none";
        reload()
    };

    return (
        <div>
            <div className="modal modalBox">
                <button className="Close" onClick={onClick}>Close</button>
                <div className="content">
                    <h1>Search for a page</h1>
                   <FancySearch/>
                </div>
            </div>
        </div>
    )
}

export default PopUp
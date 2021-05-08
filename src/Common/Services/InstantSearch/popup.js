import React, { useState } from "react";

import "./popup.css"

import FancySearch from "../InstantSearch/instantsearch.js"

export function PopUp() {
    const [showPop, setshowPop] = useState(true)

    const onClick = () => {
        setshowPop(false)
    };

    return (
        <div>
            {showPop ? (
            <div className="modal modalBox">
                <button className="Close" onClick={onClick}>Close</button>
                <div className="content">
                    <h1>Search for a page</h1>
                   <FancySearch/>
                </div>
            </div>
            ) :
            null
        }
        </div>
    )
}

export default PopUp
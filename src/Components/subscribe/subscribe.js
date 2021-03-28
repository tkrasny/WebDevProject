import React, { useEffect, useState } from "react";
import ".././footer/footer.css"

import SubscribeForm from "./SubscribeForm";

export function Subscribe() {
    const [email, setEmail] = useState([]);

    {/* TODO: Index information on website to allow searching to return something */}
    // Handler to handle event passed from child submit button
    const onClickHandler = (e) => {
        e.preventDefault();
    };

    // Handler to track changes to the child input text
    const onChangeHandler = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        // Continuously updating name to be added on submit
        setEmail(e.target.value);
    };

    return (
        <SubscribeForm onClick={onClickHandler}  onChange={onChangeHandler}/>
    );


}

export default Subscribe;
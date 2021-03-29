import React from "react";

const AboutButton = ({onClick}) => {
    return (
        <form>
            <button onClick={onClick}>About</button>
        </form>
    );
};

export default AboutButton;
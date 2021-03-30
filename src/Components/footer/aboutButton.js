import React from "react";
import ".././footer/footer.css"

const AboutButton = ({onClick}) => {
    return (
        <form>
            <button className="aboutButton" onClick={onClick}>About</button>
        </form>
    );
};

export default AboutButton;
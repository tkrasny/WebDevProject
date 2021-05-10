import React from "react";
import "./homepage.css";

import analysisImg from "./analysis1.png"
import scheduleImg from "./calendar.png"
import faqImg from "./question.png"

import { useHistory } from "react-router-dom";


export function Homepage() {
    const history = useHistory();

    const onClickAnalysis = () => {
        let path = '/analysis';
        history.push(path);
    }

    const onClickSchedule = () => {
        let path = '/schedule';
        history.push(path);
    }

    const onClickFAQ = () => {
        let path = '/faq'
        history.push(path);
    }

    // Displays the main body of the home page as a css grid
    return (
    <main id="homepage">
        <div className="container container_1">
            <button onClick={onClickAnalysis} className="myButton" >Analysis & Recommendations</button>
        </div>
        <div className="container container_2">
            <figure>
                <img src={analysisImg} className="container" alt="analysis" style={{height: 400, width: "auto"}}/>
            </figure>
        </div>
        <div className="container container_3">
            <figure>
                <img src={scheduleImg} className="container" alt="calendar" style={{height: 400, width: "auto"}}/>
            </figure>
        </div>
        <div className="container container_4">
            <button onClick={onClickSchedule} className="myButton">Schedule</button>
        </div>
        <div className="container container_5">
            <button onClick={onClickFAQ} className="myButton" >Frequently Asked Questions</button>
        </div>
        <div className="container container_6">
            <figure>
                <img src={faqImg} className="container" alt="faq" style={{height: 400, width: "auto"}}/>
            </figure>
        </div>
    </main>
    );
}

export default Homepage;
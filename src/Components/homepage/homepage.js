import React from "react";
import "./homepage.css";

import analysisImg from "./analysis1.jpg"
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

    {/* TODO: Improve quality of images, ensure copyright free */}

    {/* Displays the main body of the home page as a css grid*/}
    return (
    <main id="homepage">
        <div class="container container_1">
            <button onClick={onClickAnalysis} class="myButton">Analysis & Recommendations</button>
        </div>
        <div class="container container_2">
            <figure>
                <img src={analysisImg} class="container" alt="analysis"/>
            </figure>
        </div>
        <div class="container container_3">
            <figure>
                <img src={scheduleImg} class="container" alt="calendar"/>
            </figure>
        </div>
        <div class="container container_4">
            <button onClick={onClickSchedule} class="myButton">Schedule</button>
        </div>
        <div class="container container_5">
            <button onClick={onClickFAQ} class="myButton">Frequently Asked Questions</button>
        </div>
        <div class="container container_6">
            <figure>
                <img src={faqImg} class="container" alt="faq"/>
            </figure>
        </div>
    </main>
    );
}

export default Homepage;
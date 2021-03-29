import React from "react";
import Header from "./header/Header.js";
import Homepage from "./homepage/homepage.js";
import Footer from "./footer/Footer.js";
import About from "./about/about.js";
import Schedule from "./slate/schedule.js";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const Components = () => {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/schedule">
                        <Schedule />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default Components;
import React from "react";
import Header from "./header/Header.js";
import Homepage from "./homepage/homepage.js";
import Footer from "./footer/Footer.js";
import About from "./about/about.js";
import Schedule from "./slate/schedule.js";
import Analysis from "./analysis/analysis.js";
import FAQ from "./faq/faq.js";
import AuthRegister from "../Common/Services/Auth/AuthRegister"
import RegisterForm from "../Common/Services/Auth/RegisterForm";
import "../index.css";
import ProtectedRoute from "../Common/AppTools/ProtectedRoute";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const Components = () => {
    return (
        <Router>
            <div id="app">
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
                    <Route path="/faq">
                        <FAQ />
                    </Route>
                    <Route path="/analysis">
                        <Analysis />
                    </Route>
                    <Route path="/login">
                        <AuthRegister />
                    </Route>
                    <Route path="/register">
                        <RegisterForm />
                    </Route>
                    <Route path="/register">
                        <RegisterForm />
                    </Route>
                    <ProtectedRoute path="/profile">
                        <Analysis />
                    </ProtectedRoute>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default Components;
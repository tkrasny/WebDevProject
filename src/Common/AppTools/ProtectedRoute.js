import React from "react";
import { Redirect } from "react-router-dom";
import "./protectedRoute.css"

const ProtectedRoute = ({ component: Component, flag, ...rest }) => {

    return (
        <div>
            {flag ? (
                <Redirect to={rest.path} />
            ) : (
                <Redirect to="/login" />
            )}
        </div>
    );
};

export default ProtectedRoute;
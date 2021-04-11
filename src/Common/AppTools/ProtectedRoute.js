import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import "./protectedRoute.css"

const ProtectedRoute = ({ component: Component, flag, ...rest }) => {
    const history = useHistory();
    const goBackHandler = () => {
        history.goBack();
    };

    const loginHandler = () => {
        let path = '/login';
        history.push(path);
    };

    return (
        <div>
            {flag ? (
                <Redirect to={rest.path} />
            ) : (
                <div className="protected">
                    <p>Unauthorized!</p>
                    <button onClick={goBackHandler}>Go back</button>
                    <br />
                    <button onClick={loginHandler}>Login</button>
                </div>
            )}
        </div>
    );
};

export default ProtectedRoute;
import React from "react";
import { Redirect, useHistory } from "react-router-dom";

// You can pass props using the spread operator to throw them on an object if there are too many to break out
const ProtectedRoute = ({ component: Component, flag, ...rest }) => {
    const history = useHistory();
    const goBackHandler = () => {
        history.goBack();
    };
    console.log(rest); // show rest.path in the console
    // you could redirect back to /auth if the flag is not true
    return (
        <div>
            {flag ? (
                <Redirect to={rest.path} />
            ) : (
                <div>
                    <p>Unauthorized!</p> <button onClick={goBackHandler}>Go back.</button>
                </div>
            )}
        </div>
    );
};

export default ProtectedRoute;
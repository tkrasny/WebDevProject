import React, { useEffect, useState } from "react";
import { createUser, logIn } from "./AuthService";
import LoginForm from "./LoginForm";

const AuthLogin = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    // flags in the state to watch for add/remove updates
    const [add, setAdd] = useState(false);

    // useEffect that run when changes are made to the state variable flags
    useEffect(() => {
        if (user && add) {
            logIn(user).then((userLoggedIn) => {
                if (userLoggedIn) {
                    alert(
                        `${userLoggedIn.get("email")}, you successfully signed in!`
                    );
                }
                // TODO: redirect user to main app
                setAdd(false);
            });
        }
    }, [user, add]);

    const onChangeHandler = (e) => {
        e.preventDefault();
        console.log(e.target);
        const { name, value: newValue } = e.target;
        console.log(newValue);

        setUser({
            ...user,
            [name]: newValue
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setAdd(true);
    };

    return (
        <div>
            <LoginForm
                user={user}
                onChange={onChangeHandler}
                onSubmit={onSubmitHandler}
            />
        </div>
    );
};

export default AuthLogin;

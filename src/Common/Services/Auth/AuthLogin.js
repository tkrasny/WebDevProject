import React, { useEffect, useState } from "react";
import { logIn } from "./AuthService";
import LoginForm from "./LoginForm";
import { useHistory } from "react-router-dom";
import Parse from "parse";

const AuthLogin = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const history = useHistory();

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
                    history.push("/");
                }
                setAdd(false);
            });
        }
    }, [user, add, history]);

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

    var check

    if (Parse.User.current()){
        check = Parse.User.current().authenticated();
    }
    else{
        check = false;
    }

    useEffect(() => {
        if (check) {
            alert("Already logged in!")
            history.push("/")
        }
    }, [check, history]);

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

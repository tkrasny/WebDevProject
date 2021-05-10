import React, { useEffect, useState } from "react";
import { createUser } from "./AuthService.js";
import RegisterForm from "./RegisterForm.js";
import {useHistory} from "react-router-dom";
import Parse from "parse";

const AuthRegister = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        firstname: "",
        lastname: "",
    });

    const history = useHistory();

    // flags in the state to watch for add/remove updates
    const [add, setAdd] = useState(false);

    // useEffect that run when changes are made to the state variable flags
    useEffect(() => {
        if (user && add) {
            createUser(user).then((userCreated) => {
                if (userCreated) {
                    alert(
                        `${userCreated.get("email")}, your account was created successfully!`
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
            <RegisterForm
                user={user}
                onChange={onChangeHandler}
                onSubmit={onSubmitHandler}
            />
        </div>
    );
};

export default AuthRegister;

import React, { useEffect, useState } from "react";
import { createUser } from "./AuthService.js";
import RegisterForm from "./RegisterForm.js";

const AuthRegister = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        firstname: "",
        lastname: "",
    });

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
            <RegisterForm
                user={user}
                onChange={onChangeHandler}
                onSubmit={onSubmitHandler}
            />
        </div>
    );
};

export default AuthRegister;

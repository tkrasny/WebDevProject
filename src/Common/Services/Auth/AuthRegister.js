import React, { useEffect, useState } from "react";
import { createUser } from "./AuthService";
import AuthForm from "./AuthForm";

const AuthRegister = () => {
    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    // flags in the state to watch for add/remove updates
    const [add, setAdd] = useState(false);

    // useEffect that run when changes are made to the state variable flags
    useEffect(() => {
        if (newUser && add) {
            createUser(newUser).then((userCreated) => {
                if (userCreated) {
                    alert(
                        `${userCreated.get("firstName")}, you successfully registered!`
                    );
                }
                // TODO: redirect user to main app
                setAdd(false);
            });
        }
    }, [newUser, add]);

    const onChangeHandler = (e) => {
        e.preventDefault();
        console.log(e.target);
        const { name, value: newValue } = e.target;
        console.log(newValue);

        setNewUser({
            ...newUser,
            [name]: newValue
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("submitted: ", e.target);
        setAdd(true);
    };

    return (
        <div>
            <AuthForm
                user={newUser}
                onChange={onChangeHandler}
                onSubmit={onSubmitHandler}
            />
        </div>
    );
};

export default AuthRegister;

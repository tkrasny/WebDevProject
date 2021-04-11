import React from "react";
import Parse from "parse";
import { useHistory } from "react-router-dom";
import "./profile.css"

export function ProfilePage() {
    const history = useHistory()

    const onClickHandler = () => {
        Parse.User.logOut()
        history.push("/")
    }

    return (
        <div>
            <h1>PROFILE</h1>
            <button onClick={onClickHandler}>Logout</button>
        </div>
    );
}
export default ProfilePage;
import React from "react";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";
import ProfilePage from "./ProfilePage.js";
import Parse from "parse";

const ProfileHome = () => {

    var check
    var username

    if (Parse.User.current()){
        check = Parse.User.current().authenticated();
        username = Parse.User.current().getEmail();
    }
    else{
        check = false;
        username = "";
    }

    var path = "/profile/" + username

    return (
        <div>
            <ProtectedRoute
                exact
                path={path}
                flag={check}
                component={ProfilePage} />
        </div>
    );
};

export default ProfileHome;

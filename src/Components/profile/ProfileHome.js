import React from "react";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";
import ProfilePage from "./ProfilePage.js";
import Parse from "parse";

const ProfileHome = () => {

    if (Parse.User.current()){
        var check = Parse.User.current().authenticated();
        var username = Parse.User.current().getEmail();
    }
    else{
        var check = false;
        var username = "";
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

import React, { useEffect, useState } from "react";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";
import ProfilePage from "./ProfilePage.js";
import Parse from "parse";

const ProfileHome = () => {
    const [flag, setFlag] = useState(false);

    var check = Parse.User.current().authenticated();

    useEffect(() => {
        if (check) {
            setFlag(true);
        } else {
            setFlag(false);
        }
    }, [check]);

    var username = Parse.User.current().getEmail();
    var path = "/profile/" + "x"

    return (
        <div>
            <ProtectedRoute
                exact
                path={path}
                flag={flag}
                component={ProfilePage} />
        </div>
    );
};

export default ProfileHome;

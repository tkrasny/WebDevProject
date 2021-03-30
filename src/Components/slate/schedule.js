import React, { useEffect, useState } from "react";

import PreferenceForm from "./PreferenceForm.js"
import {createPreference} from "../../Common/Services/PreferencesService.js";

export function Schedule() {
    const [preferences, setPreferences] = useState([]);

    const [add, setAdd] = useState(false);
    const [myname, setMyname] = useState();
    const [sport, setSport] = useState();
    const [team, setTeam] = useState();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const inputs = e.target.getElementsByTagName('input');
        setAdd(true);
        setMyname(inputs.myname.value);
        setSport(inputs.sport.value);
        setTeam(inputs.team.value);
    };

    //TODO: Allow for partial submission of form to update existing preferences
    useEffect(() => {
        // Check for add flag and make sure all state variables are defined
        if (myname && sport && team && add) {
            createPreference(myname, sport, team).then((newPreference) => {
                setAdd(false);
                // Add the newly created lesson to the lessons array
                // to render the new list of lessons (thru spread/concatenation)
                setPreferences([...preferences, newPreference]);
                alert("Successfully set preferences")
            });
        }
    }, [myname, team, sport, preferences, add]);


    return (
        <PreferenceForm onSubmit={onSubmitHandler} />
    );
}

export default Schedule;
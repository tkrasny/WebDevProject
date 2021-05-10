import React, { useEffect, useState } from "react";

import PreferenceForm from "./PreferenceForm.js"
import {createPreference} from "../../Common/Services/PreferencesService.js";
import {useHistory} from "react-router-dom";

export function Schedule() {
    const [preferences, setPreferences] = useState([]);

    const history = useHistory();


    const [add, setAdd] = useState(false);
    const [sport, setSport] = useState();
    const [team, setTeam] = useState();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const inputs = e.target.getElementsByTagName('input');
        setAdd(true);
        setSport(inputs.sport.value);
        setTeam(inputs.team.value);
    };

    useEffect(() => {
        // Check for add flag and make sure all state variables are defined
        if (sport && team && add) {
            createPreference(sport, team).then((newPreference) => {
                setAdd(false);
                // Add the newly created Preference to the preferences array
                setPreferences([...preferences, newPreference]);
                alert("Successfully set preferences");
            })
                .catch( () => {
                    alert("Please sign in first");
                    history.push("/login")
                });
        }
    }, [team, sport, preferences, add]);


    return (
        <PreferenceForm onSubmit={onSubmitHandler} />
    );
}

export default Schedule;
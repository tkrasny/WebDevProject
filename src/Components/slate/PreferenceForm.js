import React from "react";
import "./preferences.css"

const PreferenceForm = ({ onSubmit }) => {
    return (
        <form className="prefForm" onSubmit={onSubmit}>
            <label htmlFor="sport">Enter your favorite sport</label>
            <input id="sport" name="sport" type="text" /><br />

            <label htmlFor="team">Enter your favorite team</label>
            <input id="team" name="team" type="text" /><br />

            <button>Set Preferences!</button>
        </form>
    );
};

export default PreferenceForm;
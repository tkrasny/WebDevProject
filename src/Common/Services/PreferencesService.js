import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS */

// CREATE operation - new lesson with userName to match
export const createPreference = (sport, team) => {
    const Preference = Parse.Object.extend("Preference");
    const preference = new Preference();

    var user = Parse.User.current()

    if (!user){
        return Promise.reject();
    }

    // using setter to UPDATE the object
    preference.set("sport", sport);
    preference.set("team", team);
    preference.set("user", user)
    return preference.save().then((result) => {
        // returns new preference object
        return result;
    });
};

//READ operation - get user preference by ID
export const getById = (id) => {
    const Preference = Parse.Object.extend("Preference");
    const query = new Parse.Query(Preference);
    return query.get(id).then((result) => {
        // return Preference object with objectId: id
        return result;
    });
};
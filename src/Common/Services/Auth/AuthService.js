import Parse from "parse";

// used in auth register component
export const createUser = (newUser) => {
    const user = new Parse.User();

    user.set("username", newUser.email);
    user.set("firstName", newUser.firstName);
    user.set("lastName", newUser.lastName);
    user.set("password", newUser.password);
    user.set("email", newUser.email);

    console.log("User: ", user);
    return user
        .signUp()
        .then((newUserSaved) => {
            return newUserSaved;
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });
};

// Used in login component
export const logIn = (enteredUser) => {
    return Parse.User
        .logIn(enteredUser.email, enteredUser.password)
        .then((user) => {
            return user;
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });
}



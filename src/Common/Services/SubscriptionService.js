import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS */

// CREATE operation - new lesson with Name
export const createSubscriber = (email) => {
    console.log("Creating: ", email);
    const Subscriber = Parse.Object.extend("Subscriber");
    const subscriber = new Subscriber();
    // using setter to UPDATE the object
    subscriber.set("email", email);
    return subscriber.save().then((result) => {
        // returns new Subscriber object
        return result;
    });
};

// READ operation - get all lessons in Parse class Lesson
export const getAllSubscribers = () => {
    const Subscriber = Parse.Object.extend("Subscriber");
    const query = new Parse.Query(Subscriber);
    return query.find().then((results) => {
        // returns array of Subscriber objects
        return results;
    });
};

// DELETE operation - remove lesson by ID
export const removeSubscriber = (id) => {
    const Lesson = Parse.Object.extend("Lesson");
    const query = new Parse.Query(Lesson);
    return query.get(id).then((lesson) => {
        lesson.destroy();
    });
};

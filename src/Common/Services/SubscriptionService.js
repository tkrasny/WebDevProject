import Parse from "parse";

// CREATE operation - new subscriber with email
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

// READ operation - get all lessons in Parse class Subscriber
export const getAllSubscribers = () => {
    const Subscriber = Parse.Object.extend("Subscriber");
    const query = new Parse.Query(Subscriber);
    return query.find().then((results) => {
        // returns array of Subscriber objects
        return results;
    });
};

// DELETE operation - remove subscriber by ID (Currently not implemented)
export const removeSubscriber = (id) => {
    const Lesson = Parse.Object.extend("Lesson");
    const query = new Parse.Query(Lesson);
    return query.get(id).then((lesson) => {
        lesson.destroy();
    });
};

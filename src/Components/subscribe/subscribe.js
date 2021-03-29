import React, { useEffect, useState } from "react";
import ".././footer/footer.css"
import { createSubscriber, getAllSubscribers } from "../../Common/Services/SubscriptionService";
import SubscribeForm from "./SubscribeForm";

export function Subscribe() {
    const [subscribers, setSubscribers] = useState([]);
    const [subscriber, setSubscriber] = useState([]);
    const [email, setEmail] = useState();

    useEffect(() => {
        getAllSubscribers().then((subscribers) => {
            console.log(subscribers);
            setSubscribers(subscribers);
        });
    }, []);

    const [add, setAdd] = useState(false);
    const [remove, setRemove] = useState("");

    // TODO: Validate input to verify it's a valid email address
    useEffect(() => {
        // Check for add flag and make sure name state variable is defined
        if (email && add) {
            createSubscriber(email).then((newSubscriber) => {
                setAdd(false);
                // Add the newly created lesson to the lessons array
                // to render the new list of lessons (thru spread/concatenation)
                setSubscribers([...subscribers, newSubscriber]);
                alert("Successfully subscribed email address")
            });
        }
    }, [email, subscribers, add]);

    // Handler to handle event passed from child submit button
    const onClickHandler = (e) => {
        e.preventDefault();
        setAdd(true);
    };

    // Handler to track changes to the child input text
    const onChangeHandler = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        // Continuously updating name to be added on submit
        setEmail(e.target.value);
    };

    return (
        <SubscribeForm onClick={onClickHandler}  onChange={onChangeHandler}/>
    );


}

export default Subscribe;
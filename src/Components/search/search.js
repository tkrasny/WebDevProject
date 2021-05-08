import React, { useEffect, useState } from "react";
import ".././header/header.css";
import { useHistory } from "react-router-dom";

import SearchForm from "./searchform";

export function Search() {
    const history = useHistory();

    const [query, setQuery] = useState([]);
    const [add, setAdd] = useState(false);

    useEffect(() => {
        if (add){
            alert('pushed')
            //let path = `/profile/${query}`;
            let path = `/analysis`;
            history.push({
                pathname: path
            });
        }
        setAdd(false);
    }, [add, query, history]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setAdd(true);
    };

    const onChangeHandler = (e) => {
        setQuery(e.target.value)
    }

    return (
        <SearchForm onChange={onChangeHandler} onSubmit={onSubmitHandler}/>
    );


}

export default Search;
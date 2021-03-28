import React, { useEffect, useState } from "react";
import ".././header/header.css"

import SearchForm from "./searchform";

export function Search() {
    const [query, setQuery] = useState([]);

    {/* TODO: Index information on website to allow searching to return something */}
    // Handler to handle event passed from child submit button
    const onClickHandler = (e) => {
        e.preventDefault();
    };

    // Handler to track changes to the child input text
    const onChangeHandler = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        // Continuously updating name to be added on submit
        setQuery(e.target.value);
    };

    return (
        <SearchForm onClick={onClickHandler}  onChange={onChangeHandler}/>
    );


}

export default Search;
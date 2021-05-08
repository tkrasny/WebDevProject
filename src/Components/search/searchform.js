import React from "react";

import "./search.css"

const SearchForm = ({ onChange,  onSubmit }) => {
    return (
        <form onSubmit={onSubmit} onChange={onChange}>
            <input className="searchButton" placeholder="Search"/>
        </form>
    );
};

export default SearchForm;
import React from "react";

import ".././header/header.css"

const SearchForm = ({ onClick, onChange }) => {
    return (
        <header className="headerBar">
            <form onClick={onClick}>
                <input className="search" placeholder="Search"
                       onChange={onChange}/>
            </form>
        </header>
    );
};

export default SearchForm;
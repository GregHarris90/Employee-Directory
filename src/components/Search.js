import React from "react";

function Search(props) {
    return (
        <div className = "searchbar">
            <form>
                <label htmlFor="search">Search: </label>
            <input
                // onChange={props / handleInputChange}
                value={props.search}
                name="search"
                type="text"
                placeholder="Search Employees"
                id="search"
            />
            {/* <button onClick = {props.handleFormSubmit}> Search </button> */}
            </form>
        </div >
    );
}

export default Search;
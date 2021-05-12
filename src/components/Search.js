import React from "react";

function Search(props) {
    return (
        <form>
            <div className="searchbar">
                <label htmlFor="search">Search: </label>
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    placeholder="Search Employees"
                    id="search"
                />
                <button onClick={props.handleFormSubmit}> Search </button>

            </div >
        </form>

    );
}

export default Search;
import React from "react";

function Search(props) {
    return (
        <form className="searchbar">
            <div>
                <h4>Filter through Employees</h4>
                <label htmlFor="search">Search: </label>
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    placeholder="Enter First Name"
                    id="search"
                />
                <button onClick={props.handleFormSubmit}> SUBMIT / RESET </button>

            </div >
        </form>

    );
}

export default Search;
// Dependencies
import React, { Component } from "react";
import Search from "./Search";
import Employee from "./Employee";
import API from "../utils/API";

class MainBody extends Component {

    // set state of searchBar and employeeArray
    state = {
        search: "",
        results: null
    };

    // When components mounts, get random employees with API and setState
    componentDidMount() {
        API.getRandomEmployee()
            .then(res => {
                this.setState({ results: res.data.results })
                console.log(res);
            })
            .catch(error => console.log(error));
    }

    // TODOS:
    // 1) Write function to filter employees by name
    // 2) Write function to sort employees by 

    // handle the value input by the user
    handleInputChange = event => {
        const value = event.target.value;
        this.setState({ search: value });
    }

    // prevent page reload upon submitting search
    handleFormSubmit = event => {
        event.preventDefault();
    }

    // render searchBar and random-Employee list
    render() {
        return (
            <div>
                <Search
                    value={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                {this.state.results && <Employee
                    results={this.state.results} />}
            </div>
        );
    }
}

export default MainBody;
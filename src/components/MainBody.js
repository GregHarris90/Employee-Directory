// Dependencies
import React, { Component } from "react";
import Search from "./components/Search";
import Employee from "./components/Employee";
import API from "../../utils/API";

class MainBody extends Component {

    // set state of searchBar and employeeArray
    state = {
        search: "",
        results: []
    };

    // When components mounts, get random employees with API and setState
    componentDidMount() {
        API.getRandomEmployee()
            .then(res => this.setState({ results: res.results.results }))
            .catch(error => console.log(error));
    }

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
                <Employee
                    results={this.state.results} />
            </div>
        );
    }
}

export default MainBody;
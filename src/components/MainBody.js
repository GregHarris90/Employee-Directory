// Dependencies
import React, { Component } from "react";
import Search from "./Search";
import Employee from "./Employee";
import API from "../utils/API";

class MainBody extends Component {

    // set state of searchBar and employeeArray
    state = {
        search: "",
        results: [],
        renderedResults: [],
    };

    // When components mounts, get random employees with API and setState
    componentDidMount() {
        API.getRandomEmployee()
            .then(res => {
                this.setState({ results: res.data.results, renderedResults: res.data.results })
                // console.log(res);
            })
            .catch(error => console.log(error));
    }

    // search employee by first name
    searchEmployee = name => {
        console.log(name);
        console.log(this.state.results);
        const filteredEmployees = this.state.results.filter(employee => employee.name.first === name)
        console.log(filteredEmployees);
        if (!filteredEmployees.length) {
            this.setState({ renderedResults: this.state.results })
            return
        }
        this.setState({ renderedResults: filteredEmployees })
    }

    // sort employees by country or location
    sortLocation = event => {
        event.preventDefault();
        console.log("Sorted by Location!")
        const sortByLocation = this.state.results.sort((a, b) => (a.location.country > b.location.country) ? 1 : -1)
        console.log(sortByLocation);
        this.setState({ renderedResults: sortByLocation })
    }

    // sort employees by email
    sortEmail = event => {
        event.preventDefault();
        console.log("Sorted by Email!")
        const sortByEmail = this.state.results.sort((a, b) => (a.email > b.email) ? 1 : -1)
        console.log(sortByEmail);
        this.setState({ renderedResults: sortByEmail })
    }

    // handle the value input by the user
    handleInputChange = event => {
        const value = event.target.value;
        this.setState({ search: value });
        console.log(value);
    }

    // prevent page reload upon submitting search
    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Search submitted!")
        this.searchEmployee(this.state.search);
    }

    // render searchBar and random-Employee list
    render() {
        return (
            <div>
                <Search
                    value={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    sortEmail={this.sortEmail}
                    sortEmployee={this.sortLocation}
                />
                {this.state.results && <Employee
                    results={this.state.renderedResults} />}
            </div>
        );
    }
}

export default MainBody;
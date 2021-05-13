import React from "react";

function Employee(props) {
    console.log(props);
    return (
        <table>
            <thead>
                <tr>
                    <th>Employee Picture</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Location</th>
                </tr>
            </thead>

            <tbody>
                {props.results.map(employee => (
                    <tr key={employee.login.uuid}>
                        <th>
                            <img src={employee.picture.thumbnail} />
                        </th>
                        <td>{employee.name.first}</td>
                        <td>{employee.name.last}</td>
                        <td>{employee.email}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.location.country}</td>
                    </tr>
                ))}
            </tbody>


        </table>
    );
}

export default Employee;
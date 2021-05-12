import React from "react";

function Employee(props) {
    return (
        <table>
            
            <tr>
                <th>Employee Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Location</th>
            </tr>

            {props.results.map(employee => (
                <tr>
                    <td>{employee.key.id}</td>
                    <td>{employee.picture.thumbnail}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.location.country}</td>
                </tr>
            ))}

        </table>
    );
}

export default Employee;
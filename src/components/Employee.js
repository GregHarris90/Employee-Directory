import React from "react";

function Employee(props) {
    return(
        <table>
            <tr>
                <th>Employee Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Location</th>
            </tr>
            <tr>
                <td>{props.picture.thumbnail}</td>
                <td>{props.email}</td>
                <td>{props.phone}</td>
                <td>{props.location.country}</td>
            </tr>
        </table>
        );
}

export default Employee;
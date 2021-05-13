import React from "react";

function Employee(props) {
    return (
        <table className="table-head">
            <thead>
                <tr>
                    <th className="headers">Employee Picture</th>
                    <th className="headers">First Name</th>
                    <th className="headers">Last Name</th>
                    <th className="headers">Email</th>
                    <th className="headers">Phone</th>
                    <th className="headers">Location</th>
                </tr>
            </thead>

            <tbody>
                {props.results.map(employee => (
                    <tr key={employee.login.uuid}>
                        <th>
                            <img alt="employee-thumbnail" src={employee.picture.thumbnail} />
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
import React from "react";

function Friend() {
    let userList = [
        {
            "id": 11,
            "name": "Alice Johnson",
            "email": "alice.johnson@example.com",
            "age": 28
        },
        {
            "id": 12,
            "name": "Bob Smith",
            "email": "bob.smith@example.com",
            "age": 34
        },
        {
            "id": 13,
            "name": "Charlie Brown",
            "email": "charlie.brown@example.com",
            "age": 22
        },
        {
            "id": 24,
            "name": "Diana Prince",
            "email": "diana.prince@example.com",
            "age": 31
        }
    ];

    return (
        <React.Fragment>
            <h2>These are my friends list</h2>
            <ul>
                {userList.map((obj, index) => {
                    return <li key={index}>{obj.name}, the index is {index}</li>
                })}
            </ul>

        </React.Fragment>
    )

}

export default function App() {
    return <Friend />;
}

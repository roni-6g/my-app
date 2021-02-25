import React, { useState, useEffect } from 'react';

function User(){    
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    },[])
    return(
        <div>
            <h1>Total Users: {users.length}</h1>
            <ul>
                {
                    users.map(user => <li> Name:{user.name}, Email: {user.email} </li>)
                }
            </ul>
        </div>
    );
}

export default User;
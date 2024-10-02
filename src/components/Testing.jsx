import React from 'react'
import { UseUser } from '../context/UserContext';

const Testing = () => {
    const { userData } = UseUser();
    return (
        <>
            {userData.map((user, i) => (
                <div key={i}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.name}</p>
                    <p>{user.pass}</p>
                </div>
            ))}
        </>
    )
}

export default Testing;
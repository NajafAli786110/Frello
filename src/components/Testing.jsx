import React from 'react'
import { useCustomContext } from '../context/UserContext';

const Testing = () => {
    const { userData } = useCustomContext();
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
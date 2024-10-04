import React from 'react'
import { useCustomContext } from '../context/UserContext';

const Testing = () => {
    const { userData } = useCustomContext();
    return (
        <>
            {userData.map((user, i) => (
                <div key={i}>
                    <p>User ID</p>
                    <p>{user.id}</p>
                    <br />
                    <p>User NAME</p>
                    <p>{user.name}</p>
                    <br />
                    <p>User EMAIL</p>
                    <p>{user.email}</p>
                    <br />
                    <p>User PASS</p>
                    <p>{user.pass}</p>
                </div>
            ))}
        </>
    )
}

export default Testing;
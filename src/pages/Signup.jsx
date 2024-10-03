import React, { useState } from 'react';
import { useCustomContext } from '../context/UserContext';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {userDispatch} = useCustomContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here
    if (username === '' || email === '' || password === '') {
      setError('Please fill in all fields.');
    } else {
      setError('');
      // Pass the data
      console.log('Signing up with:', { username, email, password });
    }
    userDispatch({
      type: 'createUser',
      userName: username,
      userEmail: email,
      userPass: password,
    });

    setUsername('');
    setEmail('');
    setPassword('');
  };


  return (
    <div className="w-full flex flex-col items-center justify-center mx-auto p-4 h-screen">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 w-1/3">
        <div className="mb-4">
          <label htmlFor="username" className="block mb-1">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded w-full p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded w-full p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded w-full p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded w-full p-2 hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;

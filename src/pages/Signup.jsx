import React, { useState } from "react";
import { useCustomContext } from "../context/UserContext";

const Signup = () => {
  const [signUpDetails, setSignUpDetails] = useState({
    username: "",
    email: "",
    password: "",
    error: "",
  });
  const { userDispatch } = useCustomContext();

  const onClickHandler = (e) => {
    setSignUpDetails({
      ...signUpDetails,
      [e.target.name]: e.target.value,
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform signup logic here
    if (signUpDetails.username === "" || signUpDetails.email === "" || signUpDetails.password === "") {
      setSignUpDetails({
        ...signUpDetails,
        error: "Please fill in all fields.",
      });
    } else {
      setSignUpDetails({
        ...signUpDetails,
        error: "",
      });
    }
    userDispatch({
      type: "createUser",
      userName: signUpDetails.username,
      userEmail: signUpDetails.email,
      userPass: signUpDetails.password,
    });

    alert('User Created Succesfully');

    setSignUpDetails({
      username: "",
      email: "",
      password: "",
      error: "",
    });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center mx-auto p-4 h-screen">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      {signUpDetails.error && <p className="text-red-500 mb-4">{error}</p>}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-1/3"
      >
        <div className="mb-4">
          <label htmlFor="username" className="block mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={signUpDetails.username}
            onChange={onClickHandler}
            className="border rounded w-full p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={signUpDetails.email}
            onChange={onClickHandler}
            className="border rounded w-full p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={signUpDetails.password}
            onChange={onClickHandler}
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

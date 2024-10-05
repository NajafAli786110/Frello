import React, { useState } from "react";
import { useCustomContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { userData, currUserData, setCurrUserData, setLogin, isLogin } =
    useCustomContext();
  const [loginDetails, setLoginDetails] = useState({
    email: "demo@gmail.com",
    password: "hello@123",
    error: "",
  });

  function onChangeHandler(e) {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginDetails;
    console.log("Logging in with:", { email, password });

    // Add logic for user authentication
    const userCheck = userData.find(
      (user) => user.email === email && user.pass === password
    );
    if (!userCheck) {
      setLoginDetails({
        ...loginDetails,
        error: "Invalid email or password",
      });
    } else {
      alert("Login successful");
      setLogin(true);
      setCurrUserData({
        ...currUserData,
        email: loginDetails.email,
      });
      navigate("/");
    }
  };

  return (
    <>
      {isLogin ? (
        <div className="h-screen container flex flex-col justify-center items-center gap-6">
          <h1 className="text-7xl font-bold">You're Already Logged in.</h1>
          <Link to="/" className="text-2xl bg-slate-300 rounded-full py-4 px-8">Go to Dashboard</Link>
        </div>
      ) : (
        <div className="mx-auto p-4 h-screen flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          {loginDetails.error && (
            <p className="text-red-500 mb-4">{loginDetails.error}</p>
          )}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-lg p-6 w-1/3"
          >
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={loginDetails.email}
                onChange={onChangeHandler}
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
                value={loginDetails.password}
                onChange={onChangeHandler}
                className="border rounded w-full p-2"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded w-full p-2 hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;

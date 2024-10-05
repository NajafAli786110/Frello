import React from "react";
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { useCustomContext } from "../context/UserContext";

const Header = () => {
  const { isLogin, currUserData } = useCustomContext();
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/">
        <h1 className="text-xl font-bold">Frello</h1>
      </Link>
      <nav>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link to="/projects" className="hover:text-gray-300">
              My Projects
            </Link>
          </li>
          <li>
            <Link to="/tasks" className="hover:text-gray-300">
              My Tasks
            </Link>
          </li>
          {isLogin ? (
            <li className="flex items-center space-x-2">
              <img
                src={currUserData.profilePicture}
                alt="User profile"
                className="w-8 h-8 rounded-full"
              />
              <span>{currUserData.name}</span>
            </li>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="flex items-center hover:text-gray-300"
                >
                  <FiLogIn className="mr-1" /> Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="flex items-center hover:text-gray-300"
                >
                  <FaUserPlus className="mr-1" /> Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <Link to="/"><h1 className="text-xl font-bold">Frello</h1></Link>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/Dashboard" className="hover:text-gray-300">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/projects" className="hover:text-gray-300">Projects</Link>
                    </li>
                    <li>
                        <Link to="/login" className="flex items-center hover:text-gray-300">
                            <FiLogIn className="mr-1" /> Login
                        </Link>
                    </li>
                    <li>
                        <Link to="/signup" className="flex items-center hover:text-gray-300">
                            <FaUserPlus className="mr-1" /> Sign Up
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

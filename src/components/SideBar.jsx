import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaProjectDiagram, FaTasks, FaUser } from 'react-icons/fa';

const SideBar = () => {
    // Sample user information (this will later be fetched dynamically)
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        profilePicture: 'https://img.icons8.com/?size=160&id=108652&format=png',
    };

    return (
        <aside className="bg-gray-200 w-64 h-screen p-4 w-1/5">
            <div className="flex items-center mb-4">
                <img src={user.profilePicture} alt="Profile" className="w-12 h-12 rounded-full mr-2" />
                <div>
                    <h2 className="font-bold">{user.name}</h2>
                    <p className="text-gray-600 text-sm">{user.email}</p>
                </div>
            </div>
            <nav>
                <ul className="space-y-2">
                    <li>
                        <Link to="/" className="flex items-center p-2 hover:bg-gray-300 rounded">
                            <FaTachometerAlt className="mr-2" /> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className="flex items-center p-2 hover:bg-gray-300 rounded">
                            <FaProjectDiagram className="mr-2" /> Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="/tasks" className="flex items-center p-2 hover:bg-gray-300 rounded">
                            <FaTasks className="mr-2" /> Tasks
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" className="flex items-center p-2 hover:bg-gray-300 rounded">
                            <FaUser className="mr-2" /> Profile
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="mt-6">
                <h3 className="font-semibold mb-2">Quick Actions</h3>
                <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add Project</button>
                <button className="w-full p-2 mt-2 bg-green-500 text-white rounded hover:bg-green-600">Add Task</button>
            </div>
        </aside>
    );
};

export default SideBar;

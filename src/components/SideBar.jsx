import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaProjectDiagram,
  FaTasks,
  FaUser,
} from "react-icons/fa";
import { useCustomContext } from "../context/UserContext";

const SideBar = () => {

  const { currUserData } = useCustomContext();

  return (
    <aside className="bg-gray-200 min-h-screen p-4 w-1/5">
      <div className="flex items-center mb-4">
        <img
          src={currUserData.profilePicture}
          alt="Profile"
          className="w-12 h-12 rounded-full mr-2"
        />
        <div>
          <h2 className="font-bold">{currUserData.name}</h2>
          <p className="text-gray-600 text-sm">{currUserData.email}</p>
        </div>
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="flex items-center p-2 hover:bg-gray-300 rounded"
            >
              <FaTachometerAlt className="mr-2" /> Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="flex items-center p-2 hover:bg-gray-300 rounded"
            >
              <FaProjectDiagram className="mr-2" /> Projects
            </Link>
          </li>
          <li>
            <Link
              to="/tasks"
              className="flex items-center p-2 hover:bg-gray-300 rounded"
            >
              <FaTasks className="mr-2" /> Tasks
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="flex items-center p-2 hover:bg-gray-300 rounded"
            >
              <FaUser className="mr-2" /> Profile
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Quick Actions</h3>
        <Link to="/add-a-project">
          <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Add Project
          </button>
        </Link>
        <Link to="/tasks">
          <button className="w-full p-2 mt-2 bg-green-500 text-white rounded hover:bg-green-600">
            Add Task
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default SideBar;

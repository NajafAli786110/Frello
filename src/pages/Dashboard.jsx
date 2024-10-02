import React from 'react';
import { FaChartPie, FaTasks, FaProjectDiagram } from 'react-icons/fa';
import { SideBar } from '../components';

const Dashboard = () => {
  // Sample data (this can be replaced with dynamic data later)
  const projects = 12;
  const tasks = 34;
  const completedTasks = 20;

  return (
    <>
      <div className='flex'>
        <SideBar />
        <div className="p-4 w-3/4">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {/* Project Overview Card */}
            <div className="bg-white shadow-lg rounded-lg p-4 flex items-center">
              <FaProjectDiagram className="text-blue-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold">Total Projects</h2>
                <p className="text-gray-600">{projects} Projects</p>
              </div>
            </div>

            {/* Task Overview Card */}
            <div className="bg-white shadow-lg rounded-lg p-4 flex items-center">
              <FaTasks className="text-green-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold">Total Tasks</h2>
                <p className="text-gray-600">{tasks} Tasks</p>
              </div>
            </div>

            {/* Completed Tasks Overview Card */}
            <div className="bg-white shadow-lg rounded-lg p-4 flex items-center">
              <FaChartPie className="text-yellow-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold">Completed Tasks</h2>
                <p className="text-gray-600">{completedTasks} Tasks</p>
              </div>
            </div>
          </div>

          {/* Additional Content Section */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <ul className="space-y-2">
              <li className="border-b py-2">📅 Created new project "Website Redesign"</li>
              <li className="border-b py-2">📝 Updated task "Finalize Project Scope"</li>
              <li className="border-b py-2">✅ Completed task "User Research"</li>
              <li className="border-b py-2">📅 Added new deadline for "Launch MVP"</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

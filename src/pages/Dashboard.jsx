import React from "react";
import {
  FaChartPie,
  FaTasks,
  FaProjectDiagram,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { MdOutlineTaskAlt } from "react-icons/md";
import { SideBar } from "../components";
import { useCustomContext } from "../context/UserContext";

const Dashboard = () => {
  const { projects } = useCustomContext();
  // Sample data (this can be replaced with dynamic data later)
  const project = 12;
  const tasks = 34;
  const completedTasks = 20;
  const projectsCount = projects.slice(0, 2);
  console.log(projectsCount);

  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="p-4 w-3/4">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {/* Project Overview Card */}
            <div className="bg-white shadow-lg rounded-lg p-4 flex items-center">
              <FaProjectDiagram className="text-blue-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold">Total Projects</h2>
                <p className="text-gray-600">{project} Projects</p>
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
            <h2 className="text-xl font-semibold mb-4">Recent Projects</h2>
            <div className="w-full flex gap-3 justify-between ">
              {projectsCount.map((data) => (
                <div
                  key={data.id}
                  className="bg-white shadow-lg rounded-lg p-6 py-9 max-w-sm mx-auto relative w-full"
                >
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-start">
                      <FaProjectDiagram className="text-blue-500 text-xl mr-2 mt-1" />
                      <h2 className="text-base font-medium text-gray-800 leading-5">
                        {data.projectTitle}
                      </h2>
                    </div>
                    {/* Edit and Delete Icons */}
                    <div className="flex items-center space-x-2">
                      <FaEdit
                        className="text-gray-600 hover:text-blue-500 cursor-pointer"
                        onClick={() => {
                          setCurrProjectData({
                            id: data.id,
                            projectName: data.projectTitle,
                            description: data.projectTask,
                            endDate: data.projectDeadline,
                            status: data.projectStatus,
                          });
                          closeModal(true);
                        }}
                      />
                      <FaTrash
                        className="text-gray-600 hover:text-red-500 cursor-pointer"
                        onClick={() => OnDeleteHandler(data.id)}
                      />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="flex gap-1 items-start">
                    <MdOutlineTaskAlt />
                    <p className="text-gray-600 mb-4 text-xs">
                      {data.projectTask}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="flex justify-between text-gray-500">
                    <p className="text-xs">Deadline: {data.projectDeadline}</p>
                    <p
                      className={`text-xs ${
                        data.projectStatus === "Completed"
                          ? "text-green-500"
                          : "text-yellow-500"
                      }`}
                    >
                      Status: {data.projectStatus}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

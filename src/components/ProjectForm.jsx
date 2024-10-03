import React, { useState } from "react";
import SideBar from "./SideBar";
import { useCustomContext } from "../context/UserContext";

const ProjectForm = () => {

    // Fetch Dispatch So We can send Form data thorugh reducer to Project Data.
    const { projectDispatch } = useCustomContext();
    // State for form inputs
    const [project, setProject] = useState({
        projectName: "",
        description: "",
        startDate: "",
        endDate: "",
        status: "Not Started",
    });

    const handleChange = (e) => {
        setProject({
            ...project,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Project Details:", project);
        // Here my functionality to save project details
        projectDispatch({
            type: 'ADD_PROJECT',
            projectName: project.projectName,
            description: project.description,
            endDate: project.endDate,
            status: project.status,
        })
        alert("Project Created Successfully");
        setProject({
            projectName: "",
            description: "",
            startDate: "",
            endDate: "",
            status: "Not Started",
        })
    };

    return (
        <div className="flex">
            <SideBar />
            <div className="w-3/4 max-w-lg mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Create a New Project
                </h2>
                <form onSubmit={handleSubmit}>
                    {/* Project Name */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">
                            Project Name
                        </label>
                        <input
                            type="text"
                            name="projectName"
                            value={project.projectName}
                            onChange={handleChange}
                            className="block w-full p-2 border border-gray-300 rounded-lg"
                            placeholder="Enter project name"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={project.description}
                            onChange={handleChange}
                            className="block w-full p-2 border border-gray-300 rounded-lg"
                            placeholder="Enter project description"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    {/* Start Date */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">
                            Start Date
                        </label>
                        <input
                            type="date"
                            name="startDate"
                            value={project.startDate}
                            onChange={handleChange}
                            className="block w-full p-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>

                    {/* End Date */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">
                            End Date
                        </label>
                        <input
                            type="date"
                            name="endDate"
                            value={project.endDate}
                            onChange={handleChange}
                            className="block w-full p-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>

                    {/* Status */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Status</label>
                        <select
                            name="status"
                            value={project.status}
                            onChange={handleChange}
                            className="block w-full p-2 border border-gray-300 rounded-lg"
                        >
                            <option value="Not Started">Not Started</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                    >
                        Create Project
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProjectForm;

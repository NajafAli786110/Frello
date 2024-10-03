import React, { useState } from 'react';
import { FaProjectDiagram, FaEdit, FaTrash } from 'react-icons/fa';
import { MdOutlineTaskAlt } from "react-icons/md";
import { SideBar } from '../components';
import { useCustomContext } from '../context/UserContext';
import PopupEditForm from '../components/popupEditForm';

const Projects = () => {
    // Fetch Project to show
    const { projects, projectDispatch, closeModal } = useCustomContext();
    const [currProjectData, setCurrProjectData] = useState({
        id: '',
        projectName: "",
        description: "",
        endDate: "",
        status: "Not Started",
    });

    // Creating onDelete Function to delete the Project Card
    function OnDeleteHandler(id) {
        projectDispatch({
            type: 'DEL_PROJECT',
            id: id,
        });
    }

    return (
        <div className='flex'>
            <SideBar />
            <div className="p-4 w-3/4">
                <h1 className="text-2xl font-bold mb-4">Projects</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((data) => (
                        <div key={data.id} className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto relative">
                            {/* Card Header */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-start">
                                    <FaProjectDiagram className="text-blue-500 text-xl mr-2 mt-1" />
                                    <h2 className="text-base font-medium text-gray-800 leading-5">{data.projectTitle}</h2>
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
                                    <FaTrash className="text-gray-600 hover:text-red-500 cursor-pointer" onClick={() => OnDeleteHandler(data.id)} />
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="flex gap-1 items-start">
                                <MdOutlineTaskAlt />
                                <p className="text-gray-600 mb-4 text-xs">{data.projectTask}</p>
                            </div>

                            {/* Card Footer */}
                            <div className="flex justify-between text-gray-500">
                                <p className='text-xs'>Deadline: {data.projectDeadline}</p>
                                <p className={`text-xs ${data.projectStatus === 'Completed' ? 'text-green-500' : 'text-yellow-500'}`}>Status: {data.projectStatus}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Render the edit popup */}
            <PopupEditForm projectData={currProjectData} setCurrProjectData={setCurrProjectData} />
        </div>
    );
};

export default Projects;

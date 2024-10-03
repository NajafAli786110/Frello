import React from 'react';
import { IoMdClose } from "react-icons/io";
import { useCustomContext } from '../context/UserContext';

const PopupEditForm = ({ projectData, setCurrProjectData }) => {
    const { isOpen, closeModal, projectDispatch } = useCustomContext();

    const editSubmissionHandler = (e) => {
        e.preventDefault();

        // Dispatch the edit action
        projectDispatch({
            type: 'EDIT_PROJECT',
            id: projectData.id,
            payload: projectData,
        });

        closeModal(false);
        alert("Edit Successfully");
    };

    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className={`bg-white rounded-lg p-6 w-96 shadow-lg transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-90'}`}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">Edit Project</h2>
                    <IoMdClose className="text-gray-600 cursor-pointer" onClick={() => closeModal(false)} />
                </div>
                <form onSubmit={editSubmissionHandler}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Project Title</label>
                        <input
                            type="text"
                            value={projectData.projectName}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
                            onChange={(e) => setCurrProjectData({ ...projectData, projectName: e.target.value })}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Task Description</label>
                        <textarea
                            value={projectData.description}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
                            onChange={(e) => setCurrProjectData({ ...projectData, description: e.target.value })} // Ensure you update state on input change
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Deadline</label>
                        <input
                            type="date"
                            value={projectData.endDate}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
                            onChange={(e) => setCurrProjectData({ ...projectData, endDate: e.target.value })} // Ensure you update state on input change
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Status</label>
                        <select
                            value={projectData.status}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
                            onChange={(e) => setCurrProjectData({ ...projectData, status: e.target.value })} // Ensure you update state on input change
                        >
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={() => closeModal(false)}
                            className="mr-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PopupEditForm;

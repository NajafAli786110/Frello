import React from 'react';
import { FaProjectDiagram } from 'react-icons/fa';
import { SideBar } from '../components';

const Projects = () => {
    const projectData = [
        {
            id: 1,
            title: "Website Redesign",
            description: "Revamping the user interface and user experience.",
            deadline: "2024-10-15",
        },
        {
            id: 2,
            title: "Mobile App Development",
            description: "Creating a mobile app for our services.",
            deadline: "2024-12-01",
        },
        {
            id: 3,
            title: "E-commerce Platform",
            description: "Building a new online store with various features.",
            deadline: "2024-11-20",
        },
        {
            id: 4,
            title: "SEO Optimization",
            description: "Improving the website's visibility on search engines.",
            deadline: "2024-09-30",
        },
        {
            id: 5,
            title: "Social Media Campaign",
            description: "Launching a marketing campaign on social platforms.",
            deadline: "2024-10-25",
        },
    ];

    return (
        <div className='flex'>
          <SideBar />
          <div className="p-4 w-3/4">
            <h1 className="text-2xl font-bold mb-4">Projects</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projectData.map((project) => (
                    <div key={project.id} className="bg-white shadow-lg rounded-lg p-4">
                        <div className="flex items-center mb-2">
                            <FaProjectDiagram className="text-blue-500 text-3xl mr-2" />
                            <h2 className="text-xl font-semibold">{project.title}</h2>
                        </div>
                        <p className="text-gray-600 mb-2">{project.description}</p>
                        <p className="text-gray-500">Deadline: {project.deadline}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Projects;

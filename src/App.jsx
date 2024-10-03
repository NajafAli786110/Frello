import { useEffect, useReducer, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Dashboard, Login, Projects, Signup, UserTask } from "./pages/index";
import { Header, Footer, ProjectForm } from "./components/index";
import { UserContextProvider } from "./context/UserContext.js";
import {
  projectReducer,
  taskReducer,
  UserReducer,
} from "./reducer/AppReducer.jsx";
import Testing from "./components/Testing.jsx";

export default function App() {
  const userDetailsData = [
    {
      id: 0,
      name: "Najaf Ali",
      email: "Najaf@gmail.com",
      pass: "hello@123",
    },
  ];

  const projectData = [
    {
      id: 0,
      projectTitle: "WordPress Website Redesign",
      projectTask: "Revamping the user interface and user experience.",
      projectDeadline: "2024-10-15",
      projectStatus: "Completed",
    },
    {
      id: 1,
      projectTitle: "Mobile App Development",
      projectTask: "Creating a mobile app for our services.",
      projectDeadline: "2024-10-15",
      projectStatus: "Working",
    },
    {
      id: 2,
      projectTitle: "E-commerce Platform",
      projectTask: "Building a new online store with various features.",
      projectDeadline: "2024-10-15",
      projectStatus: "Not Started",
    },
    {
      id: 3,
      projectTitle: "SEO Optimization",
      projectTask: "Improving the websites visibility on search engines.",
      projectDeadline: "2024-10-15",
      projectStatus: "In Progress",
    },
    {
      id: 4,
      projectTitle: "Social Media Campaign",
      projectTask: "Launching a marketing campaign on social platforms.",
      projectDeadline: "2024-10-15",
      projectStatus: "Completed",
    },
  ];

  const taskData = [
    {
      id: 0,
      taskName: "Task 1",
    },
    {
      id: 1,
      taskName: "Task 2",
    },
  ];

  // Yaha pai States banai hai jinme me user ka data store karwana hai.

  // ---> FOR MANAGE USER DATA <---
  const [userData, userDispatch] = useReducer(UserReducer, userDetailsData);
  // ---> FOR MANAGE PROJECT DATA <---
  const [projects, projectDispatch] = useReducer(projectReducer, projectData);
  // ---> FOR MANAGE TASK DATA <---
  const [tasks, taskDispatch] = useReducer(taskReducer, taskData);
  // ---> EDIT FORM STATE MANAGE <---
  const [isOpen, closeModal] = useState(false);
  // ---> EDIT FORM STATE MANAGE <---
  const [isOpenTask, setClosedTask] = useState(false);

  // useEffect(() => {
  //   const storeProjectsData = JSON.parse(localStorage.getItem("projects"));
  //   const storeTasksData = JSON.parse(localStorage.getItem("tasks"));

  //   if (storeProjectsData) {
  //     projectDispatch({ type: "SET_PROJECTS", payload: storeProjectsData });
  //   }
  //   if (storeTasksData) {
  //     taskDispatch({ type: "SET_TASKS", payload: storeTasksData });
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("projects", JSON.stringify(projects));
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [projects, tasks]);

  return (
    <UserContextProvider
      value={{
        userData,
        projects,
        isOpen,
        isOpenTask,
        tasks,
        userDispatch,
        projectDispatch,
        closeModal,
        setClosedTask,
        taskDispatch,
      }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          {/* App Routing Setup */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/tasks" element={<UserTask />} />
          <Route path="/add-a-project" element={<ProjectForm />} />
        </Routes>
        {/* Setup End  */}
        <Footer />
      </BrowserRouter>
    </UserContextProvider>
  );
}

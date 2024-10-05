import { useEffect, useReducer, useState } from "react";
import { Triangle } from "react-loader-spinner";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
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
      name: "Najaf Ali Balti",
      email: "Najaf@gmail.com",
      pass: "hello@123",
    },
    {
      id: 1,
      name: "Demo",
      email: "demo@gmail.com",
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

  const currentUser = {
    name: "John Doe",
    email: "john.doe@example.com",
    profilePicture: "https://img.icons8.com/?size=160&id=108652&format=png",
  };

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
  const [isLogin, setLogin] = useState(false);
  // ---> EDIT FORM STATE MANAGE <---
  const [isOpenTask, setClosedTask] = useState(false);
  // ---> CURRENT USER STATE MANAGE <---
  const [currUserData, setCurrUserData] = useState(currentUser);

  return (
    <UserContextProvider
      value={{
        userData,
        projects,
        isOpen,
        isOpenTask,
        tasks,
        currUserData,
        isLogin,
        userDispatch,
        projectDispatch,
        closeModal,
        setClosedTask,
        taskDispatch,
        setCurrUserData,
        setLogin,
      }}
    >
      <Router>
        <Header />
        <PageLoader />
        {/* Setup End  */}
        <Footer />
      </Router>
    </UserContextProvider>
  );
}

function PageLoader() {
  // Import UseLocation to tract user route changing state
  const currlocation = useLocation();
  // ---> Loading State MANAGE <---
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [currlocation]);

  return loading ? (
    <div className="flex justify-center items-center h-screen">
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  ) : (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/testing" element={<Testing />} />
      <Route path="/tasks" element={<UserTask />} />
      <Route path="/add-a-project" element={<ProjectForm />} />
    </Routes>
  );
}

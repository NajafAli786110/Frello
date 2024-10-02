import { useReducer } from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import { Dashboard, Login, Projects, Signup } from './pages/index';
import { Header, Footer } from './components/index';
import { UserContextProvider } from './context/UserContext.js';
import { UserReducer } from './reducer/AppReducer.jsx';
import Testing from "./components/Testing.jsx";



export default function App() {

  const userDetailsData = [
    {
      id: 0,
      name: 'Najaf Ali',
      email: 'Najaf@gmail.com',
      pass: 'hello@123',
    }
  ]

  // Yaha pai States banai hai jinme me user ka data store karwana hai.
  const [userData, userDispatch] = useReducer(UserReducer, userDetailsData);


  return (
    <UserContextProvider value={{ userData, userDispatch }}>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* App Routing Setup */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testing" element={<Testing />} />
        </Routes>
        {/* Setup End  */}
        <Footer />
      </BrowserRouter>
    </UserContextProvider>
  )
}

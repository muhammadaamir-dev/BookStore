



import { Toaster } from 'react-hot-toast'
import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
import Courses from './courses/Courses.jsx'
import Home from './home/Home.jsx'
import { Navigate, Route, Routes } from "react-router-dom"
import { useAuth } from './context/AuthProvider.jsx'
import { useEffect } from 'react'
 
import About0 from './About/About0.jsx'
import Contact0 from './Contact/Contact0.jsx'

const App = () => {
  const [authUser, setAuthUser] = useAuth()

 useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div>
      {/* <div className='dark:bg-slate-900 dark:text-white'> */}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Course' element={authUser ? <Courses /> : <Navigate to="/signup" />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
           <Route path='/about' element={<About0 />} />
           <Route path='/contact' element={<Contact0 />} />
        </Routes>
        <Toaster />


      </div>
    // </div>
  )
}

export default App
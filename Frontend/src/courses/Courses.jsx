import React from 'react'
import NavBar from '../Components/NavBar'
import Course from '../Components/Course'
import Footer from '../Components/Footer'

const Courses = () => {

    
    return (
        <div>
            <NavBar />
            <div className='min-h-screen'>
                <Course />
            </div>

            <Footer />
        </div>
    )
}

export default Courses
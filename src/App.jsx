import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home  from './Home';
import Lectures from './Lectures';
import Papers from './Papers';
import Projects from './Projects';
import Courses from './Courses';
import Contact from './Contact';
import { Navbar } from './navbar/Navbar';


function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />

        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Lectures' element={<Lectures />} />
          <Route path='/Papers' element={<Papers />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Courses' element={<Courses />} />
          <Route path='/Contact' element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App

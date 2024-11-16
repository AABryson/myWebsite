import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import { Home } from './home/Home';
import { Papers } from './papers/Papers';
import { Projects } from './projects/Projects';
import { Courses } from './courses/Courses';
import { Contact } from './contact/Contact';
import { Navbar } from './navbar/Navbar';
import { Lectures } from './lectures/Lectures';

export const App = () => 
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Lectures' element={<Lectures />} />
      <Route path='/Papers' element={<Papers />} />
      <Route path='/Projects' element={<Projects />} />
      <Route path='/Courses' element={<Courses />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>
  </BrowserRouter>

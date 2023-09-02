import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from "../components/Home/Home.jsx"
import About from '../components/About/About.jsx';
import Service from '../components/Service/Service.jsx';
import Project from '../components/Project/Project.jsx';

const Rout = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/service' element={<Service />} />
            <Route path='/project' element={<Project />} />
        </Routes>
    </>
  )
}

export default Rout
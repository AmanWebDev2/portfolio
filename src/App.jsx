import { Link, Route, Routes } from 'react-router-dom'
import React from 'react';
import './App.css'
import CustomPointer from './components/CustomPointer'
// const Home = React.lazy(()=>import('./components/Home'));
// const About = React.lazy(()=>import('./components/AboutMe'));
// const Hero = React.lazy(()=>import('./components/Hero'));
// const Contact = React.lazy(()=>import('./components/Contact'));
import About from './components/AboutMe'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Home from './components/Home' 
import LeftBar from './components/leftBar';
import RightBar from './components/RightBar';
import MobileNav from './components/MobileNav';
function App() {
  return (
    <>
  <CustomPointer/>
    {/* <Hero/> */}
    <Routes>
        <Route exact path="/" element={<Hero/>}>
          <Route index element={<Home/>} />
          <Route path="contact" element={<Contact/>}/>
          <Route path="about" element={<About/>}/>
        </Route>
    </Routes> 
    </>
  )
}

export default App

import { Link, Route, Routes } from 'react-router-dom'
import React, { Suspense, useEffect, useState } from 'react';
import './App.css'
import CustomPointer from './components/CustomPointer'
const Home = React.lazy(()=>import('./components/Home'));
const About = React.lazy(()=>import('./components/AboutMe'));
const Hero = React.lazy(()=>import('./components/Hero'));
const Contact = React.lazy(()=>import('./components/Contact'));
function App() {
  const [showPointer,setShowPointer] = useState(()=>window.innerWidth > 500);

  useEffect(()=>{
    const handleResize=()=>{
      if(window.innerWidth > 500) {
        setShowPointer(true);
      }else {
        setShowPointer(false);
      }
    }
    const handleScroll=()=>{
      // if(showPointer) {
      //   setShowPointer(false);
      // }else{
      //   setShowPointer(true);
      // }
    }
    window.addEventListener('resize',handleResize);
    window.addEventListener('scroll',handleScroll);
    return()=>{
      window.removeEventListener('resize',handleResize);
    }
  },[]);

  return (
    <>
    {/* <Hero/> */}
    <Routes>
        <Route exact path="/" element={
          <Suspense fallback={<div>Loading...</div>}>
          <Hero/>
          </Suspense>
        }>
          <Route index element={
             <Suspense fallback={<div>Loading...</div>}>
                <Home/>
             </Suspense>
          } />
          <Route path="contact" element={
             <Suspense fallback={<div>Loading...</div>}>
          <Contact/>
             </Suspense>
          }/>
          <Route path="about" element={
            <Suspense fallback={<div>Loading...</div>}>
          <About/>
          </Suspense>
          }/>
        </Route>
    </Routes> 
    </>
  )
}

export default App

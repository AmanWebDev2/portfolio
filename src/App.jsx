import { Link, Route, Routes } from 'react-router-dom'
import React, { Suspense } from 'react';
import './App.css'
import CustomPointer from './components/CustomPointer'
const Home = React.lazy(()=>import('./components/Home'));
const About = React.lazy(()=>import('./components/AboutMe'));
const Hero = React.lazy(()=>import('./components/Hero'));
const Contact = React.lazy(()=>import('./components/Contact'));
// import About from './components/AboutMe'
// import Contact from './components/Contact'
// import Hero from './components/Hero'
// import Home from './components/Home' 
function App() {
  return (
    <>
  <CustomPointer/>
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

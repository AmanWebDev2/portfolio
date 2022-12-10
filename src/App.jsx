import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/AboutMe'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Home from './components/Home' 
function App() {
  return (
    <>
    <Hero/>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
    </Routes>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Project from './components/projects/Project'
import Education from './components/education/Education'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Blur from './Blur'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className="relative">

  {/* GLOBAL BACKGROUND */}
  <div className="fixed inset-0 -z-10 
                  bg-linear-to-r 
                  from-[#020024] 
                  via-[#13132a] 
                  to-[#03232a]">

      {/* pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(45deg, rgba(68,76,247,0.03) 50%, rgba(229,229,247,0.03) 50%)",
          backgroundSize: "7px 7px",
        }}
      />

      <Blur position={{top:'35%',left:'20%'}} size={{width:'30%',height:'40%'}} />
  </div>

  {/* CONTENT */}
  <Navbar/>
  <About/>
  <Skills/>
  <Project/>
  <Education/>
  <Contact/>
  <Footer/>

</div>

    </>
  )
}

export default App

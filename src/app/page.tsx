"use client"
import Image from 'next/image'
import Navbar from './components/navbar'
import Main from './components/main'
import About from './components/About'
import Skills from './components/skills'
import Projects from './components/Projects'
import Contact from './components/contact'


export default function Home() {
  return (
    <div>
    <Navbar />
    <Main/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/></div>
    
  )

}

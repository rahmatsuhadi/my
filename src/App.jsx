

import { useState } from 'react'

import './App.css'
import './Utils.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Project from './component/Project'
import About from './component/About'
import SkillList from './component/Skill'
import ExperienceEducation from './component/Experience'
import ContactForm from './component/Contact'
import BlogSection from './component/Blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <About/>
      <SkillList/>
      <ExperienceEducation/>
      <Project/>
      <BlogSection/>
      <Footer />
    </>
  )
}

export default App

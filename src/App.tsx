"use client"
import "./App.css"

import { motion } from "framer-motion"
import { useState } from "react"
import Experience from "./section/experience"
import About from "./section/about"
import Profile from "./section/profile"
import Skills from "./section/skills"
import Projects from "./section/projects"
import Techstack from "./section/techstack"
import Blog from "./section/blog"
import AllExperiences from "./section/allExperiences"
import AllSkills from "./section/allskills"
import AllProjects from "./section/allProjects"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

function App() {
  const [showAllTechs, setShowAllTechs] = useState(false)
  const [showAllExp, setShowAllExp] = useState(false)
  const [showAllProj, setShowAllProj] = useState(false)
  const [showAllblog, setShowAllBlog] = useState(false)

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-auto">
      <div className="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      {/* Mobile Layout */}
      <div className="lg:hidden p-4 flex flex-col gap-4">
        <Profile />
        <About />
        <Techstack setShowAllTechs={setShowAllTechs} />
        <Skills />
        <Experience setShowAllExp={setShowAllExp} />
        <Projects setShowAllProj={setShowAllProj} />
        <Blog setShowAllBlog={setShowAllBlog}/>
      </div>

      {/* Desktop Layout */}
      <motion.aside
        className="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 h-screen"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Left Sidebar */}
        <motion.aside className="lg:col-span-2 flex flex-col gap-4 h-full" variants={item}>
          <Profile />
          <Skills />
        </motion.aside>

        {/* Main Content */}
        <motion.main className="col-span-7 flex flex-col gap-4 h-full" variants={item}>
          <About />
          <Experience setShowAllExp={setShowAllExp} />
          <Projects setShowAllProj={setShowAllProj} />
        </motion.main>

        {/* Right Sidebar */}
        <motion.aside className="col-span-3 flex flex-col gap-6 h-full" variants={item}>
          <Techstack setShowAllTechs={setShowAllTechs} />
          <Blog setShowAllBlog={setShowAllBlog}/>
        </motion.aside>
      </motion.aside>

      {/* Show More Card */}
      {showAllTechs && <AllSkills setShowAllSkills={setShowAllTechs} />}
      {showAllProj && <AllProjects setShowAllProj={setShowAllProj} />}
      {showAllExp && <AllExperiences setShowAllExp={setShowAllExp} />}
      {showAllblog && <AllExperiences setShowAllExp={setShowAllExp} />}
    </div>
  )
}

export default App

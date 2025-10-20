'use client'

import AboutMe from "@/sections/AboutMe"
import Contact from "@/sections/Contact"
import Experience from "@/sections/Experience"
import HeroSection from "@/sections/HeroSection"
import Portofolio from "@/sections/Portofolio"
import Skills from "@/sections/Skills"
import Testimonials from "@/sections/Testimonials"

function Home() {
  return (
    <>
      <HeroSection/>
      <AboutMe/>
      <Skills/>
      <Portofolio/>
      <Experience/>
      <Testimonials/>
      <Contact/>
    </>
  )
}

export default Home

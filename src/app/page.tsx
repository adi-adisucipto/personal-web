'use client'

import Card from "@/components/Card"
import AboutMe from "@/sections/AboutMe"
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
    </>
  )
}

export default Home

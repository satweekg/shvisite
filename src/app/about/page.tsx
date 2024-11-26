import React from 'react'
import AboutHero from '../Components/About/AboutHero'
import { AboutSection } from '../Components/About/AboutSection'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function page() {
  return (
    <>
    <Navbar />
     <AboutSection />
    <AboutHero />
   <Footer />
    </>
  )
}

export default page
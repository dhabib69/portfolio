
import React from 'react'
import Header from './components/header/Header'
import Navigation from './components/navigation/navigation'
import Projects from './components/project/project'
import About from './components/about/about'
import Skills from './components/skills/skills'
import Contacts from './components/contact/contact'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <>
     <Header />
     <Navigation/>
     <About/>
     <Skills/>
     <Projects/>
     <Contacts/>
     <Footer />
    </>
  )
}

export default App
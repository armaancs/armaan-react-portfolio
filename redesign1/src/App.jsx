import { LazyMotion, MotionConfig, domAnimation } from 'motion/react'
import Scene from './components/Scene.jsx'
import Reveal from './components/Reveal.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Certifications from './components/Certifications.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { useTheme } from './hooks/useTheme.js'

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <LazyMotion features={domAnimation} strict>
    <MotionConfig reducedMotion="user">
      <div id="top" />
      <a href="#main" className="skip-link">Skip to content</a>
      <Scene theme={theme} />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <div className="section grid items-start gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Education />
          </Reveal>
          <Reveal index={1} className="lg:col-span-7">
            <Certifications />
          </Reveal>
        </div>
        <Experience />
        <Contact />
      </main>

      <Footer />
      <div aria-hidden="true" className="grain" />
    </MotionConfig>
    </LazyMotion>
  )
}

export default App

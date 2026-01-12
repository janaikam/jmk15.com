import { useState, useEffect } from 'react'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { AgileDelivery } from './components/AgileDelivery'
import { Hobbies } from './components/Hobbies'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage or system preference
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    //Fixes Scroll Restoration on reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
    const root = document.documentElement
    root.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    // if (isDark) {
    //   root.setAttribute('data-theme', 'dark')
    //   localStorage.setItem('theme', 'dark')
    // } else {
    //   root.removeAttribute('data-theme')
    //   localStorage.setItem('theme', 'light')
    // }
  }, [isDark])

  return (
    <>
      <Navigation isDark={isDark} onToggleDark={() => setIsDark(!isDark)} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <AgileDelivery />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

import './index.css'
import Navbar from './Navbar.jsx'
import DevProj from './DevProj.jsx'
import Title from './Title.jsx'
import CurrTech from './CurrTech.jsx'
import Experience from './Experience.jsx'
import Footer from './Footer.jsx'
import React, { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Parallax effect
  useEffect(() => {
    const bg = document.getElementById("bg-layer");

    function updateBackgroundPosition() {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;

      const start = 50; // starting Y (%)
      const end = 100;  // ending Y (%)
      const yPos = start + (end - start) * scrollPercent;

      if (bg) bg.style.backgroundPosition = `50% ${yPos}%`;
    }

    // run once + on scroll
    updateBackgroundPosition();
    window.addEventListener("scroll", updateBackgroundPosition);

    return () => {
      window.removeEventListener("scroll", updateBackgroundPosition);
    };
  }, [darkMode]);

  // Loader fade
  useEffect(() => {
    window.addEventListener('load', () => {
      const loader = document.getElementById('loader');
      const content = document.getElementById('main-content');

      loader.style.opacity = '0';

      setTimeout(() => {
        loader.style.display = 'none';
        content.style.opacity = '1';
      }, 1500);
    });
  }, []);

  return (
    <>
      {/* Background Layer */}
      <div
        id="bg-layer"
        className={`fixed inset-0 -z-10 bg-cover bg-no-repeat transition-colors duration-300 ${
          darkMode
            ? 'dark-mode bg-[url("./assets/darkMode.png")]'
            : 'light-mode bg-[url("./assets/lightMode.png")]'
        }`}
      ></div>

      {/* Loader */}
      <div id="loader" className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50 transition-opacity duration-1500">
        <div className="w-24 h-24 border-12 border-[#3EC232] border-t-transparent rounded-full animate-spin mb-4 synth-glow"></div>
        <p className="text-2xl text-[#63A54D] synth-glow">LOADING...</p>
      </div>

      {/* Main Content */}
      <div id="main-content" className="opacity-0 transition-opacity duration-1000">
        <Navbar />
        <Title />
        <CurrTech />
        <DevProj />
        <Experience />
        <Footer />
      </div>

      <button
  onClick={toggleDarkMode}
  className="fixed bottom-6 right-6 w-28 h-12 bg-blue-300 dark:bg-gray-700 rounded-full flex items-center px-1 cursor-pointer transition-colors duration-300 shadow-lg"
>
  {/* Sliding Circle with label and icon */}
  <div
    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transform transition-all duration-300 shadow-md
      ${darkMode 
        ? "translate-x-16 bg-purple-500 text-purple-100" 
        : "translate-x-0 bg-yellow-400 text-yellow-700"
      }`}
  >
    {darkMode ? <h1 className='pixelify-sans'>Dark</h1> : <h1 className='pixelify-sans'>Light</h1>}
  </div>
</button>


    </>
  )
}

export default App

import './Title.css'
import './index.css'
import Profile from './assets/Profile.png'
import github from './assets/Github.png'
import linkedIn from './assets/LinkedINAni.png'
import instagram from './assets/InstagramAni.png'
import AI from './assets/AI.png'
import Rocket from './assets/Rocket.png'
import { useState, useEffect } from 'react';

function Title() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row text-white justify-center items-center relative mt-4 px-4 md:px-10">
        {/* Title Section */}
        <div id="Title" className="flex flex-col items-center p-6 md:p-10 translate-y-4 text-center lg:text-left">
          <div className="inline-flex items-center gap-1">
            <p className="pixelify-sans text-lg md:text-2xl synth-glow">based in</p>
            <p className="pixelify-sans text-lg md:text-2xl synth-glow text-red-500">canada</p>
          </div>

          {/* Name */}
          <h1 className="synth-glow pixelify-sans text-white dark:text-black font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[130px] animate-pulse">
            ARMAAN
          </h1>
          <h1 className="synth-glow pixelify-sans text-white dark:text-[#63A54D] font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[130px] tracking-widest animate-pulse">
            CHOWDHURY
          </h1>

          {/* Tagline */}
          <div className="inline-flex items-center gap-2 m-3 flex-wrap justify-center">
            <img src={Rocket} className="h-8 md:h-10" alt="Rocket" />
            <p className="pixelify-sans text-sm sm:text-lg md:text-xl synth-glow">
              Software | Web Dev | UI/UX | AI Enthusiast
            </p>
            <img src={AI} className="h-8 w-8 md:h-12 md:w-11 mb-1" alt="AI" />
          </div>

{/* Socials */}
<div className="inline-flex gap-4 mt-4">
  <a href="https://github.com/armaancs" target="_blank" rel="noopener noreferrer">
    <img
      src={github}
      alt="GitHub"
      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 
                 hover:animate-spin transition-transform duration-300"
    />
  </a>
  <a href="https://www.instagram.com/armaan.cxx/" target="_blank" rel="noopener noreferrer">
    <img
      src={instagram}
      alt="Instagram"
      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 
                 hover:animate-spin transition-transform duration-300"
    />
  </a>
  <a href="https://www.linkedin.com/in/armaan-chowdhury-2075a1337/" target="_blank" rel="noopener noreferrer">
    <img
      src={linkedIn}
      alt="LinkedIn"
      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 
                 hover:animate-spin transition-transform duration-300"
    />
  </a>
</div>


          {/* Scroll Down Prompt */}
          <div className="pixelify-sans flex flex-col items-center justify-center mt-8 animate-bounce cursor-pointer opacity-80">
            <p className="text-sm sm:text-base md:text-lg">Scroll down to view more</p>
            <span className="text-lg sm:text-xl md:text-2xl">↓</span>
          </div>
        </div>

        {/* Profile Image */}
<img
  src={Profile}
  alt="Profile"
  className="
    w-40 h-40 
    sm:w-56 sm:h-56 
    md:w-72 md:h-72 
    lg:w-96 lg:h-96 
    xl:w-[28rem] xl:h-[28rem] 
    2xl:w-[32rem] 2xl:h-[32rem]
    max-w-[80vw] max-h-[80vw]
    rounded-full border-4 md:border-8 border-[#63A54D] object-cover
    animate-slide-in-right [animation-delay:3s] mt-6 lg:mt-0 lg:ml-10
  "
/>
      </div>
    </>
  );
}

export default Title;

import './Title.css'
import './index.css'
import Profile from './assets/Profile.png'
import github from './assets/Github.png'
import linkedIn from './assets/LinkedINAni.png'
import instagram from './assets/InstagramAni.png'
import AI from './assets/AI.png'
import Rocket from './assets/Rocket.png'
import { useState, useEffect } from 'react';

function Title(){
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

    return(
      <>
      <div class = "flex text-white justify-center items-center relative mt-1">
        {/* Title Section */}
        <div id = "Title" className="flex flex-col items-center p-10 translate-y-4">
          <div className='inline-flex items-center gap-1'>
          <p className="pixelify-sans text-[25px] synth-glow">based in</p>
          <p className="pixelify-sans text-[25px] synth-glow text-red-500">canada</p>
          </div>
          <h1 className="synth-glow pixelify-sans text-white dark:text-[#1E293B] font-extrabold text-[130px] animate-pulse">ARMAAN</h1>
          <h1 className="synth-glow pixelify-sans text-white dark:text-[#63A54D] font-extrabold text-[130px] tracking-widest animate-pulse">CHOWDHURY</h1>
          
          <div className = "inline-flex items-center gap-1 m-2">
            <img src = {Rocket} className = ""></img>
            <p className="pixelify-sans text-[25px] synth-glow">Software | Web Dev | UI/UX | AI Enthusiast</p>
            <img src = {AI} className = "h-12 w-11 mb-1"></img>
          </div>

           <div class = "inline-flex">
       <a href = "https://github.com/r0gzz" target="_blank" rel="noopener noreferrer"><img src={github} class = "hover:animate-spin -translate-y-0.5"></img></a>
       <a href = "https://www.instagram.com/armaan.cxx/" target="_blank" rel="noopener noreferrer"><img src={instagram} class = "hover:animate-spin"></img></a>
       <a href = "https://www.linkedin.com/in/armaan-chowdhury-2075a1337/" target="_blank" rel="noopener noreferrer"><img src={linkedIn} class = "hover:animate-spin"></img></a>
         </div>

        <div class="pixelify-sans flex flex-col items-center justify-center mt-10 animate-bounce cursor-pointer opacity-80">
          <p class="text-white text-lg font-pixel">Scroll down to view more</p>
          <span class="text-white text-2xl">↓</span>
        </div>

        </div>{/* End of Title Section */}
        
        {/*Profile*/}
        <img src = {Profile} class = "-translate-y-8 w-150 h-150 mr-10 mb-10 rounded-full border-8 border-[#63A54D] object-cover animate-slide-in-right [animation-delay:3s]"></img>
         
         
      </div>
      {/* End of Title Section */}
      </>

        

    );
}

export default Title;
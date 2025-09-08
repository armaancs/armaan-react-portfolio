import "./index.css"
import "./DevProj.css"
import React, { useState, useEffect, useRef } from "react";
import pokemonImg from './assets/pokemon.png';
import githubIcon from './assets/github.png';
import LogozAIimg from './assets/LogozAI.png';
import mazeAlogirthmImg from './assets/mazeAlgorithm.png';
import portfolioimg from './assets/portfolio.png';
 


const projects = [
  {
    title: "Pokemon Demo",
    date: "Last Updated: June 2022",
    madeWith:"Java",
    description: "A short demo of pokemon that included a battle system (type disadvantage/advantages included), a 2D map to traverse, and a few pokemon.",
    image: pokemonImg,
    githubLink:"https://github.com/",
  },
  {
    title: "LogozAI",
    date:"Last Updated: January 2025",
    madeWith:["HTML", "CSS", "OpenAI API"],
    description: "A website that generates a custom logo using OpenAI's API based on your preferances. This was built during the 2025 Qhacks Hackathon. The image above is a sample logo that was generated.",
    image: LogozAIimg,
    githubLink:"https://github.com/",
  },
  {
    title: "Maze Generation Algorithm",
    date: "Last Updated: June 2025",
    madeWith: "Python",
    description: "A maze generation algorithim I made for an upcoming roblox game. It generates a 2d maze with a 2d array by using a backtracking algorithm.",
    image: mazeAlogirthmImg,
    githubLink:"https://github.com/",
  },
  {
    title: "Dev Portfolio",
    description: "A website that displays the collection of skills I have within programming. Used pixelated aesthetic to match my personality, interests, and creative instincts.",
    madeWith: ["ReactJs", "Tailwind CSS", "JavaScript", "Vite"],
    date:"Last Updated: July 2025",
    image: portfolioimg,
    githubLink:"https://github.com/",
  },

];

export default function ProjectCarousel(){
  
  return(
    <>
    {/**Developed Projects Title*/}
      <div id = "Developed Projects" className = " pixelify-sans ">
      <div id = "cards">
      
        <div className = "flex flex-col items-center justify-center pt-3 pb-3 ">
          <div className = "flex items-center justify-center gap-1 text-[50px] font-extrabold ">
            <h1 className = "synth-glow text-white dark:text-black">Developed </h1> 
            <h1 className = "synth-glow text-[#63A54D]"> Projects</h1>
          </div>
          <div className=" justify-center tracking-widest">
            <p className="text-white dark:text-black">A collection of projects demonstrating my skills in programming, design,</p>
            <div className = "flex gap-1">
              <p className="text-white dark:text-black"> and development —</p> <p className="italic text-[#63A54D]">starting from the most recent and working backwards</p>
            </div>
          </div>
        </div>

    {/**Developed Projects CARDS-----------------------*/}  
    <div className="flex justify-center gap-4">
          <div className="carousel-container bg-[rgba(0,0,0,0.5)] rounded-lg  flex justify-start items-center gap-5">
            <div id = "placeholder" className="w-5 h-30 "></div>

            {/**Dev Portfolio - June 2022*/}
            <div id = "card">
              <div  className="card rounded-[20px] w -[375px] h-[360px] group relative bg-gray-900 text-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <div className= "items-center justify-center flex flex-col">
                <img src={projects[3].image} alt={projects[3].title} className="w-95 h-90 object-cover rounded-t-[20px] "/>
                <div className = "flex items-center justify-between w-full p-3">
                  <div>
                  <h1 className = "play-bold text-2xl text-[#63A54D]">{projects[3].title} </h1>
                  <p className="play-regular text-gray-400">{projects[3].date}</p>
                  </div>
        
                  <a href = {projects[3].githubLink} target="_blank" ><img src = {githubIcon} className="duration-300 hover:scale-120"/></a>
                </div>
                <p className="uncover pl-4 pr-4">{projects[3].description}</p>

                 {/**Made with  section*/}
                <div className="uncover flex flex-row justify-center items-center w-full pr-4 pt-1.5 gap-3">
                  <div className="flex items-center justify-center gap-2 box-border border-2">
                    <h1 className = "play-regular text-sm text-white pl-1 pr-1 ">{projects[3].madeWith[0]}</h1>
                  </div>
                  <div className="flex items-center justify-center gap-2 box-border border-2">
                    <h1 className = "play-regular text-sm text-white pl-1 pr-1 ">{projects[3].madeWith[1]}</h1>
                  </div>
                  <div className="flex items-center justify-center gap-2 box-border border-2">
                    <h1 className = "play-regular text-sm text-white pl-1 pr-1 ">{projects[3].madeWith[2]}</h1>
                  </div>
                  <div className="flex items-center justify-center gap-2 box-border border-2">
                    <h1 className = "play-regular text-sm text-white pl-1 pr-1 ">{projects[3].madeWith[3]}</h1>
                  </div>
                </div>
                {/**End of Made with section*/}
                
                </div>    
            </div>
            </div>
            {/*End of Dev Portfolio*/}


            {/**Maze Algorithm - June 2022*/}
            <div id = "card">
              <div  className="card rounded-[20px] w -[375px] h-[360px] group relative bg-gray-900 text-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <div className= "items-center justify-center flex flex-col">
                <img src={projects[2].image} alt={projects[2].title} className="w-95 h-90 object-contain rounded-t-[20px] "/>
                <div className = "flex items-center justify-between w-full p-3">
                  <div>
                  <h1 className = "play-bold text-xl text-[#63A54D]">{projects[2].title} </h1>
                  <p className="play-regular text-gray-400">{projects[2].date}</p>
                  </div>
        
                  <a href = {projects[2].githubLink} target="_blank" ><img src = {githubIcon} className="duration-300 hover:scale-120"/></a>
                </div>
                <p className="uncover pl-4 pr-4">{projects[2].description}</p>

                {/**Made with  section*/}
                <div className="uncover flex flex-row justify-center items-center w-full pr-4 pt-1.5 gap-3">
                  <div className="flex items-center justify-center gap-2 box-border border-2">
                    <h1 className = "play-regular text-sm text-white pl-1 pr-1 ">{projects[2].madeWith}</h1>
                  </div>
                </div>
                {/**End of Made with section*/}
                </div>  
            </div>
            </div>
            {/*End of Maze Algorithm*/}

            {/**LogozAI - January 2025*/}
            <div id = "card">
              <div className="card rounded-[20px] w -[375px] h-[360px] group relative bg-gray-900 text-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <div className= "items-center justify-center flex flex-col">
                <img src={projects[1].image} alt={projects[1].title} className="w-95 h-90 object-cover rounded-t-[20px] "/>
                <div className = "flex items-center justify-between w-full p-3">
                  <div>
                  <h1 className = "play-bold text-2xl text-[#63A54D]">{projects[1].title} </h1>
                  <p className="play-regular text-gray-400">{projects[1].date}</p>
                  </div>
        
                  <a href = {projects[1].githubLink} target="_blank" ><img src = {githubIcon} className="duration-300 hover:scale-120"/></a>
                </div>
                <p className="uncover pl-4 pr-4">{projects[1].description}</p>

                 {/**Made with  section*/}
                <div className="uncover flex flex-row justify-center items-center w-full pr-4 pt-1.5 gap-3">
                  <div className="flex items-center justify-center gap-2 box-border border-2">
                    <h1 className = "play-regular text-sm text-white pl-1 pr-1 ">{projects[1].madeWith[0]}</h1>
                  </div>
                  <div className="flex items-center justify-center gap-2 box-border border-2">
                    <h1 className = "play-regular text-sm text-white pl-1 pr-1 ">{projects[1].madeWith[1]}</h1>
                  </div>
                  <div className="flex items-center justify-center gap-2 box-border border-2">
                    <h1 className = "play-regular text-sm text-white pl-1 pr-1 ">{projects[1].madeWith[2]}</h1>
                  </div>
                </div>
                {/**End of Made with section*/}
                </div>    
            </div>
            </div>
            {/*End of LogozAI*/}

            {/**Pokemon demo - June 2022*/}
            <div id = "card">
              <div  className="card rounded-[20px] w -[375px] h-[360px] group relative bg-gray-900 text-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <div className= "items-center justify-center flex flex-col">
                <img src={projects[0].image} alt={projects[0].title} className=" w-95 h-90 object-cover rounded-t-[20px]"/>
                <div className = "flex items-center justify-between w-full p-3">
                  <div>
                  <h1 className = "play-bold text-2xl text-[#63A54D]">{projects[0].title} </h1>
                  <p className="play-regular text-gray-400">{projects[0].date}</p>
                  </div>
        
                  <a href = {projects[0].githubLink} target="_blank" ><img src = {githubIcon} className="duration-300 hover:scale-120"/></a>
                </div>
                <p className="uncover pl-4 pr-4">{projects[0].description}</p>

                {/**Made with  section*/}
                <div className="uncover flex flex-row justify-center items-center w-full pr-4 pt-1.5 gap-3">
                  <div className="flex items-center justify-center gap-2 box-border border-2">
                    <h1 className = "play-regular text-sm text-white pl-1 pr-1 ">{projects[0].madeWith}</h1>
                  </div>
                </div>
                {/**End of Made with section*/}

                </div>    
            </div>
            </div>
            {/*End of Pokemon Demo*/}

            <div id = "placeholder" className="w-10 h-30 "></div>
          </div>
        </div>
          
        </div>
        {/**End of Cards */}
      
    </div>
    {/**End of Developed Projects */}

    
    </>

   
  )
}
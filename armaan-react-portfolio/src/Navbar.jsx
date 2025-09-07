import './index.css'
import './Navbar.css'
import { useState, useEffect } from "react";

function Navbar() {
  // Popup state
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  // Navbar visibility state
  const [showNavbar, setShowNavbar] = useState(false);

  // Smooth scroll helpers
  const Technologies = () => {
    window.scrollTo({ top: 650, behavior: 'smooth' });
  };
  const Projects = () => {
    window.scrollTo({ top: 1230, behavior: 'smooth' });
  };
  const Experience = () => {
    window.scrollTo({ top: 2000, behavior: 'smooth' });
  };

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        id="Navbar"
        className={`
          pixelify-sans sticky top-0 z-50 flex justify-center 
          backdrop-blur-[5px] bg-[rgba(0,0,0,0.5)] 
          transition-opacity duration-500 ease-in-out
          ${showNavbar ? "opacity-100" : "opacity-0"}
        `}
      >
        <nav className="inline-flex gap-x-100 justify-end items-right pr-10 pt-4 pb-2">
          <div className="flex justify-start">
            <h1 className="text-xl text-black font-extrabold bg-white border-white m-1 pl-0.5 pr-0.5 pt-0.5">
              PORTFOLIO
            </h1>
          </div>
          
          {/* Navbar Links */}
          <div className="items-center flex gap-16">
            <div className="flex flex-col">
                <button
                onClick={() => setIsOpen2(true)}
                className="font-pixelify text-xl text-white hover:text-[#3EC232] hover:underline transition-colors">
                About
                </button>
                
                {isOpen2 && (
                <div className="absolute translate-y-13 w-60">
                  <div className="relative flex flex-col bg-[rgba(0,0,0,0.8)] text-white p-1 rounded-lg shadow-lg translate-y-3">
                    <div className="max-w-md text-center md:text-left">
          <p className="play-regular text-sm md:text-base leading-relaxed text-gray-200">
             <span className="text-white"> <span className='text-yellow-400'>A second-year Computer Science student at Queen’s University </span> with a keen interest for software development, AI, and cybersecurity.

I’m currently seeking internship or collaboration opportunities—<span className = "underline text-green-400">feel free to contact me!</span></span>
          </p>
        </div>

                    <div className="absolute left-12 -top-2 w-0 h-0 rotate-180 -translate-y-3 border-l-20 border-r-20 border-t-21 border-transparent border-t-[rgba(0,0,0,0.8)]"></div>

                    <button
                      onClick={() => setIsOpen2(false)}
                      className="px-1 py-1 text-white border rounded-lg hover:bg-red-600"
                    >
                      X
                    </button>
                  </div>
                </div>
              )}

            </div>
            

            <button onClick={Technologies} className="font-pixelify text-xl text-white hover:text-[#3EC232] hover:underline transition-colors">
              Technologies
            </button>
            <button onClick={Projects} className="font-pixelify text-xl text-white hover:text-[#3EC232] hover:underline transition-colors">
              Projects
            </button>
            
            {/*Developing Popup */}
            <div className="flex flex-col">
                <button
                onClick={() => setIsOpen1(true)}
                className="font-pixelify text-xl text-white hover:text-[#3EC232] hover:underline transition-colors">
                Developing
                </button>
                
                {isOpen1 && (
                <div className="absolute translate-y-11 w-60">
                  <div className="relative flex flex-col bg-[rgba(0,0,0,0.8)] text-white p-1 rounded-lg shadow-lg translate-y-3">
                    {/* Currently Developing Section */}
        <div className="max-w-md text-center md:text-left">
          <p className="play-regular text-sm md:text-base leading-relaxed text-gray-200">
            A <span className="text-green-400">Game Dev Platform</span> powered by <span className="text-green-400">GenAI</span>, 
            giving independent developers <span className="text-green-400">free original assets</span> 
            for their games including sprite maps.
          </p>
        </div>

                    <div className="absolute left-12 -top-2 w-0 h-0 rotate-180 -translate-y-3 border-l-20 border-r-20 border-t-21 border-transparent border-t-[rgba(0,0,0,0.8)]"></div>

                    <button
                      onClick={() => setIsOpen1(false)}
                      className="px-1 py-1 text-white border rounded-lg hover:bg-red-600"
                    >
                      X
                    </button>
                  </div>
                </div>
              )}

            </div>{/*End of Developing Popup */}


            <button onClick={Experience} className="font-pixelify text-xl text-white hover:text-[#3EC232] hover:underline transition-colors">
              Experience
            </button>

            <div className="flex flex-col">
              <button
                onClick={() => setIsOpen(true)}
                className="font-pixelify text-xl text-white border-white border-2 hover:text-black hover:bg-white duration-300 px-3 py-1"
              >
                Get in Touch
              </button>
            {/*Get In touch Popup */}
              {isOpen && (
                <div className="absolute translate-y-13 w-60">
                  <div className="relative flex flex-col bg-[rgba(0,0,0,0.8)] text-white p-1 rounded-lg shadow-lg translate-y-3">
                    <div className="inline-block px-4 py-2 text-white rounded-xl">
                      <p className="underline">Email:</p>{" "}
                      <span className="text-blue-400">armchow312@gmail.com</span>
                      <br />
                      <p className="underline">LinkedIn:</p>{" "}
                      <a
                        href="https://www.linkedin.com/in/armaan-chowdhury-2075a1337/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                      >
                        linkedin.com/in/armaan-chowdhury-2075a1337/
                      </a>
                      <br />
                      <p className="underline">Instagram:</p>{" "}
                      <span className="text-blue-400">armaan.cxx</span>
                      <br />
                    </div>

                    <div className="absolute left-12 -top-2 w-0 h-0 rotate-180 -translate-y-3 border-l-20 border-r-20 border-t-21 border-transparent border-t-[rgba(0,0,0,0.8)]"></div>

                    <button
                      onClick={() => setIsOpen(false)}
                      className="px-1 py-1 text-white border rounded-lg hover:bg-red-600"
                    >
                      X
                    </button>
                  </div>
                </div>
              )}

              
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;

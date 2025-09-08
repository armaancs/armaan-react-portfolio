import './index.css';
import './Navbar.css';
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [isOpenDev, setIsOpenDev] = useState(false);
  const [isOpenContact, setIsOpenContact] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const scrollTo = (pos) => window.scrollTo({ top: pos, behavior: 'smooth' });
  const Technologies = () => scrollTo(650);
  const Projects = () => scrollTo(1230);
  const Experience = () => scrollTo(2000);

  useEffect(() => {
    const handleScroll = () => setShowNavbar(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="Navbar"
      className={`
        pixelify-sans sticky top-0 z-50 flex justify-center
        backdrop-blur-[5px] bg-[rgba(0,0,0,0.5)]
        transition-opacity duration-500 ease-in-out
        ${showNavbar ? "opacity-100" : "opacity-0"}
      `}
    >
      <nav className="inline-flex gap-x-16 sm:gap-x-20 md:gap-x-28 justify-end items-center pr-4 sm:pr-10 pt-4 pb-2 w-full max-w-screen-xl">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl md:text-3xl text-black font-extrabold bg-white border-white px-1 py-0.5">
          PORTFOLIO
        </h1>

        {/* Navbar Links */}
        <div className="flex items-center gap-4 sm:gap-8 md:gap-16">
          {/* About */}
          <div className="relative">
            <button
              onClick={() => setIsOpenAbout(!isOpenAbout)}
              className="font-pixelify text-base sm:text-lg md:text-xl text-white hover:text-[#3EC232] hover:underline transition-colors"
            >
              About
            </button>

            {isOpenAbout && (
              <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-64 sm:w-72 md:w-80 
                bg-[rgba(0,0,0,0.85)] text-white p-4 rounded-lg shadow-lg z-50 
                max-h-[80vh] overflow-y-auto slide-bounce">
                <p className="text-sm sm:text-base leading-relaxed text-gray-200">
                  <span className="text-yellow-400 font-semibold">
                    A second-year Computer Science student at Queen’s University
                  </span>{" "}
                  with a keen interest in software development, AI, and cybersecurity.
                  Currently seeking internship or collaboration opportunities —
                  <span className="underline text-green-400"> feel free to contact me!</span>
                </p>
                <button
                  onClick={() => setIsOpenAbout(false)}
                  className="mt-2 px-2 py-1 text-white border rounded-lg hover:bg-red-600"
                >
                  Close
                </button>
              </div>
            )}
          </div>

          {/* Technologies */}
          <button
            onClick={Technologies}
            className="font-pixelify text-base sm:text-lg md:text-xl text-white hover:text-[#3EC232] hover:underline transition-colors"
          >
            Technologies
          </button>

          {/* Projects */}
          <button
            onClick={Projects}
            className="font-pixelify text-base sm:text-lg md:text-xl text-white hover:text-[#3EC232] hover:underline transition-colors"
          >
            Projects
          </button>

          {/* Developing */}
          <div className="relative">
            <button
              onClick={() => setIsOpenDev(!isOpenDev)}
              className="font-pixelify text-base sm:text-lg md:text-xl text-white hover:text-[#3EC232] hover:underline transition-colors"
            >
              Developing
            </button>

            {isOpenDev && (
              <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-64 sm:w-72 md:w-80 
                bg-[rgba(0,0,0,0.85)] text-white p-4 rounded-lg shadow-lg z-50 
                max-h-[80vh] overflow-y-auto slide-bounce">
                <p className="text-sm sm:text-base leading-relaxed text-gray-200">
                  A <span className="text-green-400 font-semibold">Game Dev Platform</span> powered by <span className="text-green-400 font-semibold">GenAI</span>, giving independent developers <span className="text-green-400 font-semibold">free original assets</span> for their games including sprite maps.
                </p>
                <button
                  onClick={() => setIsOpenDev(false)}
                  className="mt-2 px-2 py-1 text-white border rounded-lg hover:bg-red-600"
                >
                  Close
                </button>
              </div>
            )}
          </div>

          {/* Experience */}
          <button
            onClick={Experience}
            className="font-pixelify text-base sm:text-lg md:text-xl text-white hover:text-[#3EC232] hover:underline transition-colors"
          >
            Experience
          </button>

          {/* Get in Touch */}
          <div className="relative">
            <button
              onClick={() => setIsOpenContact(!isOpenContact)}
              className="font-pixelify text-base sm:text-lg md:text-xl text-white border-white border-2 hover:text-black hover:bg-white duration-300 px-3 py-1"
            >
              Get in Touch
            </button>

            {isOpenContact && (
              <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-64 sm:w-72 md:w-80 
                bg-[rgba(0,0,0,0.85)] text-white p-4 rounded-lg shadow-lg z-50 
                max-h-[80vh] overflow-y-auto slide-bounce">
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
                </div>
                <button
                  onClick={() => setIsOpenContact(false)}
                  className="mt-2 px-2 py-1 text-white border rounded-lg hover:bg-red-600"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

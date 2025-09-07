import "./CurrTech.css"
import "./index.css"
import HTML_logo from "./assets/HTML.png"
import CSS_logo from "./assets/CSS.png"
import React_logo from "./assets/react.svg"
import nodejs_logo from "./assets/nodejs.png"

function CurrTech(){
    return(
       /*Current Tech*/
          <div id = "Current Technologies" className = "pixelify-sans text-white dark:text-black">
          <div>
            <div className = "flex flex-col items-center justify-center p-5">
              <div className = "flex items-center justify-center gap-1 text-[50px] font-extrabold">
                <h1 className = "synth-glow">Current </h1> 
                <h1 className = "synth-glow text-[#63A54D]">Technologies</h1>
              </div>
              <p>Using modern technology to empower ideas/skills</p>
            </div>

            {/*Curr Tech Grid */} 
            <div className = "flex justify-center items-center">
              <div id = "first-col" className = "m-5">
                
                {/**Python */}
                <div className="rectangle-div flex items-center px-3 space-x-1 hover:scale-105 transition-transform duration-300">
                  
                  <div className="pl-0.5 pt-1 pb-1 pr-1 rounded-lg">
                    <div className = "w-[63px] h-[56px] bg-[#033057] rounded-lg items-center justify-center flex">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" 
                        alt="Python Logo" 
                        class="w-[40px] h-[35px]"></img>
                    </div>
                  </div>
                  
                  <div>
                    <p className="play-bold text-white font-semibold text-[20px] pb-[3px]">Python</p>
                    <p className="play-regular text-gray-400 text-[13px]">Programming Language</p>
                  </div>
                </div>
                
                <div className="rectangle-div flex items-center px-3 space-x-1 hover:scale-105 transition-transform duration-300">
                  
                  <div className="pl-0.5 pt-1 pb-1 pr-1 rounded-lg">
                    <div className = "w-[63px] h-[56px] bg-[#245866] rounded-lg items-center justify-center flex">
                    <img src={React_logo} 
                        alt="React Logo" 
                        class="w-[40px] h-[35px]"></img>
                    </div>
                  </div>
                  
                  <div>
                    <p className="play-bold text-white font-semibold text-[20px] pb-[3px]">Reactjs</p>
                    <p className="play-regular text-gray-400 text-[13px]">Javascript Framework</p>
                  </div>
                </div>

                 {/* AWS Card */}
              <div className="rectangle-div flex items-center px-3 space-x-1 hover:scale-105 transition-transform duration-300">
                <div className="pl-0.5 pt-1 pb-1 pr-1 rounded-lg">
                  <div className="w-[63px] h-[56px] bg-[#232F3E] rounded-lg items-center justify-center flex">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                      alt="AWS Logo"
                      className="w-[50px] h-[25px]"
                    />
                  </div>
                </div>
                <div>
                  <p className="play-bold text-white font-semibold text-[20px] pb-[3px] pt-1">
                    AWS
                  </p>
                  <p className="play-regular text-gray-400 text-[13px]">
                    Amazon Web Services – Cloud Computing
                  </p>
                </div>
              </div>
            
          
                <div className = "rectangle-div mb-8">
                 
                </div>

              </div>{/**End of first col */}
              
              {/**Second Column */}
              <div id = "second-col" className = "m-5">
                {/**Javascript */}
                <div className="rectangle-div flex items-center px-3 space-x-1 hover:scale-105 transition-transform duration-300">
                  
                  <div className="pl-0.5 pt-1 pb-1 pr-1 rounded-lg">
                    <div className = "w-[63px] h-[56px] bg-[#706300] rounded-lg items-center justify-center flex">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/JavaScript_unofficial_logo.svg/640px-JavaScript_unofficial_logo.svg.png" 
                        alt="Javascript Logo" 
                        class="w-[40px] h-[35px]"></img>
                    </div>
                  </div>
                  
                  <div>
                    <p className="play-bold text-white font-semibold text-[20px] pb-[3px]">Javascript</p>
                    <p className="play-regular text-gray-400 text-[13px]">Programming Language</p>
                  </div>
                </div>

                {/**Figma */}
                <div className="rectangle-div flex items-center px-3 space-x-1 hover:scale-105 transition-transform duration-300">
                  
                  <div className="pl-0.5 pt-1 pb-1 pr-1 rounded-lg">
                    <div className = "w-[63px] h-[56px] bg-[#023D26] rounded-lg items-center justify-center flex">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/640px-Figma-logo.svg.png " 
                        alt="Javascript Logo" 
                        class="w-[21px] h-[32px]"></img>
                    </div>
                  </div>
                  
                  <div>
                    <p className="play-bold text-white font-semibold text-[20px] pb-[3px]">Figma</p>
                    <p className="play-regular text-gray-400 text-[13px]">Design Tool</p>
                  </div>
                </div>

                {/* Git Card */}
                <div className="rectangle-div flex items-center px-3 space-x-1 hover:scale-105 transition-transform duration-300">
                  <div className="pl-0.5 pt-1 pb-1 pr-1 rounded-lg">
                    <div className="w-[63px] h-[56px] bg-white rounded-lg items-center justify-center flex">
                      <img
                        src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                        alt="Git Logo"
                        className="w-[40px] h-[40px]"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="play-bold text-white font-semibold text-[20px] pb-[3px] pt-1">
                      Git
                    </p>
                    <p className="play-regular text-gray-400 text-[13px]">
                      Version Control System
                    </p>
                  </div>
                </div>

                <div className = "rectangle-div mb-8">
                 
                </div>
              </div> {/**End of second col */}

              <div id = "third-col" className = "m-5">
                {/**HTML */}
                <div className="rectangle-div flex items-center px-3 space-x-1 hover:scale-105 transition-transform duration-300">
                  
                  <div className="pl-0.5 pt-1 pb-1 pr-1 rounded-lg">
                    <div className = "w-[63px] h-[56px] bg-[#952D00] rounded-lg items-center justify-center flex">
                    <img src={HTML_logo} 
                        alt="HTML Logo" 
                        class="w-[50px] h-[54px]"></img>
                    </div>
                  </div>
                  
                  <div>
                    <p className="play-bold text-white font-semibold text-[20px] pb-[3px] pt-4">HTML</p>
                    <p className="play-regular text-gray-400 text-[13px]">Hypertext Markup Language</p>
                  </div>
                </div>

                <div className="rectangle-div flex items-center px-3 space-x-1 hover:scale-105 transition-transform duration-300">
                  
                  <div className="pl-0.5 pt-1 pb-1 pr-1 rounded-lg">
                    <div className = "w-[63px] h-[56px] bg-[#304619] rounded-lg items-center justify-center flex">
                    <img src={nodejs_logo} 
                        alt="HTML Logo" 
                        class="w-[50px] h-[50px]"></img>
                    </div>
                  </div>
                  
                  <div>
                    <p className="play-bold text-white font-semibold text-[20px] pb-[3px] pt-1">Node.js</p>
                    <p className="play-regular text-gray-400 text-[13px]">Server-side scripting</p>
                  </div>
                </div>

                <div className = "rectangle-div mb-8">
                 
                </div>
                <div className = "rectangle-div mb-8">
                 
                </div>
              </div>

              <div id = "fourth-col" className = "m-5">
                {/**CSS */}
                <div className="rectangle-div flex items-center px-3 space-x-1 hover:scale-105 transition-transform duration-300">
                  
                  <div className="pl-0.5 pt-1 pb-1 pr-1 rounded-lg">
                    <div className = "w-[63px] h-[56px] bg-[#041F5F] rounded-lg items-center justify-center flex">
                    <img src={CSS_logo} 
                        alt="CSS Logo" 
                        class="w-[50px] h-[54px]"></img>
                    </div>
                  </div>
                  
                  <div>
                    <p className="play-bold text-white font-semibold text-[20px] pb-[3px] pt-4">CSS</p>
                    <p className="play-regular text-gray-400 text-[13px]">Frontend - Cascading Styling sheets </p>
                  </div>
                </div>

                {/**Tailwind CSS */}
                <div className="rectangle-div flex items-center px-3 space-x-1 hover:scale-105 transition-transform duration-300">
                  
                  <div className="pl-0.5 pt-1 pb-1 pr-1 rounded-lg">
                    <div className = "w-[63px] h-[56px] bg-[#05515E] rounded-lg items-center justify-center flex">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/640px-Tailwind_CSS_Logo.svg.png"
                        alt="CSS Logo" 
                        class="w-[32px] h-[19px]"></img>
                    </div>
                  </div>
                  
                  <div>
                    <p className="play-bold text-white font-semibold text-[20px] pb-[3px] pt-1">Tailwind CSS</p>
                    <p className="play-regular text-gray-400 text-[13px]">CSS Framework </p>
                  </div>
                </div>
                <div className = "rectangle-div mb-8">
                 
                </div>
                <div className = "rectangle-div mb-8">
                 
                </div>
              </div>

            </div> {/**End of Curr Tech Grid */}

            
            

          </div>

        </div>/**End of Curr Tech */
 
    );
}

export default CurrTech;
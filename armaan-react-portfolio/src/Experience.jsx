import "./Experience.css";
import "./index.css";
import MSA_logo from "./assets/MSA logo.png";
import Outlier_logo from "./assets/Outlier.jpg";
import RickHansen_logo from "./assets/RickHansen_Logo.png";
import MWC_logo from "./assets/MWC.png";

export default function Experience() {
    
    return(
 
  <div className="pixelify-sans max-w-5xl mx-auto px-4 pt-15 bg-[rgba(0,0,0,0.5)] rounded-lg m-10 border-black border-2 " id="Experience">
    <h2 className="text-[50px] synth-glow text-3xl font-bold text-center underline text-white dark:text-black">Experience</h2>
    <h3 className = "text-[20px] text-gray-400 mb-10 text-center">A Timeline of Key Points within my Career</h3>
    
    <div className="relative border-l border-gray-700 text-black dark:text-white m-3 mt-1 pb-1">
    
      {/** Item 1 */}
      <div className="mb-10 ml-6 flex gap-4">
        {/** Decorative dot */}
        <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-[#63A54D] rounded-full ring-8 ring-gray-900"></span>
        
        {/** Company logo */}
        <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden border-2 border-gray-700 bg-gray-800">
          <img src= {Outlier_logo} alt="MSA Logo" className="w-full h-full object-cover"></img>
        </div>
        
        {/** Experience details */}
        <div>
          <h3 className="text-white dark:text-black text-lg font-semibold"><span className="synth-glow">
            AI Trainer </span><span className="text-[#63A54D]">@ Outlier</span>
          </h3>
          <time className="block mb-2 text-sm text-gray-400">Feb 2025 - Aug 2025</time>
          <p className="text-gray-300">
            Train AI large language models, enhancing their ability to generate high-quality code. Projects involve evaluating AI-generated code with clear justifications, solving coding problems efficiently, optimizing performance, writing robust test cases, and providing human-readable summaries and explanations of coding solutions.
          </p>
        </div>
      </div>


      {/** Item 2 */}
      <div className="mb-10 ml-6 flex gap-4">
        {/** Decorative dot */}
        <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-[#63A54D] rounded-full ring-8 ring-gray-900"></span>
        
        {/** Company logo */}
        <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden border-2 border-gray-700 bg-gray-800">
          <img src= {MSA_logo} alt="MSA Logo" className="w-full h-full object-cover"></img>
        </div>
        
        {/** Experience details */}
        <div>
          <h3 className="text-white dark:text-black text-lg font-semibold"><span className="synth-glow">
            Admissions Officer </span> <span className="text-[#63A54D]">@ Mississauga Secondary Academy</span>
          </h3>
          <time className="block mb-2 text-sm text-gray-400">Jun 2025 - Jul 2025</time>
          <p className="text-gray-300">
            Guided prospective students through the admissions process. Managed outreach efforts and supported enrollment goals through data-driven decision-making and personalized communication.
          </p>
        </div>
      </div>
      
            {/** Item 3 */}
      <div className="mb-10 ml-6 flex gap-4">
        {/** Decorative dot */}
        <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-[#63A54D] rounded-full ring-8 ring-gray-900"></span>
        
        {/** Company logo */}
        <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden border-2 border-gray-700 bg-gray-800">
          <img src= {MWC_logo} alt="MSA Logo" className="w-full h-full object-cover"></img>
        </div>
        
        {/** Experience details */}
        <div>
          <h3 className="text-white dark:text-black text-lg font-semibold"><span className="synth-glow">
            Inventory Distribution Assistant </span><span className="text-[#63A54D]">@ Muslim Welfare Centre</span>
          </h3>
          <time className="block mb-2 text-sm text-gray-400">Jun 2023 - Aug 2023</time>
          <p className="text-gray-300">
            Managed inventory and coordinated incoming orders from the main headquarters. Assisted in the distribution of food items to customers in need. Collaborated with staff to ensure efficient task completion and seamless operations. Handled heavy items, including 30+ pound bags of flour, rice, and boxes.
          </p>
        </div>
      </div>
      
            {/** Item 4 */}
      <div className="mb-10 ml-6 flex gap-4">
        {/** Decorative dot */}
        <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-[#63A54D] rounded-full ring-8 ring-gray-900"></span>
        
        {/** Company logo */}
        <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden border-2 border-gray-700 bg-white">
          <img src= {RickHansen_logo} alt="MSA Logo" className="w-full h-full object-cover"></img>
        </div>
        
        {/** Experience details */}
        <div>
          <h3 className="text-white dark:text-black text-lg font-semibold"><span className="synth-glow">
            Math Tutor </span><span className="text-[#63A54D]">@ Rick Hansen Secondary</span>
          </h3>
          <time className="block mb-2 text-sm text-gray-400">Jan 2023 – May 2023</time>
          <p className="text-gray-300">
            Helped students grasp math concepts with easy-to-follow explanations and personalized strategies, building both skills and confidence at every step.
          </p>
        </div>
      </div>

    </div>
  </div>


    )
}
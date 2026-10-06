import "./Experience.css";
import "./index.css";
import MSA_logo from "./assets/MSA logo.png";
import Outlier_logo from "./assets/Outlier.jpg";
import RickHansen_logo from "./assets/RickHansen_Logo.png";
import MWC_logo from "./assets/MWC.png";

function InitialsBadge({ initials, bg }) {
  return (
    <div
      className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden border-2 border-gray-700 flex items-center justify-center"
      style={{ backgroundColor: bg }}
    >
      <span className="play-bold text-white text-sm">{initials}</span>
    </div>
  );
}

export default function Experience() {

    return(

  <div className="pixelify-sans max-w-5xl mx-auto px-4 pt-15 bg-[rgba(0,0,0,0.5)] rounded-lg m-10 border-black border-2 " id="Experience">
    <h2 className="text-[50px] synth-glow text-3xl font-bold text-center underline text-white dark:text-black">Experience</h2>
    <h3 className = "text-[20px] text-gray-400 mb-10 text-center">A Timeline of Key Points within my Career</h3>

    <div className="relative border-l border-gray-700 text-black dark:text-white m-3 mt-1 pb-1">

      {/** Item 1 - QMIND */}
      <div className="mb-10 ml-6 flex gap-4">
        <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-[#63A54D] rounded-full ring-8 ring-gray-900"></span>
        <InitialsBadge initials="QM" bg="#3B1F5C" />
        <div>
          <h3 className="text-white dark:text-black text-lg font-semibold"><span className="synth-glow">
            Machine Learning Engineer </span><span className="text-[#63A54D]">@ QMIND</span>
          </h3>
          <time className="block mb-2 text-sm text-gray-400">Sep 2026 - Present</time>
          <p className="text-gray-300">
            Benchmarking 4 retrieval methods (vector, metadata-filtered, GraphRAG, and temporal GraphRAG) across 200 patient-timeline questions. Built the RAG pipeline with Python, FAISS, and LangGraph over ~4K clinical notes, and evaluating 6 metrics including Recall@K, Precision@K, grounding, and abstention with Ragas on Synthea data.
          </p>
        </div>
      </div>

      {/** Item 2 - ABEN HUB */}
      <div className="mb-10 ml-6 flex gap-4">
        <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-[#63A54D] rounded-full ring-8 ring-gray-900"></span>
        <InitialsBadge initials="AH" bg="#1B3A2B" />
        <div>
          <h3 className="text-white dark:text-black text-lg font-semibold"><span className="synth-glow">
            Data Engineer Intern </span><span className="text-[#63A54D]">@ ABEN HUB</span>
          </h3>
          <time className="block mb-2 text-sm text-gray-400">Apr 2026 - Present</time>
          <p className="text-gray-300">
            Cut upstream API calls by 99% (500+ down to 1–4 per run) by redesigning the ETL pipeline to batch requests by shared data tile. Improved data precision from ±10 m to ±0.1 m by decoding values directly from source REST APIs, built a Python engine that converts raw elevation-grid data into classified terrain metrics, and delivered a 6-phase data-driven web app in one sprint with React and Mapbox GL JS.
          </p>
        </div>
      </div>

      {/** Item 3 - Queen's Data Analytics Association */}
      <div className="mb-10 ml-6 flex gap-4">
        <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-[#63A54D] rounded-full ring-8 ring-gray-900"></span>
        <InitialsBadge initials="QDA" bg="#00274D" />
        <div>
          <h3 className="text-white dark:text-black text-lg font-semibold"><span className="synth-glow">
            Data Analyst </span><span className="text-[#63A54D]">@ Queen's Data Analytics Association</span>
          </h3>
          <time className="block mb-2 text-sm text-gray-400">Oct 2025 - Aug 2026</time>
          <p className="text-gray-300">
            Contributed to a published QDAA–QRET research paper deriving specific impulse (~200.7 s) from rocket hot-fire data. Transformed noisy sensor data into stable metrics via interpolation, Savitzky-Golay smoothing, and differentiation in Python, and estimated oxidizer mass-flow rate through numerical differentiation and linear regression on time-series data.
          </p>
        </div>
      </div>

      {/** Item 4 - Queen's Racing FSAE */}
      <div className="mb-10 ml-6 flex gap-4">
        <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-[#63A54D] rounded-full ring-8 ring-gray-900"></span>
        <InitialsBadge initials="QR" bg="#5C0A0A" />
        <div>
          <h3 className="text-white dark:text-black text-lg font-semibold"><span className="synth-glow">
            Electrical Team Member </span><span className="text-[#63A54D]">@ Queen's Racing Formula SAE Team</span>
          </h3>
          <time className="block mb-2 text-sm text-gray-400">Sep 2025 - Aug 2026</time>
          <p className="text-gray-300">
            Collaborated with the Tractive Systems subteam to design and implement a traction control system. Conducted research and simulations on torque vectoring and wheel slip detection, and assisted with hardware-software integration for reliable performance under racing conditions.
          </p>
        </div>
      </div>

      {/** Item 5 */}
      <div className="mb-10 ml-6 flex gap-4">
        <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-[#63A54D] rounded-full ring-8 ring-gray-900"></span>
        <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden border-2 border-gray-700 bg-gray-800">
          <img src= {Outlier_logo} alt="Outlier Logo" className="w-full h-full object-cover"></img>
        </div>
        <div>
          <h3 className="text-white dark:text-black text-lg font-semibold"><span className="synth-glow">
            AI Trainer </span><span className="text-[#63A54D]">@ Outlier</span>
          </h3>
          <time className="block mb-2 text-sm text-gray-400">Dec 2024 - Aug 2025</time>
          <p className="text-gray-300">
            Trained AI large language models, enhancing their ability to generate high-quality code. Projects involve evaluating AI-generated code with clear justifications, solving coding problems efficiently, optimizing performance, writing robust test cases, and providing human-readable summaries and explanations of coding solutions.
          </p>
        </div>
      </div>

      {/** Item 5 */}
      <div className="mb-10 ml-6 flex gap-4">
        <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-[#63A54D] rounded-full ring-8 ring-gray-900"></span>
        <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden border-2 border-gray-700 bg-gray-800">
          <img src= {MSA_logo} alt="MSA Logo" className="w-full h-full object-cover"></img>
        </div>
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

      {/** Item 6 - QHacks */}
      <div className="mb-10 ml-6 flex gap-4">
        <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-[#63A54D] rounded-full ring-8 ring-gray-900"></span>
        <InitialsBadge initials="QH" bg="#3B1F5C" />
        <div>
          <h3 className="text-white dark:text-black text-lg font-semibold"><span className="synth-glow">
            Team Lead </span><span className="text-[#63A54D]">@ QHacks</span>
          </h3>
          <time className="block mb-2 text-sm text-gray-400">Jan 2025</time>
          <p className="text-gray-300">
            Led the team that built and shipped LogozAI, an AI logo-generation platform, end to end in 36 hours. Used OpenAI's DALL·E 3 for image generation, designed a MongoDB schema for user input and generated outputs supporting 50+ beta users, and built dynamic frontend animations with HTML, CSS, and JavaScript.
          </p>
        </div>
      </div>

      {/** Item 7 */}
      <div className="mb-10 ml-6 flex gap-4">
        <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-[#63A54D] rounded-full ring-8 ring-gray-900"></span>
        <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden border-2 border-gray-700 bg-white">
          <img src= {RickHansen_logo} alt="Rick Hansen Secondary Logo" className="w-full h-full object-cover"></img>
        </div>
        <div>
          <h3 className="text-white dark:text-black text-lg font-semibold"><span className="synth-glow">
            Administrative Coordinator </span><span className="text-[#63A54D]">@ Rick Hansen Secondary</span>
          </h3>
          <time className="block mb-2 text-sm text-gray-400">Nov 2023 - Apr 2024</time>
          <p className="text-gray-300">
            Planned and organized school events and community fundraisers to support humanitarian efforts. Presented fundraising ideas and coordinated with head administrators and teachers to ensure successful execution.
          </p>
        </div>
      </div>

      {/** Item 8 */}
      <div className="mb-10 ml-6 flex gap-4">
        <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-[#63A54D] rounded-full ring-8 ring-gray-900"></span>
        <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden border-2 border-gray-700 bg-gray-800">
          <img src= {MWC_logo} alt="MWC Logo" className="w-full h-full object-cover"></img>
        </div>
        <div>
          <h3 className="text-white dark:text-black text-lg font-semibold"><span className="synth-glow">
            Distribution Assistant </span><span className="text-[#63A54D]">@ Muslim Welfare Centre</span>
          </h3>
          <time className="block mb-2 text-sm text-gray-400">Jun 2023 - Aug 2023</time>
          <p className="text-gray-300">
            Managed inventory and coordinated incoming orders from the main headquarters. Assisted in the distribution of food items to customers in need. Collaborated with staff to ensure efficient task completion and seamless operations. Handled heavy items, including 30+ pound bags of flour, rice, and boxes.
          </p>
        </div>
      </div>

      {/** Item 9 */}
      <div className="mb-10 ml-6 flex gap-4">
        <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-[#63A54D] rounded-full ring-8 ring-gray-900"></span>
        <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden border-2 border-gray-700 bg-white">
          <img src= {RickHansen_logo} alt="Rick Hansen Secondary Logo" className="w-full h-full object-cover"></img>
        </div>
        <div>
          <h3 className="text-white dark:text-black text-lg font-semibold"><span className="synth-glow">
            Mathematics Tutor </span><span className="text-[#63A54D]">@ Rick Hansen Secondary</span>
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

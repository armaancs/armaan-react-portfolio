import "./Education.css";
import "./index.css";

export default function Education() {
  return (
    <div
      className="pixelify-sans max-w-5xl mx-auto px-4 pt-15 bg-[rgba(0,0,0,0.5)] rounded-lg m-10 border-black border-2"
      id="Education"
    >
      <h2 className="text-[50px] synth-glow text-3xl font-bold text-center underline text-white dark:text-black">
        Education
      </h2>
      <h3 className="text-[20px] text-gray-400 mb-10 text-center">
        Academic Background
      </h3>

      <div className="flex items-center gap-4 ml-6 pb-10">
        <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden border-2 border-gray-700 bg-[#00274D] flex items-center justify-center">
          <span className="play-bold text-white text-sm">QU</span>
        </div>

        <div>
          <h3 className="text-white dark:text-black text-lg font-semibold">
            <span className="synth-glow">Bachelor of Computing (Hons.)</span>{" "}
            <span className="text-[#63A54D]">@ Queen's University</span>
          </h3>
          <p className="text-gray-300">
            Minoring in Statistics &amp; Computer Science
          </p>
          <time className="block mb-2 text-sm text-gray-400">
            Sep 2024 - Apr 2028
          </time>
          <p className="text-gray-300">
            Community Officer @ Queen's Data Analytics Association · TCS
            Design Team Lead @ Queen's Racing Formula SAE Team
          </p>
        </div>
      </div>
    </div>
  );
}

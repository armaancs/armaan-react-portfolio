import hotelRevenueImg from "../assets/HotelRevenue.svg";
import solarAideImg from "../assets/SolarAIDE.svg";
import portfolioImg from "../assets/portfolio.webp";
import mazeAlgorithmImg from "../assets/MazeAlgorithm.png";
import logozAiImg from "../assets/logozai.webp";
import pokemonImg from "../assets/pokemon.webp";

// Most recent first. `repo` is null for projects without a public repository.
export const projects = [
  {
    title: "Hotel Revenue Dashboard",
    updated: "August 2026",
    tags: ["SQL", "Power BI", "Python (pandas)", "Excel"],
    description:
      "An end-to-end SQL pipeline over 119K+ bookings feeding a 2-page Power BI dashboard tracking $26M in revenue, ADR, and a 37% cancellation rate. Flagged 38% of bookings as underpriced with a rate-benchmarking model.",
    image: hotelRevenueImg,
    repo: "https://github.com/armaancs/hotel-revenue-optimization",
  },
  {
    title: "SolarAIDE",
    updated: "July 2026",
    tags: ["React", "Mapbox GL JS", "Turf.js"],
    description:
      "An interactive terrain suitability platform for solar site assessment, built during my Data Engineer internship at ABEN HUB. Cut upstream API calls by 99% and improved elevation precision from ±10 m to ±0.1 m.",
    image: solarAideImg,
    repo: null,
    featured: true,
  },
  {
    title: "Dev Portfolio",
    updated: "July 2025",
    tags: ["ReactJs", "Tailwind CSS", "JavaScript", "Vite"],
    description:
      "A website that displays the collection of skills I have within programming. Used pixelated aesthetic to match my personality, interests, and creative instincts.",
    image: portfolioImg,
    repo: "https://github.com/armaancs/armaan-react-portfolio",
  },
  {
    title: "Maze Generation Algorithm",
    updated: "June 2025",
    tags: ["Python"],
    description:
      "A maze generation algorithm I made for an upcoming roblox game. It generates a 2d maze with a 2d array by using a backtracking algorithm.",
    image: mazeAlgorithmImg,
    imageFit: "contain",
    repo: "https://github.com/armaancs/maze-generation-algorithm",
  },
  {
    title: "LogozAI",
    updated: "January 2025",
    tags: ["MongoDB", "JavaScript", "Generative AI"],
    description:
      "An AI logo-generation platform built and shipped end to end in 36 hours at QHacks 2025. Supported 50+ beta users with a MongoDB schema for inputs and generated outputs. The image above is a sample logo that was generated.",
    image: logozAiImg,
    repo: "https://github.com/armaancs/logoz_ai",
  },
  {
    title: "Pokemon Demo",
    updated: "June 2022",
    tags: ["Java"],
    description:
      "A short demo of pokemon that included a battle system (type disadvantage/advantages included), a 2D map to traverse, and a few pokemon.",
    image: pokemonImg,
    repo: "https://github.com/armaancs/pokemon-demo",
  },
];

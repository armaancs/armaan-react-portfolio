import portrait from "../assets/profile.webp";

export const profile = {
  firstName: "Armaan",
  lastName: "Chowdhury",
  location: "Based in Canada",
  status: "Currently: ML Engineer @ QMIND + Data Engineer Intern @ ABEN HUB",
  statement: "CS + Stats at Queen's. I build ML systems, data pipelines, and geospatial tools.",
  portrait,
  email: "armchow312@gmail.com",
  socials: {
    github: "https://github.com/armaancs",
    linkedin: "https://www.linkedin.com/in/armaan-chowdhury-2075a1337/",
  },
  bio: [
    "A Computer Science + Statistics student at Queen's University, currently working as a Machine Learning Engineer at QMIND and a Data Engineer Intern at ABEN HUB, focused on machine learning, data engineering, and data science.",
    "Always open to new opportunities and collaborations, feel free to contact me!",
  ],
  nowBuilding:
    "A clinical RAG benchmark at QMIND, comparing 4 retrieval methods (including GraphRAG) across 200 patient-timeline questions over ~4K clinical notes.",
  // Each figure comes from the experience entries.
  stats: [
    { value: "99%", label: "fewer upstream API calls at ABEN HUB" },
    { value: "±0.1 m", label: "elevation precision, up from ±10 m" },
    { value: "4", label: "retrieval methods benchmarked at QMIND" },
  ],
};

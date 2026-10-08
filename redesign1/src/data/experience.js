import outlierLogo from "../assets/Outlier.jpg";
import msaLogo from "../assets/msa-logo.webp";
import rickHansenLogo from "../assets/rick-hansen-logo.webp";
import mwcLogo from "../assets/MWC.png";

// Most recent first. An entry shows `logo` when it has one, otherwise `initials` on `badgeColor`.
export const experience = [
  {
    role: "Machine Learning Engineer",
    org: "QMIND",
    date: "Sep 2026 - Present",
    initials: "QM",
    badgeColor: "#3B1F5C",
    featured: true,
    description:
      "Benchmarking 4 retrieval methods (vector, metadata-filtered, GraphRAG, and temporal GraphRAG) across 200 patient-timeline questions. Built the RAG pipeline with Python, FAISS, and LangGraph over ~4K clinical notes, and evaluating 6 metrics including Recall@K, Precision@K, grounding, and abstention with Ragas on Synthea data.",
  },
  {
    role: "Data Engineer Intern",
    org: "ABEN HUB",
    date: "Apr 2026 - Present",
    initials: "AH",
    badgeColor: "#1B3A2B",
    featured: true,
    description:
      "Cut upstream API calls by 99% (500+ down to 1-4 per run) by redesigning the ETL pipeline to batch requests by shared data tile. Improved data precision from ±10 m to ±0.1 m by decoding values directly from source REST APIs, built a Python engine that converts raw elevation-grid data into classified terrain metrics, and delivered a 6-phase data-driven web app in one sprint with React and Mapbox GL JS.",
  },
  {
    role: "Data Analyst",
    org: "Queen's Data Analytics Association",
    date: "Oct 2025 - Aug 2026",
    initials: "QDA",
    badgeColor: "#00274D",
    featured: true,
    description:
      "Contributed to a published QDAA-QRET research paper deriving specific impulse (~200.7 s) from rocket hot-fire data. Transformed noisy sensor data into stable metrics via interpolation, Savitzky-Golay smoothing, and differentiation in Python, and estimated oxidizer mass-flow rate through numerical differentiation and linear regression on time-series data.",
  },
  {
    role: "Electrical Team Member",
    org: "Queen's Racing Formula SAE Team",
    date: "Sep 2025 - Aug 2026",
    initials: "QR",
    badgeColor: "#5C0A0A",
    featured: true,
    description:
      "Collaborated with the Tractive Systems subteam to design and implement a traction control system. Conducted research and simulations on torque vectoring and wheel slip detection, and assisted with hardware-software integration for reliable performance under racing conditions.",
  },
  {
    role: "AI Trainer",
    org: "Outlier",
    date: "Dec 2024 - Aug 2025",
    logo: outlierLogo,
    logoAlt: "Outlier logo",
    badgeColor: "#1f2937",
    featured: true,
    description:
      "Trained AI large language models, enhancing their ability to generate high-quality code. Projects involve evaluating AI-generated code with clear justifications, solving coding problems efficiently, optimizing performance, writing robust test cases, and providing human-readable summaries and explanations of coding solutions.",
  },
  {
    role: "Admissions Officer",
    org: "Mississauga Secondary Academy",
    date: "Jun 2025 - Jul 2025",
    logo: msaLogo,
    logoAlt: "Mississauga Secondary Academy logo",
    badgeColor: "#1f2937",
    description:
      "Guided prospective students through the admissions process. Managed outreach efforts and supported enrollment goals through data-driven decision-making and personalized communication.",
  },
  {
    role: "Team Lead",
    org: "QHacks",
    date: "Jan 2025",
    initials: "QH",
    badgeColor: "#3B1F5C",
    description:
      "Led the team that built and shipped LogozAI, an AI logo-generation platform, end to end in 36 hours. Used OpenAI's DALL·E 3 for image generation, designed a MongoDB schema for user input and generated outputs supporting 50+ beta users, and built dynamic frontend animations with HTML, CSS, and JavaScript.",
  },
  {
    role: "Administrative Coordinator",
    org: "Rick Hansen Secondary",
    date: "Nov 2023 - Apr 2024",
    logo: rickHansenLogo,
    logoAlt: "Rick Hansen Secondary logo",
    badgeColor: "#ffffff",
    description:
      "Planned and organized school events and community fundraisers to support humanitarian efforts. Presented fundraising ideas and coordinated with head administrators and teachers to ensure successful execution.",
  },
  {
    role: "Distribution Assistant",
    org: "Muslim Welfare Centre",
    date: "Jun 2023 - Aug 2023",
    logo: mwcLogo,
    logoAlt: "Muslim Welfare Centre logo",
    badgeColor: "#1f2937",
    description:
      "Managed inventory and coordinated incoming orders from the main headquarters. Assisted in the distribution of food items to customers in need. Collaborated with staff to ensure efficient task completion and seamless operations. Handled heavy items, including 30+ pound bags of flour, rice, and boxes.",
  },
  {
    role: "Mathematics Tutor",
    org: "Rick Hansen Secondary",
    date: "Jan 2023 - May 2023",
    logo: rickHansenLogo,
    logoAlt: "Rick Hansen Secondary logo",
    badgeColor: "#ffffff",
    description:
      "Helped students grasp math concepts with easy-to-follow explanations and personalized strategies, building both skills and confidence at every step.",
  },
];

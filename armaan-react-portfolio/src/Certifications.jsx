import "./index.css";

// To add a certification, add another object to this list (most recent first).
// `courses`, `skills`, `credentialId`, `credentialUrl`, and `image` are optional.
const certifications = [
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford Online",
    platform: "Coursera",
    instructor: "Andrew Ng",
    date: "Oct 2026",
    initials: "ML",
    badgeColor: "#5C0A0A",
    courses: [
      "Supervised Machine Learning: Regression and Classification",
      "Advanced Learning Algorithms",
      "Unsupervised Learning, Recommenders, Reinforcement Learning",
    ],
    skills: ["Regression", "Classification", "Neural Networks", "Decision Trees", "Clustering", "Anomaly Detection", "Recommender Systems", "Reinforcement Learning"],
    credentialId: "EN2Q1WNK87TD",
    credentialUrl: "https://coursera.org/verify/specialization/EN2Q1WNK87TD",
    image: null,
  },
];

function CertificationCard({ cert }) {
  return (
    <div className="flex flex-col w-full max-w-[440px] bg-[#161616] text-white rounded-[20px] overflow-hidden border-2 border-gray-700 shadow-lg transition-all duration-300 hover:scale-105 hover:border-[#63A54D] hover:shadow-[0_0_15px_7px_rgba(0,255,0,0.6)]">
      {cert.image && (
        <img src={cert.image} alt={`${cert.title} certificate`} className="w-full h-48 object-cover" />
      )}

      <div className="flex flex-col flex-grow p-5">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div
            className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-gray-700 flex items-center justify-center"
            style={{ backgroundColor: cert.badgeColor }}
          >
            <span className="play-bold text-white text-sm">{cert.initials}</span>
          </div>
          <div>
            <h3 className="play-bold text-xl text-[#63A54D]">{cert.title}</h3>
            <p className="play-regular text-gray-300 text-sm">{cert.issuer}</p>
          </div>
        </div>

        <p className="play-regular text-gray-400 text-sm mt-3">
          Issued {cert.date}
          {cert.platform && ` · ${cert.platform}`}
          {cert.instructor && ` · Instructor: ${cert.instructor}`}
        </p>

        {/* Courses */}
        {cert.courses?.length > 0 && (
          <div className="mt-4">
            <p className="text-gray-400 text-sm tracking-widest">{cert.courses.length} COURSES</p>
            <ul className="play-regular text-gray-300 text-sm mt-1 space-y-1">
              {cert.courses.map((course) => (
                <li key={course} className="flex gap-2">
                  <span className="text-[#63A54D]">▸</span>
                  <span>{course}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Skills */}
        {cert.skills?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {cert.skills.map((skill) => (
              <span key={skill} className="play-regular text-xs text-white border-2 px-1">
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Credential */}
        {(cert.credentialId || cert.credentialUrl) && (
          <div className="flex items-center justify-between gap-3 mt-auto pt-5">
            {cert.credentialId && (
              <p className="play-regular text-gray-400 text-xs">ID: {cert.credentialId}</p>
            )}
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-sm text-white border-white border-2 hover:text-black hover:bg-white duration-300 px-3 py-1"
              >
                Verify Credential
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <div
      className="pixelify-sans max-w-5xl mx-auto px-4 pt-15 pb-10 bg-[rgba(0,0,0,0.5)] rounded-lg m-10 border-black border-2"
      id="Certifications"
    >
      <h2 className="text-[50px] synth-glow text-3xl font-bold text-center underline text-white dark:text-black">
        Certifications
      </h2>
      <h3 className="text-[20px] text-gray-400 mb-10 text-center">
        Verified Courses &amp; Credentials
      </h3>

      <div className="flex flex-wrap justify-center items-stretch gap-8">
        {certifications.map((cert) => (
          <CertificationCard key={cert.title} cert={cert} />
        ))}
      </div>
    </div>
  );
}

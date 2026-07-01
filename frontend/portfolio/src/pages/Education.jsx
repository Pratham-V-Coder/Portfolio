import React from "react";

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "JECRC University Jaipur",
    duration: "2024 - 2026",
    score: "Pursuing",
    description:
      "Advanced studies in Software Engineering, Data Analytics, Artificial Intelligence, Cloud Computing, Database Systems, and Full Stack Development.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "ICFAI University, Jaipur",
    duration: "2021 - 2024",
    score: "CGPA: 7.07/10",
    description:
      "Focused on Programming, Database Management, Data Structures, Web Development, Data Analytics, and Software Engineering.",
  },
  {
    degree: "Senior Secondary (12th)",
    institution: "Yeshwant Sr Sec School",
    duration: "2020 - 2021",
    score: "Percentage: 78%",
    description:
      "Completed higher secondary education with Mathematics and Computer Science.",
  },
  {
    degree: "Secondary School (10th)",
    institution: "Happy Sr Sec School",
    duration: "2019 - 2020",
    score: "Percentage: 51%",
    description:
      "Built a strong academic foundation in Science, Mathematics, and Computer Fundamentals.",
  },
];

const Education = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 uppercase tracking-widest font-medium">
            Academic Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">Education</h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            My educational background has provided a strong foundation in
            computer science, software development, and data analytics.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-800 transform md:-translate-x-1/2"></div>

          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`relative mb-12 flex items-center ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-5 h-5 bg-purple-500 rounded-full border-4 border-slate-950 transform -translate-x-1/2 z-10"></div>

              {/* Card */}
              <div
                className={`ml-12 md:ml-0 md:w-[45%] bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-500 transition-all duration-300 shadow-lg`}
              >
                <span className="text-cyan-400 text-sm font-medium">
                  {edu.duration}
                </span>

                <h3 className="text-2xl font-bold mt-2">{edu.degree}</h3>

                <h4 className="text-purple-400 mt-2">{edu.institution}</h4>

                <p className="text-green-400 mt-2 font-medium">{edu.score}</p>

                <p className="text-slate-400 mt-4 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Learned */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-8">
            Relevant Coursework
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Data Structures",
              "DBMS",
              "Python",
              "SQL",
              "Web Development",
              "Operating Systems",
              "Data Analytics",
              "Software Engineering",
            ].map((course) => (
              <span
                key={course}
                className="px-5 py-3 bg-slate-900 border border-slate-700 rounded-full hover:border-cyan-400 transition"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

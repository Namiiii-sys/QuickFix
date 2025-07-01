"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Animated Gaming Website",
    video: "/videos/project1.mp4",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ipsam excepturi ex in corrupti similique.",
  },
  {
    id: 2,
    title: "Modern Portfolio Website",
    video: "/videos/project2.mp4",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam modi voluptates assumenda omnis impedit.",
  },
  {
    id: 3,
    title: "Movie Landing Page",
    video: "/videos/project3.mp4",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores numquam saepe itaque sapiente odit.",
  },
];

const ProjectSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-[#0f0f0f] text-white">
      <h1 className="text-4xl font-bold mb-12 text-center">My Projects 👨‍💻</h1>

      <div className="space-y-20">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-8`}
          >
            {/* Video Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2 relative group overflow-hidden rounded-xl"
            >
              <video
                src={project.video}
                loop
                muted
                autoPlay
                playsInline
                className="rounded-xl w-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-all" />
            </motion.div>

            {/* Text Info */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2 space-y-4"
            >
              <h2 className="text-2xl font-bold">
                {project.title.split(" ").map((word, i) =>
                  i === 1 ? (
                    <span key={i} className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                      {word}{" "}
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  )
                )}
              </h2>
              <p className="text-gray-300">{project.desc}</p>
              <button className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-2 rounded-full text-white font-medium hover:opacity-90">
                <i className="bx bx-link-external mr-2"></i>Website
              </button>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;

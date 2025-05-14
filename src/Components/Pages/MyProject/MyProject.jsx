/* eslint-disable react/no-unescaped-entities */
// import metaTubeImg from "../../../../public/Images/metaTubeImg.png";
import docProImg from "../../../../public/Images/docProImg.png";
import metaLearnImg from "../../../../public/Images/metaLernImg.png";
import carMerchantryImg from "../../../../public/Images/carMerchantryImg.png";
// import { useState } from "react";
import "./MyProject";
import { motion } from "framer-motion";

const MyProject = () => {
  const buttonVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // slightly more gap between drops
        type: "spring",
        stiffness: 120, // much softer spring
        damping: 14, // more damping for smooth stop
        mass: 0.8, // slightly heavier for natural fall
      },
    }),
  };
  const projects = [
    {
      image: docProImg,
      title: "DocPro App",
      details:
        "Book appointments with top doctors, specialists, and healthcare providers near you. Manage your health with ease - anytime.",
      techStack: [
        "NextJs",
        "Tailwind",
        "Radix UI",
        "ShadCN UI",
        "Kende",
        "Strapi",
        "Axios",
        "Vercel",
        "Node.js",
        "Render",
        "Cloudinary",
      ],
      liveLink: "https://docpro-app.vercel.app/",
      frontendLink: "https://github.com/KawsarCoder/DocPro-App",
      backendLink: "https://github.com/KawsarCoder/DocPro-APP-Backend",
    },
    {
      image: metaLearnImg,
      title: "Meta Learn",
      details:
        "We are provide best programming course for ever, if you want to join please visit course.",
      techStack: [
        "CSS",
        "React",
        "Tailwind",
        "Flowbit",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
      ],
      liveLink: "https://meta-learn-5c198.web.app/",
      frontendLink: "https://github.com/KawsarCoder/Meta-Learn-Client-Side",
      backendLink: "https://github.com/KawsarCoder/Meta-Learn-server-Side",
    },
    {
      image: carMerchantryImg,
      title: "Car Merchantry",
      details:
        "Exclusive cars available here. We Provides service all over the world.",
      techStack: [
        "CSS",
        "React",
        "Tailwind",
        "Flowbit",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
      ],
      liveLink: "ttps://car-merchantry.web.app/",
      frontendLink: "https://github.com/KawsarCoder/Car-Merchantry-Client-Side",
      backendLink: "https://github.com/KawsarCoder/Meta-Learn-server-Side",
    },
  ];

  return (
    <section id="projects">
      {/* Section header */}
      <div className="flex justify-center">
        <motion.div
          className="relative z-10 mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center font-['Space_Grotesk'] text-4xl font-bold text-white inline-block  relative">
            <h3 className="relative z-10 ">Things I've Worked On</h3>
            <motion.span
              className="absolute bottom-1 left-0 w-full h-3 bg-[#9909CD] -z-10"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
        </motion.div>
      </div>
      <div className="grid grid-cols-12 gap-8">
        {projects.map((project, index) => (
          <motion.div
            className="relative col-span-4 rounded-2xl overflow-hidden shadow-2xl bg-[#1F0C34] group"
            whileHover={{ rotateY: 10, rotateX: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ perspective: 1000 }}
            key={index}
          >
            <div className="w-full h-40 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="p-4 flex flex-col gap-3">
              <h2 className="text-white text-2xl font-bold">{project.title}</h2>
              <p className="text-gray-300 text-sm">{project.details}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-purple-700 text-xs text-white rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover effect using Tailwind group-hover */}
            {/* <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              View Project
            </motion.a> */}
            {/* Water drop animation for buttons */}
            <motion.div
              initial="hidden"
              whileHover="visible"
              className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              {project.liveLink && (
                <motion.a
                  custom={0}
                  variants={buttonVariants}
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-800 transition ease-linear"
                >
                  Live Site
                </motion.a>
              )}
              {project.frontendLink && (
                <motion.a
                  custom={1}
                  variants={buttonVariants}
                  href={project.frontendLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-800 transition ease-linear"
                >
                  Frontend Code
                </motion.a>
              )}
              {project.backendLink && (
                <motion.a
                  custom={2}
                  variants={buttonVariants}
                  href={project.backendLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-800 transition ease-linear "
                >
                  Backend Code
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className="grid justify-center mt-10">
        <motion.button
          whileHover="hover"
          className="relative text-white font-semibold rounded-xl overflow-hidden"
          style={{ backgroundColor: "#8008AF" }}
        >
          <a
            className="px-4 py-3 flex"
            href="https://github.com/kawsarcoder"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <svg
                className="mr-4 w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            See More Project
          </a>

          {/* Light wave effect */}
          <motion.span
            variants={{
              hover: {
                x: ["-150%", "150%"],
                opacity: [0, 1, 0],
                transition: {
                  duration: 0.8,
                  ease: "easeInOut",
                },
              },
            }}
            className="absolute top-0 left-0 w-1/2 h-full bg-white/20 blur-lg rotate-12 pointer-events-none"
            initial={{ x: "-150%" }}
          />
        </motion.button>
      </div>
    </section>
  );
};

export default MyProject;

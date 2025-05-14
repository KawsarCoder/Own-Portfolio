/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import aboutImage from "../../../../public/Images/AboutImage.jpeg";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Code,
  Github,
} from "lucide-react";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mount
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    // about section

    <div id="about" className="min-h-screen">
      <div className="container px-4 mx-auto">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16"
        >
          {/* Left column with enhanced image */}
          <motion.div variants={itemVariants} className="md:w-2/5 lg:w-1/3">
            <ProfileImage />
          </motion.div>

          {/* Right column with content */}
          <motion.div variants={itemVariants} className="md:w-3/5 lg:w-2/3">
            <motion.div
              variants={itemVariants}
              className=" bg-gradient-to-br from-[#2B0640] to-[#150324] backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-purple-300/10 shadow-purple"
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4 text-glow"
              >
                Md Kawsar
              </motion.h1>

              <motion.h2
                variants={itemVariants}
                className="text-xl md:text-2xl text-purple-300 mb-6"
              >
                Full Stack Developer
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className=" mb-6 text-lg text-gray-400"
              >
                I'm a passionate developer with 2+ years of experience building
                web applications with modern technologies. I specialize in
                creating beautiful, functional, and user-friendly experiences
                that solve real-world problems.
              </motion.p>

              {/* Social links */}
              <motion.div variants={itemVariants} className="mb-8">
                <h3 className="text-lg font-medium mb-3 text-purple-200">
                  Connect With Me
                </h3>
                <SocialLinks />
              </motion.div>

              {/* CTA Button */}
              <motion.a
                href="https://github.com/kawsarcoder"
                target="_blank"
                variants={itemVariants}
                className="mb-8"
              >
                <button className="group bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded flex items-center">
                  View My Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.a>

              {/* Stats counters - moved to the end */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
              >
                <StatsCounter number={56} label="Projects" />
                <StatsCounter number={17} label="Clients" />
                <StatsCounter number={3} label="Years Exp" />
                <StatsCounter number={12} label="Daily Work" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const ProfileImage = () => {
  return (
    <div className="relative">
      {/* Enhanced animated background elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-600/40 to-purple-900/40 rounded-2xl -z-10 transform-gpu"
        animate={{
          rotate: [0, 3, 0, -3, 0],
          scale: [1.02, 1.08, 1.02, 1.08, 1.02],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-purple-700/40 to-purple-500/40 rounded-2xl -z-10 transform-gpu"
        animate={{
          rotate: [0, -3, 0, 3, 0],
          scale: [1.08, 1.02, 1.08, 1.02, 1.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      ></motion.div>

      {/* Enhanced image container */}
      <motion.div
        className="relative overflow-hidden rounded-xl shadow-2xl shadow-purple-900/30"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="border-2 border-purple-300/40 rounded-xl overflow-hidden">
          <div className="relative w-full pb-[100%]">
            {" "}
            {/* 1:1 aspect ratio */}
            <motion.img
              src={aboutImage}
              alt="Profile"
              className="absolute w-full h-full object-cover"
              whileHover={{ scale: 1.09 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <div className="p-6 text-white text-center">
                <Code className="w-7 h-7 mx-auto mb-3" />
                <p className="font-medium text-xl">Full Stack Developer</p>
                <p className="mt-1 text-purple-200 text-sm">
                  Passionate Creator
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced decorative blobs with animation */}
      <motion.div
        className="absolute -bottom-6 -right-6 h-36 w-36 bg-gradient-to-br from-purple-600 to-purple-900 rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      <motion.div
        className="absolute -top-6 -left-6 h-24 w-24 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full blur-2xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      ></motion.div>
    </div>
  );
};
// StatsCounter component with animated counting effect
const StatsCounter = ({ number, label }) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);

  // Reset count when number prop changes
  useEffect(() => {
    if (!isInView) return;

    // Reset count
    setCount(0);

    // Animate counting up with dynamic timing based on number size
    const duration = 2000; // 2 seconds total duration
    const interval = duration / number;

    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= number) {
          clearInterval(timer);
          return number;
        }
        return prevCount + 1;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [number, isInView]);

  return (
    <motion.div
      className="bg-purple-900/30 p-4 rounded-lg border border-purple-800/30 text-center"
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.3)",
      }}
      transition={{ type: "spring", stiffness: 400 }}
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: false, margin: "-100px" }}
    >
      <motion.span
        className="block text-3xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {count}
      </motion.span>
      <span className="text-purple-200 text-sm">{label}</span>
    </motion.div>
  );
};

// Social Links component with animation effects
const SocialLinks = () => {
  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      url: "https://web.facebook.com/mohammod.kawsar.946/",
      color: "hover:bg-blue-600",
    },
    {
      icon: <Instagram size={20} />,
      url: "https://www.instagram.com/code.with.kawsar/",
      color: "hover:bg-pink-600",
    },
    {
      icon: <Github size={20} />,
      url: "https://github.com/kawsarcoder",
      color: "hover:bg-gray-700",
    },
    {
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/mdkawsar1403/",
      color: "hover:bg-blue-700",
    },
    {
      icon: <Mail size={20} />,
      url: "mailto:md.kawsar.developer@gmail.com",
      color: "hover:bg-red-500",
    },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2.5 bg-purple-900/50 ${social.color} rounded-lg text-white transition-colors duration-300 flex items-center justify-center border border-purple-800/50`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default AboutMe;

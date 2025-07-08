import Typewriter from "typewriter-effect";
import mainImage from "../../../../public/Images/mainImage.jpeg";
import Resume from "../../../../public/Images/FullStackResume.pdf";
import { motion } from "framer-motion";
import { Database, Atom, Layers, Code2, Cloud, BugOff } from "lucide-react";
// import TypewriterText from "@/components/TypewriterText";
import { FileTextIcon } from "lucide-react";

const Header = () => {
  const icons = [
    {
      icon: (
        <Database className="text-green-500 bg-white p-2 rounded-full w-10 h-10" />
      ),
      angle: 0,
    },
    {
      icon: (
        <Atom className="text-blue-500 bg-white p-2 rounded-full w-10 h-10" />
      ),
      angle: 60,
    },
    {
      icon: (
        <Layers className="text-violet-600 bg-white p-2 rounded-full w-10 h-10" />
      ),
      angle: 120,
    },
    {
      icon: (
        <Code2 className="text-indigo-500 bg-white p-2 rounded-full w-10 h-10" />
      ),
      angle: 180,
    },
    {
      icon: (
        <BugOff className="text-cyan-500 bg-white p-2 rounded-full w-10 h-10" />
      ),
      angle: 240,
    },
    {
      icon: (
        <Cloud className="text-yellow-500 bg-white p-2 rounded-full w-10 h-10" />
      ),
      angle: 300,
    },
  ];

  const handleDownload = () => {
    const fileUrl = Resume;
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = "MD-Kawsar-Resume.pdf";
    anchor.click();
  };

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative mt-[320px] md:mt-0"
    >
      <div className="absolute top-0 left-0 w-24 h-24 bg-[#9B87F5] opacity-5 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#9B87F5] opacity-5 rounded-full blur-xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="md:mt-0 mt-12 text-2xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Hi, I am{" "}
              <span className="bg-gradient-to-r from-[#1656B6] via-[#3E73DA] to-[#648FFB] bg-clip-text text-transparent">
                Md Kawsar{" "}
              </span>
              <br />
              <div className="inline-block ">
                {/* <TypewriterText
                  className="bg-gradient-to-r from-purple-400 via-pink-500 to-violet-500 bg-clip-text text-transparent"
                  phrases={phrases}
                  typingSpeed={100}
                /> */}
                <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-[#8008AF] bg-clip-text text-transparent lg:text-4xl text-2xl font-bold">
                  <Typewriter
                    options={{
                      strings: [
                        "Full Stack Developer",
                        "Software Engineer",
                        "Content Creator",
                      ],
                      autoStart: true,
                      loop: true,
                      skipAddStyles: true,
                    }}
                  />
                </div>
              </div>
            </motion.h1>

            <motion.p
              className="text-white/70 text-lg mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Passionate Web Developer with expertise in building modern &
              scalable web applications. Dedicated to delivering high-quality
              code & always eager to learn.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              {/* <motion.a
                href="#contact"
                className="bg-[#8008AF] text-whtie px-6 py-3 rounded-md font-medium inline-flex justify-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Hire Me →
              </motion.a> */}
              <motion.button
                whileHover="hover"
                className="relative px-6 py-3 text-white font-semibold rounded-xl overflow-hidden"
                style={{ backgroundColor: "#8008AF" }}
              >
                <a
                  className="px-4 py-3"
                  href="https://www.linkedin.com/in/mdkawsar1403/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="ml-3">
                    <i className="fa-solid fa-user-tie mr-3"></i>
                  </span>
                  Connect Me
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
              <motion.button
                whileHover="hover"
                className=" relative flex px-6 py-3 text-white font-semibold rounded-xl overflow-hidden bg-transparent border border-[#1A1E33] hover:bg-[#1A1E33]/30"
                // style={{ backgroundColor: "#8008AF" }}
                onClick={handleDownload}
              >
                <FileTextIcon />{" "}
                <span className="relative z-10 pl-2">Get Resume</span>
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
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex justify-center items-center mt-20 mb-96 md:mt-0 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
              {/* Profile image with circular border */}
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <motion.div
                  className="relative rounded-full overflow-hidden border-4 border-[#8008AF] w-[90%] h-[90%] z-10"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <img
                    src={mainImage}
                    alt="Md Kawsar - Web Developer"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Dotted circular path for icons */}
              <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full border border-dashed border-white/20 z-0"></div>

              <motion.div
                className="absolute w-full h-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              >
                {icons.map((item, index) => (
                  <div
                    key={index}
                    className="absolute"
                    style={{
                      transform: `rotate(${item.angle}deg) translate(203px) rotate(-${item.angle}deg)`,
                    }}
                  >
                    {item.icon}
                  </div>
                ))}
              </motion.div>
              {/* Curved neon accent */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Header;

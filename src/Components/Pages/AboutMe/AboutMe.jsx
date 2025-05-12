/* eslint-disable react/no-unescaped-entities */
// import secondImage from "../../../../public/Images/SecondImage.png";
// import Resume from "../../../../public/Images/FullStackResume.pdf";
// import NumberCounter from "./NumberCounter/NumberCounter";
import { motion } from "framer-motion";

const AboutMe = () => {
  // const handleDownload = () => {
  //   const fileUrl = Resume;
  //   const anchor = document.createElement("a");
  //   anchor.href = fileUrl;
  //   anchor.download = "MD-Kawsar-Resume.pdf";
  //   anchor.click();
  // };
  return (
    // about section
    // <section id="about" className="max-w-[1140px] grid mx-auto">
    //   <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 items-center md:flex-row">
    //     {/* my about image  */}
    //     <div data-aos="fade-right" className="hidden lg:grid justify-center">
    //       <img
    //         className="object-cover justify-center rounded-t-lg md:rounded-none md:rounded-l-lg"
    //         src={secondImage}
    //         alt=""
    //       />
    //     </div>
    //     {/* my about text  */}
    //     <div className="flex flex-col justify-between p-4 leading-normal">
    //       <h5 className="mb-2 text-4xl md:text-left text-center font-extrabold capitalize text-mainText tracking-tight dark:text-white">
    //         Getting to Know Me
    //       </h5>
    //       {/* about me text  */}
    //       <p className="mb-3 font-normal text-gray-500 text-justify dark:text-gray-400">
    //         Hello, I am MD Kawsar, a passionate Web Developer with a focus on
    //         Full Stack development. Currently pursuing a diploma in Computer
    //         Technology at Chattogram Polytechnic Institute, I thrive on turning
    //         innovative ideas into fully functional and visually appealing
    //         websites and web applications. My journey in the world of
    //         programming has been an exciting one, and I constantly seek new
    //         challenges to expand my skill set. With a strong foundation in the
    //         Full Stack and a drive for continuous learning, I am dedicated to
    //         creating seamless user experiences and contributing to the
    //         ever-evolving digital landscape.
    //       </p>
    //       {/* download cv button  */}
    //       <button
    //         className="md:px-4 text-center px-3 w-48 uppercase md:py-3 py-2 md:mt-5 mb-10 font-bold text-md border-primary btn-style hover:bg-gradient-to-r from-FourtColor to-green-400 hover:text-white rounded-md flex text-primary"
    //         onClick={handleDownload}
    //       >
    //         Download CV{" "}
    //         <span className="ml-3">
    //           <i className="fa-solid fa-download"></i>
    //         </span>
    //       </button>
    //       {/* title list  */}
    //       <div className="mb-10">
    //         <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 justify-items-center text-primary">
    //           <div>
    //             <div className="rounded-full w-32 h-32 hover:text-bgColor grid justify-center hover:bg-gradient-to-r from-FourtColor to-thirdColor shadow-lg border-[#f7f9ff] border-8 ">
    //               <div className="rounded-full w-28 h-28 p-5 shadow-lg border-secondary border-8 text-center">
    //                 <i className="fa-solid fa-clipboard-check text-2xl"></i>
    //                 <NumberCounter maxNumber={58} />
    //               </div>
    //             </div>
    //             <span className="font-extrabold justify-center grid text-center mt-5 text-sm">
    //               Project Completed
    //             </span>
    //           </div>

    //           <div>
    //             <div className="rounded-full w-32 h-32 hover:text-bgColor grid justify-center hover:bg-gradient-to-r from-FourtColor to-thirdColor shadow-lg border-[#f7f9ff] border-8 ">
    //               <div className="rounded-full w-28 h-28 p-5 shadow-lg border-secondary border-8 text-center">
    //                 <i className="fa-solid fa-road-circle-check text-2xl"></i>
    //                 <NumberCounter maxNumber={3} />
    //               </div>
    //             </div>
    //             <span className="font-bold justify-center grid text-center  mt-5 text-md">
    //               Year Of Journey
    //             </span>
    //           </div>

    //           <div>
    //             <div className="rounded-full w-32 h-32 hover:text-bgColor grid justify-center hover:bg-gradient-to-r from-FourtColor to-thirdColor shadow-lg border-[#f7f9ff] border-8 ">
    //               <div className="rounded-full w-28 h-28 p-5 shadow-lg border-secondary border-8 text-center">
    //                 <i className="fa-solid fa-user text-2xl"></i>
    //                 <NumberCounter maxNumber={16} />
    //               </div>
    //             </div>
    //             <span className="font-bold justify-center grid text-center  mt-5 text-md">
    //               Happy Client
    //             </span>
    //           </div>

    //           <div>
    //             <div className="rounded-full w-32 h-32 hover:text-bgColor grid justify-center hover:bg-gradient-to-r from-FourtColor to-thirdColor shadow-lg border-[#f7f9ff] border-8 ">
    //               <div className="rounded-full w-28 h-28 p-5 shadow-lg border-secondary border-8 text-center">
    //                 <i className="fa-solid fa-clock text-2xl"></i>
    //                 <NumberCounter maxNumber={12} />
    //               </div>
    //             </div>
    //             <span className="font-bold justify-center grid text-center  mt-5 text-md">
    //               Daily Work (h)
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"
    >
      <div className="absolute top-0 left-0 w-24 h-24 bg-[#9909CD] opacity-5 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#9909CD] opacity-5 rounded-full blur-xl"></div>

      <motion.h2
        className="text-center font-['Space_Grotesk'] text-3xl font-bold mb-16 text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <span className="border-b-2 border-[#9909CD] pb-2">About Me</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          className="p-8 bg-[#200633] shadow-lg rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h3 className="font-['Space_Grotesk'] text-2xl text-[#9909CD] mb-4 font-semibold">
              Education
            </h3>
            <div className="pl-4 border-l-2 border-[#9909CD]/30">
              <p className="mb-2 text-white font-medium">
                BSc in Computer Science & Engineering
              </p>
              <p className="text-gray-400 mb-6">
                Pursuing advanced knowledge in software development
              </p>

              <p className="mb-2 text-white font-medium">
                Diploma in Computer Engineering
              </p>
              <p className="text-gray-400">
                Built strong foundations in computer systems
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-['Space_Grotesk'] text-2xl text-[#9909CD] mb-4 font-semibold">
              Professional Journey
            </h3>
            <div className="pl-4 border-l-2 border-[#9909CD]/30">
              <p className="text-gray-300">
                From my early days exploring computer systems to becoming a
                full-stack developer, I've always been passionate about creating
                digital experiences that merge functionality with creativity.
                I'm particularly interested in blending web development with AI
                technologies to build the next generation of applications.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-full max-w-md overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="Professional coding workspace"
              className="w-full h-64 object-cover"
            />
          </div>

          <div className="bg-[#200633] p-6 rounded-lg w-full max-w-md shadow-lg">
            <h3 className="font-['Space_Grotesk'] text-xl text-[#9909CD] mb-4 font-semibold">
              Interests & Expertise
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
              <li className="flex items-center">
                <span className="text-[#9909CD] mr-2">•</span>
                Web Development
              </li>
              <li className="flex items-center">
                <span className="text-[#9909CD] mr-2">•</span>
                AI Integration
              </li>
              <li className="flex items-center">
                <span className="text-[#9909CD] mr-2">•</span>
                UI/UX Design
              </li>
              <li className="flex items-center">
                <span className="text-[#9909CD] mr-2">•</span>
                Graphics Design
              </li>
              <li className="flex items-center">
                <span className="text-[#9909CD] mr-2">•</span>
                Video Editing
              </li>
              <li className="flex items-center">
                <span className="text-[#9909CD] mr-2">•</span>
                SEO & Marketing
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;

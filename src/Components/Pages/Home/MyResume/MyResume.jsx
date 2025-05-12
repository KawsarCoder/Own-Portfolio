import { motion } from "framer-motion";
/* eslint-disable react/no-unescaped-entities */
const MyResume = () => {
  return (
    // <section>
    //   <h2 className="text-center font-extrabold text-4xl capitalize text-mainText mt-20 mb-10">
    //     Resume at a Glance
    //   </h2>
    //   <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-20">
    //     <div className="border-r-4 border-secondary pr-10">
    //       <div className="">
    //         <h3 className="text-2xl font-bold text-thirdColor dark:text-white">
    //           <span>
    //             <i className="fa-solid fa-graduation-cap mr-2 mb-5"></i>
    //           </span>{" "}
    //           Education Qualification:
    //         </h3>
    //         <ol className="relative dark:border-gray-700">
    //           <li className="mb-10 shadow-lg p-10 rounded-xl">
    //             <span className="absolute flex items-center justify-center w-8 h-8 bg-bgColor mt-[20%] rounded-full -right-14 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
    //               <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-4 dark:ring-gray-900 shrink-0">
    //                 <i className="fa-solid fa-up-down-left-right  text-thirdColor text-xl"></i>
    //               </div>
    //             </span>
    //             <div className="flex items-center mb-1 text-lg font-semibold text-primary dark:text-white justify-between">
    //               <span> Diploma in Computer Technology</span>
    //               <span className="bg-blue-100 text-FourtColor text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
    //                 09/21 - 12/24
    //               </span>
    //             </div>
    //             <span className="block mb-2 text-sm font-bold leading-none text-gray-400 dark:text-gray-500">
    //               Chattogram Polytechnic Institute
    //             </span>
    //             <p className="mb-4 mt-4 text-base font-normal text-gray-500 dark:text-gray-400 text-justify">
    //               Chattogram Polytechnic Institute is a reputable technical
    //               institute located in Chattogram, offering a diverse range of
    //               diploma programs in engineering and technology fields.
    //               Renowned for its quality education and skilled faculty, it
    //               equips students with practical knowledge and hands-on
    //               experience, preparing them for successful careers in the
    //               industry.
    //             </p>
    //           </li>
    //           <li className="mb-10 shadow-lg p-10 rounded-xl bg-gradient-to-r from-FourtColor to-thirdColor">
    //             <span className="absolute flex items-center justify-center w-8 h-8 bg-bgColor mt-[20%] rounded-full -right-14 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
    //               <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-4 dark:ring-gray-900 shrink-0">
    //                 <i className="fa-solid fa-up-down-left-right  text-thirdColor text-xl"></i>
    //               </div>
    //             </span>
    //             <div className="mb-1 text-lg font-bold text-primary dark:text-white flex justify-between">
    //               <span>Full Stack Web Development Course</span>
    //               <span className="bg-blue-200 text-FourtColor text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
    //                 02/22 - 10/24
    //               </span>
    //             </div>
    //             <span className="block mb-2 text-sm font-bold leading-none text-gray-300 dark:text-gray-500">
    //               Programming Hero
    //             </span>
    //             <p className="text-base font-normal text-bgColor mt-2 dark:text-gray-400 text-justify">
    //               Completed Full Web Development Course at Programming Hero, a
    //               renowned well-known company in Bangladesh. Gained expertise in
    //               programming languages, web development, and web app creation.
    //               Highly interactive and beginner-friendly platform that
    //               equipped me with essential skills for a successful career in
    //               web development.
    //             </p>
    //           </li>
    //           {/* <li className="shadow-lg p-10 rounded-xl">
    //             <span className="absolute flex items-center justify-center w-8 h-8 bg-bgColor mt-[20%] rounded-full -right-14 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
    //               <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-4 dark:ring-gray-900 shrink-0">
    //                 <i className="fa-solid fa-turn-down text-thirdColor text-xl rotate-90"></i>
    //               </div>
    //             </span>
    //             <div className="mb-1 text-lg font-semibold text-gray-900 dark:text-white flex justify-between">
    //               <span>Full Stack Web Development Course</span>
    //               <span className="bg-blue-100 text-FourtColor text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
    //                 2022 - 2024
    //               </span>
    //             </div>
    //             <span className="block mb-2 text-sm font-bold leading-none text-gray-400 dark:text-gray-500">
    //               Programming Hero
    //             </span>
    //             <p className="text-base font-normal text-gray-500 dark:text-gray-400 text-justify">
    //               Completed Full Web Development Course at Programming Hero, a
    //               renowned well-known company in Bangladesh. Gained expertise in
    //               programming languages, web development, and web app creation.
    //               Highly interactive and beginner-friendly platform that
    //               equipped me with essential skills for a successful career in
    //               web development.
    //             </p>
    //           </li> */}
    //         </ol>
    //       </div>
    //     </div>
    //     <div>
    //       <h3 className="text-2xl font-bold text-thirdColor dark:text-white flex ml-10">
    //         <span>
    //           <i className="fa-solid fa-briefcase  mr-2 mb-5"></i>
    //         </span>{" "}
    //         Working Experience:
    //       </h3>
    //       <div className="">
    //         <ol className="relative ml-8">
    //           <li className="mb-10 shadow-lg p-10 rounded-xl bg-gradient-to-r from-FourtColor to-thirdColor">
    //             <div className="mb-1 text-lg font-bold text-primary dark:text-white flex justify-between">
    //               <span>MERN Stack Developer</span>
    //               <span className="bg-blue-200 text-FourtColor text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
    //                 02/22 - Present
    //               </span>
    //             </div>
    //             <span className="block mb-2 text-sm font-bold leading-none text-gray-300 dark:text-gray-500">
    //               Codex Devware
    //             </span>
    //             <p className="text-base font-normal text-bgColor mt-2 dark:text-gray-400 text-justify">
    //               I am the General Secretary of Codex Devware, a software
    //               development company and training institute based in
    //               Chittagong, Bangladesh.We specialize in developing web
    //               applications and mobile apps. We have a team of experienced
    //               developers who are committed to delivering high-quality
    //               products that meet the needs of our clients. We also offer
    //               training courses on a variety of topics, including web
    //               development, mobile development, and data science.
    //             </p>
    //           </li>
    //           <li className="mb-10 shadow-lg p-10 rounded-xl">
    //             <div className="mb-1 text-lg font-semibold text-primary dark:text-white flex justify-between">
    //               <span>Campus Ambassador</span>
    //               <span className="bg-blue-200 text-FourtColor text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
    //                 02/24 - 12/24
    //               </span>
    //             </div>
    //             <span className="block mb-2 text-sm font-bold leading-none text-gray-400 dark:text-gray-500">
    //               Programming Hero
    //             </span>
    //             <p className="text-base font-normal text-gray-500 dark:text-gray-400 text-justify">
    //               Programming Hero is revolutionizing digital learning with a
    //               personalized, immersive approach. Guided by the slogan "Let's
    //               code your career!", we specialize in web development and
    //               software engineering, helping learners go from zero experience
    //               to junior developer roles. Our graduates thrive in top local
    //               tech companies and global startups.
    //             </p>
    //           </li>
    //         </ol>
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
            <h3 className="relative z-10 ">Resume at a Glance</h3>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-center">
        <motion.div
          className="lg:col-span-6 bg-gradient-to-br from-[#200633] to-[#150324] p-8 rounded-2xl shadow-lg relative overflow-hidden"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h3 className="font-['Space_Grotesk'] text-2xl text-white mb-8 font-semibold relative inline-block">
              Education Qualification
              <motion.span
                className="absolute -bottom-1 left-0 h-[2px] bg-[#9909CD] w-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              />
            </h3>

            <div className="pl-4 border-l-2 border-[#9909CD]/30">
              <h3 className="font-['Space_Grotesk'] text-xl text-[#9909CD]  font-semibold">
                BSc in Computer Science & Engineering
              </h3>
              <p className=" text-white font-medium">Uttara University</p>
              <p className="text-gray-400 mb-6">2025-Running</p>
              <h3 className="font-['Space_Grotesk'] text-xl text-[#9909CD]  font-semibold">
                Diploma in Engineering
              </h3>
              <p className=" text-[#9909CD] font-medium">Computer Technology</p>
              <p className=" text-white font-medium">
                Chattogram Polytechnic Institute
              </p>
              <p className="text-gray-400">CGPA: 3.61 out of 4</p>
              <p className="text-gray-400 mb-6">Year: 2020-2024</p>
              <h3 className="font-['Space_Grotesk'] text-xl text-[#9909CD]  font-semibold">
                Secondary School Certificate
              </h3>
              <p className=" text-white font-medium">
                Fulgazi Govt. Pilot High School
              </p>
              <p className="text-gray-400 ">GPA: 4.89 out of 5</p>
              <p className="text-gray-400 mb-6">Passing Year: 2020</p>
            </div>
          </div>
        </motion.div>

        {/* Work Experience - 7 columns */}
        <motion.div
          className="lg:col-span-6 bg-gradient-to-br from-[#200633] to-[#150324] p-8 rounded-2xl shadow-lg relative overflow-hidden"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {/* Background glow effect */}
          <div
            className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-[#9909CD]/10"
            style={{ filter: "blur(30px)" }}
          />

          <h3 className="font-['Space_Grotesk'] text-2xl text-white mb-8 font-semibold relative inline-block">
            Professional Experience
            <motion.span
              className="absolute -bottom-1 left-0 h-[2px] bg-[#9909CD] w-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
          </h3>

          <div className="relative z-10">
            <div className="space-y-8">
              {/* Experience 1 */}
              <motion.div
                className="relative pl-6 before:absolute before:left-0 before:top-1.5 before:h-3 before:w-3 before:rounded-full before:bg-[#9909CD] after:absolute after:top-7 after:bottom-0 after:left-1.5 after:-translate-x-1/2 after:border-l-2 after:border-dashed after:border-[#9909CD]/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ x: 5 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-1 gap-2">
                  <h4 className="text-white font-semibold text-lg">
                    Digital Project Manager
                  </h4>
                  <div className="bg-[#9909CD]/10 text-[#9909CD] text-sm px-3 py-1 rounded-full inline-flex items-center">
                    <span className="w-2 h-2 bg-[#9909CD] rounded-full mr-2 animate-pulse"></span>
                    Full-time | Current
                  </div>
                </div>
                <p className="text-[#9909CD] font-medium mb-2">
                  Dr. Masbah Uddin Consultancy
                </p>
                <p className="text-gray-300 text-sm">
                  Developing custom web solutions for clients including
                  responsive front-end interfaces and scalable back-end systems.
                  Working with modern web technologies to deliver high-quality
                  software products.
                </p>
              </motion.div>

              {/* Experience 2 */}
              <motion.div
                className="relative pl-6 before:absolute before:left-0 before:top-1.5 before:h-3 before:w-3 before:rounded-full before:bg-[#9909CD] after:absolute after:top-7 after:bottom-0 after:left-1.5 after:-translate-x-1/2 after:border-l-2 after:border-dashed after:border-[#9909CD]/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ x: 5 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-1 gap-2">
                  <h4 className="text-white font-semibold text-lg">
                    MERN Stack Developer
                  </h4>
                  <div className="bg-[#9909CD]/10 text-[#9909CD] text-sm px-3 py-1 rounded-full inline-flex items-center">
                    <span className="w-2 h-2 bg-[#9909CD] rounded-full mr-2 animate-pulse"></span>
                    Part-time | Current
                  </div>
                </div>
                <p className="text-[#9909CD] font-medium mb-2">Codex Devware</p>
                <p className="text-gray-300 text-sm">
                  Building full-stack applications using MongoDB, Express,
                  React, and Node.js. Implementing complex features and ensuring
                  seamless user experiences across different platforms and
                  devices.
                </p>
              </motion.div>

              {/* Experience 3 */}
              <motion.div
                className="relative pl-6 before:absolute before:left-0 before:top-1.5 before:h-3 before:w-3 before:rounded-full before:bg-[#9909CD] after:absolute after:top-7 after:bottom-0 after:left-1.5 after:-translate-x-1/2 after:border-l-2 after:border-dashed after:border-[#9909CD]/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ x: 5 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-1 gap-2">
                  <h4 className="text-white font-semibold text-lg">
                    Operating Officer
                  </h4>
                  <div className="bg-[#9909CD]/10 text-[#9909CD] text-sm px-3 py-1 rounded-full inline-flex items-center">
                    <span className="w-2 h-2 bg-[#9909CD] rounded-full mr-2 animate-pulse"></span>
                    Part-time | Current
                  </div>
                </div>
                <p className="text-[#9909CD] font-medium mb-2">
                  Proborton Coaching Center
                </p>
                <p className="text-gray-300 text-sm">
                  Building full-stack applications using MongoDB, Express,
                  React, and Node.js. Implementing complex features and ensuring
                  seamless user experiences across different platforms and
                  devices.
                </p>
              </motion.div>

              {/* Experience 4 */}
              <motion.div
                className="relative pl-6 before:absolute before:left-0 before:top-1.5 before:h-3 before:w-3 before:rounded-full before:bg-[#9909CD]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ x: 5 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-1 gap-2">
                  <h4 className="text-white font-semibold text-lg">
                    Founding Member
                  </h4>
                  <div className="bg-[#9909CD]/10 text-[#9909CD] text-sm px-3 py-1 rounded-full">
                    Founding Member
                  </div>
                </div>
                <p className="text-[#9909CD] font-medium mb-2">
                  CPI Programming Community
                </p>
                <p className="text-gray-300 text-sm">
                  Established a development community dedicated to mentoring
                  junior programmers. Organized workshops, code reviews, and
                  collaborative projects to foster skill development and
                  knowledge sharing.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MyResume;

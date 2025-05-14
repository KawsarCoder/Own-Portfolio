import { motion } from "framer-motion";
/* eslint-disable react/no-unescaped-entities */
const MyResume = () => {
  return (
    <section
      id="resume"
      className="pt-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"
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

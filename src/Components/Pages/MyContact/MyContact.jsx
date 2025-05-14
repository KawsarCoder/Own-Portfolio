/* eslint-disable react/no-unescaped-entities */
// import ContactImage from "../../../../public/Images/ContactImage.png";
import FormSubmit from "./FormSubmit";
import { motion } from "framer-motion";

const MyContact = () => {
  return (
    // contact container
    <section
      id="contact"
      className="py-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#9909CD]/5"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{ filter: "blur(70px)" }}
      />

      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#9909CD]/5"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.07, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
        style={{ filter: "blur(70px)" }}
      />

      {/* Section header */}
      <motion.div
        className="relative z-10 mb-16 grid justify-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-center font-['Space_Grotesk'] text-4xl font-bold text-white inline-block relative">
          <span className="relative z-10">Let's Connect</span>
          <motion.span
            className="absolute bottom-1 left-0 w-full h-3 bg-[#9909CD] -z-10"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </h2>
      </motion.div>

      {/* Contact content */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start relative z-10">
        {/* Contact form - takes 3 columns */}
        <motion.div
          className="lg:col-span-3 bg-gradient-to-br from-[#200633] to-[#150324] p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-['Space_Grotesk'] text-2xl text-white mb-8 font-semibold relative inline-block">
            Send a Message
            <motion.span
              className="absolute -bottom-1 left-0 h-[2px] bg-[#9909CD] w-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </h3>
          <FormSubmit />
        </motion.div>

        {/* Connect & Location - takes 2 columns */}
        <motion.div
          className="lg:col-span-2 flex flex-col space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Connect With Me */}
          <motion.div
            className="bg-gradient-to-br from-[#200633] to-[#150324] p-8 rounded-2xl shadow-lg relative overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="absolute -right-10 -top-10 w-20 h-20 rounded-full bg-[#9909CD]/10"
              style={{ filter: "blur(20px)" }}
            />

            <h3 className="font-['Space_Grotesk'] text-xl text-white mb-6 font-semibold relative inline-block">
              Connect With Me
              <motion.span
                className="absolute -bottom-1 left-0 h-[2px] bg-[#9909CD] w-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              />
            </h3>

            <div className="space-y-6 relative z-10">
              <motion.a
                href="https://github.com/kawsarcoder"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-xl hover:bg-[#9909CD]/10 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-[#160427] flex items-center justify-center mr-4 group-hover:bg-[#9909CD]/20 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9909CD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </div>
                <div>
                  <p className="font-['Space_Grotesk'] text-white group-hover:text-[#9909CD] transition-colors">
                    github.com/kawsarcoder
                  </p>
                  <p className="text-xs text-gray-400">GitHub Profile</p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/mdkawsar1403/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-xl hover:bg-[#9909CD]/10 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-[#160427] flex items-center justify-center mr-4 group-hover:bg-[#9909CD]/20 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9909CD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div>
                  <p className="font-['Space_Grotesk'] text-white group-hover:text-[#9909CD] transition-colors">
                    linkedin.com/in/mdkawsar1403/
                  </p>
                  <p className="text-xs text-gray-400">LinkedIn Profile</p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:contact@kawsar.dev"
                className="flex items-center p-3 rounded-xl hover:bg-[#9909CD]/10 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-[#160427] flex items-center justify-center mr-4 group-hover:bg-[#9909CD]/20 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9909CD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-['Space_Grotesk'] text-white group-hover:text-[#9909CD] transition-colors">
                    md.kawsar.developer@gmail.com
                  </p>
                  <p className="text-xs text-gray-400">Email Me</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            className="bg-gradient-to-br from-[#200633] to-[#150324] p-8 rounded-2xl shadow-lg relative overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="absolute -left-10 -bottom-10 w-20 h-20 rounded-full bg-[#9909CD]/10"
              style={{ filter: "blur(20px)" }}
            />

            <h3 className="font-['Space_Grotesk'] text-xl text-white mb-4 font-semibold relative inline-block">
              Location & Availability
              <motion.span
                className="absolute -bottom-1 left-0 h-[2px] bg-[#9909CD] w-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              />
            </h3>

            <div className="relative z-10">
              <div className="flex items-start mt-6 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#160427] flex items-center justify-center mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9909CD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium mb-1">
                    Dhaka, Bangladesh
                  </p>
                  <p className="text-gray-300 text-sm">
                    Available for remote work worldwide
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#160427] flex items-center justify-center mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9909CD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium mb-1">GMT+6 Timezone</p>
                  <p className="text-gray-300 text-sm">
                    Flexible working hours to accommodate different time zones
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
    </section>
  );
};

export default MyContact;

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const SkillCard = ({ name, icon, type }) => {
  return (
    <motion.div
      className="relative bg-gradient-to-br from-[#160427] to-[#0c0215] p-4 rounded-xl overflow-hidden group"
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
    >
      {/* Inner glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#9909CD]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />

      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#9909CD]/0 via-[#9909CD]/30 to-[#9909CD]/0 opacity-0 group-hover:opacity-100"
        animate={{
          backgroundPosition: ["200% 0", "-200% 0"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{
          backgroundSize: "200% 100%",
        }}
      />

      {/* Content */}
      <div className="flex flex-col items-center text-center relative z-10">
        {/* Icon wrapper */}
        <motion.div
          className="w-14 h-14 flex items-center justify-center mb-3 bg-[#200633] rounded-full shadow-lg"
          //   whileHover={{
          //     scale: 1.1,
          //     backgroundColor: "#9909CD",
          //     transition: { duration: 0.2 },
          //   }}
        >
          <img src={icon} className="text-3xl" />
        </motion.div>

        {/* Skill name */}
        {/* <motion.h4
          className="font-['Space_Grotesk'] text-white text-md font-medium mt-1 group-hover:text-[#9909CD] transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          {name}
        </motion.h4> */}
      </div>
    </motion.div>
  );
};

export default SkillCard;

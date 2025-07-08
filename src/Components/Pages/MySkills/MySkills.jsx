import skillJson from "../../../../public/skills.json";
import { motion } from "framer-motion";
import SkillCard from "../../SkillCard";
const MySkills = () => {
  // Aos.init();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <section
      id="skills"
      className=" px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative mt-20 md:mt-0"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-40 right-5 w-72 h-72 rounded-full bg-[#9909CD]/5"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.07, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{ filter: "blur(60px)" }}
      />

      <motion.div
        className="absolute bottom-40 left-10 w-60 h-60 rounded-full bg-[#9909CD]/5"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
        style={{ filter: "blur(60px)" }}
      />

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
            <h3 className="relative z-10">My Technical Arsenal</h3>
            <motion.span
              className="absolute bottom-1 left-0 w-full h-3 bg-[#9909CD] -z-10 "
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
        </motion.div>
      </div>

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Tech Skills - 5 columns */}
          <motion.div
            className="lg:col-span-12 bg-gradient-to-br from-[#200633] to-[#150324] p-8 rounded-2xl shadow-lg relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            {/* Background glow effect */}
            <div
              className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-[#9909CD]/10"
              style={{ filter: "blur(30px)" }}
            />

            <div className="relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {skillJson.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={cardVariants}
                  >
                    <SkillCard name={skill.name} icon={skill.img} type="core" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;

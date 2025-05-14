import {
  FaCode,
  FaPalette,
  FaSearch,
  FaShoppingCart,
  FaBullhorn,
} from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaCode size={28} />,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies and best practices.",
  },
  {
    icon: <FaShoppingCart size={28} />,
    title: "E-Commerce Solutions",
    description:
      "Build secure and scalable online stores that convert visitors into buyers.",
  },
  {
    icon: <FaPalette size={28} />,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed with your users in mind.",
  },
  {
    icon: <FaSearch size={28} />,
    title: "SEO",
    description:
      "Boost your visibility on search engines with expert optimization strategies.",
  },
  {
    icon: <MdOndemandVideo size={28} />,
    title: "Video Editing",
    description:
      "Enhance your video content for faster loading and better user engagement.",
  },
  {
    icon: <FaBullhorn size={28} />,
    title: "Ads Marketing",
    description:
      "Drive traffic and conversions with targeted digital advertising campaigns.",
  },
];

const MyServices = () => {
  return (
    <div
      className="min-h-screen px-6 py-40"
      style={{ backgroundColor: "#150023" }}
    >
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
            <h3 className="relative z-10 ">Solutions I Provide</h3>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#1f0c34] p-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 border border-purple-900"
          >
            {" "}
            {/* Inner glow effect on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#9909CD]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
            <div className="mb-4">
              <div className="bg-[#9b87f5]/20 p-3 rounded-lg w-fit mb-4 relative overflow-hidden group-hover:shadow-[0_0_10px_rgba(155,135,245,0.4)]">
                <span className="w-6 h-6 text-[#9b87f5] group-hover:animate-pulse">
                  {service.icon}
                </span>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_25%,rgba(155,135,245,0.3)_50%,transparent_75%)] opacity-0 group-hover:opacity-100 group-hover:animate-[retro-scan_2s_ease-in-out_infinite] pointer-events-none"></div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-purple-200">
              {service.title}
            </h3>
            <p className="text-sm text-purple-100">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyServices;

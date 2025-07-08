import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      className="mt-20 pt-10 border-t border-[#9B87F5]/10 text-center relative z-10 bg-gradient-to-br from-[#1F0C35] to-[#150324] shadow-lg pb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="max-w-md mx-auto">
        <motion.div
          className="flex justify-center space-x-6 mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.a
            href="https://github.com/kawsarcoder"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#160427] flex items-center justify-center hover:bg-[#9B87F5]/20 transition-colors"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9B87F5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/mdkawsar1403/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#160427] flex items-center justify-center hover:bg-[#9B87F5]/20 transition-colors"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9B87F5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </motion.a>

          <motion.a
            href="mailto:md.kawsar.developer@gmail.com"
            className="w-10 h-10 rounded-full bg-[#160427] flex items-center justify-center hover:bg-[#9B87F5]/20 transition-colors"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9B87F5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p className="text-gray-300 text-sm font-medium">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-[#9B87F5]">Md Kawsar</span> · All Rights
          Reserved
        </p>
        <p className="text-gray-400 text-sm mt-1">
          Software Engineer & Full-Stack Web Developer
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Footer;

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import blogImage from "../../../../public/Images/thirdBlog.png";
import typescriptBlog from "../../../../public/Images/typescriptBlog.jpg";
import databaseBlog from "../../../../public/Images/databaseBlog.jpg";
import firstBlogImage from "../../../../public/Images/thirdBlog.jpg";
import { motion } from "framer-motion";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
// import Aos from "aos";
// import "aos/dist/aos.css";
// import DateCalculator from "./DateCalculator";

const BlogCard = ({ title, summary, image, date, url }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className="relative w-80 h-96 rounded-xl bg-[#1F0C34] hover:bg-gradient-to-br from-[#350B4F] to-[#1F0C34] p-1 group cursor-pointer shadow-xl"
      style={{ transformStyle: "preserve-3d" }}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
        transition: { type: "spring", stiffness: 200, damping: 15 },
      }}
      whileHover={{ scale: 1.05 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-black bg-opacity-10 blur-lg rounded-xl z-0"></div>

      {/* Cube effect inner layer */}
      <div className="relative z-10 bg-[#ffffff08] backdrop-blur-xl border border-white/10 rounded-xl h-full w-full p-5 flex flex-col justify-between transition-all duration-300 group-hover:shadow-2xl">
        {/* Image block */}
        <div className="w-full h-32 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="mt-3 flex flex-col gap-1 text-white">
          <span className="text-xs text-purple-300">{date}</span>
          <h3 className="text-lg font-bold leading-relaxed">{title}</h3>
          <p className="text-sm text-gray-200 line-clamp-3">{summary}</p>
        </div>

        {/* CTA */}
        <div className="mt-2 text-right">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-purple-200 hover:underline"
          >
            Read more →
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const MyBlog = () => {
  const blogs = [
    {
      title: "All about Programming World",
      summary:
        "Programming has become an essential part of our lives as technology continues to advance.",
      image: blogImage,
      date: "May 10, 2025",
      url: "https://www.linkedin.com/posts/mdkawsar1403_programming-activity-7029446324567609345-_uxz?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC-mU7cB3q7O1MTRPLVTs90Tx1j2xfcSqyk",
    },
    {
      title: "Magic of Web Development",
      summary:
        "In todays digitally driven era, web development plays a pivotal role in shaping our online experiences",
      image: firstBlogImage,
      date: "Jan 15, 2023.",
      url: "https://www.linkedin.com/posts/mdkawsar1403_webdevelopment-technology-innovation-activity-7090654217022935040-GZHN?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC-mU7cB3q7O1MTRPLVTs90Tx1j2xfcSqyk",
    },
    {
      title: "ডাটাবেস (Database) হলো মাছ ধরার মতো!",
      summary:
        "ডাটাবেস ব্যবহার করা মানে বিশাল তথ্যের সমুদ্র থেকে বুদ্ধি, কৌশল আর ধৈর্য দিয়ে আপনার প্রয়োজনের তথ্য (মাছ) বের করে আনা। ভালো নেট মানে ভালো কোয়েরি — আর ভালো কোয়েরি মানেই সফল ডেটা ক্যাচ!",
      image: databaseBlog,
      date: "May 14, 2025",
      url: "https://www.linkedin.com/posts/mdkawsar1403_%E0%A6%A1%E0%A6%9F%E0%A6%AC%E0%A6%B8-database-%E0%A6%B9%E0%A6%B2-%E0%A6%AE%E0%A6%9B-%E0%A6%A7%E0%A6%B0%E0%A6%B0-%E0%A6%AE%E0%A6%A4-%E0%A6%AD%E0%A6%AC%E0%A6%A8-activity-7328270290143064064-VOAx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC-mU7cB3q7O1MTRPLVTs90Tx1j2xfcSqyk",
    },
    {
      title: "TypeScript এ Polymorphism মানে গিরগিটির মতো!",
      summary:
        "TypeScript এর Polymorphism মানে হচ্ছে গিরগিটির মতো, নিজেকে বদলাতে পারে, কিন্তু নিজের পরিচয় হারায় না!",
      image: typescriptBlog,
      date: "May 10, 2025",
      url: "https://www.linkedin.com/posts/mdkawsar1403_typescript-polymorphism-programming-activity-7326998834117574656-WAqi?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC-mU7cB3q7O1MTRPLVTs90Tx1j2xfcSqyk",
    },
  ];

  return (
    <section className="min-h-screen pt-32 pb-16 grid justify-items-center ">
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
            className="absolute bottom-1 left-0 w-full h-3 bg-[#9B87F5] -z-10"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </h2>
      </motion.div>
      <div className="pb-10 px-6 grid grid-cols-3 max-w-[1080px] container items-start gap-12">
        {blogs.map((blog, i) => (
          <BlogCard key={i} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default MyBlog;

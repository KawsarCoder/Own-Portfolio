import React, { useEffect } from "react";
import blogImage from "../../../../public/Images/thirdBlog.png";
import firstBlogImage from "../../../../public/Images/firstBlog.jpg";
import secondBlogImage from "../../../../public/Images/ESSix.jpg";

import Aos from "aos";
import "aos/dist/aos.css";
import DateCalculator from "./DateCalculator";

const MyBlog = () => {
  return (
    <section className="max-w-[1140px] grid mx-auto">
      <h2 className="text-center font-extrabold text-4xl uppercase text-mainText mt-20 mb-10">
        My Blogs
      </h2>
      {/* blogs container  */}
      <div className="grid lg:grid-cols-3 grid-cols-1 justify-items-center gap-7">
        {/* first blog  */}
        <div
          data-aos="flip-left"
          className="max-w-xs borde rounded-lg bg-gradient-to-r from-FourtColor to-thirdColor shadow-lg dark:bg-gray-800 dark:border-gray-700"
        >
          {/* first blog image wrapper */}
          <div className="relative grid justify-center">
            <img className="rounded" src={firstBlogImage} alt="" />
          </div>
          {/* first blog content  */}
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary dark:text-white">
              All about Programming World.
            </h5>

            <p className="mb-3 font-normal text-bgColor dark:text-gray-400 text-justify">
              Programming has become an essential part of our lives as
              technology continues to advance. From smartphones to...
            </p>
            <div className="grid grid-cols-2 justify-between mb-5">
              <span className="flex items-center gap-2 font-bold text-primary">
                <i className="fa-solid fa-file-pen"></i>
                <h5>Md Kawsar</h5>
              </span>
              <span className="flex items-center gap-2 font-bold text-primary">
                <i className="fa-solid fa-clock"></i>
                <DateCalculator inputDate={"2023-01-15"} />
              </span>
            </div>
            <a
              href="https://www.linkedin.com/posts/mdkawsar1403_programming-activity-7029446324567609345-_uxz?utm_source=share&utm_medium=member_desktop"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-secondary rounded-lg hover:hover:bg-gradient-to-r from-secondary to-thirdColor hover:text-bgColor focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* second blog  */}
        <div
          data-aos="flip-up"
          className="max-w-xs borde rounded-lg bg-gradient-to-r from-FourtColor to-thirdColor shadow-lg dark:bg-gray-800 dark:border-gray-700"
        >
          {/* second blog image wrapper */}
          <div className="relative grid justify-center">
            <img className="rounded" src={secondBlogImage} alt="" />
          </div>

          <div className="p-5">
            <a href="https://www.linkedin.com/posts/mdkawsar1403_new-features-in-ecmascript-2023-ecmascript-activity-7090645677193494528-O7dN?utm_source=share&utm_medium=member_desktop">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary dark:text-white">
                New features in ECMAScript
              </h5>
            </a>
            <p className="mb-3 font-normal text-bgColor dark:text-gray-400 text-justify">
              ECMAScript 2023, due in June, will include several new features,
              including: Methods for searching and...
            </p>
            <div className="grid grid-cols-2 justify-between mb-5">
              <span className="flex items-center gap-2 font-bold text-primary">
                <i className="fa-solid fa-file-pen"></i>
                <h5>Md Kawsar</h5>
              </span>
              <span className="flex items-center gap-2 font-bold text-primary">
                <i className="fa-solid fa-clock"></i>
                <DateCalculator inputDate={"2023-07-28"} />
              </span>
            </div>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-secondary rounded-lg hover:hover:bg-gradient-to-r from-secondary to-thirdColor hover:text-bgColor focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* third blog  */}
        <div
          data-aos="flip-right"
          className="max-w-xs borde rounded-lg bg-gradient-to-r from-FourtColor to-thirdColor shadow-lg dark:bg-gray-800 dark:border-gray-700"
        >
          {/* third blog image wrapper */}
          <div className="relative grid justify-center">
            <img className="rounded" src={blogImage} alt="" />
          </div>
          {/* third blog content  */}
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary dark:text-white">
              Magic of Web Development
            </h5>

            <p className="mb-3 font-normal text-bgColor dark:text-gray-400 text-justify">
              In today's digitally driven era, web development plays a pivotal
              role in shaping our online experiences...
            </p>
            <div className="grid grid-cols-2 justify-between mb-5">
              <span className="flex items-center gap-2 font-bold text-primary">
                <i className="fa-solid fa-file-pen"></i>
                <h5>Md Kawsar</h5>
              </span>
              <span className="flex items-center gap-2 font-bold text-primary">
                <i className="fa-solid fa-clock"></i>
                <DateCalculator inputDate={"2023-07-28"} />
              </span>
            </div>
            <a
              href="https://www.linkedin.com/posts/mdkawsar1403_webdevelopment-technology-innovation-activity-7090654217022935040-GZHN?utm_source=share&utm_medium=member_desktop"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-secondary rounded-lg hover:bg-gradient-to-r from-secondary to-thirdColor hover:text-bgColor focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyBlog;

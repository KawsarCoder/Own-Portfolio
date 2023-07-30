import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="max-w-[1140px]">
      <div className="fixed bg-white md:max-w-[70px] bottom-0 md:bottom-auto z-50 w-full md:h-0 h-16 max-w-sm md:-translate-x-1/2 md:top-1/4 md:rounded-full md:left-14 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full md:max-w-lg grid-cols-7 md:grid-cols-1 mx-auto">
          <Link
            to={"/"}
            data-tooltip-target="tooltip-home"
            className="grid justify-items-center w-14 mb-1 p-1 hover:text-bgColor mx-auto hover:bg-gradient-to-r text-gray-500 font-medium rounded-2xl focus-text-white focus:bg-gradient-to-r from-FourtColor to-green-400 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
          >
            <i className="fa-solid fa-house -mb-1 text-lg"></i>
            <span className="hidden md:block">Home</span>
          </Link>

          <Link
            to={"about"}
            data-tooltip-target="tooltip-about"
            className="grid justify-items-center w-14 mb-1 p-1 hover:text-bgColor mx-auto hover:bg-gradient-to-r text-gray-500 font-medium rounded-2xl focus-text-white focus:bg-gradient-to-r from-FourtColor to-green-400 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
          >
            <i className="fa-solid fa-user text-lg -mb-1 "></i>
            <span className="hidden md:block">About</span>
          </Link>

          <Link
            to={"skills"}
            data-tooltip-target="tooltip-about"
            className="grid justify-items-center w-14 mb-1 p-1 hover:text-bgColor mx-auto hover:bg-gradient-to-r text-gray-500 font-medium rounded-2xl focus-text-white focus:bg-gradient-to-r from-FourtColor to-green-400 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
          >
            <i className="fa-solid fa-laptop-code text-lg"></i>
            <span className="hidden md:block">Skill</span>
          </Link>

          <Link
            to={"services"}
            data-tooltip-target="tooltip-services"
            className="grid justify-items-center w-14 mb-1 p-1 hover:text-bgColor mx-auto hover:bg-gradient-to-r text-gray-500 font-medium rounded-2xl focus-text-white focus:bg-gradient-to-r from-FourtColor to-green-400 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
          >
            <i className="fa-solid fa-book-open-reader text-lg -mb-1"></i>
            <span className="hidden md:block">Service</span>
          </Link>

          <Link
            to={"Projects"}
            data-tooltip-target="tooltip-project"
            className="grid justify-items-center w-14 mb-1 p-1 hover:text-bgColor mx-auto hover:bg-gradient-to-r text-gray-500 font-medium rounded-2xl focus-text-white focus:bg-gradient-to-r from-FourtColor to-green-400 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
          >
            <i className="fa-solid fa-file-circle-check text-lg -mb-1"></i>
            <span className="hidden md:block">Project</span>
          </Link>
          <Link
            to={"blogs"}
            data-tooltip-target="tooltip-blog"
            className="grid justify-items-center w-14 mb-1 p-1 hover:text-bgColor mx-auto hover:bg-gradient-to-r text-gray-500 font-medium rounded-2xl focus-text-white focus:bg-gradient-to-r from-FourtColor to-green-400 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
          >
            <i className="fa-brands fa-blogger-b text-xl -mb-1"></i>
            <span className="hidden md:block">Blog</span>
          </Link>
          <Link
            to={"contact"}
            data-tooltip-target="tooltip-Contact"
            className="grid justify-items-center w-14 mb-1 p-1 hover:text-bgColor mx-auto hover:bg-gradient-to-r text-gray-500 font-medium rounded-2xl focus-text-white focus:bg-gradient-to-r from-FourtColor to-green-400 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
          >
            <i className="fa-solid fa-phone-volume text-lg -mb-1"></i>
            <span className="hidden md:block">Contact</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

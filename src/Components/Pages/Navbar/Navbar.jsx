import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isHomePage = location === "/";
  const isBlogsPage = location === "/blogs";
  return (
    // <section className="max-w-[1140px]">
    //   <div className="fixed bg-white md:max-w-[70px] bottom-0 md:bottom-auto z-50 w-full md:h-0 h-16 max-w-sm md:-translate-x-1/2 md:top-1/4 md:rounded-full md:left-14 dark:bg-gray-700 dark:border-gray-600">
    //     <div className="grid h-full md:max-w-lg grid-cols-7 md:grid-cols-1 mx-auto">
    //       <Link
    //         to={"/"}
    //         data-tooltip-target="tooltip-home"
    //         className="grid justify-items-center w-14 mb-1 p-1 hover:text-bgColor mx-auto hover:bg-gradient-to-r text-gray-500 font-medium rounded-2xl focus-text-white focus:bg-gradient-to-r from-FourtColor to-green-400 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
    //       >
    //         <i className="fa-solid fa-house -mb-1 text-lg"></i>
    //         <span className="hidden md:block">Home</span>
    //       </Link>

    //       <Link
    //         to={"about"}
    //         data-tooltip-target="tooltip-about"
    //         className="grid justify-items-center w-14 mb-1 p-1 hover:text-bgColor mx-auto hover:bg-gradient-to-r text-gray-500 font-medium rounded-2xl focus-text-white focus:bg-gradient-to-r from-FourtColor to-green-400 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
    //       >
    //         <i className="fa-solid fa-user text-lg -mb-1 "></i>
    //         <span className="hidden md:block">About</span>
    //       </Link>

    //       <Link
    //         to={"skills"}
    //         data-tooltip-target="tooltip-about"
    //         className="grid justify-items-center w-14 mb-1 p-1 hover:text-bgColor mx-auto hover:bg-gradient-to-r text-gray-500 font-medium rounded-2xl focus-text-white focus:bg-gradient-to-r from-FourtColor to-green-400 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
    //       >
    //         <i className="fa-solid fa-laptop-code text-lg"></i>
    //         <span className="hidden md:block">Skill</span>
    //       </Link>

    //       <Link
    //         to={"services"}
    //         data-tooltip-target="tooltip-services"
    //         className="grid justify-items-center w-14 mb-1 p-1 hover:text-bgColor mx-auto hover:bg-gradient-to-r text-gray-500 font-medium rounded-2xl focus-text-white focus:bg-gradient-to-r from-FourtColor to-green-400 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
    //       >
    //         <i className="fa-solid fa-book-open-reader text-lg -mb-1"></i>
    //         <span className="hidden md:block">Service</span>
    //       </Link>

    //       <Link
    //         to={"Projects"}
    //         data-tooltip-target="tooltip-project"
    //         className="grid justify-items-center w-14 mb-1 p-1 hover:text-bgColor mx-auto hover:bg-gradient-to-r text-gray-500 font-medium rounded-2xl focus-text-white focus:bg-gradient-to-r from-FourtColor to-green-400 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
    //       >
    //         <i className="fa-solid fa-file-circle-check text-lg -mb-1"></i>
    //         <span className="hidden md:block">Project</span>
    //       </Link>
    //       <Link
    //         to={"blogs"}
    //         data-tooltip-target="tooltip-blog"
    //         className="grid justify-items-center w-14 mb-1 p-1 hover:text-bgColor mx-auto hover:bg-gradient-to-r text-gray-500 font-medium rounded-2xl focus-text-white focus:bg-gradient-to-r from-FourtColor to-green-400 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
    //       >
    //         <i className="fa-brands fa-blogger-b text-xl -mb-1"></i>
    //         <span className="hidden md:block">Blog</span>
    //       </Link>
    //       <Link
    //         to={"contact"}
    //         data-tooltip-target="tooltip-Contact"
    //         className="grid justify-items-center w-14 mb-1 p-1 hover:text-bgColor mx-auto hover:bg-gradient-to-r text-gray-500 font-medium rounded-2xl focus-text-white focus:bg-gradient-to-r from-FourtColor to-green-400 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
    //       >
    //         <i className="fa-solid fa-phone-volume text-lg -mb-1"></i>
    //         <span className="hidden md:block">Contact</span>
    //       </Link>
    //     </div>
    //   </div>
    // </section>
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#200633] bg-opacity-95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex-shrink-0 cursor-pointer">
              <Link href="/">
                <span className="font-['Space_Grotesk'] text-2xl font-bold text-white">
                  <span className="text-[#9909CD]">Md.</span> Kawsar
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1 ease-linear">
              {isHomePage ? (
                <>
                  {["home", "about", "skills", "projects", "contact"].map(
                    (section) => (
                      <motion.button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className={`px-4 py-2 rounded-full font-['Space_Grotesk'] font-medium transition-all ${
                          activeSection === section
                            ? "text-white bg-[#9909CD]/20 border border-[#9909CD]/40"
                            : "text-gray-300 hover:text-white hover:bg-[#9909CD]/10"
                        }`}
                        whileHover={{ y: -2 }}
                        whileTap={{ y: 0 }}
                      >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </motion.button>
                    )
                  )}
                  <motion.a
                    href="/blogs"
                    className="px-4 py-2 rounded-full font-['Space_Grotesk'] text-white font-medium bg-[#9909CD] hover:bg-[#8008af] shadow-md shadow-[#9909CD]/20 transition-all cursor-pointer"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    All Blogs
                  </motion.a>
                </>
              ) : isBlogsPage ? (
                <Link href="/">
                  <button className="text-white bg-[#200633] hover:bg-[#9909CD]/20 flex items-center gap-2 px-4 py-2 rounded-full border border-[#9909CD]/30 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                    Back to Home
                  </button>
                </Link>
              ) : (
                <Link href="/">
                  <motion.div
                    className={`px-4 py-2 rounded-full font-['Space_Grotesk'] font-medium transition-all ${
                      activeSection
                        ? "text-white bg-[#9909CD]/20 border border-[#9909CD]/40"
                        : "text-gray-300 hover:text-white hover:bg-[#9909CD]/10"
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    Back to Home
                  </motion.div>
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-[#9909CD] transition-colors p-2"
              aria-label="Open mobile menu"
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className="md:hidden overflow-hidden"
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#200633] shadow-lg">
          {isHomePage ? (
            <>
              {["home", "about", "skills", "projects", "contact"].map(
                (section) => (
                  <motion.button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`w-full text-left block px-4 py-3 rounded-lg font-['Space_Grotesk'] font-medium ${
                      activeSection === section
                        ? "text-[#9909CD] bg-[#9909CD]/10"
                        : "text-gray-300"
                    }`}
                    whileTap={{ x: 5 }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </motion.button>
                )
              )}
            </>
          ) : isBlogsPage ? (
            <Link href="/">
              <button className="text-white bg-[#200633] hover:bg-[#9909CD]/20 flex items-center gap-2 px-4 py-2 rounded-full border border-[#9909CD]/30 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
                Back to Home
              </button>
            </Link>
          ) : (
            <Link href="/">
              <motion.div
                className="w-full text-left block px-4 py-3 rounded-lg font-['Space_Grotesk'] text-white font-medium bg-[#9909CD]/20 cursor-pointer"
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Back to Home
              </motion.div>
            </Link>
          )}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

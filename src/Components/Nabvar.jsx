import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
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

  return (
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
                  Kawsar<span className="text-[#9909CD]">.dev</span>
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
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
                </>
              ) : (
                <Link href="/">
                  <motion.div
                    className="px-4 py-2 rounded-full font-['Space_Grotesk'] text-white font-medium hover:bg-[#9909CD]/20 transition-all cursor-pointer"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    Back to Home
                  </motion.div>
                </Link>
              )}

              {isHomePage && (
                <Link href="/projects">
                  <motion.div
                    className="px-4 py-2 rounded-full font-['Space_Grotesk'] text-white font-medium bg-[#9909CD] hover:bg-[#8008af] shadow-md shadow-[#9909CD]/20 transition-all cursor-pointer"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    All Projects
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

              <Link href="/projects">
                <motion.div
                  className="w-full text-left block px-4 py-3 mt-2 rounded-lg font-['Space_Grotesk'] text-white font-medium bg-[#9909CD] hover:bg-[#8008af] cursor-pointer"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  All Projects
                </motion.div>
              </Link>
            </>
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

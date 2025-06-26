import { useState, useEffect, useRef } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ services = [], industries = [] }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const handleMenuEnter = (dropdown) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(dropdown);
  };

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // استبدال المصفوفة الثابتة بالبيانات من homeData.json
  // const services = homeData.services.services.map(service => service.title);

  // const industries = [
  //   "Manufacturing",
  //   "Retail",
  //   "Professional Services",
  //   "Healthcare",
  //   "Education",
  // ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/40 backdrop-blur-md shadow-sm border-b border-blue-100"
          : "bg-white"
      }`}
    >
      {/* Accent top border - changed to blue gradient */}
      <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo - changed to blue gradient */}
          <a href="/" className="flex items-center">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1.5 rounded-md mr-2 text-lg font-bold">
              B
            </span>
            <span
              className={`text-xl font-semibold text-blue-900 transition-all duration-300 ${
                scrolled ? "opacity-0 w-0" : "opacity-100"
              }`}
            >
              ELLATRIX
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Services Dropdown - Full Width */}
            <div className="relative" onMouseEnter={() => handleMenuEnter("services")} onMouseLeave={handleMenuLeave}>
              <button
                className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  openDropdown === "services"
                    ? "text-blue-700 bg-blue-50"
                    : "text-blue-600 hover:text-blue-900 hover:bg-blue-50"
                }`}
              >
                <span>Services</span>
                <ChevronDownIcon
                  className={`ml-2 h-4 w-4 transition-transform ${
                    openDropdown === "services"
                      ? "rotate-180 text-blue-600"
                      : "text-blue-400"
                  }`}
                />
              </button>

              <AnimatePresence>
                {openDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="fixed left-0 right-0 w-full shadow-2xl py-6 px-8 mt-6 z-50 flex justify-center backdrop-blur-sm bg-white/95 border-t border-b border-blue-200 overflow-hidden"
                    onMouseEnter={() => handleMenuEnter("services")}
                    onMouseLeave={handleMenuLeave}
                    style={{ minHeight: '200px' }}
                  >
                    <div className="container mx-auto max-w-4xl">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                          <div key={service.title || index} className="group">
                            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                                <div className="w-5 h-5 bg-blue-600 rounded"></div>
                              </div>
                              <div>
                                <h4 className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                  {service.title || `Service ${index + 1}`}
                                </h4>
                                <p className="text-sm text-blue-600 mt-1">
                                  {service.description || "Professional service solution"}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown - Full Width */}
            <div className="relative" onMouseEnter={() => handleMenuEnter("industries")} onMouseLeave={handleMenuLeave}>
              <button
                className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  openDropdown === "industries"
                    ? "text-blue-700 bg-blue-50"
                    : "text-blue-600 hover:text-blue-900 hover:bg-blue-50"
                }`}
              >
                <span>Industries</span>
                <ChevronDownIcon
                  className={`ml-2 h-4 w-4 transition-transform ${
                    openDropdown === "industries"
                      ? "rotate-180 text-blue-600"
                      : "text-blue-400"
                  }`}
                />
              </button>

              <AnimatePresence>
                {openDropdown === "industries" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="fixed left-0 right-0 w-full shadow-2xl py-4 px-6 mt-6 z-50 backdrop-blur-sm bg-white/95 border-t border-b border-blue-200"
                    onMouseEnter={() => handleMenuEnter("industries")}
                    onMouseLeave={handleMenuLeave}
                  >
                    <div className="container mx-auto flex justify-center">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
                        {industries.map((item, index) => (
                          <div key={item.label || index} className="group">
                            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                                <div className="w-5 h-5 bg-blue-600 rounded"></div>
                              </div>
                              <div>
                                <h4 className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                  {item.label || `Industry ${index + 1}`}
                                </h4>
                                <p className="text-sm text-blue-600 mt-1">
                                  {item.description || "Industry-specific solutions"}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#"
              className="px-4 py-2.5 text-sm font-medium text-blue-600 hover:text-blue-900 rounded-lg hover:bg-blue-50 transition-colors"
            >
              About
            </a>

            {/* Contact button - changed to blue gradient */}
            <a
              href="#"
              className="ml-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:shadow-md transition-all hover:from-blue-700 hover:to-indigo-700"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-700 hover:text-blue-900 hover:bg-blue-100 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - changed to blue */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-2 pt-2 pb-4 space-y-1">
            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown("mobileServices")}
                className="w-full flex justify-between items-center px-3 py-3 text-base font-medium text-blue-700 rounded-lg hover:bg-blue-50"
              >
                <span>Services</span>
                <ChevronDownIcon
                  className={`h-5 w-5 transition-transform ${
                    openDropdown === "mobileServices" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "mobileServices" && (
                <div className="pl-4">
                  {services.slice(0, 3).map((item, index) => (
                    <a
                      key={item.title || index}
                      href="#"
                      className="block px-3 py-2.5 text-sm text-blue-600 rounded-lg hover:bg-blue-50 hover:text-blue-700"
                    >
                      {item.title || `Service ${index + 1}`}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Industries Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown("mobileIndustries")}
                className="w-full flex justify-between items-center px-3 py-3 text-base font-medium text-blue-700 rounded-lg hover:bg-blue-50"
              >
                <span>Industries</span>
                <ChevronDownIcon
                  className={`h-5 w-5 transition-transform ${
                    openDropdown === "mobileIndustries" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "mobileIndustries" && (
                <div className="pl-4">
                  {industries.slice(0, 3).map((item, index) => (
                    <a
                      key={item.label || index}
                      href="#"
                      className="block px-3 py-2.5 text-sm text-blue-600 rounded-lg hover:bg-blue-50 hover:text-blue-700"
                    >
                      {item.label || `Industry ${index + 1}`}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#"
              className="block px-3 py-3 text-base font-medium text-blue-700 rounded-lg hover:bg-blue-50"
            >
              About
            </a>

            {/* Mobile Contact button - changed to blue gradient */}
            <a
              href="#"
              className="block w-full px-4 py-3 mt-2 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700"
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

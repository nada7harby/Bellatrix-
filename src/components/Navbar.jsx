import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

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

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const services = [
    "NetSuite Implementation",
    "Custom Development",
    "System Integration",
    "Cloud Migration",
    "Data Analytics",
  ];

  const industries = [
    "Manufacturing",
    "Retail",
    "Professional Services",
    "Healthcare",
    "Education",
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-sm shadow-sm border-b border-gray-100"
          : "bg-white"
      }`}
    >
      {/* Accent top border */}
      <div className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-3 py-1.5 rounded-md mr-2 text-lg font-bold">
              B
            </span>
            <span
              className={`text-xl font-semibold text-gray-800 transition-all duration-300 ${
                scrolled ? "opacity-0 w-0" : "opacity-100"
              }`}
            >
              ELLATRIX
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("services")}
                className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  openDropdown === "services"
                    ? "text-teal-700 bg-teal-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <span>Services</span>
                <ChevronDownIcon
                  className={`ml-2 h-4 w-4 transition-transform ${
                    openDropdown === "services" ? "rotate-180 text-teal-600" : "text-gray-400"
                  }`}
                />
              </button>

              {openDropdown === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 z-50"
                >
                  <div className="py-1.5">
                    {services.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("industries")}
                className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  openDropdown === "industries"
                    ? "text-teal-700 bg-teal-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <span>Industries</span>
                <ChevronDownIcon
                  className={`ml-2 h-4 w-4 transition-transform ${
                    openDropdown === "industries" ? "rotate-180 text-teal-600" : "text-gray-400"
                  }`}
                />
              </button>

              {openDropdown === "industries" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 z-50"
                >
                  <div className="py-1.5">
                    {industries.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            <a
              href="#"
              className="px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
            >
              About
            </a>

            <a
              href="#"
              className="ml-2 px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-medium rounded-lg hover:shadow-md transition-all hover:from-emerald-700 hover:to-teal-700"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
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

      {/* Mobile menu */}
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
                className="w-full flex justify-between items-center px-3 py-3 text-base font-medium text-gray-700 rounded-lg hover:bg-gray-50"
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
                  {services.slice(0, 3).map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-3 py-2.5 text-sm text-gray-600 rounded-lg hover:bg-teal-50 hover:text-teal-700"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Industries Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown("mobileIndustries")}
                className="w-full flex justify-between items-center px-3 py-3 text-base font-medium text-gray-700 rounded-lg hover:bg-gray-50"
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
                  {industries.slice(0, 3).map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-3 py-2.5 text-sm text-gray-600 rounded-lg hover:bg-teal-50 hover:text-teal-700"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#"
              className="block px-3 py-3 text-base font-medium text-gray-700 rounded-lg hover:bg-gray-50"
            >
              About
            </a>

            <a
              href="#"
              className="block w-full px-4 py-3 mt-2 text-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium rounded-lg hover:from-emerald-700 hover:to-teal-700"
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
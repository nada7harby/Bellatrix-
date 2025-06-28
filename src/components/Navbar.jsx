import { useState, useEffect, useRef } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ services = [], industries = [] }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef(null);
  const subTimeoutRef = useRef(null);

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
      setOpenSubDropdown(null);
    }, 200);
  };

  const handleSubMenuEnter = (subDropdown) => {
    if (subTimeoutRef.current) {
      clearTimeout(subTimeoutRef.current);
    }
    setOpenSubDropdown(subDropdown);
  };

  const handleSubMenuLeave = () => {
    subTimeoutRef.current = setTimeout(() => {
      setOpenSubDropdown(null);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (subTimeoutRef.current) {
        clearTimeout(subTimeoutRef.current);
      }
    };
  }, []);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    setOpenSubDropdown(null);
  };

  // Services data with subcategories
  const servicesData = {
    "NetSuite Services": [
      "Implementation",
      "Customization", 
      "Integration",
      "Migration",
      "Support & Maintenance"
    ],
    "Consulting Services": [
      "Business Process Analysis",
      "System Architecture",
      "Change Management",
      "ROI Assessment"
    ],
    "Training Services": [
      "User Training",
      "Administrator Training",
      "Custom Training Programs",
      "Certification Programs"
    ]
  };

  // Industries data with subcategories
  const industriesData = {
    "Manufacturing": [
      "Automotive",
      "Electronics",
      "Pharmaceuticals",
      "Food & Beverage",
      "Aerospace"
    ],
    "Retail & E-commerce": [
      "Fashion & Apparel",
      "Consumer Electronics",
      "Home & Garden",
      "Sports & Recreation"
    ],
    "Professional Services": [
      "Consulting",
      "Legal Services",
      "Accounting",
      "Marketing Agencies"
    ],
    "Healthcare": [
      "Hospitals",
      "Clinics",
      "Medical Devices",
      "Pharmaceuticals"
    ]
  };

  // Solutions data with subcategories
  const solutionsData = {
    "ERP Solutions": [
      "Financial Management",
      "Supply Chain Management",
      "Inventory Management",
      "Project Management"
    ],
    "CRM Solutions": [
      "Sales Automation",
      "Customer Service",
      "Marketing Automation",
      "Lead Management"
    ],
    "E-commerce Solutions": [
      "Online Store Setup",
      "Payment Integration",
      "Inventory Sync",
      "Multi-channel Selling"
    ],
    "Business Intelligence": [
      "Real-time Dashboards",
      "Custom Reports",
      "Data Analytics",
      "KPI Tracking"
    ]
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100"
          : "bg-white shadow-sm"
      }`}
    >
      {/* Accent top border */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <div className="relative">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg mr-3 text-xl font-bold shadow-lg group-hover:shadow-xl transition-all duration-300">
                B
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <span
              className={`text-2xl font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent transition-all duration-300 ${
                scrolled ? "opacity-0 w-0" : "opacity-100"
              }`}
            >
              ELLATRIX
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Home */}
            <a
              href="/"
              className="px-4 py-2.5 text-sm font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-all duration-300"
            >
              Home
            </a>

            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => handleMenuEnter("services")} onMouseLeave={handleMenuLeave}>
              <button
                className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                  openDropdown === "services"
                    ? "text-blue-700 bg-blue-50"
                    : "text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                }`}
              >
                <span>Services</span>
                <ChevronDownIcon
                  className={`ml-2 h-4 w-4 transition-transform duration-300 ${
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
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-blue-100 overflow-hidden z-50"
                    onMouseEnter={() => handleMenuEnter("services")}
                    onMouseLeave={handleMenuLeave}
                  >
                    <div className="p-2">
                      {Object.entries(servicesData).map(([category, items]) => (
                        <div
                          key={category}
                          className="relative"
                          onMouseEnter={() => handleSubMenuEnter(category)}
                          onMouseLeave={handleSubMenuLeave}
                        >
                          <div className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 transition-colors duration-300 cursor-pointer group">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                                <div className="w-3 h-3 bg-blue-600 rounded"></div>
                              </div>
                              <span className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                {category}
                              </span>
                            </div>
                            <ChevronRightIcon className="w-4 h-4 text-blue-400 group-hover:text-blue-600 transition-colors duration-300" />
                          </div>

                          {/* Sub Dropdown */}
                          <AnimatePresence>
                            {openSubDropdown === category && (
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-0 left-full ml-2 w-64 bg-white rounded-xl shadow-2xl border border-blue-100 overflow-hidden"
                                onMouseEnter={() => handleSubMenuEnter(category)}
                                onMouseLeave={handleSubMenuLeave}
                              >
                                <div className="p-2">
                                  <div className="px-3 py-2 border-b border-blue-100 mb-2">
                                    <h4 className="font-bold text-blue-800 text-sm">{category}</h4>
                                  </div>
                                  {items.map((item, index) => (
                                    <a
                                      key={index}
                                      href="#"
                                      className="block px-3 py-2 text-sm text-blue-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-colors duration-300"
                                    >
                                      {item}
                                    </a>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown */}
            <div className="relative" onMouseEnter={() => handleMenuEnter("industries")} onMouseLeave={handleMenuLeave}>
              <button
                className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                  openDropdown === "industries"
                    ? "text-blue-700 bg-blue-50"
                    : "text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                }`}
              >
                <span>Industries</span>
                <ChevronDownIcon
                  className={`ml-2 h-4 w-4 transition-transform duration-300 ${
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
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-blue-100 overflow-hidden z-50"
                    onMouseEnter={() => handleMenuEnter("industries")}
                    onMouseLeave={handleMenuLeave}
                  >
                    <div className="p-2">
                      {Object.entries(industriesData).map(([category, items]) => (
                        <div
                          key={category}
                          className="relative"
                          onMouseEnter={() => handleSubMenuEnter(category)}
                          onMouseLeave={handleSubMenuLeave}
                        >
                          <div className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 transition-colors duration-300 cursor-pointer group">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                                <div className="w-3 h-3 bg-blue-600 rounded"></div>
                              </div>
                              <span className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                {category}
                              </span>
                            </div>
                            <ChevronRightIcon className="w-4 h-4 text-blue-400 group-hover:text-blue-600 transition-colors duration-300" />
                          </div>

                          {/* Sub Dropdown */}
                          <AnimatePresence>
                            {openSubDropdown === category && (
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-0 left-full ml-2 w-64 bg-white rounded-xl shadow-2xl border border-blue-100 overflow-hidden"
                                onMouseEnter={() => handleSubMenuEnter(category)}
                                onMouseLeave={handleSubMenuLeave}
                              >
                                <div className="p-2">
                                  <div className="px-3 py-2 border-b border-blue-100 mb-2">
                                    <h4 className="font-bold text-blue-800 text-sm">{category}</h4>
                                  </div>
                                  {items.map((item, index) => (
                                    <a
                                      key={index}
                                      href="#"
                                      className="block px-3 py-2 text-sm text-blue-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-colors duration-300"
                                    >
                                      {item}
                                    </a>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative" onMouseEnter={() => handleMenuEnter("solutions")} onMouseLeave={handleMenuLeave}>
              <button
                className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                  openDropdown === "solutions"
                    ? "text-blue-700 bg-blue-50"
                    : "text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                }`}
              >
                <span>Solutions</span>
                <ChevronDownIcon
                  className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                    openDropdown === "solutions"
                      ? "rotate-180 text-blue-600"
                      : "text-blue-400"
                  }`}
                />
              </button>

              <AnimatePresence>
                {openDropdown === "solutions" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-blue-100 overflow-hidden z-50"
                    onMouseEnter={() => handleMenuEnter("solutions")}
                    onMouseLeave={handleMenuLeave}
                  >
                    <div className="p-2">
                      {Object.entries(solutionsData).map(([category, items]) => (
                        <div
                          key={category}
                          className="relative"
                          onMouseEnter={() => handleSubMenuEnter(category)}
                          onMouseLeave={handleSubMenuLeave}
                        >
                          <div className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 transition-colors duration-300 cursor-pointer group">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                                <div className="w-3 h-3 bg-blue-600 rounded"></div>
                              </div>
                              <span className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                                {category}
                              </span>
                            </div>
                            <ChevronRightIcon className="w-4 h-4 text-blue-400 group-hover:text-blue-600 transition-colors duration-300" />
                          </div>

                          {/* Sub Dropdown */}
                          <AnimatePresence>
                            {openSubDropdown === category && (
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-0 left-full ml-2 w-64 bg-white rounded-xl shadow-2xl border border-blue-100 overflow-hidden"
                                onMouseEnter={() => handleSubMenuEnter(category)}
                                onMouseLeave={handleSubMenuLeave}
                              >
                                <div className="p-2">
                                  <div className="px-3 py-2 border-b border-blue-100 mb-2">
                                    <h4 className="font-bold text-blue-800 text-sm">{category}</h4>
                                  </div>
                                  {items.map((item, index) => (
                                    <a
                                      key={index}
                                      href="#"
                                      className="block px-3 py-2 text-sm text-blue-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-colors duration-300"
                                    >
                                      {item}
                                    </a>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About */}
            <a
              href="#about"
              className="px-4 py-2.5 text-sm font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-all duration-300"
            >
              About
            </a>

            {/* Contact button */}
            <a
              href="#contact"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-700 hover:text-blue-900 hover:bg-blue-100 focus:outline-none transition-colors duration-300"
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
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-lg border-t border-blue-100"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              <a
                href="/"
                className="block px-3 py-3 text-base font-medium text-blue-700 rounded-lg hover:bg-blue-50 transition-colors duration-300"
              >
                Home
              </a>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("mobileServices")}
                  className="w-full flex justify-between items-center px-3 py-3 text-base font-medium text-blue-700 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                >
                  <span>Services</span>
                  <ChevronDownIcon
                    className={`h-5 w-5 transition-transform duration-300 ${
                      openDropdown === "mobileServices" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openDropdown === "mobileServices" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 mt-2 space-y-1"
                    >
                      {Object.keys(servicesData).map((category) => (
                        <a
                          key={category}
                          href="#"
                          className="block px-3 py-2 text-sm text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                        >
                          {category}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Industries Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("mobileIndustries")}
                  className="w-full flex justify-between items-center px-3 py-3 text-base font-medium text-blue-700 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                >
                  <span>Industries</span>
                  <ChevronDownIcon
                    className={`h-5 w-5 transition-transform duration-300 ${
                      openDropdown === "mobileIndustries" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openDropdown === "mobileIndustries" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 mt-2 space-y-1"
                    >
                      {Object.keys(industriesData).map((category) => (
                        <a
                          key={category}
                          href="#"
                          className="block px-3 py-2 text-sm text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                        >
                          {category}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Solutions Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("mobileSolutions")}
                  className="w-full flex justify-between items-center px-3 py-3 text-base font-medium text-blue-700 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                >
                  <span>Solutions</span>
                  <ChevronDownIcon
                    className={`h-5 w-5 transition-transform duration-300 ${
                      openDropdown === "mobileSolutions" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openDropdown === "mobileSolutions" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 mt-2 space-y-1"
                    >
                      {Object.keys(solutionsData).map((category) => (
                        <a
                          key={category}
                          href="#"
                          className="block px-3 py-2 text-sm text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                        >
                          {category}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="#about"
                className="block px-3 py-3 text-base font-medium text-blue-700 rounded-lg hover:bg-blue-50 transition-colors duration-300"
              >
                About
              </a>

              {/* Mobile Contact button */}
              <a
                href="#contact"
                className="block w-full px-4 py-3 mt-4 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
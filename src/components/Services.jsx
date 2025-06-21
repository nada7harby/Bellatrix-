import { useState, useEffect } from "react";
import {
  LightbulbOutlined,
  BuildOutlined,
  SchoolOutlined,
  SettingsOutlined,
  LinkOutlined,
  ArrowRightAlt,
  Close,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const services = [
    {
      title: "Strategic Consultation",
      description:
        "Expert analysis to optimize your NetSuite roadmap with actionable insights",
      icon: <LightbulbOutlined fontSize="large" />,
      color: "#10B981",
      details: [
        "Business process analysis",
        "ROI forecasting",
        "System architecture planning",
        "Change management strategy",
      ],
      stats: "92% client satisfaction rate",
    },
    {
      title: "Flawless Implementation",
      description:
        "End-to-end deployment with minimal disruption to operations",
      icon: <BuildOutlined fontSize="large" />,
      color: "#0EA5E9",
      details: [
        "Phased rollout planning",
        "Data migration services",
        "Configuration best practices",
        "Go-live support",
      ],
      stats: "40% faster than industry average",
    },
    {
      title: "Adaptive Training",
      description: "Customized learning paths for all user levels and roles",
      icon: <SchoolOutlined fontSize="large" />,
      color: "#8B5CF6",
      details: [
        "Role-based training programs",
        "Interactive e-learning modules",
        "Custom documentation",
        "Ongoing certification",
      ],
      stats: "85% faster user adoption",
    },
    {
      title: "Tailored Customization",
      description: "Bespoke solutions addressing your unique business needs",
      icon: <SettingsOutlined fontSize="large" />,
      color: "#EC4899",
      details: [
        "Workflow automation",
        "Custom dashboards",
        "Advanced reporting",
        "Third-party integrations",
      ],
      stats: "300+ custom solutions delivered",
    },
    {
      title: "Seamless Integration",
      description: "Unified ecosystem connecting NetSuite with your tech stack",
      icon: <LinkOutlined fontSize="large" />,
      color: "#F59E0B",
      details: [
        "API development",
        "Middleware configuration",
        "Data synchronization",
        "Real-time analytics",
      ],
      stats: "99.9% integration uptime",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full blur-3xl"
            style={{
              backgroundColor: service.color,
              width: "400px",
              height: "400px",
              left: `${15 + index * 15}%`,
              top: `${Math.random() * 60}%`,
              opacity: 0.15,
            }}
            animate={{
              y: [0, 30, 0],
              transition: {
                duration: 10 + index * 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Professional Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={!isMobile ? { y: -10 } : {}}
              onHoverStart={() => !isMobile && setHoveredService(index)}
              onHoverEnd={() => !isMobile && setHoveredService(null)}
              onClick={() =>
                isMobile &&
                setSelectedService(selectedService === index ? null : index)
              }
              className="cursor-pointer"
            >
              <div
                className={`h-full p-8 rounded-2xl transition-all duration-300 ${
                  hoveredService === index ? "shadow-xl" : "shadow-md"
                } ${selectedService === index ? "ring-2 ring-offset-2" : ""}`}
                style={{
                  backgroundColor: "white",
                  borderTop: `4px solid ${service.color}`,
                  transform:
                    hoveredService === index ? "translateY(-10px)" : "",
                  boxShadow:
                    hoveredService === index
                      ? `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px ${service.color}20`
                      : "",
                }}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center`}
                    style={{
                      backgroundColor: `${service.color}20`,
                      color: service.color,
                    }}
                  >
                    {service.icon}
                  </div>

                  {selectedService === index && isMobile && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(null);
                      }}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <Close />
                    </button>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                {(selectedService === index || !isMobile) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height:
                        selectedService === index || hoveredService === index
                          ? "auto"
                          : 0,
                      opacity:
                        selectedService === index || hoveredService === index
                          ? 1
                          : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-2 mb-6">
                      {service.details.map((detail, i) => (
                        <motion.li
                          key={i}
                          initial={{ x: -10, opacity: 0 }}
                          animate={{
                            x:
                              selectedService === index ||
                              hoveredService === index
                                ? 0
                                : -10,
                            opacity:
                              selectedService === index ||
                              hoveredService === index
                                ? 1
                                : 0,
                          }}
                          transition={{ delay: i * 0.05 + 0.2 }}
                          className="flex items-start"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-2.5 mr-2 flex-shrink-0"
                            style={{ backgroundColor: service.color }}
                          />
                          <span className="text-gray-700">{detail}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="text-sm font-medium text-gray-500 mb-4">
                      {service.stats}
                    </div>
                  </motion.div>
                )}

                <button
                  className={`flex items-center font-medium mt-4 ${
                    selectedService === index
                      ? "text-gray-700"
                      : "text-gray-500"
                  } hover:text-gray-900 transition-colors`}
                  style={{
                    color: selectedService === index ? service.color : "",
                  }}
                >
                  Learn more{" "}
                  <ArrowRightAlt className="ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 relative overflow-hidden group">
            <span className="relative z-10">View All Services</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </motion.div>
      </div>

      {/* Mobile detail overlay */}
      <AnimatePresence>
        {selectedService !== null && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mr-4`}
                  style={{
                    backgroundColor: `${services[selectedService].color}20`,
                    color: services[selectedService].color,
                  }}
                >
                  {services[selectedService].icon}
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <Close />
                </button>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {services[selectedService].title}
              </h3>
              <p className="text-gray-600 mb-6">
                {services[selectedService].description}
              </p>

              <h4 className="font-semibold text-gray-900 mb-3">
                Service Details:
              </h4>
              <ul className="space-y-3 mb-8">
                {services[selectedService].details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <span
                      className="w-2 h-2 rounded-full mt-2 mr-2 flex-shrink-0"
                      style={{
                        backgroundColor: services[selectedService].color,
                      }}
                    />
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>

              <div
                className="p-4 rounded-lg mb-8"
                style={{
                  backgroundColor: `${services[selectedService].color}10`,
                }}
              >
                <div
                  className="text-sm font-medium"
                  style={{ color: services[selectedService].color }}
                >
                  {services[selectedService].stats}
                </div>
              </div>

              <button className="w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium rounded-lg hover:shadow-md transition-all duration-300 flex items-center justify-center">
                Get Started <ArrowRightAlt className="ml-2" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;

import { useState, useEffect } from "react";
import {
  LightbulbOutlined,
  BuildOutlined,
  SchoolOutlined,
  SettingsOutlined,
  LinkOutlined,
  ArrowRightAlt,
} from "@mui/icons-material";

// Icon mapping for dynamic icon rendering
const iconMap = {
  LightbulbOutlined: <LightbulbOutlined fontSize="large" />,
  BuildOutlined: <BuildOutlined fontSize="large" />,
  SchoolOutlined: <SchoolOutlined fontSize="large" />,
  SettingsOutlined: <SettingsOutlined fontSize="large" />,
  LinkOutlined: <LinkOutlined fontSize="large" />,
};

// Blue color variants for different services
const blueColors = [
  '#2563eb', // Blue 600
  '#1d4ed8', // Blue 700
  '#1e40af', // Blue 800
  '#3b82f6', // Blue 500
  '#60a5fa', // Blue 400
];

const Services = ({ services = [], sectionHeader = {}, viewAllButton = {} }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Get blue color for service based on index
  const getServiceColor = (index) => {
    return blueColors[index % blueColors.length];
  };

  // Show only first 3 services initially, or all if showAllServices is true
  const displayedServices = showAllServices ? services : services.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            {sectionHeader?.title ? (
              <>
                {sectionHeader.title.split(sectionHeader.gradientText || "").map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && sectionHeader.gradientText && (
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        {sectionHeader.gradientText}
                      </span>
                    )}
                  </span>
                ))}
              </>
            ) : (
              <>
                Our {" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Professional Services
                </span>
              </>
            )}
          </h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            {sectionHeader?.subtitle || "Comprehensive solutions tailored to your business needs"}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => {
            const serviceColor = getServiceColor(index);
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-blue-100"
                style={{
                  borderTop: `4px solid ${serviceColor}`,
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                    style={{
                    backgroundColor: `${serviceColor}20`,
                    color: serviceColor,
                    }}
                  >
                    {iconMap[service.icon] || null}
                  </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-blue-700 mb-4">
                  {service.description}
                </p>

                {/* Stats */}
                <div className="text-sm font-medium text-blue-600 mb-4 p-3 bg-blue-50 rounded-lg">
                      {service.stats}
                    </div>

                {/* Learn more button */}
                <button
                  className="flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  style={{
                    color: serviceColor,
                  }}
                >
                  Learn more{" "}
                  <ArrowRightAlt className="ml-1" />
                </button>
              </div>
            );
          })}
        </div>

        {/* View all button - only show if there are more than 3 services */}
        {services.length > 3 && (
          <div className="mt-16 text-center">
            <button 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-indigo-700"
              onClick={() => setShowAllServices(!showAllServices)}
            >
              {showAllServices ? 'Show Less' : (viewAllButton?.text || 'View All Services')}
                </button>
              </div>
        )}
      </div>
    </section>
  );
};

export default Services;

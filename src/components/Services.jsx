import { 
  LightbulbOutlined, // Consultation
  BuildOutlined, // Implementation
  SchoolOutlined, // Training
  SettingsOutlined, // Customization
  LinkOutlined, // Integration
  ArrowRightAlt 
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Strategic Consultation",
      description: "Expert analysis to optimize your NetSuite roadmap with actionable insights",
      icon: <LightbulbOutlined fontSize="large" />,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Flawless Implementation",
      description: "End-to-end deployment with minimal disruption to operations",
      icon: <BuildOutlined fontSize="large" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Adaptive Training",
      description: "Customized learning paths for all user levels and roles",
      icon: <SchoolOutlined fontSize="large" />,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Tailored Customization",
      description: "Bespoke solutions addressing your unique business needs",
      icon: <SettingsOutlined fontSize="large" />,
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Seamless Integration",
      description: "Unified ecosystem connecting NetSuite with your tech stack",
      icon: <LinkOutlined fontSize="large" />,
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-purple-100 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-blue-100 opacity-20 blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Service Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial strategy to ongoing optimization - a seamless experience
          </p>
        </motion.div>

        {/* Interactive timeline */}
        <div className="relative">
          {/* Progress line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-purple-200 via-blue-200 to-cyan-200 transform -translate-x-1/2 hidden lg:block"></div>
          
          <div className="space-y-16 lg:space-y-0">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative lg:flex lg:items-center lg:justify-between lg:odd:flex-row-reverse group"
              >
                {/* Dot connector */}
                <div className={`absolute left-1/2 top-0 h-5 w-5 rounded-full bg-gradient-to-br ${service.color} transform -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block`}></div>
                
                {/* Service content */}
                <div className={`lg:w-5/12 p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 ${index % 2 === 0 ? 'border-l-blue-500' : 'border-l-purple-500'} group-hover:scale-[1.02]`}>
                  <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${service.color} text-white`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <button className="flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors">
                    Explore service <ArrowRightAlt className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Step number */}
                <div className={`hidden lg:flex items-center justify-center w-16 h-16 rounded-full ${index % 2 === 0 ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'} text-2xl font-bold mx-8`}>
                  {index + 1}
                </div>

                {/* Empty space for alignment */}
                <div className="hidden lg:block lg:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-cyan-700">
            Start Your Transformation Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
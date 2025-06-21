import { useState } from 'react';
import { Card, Typography, Button, Chip } from '@mui/material';
import { Factory, Storefront, Engineering, LocalShipping, ArrowRightAlt, CheckCircle } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const industries = [
  { 
    id: 1,
    name: 'Manufacturing', 
    icon: <Factory sx={{ fontSize: 40 }} />,
    color: '#4F46E5',
    description: 'End-to-end solutions for modern manufacturing challenges',
    solutions: [
      'Production planning & scheduling',
      'Quality control management',
      'Equipment maintenance tracking',
      'Real-time cost analytics',
      'Supply chain coordination'
    ],
    stats: '35% average efficiency improvement'
  },
  { 
    id: 2,
    name: 'Retail', 
    icon: <Storefront sx={{ fontSize: 40 }} />,
    color: '#10B981',
    description: 'Omnichannel solutions for the digital retail era',
    solutions: [
      'Unified commerce platform',
      'AI-driven inventory optimization',
      'Customer behavior analytics',
      'Seamless POS integration',
      'Loyalty program management'
    ],
    stats: '28% increase in customer retention'
  },
  { 
    id: 3,
    name: 'Professional Services', 
    icon: <Engineering sx={{ fontSize: 40 }} />,
    color: '#F59E0B',
    description: 'Efficiency tools for service-based businesses',
    solutions: [
      'Automated time tracking',
      'Project profitability analysis',
      'Resource allocation dashboards',
      'Client collaboration portals',
      'Integrated billing systems'
    ],
    stats: '40% faster project delivery'
  },
  { 
    id: 4,
    name: 'Wholesale Distribution', 
    icon: <LocalShipping sx={{ fontSize: 40 }} />,
    color: '#3B82F6',
    description: 'Next-gen distribution network optimization',
    solutions: [
      'Intelligent order management',
      'Warehouse automation systems',
      'Supplier collaboration portals',
      'Dynamic pricing engines',
      'Multi-channel fulfillment'
    ],
    stats: '45% reduction in logistics costs'
  }
];

const Industries = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[3]);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {industries.map(industry => (
          <div 
            key={industry.id}
            className="absolute rounded-full blur-3xl"
            style={{
              backgroundColor: industry.color,
              width: '300px',
              height: '300px',
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 80}%`,
              opacity: 0.3
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <Chip 
            label="INDUSTRY SOLUTIONS" 
            variant="outlined" 
            className="mb-6 border-blue-200 text-blue-600 font-medium"
          />
          <Typography 
            variant="h3" 
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Transform Your Business <span className="text-blue-600">Sector-Specific</span> Solutions
          </Typography>
          <Typography 
            variant="body1" 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our tailored solutions address the unique challenges of each industry
          </Typography>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Industry Cards */}
          <div className="space-y-6">
            {industries.map(industry => (
              <motion.div
                key={industry.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setHoveredCard(industry.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card 
                  onClick={() => setSelectedIndustry(industry)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all border-2 ${selectedIndustry.id === industry.id ? 'border-blue-500 shadow-lg' : 'border-transparent hover:border-gray-200'} ${hoveredCard === industry.id ? 'shadow-md' : 'shadow-sm'}`}
                  style={{
                    background: selectedIndustry.id === industry.id 
                      ? `linear-gradient(to bottom right, white, ${industry.color}10)` 
                      : 'white'
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="p-3 rounded-lg flex-shrink-0"
                      style={{ backgroundColor: `${industry.color}20` }}
                    >
                      {industry.icon}
                    </div>
                    <div>
                      <Typography variant="h6" className="font-bold text-gray-900">
                        {industry.name}
                      </Typography>
                      <Typography variant="body2" className="text-gray-600 mt-1">
                        {industry.description}
                      </Typography>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Selected Industry Details */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndustry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              >
                <div 
                  className="h-2 w-full"
                  style={{ backgroundColor: selectedIndustry.color }}
                />
                <div className="p-8">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <Typography variant="h4" className="font-bold text-gray-900 mb-2">
                        {selectedIndustry.name} Solutions
                      </Typography>
                      <Typography variant="body1" className="text-gray-600">
                        {selectedIndustry.description}
                      </Typography>
                    </div>
                    <div 
                      className="p-4 rounded-lg"
                      style={{ backgroundColor: `${selectedIndustry.color}20` }}
                    >
                      {selectedIndustry.icon}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {selectedIndustry.solutions.map((solution, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle 
                          className="mt-0.5 flex-shrink-0" 
                          style={{ color: selectedIndustry.color }} 
                        />
                        <Typography variant="body1" className="text-gray-800">
                          {solution}
                        </Typography>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-8">
                    <Typography variant="body2" className="font-medium text-gray-700">
                      Typical results: <span className="font-bold" style={{ color: selectedIndustry.color }}>
                        {selectedIndustry.stats}
                      </span>
                    </Typography>
                  </div>

                  <Button
                    variant="contained"
                    endIcon={<ArrowRightAlt />}
                    size="large"
                    style={{ backgroundColor: selectedIndustry.color }}
                    className="shadow-sm hover:shadow-md transition-shadow"
                  >
                    Explore {selectedIndustry.name} Solutions
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
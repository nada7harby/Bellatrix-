import { useState } from 'react';
import { Card, Typography, Button, Chip } from '@mui/material';
import { Factory, Store, Work as Briefcase, LocalShipping as Package, ArrowRightAlt, CheckCircle } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const industries = [
  {
    id: 'manufacturing',
    label: 'Manufacturing',
    icon: <Factory className="w-8 h-8" />,
    content: {
      title: 'Manufacturing Solutions',
      description: 'Streamline your manufacturing operations with our comprehensive NetSuite solutions. From production planning to inventory management, we help you optimize every aspect of your manufacturing process.',
      features: [
        'Production planning and scheduling',
        'Inventory and supply chain management',
        'Quality control and compliance',
        'Cost accounting and analysis',
        'Shop floor control'
      ],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  },
  {
    id: 'retail',
    label: 'Retail',
    icon: <Store className="w-8 h-8" />,
    content: {
      title: 'Retail Solutions',
      description: 'Transform your retail operations with our integrated NetSuite solutions. Manage inventory, sales, and customer relationships across multiple channels seamlessly.',
      features: [
        'Multi-channel retail management',
        'Inventory optimization',
        'Customer relationship management',
        'Point of sale integration',
        'E-commerce integration'
      ],
      image: 'https://images.unsplash.com/photo-1441986300917-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  },
  {
    id: 'professional-services',
    label: 'Professional Services',
    icon: <Briefcase className="w-8 h-8" />,
    content: {
      title: 'Professional Services Solutions',
      description: 'Optimize your service delivery with our NetSuite solutions for professional services firms. From project management to resource allocation, we help you deliver exceptional service.',
      features: [
        'Project management and tracking',
        'Resource allocation and planning',
        'Time and expense management',
        'Client billing and invoicing',
        'Service delivery automation'
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  },
  {
    id: 'wholesale-distribution',
    label: 'Wholesale Distribution',
    icon: <Package className="w-8 h-8" />,
    content: {
      title: 'Wholesale Distribution Solutions',
      description: 'Optimize your wholesale distribution operations with our NetSuite solutions. From order management to inventory control, we help you streamline your distribution processes.',
      features: [
        'Order management and fulfillment',
        'Inventory and warehouse management',
        'Supplier relationship management',
        'Pricing and discount management',
        'Multi-channel distribution'
      ],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  }
];

const blueGradient = 'linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)';
const glassBg = 'rgba(255,255,255,0.7)';

const Industries = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden min-h-[90vh]">
      {/* Decorative blue gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full blur-3xl opacity-30" style={{background: blueGradient}} />
        <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] rounded-full blur-2xl opacity-20" style={{background: blueGradient}} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <Chip 
            label="INDUSTRY SOLUTIONS" 
            variant="outlined" 
            className="mb-6 border-blue-300 text-blue-700 font-semibold tracking-widest bg-white/60"
          />
          <Typography 
            variant="h3" 
            className="text-4xl font-extrabold text-blue-900 mb-4"
          >
            Discover <span className="text-blue-600">Modern</span> Industry Solutions
          </Typography>
          <Typography 
            variant="body1" 
            className="text-xl text-blue-700 max-w-4xl mx-auto"
          >
            Explore how our blue-powered platform transforms your sector with interactive, tailored solutions.
          </Typography>
        </div>

        {/* Swiper Cards */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={industries.length > 4}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }
          }}
          className="pb-4 mb-16"
        >
          {industries.map(industry => (
            <SwiperSlide key={industry.id}>
              <motion.div
                whileHover={{ scale: 1.06, boxShadow: '0 8px 32px 0 rgba(37,99,235,0.15)' }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setHoveredCard(industry.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="flex-shrink-0"
              >
                <Card 
                  onClick={() => setSelectedIndustry(industry)}
                  className={`w-72 h-56 p-6 rounded-3xl cursor-pointer border-2 transition-all duration-300 backdrop-blur-md ${selectedIndustry.id === industry.id ? 'border-blue-500 shadow-xl ring-2 ring-blue-400' : 'border-transparent hover:border-blue-200'} ${hoveredCard === industry.id ? 'shadow-lg' : 'shadow-md'}`}
                  style={{
                    background: glassBg,
                    boxShadow: selectedIndustry.id === industry.id ? '0 8px 32px 0 rgba(37,99,235,0.25)' : '0 4px 16px 0 rgba(37,99,235,0.08)',
                  }}
                  elevation={0}
                >
                  <div className="flex flex-col items-center gap-3 h-full justify-center">
                    <div 
                      className="p-4 rounded-xl mb-2 flex-shrink-0"
                      style={{ backgroundColor: '#eff6ff' }}
                    >
                      {industry.icon}
                    </div>
                    <Typography variant="h6" className="font-bold text-blue-900 text-center">
                      {industry.label}
                    </Typography>
                    <Typography variant="body2" className="text-blue-700 text-center">
                      {industry.content.title}
                    </Typography>
                  </div>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Floating details panel */}
        <div className="flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndustry.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-3xl bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-100 overflow-hidden relative"
              style={{ boxShadow: '0 12px 48px 0 rgba(37,99,235,0.10)' }}
            >
              <div 
                className="h-2 w-full"
                style={{ background: blueGradient }}
              />
              <div className="p-10">
                <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-8">
                  <div className="flex-1">
                    <Typography variant="h4" className="font-extrabold text-blue-900 mb-2">
                      {selectedIndustry.content.title}
                    </Typography>
                    <Typography variant="body1" className="text-blue-700 mb-4">
                      {selectedIndustry.content.description}
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {selectedIndustry.content.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ x: 8 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle 
                            className="mt-0.5 flex-shrink-0" 
                            style={{ color: '#2563eb' }} 
                          />
                          <Typography variant="body1" className="text-blue-900">
                            {feature}
                          </Typography>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-full md:w-56 h-40 md:h-56 rounded-2xl overflow-hidden shadow-lg">
                    <img src={selectedIndustry.content.image} alt={selectedIndustry.label} className="object-cover w-full h-full" />
                  </div>
                </div>
                <Button
                  variant="contained"
                  endIcon={<ArrowRightAlt />}
                  size="large"
                  style={{ background: blueGradient, color: 'white', boxShadow: '0 2px 8px 0 rgba(37,99,235,0.15)' }}
                  className="shadow-md hover:shadow-xl transition-shadow font-bold text-lg px-8"
                >
                  Explore {selectedIndustry.label} Solutions
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Hide scrollbar utility */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Industries;
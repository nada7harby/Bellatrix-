import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay, Pagination } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    quote: "Bellatrix transformed our operations. Their NetSuite expertise is unmatched.",
    name: "John Doe",
    title: "CEO of TechCorp",
    avatar: "JD",
    rating: 5
  },
  {
    id: 2,
    quote: "The implementation process was seamless, and the support has been outstanding.",
    name: "Jane Smith",
    title: "COO of Innovate Inc.",
    avatar: "JS",
    rating: 5
  },
  {
    id: 3,
    quote: "Thanks to Bellatrix, our productivity has increased by 40%. Highly recommended!",
    name: "Sam Wilson",
    title: "CFO of Global Solutions",
    avatar: "SW",
    rating: 5
  },
  {
    id: 4,
    quote: "Professional team with exceptional technical skills and business understanding.",
    name: "Sarah Johnson",
    title: "Director of Operations",
    avatar: "SJ",
    rating: 4
  },
  {
    id: 5,
    quote: "The best investment we've made in our digital transformation journey.",
    name: "Michael Brown",
    title: "IT Manager",
    avatar: "MB",
    rating: 5
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedTestimonial, setExpandedTestimonial] = useState(null);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300 fill-current'}`}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="relative py-20 sm:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl bg-blue-500"
            style={{
              width: '300px',
              height: '300px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              transition: {
                duration: 20 + Math.random() * 20,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Client Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by innovative companies worldwide to transform their operations
          </p>
        </motion.div>

        {/* 3D Carousel */}
        <div className="max-w-7xl mx-auto relative">
          <Swiper
            ref={swiperRef}
            modules={[EffectCards, Autoplay, Pagination]}
            effect={'cards'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.testimonial-pagination',
            }}
            onSlideChange={handleSlideChange}
            className="w-full max-w-md sm:max-w-xl md:max-w-2xl h-[500px]"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <motion.div 
                  className="h-full p-8 flex flex-col"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setExpandedTestimonial(testimonial)}
                >
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                        {testimonial.avatar}
                      </div>
                      <div className="flex space-x-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    
                    <blockquote className="text-gray-700 text-lg mb-8">
                      <p>“{testimonial.quote}”</p>
                    </blockquote>
                  </div>
                  
                  <div className="mt-auto border-t border-gray-100 pt-6">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-blue-600">{testimonial.title}</div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination */}
          <div className="testimonial-pagination flex justify-center gap-2 mt-8"></div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '98%', label: 'Client Satisfaction' },
            { value: '40%', label: 'Average Efficiency Gain' },
            { value: '24/7', label: 'Support Availability' },
            { value: '200+', label: 'Successful Deployments' }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Expanded Testimonial Modal */}
      <AnimatePresence>
        {expandedTestimonial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setExpandedTestimonial(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 flex-grow overflow-y-auto">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-2xl">
                      {expandedTestimonial.avatar}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{expandedTestimonial.name}</h3>
                      <div className="text-blue-600">{expandedTestimonial.title}</div>
                      <div className="flex mt-2">
                        {renderStars(expandedTestimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => setExpandedTestimonial(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <blockquote className="text-gray-700 text-xl mb-8 leading-relaxed">
                  <p>“{expandedTestimonial.quote}”</p>
                </blockquote>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">The Results:</h4>
                  <ul className="space-y-3">
                    {[
                      "40% increase in operational efficiency",
                      "Reduced implementation time by 35%",
                      "99.9% system uptime",
                      "Seamless integration with existing tools"
                    ].map((result, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-gray-100 p-6 bg-gray-50">
                <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-md transition-all duration-300 flex items-center justify-center">
                  Contact This Client's Success Manager
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Testimonials;
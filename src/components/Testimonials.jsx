import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    id: 1,
    quote: "Bellatrix transformed our operations. Their NetSuite expertise is unmatched.",
    name: "John Doe",
    title: "CEO of TechCorp",
    avatar: "JD",
    rating: 5,
    results: ["40% efficiency boost", "Seamless migration", "24/7 support"]
  },
  {
    id: 2,
    quote: "The implementation was flawless. Their team delivered beyond expectations.",
    name: "Jane Smith",
    title: "COO of Innovate Inc.",
    avatar: "JS",
    rating: 5,
    results: ["50% faster deployment", "Zero downtime", "Custom integrations"]
  },
  {
    id: 3,
    quote: "Our productivity skyrocketed by 40% after switching to Bellatrix.",
    name: "Sam Wilson",
    title: "CFO of Global Solutions",
    avatar: "SW",
    rating: 5,
    results: ["Real-time analytics", "Cost savings", "Scalable infrastructure"]
  },
  {
    id: 4,
    quote: "Exceptional technical skills with deep business understanding.",
    name: "Sarah Johnson",
    title: "Director of Operations",
    avatar: "SJ",
    rating: 4,
    results: ["Automated workflows", "User-friendly UI", "Training included"]
  },
  {
    id: 5,
    quote: "The best investment in our digital transformation journey.",
    name: "Michael Brown",
    title: "IT Manager",
    avatar: "MB",
    rating: 5,
    results: ["Cloud optimization", "Security upgrades", "API integrations"]
  }
];

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setSelectedTestimonial(testimonials[swiper.realIndex]);
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
      {/* Floating Gradient Blobs (Background Animation) */}
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don’t just take our word for it—here’s what our clients say.
          </p>
        </motion.div>

        {/* Responsive 3D Carousel */}
        <div className="max-w-7xl mx-auto relative">
          <Swiper
            ref={swiperRef}
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
              el: '.testimonial-pagination',
            }}
            navigation={{
              nextEl: '.testimonial-next',
              prevEl: '.testimonial-prev',
            }}
            onSlideChange={handleSlideChange}
            breakpoints={{
              // Mobile: 1 slide
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // Desktop: 3 slides
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              }
            }}
            className="w-full h-[500px]"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <motion.div 
                  className="h-full p-8 flex flex-col cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => {
                    setSelectedTestimonial(testimonial);
                    setIsExpanded(true);
                  }}
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

          {/* Custom Navigation & Pagination */}
          <div className="testimonial-pagination flex justify-center gap-2 mt-8"></div>
          <button className="testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors duration-300 hidden md:flex">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="testimonial-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors duration-300 hidden md:flex">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Expanded Testimonial Modal */}
      <AnimatePresence>
        {isExpanded && selectedTestimonial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsExpanded(false)}
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
                      {selectedTestimonial.avatar}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{selectedTestimonial.name}</h3>
                      <div className="text-blue-600">{selectedTestimonial.title}</div>
                      <div className="flex mt-2">
                        {renderStars(selectedTestimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsExpanded(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <blockquote className="text-gray-700 text-xl mb-8 leading-relaxed">
                  <p>“{selectedTestimonial.quote}”</p>
                </blockquote>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Key Results:</h4>
                  <ul className="space-y-3">
                    {selectedTestimonial.results.map((result, i) => (
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
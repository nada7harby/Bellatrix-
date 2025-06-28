import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, PlayArrow } from '@mui/icons-material';
import { AnimatePresence } from 'framer-motion';

const Hero = () => {
  const videoRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      title: "Strategic Business Transformation",
      subtitle: "Oracle NetSuite Consultancy",
      description: "Streamline operations and drive growth with our comprehensive NetSuite solutions.",
      video: "/Videos/HomeHeroSectionV.mp4",
      cta: "Explore Services"
    },
    {
      title: "Digital Optimization Experts",
      subtitle: "Cloud Solutions Specialists",
      description: "Enhance productivity with our tailored implementation and consulting services.",
      video: "https://assets.mixkit.co/videos/preview/mixkit-team-meeting-in-a-modern-office-space-12346-large.mp4",
      cta: "View Case Studies"
    },
    {
      title: "Data-Driven Decision Making",
      subtitle: "Business Intelligence Partners",
      description: "Leverage real-time analytics to transform your operations.",
      video: "https://assets.mixkit.co/videos/preview/mixkit-woman-analyzing-data-on-her-laptop-12347-large.mp4",
      cta: "Request Consultation"
    }
  ];

  // Handle video play/pause
  useEffect(() => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.play() : videoRef.current.pause();
    }
  }, [isPlaying, currentSlide]);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsPlaying(true);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Video */}
      <video 
        ref={videoRef}
        autoPlay 
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.4) contrast(1.1)' }}
      >
        <source src={slides[currentSlide].video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Enhanced Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/50 to-slate-900/70"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40"></div>
      
      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-white/10 to-white/5 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-slate-400/15 to-slate-300/10 rounded-full blur-lg animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-md animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/2 w-20 h-20 bg-gradient-to-r from-slate-300/15 to-slate-400/10 rounded-full blur-lg animate-bounce-gentle"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-grid-pattern animate-grid-flow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-6">
          <AnimatePresence mode='wait'>
            <div
              key={currentSlide}
              className="animate-slide-up"
            >
              {/* Subtitle with Enhanced Styling */}
              <div className="text-center mb-6">
                <span className="inline-block text-white/90 text-sm md:text-base font-semibold tracking-wider mb-2 px-6 py-3 bg-slate-800/30 backdrop-blur-sm rounded-full border border-white/20 shadow-lg">
                  {slides[currentSlide].subtitle}
                </span>
              </div>

              {/* Main Heading with Text Animation */}
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white animate-text-glow">
                  <span className="inline-block bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent animate-gradient-text">
                    {slides[currentSlide].title}
                  </span>
                </h1>
              </div>
              
              {/* Enhanced Description */}
              <div className="text-center mb-12">
                <p className="text-lg md:text-xl lg:text-2xl text-slate-200 leading-relaxed max-w-4xl mx-auto animate-fade-in">
                  {slides[currentSlide].description}
                </p>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="text-center flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group relative px-10 py-4 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-slide-up-delay border border-slate-500/30">
                  <span className="relative z-10 flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" />
                    {slides[currentSlide].cta}
                  </span>
                  <div className="absolute inset-0 bg-slate-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
                
                <button className="group relative px-10 py-4 bg-transparent border-2 border-white/30 hover:border-white/50 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                  <span className="relative z-10 flex items-center justify-center">
                    <PlayArrow className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                    Watch Demo
                  </span>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </AnimatePresence>
        </div>
      </div>

      {/* Enhanced Slider Controls */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center gap-6 z-20">
        <button
          onClick={prevSlide}
          className="w-14 h-14 bg-slate-800/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-slate-700/50 transition-all duration-300 group"
        >
          <ChevronLeft className="text-white group-hover:scale-110 transition-transform duration-300" />
        </button>

        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-10 bg-white shadow-lg' 
                  : 'w-3 bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-14 h-14 bg-slate-800/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-slate-700/50 transition-all duration-300 group"
        >
          <ChevronRight className="text-white group-hover:scale-110 transition-transform duration-300" />
        </button>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-scroll-indicator"></div>
        </div>
      </div>

      {/* Custom CSS for Creative Animations */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(-25px);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-15px) scale(1.02);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-180deg); }
        }
        .animate-float-reverse {
          animation: float-reverse 6s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.2); opacity: 0.4; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 3s ease-in-out infinite;
        }

        @keyframes slide-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }

        @keyframes slide-up-delay {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up-delay {
          animation: slide-up-delay 1s ease-out 0.3s both;
        }

        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1.5s ease-out 0.5s both;
        }

        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 5px rgba(255,255,255,0.5); }
          50% { text-shadow: 0 0 20px rgba(255,255,255,0.8), 0 0 30px rgba(148,163,184,0.5); }
        }
        .animate-text-glow {
          animation: text-glow 3s ease-in-out infinite;
        }

        @keyframes gradient-text {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient-text 3s ease-in-out infinite;
        }

        @keyframes scroll-indicator {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }
        .animate-scroll-indicator {
          animation: scroll-indicator 2s ease-in-out infinite;
        }

        @keyframes grid-flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-grid-flow {
          animation: grid-flow 20s linear infinite;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
};

export default Hero;
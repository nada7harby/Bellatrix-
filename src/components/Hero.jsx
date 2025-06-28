import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from '@mui/icons-material';
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
        style={{ filter: 'brightness(0.7)' }}
      >
        <source src={slides[currentSlide].video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Creative Overlay with Animated Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/5 to-white/8 animate-gradient-shift"></div>
      
      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-white/60 to-white/40 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-white/65 to-white/45 rounded-full blur-lg animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-r from-white/70 to-white/50 rounded-full blur-md animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/2 w-20 h-20 bg-gradient-to-r from-white/60 to-white/40 rounded-full blur-lg animate-bounce-gentle"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-grid-pattern animate-grid-flow"></div>
      </div>

      {/* Advanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Holographic Grid Waves */}
        <div className="absolute inset-0 opacity-30 animate-wave-flow">
          <svg viewBox="0 0 1200 800" className="w-full h-full">
            <defs>
              <linearGradient id="holoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#ffffff', stopOpacity:0.9}} />
                <stop offset="25%" style={{stopColor:'#f0f8ff', stopOpacity:0.8}} />
                <stop offset="50%" style={{stopColor:'#ffffff', stopOpacity:0.9}} />
                <stop offset="75%" style={{stopColor:'#87ceeb', stopOpacity:0.8}} />
                <stop offset="100%" style={{stopColor:'#e0f6ff', stopOpacity:0.9}} />
              </linearGradient>
              <filter id="holoGlow">
                <feGaussianBlur stdDeviation="25" result="coloredBlur"/>
                <feGaussianBlur stdDeviation="15" result="coloredBlur2"/>
                <feGaussianBlur stdDeviation="8" result="coloredBlur3"/>
                <feGaussianBlur stdDeviation="3" result="coloredBlur4"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="coloredBlur2"/>
                  <feMergeNode in="coloredBlur3"/>
                  <feMergeNode in="coloredBlur4"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <g filter="url(#holoGlow)">
              <path d="M0,400 Q300,300 600,400 T1200,400" stroke="url(#holoGrad1)" strokeWidth="2" fill="none"/>
              <path d="M0,420 Q300,320 600,420 T1200,420" stroke="url(#holoGrad1)" strokeWidth="1.5" fill="none" opacity="0.7"/>
              <path d="M0,380 Q300,280 600,380 T1200,380" stroke="url(#holoGrad1)" strokeWidth="1" fill="none" opacity="0.5"/>
            </g>
          </svg>
        </div>

        {/* Neural Network Visualization */}
        <div className="absolute top-0 left-0 w-full h-full opacity-25 animate-neural-pulse">
          <svg viewBox="0 0 1000 600" className="w-full h-full">
            <defs>
              <radialGradient id="neuralGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" style={{stopColor:'#ffffff', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#87ceeb', stopOpacity:0}} />
              </radialGradient>
              <filter id="neuralGlow">
                <feGaussianBlur stdDeviation="20" result="coloredBlur"/>
                <feGaussianBlur stdDeviation="12" result="coloredBlur2"/>
                <feGaussianBlur stdDeviation="6" result="coloredBlur3"/>
                <feGaussianBlur stdDeviation="2" result="coloredBlur4"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="coloredBlur2"/>
                  <feMergeNode in="coloredBlur3"/>
                  <feMergeNode in="coloredBlur4"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <g filter="url(#neuralGlow)">
              {/* Neural nodes */}
              <circle cx="100" cy="150" r="4" fill="url(#neuralGrad)" className="animate-pulse-node"/>
              <circle cx="200" cy="100" r="5" fill="url(#neuralGrad)" className="animate-pulse-node-delay-1"/>
              <circle cx="300" cy="200" r="3" fill="url(#neuralGrad)" className="animate-pulse-node-delay-2"/>
              <circle cx="400" cy="120" r="6" fill="url(#neuralGrad)" className="animate-pulse-node"/>
              <circle cx="500" cy="180" r="4" fill="url(#neuralGrad)" className="animate-pulse-node-delay-1"/>
              <circle cx="600" cy="80" r="5" fill="url(#neuralGrad)" className="animate-pulse-node-delay-2"/>
              <circle cx="700" cy="160" r="3" fill="url(#neuralGrad)" className="animate-pulse-node"/>
              <circle cx="800" cy="140" r="4" fill="url(#neuralGrad)" className="animate-pulse-node-delay-1"/>
              
              {/* Neural connections with data flow */}
              <line x1="100" y1="150" x2="200" y2="100" stroke="#ffffff" strokeWidth="1" opacity="0.7" strokeDasharray="4,4" className="animate-data-flow"/>
              <line x1="200" y1="100" x2="300" y2="200" stroke="#f0f8ff" strokeWidth="1" opacity="0.7" strokeDasharray="4,4" className="animate-data-flow-delay-1"/>
              <line x1="300" y1="200" x2="400" y2="120" stroke="#ffffff" strokeWidth="1" opacity="0.7" strokeDasharray="4,4" className="animate-data-flow-delay-2"/>
              <line x1="400" y1="120" x2="500" y2="180" stroke="#e0f6ff" strokeWidth="1" opacity="0.7" strokeDasharray="4,4" className="animate-data-flow"/>
              <line x1="500" y1="180" x2="600" y2="80" stroke="#ffffff" strokeWidth="1" opacity="0.7" strokeDasharray="4,4" className="animate-data-flow-delay-1"/>
              <line x1="600" y1="80" x2="700" y2="160" stroke="#f0f8ff" strokeWidth="1" opacity="0.7" strokeDasharray="4,4" className="animate-data-flow-delay-2"/>
              <line x1="700" y1="160" x2="800" y2="140" stroke="#ffffff" strokeWidth="1" opacity="0.7" strokeDasharray="4,4" className="animate-data-flow"/>
            </g>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto px-6">
        <AnimatePresence mode='wait'>
            <div
            key={currentSlide}
              className="animate-slide-up"
            >
              {/* Subtitle with Enhanced Styling */}
              <div className="text-center mb-4">
                <span className="inline-block text-white/90 text-sm md:text-base font-semibold letter-spacing-wider mb-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
              {slides[currentSlide].subtitle}
                </span>
              </div>

              {/* Main Heading with Text Animation */}
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white animate-text-glow">
                  <span className="inline-block bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent animate-gradient-text">
              {slides[currentSlide].title}
                  </span>
                </h1>
              </div>
              
              {/* Creative Description with Enhanced Styling */}
              <div className="text-center mb-12">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto animate-fade-in">
              {slides[currentSlide].description}
                </p>
              </div>

                             {/* CTA Button */}
               <div className="text-center">
                 <button className="group relative px-10 py-4 bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-slide-up-delay border-2 border-white">
                   <span className="relative z-10 flex items-center justify-center">
                     <ArrowRight className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" />
                {slides[currentSlide].cta}
                   </span>
                   <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 </button>
               </div>
            </div>
        </AnimatePresence>
        </div>
      </div>

        {/* Slider Controls */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-20">
        <button
            onClick={prevSlide}
          className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <ChevronLeft className="text-white" />
        </button>

        <div className="flex gap-2">
            {slides.map((_, index) => (
            <button
                key={index}
                onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 bg-white' 
                  : 'w-3 bg-white/50 hover:bg-white/70'
              }`}
              />
            ))}
        </div>

        <button
            onClick={nextSlide}
          className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <ChevronRight className="text-white" />
        </button>
      </div>

      

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-scroll-indicator"></div>
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

        /* Creative Animations */
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease-in-out infinite;
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
          50% { text-shadow: 0 0 20px rgba(255,255,255,0.8), 0 0 30px rgba(59,130,246,0.5); }
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
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        /* Advanced Animations */
        @keyframes wave-flow {
          0%, 100% { transform: translateX(-100%) scaleY(1); }
          25% { transform: translateX(-50%) scaleY(1.2); }
          50% { transform: translateX(0%) scaleY(0.8); }
          75% { transform: translateX(50%) scaleY(1.1); }
        }
        .animate-wave-flow {
          animation: wave-flow 15s ease-in-out infinite;
        }

        @keyframes neural-pulse {
          0%, 100% { opacity: 0.25; transform: scale(1); filter: brightness(2); }
          50% { opacity: 0.4; transform: scale(1.1); filter: brightness(4); }
        }
        .animate-neural-pulse {
          animation: neural-pulse 8s ease-in-out infinite;
        }

        @keyframes pulse-node {
          0%, 100% { transform: scale(1); opacity: 0.9; filter: brightness(2.5); }
          50% { transform: scale(1.8); opacity: 1; filter: brightness(5); }
        }
        .animate-pulse-node {
          animation: pulse-node 3s ease-in-out infinite;
        }
        .animate-pulse-node-delay-1 {
          animation: pulse-node 3s ease-in-out infinite 1s;
        }
        .animate-pulse-node-delay-2 {
          animation: pulse-node 3s ease-in-out infinite 2s;
        }

        @keyframes data-flow {
          0% { stroke-dashoffset: 100; opacity: 0.3; }
          50% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0.3; }
        }
        .animate-data-flow {
          animation: data-flow 4s linear infinite;
        }
        .animate-data-flow-delay-1 {
          animation: data-flow 4s linear infinite 1.3s;
        }
        .animate-data-flow-delay-2 {
          animation: data-flow 4s linear infinite 2.6s;
        }
      `}</style>
    </div>
  );
};

export default Hero;
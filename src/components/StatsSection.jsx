import { useState, useEffect, useRef } from 'react';
import { TrendingUp, People, CheckCircle, Star } from '@mui/icons-material';

const StatsSection = ({ stats = [] }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([]);
  const sectionRef = useRef(null);

  // Default stats if none provided
  const defaultStats = [
    { value: "200+", label: "Projects Completed", icon: <CheckCircle className="w-8 h-8" /> },
    { value: "98%", label: "Client Satisfaction", icon: <Star className="w-8 h-8" /> },
    { value: "15+", label: "Years Experience", icon: <TrendingUp className="w-8 h-8" /> },
    { value: "50+", label: "Team Members", icon: <People className="w-8 h-8" /> }
  ];

  const displayStats = stats.length > 0 ? stats.map((stat, index) => ({
    ...stat,
    icon: defaultStats[index]?.icon || <TrendingUp className="w-8 h-8" />
  })) : defaultStats;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedStats(displayStats);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 via-slate-700/30 to-slate-800/50"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-slate-600/30 to-slate-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-slate-500/20 to-slate-400/20 rounded-full blur-2xl animate-bounce-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-slate-400">Impact</span> in Numbers
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Delivering exceptional results and building lasting partnerships with businesses worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayStats.map((stat, index) => (
            <div
              key={index}
              className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/70 transition-all duration-500 hover:transform hover:scale-105 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-600/10 to-slate-700/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {stat.icon}
                </div>
              </div>

              {/* Value */}
              <div className="relative z-10 mb-2">
                <div className="text-4xl md:text-5xl font-bold text-white group-hover:text-slate-200 transition-colors duration-300">
                  {isVisible ? stat.value : '0'}
                </div>
              </div>

              {/* Label */}
              <div className="relative z-10">
                <p className="text-slate-300 text-lg font-medium group-hover:text-slate-200 transition-colors duration-300">
                  {stat.label}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-slate-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-slate-400 rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes slide-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite;
        }
      `}</style>
    </div>
  );
};

export default StatsSection;
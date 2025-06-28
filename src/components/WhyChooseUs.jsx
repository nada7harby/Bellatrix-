import { useState } from 'react';
import { 
  Speed, 
  Security, 
  Support, 
  TrendingUp, 
  CheckCircle, 
  Star,
  ArrowForward 
} from '@mui/icons-material';

const WhyChooseUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      icon: <Speed className="w-8 h-8" />,
      title: "Lightning Fast Implementation",
      description: "Get your NetSuite system up and running 40% faster than industry standards with our proven methodology.",
      stats: "40% Faster",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <Security className="w-8 h-8" />,
      title: "Enterprise-Grade Security",
      description: "Your data is protected with bank-level security measures and compliance with international standards.",
      stats: "99.9% Uptime",
      color: "from-green-500 to-green-700"
    },
    {
      icon: <Support className="w-8 h-8" />,
      title: "24/7 Expert Support",
      description: "Round-the-clock technical support from certified NetSuite professionals whenever you need assistance.",
      stats: "24/7 Available",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Proven ROI Results",
      description: "Our clients see an average 300% return on investment within the first year of implementation.",
      stats: "300% ROI",
      color: "from-orange-500 to-orange-700"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "100% Success Rate",
      description: "Every project we undertake is completed successfully, on time, and within budget - guaranteed.",
      stats: "100% Success",
      color: "from-teal-500 to-teal-700"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Award-Winning Team",
      description: "Our certified experts have won multiple industry awards for excellence in NetSuite implementation.",
      stats: "15+ Awards",
      color: "from-yellow-500 to-yellow-700"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
      <div className="absolute inset-0 opacity-30">
        {/* Animated background elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-slate-600/20 to-slate-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-slate-500/15 to-slate-400/15 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-slate-400/25 to-slate-600/25 rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-slate-700/50 text-slate-300 text-sm font-semibold rounded-full mb-6 border border-slate-600/50">
            WHY CHOOSE BELLATRIX
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Experience the <span className="text-slate-400">Difference</span>
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            We don't just implement software - we transform businesses. Here's what sets us apart from the competition.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/70 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-slate-200 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4 group-hover:text-slate-200 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Stats Badge */}
                <div className="flex items-center justify-between">
                  <div className={`inline-block px-3 py-1 bg-gradient-to-r ${feature.color} text-white text-sm font-bold rounded-full`}>
                    {feature.stats}
                  </div>
                  <ArrowForward className="w-5 h-5 text-slate-400 group-hover:text-slate-200 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-slate-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-slate-400 rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Join hundreds of successful companies who have chosen Bellatrix for their NetSuite journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Get Free Consultation
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-slate-600 text-slate-300 hover:text-white hover:border-slate-500 font-semibold rounded-lg transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default WhyChooseUs;
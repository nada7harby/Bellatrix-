const Testimonials = ({ testimonials = [], sectionHeader = {} }) => {

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-blue-400 fill-current' : 'text-blue-200 fill-current'}`}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  // Show only first 3 testimonials initially
  const displayedTestimonials = testimonials.slice(0, 3);

  return (
    <div className="py-12 relative overflow-hidden animate-background-glow" style={{
        backgroundColor: '#001038',
        animation: 'background-glow 12s ease-in-out infinite'
    }}>
      {/* Ultra Creative Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      
          {/* Ethereal Digital Portals */}
          <div className="absolute inset-0 opacity-35 animate-portal-genesis">
              <svg viewBox="0 0 1200 800" className="w-full h-full">
                  <defs>
                      <radialGradient id="portalGrad1" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" style={{stopColor:'#ffffff', stopOpacity:1}} />
                          <stop offset="30%" style={{stopColor:'#e0f6ff', stopOpacity:0.8}} />
                          <stop offset="70%" style={{stopColor:'#87ceeb', stopOpacity:0.5}} />
                          <stop offset="100%" style={{stopColor:'#001038', stopOpacity:0}} />
                      </radialGradient>
                      <filter id="portalDistort">
                          <feTurbulence baseFrequency="0.02" numOctaves="3" result="noise" seed="5"/>
                          <feDisplacementMap in="SourceGraphic" in2="noise" scale="15"/>
                          <feGaussianBlur stdDeviation="8" result="blur"/>
                          <feMerge>
                              <feMergeNode in="blur"/>
                              <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                      </filter>
                  </defs>
                  <g filter="url(#portalDistort)">
                      <circle cx="200" cy="150" r="60" fill="url(#portalGrad1)" className="animate-portal-1"/>
                      <circle cx="800" cy="350" r="80" fill="url(#portalGrad1)" className="animate-portal-2"/>
                      <circle cx="600" cy="600" r="50" fill="url(#portalGrad1)" className="animate-portal-3"/>
                      <circle cx="1000" cy="100" r="70" fill="url(#portalGrad1)" className="animate-portal-4"/>
                  </g>
              </svg>
          </div>
          
          {/* Floating Crystalline Fractals */}
          <div className="absolute top-0 left-0 w-full h-full opacity-40 animate-crystal-matrix">
              <svg viewBox="0 0 1200 800" className="w-full h-full">
                  <defs>
                      <linearGradient id="crystalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor:'#ffffff', stopOpacity:0.9}} />
                          <stop offset="50%" style={{stopColor:'#e0f6ff', stopOpacity:0.7}} />
                          <stop offset="100%" style={{stopColor:'#87ceeb', stopOpacity:0.4}} />
                      </linearGradient>
                      <filter id="crystalPrism">
                          <feColorMatrix type="hueRotate" values="45"/>
                          <feGaussianBlur stdDeviation="2" result="softGlow"/>
                          <feMerge>
                              <feMergeNode in="softGlow"/>
                              <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                      </filter>
                  </defs>
                  <g filter="url(#crystalPrism)">
                      {/* Complex Crystalline Patterns */}
                      <polygon points="150,80 180,60 220,80 200,120 160,120" stroke="url(#crystalGrad)" strokeWidth="1.5" fill="none" className="animate-crystal-1"/>
                      <polygon points="400,150 450,130 480,170 430,200 380,180" stroke="url(#crystalGrad)" strokeWidth="1.5" fill="none" className="animate-crystal-2"/>
                      <polygon points="700,100 760,85 790,135 740,165 690,150" stroke="url(#crystalGrad)" strokeWidth="1.5" fill="none" className="animate-crystal-3"/>
                      <polygon points="250,350 300,330 330,380 280,410 230,390" stroke="url(#crystalGrad)" strokeWidth="1.5" fill="none" className="animate-crystal-4"/>
                      <polygon points="600,400 650,380 680,430 630,460 580,440" stroke="url(#crystalGrad)" strokeWidth="1.5" fill="none" className="animate-crystal-5"/>
                      <polygon points="900,250 950,230 980,280 930,310 880,290" stroke="url(#crystalGrad)" strokeWidth="1.5" fill="none" className="animate-crystal-6"/>
                      
                      {/* Interconnecting Lines */}
                      <line x1="165" y1="100" x2="425" y2="165" stroke="url(#crystalGrad)" strokeWidth="0.8" strokeDasharray="5,5" className="animate-crystal-connect-1"/>
                      <line x1="465" y1="165" x2="730" y2="125" stroke="url(#crystalGrad)" strokeWidth="0.8" strokeDasharray="5,5" className="animate-crystal-connect-2"/>
                      <line x1="275" y1="370" x2="625" y2="415" stroke="url(#crystalGrad)" strokeWidth="0.8" strokeDasharray="5,5" className="animate-crystal-connect-3"/>
                  </g>
              </svg>
          </div>
          
          {/* Neural Network Pathways */}
          <div className="absolute top-1/4 right-0 w-96 h-96 opacity-45 animate-neural-pulse">
              <svg viewBox="0 0 300 300" className="w-full h-full">
                  <defs>
                      <radialGradient id="neuronGrad" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" style={{stopColor:'#ffffff', stopOpacity:1}} />
                          <stop offset="50%" style={{stopColor:'#e0f6ff', stopOpacity:0.8}} />
                          <stop offset="100%" style={{stopColor:'#87ceeb', stopOpacity:0}} />
                      </radialGradient>
                      <linearGradient id="synapseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor:'#ffffff', stopOpacity:0.3}} />
                          <stop offset="50%" style={{stopColor:'#f0f8ff', stopOpacity:0.9}} />
                          <stop offset="100%" style={{stopColor:'#87ceeb', stopOpacity:0.3}} />
                      </linearGradient>
                      <filter id="neuralGlow">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                          <feMerge>
                              <feMergeNode in="coloredBlur"/>
                              <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                      </filter>
                  </defs>
                  <g filter="url(#neuralGlow)">
                      {/* Neural Nodes */}
                      <circle cx="60" cy="60" r="8" fill="url(#neuronGrad)" className="animate-neuron-1"/>
                      <circle cx="180" cy="80" r="6" fill="url(#neuronGrad)" className="animate-neuron-2"/>
                      <circle cx="240" cy="140" r="10" fill="url(#neuronGrad)" className="animate-neuron-3"/>
                      <circle cx="120" cy="180" r="7" fill="url(#neuronGrad)" className="animate-neuron-4"/>
                      <circle cx="80" cy="240" r="9" fill="url(#neuronGrad)" className="animate-neuron-5"/>
                      <circle cx="200" cy="220" r="5" fill="url(#neuronGrad)" className="animate-neuron-6"/>
                      
                      {/* Neural Connections */}
                      <path d="M60,60 Q100,90 180,80" stroke="url(#synapseGrad)" strokeWidth="2" fill="none" className="animate-synapse-1"/>
                      <path d="M180,80 Q210,110 240,140" stroke="url(#synapseGrad)" strokeWidth="2" fill="none" className="animate-synapse-2"/>
                      <path d="M240,140 Q180,160 120,180" stroke="url(#synapseGrad)" strokeWidth="2" fill="none" className="animate-synapse-3"/>
                      <path d="M120,180 Q100,210 80,240" stroke="url(#synapseGrad)" strokeWidth="2" fill="none" className="animate-synapse-4"/>
                      <path d="M80,240 Q140,230 200,220" stroke="url(#synapseGrad)" strokeWidth="2" fill="none" className="animate-synapse-5"/>
                      <path d="M200,220 Q220,180 240,140" stroke="url(#synapseGrad)" strokeWidth="2" fill="none" className="animate-synapse-6"/>
                  </g>
              </svg>
          </div>
          
          {/* Holographic Energy Waves */}
          <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 opacity-42 animate-hologram-waves">
              <svg viewBox="0 0 400 300" className="w-full h-full">
                  <defs>
                      <linearGradient id="holoWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor:'#ffffff', stopOpacity:0.2}} />
                          <stop offset="30%" style={{stopColor:'#e0f6ff', stopOpacity:0.8}} />
                          <stop offset="70%" style={{stopColor:'#87ceeb', stopOpacity:0.6}} />
                          <stop offset="100%" style={{stopColor:'#ffffff', stopOpacity:0.1}} />
                      </linearGradient>
                      <filter id="holoDistortion">
                          <feTurbulence baseFrequency="0.015" numOctaves="2" result="waveNoise" seed="2"/>
                          <feDisplacementMap in="SourceGraphic" in2="waveNoise" scale="8"/>
                          <feGaussianBlur stdDeviation="1.5" result="softBlur"/>
                          <feMerge>
                              <feMergeNode in="softBlur"/>
                              <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                      </filter>
                  </defs>
                  <g filter="url(#holoDistortion)" stroke="url(#holoWaveGrad)" strokeWidth="2" fill="none">
                      <path d="M50,150 Q100,100 150,150 Q200,200 250,150 Q300,100 350,150" className="animate-holo-wave-1"/>
                      <path d="M30,180 Q80,130 130,180 Q180,230 230,180 Q280,130 330,180" className="animate-holo-wave-2"/>
                      <path d="M70,120 Q120,70 170,120 Q220,170 270,120 Q320,70 370,120" className="animate-holo-wave-3"/>
                      <path d="M20,210 Q70,160 120,210 Q170,260 220,210 Q270,160 320,210" className="animate-holo-wave-4"/>
                      <path d="M40,90 Q90,40 140,90 Q190,140 240,90 Q290,40 340,90" className="animate-holo-wave-5"/>
                  </g>
              </svg>
          </div>
          
          {/* Cybernetic DNA Helix */}
          <div className="absolute top-1/3 left-1/3 w-80 h-80 opacity-25 animate-dna-cyber">
              <svg viewBox="0 0 250 250" className="w-full h-full">
                  <defs>
                      <linearGradient id="dnaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor:'#ffffff', stopOpacity:0.8}} />
                          <stop offset="50%" style={{stopColor:'#f0f8ff', stopOpacity:0.6}} />
                          <stop offset="100%" style={{stopColor:'#87ceeb', stopOpacity:0.4}} />
                      </linearGradient>
                  </defs>
                  <g stroke="url(#dnaGrad)" strokeWidth="2" fill="none">
                      <path d="M50,20 Q100,60 150,100 Q200,140 150,180 Q100,220 50,180 Q100,140 150,100 Q200,60 250,20" className="animate-dna-strand-1"/>
                      <path d="M250,20 Q200,60 150,100 Q100,140 150,180 Q200,220 250,180 Q200,140 150,100 Q100,60 50,20" className="animate-dna-strand-2"/>
                      
                      {/* DNA connections */}
                      <line x1="100" y1="40" x2="200" y2="40" strokeWidth="1" opacity="0.6" className="animate-dna-connect-1"/>
                      <line x1="125" y1="80" x2="175" y2="80" strokeWidth="1" opacity="0.6" className="animate-dna-connect-2"/>
                      <line x1="100" y1="120" x2="200" y2="120" strokeWidth="1" opacity="0.6" className="animate-dna-connect-3"/>
                      <line x1="125" y1="160" x2="175" y2="160" strokeWidth="1" opacity="0.6" className="animate-dna-connect-4"/>
                      <line x1="100" y1="200" x2="200" y2="200" strokeWidth="1" opacity="0.6" className="animate-dna-connect-5"/>
                  </g>
              </svg>
          </div>
          
          {/* Abstract Geometric Morphing */}
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 opacity-30 animate-geo-morph">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                      <linearGradient id="morphGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor:'#ffffff', stopOpacity:0.7}} />
                          <stop offset="50%" style={{stopColor:'#f0f8ff', stopOpacity:0.5}} />
                          <stop offset="100%" style={{stopColor:'#87ceeb', stopOpacity:0.3}} />
                      </linearGradient>
                  </defs>
                  <g stroke="url(#morphGrad)" strokeWidth="1.5" fill="none">
                      <polygon points="100,30 170,80 130,150 70,150 30,80" className="animate-morph-shape-1"/>
                      <polygon points="100,50 150,90 120,130 80,130 50,90" opacity="0.7" className="animate-morph-shape-2"/>
                      <polygon points="100,70 130,100 110,130 90,130 70,100" opacity="0.5" className="animate-morph-shape-3"/>
                  </g>
              </svg>
          </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  <span className="text-blue-400">{sectionHeader?.gradientText || 'Trusted by Industry Leaders'}</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  {sectionHeader?.subtitle || "Don't just take our word for it—here's what our clients say."}
              </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Testimonials Content - Left Side */}
              <div className="flex-1">
                  <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-800/90 rounded-3xl p-8 border border-gray-600/50 shadow-2xl hover:shadow-blue-500/20 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group backdrop-blur-sm">
                      {/* Creative Background Elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full opacity-20 transform translate-x-16 -translate-y-16 group-hover:opacity-40 transition-opacity duration-500"></div>
                      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-500/30 to-blue-500/30 rounded-full opacity-20 transform -translate-x-10 translate-y-10 group-hover:opacity-40 transition-opacity duration-500"></div>
                      <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full opacity-15 transform -translate-x-8 -translate-y-8 group-hover:opacity-30 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10 space-y-6">
                          {displayedTestimonials.map((testimonial, index) => (
                              <div key={testimonial.id} className="group/item hover:bg-gradient-to-r hover:from-gray-700/50 hover:to-transparent rounded-xl p-4 transition-all duration-300 hover:transform hover:translate-x-2">
                                  <div className="flex items-start">
                                      <div className="relative mr-4">
                                          <div className="w-8 h-8 bg-gradient-to-br from-blue-700 to-blue-900 rounded-lg flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-all duration-300">
                                              <span className="text-white font-bold text-xs">{String(index + 1).padStart(2, '0')}</span>
                                          </div>
                                          <div className="absolute -inset-1 bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg blur opacity-30 group-hover/item:opacity-60 transition-opacity duration-300"></div>
                                      </div>
                                      <div className="flex-1">
                                          <blockquote className="text-white text-sm mb-3 leading-relaxed group-hover/item:text-blue-100 transition-all duration-300">
                                              <p>"{testimonial.quote}"</p>
                                          </blockquote>
                                          
                                          <div className="flex items-center justify-between">
                                              <div className="flex items-center space-x-3">
                                                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-xs">
                                                      {testimonial.avatar}
                                                  </div>
                                                  <div>
                                                      <div className="font-semibold text-white text-sm group-hover/item:text-blue-300 transition-all duration-300">{testimonial.name}</div>
                                                      <div className="text-gray-300 text-xs">{testimonial.title}</div>
                                                  </div>
                                              </div>
                                              <div className="flex space-x-1">
                                                  {renderStars(testimonial.rating)}
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>


              </div>

              {/* Image - Right Side */}
              <div className="flex-1 flex justify-center">
                  <div className="relative group">
                      {/* Glowing background effect */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-white/20 via-blue-300/30 to-white/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      
                      {/* Image container with enhanced styling */}
                      <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/20 shadow-2xl">
                          <img 
                              src="/images/indleaders.jpg" 
                              alt="Industry Leaders - Digital Innovation & Technology" 
                              className="w-full h-auto lg:max-w-md rounded-xl shadow-lg brightness-110 contrast-110 saturate-110 group-hover:scale-105 transition-all duration-500"
                          />
                          
                          {/* Overlay gradient for better contrast */}
                          <div className="absolute inset-4 rounded-xl bg-gradient-to-t from-transparent via-transparent to-white/10 pointer-events-none"></div>
                          
                          {/* Floating elements for tech feel */}
                          <div className="absolute top-2 right-2 w-3 h-3 bg-white/80 rounded-full animate-pulse"></div>
                          <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-300/80 rounded-full animate-ping"></div>
                      </div>
                      
                      {/* Professional Badge */}
                      <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-xl shadow-lg text-sm font-bold opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex items-center space-x-2">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                              </svg>
                              <span>Industry Leaders</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Custom CSS for Creative Animations */}
      <style jsx>{`
          /* Ethereal Digital Portals Animation */
          @keyframes portal-genesis {
              0%, 100% { opacity: 0.35; transform: rotate(0deg) scale(1); }
              50% { opacity: 0.55; transform: rotate(3deg) scale(1.05); }
          }
          .animate-portal-genesis {
              animation: portal-genesis 28s ease-in-out infinite;
          }

          @keyframes portal-1 {
              0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.7; }
              25% { transform: translate(25px, -15px) scale(1.3) rotate(90deg); opacity: 1; }
              50% { transform: translate(-10px, 30px) scale(0.8) rotate(180deg); opacity: 0.6; }
              75% { transform: translate(-20px, -10px) scale(1.1) rotate(270deg); opacity: 0.9; }
          }
          .animate-portal-1 {
              animation: portal-1 15s ease-in-out infinite;
          }

          @keyframes portal-2 {
              0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.8; }
              33% { transform: translate(-30px, 20px) scale(1.4) rotate(120deg); opacity: 1; }
              66% { transform: translate(20px, -25px) scale(0.7) rotate(240deg); opacity: 0.5; }
          }
          .animate-portal-2 {
              animation: portal-2 18s ease-in-out infinite 3s;
          }

          @keyframes portal-3 {
              0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.6; }
              50% { transform: translate(35px, 35px) scale(1.2) rotate(180deg); opacity: 1; }
          }
          .animate-portal-3 {
              animation: portal-3 12s ease-in-out infinite 6s;
          }

          @keyframes portal-4 {
              0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.9; }
              25% { transform: translate(-25px, -20px) scale(0.9) rotate(-60deg); opacity: 0.7; }
              75% { transform: translate(25px, 15px) scale(1.3) rotate(120deg); opacity: 1; }
          }
          .animate-portal-4 {
              animation: portal-4 20s ease-in-out infinite 2s;
          }

          /* Floating Crystalline Fractals Animation */
          @keyframes crystal-matrix {
              0%, 100% { opacity: 0.4; transform: scale(1) rotate(0deg); }
              50% { opacity: 0.65; transform: scale(1.03) rotate(2deg); }
          }
          .animate-crystal-matrix {
              animation: crystal-matrix 22s ease-in-out infinite;
          }

          @keyframes crystal-1 {
              0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.8; stroke-dasharray: 0, 50; }
              50% { transform: rotate(60deg) scale(1.2); opacity: 1; stroke-dasharray: 25, 25; }
          }
          .animate-crystal-1 {
              animation: crystal-1 8s ease-in-out infinite;
          }

          @keyframes crystal-2 {
              0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.7; stroke-dasharray: 10, 40; }
              50% { transform: rotate(-45deg) scale(1.3); opacity: 1; stroke-dasharray: 30, 20; }
          }
          .animate-crystal-2 {
              animation: crystal-2 10s ease-in-out infinite 2s;
          }

          @keyframes crystal-3 {
              0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.9; stroke-dasharray: 5, 45; }
              50% { transform: rotate(90deg) scale(0.9); opacity: 0.6; stroke-dasharray: 35, 15; }
          }
          .animate-crystal-3 {
              animation: crystal-3 7s ease-in-out infinite 4s;
          }

          @keyframes crystal-4 {
              0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.6; stroke-dasharray: 15, 35; }
              50% { transform: rotate(120deg) scale(1.1); opacity: 1; stroke-dasharray: 40, 10; }
          }
          .animate-crystal-4 {
              animation: crystal-4 9s ease-in-out infinite 1s;
          }

          @keyframes crystal-5 {
              0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.8; stroke-dasharray: 8, 42; }
              50% { transform: rotate(-90deg) scale(1.4); opacity: 1; stroke-dasharray: 25, 25; }
          }
          .animate-crystal-5 {
              animation: crystal-5 11s ease-in-out infinite 3s;
          }

          @keyframes crystal-6 {
              0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.7; stroke-dasharray: 20, 30; }
              50% { transform: rotate(180deg) scale(0.8); opacity: 0.5; stroke-dasharray: 45, 5; }
          }
          .animate-crystal-6 {
              animation: crystal-6 6s ease-in-out infinite 5s;
          }

          @keyframes crystal-connect-1 {
              0%, 100% { opacity: 0.4; stroke-dashoffset: 0; }
              50% { opacity: 0.8; stroke-dashoffset: 20; }
          }
          .animate-crystal-connect-1 {
              animation: crystal-connect-1 5s linear infinite;
          }

          @keyframes crystal-connect-2 {
              0%, 100% { opacity: 0.3; stroke-dashoffset: 15; }
              50% { opacity: 0.7; stroke-dashoffset: 0; }
          }
          .animate-crystal-connect-2 {
              animation: crystal-connect-2 6s linear infinite 2s;
          }

          @keyframes crystal-connect-3 {
              0%, 100% { opacity: 0.5; stroke-dashoffset: 25; }
              50% { opacity: 0.9; stroke-dashoffset: 5; }
          }
          .animate-crystal-connect-3 {
              animation: crystal-connect-3 4s linear infinite 1s;
          }

          @keyframes connection-3 {
              0%, 100% { opacity: 0.5; stroke-dasharray: 10, 90; }
              50% { opacity: 0.9; stroke-dasharray: 70, 30; }
          }
          .animate-connection-3 {
              animation: connection-3 5s ease-in-out infinite 2s;
          }

          @keyframes connection-4 {
              0%, 100% { opacity: 0.35; stroke-dasharray: 15, 85; }
              50% { opacity: 0.75; stroke-dasharray: 55, 45; }
          }
          .animate-connection-4 {
              animation: connection-4 8s ease-in-out infinite 1.5s;
          }

          @keyframes connection-5 {
              0%, 100% { opacity: 0.4; stroke-dasharray: 5, 95; }
              50% { opacity: 0.8; stroke-dasharray: 65, 35; }
          }
          .animate-connection-5 {
              animation: connection-5 6.5s ease-in-out infinite 3s;
          }

          @keyframes connection-6 {
              0%, 100% { opacity: 0.45; stroke-dasharray: 25, 75; }
              50% { opacity: 0.85; stroke-dasharray: 75, 25; }
          }
          .animate-connection-6 {
              animation: connection-6 7.5s ease-in-out infinite 0.8s;
          }

          /* Neural Network Pathways Animation */
          @keyframes neural-pulse {
              0%, 100% { opacity: 0.45; transform: scale(1) rotate(0deg); }
              50% { opacity: 0.7; transform: scale(1.02) rotate(1deg); }
          }
          .animate-neural-pulse {
              animation: neural-pulse 16s ease-in-out infinite;
          }

          @keyframes neuron-1 {
              0%, 100% { transform: scale(1); opacity: 0.8; filter: brightness(1); }
              50% { transform: scale(1.6); opacity: 1; filter: brightness(3); }
          }
          .animate-neuron-1 {
              animation: neuron-1 3s ease-in-out infinite;
          }

          @keyframes neuron-2 {
              0%, 100% { transform: scale(1); opacity: 0.7; filter: brightness(1); }
              50% { transform: scale(1.4); opacity: 1; filter: brightness(2.5); }
          }
          .animate-neuron-2 {
              animation: neuron-2 4s ease-in-out infinite 1s;
          }

          @keyframes neuron-3 {
              0%, 100% { transform: scale(1); opacity: 0.9; filter: brightness(1); }
              50% { transform: scale(1.8); opacity: 1; filter: brightness(4); }
          }
          .animate-neuron-3 {
              animation: neuron-3 2.5s ease-in-out infinite 2s;
          }

          @keyframes neuron-4 {
              0%, 100% { transform: scale(1); opacity: 0.6; filter: brightness(1); }
              50% { transform: scale(1.5); opacity: 1; filter: brightness(2.8); }
          }
          .animate-neuron-4 {
              animation: neuron-4 3.5s ease-in-out infinite 0.5s;
          }

          @keyframes neuron-5 {
              0%, 100% { transform: scale(1); opacity: 0.8; filter: brightness(1); }
              50% { transform: scale(1.7); opacity: 1; filter: brightness(3.5); }
          }
          .animate-neuron-5 {
              animation: neuron-5 2.8s ease-in-out infinite 1.5s;
          }

          @keyframes neuron-6 {
              0%, 100% { transform: scale(1); opacity: 0.75; filter: brightness(1); }
              50% { transform: scale(1.3); opacity: 1; filter: brightness(2.2); }
          }
          .animate-neuron-6 {
              animation: neuron-6 4.2s ease-in-out infinite 3s;
          }

          @keyframes synapse-1 {
              0%, 100% { stroke-dasharray: 0, 100; opacity: 0.4; }
              50% { stroke-dasharray: 50, 50; opacity: 0.9; }
          }
          .animate-synapse-1 {
              animation: synapse-1 5s ease-in-out infinite;
          }

          @keyframes synapse-2 {
              0%, 100% { stroke-dasharray: 20, 80; opacity: 0.3; }
              50% { stroke-dasharray: 60, 40; opacity: 0.8; }
          }
          .animate-synapse-2 {
              animation: synapse-2 6s ease-in-out infinite 1s;
          }

          @keyframes synapse-3 {
              0%, 100% { stroke-dasharray: 10, 90; opacity: 0.5; }
              50% { stroke-dasharray: 70, 30; opacity: 1; }
          }
          .animate-synapse-3 {
              animation: synapse-3 4s ease-in-out infinite 2s;
          }

          @keyframes synapse-4 {
              0%, 100% { stroke-dasharray: 15, 85; opacity: 0.35; }
              50% { stroke-dasharray: 55, 45; opacity: 0.85; }
          }
          .animate-synapse-4 {
              animation: synapse-4 7s ease-in-out infinite 1.5s;
          }

          @keyframes synapse-5 {
              0%, 100% { stroke-dasharray: 5, 95; opacity: 0.4; }
              50% { stroke-dasharray: 65, 35; opacity: 0.9; }
          }
          .animate-synapse-5 {
              animation: synapse-5 5.5s ease-in-out infinite 3s;
          }

          @keyframes synapse-6 {
              0%, 100% { stroke-dasharray: 25, 75; opacity: 0.45; }
              50% { stroke-dasharray: 75, 25; opacity: 0.95; }
          }
          .animate-synapse-6 {
              animation: synapse-6 6.5s ease-in-out infinite 0.8s;
          }

          /* Holographic Energy Waves Animation */
          @keyframes hologram-waves {
              0%, 100% { opacity: 0.42; transform: scale(1) rotateY(0deg); }
              50% { opacity: 0.68; transform: scale(1.02) rotateY(5deg); }
          }
          .animate-hologram-waves {
              animation: hologram-waves 24s ease-in-out infinite;
          }

          @keyframes holo-wave-1 {
              0%, 100% { transform: translateY(0px) scaleY(1); opacity: 0.7; }
              50% { transform: translateY(-15px) scaleY(1.2); opacity: 1; }
          }
          .animate-holo-wave-1 {
              animation: holo-wave-1 6s ease-in-out infinite;
          }

          @keyframes holo-wave-2 {
              0%, 100% { transform: translateY(0px) scaleY(1); opacity: 0.6; }
              50% { transform: translateY(20px) scaleY(0.8); opacity: 0.9; }
          }
          .animate-holo-wave-2 {
              animation: holo-wave-2 7s ease-in-out infinite 1s;
          }

          @keyframes holo-wave-3 {
              0%, 100% { transform: translateY(0px) scaleY(1); opacity: 0.8; }
              50% { transform: translateY(-10px) scaleY(1.3); opacity: 1; }
          }
          .animate-holo-wave-3 {
              animation: holo-wave-3 5s ease-in-out infinite 2s;
          }

          @keyframes holo-wave-4 {
              0%, 100% { transform: translateY(0px) scaleY(1); opacity: 0.5; }
              50% { transform: translateY(25px) scaleY(0.7); opacity: 0.8; }
          }
          .animate-holo-wave-4 {
              animation: holo-wave-4 8s ease-in-out infinite 0.5s;
          }

          @keyframes holo-wave-5 {
              0%, 100% { transform: translateY(0px) scaleY(1); opacity: 0.7; }
              50% { transform: translateY(-20px) scaleY(1.1); opacity: 1; }
          }
          .animate-holo-wave-5 {
              animation: holo-wave-5 6.5s ease-in-out infinite 1.5s;
          }

          @keyframes quantum-1 {
              0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.8; }
              25% { transform: translate(15px, -10px) scale(1.4); opacity: 1; }
              50% { transform: translate(-8px, 20px) scale(0.6); opacity: 0.6; }
              75% { transform: translate(-12px, -5px) scale(1.2); opacity: 0.9; }
          }
          .animate-quantum-1 {
              animation: quantum-1 8s ease-in-out infinite;
          }

          @keyframes quantum-2 {
              0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
              33% { transform: translate(-20px, 15px) scale(1.6); opacity: 1; }
              66% { transform: translate(25px, -18px) scale(0.4); opacity: 0.5; }
          }
          .animate-quantum-2 {
              animation: quantum-2 10s ease-in-out infinite 2s;
          }

          @keyframes quantum-3 {
              0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
              50% { transform: translate(18px, 25px) scale(1.8); opacity: 1; }
          }
          .animate-quantum-3 {
              animation: quantum-3 6s ease-in-out infinite 4s;
          }

          @keyframes quantum-4 {
              0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.9; }
              25% { transform: translate(-15px, -22px) scale(0.8); opacity: 0.7; }
              75% { transform: translate(22px, 12px) scale(1.3); opacity: 1; }
          }
          .animate-quantum-4 {
              animation: quantum-4 9s ease-in-out infinite 1s;
          }

          @keyframes quantum-5 {
              0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.8; }
              33% { transform: translate(28px, -16px) scale(1.5); opacity: 1; }
              66% { transform: translate(-14px, 20px) scale(0.7); opacity: 0.6; }
          }
          .animate-quantum-5 {
              animation: quantum-5 11s ease-in-out infinite 3s;
          }

          @keyframes quantum-6 {
              0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.75; }
              50% { transform: translate(-25px, -30px) scale(1.7); opacity: 1; }
          }
          .animate-quantum-6 {
              animation: quantum-6 7s ease-in-out infinite 5s;
          }

          @keyframes quantum-7 {
              0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.65; }
              25% { transform: translate(20px, 18px) scale(1.1); opacity: 0.9; }
              75% { transform: translate(-18px, -12px) scale(0.5); opacity: 0.4; }
          }
          .animate-quantum-7 {
              animation: quantum-7 12s ease-in-out infinite 1.5s;
          }

          @keyframes quantum-8 {
              0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
              33% { transform: translate(-22px, 8px) scale(1.4); opacity: 1; }
              66% { transform: translate(16px, -25px) scale(0.6); opacity: 0.5; }
          }
          .animate-quantum-8 {
              animation: quantum-8 8.5s ease-in-out infinite 2.5s;
          }

          /* DNA Cyber Animation */
          @keyframes dna-cyber {
              0%, 100% { opacity: 0.25; transform: rotateY(0deg) rotateX(0deg); }
              50% { opacity: 0.45; transform: rotateY(180deg) rotateX(10deg); }
          }
          .animate-dna-cyber {
              animation: dna-cyber 20s ease-in-out infinite;
          }

          @keyframes dna-strand-1 {
              0%, 100% { stroke-dasharray: 0, 200; opacity: 0.8; }
              50% { stroke-dasharray: 100, 100; opacity: 1; }
          }
          .animate-dna-strand-1 {
              animation: dna-strand-1 8s ease-in-out infinite;
          }

          @keyframes dna-strand-2 {
              0%, 100% { stroke-dasharray: 50, 150; opacity: 0.6; }
              50% { stroke-dasharray: 150, 50; opacity: 0.9; }
          }
          .animate-dna-strand-2 {
              animation: dna-strand-2 8s ease-in-out infinite 2s;
          }

          @keyframes dna-connect-1 { 
              0%, 100% { opacity: 0.6; transform: scaleX(1); }
              50% { opacity: 1; transform: scaleX(1.2); }
          }
          .animate-dna-connect-1 { animation: dna-connect-1 3s ease-in-out infinite; }

          @keyframes dna-connect-2 { 
              0%, 100% { opacity: 0.4; transform: scaleX(1); }
              50% { opacity: 0.8; transform: scaleX(0.8); }
          }
          .animate-dna-connect-2 { animation: dna-connect-2 3s ease-in-out infinite 1s; }

          @keyframes dna-connect-3 { 
              0%, 100% { opacity: 0.7; transform: scaleX(1); }
              50% { opacity: 1; transform: scaleX(1.3); }
          }
          .animate-dna-connect-3 { animation: dna-connect-3 3s ease-in-out infinite 2s; }

          @keyframes dna-connect-4 { 
              0%, 100% { opacity: 0.5; transform: scaleX(1); }
              50% { opacity: 0.9; transform: scaleX(0.7); }
          }
          .animate-dna-connect-4 { animation: dna-connect-4 3s ease-in-out infinite 0.5s; }

          @keyframes dna-connect-5 { 
              0%, 100% { opacity: 0.6; transform: scaleX(1); }
              50% { opacity: 1; transform: scaleX(1.1); }
          }
          .animate-dna-connect-5 { animation: dna-connect-5 3s ease-in-out infinite 1.5s; }

          /* Geometric Morphing Animation */
          @keyframes geo-morph {
              0%, 100% { opacity: 0.3; transform: rotate(0deg) scale(1); }
              50% { opacity: 0.5; transform: rotate(15deg) scale(1.1); }
          }
          .animate-geo-morph {
              animation: geo-morph 24s ease-in-out infinite;
          }

          @keyframes morph-shape-1 {
              0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.7; }
              25% { transform: rotate(90deg) scale(1.2); opacity: 1; }
              50% { transform: rotate(180deg) scale(0.8); opacity: 0.6; }
              75% { transform: rotate(270deg) scale(1.1); opacity: 0.9; }
          }
          .animate-morph-shape-1 {
              animation: morph-shape-1 16s ease-in-out infinite;
          }

          @keyframes morph-shape-2 {
              0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.5; }
              33% { transform: rotate(120deg) scale(1.3); opacity: 0.8; }
              66% { transform: rotate(240deg) scale(0.7); opacity: 0.4; }
          }
          .animate-morph-shape-2 {
              animation: morph-shape-2 12s ease-in-out infinite 4s;
          }

          @keyframes morph-shape-3 {
              0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.3; }
              50% { transform: rotate(180deg) scale(1.5); opacity: 0.7; }
          }
          .animate-morph-shape-3 {
              animation: morph-shape-3 8s ease-in-out infinite 8s;
          }

          /* Background Glow Animation */
          @keyframes background-glow {
              0%, 100% { 
                  box-shadow: inset 0 0 200px rgba(255, 255, 255, 0.18), 
                             inset 0 0 100px rgba(240, 248, 255, 0.15), 
                             inset 0 0 50px rgba(135, 206, 235, 0.12);
              }
              33% { 
                  box-shadow: inset 0 0 250px rgba(240, 248, 255, 0.22), 
                             inset 0 0 150px rgba(255, 255, 255, 0.18), 
                             inset 0 0 75px rgba(224, 246, 255, 0.15);
              }
              66% { 
                  box-shadow: inset 0 0 300px rgba(224, 246, 255, 0.20), 
                             inset 0 0 180px rgba(240, 248, 255, 0.17), 
                             inset 0 0 90px rgba(255, 255, 255, 0.15);
              }
          }
      `}</style>
    </div>
  );
};

export default Testimonials;
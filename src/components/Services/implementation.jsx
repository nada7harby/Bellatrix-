import React, { useState } from 'react';

const Implementation = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            {/* Hero Section */}
            <div className="min-h-screen relative overflow-hidden pt-20">
                {/* Background Video */}
                <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/Videos/implementation/homepage_hero.mp4" type="video/mp4" />
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
                
                {/* Content */}
                <div className="relative z-10 min-h-screen flex items-center justify-center">
                    <div className="w-full max-w-6xl mx-auto px-6">
                        


                        {/* Main Heading with Text Animation */}
                        <div className="text-center mb-8">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white animate-slide-up">
                                <span className="inline-block animate-text-glow">Where</span>{' '}
                                <span className="inline-block bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent animate-gradient-text">
                                    Vision
                                </span>{' '}
                                <span className="inline-block animate-text-glow delay-300">Meets</span>
                                <br />
                                <span className="inline-block bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent animate-gradient-text-reverse">
                                    Reality
                                </span>
                            </h1>
                        </div>
                        
                        {/* Creative Description with Typewriter Effect */}
                        <div className="text-center mb-12">
                            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto animate-fade-in">
                                We don't just implement solutions—we craft{' '}
                                <span className="relative inline-block">
                                    <span className="bg-gradient-to-r from-white to-white bg-clip-text text-transparent font-semibold">
                                        digital experiences
                                    </span>
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white to-white animate-underline-expand"></span>
                                </span>
                                {' '}that transform the way you do business
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="text-center">
                            <button 
                                onClick={openModal}
                                className="group relative px-10 py-4 bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-slide-up-delay border-2 border-white"
                            >
                                <span className="relative z-10 flex items-center justify-center">
                                    <svg className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    Start Implementation
                                </span>
                                <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-scroll-indicator"></div>
                    </div>
                </div>
            </div>

            {/* Our Implementation Process Section */}
            <div className="bg-gray-50 py-12">
                <div className="container mx-auto px-6">
                    {/* Section Header - Moved to Top */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                            Our Implementation <span className="text-blue-600">Process</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                            A proven methodology for seamless business transformation
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        {/* Process Animation - Left Side */}
                        <div className="flex-1 flex justify-center">
                            <div className="relative max-w-sm">
                                <img 
                                    src="/Videos/implementation/implementProcess.jpg" 
                                    alt="Implementation Process" 
                                    className="w-full h-auto rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                                />
                            </div>
                        </div>

                        {/* Process Content - Right Side */}
                        <div className="flex-1">
                            {/* Process Steps - Timeline Layout */}
                            <div className="relative">
                                {/* Central Timeline Line */}
                                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-300 via-blue-500 via-blue-700 to-blue-900"></div>
                                
                                <div className="space-y-6">
                                    {/* Step 1 */}
                                    <div className="relative flex items-start group">
                                        <div className="flex-shrink-0 w-12 h-12 bg-blue-300 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10 group-hover:scale-110 transition-all duration-300">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                        </div>
                                        <div className="ml-6 flex-1">
                                            <div className="bg-white p-4 rounded-xl border-2 border-blue-100 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg">
                                                <div className="flex items-center mb-2">
                                                    <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full mr-3">Step 1</span>
                                                    <h3 className="text-lg font-bold text-gray-800">Analysis & Planning</h3>
                                                </div>
                                                <p className="text-sm text-gray-600">System analysis and strategic roadmap creation</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="relative flex items-start group">
                                        <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10 group-hover:scale-110 transition-all duration-300">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div className="ml-6 flex-1">
                                            <div className="bg-white p-4 rounded-xl border-2 border-blue-100 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg">
                                                <div className="flex items-center mb-2">
                                                    <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full mr-3">Step 2</span>
                                                    <h3 className="text-lg font-bold text-gray-800">Design & Development</h3>
                                                </div>
                                                <p className="text-sm text-gray-600">Custom solution design and development</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Step 3 */}
                                    <div className="relative flex items-start group">
                                        <div className="flex-shrink-0 w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10 group-hover:scale-110 transition-all duration-300">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div className="ml-6 flex-1">
                                            <div className="bg-white p-4 rounded-xl border-2 border-blue-100 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg">
                                                <div className="flex items-center mb-2">
                                                    <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full mr-3">Step 3</span>
                                                    <h3 className="text-lg font-bold text-gray-800">Testing & Integration</h3>
                                                </div>
                                                <p className="text-sm text-gray-600">Quality assurance and system integration</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Step 4 */}
                                    <div className="relative flex items-start group">
                                        <div className="flex-shrink-0 w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10 group-hover:scale-110 transition-all duration-300">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <div className="ml-6 flex-1">
                                            <div className="bg-white p-4 rounded-xl border-2 border-blue-100 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg">
                                                <div className="flex items-center mb-2">
                                                    <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full mr-3">Step 4</span>
                                                    <h3 className="text-lg font-bold text-gray-800">Launch & Support</h3>
                                                </div>
                                                <p className="text-sm text-gray-600">Deployment and ongoing support</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div className="mt-6">
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                    Start Your Journey
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Bellatrix Section */}
              <div className="py-12 relative overflow-hidden animate-background-glow" style={{
                  backgroundColor: '#001038',
                  animation: 'background-glow 12s ease-in-out infinite'
              }}>
                {/* Ultra Creative Decorative Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                
                    {/* Holographic Grid Waves */}
                    <div className="absolute inset-0 opacity-60 animate-wave-flow">
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
                    <div className="absolute top-0 left-0 w-full h-full opacity-50 animate-neural-pulse">
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
                    
                    {/* DNA Helix Structure */}
                    <div className="absolute bottom-0 right-0 w-96 h-full opacity-45 animate-dna-rotate">
                        <svg viewBox="0 0 300 600" className="w-full h-full">
                            <defs>
                                <linearGradient id="dnaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{stopColor:'#ffffff', stopOpacity:0.9}} />
                                    <stop offset="50%" style={{stopColor:'#f0f8ff', stopOpacity:0.8}} />
                                    <stop offset="100%" style={{stopColor:'#87ceeb', stopOpacity:0.7}} />
                                </linearGradient>
                            </defs>
                            <g stroke="url(#dnaGrad)" strokeWidth="2" fill="none">
                                {/* DNA double helix */}
                                <path d="M50,0 Q100,50 150,100 Q200,150 250,200 Q200,250 150,300 Q100,350 50,400 Q100,450 150,500 Q200,550 250,600"/>
                                <path d="M250,0 Q200,50 150,100 Q100,150 50,200 Q100,250 150,300 Q200,350 250,400 Q200,450 150,500 Q100,550 50,600"/>
                                
                                {/* Base pairs */}
                                <line x1="100" y1="25" x2="200" y2="25" strokeWidth="1" opacity="0.6"/>
                                <line x1="125" y1="75" x2="175" y2="75" strokeWidth="1" opacity="0.6"/>
                                <line x1="100" y1="125" x2="200" y2="125" strokeWidth="1" opacity="0.6"/>
                                <line x1="125" y1="175" x2="175" y2="175" strokeWidth="1" opacity="0.6"/>
                                <line x1="100" y1="225" x2="200" y2="225" strokeWidth="1" opacity="0.6"/>
                                <line x1="125" y1="275" x2="175" y2="275" strokeWidth="1" opacity="0.6"/>
                                <line x1="100" y1="325" x2="200" y2="325" strokeWidth="1" opacity="0.6"/>
                                <line x1="125" y1="375" x2="175" y2="375" strokeWidth="1" opacity="0.6"/>
                                <line x1="100" y1="425" x2="200" y2="425" strokeWidth="1" opacity="0.6"/>
                                <line x1="125" y1="475" x2="175" y2="475" strokeWidth="1" opacity="0.6"/>
                                <line x1="100" y1="525" x2="200" y2="525" strokeWidth="1" opacity="0.6"/>
                            </g>
                        </svg>
                    </div>
                    
                    {/* Quantum Particles Field */}
                    <div className="absolute inset-0 opacity-40 animate-quantum-field">
                        <svg viewBox="0 0 1200 800" className="w-full h-full">
                            <defs>
                                <radialGradient id="quantumGrad1" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" style={{stopColor:'#ffffff', stopOpacity:1}} />
                                    <stop offset="100%" style={{stopColor:'#ffffff', stopOpacity:0}} />
                                </radialGradient>
                                <radialGradient id="quantumGrad2" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" style={{stopColor:'#f0f8ff', stopOpacity:1}} />
                                    <stop offset="100%" style={{stopColor:'#f0f8ff', stopOpacity:0}} />
                                </radialGradient>
                                <filter id="quantumGlow">
                                    <feGaussianBlur stdDeviation="30" result="coloredBlur"/>
                                    <feGaussianBlur stdDeviation="20" result="coloredBlur2"/>
                                    <feGaussianBlur stdDeviation="12" result="coloredBlur3"/>
                                    <feGaussianBlur stdDeviation="6" result="coloredBlur4"/>
                                    <feGaussianBlur stdDeviation="2" result="coloredBlur5"/>
                                    <feMerge>
                                        <feMergeNode in="coloredBlur"/>
                                        <feMergeNode in="coloredBlur2"/>
                                        <feMergeNode in="coloredBlur3"/>
                                        <feMergeNode in="coloredBlur4"/>
                                        <feMergeNode in="coloredBlur5"/>
                                        <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                            </defs>
                            <g filter="url(#quantumGlow)">
                                {/* Quantum particles */}
                                <circle cx="150" cy="200" r="8" fill="url(#quantumGrad1)" className="animate-quantum-drift"/>
                                <circle cx="350" cy="150" r="6" fill="url(#quantumGrad2)" className="animate-quantum-drift-delay-1"/>
                                <circle cx="550" cy="300" r="10" fill="url(#quantumGrad1)" className="animate-quantum-drift-delay-2"/>
                                <circle cx="750" cy="180" r="7" fill="url(#quantumGrad2)" className="animate-quantum-drift"/>
                                <circle cx="950" cy="250" r="9" fill="url(#quantumGrad1)" className="animate-quantum-drift-delay-1"/>
                                <circle cx="250" cy="400" r="5" fill="url(#quantumGrad2)" className="animate-quantum-drift-delay-2"/>
                                <circle cx="650" cy="500" r="8" fill="url(#quantumGrad1)" className="animate-quantum-drift"/>
                                <circle cx="850" cy="450" r="6" fill="url(#quantumGrad2)" className="animate-quantum-drift-delay-1"/>
                                
                                {/* Quantum entanglement lines */}
                                <path d="M150,200 Q350,100 550,300" stroke="url(#quantumGrad1)" strokeWidth="0.5" opacity="0.4" strokeDasharray="2,6" className="animate-entanglement"/>
                                <path d="M750,180 Q650,350 250,400" stroke="url(#quantumGrad2)" strokeWidth="0.5" opacity="0.4" strokeDasharray="2,6" className="animate-entanglement-delay"/>
                            </g>
                        </svg>
                    </div>
                    {/* Animated Hexagonal Network */}
                    <div className="absolute -top-20 -left-20 w-[500px] h-[500px] opacity-15 animate-spin-slow">
                        <svg viewBox="0 0 500 500" className="w-full h-full text-blue-400">
                            <defs>
                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                    <feMerge> 
                                        <feMergeNode in="coloredBlur"/>
                                        <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                            </defs>
                            <g filter="url(#glow)">
                                {/* Hexagonal network pattern */}
                                <polygon points="150,50 200,25 250,50 250,100 200,125 150,100" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                                <polygon points="250,50 300,25 350,50 350,100 300,125 250,100" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.7"/>
                                <polygon points="100,125 150,100 200,125 200,175 150,200 100,175" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"/>
                                <polygon points="200,125 250,100 300,125 300,175 250,200 200,175" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                                <polygon points="300,125 350,100 400,125 400,175 350,200 300,175" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6"/>
                                
                                {/* Connecting lines */}
                                <line x1="200" y1="125" x2="250" y2="100" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
                                <line x1="250" y1="100" x2="300" y2="125" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
                                <line x1="150" y1="100" x2="200" y2="125" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
                            </g>
                        </svg>
                    </div>
                    
                    {/* Morphing Curves with Gradient */}
                    <div className="absolute top-10 right-5 w-96 h-96 opacity-20 animate-morph">
                        <svg viewBox="0 0 400 400" className="w-full h-full">
                            <defs>
                                <linearGradient id="morphGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{stopColor:'#06b6d4', stopOpacity:1}} />
                                    <stop offset="50%" style={{stopColor:'#8b5cf6', stopOpacity:0.8}} />
                                    <stop offset="100%" style={{stopColor:'#06b6d4', stopOpacity:0.6}} />
                                </linearGradient>
                                <filter id="morphGlow">
                                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                                    <feMerge>
                                        <feMergeNode in="coloredBlur"/>
                                        <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                            </defs>
                            <path d="M50,200 Q200,50 350,200 Q200,350 50,200 Z" stroke="url(#morphGrad1)" strokeWidth="3" fill="none" filter="url(#morphGlow)"/>
                            <path d="M80,200 Q200,80 320,200 Q200,320 80,200 Z" stroke="url(#morphGrad1)" strokeWidth="2" fill="none" opacity="0.7"/>
                            <path d="M110,200 Q200,110 290,200 Q200,290 110,200 Z" stroke="url(#morphGrad1)" strokeWidth="1.5" fill="none" opacity="0.5"/>
                        </svg>
                    </div>
                    
                    {/* 3D Isometric Grid */}
                    <div className="absolute bottom-10 left-10 w-80 h-80 opacity-12 animate-float">
                        <svg viewBox="0 0 320 320" className="w-full h-full">
                            <defs>
                                <linearGradient id="isoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{stopColor:'#a855f7', stopOpacity:1}} />
                                    <stop offset="100%" style={{stopColor:'#3b82f6', stopOpacity:0.4}} />
                                </linearGradient>
                            </defs>
                            <g stroke="url(#isoGrad)" strokeWidth="1" fill="none">
                                {/* Isometric cube pattern */}
                                <path d="M80,120 L120,100 L160,120 L160,160 L120,180 L80,160 Z"/>
                                <path d="M160,120 L200,100 L240,120 L240,160 L200,180 L160,160 Z" opacity="0.8"/>
                                <path d="M120,160 L160,140 L200,160 L200,200 L160,220 L120,200 Z" opacity="0.6"/>
                                <path d="M200,160 L240,140 L280,160 L280,200 L240,220 L200,200 Z" opacity="0.7"/>
                                
                                {/* Connection lines */}
                                <line x1="120" y1="100" x2="120" y2="180" opacity="0.3"/>
                                <line x1="160" y1="120" x2="160" y2="220" opacity="0.3"/>
                                <line x1="200" y1="100" x2="200" y2="200" opacity="0.3"/>
                            </g>
                        </svg>
                    </div>
                    
                    {/* Particle Constellation */}
                    <div className="absolute top-1/3 left-1/3 w-72 h-72 opacity-18 animate-pulse-slow">
                        <svg viewBox="0 0 300 300" className="w-full h-full">
                            <defs>
                                <radialGradient id="particleGrad" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" style={{stopColor:'#06b6d4', stopOpacity:1}} />
                                    <stop offset="100%" style={{stopColor:'#06b6d4', stopOpacity:0}} />
                                </radialGradient>
                                <filter id="particleGlow">
                                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                                    <feMerge>
                                        <feMergeNode in="coloredBlur"/>
                                        <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                            </defs>
                            <g filter="url(#particleGlow)">
                                {/* Particles */}
                                <circle cx="50" cy="80" r="2" fill="url(#particleGrad)"/>
                                <circle cx="120" cy="60" r="3" fill="url(#particleGrad)"/>
                                <circle cx="180" cy="90" r="2.5" fill="url(#particleGrad)"/>
                                <circle cx="220" cy="120" r="2" fill="url(#particleGrad)"/>
                                <circle cx="160" cy="140" r="3.5" fill="url(#particleGrad)"/>
                                <circle cx="90" cy="160" r="2.5" fill="url(#particleGrad)"/>
                                <circle cx="200" cy="180" r="2" fill="url(#particleGrad)"/>
                                <circle cx="140" cy="220" r="3" fill="url(#particleGrad)"/>
                                
                                {/* Connecting constellation lines */}
                                <line x1="50" y1="80" x2="120" y2="60" stroke="#06b6d4" strokeWidth="0.5" opacity="0.4"/>
                                <line x1="120" y1="60" x2="180" y2="90" stroke="#06b6d4" strokeWidth="0.5" opacity="0.4"/>
                                <line x1="180" y1="90" x2="220" y2="120" stroke="#06b6d4" strokeWidth="0.5" opacity="0.4"/>
                                <line x1="160" y1="140" x2="90" y2="160" stroke="#06b6d4" strokeWidth="0.5" opacity="0.4"/>
                                <line x1="90" y1="160" x2="140" y2="220" stroke="#06b6d4" strokeWidth="0.5" opacity="0.4"/>
                                <line x1="200" y1="180" x2="140" y2="220" stroke="#06b6d4" strokeWidth="0.5" opacity="0.4"/>
                            </g>
                        </svg>
                    </div>
                    
                    {/* Spiral Galaxy */}
                    <div className="absolute bottom-20 right-20 w-64 h-64 opacity-16 animate-spin-reverse">
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                            <defs>
                                <linearGradient id="spiralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{stopColor:'#3b82f6', stopOpacity:0.8}} />
                                    <stop offset="50%" style={{stopColor:'#8b5cf6', stopOpacity:0.6}} />
                                    <stop offset="100%" style={{stopColor:'#06b6d4', stopOpacity:0.4}} />
                                </linearGradient>
                            </defs>
                            <path d="M100,100 Q120,80 140,100 Q120,120 100,100 Q80,80 60,100 Q80,120 100,100" 
                                  stroke="url(#spiralGrad)" strokeWidth="2" fill="none"/>
                            <path d="M100,100 Q130,70 160,100 Q130,130 100,100 Q70,70 40,100 Q70,130 100,100" 
                                  stroke="url(#spiralGrad)" strokeWidth="1.5" fill="none" opacity="0.7"/>
                            <path d="M100,100 Q140,60 180,100 Q140,140 100,100 Q60,60 20,100 Q60,140 100,100" 
                                  stroke="url(#spiralGrad)" strokeWidth="1" fill="none" opacity="0.5"/>
                        </svg>
                    </div>
                    
                    {/* Geometric Fractal */}
                    <div className="absolute top-1/2 right-1/4 w-56 h-56 opacity-14 animate-float-reverse">
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                            <defs>
                                <linearGradient id="fractalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{stopColor:'#f59e0b', stopOpacity:0.8}} />
                                    <stop offset="50%" style={{stopColor:'#ef4444', stopOpacity:0.6}} />
                                    <stop offset="100%" style={{stopColor:'#8b5cf6', stopOpacity:0.4}} />
                                </linearGradient>
                            </defs>
                            <g stroke="url(#fractalGrad)" strokeWidth="1.5" fill="none">
                                <polygon points="100,40 140,80 100,120 60,80" opacity="1"/>
                                <polygon points="100,60 120,80 100,100 80,80" opacity="0.8"/>
                                <polygon points="100,70 110,80 100,90 90,80" opacity="0.6"/>
                                
                                <polygon points="60,80 80,100 60,120 40,100" opacity="0.7"/>
                                <polygon points="140,80 160,100 140,120 120,100" opacity="0.7"/>
                                <polygon points="100,120 120,140 100,160 80,140" opacity="0.7"/>
                            </g>
                        </svg>
                    </div>
                    
                    {/* Advanced Matrix Code Rain */}
                    <div className="absolute top-0 left-1/2 w-48 h-full opacity-45 animate-matrix-cascade">
                        <svg viewBox="0 0 160 600" className="w-full h-full">
                            <defs>
                                <linearGradient id="matrixGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" style={{stopColor:'#ffffff', stopOpacity:1}} />
                                    <stop offset="70%" style={{stopColor:'#f0f8ff', stopOpacity:0.8}} />
                                    <stop offset="100%" style={{stopColor:'#87ceeb', stopOpacity:0.4}} />
                                </linearGradient>
                                <filter id="matrixGlow">
                                    <feGaussianBlur stdDeviation="15" result="coloredBlur"/>
                                    <feGaussianBlur stdDeviation="10" result="coloredBlur2"/>
                                    <feGaussianBlur stdDeviation="6" result="coloredBlur3"/>
                                    <feGaussianBlur stdDeviation="3" result="coloredBlur4"/>
                                    <feGaussianBlur stdDeviation="1" result="coloredBlur5"/>
                                    <feMerge>
                                        <feMergeNode in="coloredBlur"/>
                                        <feMergeNode in="coloredBlur2"/>
                                        <feMergeNode in="coloredBlur3"/>
                                        <feMergeNode in="coloredBlur4"/>
                                        <feMergeNode in="coloredBlur5"/>
                                        <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                            </defs>
                            <g filter="url(#matrixGlow)" fill="url(#matrixGrad)">
                                <text x="10" y="20" fontSize="10" className="animate-matrix-char">ネ</text>
                                <text x="30" y="40" fontSize="8" className="animate-matrix-char-delay-1">ト</text>
                                <text x="50" y="60" fontSize="12" className="animate-matrix-char-delay-2">ス</text>
                                <text x="70" y="80" fontSize="9" className="animate-matrix-char">イ</text>
                                <text x="90" y="100" fontSize="11" className="animate-matrix-char-delay-1">ー</text>
                                <text x="110" y="120" fontSize="8" className="animate-matrix-char-delay-2">ト</text>
                                <text x="130" y="140" fontSize="10" className="animate-matrix-char">ワ</text>
                                <text x="20" y="180" fontSize="9" className="animate-matrix-char-delay-1">ー</text>
                                <text x="40" y="220" fontSize="12" className="animate-matrix-char-delay-2">ク</text>
                                <text x="60" y="260" fontSize="8" className="animate-matrix-char">ス</text>
                                <text x="80" y="300" fontSize="11" className="animate-matrix-char-delay-1">0</text>
                                <text x="100" y="340" fontSize="9" className="animate-matrix-char-delay-2">1</text>
                                <text x="120" y="380" fontSize="10" className="animate-matrix-char">0</text>
                                <text x="25" y="420" fontSize="8" className="animate-matrix-char-delay-1">1</text>
                                <text x="45" y="460" fontSize="12" className="animate-matrix-char-delay-2">ネ</text>
                            </g>
                        </svg>
                    </div>
                    
                    {/* Energy Pulse Waves */}
                    <div className="absolute top-1/4 left-0 w-full h-1/2 opacity-35 animate-energy-pulse">
                        <svg viewBox="0 0 1200 400" className="w-full h-full">
                            <defs>
                                <linearGradient id="energyGrad" x1="0%" y1="50%" x2="100%" y2="50%">
                                    <stop offset="0%" style={{stopColor:'#ffffff', stopOpacity:0}} />
                                    <stop offset="30%" style={{stopColor:'#ffffff', stopOpacity:0.9}} />
                                    <stop offset="70%" style={{stopColor:'#f0f8ff', stopOpacity:0.9}} />
                                    <stop offset="100%" style={{stopColor:'#e0f6ff', stopOpacity:0}} />
                                </linearGradient>
                                <filter id="energyGlow">
                                    <feGaussianBlur stdDeviation="40" result="coloredBlur"/>
                                    <feGaussianBlur stdDeviation="25" result="coloredBlur2"/>
                                    <feGaussianBlur stdDeviation="15" result="coloredBlur3"/>
                                    <feGaussianBlur stdDeviation="8" result="coloredBlur4"/>
                                    <feGaussianBlur stdDeviation="3" result="coloredBlur5"/>
                                    <feMerge>
                                        <feMergeNode in="coloredBlur"/>
                                        <feMergeNode in="coloredBlur2"/>
                                        <feMergeNode in="coloredBlur3"/>
                                        <feMergeNode in="coloredBlur4"/>
                                        <feMergeNode in="coloredBlur5"/>
                                        <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                            </defs>
                            <g filter="url(#energyGlow)">
                                <ellipse cx="600" cy="200" rx="200" ry="30" fill="none" stroke="url(#energyGrad)" strokeWidth="3" className="animate-energy-ring"/>
                                <ellipse cx="600" cy="200" rx="300" ry="45" fill="none" stroke="url(#energyGrad)" strokeWidth="2" opacity="0.6" className="animate-energy-ring-delay-1"/>
                                <ellipse cx="600" cy="200" rx="400" ry="60" fill="none" stroke="url(#energyGrad)" strokeWidth="1" opacity="0.3" className="animate-energy-ring-delay-2"/>
                            </g>
                        </svg>
                    </div>
                    
                    {/* Cyber Circuit Board */}
                    <div className="absolute inset-0 opacity-30 animate-circuit-flow">
                        <svg viewBox="0 0 1200 800" className="w-full h-full">
                            <defs>
                                <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{stopColor:'#ffffff', stopOpacity:0.9}} />
                                    <stop offset="50%" style={{stopColor:'#f0f8ff', stopOpacity:0.7}} />
                                    <stop offset="100%" style={{stopColor:'#87ceeb', stopOpacity:0.5}} />
                                </linearGradient>
                            </defs>
                            <g stroke="url(#circuitGrad)" strokeWidth="1" fill="none">
                                {/* Circuit paths */}
                                <path d="M100,100 L200,100 L200,200 L300,200 L300,300 L400,300" strokeDasharray="5,5" className="animate-circuit-data"/>
                                <path d="M500,150 L600,150 L600,250 L700,250 L700,350 L800,350" strokeDasharray="3,7" className="animate-circuit-data-delay-1"/>
                                <path d="M150,400 L250,400 L250,500 L350,500 L350,600 L450,600" strokeDasharray="4,6" className="animate-circuit-data-delay-2"/>
                                <path d="M900,100 L1000,100 L1000,200 L1100,200" strokeDasharray="6,4" className="animate-circuit-data"/>
                                
                                {/* Circuit nodes */}
                                <circle cx="200" cy="200" r="3" fill="url(#circuitGrad)" className="animate-circuit-node"/>
                                <circle cx="300" cy="300" r="4" fill="url(#circuitGrad)" className="animate-circuit-node-delay-1"/>
                                <circle cx="600" cy="250" r="3" fill="url(#circuitGrad)" className="animate-circuit-node-delay-2"/>
                                <circle cx="700" cy="350" r="5" fill="url(#circuitGrad)" className="animate-circuit-node"/>
                                <circle cx="250" cy="500" r="3" fill="url(#circuitGrad)" className="animate-circuit-node-delay-1"/>
                                <circle cx="350" cy="600" r="4" fill="url(#circuitGrad)" className="animate-circuit-node-delay-2"/>
                                <circle cx="1000" cy="200" r="3" fill="url(#circuitGrad)" className="animate-circuit-node"/>
                            </g>
                        </svg>
                    </div>
                </div>
                
                <div className="container mx-auto px-6 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Why Choose <span className="text-blue-400">Bellatrix</span> for Implementation?
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                            We bring years of expertise, proven methodologies, and cutting-edge solutions to ensure your implementation success
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        {/* Features Content - Left Side */}
                        <div className="flex-1">
                            <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-800/90 rounded-3xl p-8 border border-gray-600/50 shadow-2xl hover:shadow-blue-500/20 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group backdrop-blur-sm">
                                {/* Creative Background Elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full opacity-20 transform translate-x-16 -translate-y-16 group-hover:opacity-40 transition-opacity duration-500"></div>
                                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-500/30 to-blue-500/30 rounded-full opacity-20 transform -translate-x-10 translate-y-10 group-hover:opacity-40 transition-opacity duration-500"></div>
                                <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full opacity-15 transform -translate-x-8 -translate-y-8 group-hover:opacity-30 transition-opacity duration-500"></div>
                                
                                <div className="relative z-10 space-y-4">
                                    {/* Feature 1 */}
                                     <div className="group/item hover:bg-gradient-to-r hover:from-gray-700/50 hover:to-transparent rounded-xl p-3 transition-all duration-300 hover:transform hover:translate-x-2">
                                        <div className="flex items-center">
                                            <div className="relative mr-3">
                                                 <div className="w-7 h-7 bg-gradient-to-br from-blue-700 to-blue-900 rounded-lg flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-all duration-300">
                                                    <span className="text-white font-bold text-xs">01</span>
                                                </div>
                                                 <div className="absolute -inset-1 bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg blur opacity-30 group-hover/item:opacity-60 transition-opacity duration-300"></div>
                                            </div>
                                            <div className="flex-1">
                                                 <h3 className="text-lg font-bold text-white mb-1 group-hover/item:text-blue-300 transition-all duration-300">Proven Expertise</h3>
                                                 <p className="text-sm text-gray-300">500+ successful implementations across industries</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Feature 2 */}
                                     <div className="group/item hover:bg-gradient-to-r hover:from-gray-700/50 hover:to-transparent rounded-xl p-3 transition-all duration-300 hover:transform hover:translate-x-2">
                                        <div className="flex items-center">
                                            <div className="relative mr-3">
                                                 <div className="w-7 h-7 bg-gradient-to-br from-blue-800 to-blue-950 rounded-lg flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-all duration-300">
                                                    <span className="text-white font-bold text-xs">02</span>
                                                </div>
                                                 <div className="absolute -inset-1 bg-gradient-to-r from-blue-800 to-blue-950 rounded-lg blur opacity-30 group-hover/item:opacity-60 transition-opacity duration-300"></div>
                                            </div>
                                            <div className="flex-1">
                                                 <h3 className="text-lg font-bold text-white mb-1 group-hover/item:text-blue-300 transition-all duration-300">Rapid Deployment</h3>
                                                 <p className="text-sm text-gray-300">50% faster implementation with proven tools</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Feature 3 */}
                                     <div className="group/item hover:bg-gradient-to-r hover:from-gray-700/50 hover:to-transparent rounded-xl p-3 transition-all duration-300 hover:transform hover:translate-x-2">
                                        <div className="flex items-center">
                                            <div className="relative mr-3">
                                                 <div className="w-7 h-7 bg-gradient-to-br from-blue-900 to-slate-900 rounded-lg flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-all duration-300">
                                                    <span className="text-white font-bold text-xs">03</span>
                                                </div>
                                                 <div className="absolute -inset-1 bg-gradient-to-r from-blue-900 to-slate-900 rounded-lg blur opacity-30 group-hover/item:opacity-60 transition-opacity duration-300"></div>
                                            </div>
                                            <div className="flex-1">
                                                 <h3 className="text-lg font-bold text-white mb-1 group-hover/item:text-blue-300 transition-all duration-300">24/7 Support</h3>
                                                 <p className="text-sm text-gray-300">Round-the-clock technical support & monitoring</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Feature 4 */}
                                     <div className="group/item hover:bg-gradient-to-r hover:from-gray-700/50 hover:to-transparent rounded-xl p-3 transition-all duration-300 hover:transform hover:translate-x-2">
                                        <div className="flex items-center">
                                            <div className="relative mr-3">
                                                 <div className="w-7 h-7 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-all duration-300">
                                                    <span className="text-white font-bold text-xs">04</span>
                                                </div>
                                                 <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg blur opacity-30 group-hover/item:opacity-60 transition-opacity duration-300"></div>
                                            </div>
                                            <div className="flex-1">
                                                 <h3 className="text-lg font-bold text-white mb-1 group-hover/item:text-blue-300 transition-all duration-300">Expert Team</h3>
                                                 <p className="text-sm text-gray-300">Certified professionals with deep expertise</p>
                                            </div>
                                        </div>
                                    </div>
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
                                        src="/Videos/implementation/whyChoese.jpg" 
                                        alt="Why Choose Bellatrix - Digital Innovation & Technology" 
                                        className="w-full h-auto lg:max-w-md rounded-xl shadow-lg brightness-110 contrast-110 saturate-110 group-hover:scale-105 transition-all duration-500"
                                    />
                                    
                                    {/* Overlay gradient for better contrast */}
                                    <div className="absolute inset-4 rounded-xl bg-gradient-to-t from-transparent via-transparent to-white/10 pointer-events-none"></div>
                                    
                                    {/* Floating elements for tech feel */}
                                    <div className="absolute top-2 right-2 w-3 h-3 bg-white/80 rounded-full animate-pulse"></div>
                                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-300/80 rounded-full animate-ping"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing Section */}
            <div className="bg-gray-50 py-12">
                <div className="container mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                            Implementation <span className="text-blue-600">Pricing</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            Choose the perfect implementation plan that fits your business needs and budget
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Basic Plan */}
                        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-300 transition-all duration-300">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Basic</h3>
                                <p className="text-gray-600 mb-6">Perfect for small businesses</p>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-gray-800">$2,500</span>
                                    <span className="text-gray-600 ml-2">starting from</span>
                                </div>
                            </div>
                            
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">Basic system analysis</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">Standard implementation</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">Basic testing & QA</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">30 days support</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">Email support</span>
                                </li>
                            </ul>
                            
                            <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                                Get Started
                            </button>
                        </div>

                        {/* Professional Plan - Most Popular */}
                        <div className="bg-white rounded-2xl p-8 border-2 border-blue-500 relative hover:border-blue-600 transition-all duration-300 transform scale-105">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                            </div>
                            
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Professional</h3>
                                <p className="text-gray-600 mb-6">Ideal for growing companies</p>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-blue-600">$5,000</span>
                                    <span className="text-gray-600 ml-2">starting from</span>
                                </div>
                            </div>
                            
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">Comprehensive analysis</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">Custom implementation</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">Advanced testing & QA</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">90 days support</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">Phone & email support</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">Training sessions</span>
                                </li>
                            </ul>
                            
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                                Get Started
                            </button>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-300 transition-all duration-300">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Enterprise</h3>
                                <p className="text-gray-600 mb-6">For large organizations</p>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-gray-800">Custom</span>
                                    <span className="text-gray-600 ml-2">pricing</span>
                                </div>
                            </div>
                            
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">Enterprise-grade analysis</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">Fully customized solution</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">Comprehensive testing</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">Unlimited support</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">24/7 dedicated support</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">On-site training</span>
                                </li>
                            </ul>
                            
                            <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                                Contact Sales
                            </button>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="text-center mt-12">
                        <p className="text-gray-600 mb-4">All plans include free consultation and project scoping</p>
                        <p className="text-sm text-gray-500">Need a custom solution? <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Contact our team</span> for personalized pricing</p>
                    </div>
                </div>
            </div>

            {/* Ready for Implementation CTA Section */}
            <div className="relative py-16 overflow-hidden" style={{backgroundColor: '#001038'}}>
                {/* Simple Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <svg width="100%" height="100%" viewBox="0 0 100 100" className="text-blue-300">
                            <pattern id="simpleGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <circle cx="1" cy="1" r="1" fill="currentColor" opacity="0.3"/>
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#simpleGrid)" />
                        </svg>
                    </div>
                </div>

                {/* Subtle Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-blue-800/10"></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Ready for a Seamless <span className="text-blue-400">NetSuite Implementation?</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
                            Transform your business operations with our expert NetSuite implementation services. 
                            Let's turn your vision into reality with proven methodologies and dedicated support.
                        </p>
                        
                        {/* CTA Button */}
                        <div className="mb-16">
                            <button 
                                onClick={openModal}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                            >
                                Get Started Today
                            </button>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Quick Response */}
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Quick Response</h3>
                                <p className="text-gray-300 text-sm">Get a detailed proposal within 24 hours</p>
                            </div>
                            
                            {/* Proven Success */}
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                                <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Proven Success</h3>
                                <p className="text-gray-300 text-sm">99.9% implementation success rate</p>
                            </div>
                            
                            {/* Expert Support */}
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                                <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Expert Support</h3>
                                <p className="text-gray-300 text-sm">Dedicated team of certified professionals</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/10 flex items-center justify-center z-50 p-4">
                    <div className="bg-white/10 backdrop-blur-xl rounded-2xl max-w-3xl w-full h-auto relative transform transition-all duration-300 scale-100 shadow-2xl border border-white/20" style={{backgroundColor: '#001038', backdropFilter: 'blur(20px)'}}>
                        {/* Header */}
                        <div className="rounded-t-2xl p-4 text-white relative border-b border-white/20" style={{backgroundColor: '#001038'}}>
                            <button 
                                onClick={closeModal}
                                className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            
                            <div className="text-center">
                                <h3 className="text-xl font-bold mb-1 text-white">Contact Us</h3>
                                <p className="text-gray-300 text-sm">Let's discuss your project</p>
                            </div>
                        </div>
                        
                        {/* Form Content */}
                        <div className="p-6" style={{backgroundColor: '#001038'}}>
                            <form className="space-y-4">
                                {/* Main Fields in Two Columns */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Left Column - Contact Info */}
                                    <div className="space-y-3">
                                        <h4 className="text-base font-semibold text-white mb-2 border-b border-white/20 pb-1">Contact Information</h4>
                                        
                                        <div>
                                            <label className="text-sm font-medium text-gray-300">Full Name *</label>
                                            <input 
                                                type="text" 
                                                className="w-full px-3 py-2 mt-1 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-400"
                                                placeholder="John Doe"
                                                required
                                            />
                                        </div>
                                        
                                        <div>
                                            <label className="text-sm font-medium text-gray-300">Email Address *</label>
                                            <input 
                                                type="email" 
                                                className="w-full px-3 py-2 mt-1 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-400"
                                                placeholder="john@company.com"
                                                required
                                            />
                                        </div>
                                        
                                        <div>
                                            <label className="text-sm font-medium text-gray-300">Phone Number</label>
                                            <input 
                                                type="tel" 
                                                className="w-full px-3 py-2 mt-1 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-400"
                                                placeholder="+1 (555) 123-4567"
                                            />
                                        </div>
                                    </div>
                                    
                                    {/* Right Column - Company Info */}
                                    <div className="space-y-3">
                                        <h4 className="text-base font-semibold text-white mb-2 border-b border-white/20 pb-1">Company Details</h4>
                                        
                                        <div>
                                            <label className="text-sm font-medium text-gray-300">Company Name</label>
                                            <input 
                                                type="text" 
                                                className="w-full px-3 py-2 mt-1 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-400"
                                                placeholder="Your Company Inc."
                                            />
                                        </div>
                                        
                                        <div>
                                            <label className="text-sm font-medium text-gray-300">Industry</label>
                                            <select className="w-full px-3 py-2 mt-1 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 text-white">
                                                <option value="" className="bg-gray-800 text-white">Select Industry</option>
                                                <option value="manufacturing" className="bg-gray-800 text-white">Manufacturing</option>
                                                <option value="retail" className="bg-gray-800 text-white">Retail & E-commerce</option>
                                                <option value="healthcare" className="bg-gray-800 text-white">Healthcare</option>
                                                <option value="finance" className="bg-gray-800 text-white">Finance & Banking</option>
                                                <option value="technology" className="bg-gray-800 text-white">Technology</option>
                                                <option value="consulting" className="bg-gray-800 text-white">Professional Services</option>
                                                <option value="nonprofit" className="bg-gray-800 text-white">Non-Profit</option>
                                                <option value="other" className="bg-gray-800 text-white">Other</option>
                                            </select>
                                        </div>
                                        
                                        <div>
                                            <label className="text-sm font-medium text-gray-300">Country</label>
                                            <select className="w-full px-3 py-2 mt-1 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 text-white">
                                                <option value="" className="bg-gray-800 text-white">Select Country</option>
                                                <option value="us" className="bg-gray-800 text-white">United States</option>
                                                <option value="canada" className="bg-gray-800 text-white">Canada</option>
                                                <option value="uk" className="bg-gray-800 text-white">United Kingdom</option>
                                                <option value="australia" className="bg-gray-800 text-white">Australia</option>
                                                <option value="germany" className="bg-gray-800 text-white">Germany</option>
                                                <option value="france" className="bg-gray-800 text-white">France</option>
                                                <option value="uae" className="bg-gray-800 text-white">United Arab Emirates</option>
                                                <option value="saudi" className="bg-gray-800 text-white">Saudi Arabia</option>
                                                <option value="egypt" className="bg-gray-800 text-white">Egypt</option>
                                                <option value="other" className="bg-gray-800 text-white">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Message Section - Full Width */}
                                <div>
                                    <label className="text-sm font-medium text-gray-300">Message</label>
                                    <textarea 
                                        rows="3" 
                                        className="w-full px-3 py-2 mt-1 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 resize-none text-white placeholder-gray-400"
                                        placeholder="Tell us about your project requirements..."
                                    ></textarea>
                                </div>
                                
                                {/* Submit Section */}
                                <div className="flex items-center justify-between pt-3 border-t border-white/20">
                                    <p className="text-xs text-gray-400">
                                        ✓ 24hr response
                                    </p>
                                    <button 
                                        type="submit"
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Custom CSS for Creative Animations */}
            <style jsx>{`
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

                /* New Creative Animations */
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

                @keyframes slide-up-delay-2 {
                    0% { opacity: 0; transform: translateY(30px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-slide-up-delay-2 {
                    animation: slide-up-delay-2 1s ease-out 0.6s both;
                }

                @keyframes fade-in {
                    0% { opacity: 0; }
                    100% { opacity: 1; }
                }
                .animate-fade-in {
                    animation: fade-in 1.5s ease-out 0.5s both;
                }

                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out;
                }

                @keyframes fade-in-up-delay {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up-delay {
                    animation: fade-in-up-delay 1s ease-out 1s both;
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

                @keyframes gradient-text-reverse {
                    0%, 100% { background-position: 100% 50%; }
                    50% { background-position: 0% 50%; }
                }
                .animate-gradient-text-reverse {
                    background-size: 200% 200%;
                    animation: gradient-text-reverse 3s ease-in-out infinite;
                }

                @keyframes underline-expand {
                    0% { width: 0%; }
                    100% { width: 100%; }
                }
                .animate-underline-expand {
                    animation: underline-expand 1s ease-out 1.5s both;
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

                /* Creative Animations */
                @keyframes spin-slow {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }

                @keyframes spin-reverse {
                    0% { transform: rotate(360deg); }
                    100% { transform: rotate(0deg); }
                }
                .animate-spin-reverse {
                    animation: spin-reverse 15s linear infinite;
                }

                @keyframes morph {
                    0%, 100% { transform: scale(1) rotate(0deg); }
                    25% { transform: scale(1.1) rotate(90deg); }
                    50% { transform: scale(0.9) rotate(180deg); }
                    75% { transform: scale(1.05) rotate(270deg); }
                }
                .animate-morph {
                    animation: morph 12s ease-in-out infinite;
                }

                @keyframes float-reverse {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    33% { transform: translateY(-15px) translateX(10px); }
                    66% { transform: translateY(10px) translateX(-8px); }
                }
                .animate-float-reverse {
                    animation: float-reverse 8s ease-in-out infinite;
                }

                @keyframes binary-rain {
                    0% { transform: translateY(-100%); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateY(100%); opacity: 0; }
                }
                .animate-binary-rain {
                    animation: binary-rain 10s linear infinite;
                }

                /* Ultra Creative Animations */
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
                    0%, 100% { opacity: 0.5; transform: scale(1); filter: brightness(2); }
                    50% { opacity: 0.8; transform: scale(1.1); filter: brightness(4); }
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

                @keyframes dna-rotate {
                    0% { transform: rotateY(0deg) rotateX(10deg); }
                    25% { transform: rotateY(90deg) rotateX(15deg); }
                    50% { transform: rotateY(180deg) rotateX(10deg); }
                    75% { transform: rotateY(270deg) rotateX(15deg); }
                    100% { transform: rotateY(360deg) rotateX(10deg); }
                }
                .animate-dna-rotate {
                    animation: dna-rotate 20s linear infinite;
                    transform-style: preserve-3d;
                }

                @keyframes quantum-field {
                    0%, 100% { opacity: 0.4; transform: scale(1) rotate(0deg); filter: brightness(2.5); }
                    33% { opacity: 0.7; transform: scale(1.05) rotate(120deg); filter: brightness(4.5); }
                    66% { opacity: 0.55; transform: scale(0.95) rotate(240deg); filter: brightness(3.5); }
                }
                .animate-quantum-field {
                    animation: quantum-field 25s ease-in-out infinite;
                }

                @keyframes quantum-drift {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    25% { transform: translate(20px, -15px) scale(1.2); }
                    50% { transform: translate(-10px, 25px) scale(0.8); }
                    75% { transform: translate(15px, -20px) scale(1.1); }
                }
                .animate-quantum-drift {
                    animation: quantum-drift 12s ease-in-out infinite;
                }
                .animate-quantum-drift-delay-1 {
                    animation: quantum-drift 12s ease-in-out infinite 4s;
                }
                .animate-quantum-drift-delay-2 {
                    animation: quantum-drift 12s ease-in-out infinite 8s;
                }

                @keyframes entanglement {
                    0%, 100% { stroke-dashoffset: 0; opacity: 0.2; }
                    50% { stroke-dashoffset: 50; opacity: 0.6; }
                }
                .animate-entanglement {
                    animation: entanglement 6s ease-in-out infinite;
                }
                .animate-entanglement-delay {
                    animation: entanglement 6s ease-in-out infinite 3s;
                }

                /* Matrix & Cyber Effects */
                @keyframes matrix-cascade {
                    0%, 100% { transform: translateY(-100%) rotateX(0deg); opacity: 0.12; }
                    50% { transform: translateY(100%) rotateX(180deg); opacity: 0.25; }
                }
                .animate-matrix-cascade {
                    animation: matrix-cascade 18s linear infinite;
                }

                @keyframes matrix-char {
                    0%, 100% { opacity: 0.8; transform: scale(1); filter: brightness(3); }
                    25% { opacity: 1; transform: scale(1.3); filter: brightness(6); }
                    50% { opacity: 0.9; transform: scale(0.8); filter: brightness(4.5); }
                    75% { opacity: 0.98; transform: scale(1.2); filter: brightness(5.5); }
                }
                .animate-matrix-char {
                    animation: matrix-char 2s ease-in-out infinite;
                }
                .animate-matrix-char-delay-1 {
                    animation: matrix-char 2s ease-in-out infinite 0.7s;
                }
                .animate-matrix-char-delay-2 {
                    animation: matrix-char 2s ease-in-out infinite 1.4s;
                }

                @keyframes energy-pulse {
                    0%, 100% { opacity: 0.35; transform: scale(1) rotateZ(0deg); filter: brightness(3); }
                    33% { opacity: 0.65; transform: scale(1.1) rotateZ(120deg); filter: brightness(5.5); }
                    66% { opacity: 0.5; transform: scale(0.9) rotateZ(240deg); filter: brightness(4); }
                }
                .animate-energy-pulse {
                    animation: energy-pulse 20s ease-in-out infinite;
                }

                @keyframes energy-ring {
                    0%, 100% { stroke-dasharray: 0, 100; transform: scale(1); }
                    50% { stroke-dasharray: 50, 50; transform: scale(1.2); }
                }
                .animate-energy-ring {
                    animation: energy-ring 8s ease-in-out infinite;
                }
                .animate-energy-ring-delay-1 {
                    animation: energy-ring 8s ease-in-out infinite 2.7s;
                }
                .animate-energy-ring-delay-2 {
                    animation: energy-ring 8s ease-in-out infinite 5.4s;
                }

                @keyframes circuit-flow {
                    0%, 100% { opacity: 0.06; transform: translateX(0) rotateY(0deg); }
                    50% { opacity: 0.12; transform: translateX(20px) rotateY(180deg); }
                }
                .animate-circuit-flow {
                    animation: circuit-flow 16s ease-in-out infinite;
                }

                @keyframes circuit-data {
                    0% { stroke-dashoffset: 100; opacity: 0.3; }
                    50% { opacity: 0.8; }
                    100% { stroke-dashoffset: 0; opacity: 0.3; }
                }
                .animate-circuit-data {
                    animation: circuit-data 5s linear infinite;
                }
                .animate-circuit-data-delay-1 {
                    animation: circuit-data 5s linear infinite 1.7s;
                }
                .animate-circuit-data-delay-2 {
                    animation: circuit-data 5s linear infinite 3.4s;
                }

                @keyframes circuit-node {
                    0%, 100% { transform: scale(1.2); opacity: 0.9; filter: brightness(3); }
                    50% { transform: scale(3); opacity: 1; filter: brightness(6.5); }
                }
                .animate-circuit-node {
                    animation: circuit-node 4s ease-in-out infinite;
                }
                .animate-circuit-node-delay-1 {
                    animation: circuit-node 4s ease-in-out infinite 1.3s;
                }
                .animate-circuit-node-delay-2 {
                    animation: circuit-node 4s ease-in-out infinite 2.6s;
                }

                /* Enhanced Background Glow */
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
        </>
    );
}

export default Implementation;

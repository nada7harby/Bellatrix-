import React from 'react';

const Training = () => {
    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    
                    @keyframes bounceSubtle {
                        0%, 100% {
                            transform: translateY(0);
                        }
                        50% {
                            transform: translateY(-3px);
                        }
                    }
                    
                    .animate-fade-in-up {
                        animation: fadeInUp 0.6s ease-out forwards;
                        opacity: 0;
                    }
                    
                    .animate-bounce-subtle {
                        animation: bounceSubtle 3s ease-in-out infinite;
                    }
                    
                    @keyframes float {
                        0%, 100% {
                            transform: translateY(0) rotate(0deg);
                        }
                        50% {
                            transform: translateY(-10px) rotate(2deg);
                        }
                    }
                    
                    @keyframes swing {
                        0%, 100% {
                            transform: rotate(0deg) scale(1);
                        }
                        25% {
                            transform: rotate(3deg) scale(1.02);
                        }
                        75% {
                            transform: rotate(-3deg) scale(1.02);
                        }
                    }
                    
                    .animate-float {
                        animation: float 4s ease-in-out infinite;
                    }
                    
                    .animate-swing {
                        animation: swing 6s ease-in-out infinite;
                    }
                `
            }} />
        <div className="bg-gray-50">
            {/* Hero Section with Video */}
            <div className="relative min-h-screen overflow-hidden">
                {/* Video Background */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    controls={false}
                    style={{ 
                        marginTop: '80px', 
                        height: 'calc(100vh - 80px)', 
                        filter: 'brightness(0.5)' 
                    }}
                >
                    <source src="/trainingHeroSectionTwo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                
                {/* Overlay */}
                <div 
                    className="absolute left-0 right-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 flex items-center justify-center z-10"
                    style={{ 
                        top: '80px', 
                        height: 'calc(100vh - 80px)' 
                    }}
                >
                    <div className="text-center text-white px-4 max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Professional Training Programs
                        </h1>
                        <p className="text-xl md:text-2xl leading-relaxed mb-8">
                            Empower your team with comprehensive training solutions designed to enhance 
                            skills, boost productivity, and drive business success. Our expert-led programs 
                            deliver practical knowledge and real-world applications.
                        </p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                            Explore Training Options
                        </button>
                    </div>
                </div>
            </div>

            {/* Our Training Programs Section */}
            <div className="bg-gray-50 py-12">
                <div className="container mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                            Our Training <span className="text-blue-600">Programs</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                            Comprehensive training solutions designed to empower your team with the skills they need to excel
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        {/* Image - Left Side */}
                        <div className="flex-1 flex justify-center">
                            <img 
                                src="/TrainingProgram.png" 
                                alt="Training Programs" 
                                className="max-w-full h-auto lg:max-w-md rounded-2xl animate-float hover:animate-swing"
                            />
                        </div>

                        {/* Training Programs Content - Right Side */}
                        <div className="flex-1">
                            {/* Training Program Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Program 1 */}
                                <div className="text-center p-5 bg-white rounded-xl border-2 border-blue-100 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300">
                                    <div className="w-14 h-14 bg-blue-300 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">NetSuite Fundamentals</h3>
                                    <p className="text-sm text-gray-600">Core concepts and navigation basics</p>
                                </div>

                                {/* Program 2 */}
                                <div className="text-center p-5 bg-white rounded-xl border-2 border-blue-100 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300">
                                    <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">Advanced Modules</h3>
                                    <p className="text-sm text-gray-600">Financial management and reporting</p>
                                </div>

                                {/* Program 3 */}
                                <div className="text-center p-5 bg-white rounded-xl border-2 border-blue-100 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300">
                                    <div className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">Customization Training</h3>
                                    <p className="text-sm text-gray-600">Workflows, forms, and custom fields</p>
                                </div>

                                {/* Program 4 */}
                                <div className="text-center p-5 bg-white rounded-xl border-2 border-blue-100 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300">
                                    <div className="w-14 h-14 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">Admin Training</h3>
                                    <p className="text-sm text-gray-600">User management and security</p>
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div className="mt-6">
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                    Explore Training Programs
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Our Training Section */}
            <div className="bg-white py-12">
                <div className="container mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                            Why Choose Our <span className="text-blue-600">Training?</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            We provide world-class training solutions that combine expertise, innovation, and practical application to ensure your team's success
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Features Grid - Left Side */}
                        <div className="flex-1">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Feature 1 */}
                                <div className="group relative overflow-hidden bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 p-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500 rounded-bl-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 animate-bounce-subtle">
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                            Expert Instructors
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Certified professionals with 10+ years of enterprise experience
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="group relative overflow-hidden bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 p-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-blue-400 rounded-bl-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 animate-bounce-subtle" style={{animationDelay: '0.5s'}}>
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-500 transition-colors duration-300">
                                            Hands-On Learning
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Interactive sessions with practical exercises and real scenarios
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 3 */}
                                <div className="group relative overflow-hidden bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 p-8 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-blue-600 rounded-bl-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 animate-bounce-subtle" style={{animationDelay: '1s'}}>
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                            Flexible Scheduling
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Online, on-site, or hybrid options with flexible timing
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 4 */}
                                <div className="group relative overflow-hidden bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 p-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-blue-700 rounded-bl-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 animate-bounce-subtle" style={{animationDelay: '1.5s'}}>
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                                            Certification Support
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            95% pass rate guarantee for NetSuite certification exams
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image - Right Side */}
                        <div className="flex-1 flex justify-center">
                            <img 
                                src="/TrainingWhy.jpg" 
                                alt="Why Choose Our Training" 
                                className="max-w-full h-auto lg:max-w-md rounded-2xl animate-swing hover:animate-float"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Training;

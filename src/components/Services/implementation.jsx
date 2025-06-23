import React, { useState } from 'react';

const Implementation = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            {/* Hero Section */}
            <div className="min-h-screen flex items-center justify-center bg-gray-50 overflow-hidden pt-20">
                <div className="w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-white p-8 lg:p-16 w-full">
                        {/* Text Content - Left Side */}
                        <div className="flex-1 text-gray-800 text-left px-6">
                            {/* Main Heading */}
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                                Where Vision Meets <span className="text-blue-600">Reality</span>
                            </h1>
                            
                            {/* Creative Description */}
                            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                                We don't just implement solutions—we craft digital experiences that transform the way you do business
                            </p>
                        </div>

                        {/* Image - Right Side with Animation */}
                        <div className="flex-1 flex justify-center lg:justify-start px-6">
                            <img 
                                src="/impleHeroSection.png" 
                                alt="Implementation Hero" 
                                className="max-w-full h-auto lg:max-w-lg xl:max-w-xl animate-bounce-slow"
                            />
                        </div>
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
                        {/* GIF Animation - Left Side */}
                        <div className="flex-1 flex justify-center">
                            <img 
                                src="/ProcessImplementattion.png" 
                                alt="Implementation Process Animation" 
                                className="max-w-full h-auto lg:max-w-md rounded-2xl animate-float"
                            />
                        </div>

                        {/* Process Content - Right Side */}
                        <div className="flex-1">
                            {/* Process Steps - Icon Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Step 1 */}
                                <div className="text-center p-5 bg-white rounded-xl border-2 border-blue-100 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300">
                                    <div className="w-14 h-14 bg-blue-300 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">Analysis & Planning</h3>
                                    <p className="text-sm text-gray-600">System analysis and strategic roadmap creation</p>
                                </div>

                                {/* Step 2 */}
                                <div className="text-center p-5 bg-white rounded-xl border-2 border-blue-100 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300">
                                    <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">Design & Development</h3>
                                    <p className="text-sm text-gray-600">Custom solution design and development</p>
                                </div>

                                {/* Step 3 */}
                                <div className="text-center p-5 bg-white rounded-xl border-2 border-blue-100 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300">
                                    <div className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">Testing & Integration</h3>
                                    <p className="text-sm text-gray-600">Quality assurance and system integration</p>
                                </div>

                                {/* Step 4 */}
                                <div className="text-center p-5 bg-white rounded-xl border-2 border-blue-100 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300">
                                    <div className="w-14 h-14 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">Launch & Support</h3>
                                    <p className="text-sm text-gray-600">Deployment and ongoing support</p>
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
            <div className="bg-white py-12">
                <div className="container mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                            Why Choose <span className="text-blue-600">Bellatrix</span> for Implementation?
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            We bring years of expertise, proven methodologies, and cutting-edge solutions to ensure your implementation success
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        {/* Features Grid - Left Side */}
                        <div className="flex-1">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Feature 1 */}
                                <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all duration-300">
                                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Proven Expertise</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Over 500+ successful implementations with industry-leading best practices
                                    </p>
                                </div>

                                {/* Feature 2 */}
                                <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all duration-300">
                                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Rapid Deployment</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        50% faster implementation times without compromising quality
                                    </p>
                                </div>

                                {/* Feature 3 */}
                                <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all duration-300">
                                    <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">24/7 Support</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Round-the-clock technical support and monitoring
                                    </p>
                                </div>

                                {/* Feature 4 */}
                                <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all duration-300">
                                    <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Expert Team</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Certified professionals with deep domain expertise
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Image - Right Side */}
                        <div className="flex-1 flex justify-center">
                            <img 
                                src="/Choosemplementation.png" 
                                alt="Why Choose Bellatrix Implementation" 
                                className="max-w-full h-auto lg:max-w-md rounded-2xl"
                            />
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
            <div className="bg-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                            Ready for a Seamless <span className="text-blue-600">NetSuite Implementation?</span>
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            Transform your business operations with our expert NetSuite implementation services. 
                            Let's turn your vision into reality with proven methodologies and dedicated support.
                        </p>
                        
                        <div className="flex justify-center mb-12">
                            <button 
                                onClick={openModal}
                                className="bg-blue-600 text-white hover:bg-blue-700 px-12 py-4 rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-105 min-w-[250px]"
                            >
                                Get Started
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-all duration-300">
                                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Quick Response</h3>
                                <p className="text-gray-600">Get a detailed proposal within 24 hours</p>
                            </div>
                            
                            <div className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-all duration-300">
                                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Proven Success</h3>
                                <p className="text-gray-600">99.9% implementation success rate</p>
                            </div>
                            
                            <div className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-all duration-300">
                                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Support</h3>
                                <p className="text-gray-600">Dedicated team of certified professionals</p>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <p className="text-gray-600 text-lg">
                                📞 <span className="font-semibold text-gray-800">Call us:</span> +1 (555) 123-4567 | 
                                📧 <span className="font-semibold text-gray-800">Email:</span> implementation@bellatrix.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
                    <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 scale-100">
                        {/* Header with gradient background */}
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-3xl p-6 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-800 rounded-full opacity-20 transform -translate-x-12 translate-y-12"></div>
                            
                            <div className="relative z-10 flex justify-between items-center">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Get Started Today</h3>
                                    <p className="text-blue-100 text-sm">Transform your business with our expert implementation</p>
                                </div>
                                <button 
                                    onClick={closeModal}
                                    className="text-white hover:text-blue-200 transition-colors p-2 hover:bg-white hover:bg-opacity-20 rounded-full"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        
                        {/* Form content */}
                        <div className="p-8">
                            <form className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            <span className="flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                                Full Name
                                            </span>
                                        </label>
                                        <input 
                                            type="text" 
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:border-gray-300"
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            <span className="flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                Email Address
                                            </span>
                                        </label>
                                        <input 
                                            type="email" 
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:border-gray-300"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            <span className="flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                                Phone Number
                                            </span>
                                        </label>
                                        <input 
                                            type="tel" 
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:border-gray-300"
                                            placeholder="Enter your phone"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            <span className="flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                                Company Name
                                            </span>
                                        </label>
                                        <input 
                                            type="text" 
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:border-gray-300"
                                            placeholder="Enter company name"
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        <span className="flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                            </svg>
                                            Implementation Type
                                        </span>
                                    </label>
                                    <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:border-gray-300 bg-white">
                                        <option>Select implementation type</option>
                                        <option>Basic Implementation ($2,500+)</option>
                                        <option>Professional Implementation ($5,000+)</option>
                                        <option>Enterprise Implementation (Custom)</option>
                                        <option>Custom Solution</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        <span className="flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            Project Details
                                        </span>
                                    </label>
                                    <textarea 
                                        rows="4" 
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 resize-none hover:border-gray-300"
                                        placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                                    ></textarea>
                                </div>
                                
                                {/* Submit button with gradient */}
                                <div className="pt-4">
                                    <button 
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden"
                                    >
                                        <span className="relative z-10 flex items-center justify-center">
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                            </svg>
                                            Submit Request
                                        </span>
                                        <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                                    </button>
                                </div>
                                
                                {/* Trust indicators */}
                                <div className="pt-4 border-t border-gray-100">
                                    <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                                        <div className="flex items-center">
                                            <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Free Consultation
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                            Secure & Private
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            24hr Response
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Custom CSS for animations */}
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
            `}</style>
        </>
    );
}

export default Implementation;

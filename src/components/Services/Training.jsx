import React, { useState, useEffect } from 'react';

const Training = () => {
    const [isProgramModalOpen, setIsProgramModalOpen] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [isFeatureModalOpen, setIsFeatureModalOpen] = useState(false);
    const [selectedFeature, setSelectedFeature] = useState(null);

    // Video Protection
    useEffect(() => {
        // Disable right-click context menu
        const handleContextMenu = (e) => {
            e.preventDefault();
            return false;
        };

        // Disable drag and drop
        const handleDragStart = (e) => {
            e.preventDefault();
            return false;
        };

        // Disable text selection
        const handleSelectStart = (e) => {
            e.preventDefault();
            return false;
        };

        // Disable F12, Ctrl+Shift+I, Ctrl+U (basic protection)
        const handleKeyDown = (e) => {
            // F12
            if (e.keyCode === 123) {
                e.preventDefault();
                return false;
            }
            // Ctrl+Shift+I (DevTools)
            if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
                e.preventDefault();
                return false;
            }
            // Ctrl+U (View Source)
            if (e.ctrlKey && e.keyCode === 85) {
                e.preventDefault();
                return false;
            }
            // Ctrl+S (Save Page)
            if (e.ctrlKey && e.keyCode === 83) {
                e.preventDefault();
                return false;
            }
        };

        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('dragstart', handleDragStart);
        document.addEventListener('selectstart', handleSelectStart);
        document.addEventListener('keydown', handleKeyDown);

        // Cleanup
        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('dragstart', handleDragStart);
            document.removeEventListener('selectstart', handleSelectStart);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const openProgramModal = (program) => {
        setSelectedProgram(program);
        setIsProgramModalOpen(true);
    };

    const closeProgramModal = () => {
        setIsProgramModalOpen(false);
        setSelectedProgram(null);
    };

    const openContactModal = () => {
        setIsContactModalOpen(true);
        setIsProgramModalOpen(false);
    };

    const closeContactModal = () => {
        setIsContactModalOpen(false);
    };

    const openFeatureModal = (feature) => {
        setSelectedFeature(feature);
        setIsFeatureModalOpen(true);
    };

    const closeFeatureModal = () => {
        setIsFeatureModalOpen(false);
        setSelectedFeature(null);
    };

    // Training Programs Data
    const trainingPrograms = [
        {
            id: 1,
            title: "NetSuite Fundamentals",
            shortDescription: "Core concepts and navigation basics",
            longDescription: "This comprehensive fundamentals program introduces you to the core concepts of NetSuite, covering essential navigation, basic configuration, and understanding the platform's architecture. Perfect for new users who want to build a solid foundation in NetSuite operations. You'll learn about dashboards, basic record management, user interface customization, and essential business processes. Our expert instructors will guide you through hands-on exercises to ensure practical understanding of the system.",
            icon: (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        },
        {
            id: 2,
            title: "Advanced Modules",
            shortDescription: "Financial management and reporting",
            longDescription: "Dive deep into NetSuite's advanced modules with focus on financial management, advanced reporting, and complex business processes. This program covers general ledger management, accounts payable and receivable, budgeting and forecasting, financial reporting, and period-end procedures. You'll master advanced workflows, approval processes, and learn to create sophisticated financial reports. Ideal for finance professionals and power users who need to leverage NetSuite's full financial capabilities.",
            icon: (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Customization Training",
            shortDescription: "SuiteScript and custom solutions",
            longDescription: "Master NetSuite customization through comprehensive SuiteScript training and custom solution development. This advanced program covers SuiteScript 2.0, custom fields, forms, records, workflows, and restlets. You'll learn to build custom applications, integrate with external systems, and create sophisticated automation solutions. The course includes practical projects where you'll develop real-world customizations, user event scripts, scheduled scripts, and client scripts. Perfect for developers and technical consultants.",
            icon: (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
        {
            id: 4,
            title: "Admin & Security",
            shortDescription: "System administration and security",
            longDescription: "Comprehensive system administration and security training for NetSuite environments. Learn user management, role configuration, permission settings, data security, and system maintenance. This program covers advanced topics including single sign-on (SSO), two-factor authentication, IP restrictions, audit trails, and compliance requirements. You'll master user provisioning, role-based access control, and security best practices. Essential for system administrators and IT professionals responsible for NetSuite security and governance.",
            icon: (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        }
    ];

    // Why Choose Our Training Features Data
    const trainingFeatures = [
        {
            id: 1,
            title: "Expert Instructors",
            shortDescription: "Certified professionals with years of experience",
            detailedDescription: "Our instructors are certified NetSuite professionals with extensive real-world experience across various industries. They bring practical insights from hundreds of implementations and possess deep technical knowledge of NetSuite's capabilities. Each instructor holds multiple NetSuite certifications and maintains up-to-date expertise through continuous learning and hands-on project experience.",
            benefits: [
                "Industry-proven expertise with 10+ years of NetSuite experience",
                "Multiple NetSuite certifications (Administrator, Developer, Consultant)",
                "Real-world implementation experience across 500+ projects",
                "Specialized knowledge in various industry verticals",
                "Continuous learning and certification maintenance",
                "Direct access to NetSuite development team insights"
            ],
            statistics: {
                experience: "10+ Years Average",
                certifications: "5+ Per Instructor",
                projectsCompleted: "500+ Projects",
                studentsSatisfaction: "98% Rating"
            },
            icon: (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        },
        {
            id: 2,
            title: "Hands-on Learning",
            shortDescription: "Practical exercises with real-world scenarios",
            detailedDescription: "Our training methodology emphasizes practical, hands-on learning through real-world scenarios and interactive exercises. Students work with live NetSuite environments, complete actual business processes, and solve real implementation challenges. This approach ensures immediate application of knowledge and builds confidence in using NetSuite effectively.",
            benefits: [
                "Live NetSuite sandbox environments for each student",
                "Real business scenarios from actual client implementations",
                "Step-by-step guided exercises with immediate feedback",
                "Group projects that simulate workplace collaboration",
                "Access to sample data from various industries",
                "Practice with actual business workflows and processes"
            ],
            statistics: {
                practicalTime: "70% Hands-on",
                scenarios: "50+ Real Cases",
                environments: "Individual Sandboxes",
                completionRate: "95% Success"
            },
            icon: (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Flexible Scheduling",
            shortDescription: "Multiple training formats to fit your needs",
            detailedDescription: "We understand that every organization has unique scheduling requirements. Our flexible training options include multiple formats, timing options, and customization levels to accommodate your team's availability and learning preferences. Whether you need intensive workshops or extended learning programs, we have options that work for you.",
            benefits: [
                "In-person, virtual, and hybrid training formats",
                "Weekend and evening session availability",
                "Self-paced online modules with instructor support",
                "Custom scheduling for corporate groups",
                "Recorded sessions for future reference",
                "Flexible start dates throughout the year"
            ],
            statistics: {
                formats: "3 Training Modes",
                flexibility: "24/7 Online Access",
                customization: "100% Adaptable",
                availability: "Year-round"
            },
            icon: (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            id: 4,
            title: "Ongoing Support",
            shortDescription: "Continuous assistance beyond training completion",
            detailedDescription: "Our commitment to your success extends far beyond the classroom. We provide comprehensive ongoing support to ensure you can apply your new skills effectively in your work environment. This includes technical assistance, best practice guidance, and access to our expert community for continued learning and problem-solving.",
            benefits: [
                "6 months of post-training email and phone support",
                "Access to exclusive online community and forums",
                "Monthly Q&A sessions with expert instructors",
                "Updated training materials as NetSuite evolves",
                "Priority access to advanced courses and webinars",
                "Direct line to implementation consultants for complex issues"
            ],
            statistics: {
                supportDuration: "6+ Months",
                responseTime: "24 Hours",
                community: "1000+ Members",
                satisfaction: "97% Positive"
            },
            icon: (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                </svg>
            )
        }
    ];

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

                    /* Advanced Animations for Dark Theme */
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

                    @keyframes float-medium {
                        0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
                        25% { transform: translateY(-15px) translateX(10px) rotate(90deg); }
                        50% { transform: translateY(-20px) translateX(0px) rotate(180deg); }
                        75% { transform: translateY(-10px) translateX(-10px) rotate(270deg); }
                    }
                    .animate-float-medium {
                        animation: float-medium 7s ease-in-out infinite;
                    }

                    @keyframes float-fast {
                        0%, 100% { transform: translateY(0px) scale(1); }
                        33% { transform: translateY(-25px) scale(1.1); }
                        66% { transform: translateY(-15px) scale(0.9); }
                    }
                    .animate-float-fast {
                        animation: float-fast 4s ease-in-out infinite;
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

                    @keyframes wave-flow {
                        0%, 100% { transform: translateX(-100%) scaleY(1); }
                        25% { transform: translateX(-50%) scaleY(1.2); }
                        50% { transform: translateX(0%) scaleY(0.8); }
                        75% { transform: translateX(50%) scaleY(1.1); }
                    }
                    .animate-wave-flow {
                        animation: wave-flow 15s ease-in-out infinite;
                    }

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

                    /* Neural Network Animations */
                    @keyframes neural-pulse {
                        0%, 100% { opacity: 0.5; transform: scale(1) rotateZ(0deg); filter: brightness(2); }
                        33% { opacity: 0.8; transform: scale(1.1) rotateZ(120deg); filter: brightness(4); }
                        66% { opacity: 0.6; transform: scale(0.9) rotateZ(240deg); filter: brightness(3); }
                    }
                    .animate-neural-pulse {
                        animation: neural-pulse 20s ease-in-out infinite;
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

                    /* Video Enhancement Animations */
                    @keyframes video-enhance {
                        0%, 100% { 
                            filter: brightness(0.7) contrast(1.2) saturate(1.3) hue-rotate(10deg) blur(0px);
                            transform: scale(1.05) rotate(0deg);
                        }
                        25% { 
                            filter: brightness(0.6) contrast(1.4) saturate(1.5) hue-rotate(15deg) blur(0.5px);
                            transform: scale(1.06) rotate(0.2deg);
                        }
                        50% { 
                            filter: brightness(0.8) contrast(1.1) saturate(1.2) hue-rotate(5deg) blur(0px);
                            transform: scale(1.04) rotate(0deg);
                        }
                        75% { 
                            filter: brightness(0.65) contrast(1.3) saturate(1.4) hue-rotate(12deg) blur(0.3px);
                            transform: scale(1.07) rotate(-0.2deg);
                        }
                    }

                    @keyframes video-pulse {
                        0%, 100% { opacity: 1; transform: scale(1); }
                        50% { opacity: 0.9; transform: scale(1.02); }
                    }
                    .animate-video-pulse {
                        animation: video-pulse 6s ease-in-out infinite;
                    }

                    @keyframes video-glow {
                        0%, 100% { 
                            box-shadow: 
                                0 0 20px rgba(59, 130, 246, 0.3),
                                0 0 40px rgba(59, 130, 246, 0.2),
                                0 0 60px rgba(59, 130, 246, 0.1);
                        }
                        50% { 
                            box-shadow: 
                                0 0 30px rgba(59, 130, 246, 0.5),
                                0 0 60px rgba(59, 130, 246, 0.3),
                                0 0 90px rgba(59, 130, 246, 0.2);
                        }
                    }
                    .animate-video-glow {
                        animation: video-glow 8s ease-in-out infinite;
                    }

                    @keyframes light-sweep {
                        0% { transform: translateX(-100%) skewX(-15deg); opacity: 0; }
                        10% { opacity: 1; }
                        90% { opacity: 1; }
                        100% { transform: translateX(100%) skewX(-15deg); opacity: 0; }
                    }
                    .animate-light-sweep {
                        animation: light-sweep 12s ease-in-out infinite;
                    }

                    @keyframes diagonal-sweep {
                        0% { transform: translate(-100%, -100%) rotate(45deg); opacity: 0; }
                        10% { opacity: 0.5; }
                        90% { opacity: 0.5; }
                        100% { transform: translate(100%, 100%) rotate(45deg); opacity: 0; }
                    }
                    .animate-diagonal-sweep {
                        animation: diagonal-sweep 15s ease-in-out infinite;
                    }

                    @keyframes radial-pulse {
                        0%, 100% { transform: scale(0.8); opacity: 0.3; }
                        50% { transform: scale(1.2); opacity: 0.7; }
                    }
                    .animate-radial-pulse {
                        animation: radial-pulse 10s ease-in-out infinite;
                    }

                    /* Creative New Animations */
                    @keyframes knowledge-flow {
                        0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.4; }
                        25% { transform: scale(1.1) rotate(90deg); opacity: 0.6; }
                        50% { transform: scale(0.9) rotate(180deg); opacity: 0.8; }
                        75% { transform: scale(1.05) rotate(270deg); opacity: 0.5; }
                    }
                    .animate-knowledge-flow {
                        animation: knowledge-flow 20s linear infinite;
                    }

                    @keyframes brain-pulse {
                        0%, 100% { transform: scale(1); opacity: 0.8; filter: brightness(2); }
                        50% { transform: scale(1.5); opacity: 1; filter: brightness(4); }
                    }
                    .animate-brain-pulse {
                        animation: brain-pulse 3s ease-in-out infinite;
                    }
                    .animate-brain-pulse-delay-1 {
                        animation: brain-pulse 3s ease-in-out infinite 1s;
                    }
                    .animate-brain-pulse-delay-2 {
                        animation: brain-pulse 3s ease-in-out infinite 2s;
                    }

                    @keyframes learning-signal {
                        0% { stroke-dashoffset: 50; opacity: 0.2; }
                        50% { opacity: 1; }
                        100% { stroke-dashoffset: 0; opacity: 0.2; }
                    }
                    .animate-learning-signal {
                        animation: learning-signal 5s linear infinite;
                    }
                    .animate-learning-signal-delay-1 {
                        animation: learning-signal 5s linear infinite 1.7s;
                    }
                    .animate-learning-signal-delay-2 {
                        animation: learning-signal 5s linear infinite 3.4s;
                    }

                    @keyframes neural-cross {
                        0%, 100% { stroke-dashoffset: 0; opacity: 0.1; }
                        50% { stroke-dashoffset: 30; opacity: 0.6; }
                    }
                    .animate-neural-cross {
                        animation: neural-cross 8s ease-in-out infinite;
                    }
                    .animate-neural-cross-delay {
                        animation: neural-cross 8s ease-in-out infinite 4s;
                    }

                    @keyframes constellation-rotate {
                        0% { transform: rotate(0deg) scale(1); }
                        25% { transform: rotate(90deg) scale(1.1); }
                        50% { transform: rotate(180deg) scale(0.9); }
                        75% { transform: rotate(270deg) scale(1.05); }
                        100% { transform: rotate(360deg) scale(1); }
                    }
                    .animate-constellation-rotate {
                        animation: constellation-rotate 30s linear infinite;
                    }

                    @keyframes twinkle {
                        0%, 100% { opacity: 0.3; transform: scale(1); filter: brightness(2); }
                        50% { opacity: 1; transform: scale(1.3); filter: brightness(5); }
                    }
                    .animate-twinkle {
                        animation: twinkle 2s ease-in-out infinite;
                    }
                    .animate-twinkle-delay-1 {
                        animation: twinkle 2s ease-in-out infinite 0.7s;
                    }
                    .animate-twinkle-delay-2 {
                        animation: twinkle 2s ease-in-out infinite 1.4s;
                    }

                    @keyframes constellation-line {
                        0%, 100% { stroke-dashoffset: 0; opacity: 0.3; }
                        50% { stroke-dashoffset: 20; opacity: 0.8; }
                    }
                    .animate-constellation-line {
                        animation: constellation-line 4s ease-in-out infinite;
                    }
                    .animate-constellation-line-delay {
                        animation: constellation-line 4s ease-in-out infinite 2s;
                    }

                    @keyframes code-drift {
                        0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
                        25% { transform: translateY(-20px) rotate(5deg); opacity: 0.6; }
                        50% { transform: translateY(10px) rotate(-3deg); opacity: 0.4; }
                        75% { transform: translateY(-15px) rotate(8deg); opacity: 0.7; }
                    }
                    .animate-code-drift {
                        animation: code-drift 15s ease-in-out infinite;
                    }

                    @keyframes code-float {
                        0%, 100% { transform: translateY(0px) scale(1); opacity: 0.7; }
                        50% { transform: translateY(-10px) scale(1.1); opacity: 1; }
                    }
                    .animate-code-float {
                        animation: code-float 3s ease-in-out infinite;
                    }
                    .animate-code-float-delay-1 {
                        animation: code-float 3s ease-in-out infinite 1s;
                    }
                    .animate-code-float-delay-2 {
                        animation: code-float 3s ease-in-out infinite 2s;
                    }

                    @keyframes matrix-rain {
                        0% { transform: translateY(-100px); opacity: 0.2; }
                        100% { transform: translateY(100px); opacity: 0.2; }
                    }
                    .animate-matrix-rain {
                        animation: matrix-rain 12s linear infinite;
                    }

                    @keyframes matrix-fall {
                        0% { transform: translateY(-20px); opacity: 0; }
                        10% { opacity: 1; }
                        90% { opacity: 1; }
                        100% { transform: translateY(20px); opacity: 0; }
                    }
                    .animate-matrix-fall {
                        animation: matrix-fall 4s linear infinite;
                    }
                    .animate-matrix-fall-delay-1 {
                        animation: matrix-fall 4s linear infinite 1.3s;
                    }
                    .animate-matrix-fall-delay-2 {
                        animation: matrix-fall 4s linear infinite 2.6s;
                    }

                    @keyframes geometric-pulse {
                        0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.25; }
                        33% { transform: scale(1.1) rotate(120deg); opacity: 0.4; }
                        66% { transform: scale(0.9) rotate(240deg); opacity: 0.3; }
                    }
                    .animate-geometric-pulse {
                        animation: geometric-pulse 18s ease-in-out infinite;
                    }

                    @keyframes geo-rotate {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                    .animate-geo-rotate {
                        animation: geo-rotate 10s linear infinite;
                    }

                    @keyframes geo-rotate-reverse {
                        0% { transform: rotate(360deg); }
                        100% { transform: rotate(0deg); }
                    }
                    .animate-geo-rotate-reverse {
                        animation: geo-rotate-reverse 8s linear infinite;
                    }

                    @keyframes geo-scale {
                        0%, 100% { transform: scale(1); }
                        50% { transform: scale(1.2); }
                    }
                    .animate-geo-scale {
                        animation: geo-scale 6s ease-in-out infinite;
                    }

                    @keyframes geo-morph {
                        0%, 100% { transform: scale(1) skew(0deg); }
                        25% { transform: scale(1.1) skew(5deg); }
                        50% { transform: scale(0.9) skew(-3deg); }
                        75% { transform: scale(1.05) skew(8deg); }
                    }
                    .animate-geo-morph {
                        animation: geo-morph 12s ease-in-out infinite;
                    }

                    /* Custom Scrollbar Styles */
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 8px;
                    }
                    
                    .custom-scrollbar::-webkit-scrollbar-track {
                        background: rgba(255, 255, 255, 0.1);
                        border-radius: 10px;
                    }
                    
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                        background: linear-gradient(135deg, #2563eb, #06b6d4);
                        border-radius: 10px;
                        border: 2px solid rgba(255, 255, 255, 0.1);
                    }
                    
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                        background: linear-gradient(135deg, #1d4ed8, #0891b2);
                        box-shadow: 0 0 10px rgba(37, 99, 235, 0.5);
                    }
                    
                    .custom-scrollbar::-webkit-scrollbar-corner {
                        background: rgba(255, 255, 255, 0.1);
                    }
                    
                    /* Firefox scrollbar */
                    .custom-scrollbar {
                        scrollbar-width: thin;
                        scrollbar-color: #2563eb rgba(255, 255, 255, 0.1);
                    }
                `
            }} />
        <div className="custom-scrollbar" style={{backgroundColor: '#001038'}}>
            {/* Hero Section with Video */}
            <div className="min-h-screen relative overflow-hidden pt-20">
                {/* Background Video with Enhanced Effects */}
                <div 
                    className="absolute inset-0 w-full h-full"
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                    onDrop={(e) => e.preventDefault()}
                    onSelectStart={(e) => e.preventDefault()}
                    style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                >
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        controlsList="nodownload nofullscreen noremoteplayback"
                        disablePictureInPicture
                        disableRemotePlayback
                        onContextMenu={(e) => e.preventDefault()}
                        onDragStart={(e) => e.preventDefault()}
                        onDrop={(e) => e.preventDefault()}
                        className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-[8s] ease-in-out pointer-events-none"
                        style={{ 
                            filter: 'brightness(0.7) contrast(1.2) saturate(1.3) hue-rotate(10deg)',
                            animation: 'video-enhance 20s ease-in-out infinite',
                            userSelect: 'none',
                            WebkitUserSelect: 'none'
                        }}
                    >
                        <source src="/trainingHeroSectionTwo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    
                    {/* Invisible overlay for additional protection */}
                    <div 
                        className="absolute inset-0 w-full h-full pointer-events-none" 
                        onContextMenu={(e) => e.preventDefault()}
                        onDragStart={(e) => e.preventDefault()}
                        onDrop={(e) => e.preventDefault()}
                        style={{ 
                            userSelect: 'none', 
                            WebkitUserSelect: 'none',
                            zIndex: 1
                        }}
                    />
                </div>
                
                {/* Video Enhancement Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-400/15 z-5 animate-video-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent z-6 animate-video-glow"></div>
                
                {/* Animated Video Overlays */}
                <div className="absolute inset-0 z-15">
                    {/* Moving Light Rays Across Video */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse transform -skew-y-12" style={{animationDelay: '0s'}}></div>
                    <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse transform skew-y-6" style={{animationDelay: '2s'}}></div>
                    <div className="absolute top-1/2 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-blue-300/25 to-transparent animate-pulse transform -skew-y-3" style={{animationDelay: '4s'}}></div>
                    <div className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-pulse transform skew-y-9" style={{animationDelay: '6s'}}></div>
                    <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse transform skew-y-6" style={{animationDelay: '8s'}}></div>
                    
                    {/* Corner Light Effects */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full animate-pulse"></div>
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-white/15 to-transparent rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
                    <div className="absolute bottom-0 left-0 w-36 h-36 bg-gradient-to-tr from-blue-500/18 to-transparent rounded-full animate-pulse" style={{animationDelay: '6s'}}></div>
                    <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-tl from-white/12 to-transparent rounded-full animate-pulse" style={{animationDelay: '9s'}}></div>
                    
                    {/* Dynamic Light Sweeps */}
                    <div className="absolute inset-0 w-full h-8 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent top-1/3 animate-light-sweep"></div>
                    <div className="absolute inset-0 w-full h-6 bg-gradient-to-r from-transparent via-white/30 to-transparent top-2/3 animate-light-sweep" style={{animationDelay: '4s'}}></div>
                    
                    {/* Diagonal Sweeping Effects */}
                    <div className="absolute inset-0 w-96 h-2 bg-gradient-to-r from-transparent via-blue-500/35 to-transparent animate-diagonal-sweep"></div>
                    <div className="absolute inset-0 w-80 h-1.5 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-diagonal-sweep" style={{animationDelay: '7s'}}></div>
                    
                    {/* Radial Pulsing Centers */}
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-blue-400/15 to-transparent rounded-full animate-radial-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-radial from-white/10 to-transparent rounded-full animate-radial-pulse" style={{animationDelay: '5s'}}></div>
                    
                    {/* Floating Video Particles */}
                    <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/80 rounded-full animate-float-slow shadow-lg shadow-blue-400/60"></div>
                    <div className="absolute top-40 right-40 w-3 h-3 bg-white/70 rounded-full animate-float-medium shadow-lg shadow-white/50"></div>
                    <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-blue-300/90 rounded-full animate-float-fast shadow-lg shadow-blue-300/70"></div>
                    <div className="absolute bottom-20 right-20 w-2.5 h-2.5 bg-white/60 rounded-full animate-bounce-gentle shadow-lg shadow-white/40"></div>
                    <div className="absolute top-1/2 left-10 w-1 h-1 bg-blue-500/95 rounded-full animate-pulse-slow shadow-lg shadow-blue-500/80"></div>
                    <div className="absolute top-1/3 right-16 w-2 h-2 bg-white/85 rounded-full animate-float-reverse shadow-lg shadow-white/60"></div>
                </div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-black/35 to-blue-800/45 z-20"></div>
                
                                 {/* Blue and White Lighting Effects */}
                <div className="absolute inset-0 overflow-hidden z-10">
                    {/* Ambient Blue Lights */}
                    <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/25 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute top-40 right-32 w-80 h-80 bg-blue-400/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
                    <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-300/28 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    
                    {/* Floating Light Particles */}
                    <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400/80 rounded-full animate-float-slow shadow-lg shadow-blue-400/70"></div>
                    <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/90 rounded-full animate-float-reverse shadow-lg shadow-white/60"></div>
                    <div className="absolute bottom-1/3 left-1/5 w-5 h-5 bg-blue-500/75 rounded-full animate-pulse-slow shadow-lg shadow-blue-500/60"></div>
                    <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-blue-300/95 rounded-full animate-bounce-gentle shadow-lg shadow-blue-300/70"></div>
                    
                    {/* Enhanced Light Rays */}
                    <div className="absolute top-10 left-10 w-1 h-32 bg-gradient-to-b from-blue-400/70 to-transparent transform rotate-45 animate-pulse"></div>
                    <div className="absolute top-20 right-16 w-1 h-28 bg-gradient-to-b from-white/60 to-transparent transform -rotate-45 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                    <div className="absolute bottom-20 left-16 w-1 h-24 bg-gradient-to-t from-blue-500/65 to-transparent transform rotate-12 animate-pulse" style={{animationDelay: '2.5s'}}></div>
                    <div className="absolute bottom-16 right-10 w-1 h-20 bg-gradient-to-t from-white/55 to-transparent transform -rotate-12 animate-pulse" style={{animationDelay: '0.8s'}}></div>
                    
                    {/* Enhanced Blue Glow Effects */}
                    <div className="absolute top-1/2 left-10 w-40 h-1 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent animate-pulse" style={{animationDelay: '3s'}}></div>
                    <div className="absolute bottom-1/2 right-10 w-32 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse" style={{animationDelay: '1.8s'}}></div>
                    
                    {/* Floating Orbs with Different Animations */}
                    <div className="absolute top-16 right-1/3 w-6 h-6 bg-blue-400/80 rounded-full animate-float-medium shadow-2xl shadow-blue-400/80"></div>
                    <div className="absolute bottom-24 left-1/4 w-8 h-8 bg-white/70 rounded-full animate-float-fast shadow-2xl shadow-white/60"></div>
                    <div className="absolute top-2/3 right-1/5 w-3 h-3 bg-blue-300/90 rounded-full animate-float-slow shadow-xl shadow-blue-300/80"></div>
                    
                    {/* Pulsing Light Rings */}
                    <div className="absolute top-1/3 left-1/2 w-24 h-24 border border-blue-400/50 rounded-full animate-ping"></div>
                    <div className="absolute bottom-1/3 right-1/2 w-32 h-32 border border-white/35 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
                    
                    {/* Diagonal Light Streaks */}
                    <div className="absolute top-32 left-1/3 w-48 h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent transform rotate-45 animate-pulse" style={{animationDelay: '4s'}}></div>
                    <div className="absolute bottom-40 right-1/4 w-36 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -rotate-45 animate-pulse" style={{animationDelay: '2.2s'}}></div>
                </div>

                {/* Floating Geometric Elements */}
                <div className="absolute inset-0 overflow-hidden z-5">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-white/60 to-white/40 rounded-full blur-xl animate-float-slow"></div>
                    <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-white/65 to-white/45 rounded-full blur-lg animate-float-reverse"></div>
                    <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-r from-white/70 to-white/50 rounded-full blur-md animate-pulse-slow"></div>
                    <div className="absolute bottom-1/4 left-1/2 w-20 h-20 bg-gradient-to-r from-white/60 to-white/40 rounded-full blur-lg animate-bounce-gentle"></div>
                </div>

                {/* Enhanced Animated Grid Pattern */}
                <div className="absolute inset-0 opacity-25 z-16">
                    <div className="w-full h-full bg-grid-pattern animate-grid-flow"></div>
                    {/* Additional Moving Grid Layers */}
                    <div className="absolute inset-0 w-full h-full" style={{
                        backgroundImage: `
                            linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
                        `,
                        backgroundSize: '30px 30px',
                        animation: 'grid-flow 25s linear infinite reverse'
                    }}></div>
                    
                    {/* Hexagonal Pattern Overlay */}
                    <div className="absolute inset-0 opacity-30" style={{
                        backgroundImage: `
                            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
                            radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                        animation: 'float 20s ease-in-out infinite'
                    }}></div>
                </div>
                
                {/* Content */}
                <div className="relative z-30 min-h-screen flex items-center justify-center">
                    <div className="w-full max-w-6xl mx-auto px-6">
                        {/* Main Heading with Text Animation */}
                        <div className="text-center mb-8">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white animate-slide-up">
                                <span className="inline-block animate-text-glow">Professional</span>{' '}
                                <span className="inline-block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent animate-gradient-text">
                                    Training
                                </span>
                                <br />
                                <span className="inline-block bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent animate-gradient-text-reverse">
                                    Programs
                                </span>
                        </h1>
                        </div>
                        
                        {/* Creative Description with Typewriter Effect */}
                        <div className="text-center mb-12">
                            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto animate-fade-in">
                                Empower your team with{' '}
                                <span className="relative inline-block">
                                    <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent font-semibold">
                                        comprehensive training solutions
                                    </span>
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-500 animate-underline-expand"></span>
                                </span>
                                {' '}designed to enhance skills and drive success
                            </p>
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
                            <div className="relative group max-w-2xl">
                                {/* Advanced Background Effects */}
                                <div className="absolute -inset-8 opacity-30 group-hover:opacity-60 transition-all duration-700">
                                    {/* Multiple layered glows */}
                                    <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/20 via-cyan-500/30 to-blue-600/20 rounded-3xl blur-2xl"></div>
                                    <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/15 via-purple-500/20 to-cyan-500/15 rounded-2xl blur-xl"></div>
                                    <div className="absolute -inset-2 bg-gradient-to-tr from-white/10 via-blue-300/20 to-white/10 rounded-xl blur-lg"></div>
                                </div>
                                
                                {/* Professional Container with Multi-layer Design */}
                                <div className="relative bg-gradient-to-br from-gray-900/10 via-blue-900/5 to-gray-900/10 rounded-3xl p-6 backdrop-blur-md border border-white/30 shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500">
                                    {/* Inner glow container */}
                                    <div className="relative bg-gradient-to-br from-white/5 via-transparent to-blue-500/5 rounded-2xl p-4 border border-white/20">
                                        <img 
                                            src="/images/traning.jpg" 
                                            alt="Training Programs - Advanced NetSuite Learning Solutions" 
                                            className="w-full h-auto rounded-xl shadow-2xl brightness-105 contrast-110 saturate-105 group-hover:brightness-110 group-hover:contrast-115 group-hover:saturate-110 transition-all duration-500 filter drop-shadow-xl"
                                        />
                                        
                                        {/* Professional overlay effects */}
                                        <div className="absolute inset-4 rounded-xl bg-gradient-to-tr from-blue-500/5 via-transparent via-transparent to-cyan-400/5 pointer-events-none"></div>
                                        <div className="absolute inset-4 rounded-xl bg-gradient-to-bl from-transparent via-white/3 to-transparent pointer-events-none"></div>
                                    </div>
                                    
                                    {/* Advanced Floating Tech Elements */}
                                    <div className="absolute top-3 right-3">
                                        <div className="relative">
                                            <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse shadow-lg"></div>
                                            <div className="absolute inset-0 w-4 h-4 bg-blue-400/30 rounded-full animate-ping"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="absolute bottom-6 left-6">
                                        <div className="relative">
                                            <div className="w-3 h-3 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full animate-pulse shadow-md"></div>
                                            <div className="absolute -inset-1 w-5 h-5 bg-cyan-400/20 rounded-full animate-ping"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="absolute top-1/2 right-6">
                                        <div className="relative">
                                            <div className="w-2 h-2 bg-white/90 rounded-full animate-pulse shadow-sm"></div>
                                            <div className="absolute -inset-1 w-4 h-4 bg-white/20 rounded-full animate-ping"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="absolute top-1/4 left-8">
                                        <div className="w-2 h-2 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full animate-pulse opacity-70"></div>
                                    </div>
                                    
                                    <div className="absolute bottom-1/3 right-12">
                                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-white to-blue-200 rounded-full animate-pulse opacity-80"></div>
                                    </div>
                                    
                                    {/* Professional corner accents */}
                                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-400/40 rounded-tl-3xl"></div>
                                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400/40 rounded-tr-3xl"></div>
                                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-400/40 rounded-bl-3xl"></div>
                                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400/40 rounded-br-3xl"></div>
                                    
                                    {/* Data visualization lines */}
                                    <div className="absolute top-4 left-1/4 w-12 h-0.5 bg-gradient-to-r from-transparent via-blue-300/50 to-transparent"></div>
                                    <div className="absolute bottom-8 right-1/4 w-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent"></div>
                                    <div className="absolute top-1/3 right-2 w-0.5 h-8 bg-gradient-to-b from-transparent via-blue-300/50 to-transparent"></div>
                                </div>
                                
                                {/* Professional Badge */}
                                <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-xl shadow-lg text-sm font-bold opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex items-center space-x-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                        </svg>
                                        <span>Certified Training</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Training Programs Content - Right Side */}
                        <div className="flex-1">
                            {/* Training Program Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {trainingPrograms.map((program, index) => (
                                    <div 
                                        key={program.id}
                                        onClick={() => openProgramModal(program)}
                                        className="text-center p-5 bg-white rounded-xl border-2 border-blue-100 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer group transform hover:scale-105"
                                    >
                                        <div className={`w-14 h-14 bg-gradient-to-br ${
                                            index === 0 ? 'from-blue-400 to-blue-600' :
                                            index === 1 ? 'from-blue-500 to-blue-700' :
                                            index === 2 ? 'from-blue-600 to-blue-800' :
                                            'from-blue-800 to-blue-900'
                                        } rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                            {program.icon}
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{program.title}</h3>
                                        <p className="text-sm text-gray-600">{program.shortDescription}</p>
                                        <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span className="text-xs text-blue-600 font-medium">Click to learn more</span>
                                        </div>
                                    </div>
                                ))}
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            {/* Key Training Modules Section */}
            <div className="py-12 relative overflow-hidden animate-background-glow" style={{
                backgroundColor: '#001038',
                animation: 'background-glow 12s ease-in-out infinite'
            }}>
                {/* Creative Advanced Background Effects */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Holographic Knowledge Web */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-40 animate-knowledge-flow">
                        <svg viewBox="0 0 1200 800" className="w-full h-full">
                            <defs>
                                <linearGradient id="holoKnowledge" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{stopColor:'#ffffff', stopOpacity:1}} />
                                    <stop offset="33%" style={{stopColor:'#191970', stopOpacity:0.8}} />
                                    <stop offset="66%" style={{stopColor:'#25274d', stopOpacity:0.6}} />
                                    <stop offset="100%" style={{stopColor:'#ffffff', stopOpacity:0.4}} />
                                </linearGradient>
                                <filter id="holoGlow">
                                    <feGaussianBlur stdDeviation="30" result="coloredBlur"/>
                                    <feGaussianBlur stdDeviation="20" result="coloredBlur2"/>
                                    <feGaussianBlur stdDeviation="10" result="coloredBlur3"/>
                                    <feGaussianBlur stdDeviation="5" result="coloredBlur4"/>
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
                                {/* Knowledge Nodes - Brain-like Network */}
                                <circle cx="150" cy="200" r="8" fill="url(#holoKnowledge)" className="animate-brain-pulse"/>
                                <circle cx="300" cy="150" r="12" fill="url(#holoKnowledge)" className="animate-brain-pulse-delay-1"/>
                                <circle cx="450" cy="250" r="6" fill="url(#holoKnowledge)" className="animate-brain-pulse-delay-2"/>
                                <circle cx="600" cy="180" r="10" fill="url(#holoKnowledge)" className="animate-brain-pulse"/>
                                <circle cx="750" cy="300" r="7" fill="url(#holoKnowledge)" className="animate-brain-pulse-delay-1"/>
                                <circle cx="900" cy="200" r="9" fill="url(#holoKnowledge)" className="animate-brain-pulse-delay-2"/>
                                <circle cx="1050" cy="250" r="5" fill="url(#holoKnowledge)" className="animate-brain-pulse"/>
                                
                                {/* Synaptic Connections with Learning Signals */}
                                <path d="M150,200 Q225,120 300,150" stroke="url(#holoKnowledge)" strokeWidth="2" opacity="0.8" strokeDasharray="8,4" className="animate-learning-signal"/>
                                <path d="M300,150 Q375,200 450,250" stroke="url(#holoKnowledge)" strokeWidth="2" opacity="0.8" strokeDasharray="8,4" className="animate-learning-signal-delay-1"/>
                                <path d="M450,250 Q525,215 600,180" stroke="url(#holoKnowledge)" strokeWidth="2" opacity="0.8" strokeDasharray="8,4" className="animate-learning-signal-delay-2"/>
                                <path d="M600,180 Q675,240 750,300" stroke="url(#holoKnowledge)" strokeWidth="2" opacity="0.8" strokeDasharray="8,4" className="animate-learning-signal"/>
                                <path d="M750,300 Q825,250 900,200" stroke="url(#holoKnowledge)" strokeWidth="2" opacity="0.8" strokeDasharray="8,4" className="animate-learning-signal-delay-1"/>
                                <path d="M900,200 Q975,225 1050,250" stroke="url(#holoKnowledge)" strokeWidth="2" opacity="0.8" strokeDasharray="8,4" className="animate-learning-signal-delay-2"/>
                                
                                {/* Cross-connections for neural complexity */}
                                <path d="M150,200 Q400,100 600,180" stroke="url(#holoKnowledge)" strokeWidth="1" opacity="0.4" strokeDasharray="4,8" className="animate-neural-cross"/>
                                <path d="M300,150 Q600,350 900,200" stroke="url(#holoKnowledge)" strokeWidth="1" opacity="0.4" strokeDasharray="4,8" className="animate-neural-cross-delay"/>
                            </g>
                                        </svg>
                                    </div>
                    
                    {/* Digital Learning Constellation */}
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 opacity-25 animate-constellation-rotate">
                        <svg viewBox="0 0 400 400" className="w-full h-full">
                            <defs>
                                <radialGradient id="starGrad" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" style={{stopColor:'#ffffff', stopOpacity:1}} />
                                    <stop offset="50%" style={{stopColor:'#191970', stopOpacity:0.8}} />
                                    <stop offset="100%" style={{stopColor:'#25274d', stopOpacity:0}} />
                                </radialGradient>
                                <filter id="starGlow">
                                    <feGaussianBlur stdDeviation="15" result="coloredBlur"/>
                                    <feGaussianBlur stdDeviation="8" result="coloredBlur2"/>
                                    <feGaussianBlur stdDeviation="3" result="coloredBlur3"/>
                                    <feMerge>
                                        <feMergeNode in="coloredBlur"/>
                                        <feMergeNode in="coloredBlur2"/>
                                        <feMergeNode in="coloredBlur3"/>
                                        <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                            </defs>
                            <g filter="url(#starGlow)">
                                {/* Learning Stars */}
                                <polygon points="200,50 210,80 240,80 218,98 228,128 200,110 172,128 182,98 160,80 190,80" fill="url(#starGrad)" className="animate-twinkle"/>
                                <polygon points="100,150 107,170 127,170 111,182 118,202 100,190 82,202 89,182 73,170 93,170" fill="url(#starGrad)" className="animate-twinkle-delay-1"/>
                                <polygon points="300,200 307,220 327,220 311,232 318,252 300,240 282,252 289,232 273,220 293,220" fill="url(#starGrad)" className="animate-twinkle-delay-2"/>
                                <polygon points="150,300 157,320 177,320 161,332 168,352 150,340 132,352 139,332 123,320 143,320" fill="url(#starGrad)" className="animate-twinkle"/>
                                <polygon points="320,120 325,135 340,135 328,145 333,160 320,152 307,160 312,145 300,135 315,135" fill="url(#starGrad)" className="animate-twinkle-delay-1"/>
                                
                                {/* Constellation Lines */}
                                <line x1="200" y1="80" x2="300" y2="220" stroke="url(#starGrad)" strokeWidth="1.5" opacity="0.6" strokeDasharray="6,3" className="animate-constellation-line"/>
                                <line x1="100" y1="170" x2="150" y2="320" stroke="url(#starGrad)" strokeWidth="1.5" opacity="0.6" strokeDasharray="6,3" className="animate-constellation-line-delay"/>
                                <line x1="300" y1="220" x2="320" y2="135" stroke="url(#starGrad)" strokeWidth="1.5" opacity="0.6" strokeDasharray="6,3" className="animate-constellation-line"/>
                            </g>
                        </svg>
                                </div>

                    {/* Floating Code Particles */}
                    <div className="absolute bottom-1/4 left-1/6 w-80 h-80 opacity-30 animate-code-drift">
                        <svg viewBox="0 0 320 320" className="w-full h-full">
                            <defs>
                                <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{stopColor:'#ffffff', stopOpacity:1}} />
                                    <stop offset="50%" style={{stopColor:'#191970', stopOpacity:0.8}} />
                                    <stop offset="100%" style={{stopColor:'#25274d', stopOpacity:0.6}} />
                                </linearGradient>
                                <filter id="codeGlow">
                                    <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                                    <feGaussianBlur stdDeviation="4" result="coloredBlur2"/>
                                    <feMerge>
                                        <feMergeNode in="coloredBlur"/>
                                        <feMergeNode in="coloredBlur2"/>
                                        <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                            </defs>
                            <g filter="url(#codeGlow)" fill="url(#codeGrad)">
                                {/* Code Symbols */}
                                <text x="50" y="80" fontSize="16" className="animate-code-float">{'{ }'}</text>
                                <text x="150" y="120" fontSize="14" className="animate-code-float-delay-1">{'< />'}</text>
                                <text x="250" y="100" fontSize="18" className="animate-code-float-delay-2">{'( )'}</text>
                                <text x="80" y="180" fontSize="12" className="animate-code-float">{'[ ]'}</text>
                                <text x="200" y="220" fontSize="15" className="animate-code-float-delay-1">{'<>'}</text>
                                <text x="120" y="250" fontSize="13" className="animate-code-float-delay-2">{'=/='}</text>
                                <text x="280" y="200" fontSize="16" className="animate-code-float">{'+'}</text>
                                <text x="40" y="240" fontSize="14" className="animate-code-float-delay-1">{'*'}</text>
                                <text x="180" y="60" fontSize="12" className="animate-code-float-delay-2">{'#'}</text>
                                <text x="260" y="280" fontSize="15" className="animate-code-float">{'@'}</text>
                            </g>
                        </svg>
                    </div>
                    
                    {/* Digital Matrix Rain */}
                    <div className="absolute top-0 right-1/8 w-40 h-full opacity-20 animate-matrix-rain">
                        <svg viewBox="0 0 120 800" className="w-full h-full">
                            <defs>
                                <linearGradient id="matrixGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" style={{stopColor:'#ffffff', stopOpacity:1}} />
                                    <stop offset="50%" style={{stopColor:'#191970', stopOpacity:0.8}} />
                                    <stop offset="100%" style={{stopColor:'#25274d', stopOpacity:0.4}} />
                                </linearGradient>
                                <filter id="matrixGlow">
                                    <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                                    <feMerge>
                                        <feMergeNode in="coloredBlur"/>
                                        <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                            </defs>
                            <g filter="url(#matrixGlow)" fill="url(#matrixGrad)">
                                <text x="10" y="50" fontSize="12" className="animate-matrix-fall">1</text>
                                <text x="30" y="100" fontSize="10" className="animate-matrix-fall-delay-1">0</text>
                                <text x="50" y="80" fontSize="14" className="animate-matrix-fall-delay-2">1</text>
                                <text x="70" y="130" fontSize="11" className="animate-matrix-fall">0</text>
                                <text x="90" y="90" fontSize="13" className="animate-matrix-fall-delay-1">1</text>
                                <text x="15" y="200" fontSize="9" className="animate-matrix-fall-delay-2">0</text>
                                <text x="35" y="250" fontSize="12" className="animate-matrix-fall">1</text>
                                <text x="55" y="220" fontSize="10" className="animate-matrix-fall-delay-1">0</text>
                                <text x="75" y="280" fontSize="11" className="animate-matrix-fall-delay-2">1</text>
                                <text x="95" y="240" fontSize="13" className="animate-matrix-fall">0</text>
                            </g>
                        </svg>
                    </div>
                    
                    {/* Geometric Learning Patterns */}
                    <div className="absolute top-1/2 left-1/8 w-64 h-64 opacity-25 animate-geometric-pulse">
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                            <defs>
                                <linearGradient id="geoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{stopColor:'#ffffff', stopOpacity:0.8}} />
                                    <stop offset="50%" style={{stopColor:'#191970', stopOpacity:0.6}} />
                                    <stop offset="100%" style={{stopColor:'#25274d', stopOpacity:0.4}} />
                                </linearGradient>
                            </defs>
                            <g stroke="url(#geoGrad)" strokeWidth="2" fill="none">
                                <polygon points="100,20 130,60 100,100 70,60" className="animate-geo-rotate"/>
                                <circle cx="100" cy="100" r="40" strokeDasharray="8,4" className="animate-geo-rotate-reverse"/>
                                <rect x="60" y="60" width="80" height="80" strokeDasharray="6,3" className="animate-geo-scale"/>
                                <polygon points="100,40 120,80 100,120 80,80" strokeDasharray="4,6" className="animate-geo-morph"/>
                            </g>
                        </svg>
                    </div>
                </div>
                
                <div className="container mx-auto px-6 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Key Training <span className="text-blue-400">Modules</span>
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                            Comprehensive curriculum designed to master NetSuite from foundation to advanced implementation
                        </p>
                    </div>

                    {/* Modules Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Module 1 */}
                        <div className="group relative overflow-hidden bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-800/90 rounded-3xl p-6 border border-gray-600/50 shadow-2xl hover:shadow-blue-500/20 hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full opacity-20 transform translate-x-12 -translate-y-12 group-hover:opacity-40 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                                    System Architecture
                                </h3>
                                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                                    Core system structure, data flow, and integration patterns
                                </p>
                                <div className="text-xs text-blue-400 font-medium">
                                    Duration: 8 hours
                                </div>
                            </div>
                        </div>

                        {/* Module 2 */}
                        <div className="group relative overflow-hidden bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-800/90 rounded-3xl p-6 border border-gray-600/50 shadow-2xl hover:shadow-blue-500/20 hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full opacity-20 transform translate-x-12 -translate-y-12 group-hover:opacity-40 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                                    Financial Management
                                </h3>
                                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                                    General ledger, budgeting, financial reporting, and analytics
                                </p>
                                <div className="text-xs text-blue-400 font-medium">
                                    Duration: 12 hours
                                </div>
                            </div>
                                </div>

                        {/* Module 3 */}
                        <div className="group relative overflow-hidden bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-800/90 rounded-3xl p-6 border border-gray-600/50 shadow-2xl hover:shadow-blue-500/20 hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600/30 to-cyan-400/30 rounded-full opacity-20 transform translate-x-12 -translate-y-12 group-hover:opacity-40 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                                    E-commerce & CRM
                                </h3>
                                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                                    Customer relationship management and e-commerce integration
                                </p>
                                <div className="text-xs text-blue-400 font-medium">
                                    Duration: 10 hours
                                </div>
                            </div>
                        </div>

                        {/* Module 4 */}
                        <div className="group relative overflow-hidden bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-800/90 rounded-3xl p-6 border border-gray-600/50 shadow-2xl hover:shadow-blue-500/20 hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-700/30 to-purple-600/30 rounded-full opacity-20 transform translate-x-12 -translate-y-12 group-hover:opacity-40 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                                    Customization & Scripts
                                </h3>
                                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                                    SuiteScript, custom fields, forms, and workflow automation
                                </p>
                                <div className="text-xs text-blue-400 font-medium">
                                    Duration: 16 hours
                                </div>
                            </div>
                                </div>

                        {/* Module 5 */}
                        <div className="group relative overflow-hidden bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-800/90 rounded-3xl p-6 border border-gray-600/50 shadow-2xl hover:shadow-blue-500/20 hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-800/30 to-cyan-600/30 rounded-full opacity-20 transform translate-x-12 -translate-y-12 group-hover:opacity-40 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                                    Advanced Reporting
                                </h3>
                                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                                    Saved searches, dashboard creation, and analytics tools
                                </p>
                                <div className="text-xs text-blue-400 font-medium">
                                    Duration: 8 hours
                                </div>
                                </div>
                            </div>

                        {/* Module 6 */}
                        <div className="group relative overflow-hidden bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-800/90 rounded-3xl p-6 border border-gray-600/50 shadow-2xl hover:shadow-blue-500/20 hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-900/30 to-purple-700/30 rounded-full opacity-20 transform translate-x-12 -translate-y-12 group-hover:opacity-40 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-slate-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                            </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                                    User Administration
                                </h3>
                                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                                    Role-based permissions, security setup, and user management
                                </p>
                                <div className="text-xs text-blue-400 font-medium">
                                    Duration: 6 hours
                        </div>
                    </div>
                        </div>
                    </div>


                </div>
            </div>

            {/* Why Choose Our Training Section */}
            <div className="bg-gray-50 py-12">
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
                                {trainingFeatures.map((feature, index) => (
                                    <div key={feature.id} className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 p-8 animate-fade-in-up" style={{animationDelay: `${0.1 * (index + 1)}s`}}>
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500 rounded-bl-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                                    <div className="relative z-10">
                                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 animate-bounce-subtle shadow-lg">
                                                {feature.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                                {feature.title}
                                        </h3>
                                            <p className="text-gray-600 leading-relaxed mb-4">
                                                {feature.shortDescription}
                                            </p>
                                            <button 
                                                onClick={() => openFeatureModal(feature)}
                                                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-300 group-hover:translate-x-1 transform cursor-pointer hover:cursor-pointer"
                                            >
                                                Learn More
                                                <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                    </div>
                                </div>

                        {/* Image - Right Side */}
                        <div className="flex-1 flex justify-center">
                            <div className="relative group max-w-2xl">
                                {/* Advanced Background Effects */}
                                <div className="absolute -inset-8 opacity-30 group-hover:opacity-60 transition-all duration-700">
                                    {/* Multiple layered glows */}
                                    <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/20 via-cyan-500/30 to-blue-600/20 rounded-3xl blur-2xl"></div>
                                    <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/15 via-purple-500/20 to-cyan-500/15 rounded-2xl blur-xl"></div>
                                    <div className="absolute -inset-2 bg-gradient-to-tr from-white/10 via-blue-300/20 to-white/10 rounded-xl blur-lg"></div>
                                </div>
                                
                                {/* Professional Container with Multi-layer Design */}
                                <div className="relative bg-gradient-to-br from-gray-900/10 via-blue-900/5 to-gray-900/10 rounded-3xl p-6 backdrop-blur-md border border-white/30 shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500">
                                    {/* Inner glow container */}
                                    <div className="relative bg-gradient-to-br from-white/5 via-transparent to-blue-500/5 rounded-2xl p-4 border border-white/20">
                                        <img 
                                            src="/images/chooese.png" 
                                            alt="Why Choose Our Training - Professional Development Excellence" 
                                            className="w-full h-auto rounded-xl shadow-2xl brightness-105 contrast-110 saturate-105 group-hover:brightness-110 group-hover:contrast-115 group-hover:saturate-110 transition-all duration-500 filter drop-shadow-xl"
                                        />
                                        
                                        {/* Professional overlay effects */}
                                        <div className="absolute inset-4 rounded-xl bg-gradient-to-tr from-blue-500/5 via-transparent via-transparent to-cyan-400/5 pointer-events-none"></div>
                                        <div className="absolute inset-4 rounded-xl bg-gradient-to-bl from-transparent via-white/3 to-transparent pointer-events-none"></div>
                                    </div>
                                    
                                    {/* Advanced Floating Tech Elements */}
                                    <div className="absolute top-3 right-3">
                                        <div className="relative">
                                            <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse shadow-lg"></div>
                                            <div className="absolute inset-0 w-4 h-4 bg-blue-400/30 rounded-full animate-ping"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="absolute bottom-6 left-6">
                                        <div className="relative">
                                            <div className="w-3 h-3 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full animate-pulse shadow-md"></div>
                                            <div className="absolute -inset-1 w-5 h-5 bg-cyan-400/20 rounded-full animate-ping"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="absolute top-1/2 right-6">
                                        <div className="relative">
                                            <div className="w-2 h-2 bg-white/90 rounded-full animate-pulse shadow-sm"></div>
                                            <div className="absolute -inset-1 w-4 h-4 bg-white/20 rounded-full animate-ping"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="absolute top-1/4 left-8">
                                        <div className="w-2 h-2 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full animate-pulse opacity-70"></div>
                                    </div>
                                    
                                    <div className="absolute bottom-1/3 right-12">
                                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-white to-blue-200 rounded-full animate-pulse opacity-80"></div>
                                    </div>
                                    
                                    {/* Professional corner accents */}
                                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-400/40 rounded-tl-3xl"></div>
                                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400/40 rounded-tr-3xl"></div>
                                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-400/40 rounded-bl-3xl"></div>
                                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400/40 rounded-br-3xl"></div>
                                    
                                    {/* Data visualization lines */}
                                    <div className="absolute top-4 left-1/4 w-12 h-0.5 bg-gradient-to-r from-transparent via-blue-300/50 to-transparent"></div>
                                    <div className="absolute bottom-8 right-1/4 w-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent"></div>
                                    <div className="absolute top-1/3 right-2 w-0.5 h-8 bg-gradient-to-b from-transparent via-blue-300/50 to-transparent"></div>
                                </div>
                                
                                {/* Professional Badge */}
                                <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-xl shadow-lg text-sm font-bold opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex items-center space-x-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                            </svg>
                                        <span>Excellence Training</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                    </div>
                                </div>

            {/* Program Details Modal */}
            {isProgramModalOpen && selectedProgram && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
                    <div className="bg-white/10 backdrop-blur-xl rounded-2xl max-w-4xl w-full h-auto relative transform transition-all duration-300 scale-100 shadow-2xl max-h-[90vh] overflow-y-auto border border-white/20 custom-scrollbar" style={{backgroundColor: '#001038', backdropFilter: 'blur(20px)'}}>
                        {/* Header */}
                        <div className="rounded-t-2xl p-6 text-white relative border-b border-white/20" style={{backgroundColor: '#001038'}}>
                            <button 
                                onClick={closeProgramModal}
                                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                            </button>
                            
                            <div className="flex items-center">
                                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mr-4 backdrop-blur-sm">
                                    {selectedProgram.icon}
                                        </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1 text-white">{selectedProgram.title}</h3>
                                    <p className="text-gray-300 text-sm">{selectedProgram.shortDescription}</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-6" style={{backgroundColor: '#001038'}}>
                            <div className="mb-6">
                                <h4 className="text-lg font-bold text-white mb-3">Program Overview</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    {selectedProgram.longDescription}
                                </p>
                            </div>

                            {/* Program Features */}
                            <div className="mb-6">
                                <h4 className="text-lg font-bold text-white mb-3">What You'll Learn</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-300 leading-relaxed text-sm">Hands-on practical exercises</span>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-300 leading-relaxed text-sm">Real-world case studies</span>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-300 leading-relaxed text-sm">Expert instructor guidance</span>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-300 leading-relaxed text-sm">Certification preparation</span>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-300 leading-relaxed text-sm">Interactive learning materials</span>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-300 leading-relaxed text-sm">Post-training support</span>
                                    </div>
                                    </div>
                                </div>

                            {/* Training Details */}
                            <div className="bg-white/5 border border-white/20 rounded-xl p-5 mb-6">
                                <h4 className="text-base font-bold text-white mb-3">Training Details</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h5 className="font-semibold text-white mb-1 text-xs">Duration</h5>
                                        <p className="text-xs text-blue-400 font-bold">2-5 Days Intensive</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                        <h5 className="font-semibold text-white mb-1 text-xs">Format</h5>
                                        <p className="text-xs text-blue-400 font-bold">In-Person / Virtual</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h5 className="font-semibold text-white mb-1 text-xs">Certificate</h5>
                                        <p className="text-xs text-blue-400 font-bold">Completion Certificate</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* CTA Button */}
                            <div className="text-center">
                                <button 
                                    onClick={openContactModal}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                >
                                    Contact Us for This Program
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Feature Details Modal */}
            {isFeatureModalOpen && selectedFeature && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
                    <div className="bg-white/10 backdrop-blur-xl rounded-2xl max-w-4xl w-full h-auto relative transform transition-all duration-300 scale-100 shadow-2xl max-h-[85vh] overflow-y-auto border border-white/20 custom-scrollbar" style={{backgroundColor: '#001038', backdropFilter: 'blur(20px)'}}>
                        {/* Header */}
                        <div className="rounded-t-2xl p-6 text-white relative border-b border-white/20" style={{backgroundColor: '#001038'}}>
                            <button 
                                onClick={closeFeatureModal}
                                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            
                            <div className="flex items-center">
                                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mr-4 backdrop-blur-sm">
                                    {selectedFeature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1 text-white">{selectedFeature.title}</h3>
                                    <p className="text-gray-300 text-sm">{selectedFeature.shortDescription}</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-6" style={{backgroundColor: '#001038'}}>
                            {/* Detailed Description */}
                            <div className="mb-6">
                                <h4 className="text-lg font-bold text-white mb-3">Detailed Overview</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    {selectedFeature.detailedDescription}
                                        </p>
                                    </div>

                            {/* Benefits & Features */}
                            <div className="mb-6">
                                <h4 className="text-lg font-bold text-white mb-3">Key Benefits</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {selectedFeature.benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-gray-300 leading-relaxed text-sm">{benefit}</span>
                                </div>
                                    ))}
                            </div>
                        </div>

                            {/* Statistics */}
                            <div className="bg-white/5 border border-white/20 rounded-xl p-5 mb-6">
                                <h4 className="text-base font-bold text-white mb-3">Key Statistics</h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {Object.entries(selectedFeature.statistics).map(([key, value], index) => (
                                        <div key={index} className="text-center">
                                            <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                                                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                </svg>
                                            </div>
                                            <h5 className="font-semibold text-white mb-1 capitalize text-xs">{key.replace(/([A-Z])/g, ' $1').trim()}</h5>
                                            <p className="text-xs text-blue-400 font-bold">{value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <button 
                                    onClick={openContactModal}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                >
                                    Get More Information
                                </button>
                                <button 
                                    onClick={closeFeatureModal}
                                    className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-2.5 rounded-lg font-semibold transition-all duration-300"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Contact Modal */}
            {isContactModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white/10 backdrop-blur-xl rounded-2xl max-w-3xl w-full h-auto relative transform transition-all duration-300 scale-100 shadow-2xl border border-white/20" style={{backgroundColor: '#001038', backdropFilter: 'blur(20px)'}}>
                        {/* Header */}
                        <div className="rounded-t-2xl p-4 text-white relative border-b border-white/20" style={{backgroundColor: '#001038'}}>
                            <button 
                                onClick={closeContactModal}
                                className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            
                            <div className="text-center">
                                <h3 className="text-xl font-bold mb-1 text-white">Contact Us</h3>
                                <p className="text-gray-300 text-sm">Let's discuss your training needs</p>
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
                                    
                                    {/* Right Column - Training Info */}
                                    <div className="space-y-3">
                                        <h4 className="text-base font-semibold text-white mb-2 border-b border-white/20 pb-1">Training Details</h4>
                                        
                                        <div>
                                            <label className="text-sm font-medium text-gray-300">Company Name</label>
                                            <input 
                                                type="text" 
                                                className="w-full px-3 py-2 mt-1 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-400"
                                                placeholder="Your Company Inc."
                                            />
                                        </div>
                                        
                                        <div>
                                            <label className="text-sm font-medium text-gray-300">Training Format</label>
                                            <select className="w-full px-3 py-2 mt-1 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 text-white">
                                                <option value="" className="bg-gray-800 text-white">Select Format</option>
                                                <option value="in-person" className="bg-gray-800 text-white">In-Person Training</option>
                                                <option value="virtual" className="bg-gray-800 text-white">Virtual Training</option>
                                                <option value="hybrid" className="bg-gray-800 text-white">Hybrid Training</option>
                                                <option value="flexible" className="bg-gray-800 text-white">Flexible Schedule</option>
                                            </select>
                                        </div>
                                        
                                        <div>
                                            <label className="text-sm font-medium text-gray-300">Number of Participants</label>
                                            <select className="w-full px-3 py-2 mt-1 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 text-white">
                                                <option value="" className="bg-gray-800 text-white">Select Number</option>
                                                <option value="1-5" className="bg-gray-800 text-white">1-5 People</option>
                                                <option value="6-10" className="bg-gray-800 text-white">6-10 People</option>
                                                <option value="11-20" className="bg-gray-800 text-white">11-20 People</option>
                                                <option value="20+" className="bg-gray-800 text-white">20+ People</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Selected Program Display */}
                                {selectedProgram && (
                                    <div className="bg-white/5 border border-white/20 rounded-lg p-4">
                                        <h4 className="text-sm font-medium text-white mb-2">Selected Training Program:</h4>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                                {selectedProgram.icon}
                                            </div>
                                            <div>
                                                <p className="text-white font-medium">{selectedProgram.title}</p>
                                                <p className="text-gray-300 text-sm">{selectedProgram.shortDescription}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                
                                {/* Message Section - Full Width */}
                                <div>
                                    <label className="text-sm font-medium text-gray-300">Additional Requirements</label>
                                    <textarea 
                                        rows="3" 
                                        className="w-full px-3 py-2 mt-1 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 resize-none text-white placeholder-gray-400"
                                        placeholder="Tell us about your specific training needs, timeline, or any special requirements..."
                                    ></textarea>
                                </div>
                                
                                {/* Submit Section */}
                                <div className="flex items-center justify-between pt-3 border-t border-white/20">
                                    <p className="text-xs text-gray-400">
                                        ✓ Free consultation • ✓ Custom training plan
                                    </p>
                                    <button 
                                        type="submit"
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
                                    >
                                        Send Training Request
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </>
    );
}

export default Training;

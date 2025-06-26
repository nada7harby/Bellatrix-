import { useState } from 'react';

const Testimonials = ({ testimonials = [], sectionHeader = {}, ctaButton = {} }) => {
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);

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

  // Show only first 3 testimonials initially, or all if showAllTestimonials is true
  const displayedTestimonials = showAllTestimonials ? testimonials : testimonials.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
              {sectionHeader?.gradientText || 'Trusted by Industry Leaders'}
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            {sectionHeader?.subtitle || "Don't just take our word for it—here's what our clients say."}
          </p>
                    </div>
                    
        {/* Main Content - Testimonials on left, Image on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Testimonials */}
          <div className="space-y-6">
            {displayedTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20"
              >
                {/* Quote */}
                <blockquote className="text-white text-base mb-6 leading-relaxed">
                  <p>"{testimonial.quote}"</p>
                    </blockquote>
                
                {/* Avatar, Rating, and Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                      <div className="text-blue-200 text-xs">{testimonial.title}</div>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                </div>
                </div>
              </div>
            ))}

            {/* View All Button - only show if there are more than 3 testimonials */}
            {testimonials.length > 3 && (
              <div className="pt-4">
                <button 
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-indigo-600"
                  onClick={() => setShowAllTestimonials(!showAllTestimonials)}
                >
                  {showAllTestimonials ? 'Show Less' : (ctaButton?.text || 'View All Testimonials')}
                </button>
              </div>
            )}
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Client success image */}
              <img 
                src="/images/6.jpg" 
                alt="Client Success and Testimonials" 
                className="w-full h-96 object-cover"
              />
              
              {/* Overlay gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-900/20 to-transparent"></div>
              
              {/* Floating testimonial quote overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                  <p className="text-sm italic">"Bellatrix transformed our business operations completely!"</p>
                  <p className="text-xs mt-2 opacity-90">- Sarah Johnson, CEO</p>
                </div>
              </div>
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-900">500+</div>
                <div className="text-sm text-blue-600">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
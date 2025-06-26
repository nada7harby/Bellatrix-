import { useState } from 'react';
import { Factory, Store, Work as Briefcase, LocalShipping as Package, ArrowRightAlt, CheckCircle } from '@mui/icons-material';

// Icon mapping for dynamic icon rendering
const iconMap = {
  Factory: <Factory className="w-6 h-6" />,
  Store: <Store className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  Package: <Package className="w-6 h-6" />,
};

const Industries = ({ industries = [], sectionHeader = {}, styles = {} }) => {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0] || {});

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-6">
            {sectionHeader?.chipLabel || "INDUSTRY SOLUTIONS"}
          </div>
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            {sectionHeader?.title ? (
              <>
                {sectionHeader.title.split(sectionHeader.highlightedWord || "").map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && sectionHeader.highlightedWord && (
                      <span className="text-blue-600">{sectionHeader.highlightedWord}</span>
                    )}
                  </span>
                ))}
              </>
            ) : (
              <>
                Discover <span className="text-blue-600">Modern</span> Industry Solutions
              </>
            )}
          </h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            {sectionHeader?.description || "Explore how our platform transforms your sector with tailored solutions."}
          </p>
        </div>

        {/* Main Content - Image on left, Industries on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/images/7.jpg" 
                alt="Industry Solutions and Business Growth" 
                className="w-full h-96 object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              
              {/* Floating industry highlight */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      {iconMap[selectedIndustry?.icon] || <Factory className="w-5 h-5 text-blue-600" />}
                    </div>
                    <div>
                      <p className="font-semibold text-blue-900">{selectedIndustry?.label || "Manufacturing"}</p>
                      <p className="text-sm text-blue-600">Industry Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Industries List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Our Industry Expertise</h3>
            
            {/* Industries Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {industries.map((industry) => (
                <div
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                    selectedIndustry?.id === industry.id 
                      ? 'bg-blue-50 border-blue-300 shadow-md' 
                      : 'bg-white border-blue-100 hover:border-blue-200 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      selectedIndustry?.id === industry.id ? 'bg-blue-100' : 'bg-blue-50'
                    }`}>
                      {iconMap[industry.icon] || null}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-blue-900 text-sm">{industry.label}</h4>
                      <p className="text-blue-600 text-xs">{industry.content.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Industry Details */}
            {selectedIndustry && (
              <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                <h4 className="font-bold text-blue-900 mb-3">{selectedIndustry.content.title}</h4>
                <p className="text-blue-700 text-sm mb-4">{selectedIndustry.content.description}</p>
                
                {/* Features */}
                <div className="space-y-2">
                  {selectedIndustry.content.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-800 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <button className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-md transition-all duration-300 flex items-center justify-center">
                  Explore {selectedIndustry.label} Solutions
                  <ArrowRightAlt className="ml-2" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
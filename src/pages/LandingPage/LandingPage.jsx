import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import Testimonials from '../../components/Testimonials';
import Industries from '../../components/Industries';
import Footer from '../../components/Footer';
import StatsSection from '../../components/StatsSection';
import WhyChooseUs from '../../components/WhyChooseUs';
import CallToAction from '../../components/CallToAction';
import './LandingPage.css';

// Custom fetch hook
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

function LandingPage() {
  const { data, loading, error } = useFetch('/data/homeData.json');

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-900 text-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-slate-600 border-t-slate-400 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-2xl font-bold animate-pulse">Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-900 text-red-500">
        <div className="text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <div className="text-2xl font-bold">Error: {error.message}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar services={data.services.services} industries={data.industries.industries} />
      
      {/* Hero Section */}
      {data?.hero && (
        <section id="hero">
          <Hero 
            slides={data.hero.slides} 
            stats={data.hero.stats} 
          />
        </section>
      )}
      
      {/* Stats Section */}
      <section id="stats" className="py-20 bg-slate-800/50">
        <StatsSection stats={data?.hero?.stats || []} />
      </section>
      
      {/* Services Section */}
      {data?.services && (
        <section id="services" className="py-20 bg-gray-50">
          <Services 
            services={data.services.services}
            sectionHeader={data.services.sectionHeader}
            viewAllButton={data.services.viewAllButton}
          />
        </section>
      )}
      
      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 bg-slate-800">
        <WhyChooseUs />
      </section>
      
      {/* Industries Section */}
      {data?.industries && (
        <section id="industries" className="py-20 bg-gray-50">
          <Industries 
            industries={data.industries.industries}
            sectionHeader={data.industries.sectionHeader}
            styles={data.industries.styles}
          />
        </section>
      )}
      
      {/* Testimonials Section */}
      {data?.testimonials && (
        <section id="testimonials">
          <Testimonials 
            testimonials={data.testimonials.testimonials}
            sectionHeader={data.testimonials.sectionHeader}
            ctaButton={data.testimonials.ctaButton}
          />
        </section>
      )}
      
      {/* Call to Action Section */}
      <section id="cta" className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <CallToAction />
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default LandingPage;
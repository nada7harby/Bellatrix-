import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import Support from '../../components/Support';
import ProfessionalServices from '../../components/ProfessionalServices';
import Testimonials from '../../components/Testimonials';
import Industries from '../../components/Industries';
import Footer from '../../components/Footer';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials></Testimonials>
      <Industries/>
     <Footer></Footer>
    </div>
  );
}

export default LandingPage;

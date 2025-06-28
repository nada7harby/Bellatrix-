import { Facebook, Twitter, LinkedIn, Email, ArrowUpward, Phone, LocationOn } from '@mui/icons-material';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [showTop, setShowTop] = useState(false);

  // Scroll to top handler
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show scroll-to-top button on scroll
  if (typeof window !== 'undefined') {
    window.onscroll = () => {
      setShowTop(window.scrollY > 200);
    };
  }

  // Newsletter submit handler (mock)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus(null), 2500);
    } else {
      setStatus('error');
      setTimeout(() => setStatus(null), 2500);
    }
  };

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden" style={{backgroundColor: '#0f172a'}}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-slate-600/30 to-slate-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-slate-500/20 to-slate-400/20 rounded-full blur-2xl animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-slate-400/25 to-slate-600/25 rounded-full blur-lg animate-float"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-grid-pattern"></div>
        </div>
      </div>

      {/* Top decorative border */}
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-600 via-slate-400 to-slate-600"></div>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-slate-600/50 via-slate-400/50 to-slate-600/50 blur-sm"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-4xl font-extrabold tracking-tight text-slate-100 mb-4 relative">
                Bellatrix
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full"></div>
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                Empowering businesses worldwide with cutting-edge enterprise software solutions and innovative technology consulting services.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-slate-200 mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {[
                  {icon: <Twitter fontSize="small" />, href: "#", label: "Twitter"},
                  {icon: <LinkedIn fontSize="small" />, href: "#", label: "LinkedIn"},
                  {icon: <Facebook fontSize="small" />, href: "#", label: "Facebook"}
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="group relative p-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/70 transition-all duration-300 border border-slate-700/50 hover:border-slate-600/70 hover:scale-110"
                    aria-label={item.label}
                  >
                    <span className="text-slate-400 group-hover:text-slate-200 transition-colors duration-300">
                      {item.icon}
                    </span>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-slate-600/20 to-slate-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold text-slate-100 mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-slate-400 to-transparent rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {[
                {name: "Services", href: "#services"},
                {name: "Industries", href: "#industries"},
                {name: "About Us", href: "#about"},
                {name: "Case Studies", href: "#cases"},
                {name: "Careers", href: "#careers"},
                {name: "Blog", href: "#blog"}
              ].map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href}
                    className="text-slate-300 hover:text-slate-100 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-2 h-2 bg-slate-600 rounded-full mr-3 group-hover:bg-slate-400 transition-colors duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold text-slate-100 mb-6 relative">
              Contact Info
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-slate-400 to-transparent rounded-full"></div>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center mt-0.5 group-hover:bg-slate-700/70 transition-colors duration-300">
                  <Email fontSize="small" className="text-slate-400 group-hover:text-slate-200 transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm">Email</p>
                  <a href="mailto:info@bellatrix.com" className="text-slate-200 hover:text-white transition-colors duration-300 text-sm font-medium">
                    info@bellatrix.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center mt-0.5 group-hover:bg-slate-700/70 transition-colors duration-300">
                  <Phone fontSize="small" className="text-slate-400 group-hover:text-slate-200 transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm">Phone</p>
                  <a href="tel:+15551234567" className="text-slate-200 hover:text-white transition-colors duration-300 text-sm font-medium">
                    (555) 123-4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center mt-0.5 group-hover:bg-slate-700/70 transition-colors duration-300">
                  <LocationOn fontSize="small" className="text-slate-400 group-hover:text-slate-200 transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm">Address</p>
                  <p className="text-slate-200 text-sm font-medium">
                    123 Business Avenue<br />
                    Suite 500, San Francisco<br />
                    CA 94107
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold text-slate-100 mb-6 relative">
              Newsletter
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-slate-400 to-transparent rounded-full"></div>
            </h4>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Stay updated with our latest insights, industry trends, and exclusive offers.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 text-slate-900 bg-white/95 focus:bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-400/50 text-sm font-medium shadow-lg transition-all duration-300 border border-slate-300/20"
                  required
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-slate-400/10 to-slate-500/10 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-semibold rounded-xl px-6 py-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
              >
                Subscribe Now
              </button>
              
              {status === 'success' && (
                <div className="text-green-400 text-sm flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Thank you for subscribing!</span>
                </div>
              )}
              {status === 'error' && (
                <div className="text-red-400 text-sm flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Please enter a valid email address.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800/60 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              <p>&copy; {new Date().getFullYear()} Bellatrix. All rights reserved.</p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              {[
                {name: "Privacy Policy", href: "#privacy"},
                {name: "Terms of Service", href: "#terms"},
                {name: "Cookie Policy", href: "#cookies"}
              ].map((link, idx) => (
                <a 
                  key={idx}
                  href={link.href}
                  className="text-slate-400 hover:text-slate-200 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showTop && (
        <button
          onClick={handleScrollTop}
          className="fixed bottom-8 right-8 z-50 bg-slate-700/90 hover:bg-slate-800 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-slate-600/50"
          aria-label="Scroll to top"
        >
          <ArrowUpward className="w-5 h-5" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-600/30 to-slate-500/30 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      )}

      {/* Custom Styles */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(-15px);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.02);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
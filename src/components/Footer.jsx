import { Facebook, Twitter, LinkedIn, Email, ArrowUpward } from '@mui/icons-material';
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
    <footer className="relative bg-slate-900 text-white pt-0 pb-8 px-0 overflow-hidden border-t-4 border-slate-600 shadow-inner" style={{backgroundColor: '#0f172a'}}>
      {/* Top border glow */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 blur-lg opacity-60 z-0" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-stretch gap-10 py-12">
          {/* Brand & Social */}
          <div className="flex-1 flex flex-col items-center md:items-start gap-4">
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-100 drop-shadow">Bellatrix</h3>
            <p className="text-slate-100/80 text-center md:text-left max-w-xs">Empowering your business with next-gen enterprise software solutions.</p>
            <div className="flex space-x-4 mt-2">
              {[{icon: <Twitter fontSize="medium" />, href: "#"}, {icon: <LinkedIn fontSize="medium" />, href: "#"}, {icon: <Facebook fontSize="medium" />, href: "#"}].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="group p-2 rounded-full bg-slate-800 hover:bg-slate-600 transition-colors duration-300 shadow hover:scale-110"
                  aria-label="Social Link"
                >
                  <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
          {/* Newsletter */}
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <h4 className="text-xl font-semibold text-slate-100 mb-1">Subscribe to our Newsletter</h4>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-sm items-center justify-center">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                className="rounded-full px-5 py-3 text-slate-900 bg-white/90 focus:outline-none focus:ring-2 focus:ring-slate-400 w-full text-base font-medium shadow"
                required
              />
              <button
                type="submit"
                className="bg-slate-600 hover:bg-slate-700 text-white font-bold rounded-full px-6 py-3 transition-all shadow"
              >
                Subscribe
              </button>
            </form>
            {status === 'success' && <div className="text-slate-300 text-sm">Thank you for subscribing!</div>}
            {status === 'error' && <div className="text-red-300 text-sm">Please enter a valid email address.</div>}
          </div>
          {/* Contact */}
          <div className="flex-1 flex flex-col items-center md:items-end gap-2 text-slate-100/90 text-sm">
            <h4 className="text-xl font-semibold mb-1">Contact Us</h4>
            <div className="flex items-center gap-2"><Email fontSize="small" /> info@bellatrix.com</div>
            <div>123 Business Avenue, Suite 500</div>
            <div>San Francisco, CA 94107</div>
            <div>Phone: (555) 123-4567</div>
          </div>
        </div>
        <div className="text-center pt-6 text-slate-100/70 text-xs border-t border-slate-800/40">
          <p>&copy; {new Date().getFullYear()} Bellatrix. All rights reserved.</p>
        </div>
        {/* Scroll to Top Button */}
        {showTop && (
          <button
            onClick={handleScrollTop}
            className="fixed bottom-8 right-8 z-50 bg-slate-700 hover:bg-slate-900 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform animate-bounce"
            aria-label="Scroll to top"
          >
            <ArrowUpward />
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;

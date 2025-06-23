import { Facebook, Twitter, LinkedIn, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="relative bg-[#0a183d] text-white pt-0 pb-8 px-4 overflow-hidden">
      {/* Neon border glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 rounded-t-3xl border-t-4 border-blue-500/60 blur-lg animate-pulse" />
      </div>
      <div className="container mx-auto max-w-2xl relative z-10">
        <div className="backdrop-blur-2xl bg-white/10 border border-blue-400/20 rounded-3xl shadow-2xl px-6 py-10 flex flex-col items-center gap-8 mt-[-40px]">
          {/* Brand & Social */}
          <div className="flex flex-col items-center gap-3">
            <h3 className="text-3xl font-extrabold tracking-tight text-blue-100 drop-shadow">Bellatrix</h3>
            <p className="text-blue-100/80 text-center max-w-xs">Empowering your business with next-gen enterprise software solutions.</p>
            <div className="flex space-x-5 mt-2">
              {[{icon: <Twitter fontSize="medium" />, href: "#"}, {icon: <LinkedIn fontSize="medium" />, href: "#"}, {icon: <Facebook fontSize="medium" />, href: "#"}].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="relative group hover:scale-110 transition-transform"
                >
                  <span className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-20 group-active:opacity-30 transition-all scale-75 group-hover:scale-100 blur-md" />
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          {/* Newsletter */}
          <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md items-center justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="rounded-full px-6 py-3 text-blue-900 bg-white/90 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full text-base font-medium shadow-lg"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold rounded-full px-8 py-3 transition-all shadow-xl"
            >
              Subscribe
            </button>
          </form>
          {/* Call to Action */}
          <a
            href="#demo"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full px-8 py-3 mt-2 shadow-lg transition-all border-2 border-blue-400/40 hover:border-blue-300/80 animate-pulse"
          >
            Request a Free Demo
          </a>
          {/* Contact */}
          <div className="flex flex-col items-center gap-1 text-blue-100/90 text-sm mt-2">
            <div className="flex items-center gap-2"><Email fontSize="small" /> info@bellatrix.com</div>
            <div>123 Business Avenue, Suite 500, San Francisco, CA 94107</div>
            <div>Phone: (555) 123-4567</div>
          </div>
        </div>
        <div className="text-center mt-10 pt-8 text-blue-100/80 text-xs">
          <p>&copy; {new Date().getFullYear()} Bellatrix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

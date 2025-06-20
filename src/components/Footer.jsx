const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Bellatrix</h3>
          <p>Bellatrix enterprise software consultancy</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
          <p>123 Business Avenue, Suite 500, San Francisco, CA 94107</p>
          <p>Phone: (555) 123-4567</p>
          <p>Email: info@bellatrix.com</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Facebook</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 pt-8 border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} Bellatrix. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

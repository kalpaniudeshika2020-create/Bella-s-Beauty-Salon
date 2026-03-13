import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, MapPin, Phone, Clock, ArrowUp, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Simulate preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-text-main bg-bg-primary relative">
      {/* Preloader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-bg-primary flex flex-col items-center justify-center"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="font-script text-6xl text-primary mb-4"
            >
              Bella's
            </motion.div>
            <div className="flex space-x-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.2 }}
                  className="w-3 h-3 bg-primary-light rounded-full"
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Bar */}
      <div className="bg-bg-dark text-white text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6 text-white/80">
            <span className="flex items-center"><MapPin className="w-3 h-3 mr-1 text-accent-gold" /> 229 E St, Waterford, CA 95386</span>
            <span className="flex items-center"><Clock className="w-3 h-3 mr-1 text-accent-gold" /> Open · Closes 5 PM</span>
          </div>
          <div className="flex items-center space-x-6 text-white/80">
            <a href="tel:+12098745661" className="flex items-center hover:text-accent-gold transition-colors">
              <Phone className="w-3 h-3 mr-1 text-accent-gold" /> +1 (209) 874-5661
            </a>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-accent-gold transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
              <a href="#" className="hover:text-accent-gold transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
              <a href="#" className="hover:text-accent-gold transition-colors">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-panel shadow-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex flex-col items-center">
              <span className="font-script text-4xl text-primary leading-none">Bella's</span>
              <span className="text-[0.6rem] uppercase tracking-[0.2em] text-text-muted font-medium mt-1">Beauty Salon</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-primary'
                      : 'text-text-main hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/book"
                className="btn-gradient px-6 py-2.5 rounded-full text-sm font-medium shadow-sm"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-text-main hover:text-primary focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-bg-secondary border-b border-border-dark overflow-hidden absolute w-full left-0 top-full shadow-lg"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-3 py-3 text-base font-medium rounded-lg ${
                      location.pathname === link.path
                        ? 'text-primary bg-primary-lighter/30'
                        : 'text-text-main hover:text-primary hover:bg-primary-lighter/10'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 px-3">
                  <Link
                    to="/book"
                    className="block w-full text-center btn-gradient px-6 py-3 rounded-full text-sm font-medium"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-bg-dark text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-1">
              <div className="flex flex-col items-start mb-6">
                <span className="font-script text-4xl text-primary-light leading-none">Bella's</span>
                <span className="text-[0.6rem] uppercase tracking-[0.2em] text-white/60 font-medium mt-1">Beauty Salon</span>
              </div>
              <p className="text-sm text-white/70 mb-6 leading-relaxed">
                Where beauty meets elegance. Experience premium hair styling, coloring, and beauty services at Waterford's most loved salon.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-lg text-white mb-6 flex items-center">
                Quick Links
                <span className="ml-2 w-8 h-[1px] bg-accent-gold"></span>
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm text-white/70 hover:text-accent-gold hover:pl-2 transition-all duration-300 inline-block">
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/book" className="text-sm text-white/70 hover:text-accent-gold hover:pl-2 transition-all duration-300 inline-block">
                    Book Appointment
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg text-white mb-6 flex items-center">
                Services
                <span className="ml-2 w-8 h-[1px] bg-accent-gold"></span>
              </h4>
              <ul className="space-y-3">
                <li><Link to="/services" className="text-sm text-white/70 hover:text-accent-gold hover:pl-2 transition-all duration-300 inline-block">Hair Cutting</Link></li>
                <li><Link to="/services" className="text-sm text-white/70 hover:text-accent-gold hover:pl-2 transition-all duration-300 inline-block">Hair Coloring</Link></li>
                <li><Link to="/services" className="text-sm text-white/70 hover:text-accent-gold hover:pl-2 transition-all duration-300 inline-block">Styling & Blowouts</Link></li>
                <li><Link to="/services" className="text-sm text-white/70 hover:text-accent-gold hover:pl-2 transition-all duration-300 inline-block">Beauty Treatments</Link></li>
                <li><Link to="/services" className="text-sm text-white/70 hover:text-accent-gold hover:pl-2 transition-all duration-300 inline-block">Kids Haircuts</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg text-white mb-6 flex items-center">
                Contact Us
                <span className="ml-2 w-8 h-[1px] bg-accent-gold"></span>
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary-light mr-3 shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">229 E St, Waterford, CA 95386, United States</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-primary-light mr-3 shrink-0" />
                  <a href="tel:+12098745661" className="text-sm text-white/70 hover:text-accent-gold transition-colors">+1 (209) 874-5661</a>
                </li>
                <li className="flex items-start mt-4">
                  <Clock className="h-5 w-5 text-primary-light mr-3 shrink-0 mt-0.5" />
                  <div className="text-sm text-white/70">
                    <p className="mb-1">Mon - Fri: 9:00 AM - 5:00 PM</p>
                    <p className="mb-1">Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-white/50 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Bella's Beauty Salon. All rights reserved.
            </p>
            <div className="flex space-x-6 text-xs text-white/50">
              <a href="#" className="hover:text-accent-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/12098745661?text=Hi%20Bella's!%20I'd%20like%20to%20book%20an%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
        <MessageCircle className="w-6 h-6 relative z-10" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-bg-dark text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Chat with us!
        </span>
      </a>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-40 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

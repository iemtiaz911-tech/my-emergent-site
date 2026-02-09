import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1100px]">
        <div className="nav-glass rounded-full px-8 py-4 flex items-center justify-between shadow-2xl">
          <Link to="/" className="flex items-center gap-3 shrink-0" onClick={closeMobileMenu}>
            <div className="size-5 text-silver-accent">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"></path>
              </svg>
            </div>
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-white">Flinza Works</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              className={`text-[10px] font-bold tracking-widest uppercase transition-colors ${
                location.pathname === '/' ? 'text-white' : 'text-body-text hover:text-white'
              }`}
              to="/"
            >
              Home
            </Link>

            <div className="relative nav-dropdown group cursor-pointer">
              <span className="flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase text-body-text group-hover:text-white transition-colors">
                Services
                <ChevronDown className="w-3 h-3" />
              </span>
              <div className="dropdown-menu absolute top-full left-1/2 -translate-x-1/2 pt-6">
                <div className="bg-secondary-bg border border-border-main rounded-2xl p-4 min-w-[180px] shadow-2xl">
                  <Link 
                    to="/ai-ugc"
                    className="block px-4 py-2 text-[10px] font-bold tracking-widest uppercase text-body-text hover:text-white hover:bg-white/5 rounded-lg transition-all"
                  >
                    AI UGC
                  </Link>
                  <Link 
                    to="/organic-content"
                    className="block px-4 py-2 text-[10px] font-bold tracking-widest uppercase text-body-text hover:text-white hover:bg-white/5 rounded-lg transition-all"
                  >
                    Organic Content
                  </Link>
                  <Link 
                    to="/meta-ads"
                    className="block px-4 py-2 text-[10px] font-bold tracking-widest uppercase text-body-text hover:text-white hover:bg-white/5 rounded-lg transition-all"
                  >
                    Media Buying
                  </Link>
                </div>
              </div>
            </div>

            <Link 
              className={`text-[10px] font-bold tracking-widest uppercase transition-colors ${
                location.pathname === '/case-studies' ? 'text-white' : 'text-body-text hover:text-white'
              }`}
              to="/case-studies"
            >
              Case Studies
            </Link>

            <Link 
              className={`text-[10px] font-bold tracking-widest uppercase transition-colors ${
                location.pathname === '/contact' ? 'text-white' : 'text-body-text hover:text-white'
              }`}
              to="/contact"
            >
              Contact
            </Link>
          </div>

          <a 
            href="https://calendly.com/iemtiaz911/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-cta-button hover:bg-cta-button/90 text-white text-[10px] font-bold uppercase tracking-[0.15em] px-7 py-2.5 rounded-full transition-all border border-border-main btn-glow-hover"
          >
            Book A Call
          </a>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden mobile-nav-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={mobileMenuOpen ? 'active' : ''}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Menu Panel */}
      <div className={`mobile-menu-panel ${mobileMenuOpen ? 'active' : ''}`}>
        <Link 
          to="/" 
          className="text-white"
          onClick={closeMobileMenu}
        >
          Home
        </Link>
        <Link 
          to="/ai-ugc"
          onClick={closeMobileMenu}
        >
          AI UGC
        </Link>
        <Link 
          to="/organic-content"
          onClick={closeMobileMenu}
        >
          Organic Content
        </Link>
        <Link 
          to="/meta-ads"
          onClick={closeMobileMenu}
        >
          Media Buying
        </Link>
        <Link 
          to="/case-studies"
          onClick={closeMobileMenu}
        >
          Case Studies
        </Link>
        <Link 
          to="/contact"
          onClick={closeMobileMenu}
        >
          Contact
        </Link>
        <a 
          href="https://calendly.com/iemtiaz911/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="text-silver-accent mt-8"
          onClick={closeMobileMenu}
        >
          Book A Call →
        </a>
      </div>
    </>
  );
};

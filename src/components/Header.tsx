import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { BrandLogo } from './BrandLogo';
import { SocialLinks } from './SocialLinks';

interface HeaderProps {
  onOpenBooking: () => void;
  activeSection?: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const observer = new ResizeObserver(() => {
      document.documentElement.style.setProperty('--header-offset', `${header.offsetHeight + 16}px`);
    });
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Treatments', id: 'treatments' },
    { label: 'Meet Katie', id: 'practitioner' },
    { label: 'Skincare', id: 'skincare' },
    { label: 'Our Approach', id: 'approach' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`site-header ${isScrolled ? 'site-header--scrolled' : ''} sticky top-0 z-30 transition-all duration-300 ${
        isScrolled
          ? 'bg-blush-white/95 backdrop-blur-md shadow-xs border-b border-border-blush'
          : 'bg-blush-white border-b border-border-blush/60'
      }`}
    >
      <div className="site-header-inner max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="header-layout flex flex-wrap items-center justify-between gap-3 py-3 sm:py-4">
          
          {/* Zone 1: Brand Wordmark with Official Watercolor & Gold Emblem */}
          <button
            onClick={() => handleNavClick('hero')}
            className="header-brand text-left group cursor-pointer flex shrink-0 items-center py-1"
            type="button"
            aria-label="Majestic Aesthetics Home"
          >
            <div className="w-52 sm:w-72 transition-transform duration-200 group-hover:scale-[1.02]">
              <BrandLogo variant="full" showSubtitle={true} />
            </div>
          </button>
          <div className="header-socials"><SocialLinks /></div>

          {/* Zone 2: Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="header-navigation order-3 w-full hidden lg:flex items-center justify-center gap-7 border-t border-border-blush pt-3 text-[13px] font-medium text-text-charcoal"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-text-muted hover:text-rose-plum transition-colors relative py-1 cursor-pointer font-medium"
                type="button"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary Action CTA & Mobile Hamburger */}
          <div className="header-actions order-2 flex w-full sm:w-auto sm:ml-auto shrink-0 items-center gap-2 sm:gap-3">
            <a href={siteConfig.contact.phoneHref} className="header-phone hidden lg:inline-flex items-center gap-2 text-sm font-semibold text-rose-plum hover:text-rose-accent whitespace-nowrap">
              <Phone className="w-4 h-4" />
              {siteConfig.contact.phone}
            </a>
            <div className="hidden lg:block w-full text-right text-xs leading-relaxed text-text-muted">
              <p>{siteConfig.location.addressLine}</p>
              <p>{siteConfig.location.town}, {siteConfig.location.city}, {siteConfig.location.postcode}</p>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-auto p-2 text-text-charcoal lg:hidden hover:text-rose-plum transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              type="button"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border-blush bg-blush-white shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="px-6 py-6 space-y-4">
            <div className="w-48 mb-2">
              <BrandLogo variant="full" showSubtitle={true} />
            </div>
            
            <div className="text-xs font-semibold tracking-widest text-rose-accent uppercase pb-2 border-b border-border-blush">
              Medical Aesthetics &amp; Skin Care · Southsea, Portsmouth
            </div>
            
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-left text-base font-serif text-text-charcoal hover:text-rose-plum py-1 cursor-pointer transition-colors"
                  type="button"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-border-blush flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                type="button"
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-rose-button hover:bg-rose-accent rounded-full transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Consultation</span>
              </button>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-center text-xs text-text-muted hover:text-rose-plum py-1"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

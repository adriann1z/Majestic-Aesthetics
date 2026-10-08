import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Calendar, Facebook, Instagram } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  onOpenBooking: () => void;
  activeSection?: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      className={`sticky top-0 z-30 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFF8FB]/95 backdrop-blur-md shadow-xs border-b border-[#EAD7DF]'
          : 'bg-[#FFF8FB] border-b border-[#EAD7DF]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-3 py-3 sm:py-4">
        <nav aria-label="Social media" className="order-2 flex shrink-0 items-center gap-2 sm:gap-3 sm:mr-auto sm:ml-6">
          {[
            { label: 'Facebook', href: 'https://www.facebook.com/majesticaestheticswithkate', Icon: Facebook },
            { label: 'Instagram', href: 'https://www.instagram.com/majestic_aesthetics_official/', Icon: Instagram },
          ].map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Majestic Aesthetics on ${label} (opens in a new tab)`}
              className={`group relative inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full text-white shadow-sm hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7F5668] transition-all motion-reduce:transform-none ${label === 'Facebook' ? 'bg-[#1877F2] hover:bg-[#1264D0]' : 'bg-[#B63275] hover:bg-[#96265F]'}`}
            >
              <Icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
              <span className="pointer-events-none absolute right-0 top-full z-40 mt-1 rounded px-2 py-1 text-xs bg-[#282924] text-white opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
                {label}
              </span>
            </a>
          ))}
        </nav>
          
          {/* Zone 1: Brand Wordmark with Official Watercolor & Gold Emblem */}
          <button
            onClick={() => handleNavClick('hero')}
            className="order-1 text-left group cursor-pointer flex items-center py-1 min-w-0"
            type="button"
            aria-label="Majestic Aesthetics Home"
          >
            <div className="w-44 sm:w-64 transition-transform duration-200 group-hover:scale-[1.02]">
              <BrandLogo variant="full" showSubtitle={true} />
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="order-4 w-full hidden lg:flex items-center justify-center gap-7 border-t border-[#EAD7DF]/60 pt-3 text-[13px] font-medium tracking-wide text-[#282924]"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-[#74786E] hover:text-[#7F5668] transition-colors relative py-1 cursor-pointer font-medium"
                type="button"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary Action CTA & Mobile Hamburger */}
          <div className="order-3 flex w-full sm:w-auto items-center justify-between gap-3">
            <button
              onClick={onOpenBooking}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#A96883] hover:bg-[#8D5A6F] active:bg-[#7F5668] rounded-full shadow-xs shadow-[#A96883]/25 transition-all hover:shadow-md cursor-pointer whitespace-nowrap"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#282924] lg:hidden hover:text-[#7F5668] transition-colors cursor-pointer"
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
        <div className="lg:hidden border-t border-[#EAD7DF] bg-[#FFF8FB] shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="px-6 py-6 space-y-4">
            <div className="w-48 mb-2">
              <BrandLogo variant="full" showSubtitle={true} />
            </div>
            
            <div className="text-xs font-semibold tracking-widest text-[#8D5A6F] uppercase pb-2 border-b border-[#EAD7DF]">
              Medical Aesthetics &amp; Skin Care · Southsea, Portsmouth
            </div>
            
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-left text-base font-serif text-[#282924] hover:text-[#7F5668] py-1 cursor-pointer transition-colors"
                  type="button"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-[#EAD7DF] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                type="button"
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#A96883] hover:bg-[#8D5A6F] rounded-full transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Consultation</span>
              </button>

              <a
                href="mailto:info@majesticaesthetics.co.uk"
                className="text-center text-xs text-[#74786E] hover:text-[#7F5668] py-1"
              >
                info@majesticaesthetics.co.uk
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

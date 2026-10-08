import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Calendar } from 'lucide-react';
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
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 py-3 sm:py-4">
          
          {/* Zone 1: Brand Wordmark with Official Watercolor & Gold Emblem */}
          <button
            onClick={() => handleNavClick('hero')}
            className="text-left group cursor-pointer flex shrink-0 items-center py-1"
            type="button"
            aria-label="Majestic Aesthetics Home"
          >
            <div className="w-52 sm:w-56 transition-transform duration-200 group-hover:scale-[1.02]">
              <BrandLogo variant="full" showSubtitle={true} />
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden xl:flex items-center gap-4 text-[13px] font-medium text-[#282924]"
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
          <div className="flex w-full sm:w-auto shrink-0 items-center gap-2">
            <SocialLinks />
            <button
              onClick={onOpenBooking}
              type="button"
              className="inline-flex items-center gap-2 px-3 sm:px-5 py-2.5 text-xs font-semibold uppercase text-white bg-[#A96883] hover:bg-[#8D5A6F] active:bg-[#7F5668] rounded-full shadow-xs shadow-[#A96883]/25 transition-all hover:shadow-md cursor-pointer whitespace-nowrap"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-auto p-2 text-[#282924] xl:hidden hover:text-[#7F5668] transition-colors cursor-pointer"
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
        <div className="xl:hidden border-t border-[#EAD7DF] bg-[#FFF8FB] shadow-lg animate-in slide-in-from-top-2 duration-200">
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

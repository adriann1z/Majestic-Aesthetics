import React from 'react';
import { Mail, MapPin, Heart, Shield, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPrivacy: () => void;
  onOpenChecklist: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPrivacy,
  onOpenChecklist,
  onOpenBooking
}) => {
  return (
    <footer className="bg-[#7F5668] text-[#F9EDF2] border-t border-[#8D5A6F] relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-radial from-[#F78DA7]/15 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Col 1: Brand & Philosophy (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => onNavigate('hero')}
              className="text-left group cursor-pointer block"
              type="button"
              aria-label="Majestic Aesthetics Home"
            >
              <div className="w-60 sm:w-72 -ml-2">
                <BrandLogo variant="light" showSubtitle={true} />
              </div>
            </button>

            <p className="text-sm text-[#F9EDF2]/90 leading-relaxed max-w-sm">
              Thoughtful medical aesthetics, personalised care and natural-looking beauty in Southsea, Portsmouth.
            </p>

            <div className="pt-2 text-xs text-[#EAD7DF]/80 space-y-1">
              <p>Clinical Lead: Katie Osborne</p>
              <p>Registered Midwife · Independent Prescriber</p>
            </div>
          </div>

          {/* Col 2: Explore Navigation (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#EAD7DF]">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-[#F9EDF2]/80">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-white transition-colors cursor-pointer"
                  type="button"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('treatments')}
                  className="hover:text-white transition-colors cursor-pointer"
                  type="button"
                >
                  Treatments
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('practitioner')}
                  className="hover:text-white transition-colors cursor-pointer"
                  type="button"
                >
                  Meet Katie
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('skincare')}
                  className="hover:text-white transition-colors cursor-pointer"
                  type="button"
                >
                  Skincare & Obagi Expansion
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('approach')}
                  className="hover:text-white transition-colors cursor-pointer"
                  type="button"
                >
                  Our Approach
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-white transition-colors cursor-pointer"
                  type="button"
                >
                  Clinic Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                  type="button"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Clinic Location (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#EAD7DF]">
              Clinic Details
            </h4>
            
            <div className="space-y-3 text-sm text-[#F9EDF2]/90">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#EAD7DF] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white underline underline-offset-2 transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EAD7DF] shrink-0 mt-0.5" />
                <div>
                  <p>{siteConfig.location.addressLine}</p>
                  <p>{siteConfig.location.town}, {siteConfig.location.city}</p>
                  <p>{siteConfig.location.postcode}</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                type="button"
                className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#7F5668] bg-white hover:bg-[#F9EDF2] rounded-full transition-colors cursor-pointer"
              >
                Book a Consultation
              </button>
            </div>
          </div>

          {/* Col 4: Compliance & Policies (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#EAD7DF]">
              Information
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F9EDF2]/80">
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-white transition-colors cursor-pointer"
                  type="button"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-white transition-colors cursor-pointer"
                  type="button"
                >
                  Cookie Policy
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-white transition-colors cursor-pointer"
                  type="button"
                >
                  Terms of Consultation
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenChecklist}
                  className="hover:text-white transition-colors cursor-pointer underline text-[#EAD7DF]"
                  type="button"
                >
                  Katie's Review Deck
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-14 pt-8 border-t border-[#8D5A6F]/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EAD7DF]/80">
          <div>
            © 2026 Majestic Aesthetics. All rights reserved.
          </div>

          <div className="text-center sm:text-right text-[#F9EDF2]/90 italic font-serif">
            Private design concept prepared for Katie Osborne — not a live clinic website.
          </div>
        </div>

      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { ArrowRight, Sparkles, Phone } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import heroPortrait from '../assets/images/regenerated_image_1791482961876.webp';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreTreatments: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreTreatments }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <section 
      id="hero"
      className="hero-section relative bg-blush-white overflow-hidden border-b border-border-blush"
    >

      <div className="hero-inner section-inner max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="hero-grid grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Copy (approx 55% / 7 cols) */}
          <div className="hero-copy lg:col-span-7 max-w-2xl">
            {/* Eyebrow with Gold Fleck Accent */}
            <div className="hero-eyebrow flex items-center gap-2.5">
              <span className="w-6 h-px bg-gradient-to-r from-gold-metallic to-rose-brand"></span>
              <p className="text-xs uppercase tracking-[0.22em] font-semibold text-rose-accent">
                Medical Aesthetics &amp; Skin Care · Southsea, Portsmouth
              </p>
            </div>

            {/* Headline with Brand Calligraphy Flourish */}
            <div>
              <h1 className="hero-heading font-serif text-text-charcoal font-normal text-balance">
                Expert aesthetics. <br />
                <span className="font-script text-rose-button font-normal block mt-1">
                  Beautifully refined.
                </span>
              </h1>
            </div>

            {/* Supporting description */}
            <p className="hero-description text-base sm:text-lg text-text-muted leading-relaxed font-light">
              Discover a more personal approach to medical aesthetics and bespoke skin care, where thoughtful treatments, 
              clinical expertise and natural-looking results come together in Southsea.
            </p>

            {/* CTA Group */}
            <div className="hero-buttons flex flex-wrap items-center gap-4 pt-2">
              <a href={siteConfig.contact.phoneHref} className="lg:hidden inline-flex w-full min-h-12 items-center justify-center gap-3 rounded-full bg-rose-button px-5 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-rose-accent">
                <Phone className="w-5 h-5 shrink-0" />
                <span>Call Now</span>
                <span>{siteConfig.contact.phone}</span>
              </a>
              <button
                onClick={onOpenBooking}
                type="button"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-rose-button via-rose-accent to-rose-plum hover:opacity-95 active:scale-[0.99] rounded-full shadow-md shadow-rose-brand/25 transition-all hover:translate-y-[-1px] cursor-pointer"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreTreatments}
                type="button"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-medium tracking-wide text-text-charcoal bg-white hover:bg-blush-pale border border-border-blush hover:border-gold-metallic/50 rounded-full transition-all cursor-pointer shadow-2xs"
              >
                <span>Explore Treatments</span>
              </button>
            </div>

            {/* Micro proof & concept note with Gold Star */}
            <div className="hero-credentials pt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-text-muted">
              <span className="inline-flex items-center gap-1.5 text-rose-accent font-medium">
                <Sparkles className="w-3.5 h-3.5 text-gold-metallic" />
                Clinically led by Katie Osborne
              </span>
              <span className="hidden sm:inline text-border-blush">|</span>
              <span>Registered Midwife &amp; Independent Prescriber</span>
            </div>
          </div>

          {/* Right Column: Controlled Height Editorial Image (approx 45% / 5 cols) */}
          <div className="hero-image-column lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-[460px] lg:max-w-full">
              
              {/* Outer decorative frame with subtle gold corner shine */}
              <div className="hero-portrait relative overflow-hidden border border-gold-metallic/30 bg-blush-pale">
                {!imgError ? (
                  <img
                    src={heroPortrait}
                    alt="Natural, radiant facial aesthetics portrait representing the Majestic Aesthetics philosophy"
                    className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
                      imgLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImgLoaded(true)}
                    onError={() => setImgError(true)}
                    loading="eager"
                    fetchPriority="high"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-blush-pale to-rose-soft">
                    <span className="font-script text-4xl text-rose-accent mb-2">Majestic Aesthetics</span>
                    <p className="text-xs text-text-muted">Natural beauty, clinically refined</p>
                  </div>
                )}

              </div>

              {/* Small floating editorial badge with gold trim */}
              <div className="hero-badge absolute -bottom-4 right-4 sm:right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 border border-gold-metallic/40 shadow-lg flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-gold-metallic"></span>
                <span className="text-xs font-serif italic text-rose-plum tracking-wide">
                  Natural beauty. Expert care.
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

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
      className="relative bg-[#FFF8FB] overflow-hidden border-b border-[#EAD7DF]"
    >
      {/* Subtle Watercolor & Gold Background Blooms */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-radial from-[#F4A6BF]/25 via-[#F78DA7]/10 to-transparent blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-radial from-[#ECC46A]/15 via-[#D4AF37]/5 to-transparent blur-2xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Copy (approx 55% / 7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 max-w-2xl">
            {/* Eyebrow with Gold Fleck Accent */}
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-px bg-gradient-to-r from-[#D4AF37] to-[#C08EA1]"></span>
              <p className="text-xs uppercase tracking-[0.22em] font-semibold text-[#8D5A6F]">
                Medical Aesthetics &amp; Skin Care · Southsea, Portsmouth
              </p>
            </div>

            {/* Headline with Brand Calligraphy Flourish */}
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[64px] text-[#282924] font-normal leading-[1.12] tracking-tight text-balance">
                Expert aesthetics. <br />
                <span className="font-script text-5xl sm:text-6xl lg:text-[76px] text-[#A96883] font-normal block mt-1">
                  Beautifully refined.
                </span>
              </h1>
            </div>

            {/* Supporting description */}
            <p className="text-base sm:text-lg text-[#74786E] leading-relaxed font-light">
              Discover a more personal approach to medical aesthetics and bespoke skin care, where thoughtful treatments, 
              clinical expertise and natural-looking results come together in Southsea.
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                type="button"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#A96883] via-[#8D5A6F] to-[#7F5668] hover:opacity-95 active:scale-[0.99] rounded-full shadow-md shadow-[#C08EA1]/25 transition-all hover:translate-y-[-1px] cursor-pointer"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreTreatments}
                type="button"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-medium tracking-wide text-[#282924] bg-white hover:bg-[#F9EDF2] border border-[#EAD7DF] hover:border-[#D4AF37]/50 rounded-full transition-all cursor-pointer shadow-2xs"
              >
                <span>Explore Treatments</span>
              </button>
            </div>

            {/* Micro proof & concept note with Gold Star */}
            <div className="pt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#74786E]">
              <span className="inline-flex items-center gap-1.5 text-[#8D5A6F] font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                Clinically led by Katie Osborne
              </span>
              <span className="hidden sm:inline text-[#EAD7DF]">|</span>
              <span>Registered Midwife &amp; Independent Prescriber</span>
            </div>
          </div>

          {/* Right Column: Controlled Height Editorial Image (approx 45% / 5 cols) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-[460px] lg:max-w-full">
              
              {/* Outer decorative frame with subtle gold corner shine */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-[#C08EA1]/20 border border-[#EAD7DF] bg-[#F9EDF2] h-[380px] sm:h-[480px] lg:h-[520px]">
                {!imgError ? (
                  <img
                    src="/src/assets/images/regenerated_image_1791482961876.png"
                    alt="Natural, radiant facial aesthetics portrait representing the Majestic Aesthetics philosophy"
                    className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
                      imgLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImgLoaded(true)}
                    onError={() => setImgError(true)}
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#F9EDF2] to-[#F6E6ED]">
                    <span className="font-script text-4xl text-[#8D5A6F] mb-2">Majestic Aesthetics</span>
                    <p className="text-xs text-[#74786E]">Natural beauty, clinically refined</p>
                  </div>
                )}

                {/* Subtle soft gradient scrim at bottom edge */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#282924]/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Small floating editorial badge with gold trim */}
              <div className="absolute -bottom-4 right-4 sm:right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#D4AF37]/40 shadow-lg flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                <span className="text-xs font-serif italic text-[#7F5668] tracking-wide">
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

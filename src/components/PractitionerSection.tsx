import React from 'react';
import { Camera, CheckCircle2, Award, HeartHandshake, ShieldCheck, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface PractitionerSectionProps {
  onOpenBooking: () => void;
  onOpenChecklist: () => void;
}

export const PractitionerSection: React.FC<PractitionerSectionProps> = ({
  onOpenBooking,
  onOpenChecklist
}) => {
  return (
    <section 
      id="practitioner"
      className="py-16 sm:py-24 bg-[#F9EDF2] border-b border-[#EAD7DF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Practitioner Portrait / Verified Placeholder (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-[420px] lg:max-w-full">
              
              {/* Elegant Portrait Frame */}
              <div className="rounded-3xl border border-[#EAD7DF] bg-white/80 p-8 sm:p-10 shadow-lg shadow-[#C08EA1]/15 flex flex-col items-center justify-center text-center min-h-[460px] relative overflow-hidden">
                
                {/* Background Watercolor Wash & Gold Dust Glow */}
                <div className="absolute inset-0 bg-radial from-[#F4A6BF]/25 via-[#FCE7EE]/30 to-transparent blur-xl pointer-events-none" />
                <div className="absolute top-4 right-4 w-32 h-32 gold-dust-glow opacity-50 pointer-events-none" />

                {/* Silhouette / Medical crest motif with gold border */}
                <div className="w-24 h-24 rounded-full bg-white border-2 border-[#D4AF37]/50 flex items-center justify-center mb-6 shadow-md relative z-10">
                  <Camera className="w-10 h-10 text-[#A96883]" />
                </div>

                <div className="space-y-3 z-10 max-w-xs relative">
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#F6E6ED] text-[#7F5668] border border-[#D4AF37]/30">
                    Client Photography Area
                  </span>
                  
                  <h4 className="font-serif text-xl sm:text-2xl text-[#282924] font-medium">
                    Practitioner photography to be supplied
                  </h4>
                  
                  <p className="text-xs text-[#74786E] leading-relaxed">
                    Per brand guidelines, stock imagery is never substituted for Katie Osborne's authentic portrait.
                  </p>

                  <button
                    onClick={onOpenChecklist}
                    type="button"
                    className="inline-flex items-center gap-1.5 text-xs text-[#8D5A6F] hover:text-[#7F5668] underline underline-offset-2 pt-2 cursor-pointer font-medium"
                  >
                    <span>Photo specification checklist</span>
                  </button>
                </div>

                {/* Subdued corner badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs py-2 px-3 rounded-xl border border-[#EAD7DF] text-[11px] text-[#74786E] flex items-center justify-center gap-2 z-10">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Katie Osborne · Founder &amp; Prescriber</span>
                </div>

              </div>

              {/* Decorative soft shadow accent */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl bg-[#C08EA1]/10 -z-10" />
            </div>
          </div>

          {/* Right Column: Biography & Credentials (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 sm:space-y-8">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="w-6 h-px bg-gradient-to-r from-[#D4AF37] to-[#C08EA1]"></span>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8D5A6F]">
                Meet Your Practitioner
              </span>
            </div>

            {/* Headline */}
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#282924] font-normal tracking-tight leading-[1.18]">
                Clinical expertise. <br />
                <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-[#7F5668] block mt-1 font-normal">
                  A personal touch.
                </span>
              </h2>
            </div>

            {/* Proposed Biography (Noticeable review badge) */}
            <div className="relative pl-4 border-l-2 border-[#C08EA1] space-y-3">
              <div className="text-[11px] font-semibold tracking-wider uppercase text-[#8D5A6F] flex items-center gap-1.5">
                <span>Proposed Biography for Katie's Approval</span>
              </div>
              <p className="text-sm sm:text-base text-[#74786E] leading-relaxed">
                At Majestic Aesthetics, every treatment journey starts with understanding you.
              </p>
              <p className="text-sm sm:text-base text-[#74786E] leading-relaxed">
                Katie Osborne brings a clinical background and a personal approach to aesthetic care, 
                focusing on thoughtful consultations, individual treatment planning and natural-looking results.
              </p>
              <p className="text-sm sm:text-base text-[#74786E] leading-relaxed">
                Her aim is to help clients make informed, confident decisions about their aesthetic treatments 
                in a professional and welcoming Southsea clinic environment.
              </p>
            </div>

            {/* Key Clinical Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {siteConfig.practitioner.keyHighlights.map((highlight, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#EAD7DF] text-xs text-[#282924]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#A96883] shrink-0 mt-0.5" />
                  <span className="font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Action CTA & Consultation reassurance */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                type="button"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#A96883] hover:bg-[#8D5A6F] rounded-full shadow-xs transition-colors cursor-pointer"
              >
                <span>Book a Consultation with Katie</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="mailto:info@majesticaesthetics.co.uk"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-medium text-[#7F5668] hover:text-[#282924] underline underline-offset-4"
              >
                <span>Direct Clinical Enquiry</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

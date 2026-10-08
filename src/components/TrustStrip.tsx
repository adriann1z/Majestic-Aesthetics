import React from 'react';
import { ShieldCheck, Stethoscope, UserCheck, Sparkles } from 'lucide-react';
import { trustPillars } from '../data/siteConfig';

export const TrustStrip: React.FC = () => {
  const icons = [Stethoscope, ShieldCheck, UserCheck, Sparkles];

  return (
    <section 
      aria-label="Clinical Credentials and Standards"
      className="bg-[#F9EDF2]/90 border-b border-[#EAD7DF] py-6 sm:py-8 relative overflow-hidden"
    >
      {/* Subtle gold dust accent texture */}
      <div className="absolute inset-0 gold-dust-glow opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#EAD7DF]/80">
          {trustPillars.map((pillar, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div 
                key={pillar.title} 
                className={`flex items-start gap-3.5 px-3 py-2 sm:px-4 ${
                  index > 1 ? 'pt-4 sm:pt-2' : ''
                }`}
              >
                <div className="p-2 rounded-xl bg-white/90 border border-[#D4AF37]/30 text-[#8D5A6F] shrink-0 mt-0.5 shadow-2xs">
                  <Icon className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="font-serif text-sm sm:text-base font-medium text-[#282924] leading-tight">
                    {pillar.title}
                  </h4>
                  <p className="text-[12px] text-[#74786E] mt-0.5 leading-snug">
                    {pillar.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

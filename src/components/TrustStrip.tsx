import React from 'react';
import { ShieldCheck, Stethoscope, UserCheck, Sparkles } from 'lucide-react';
import { trustPillars } from '../data/siteConfig';

export const TrustStrip: React.FC = () => {
  const icons = [Stethoscope, ShieldCheck, UserCheck, Sparkles];

  return (
    <section 
      aria-label="Clinical Credentials and Standards"
      className="credentials-strip bg-blush-pale/90 border-b border-border-blush py-6 sm:py-8 relative overflow-hidden"
    >

      <div className="section-inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:divide-x divide-border-blush">
          {trustPillars.map((pillar, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div 
                key={pillar.title} 
                className={`flex items-start gap-3.5 px-3 py-2 sm:px-4 ${
                  index > 1 ? 'pt-4 sm:pt-2' : ''
                }`}
              >
                <div className="p-3 rounded-full bg-white/90 border border-gold-metallic/35 shrink-0 mt-0.5">
                  <Icon className="w-6 h-6 text-gold-deep" strokeWidth={1.25} />
                </div>
                <div>
                  <h4 className="font-serif text-sm sm:text-base font-medium text-text-charcoal leading-tight">
                    {pillar.title}
                  </h4>
                  <p className="text-[10px] uppercase text-rose-accent mt-2 leading-snug">
                    {['Clinical expertise', 'Safe & professional', 'Tailored to you', 'Confidence, not overdone'][index]}
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

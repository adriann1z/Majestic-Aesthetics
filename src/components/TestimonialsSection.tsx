import React from 'react';
import { Quote, Sparkles, ShieldCheck, Heart } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  // Demonstration template cards displaying the architecture ready for Katie's verified testimonials
  const sampleLayouts = [
    {
      treatment: "Facial Aesthetics Consultation",
      previewQuote: "Client reviews and feedback quotes will appear here once approved by Katie Osborne.",
      source: "Verified Consultation Feedback",
      initials: "K.O. Client"
    },
    {
      treatment: "Skin Quality & Biorevitalisation",
      previewQuote: "Client reviews and feedback quotes will appear here once approved by Katie Osborne.",
      source: "Google / Clinic Feedback",
      initials: "Aesthetics Patient"
    },
    {
      treatment: "Bespoke Treatment Planning",
      previewQuote: "Client reviews and feedback quotes will appear here once approved by Katie Osborne.",
      source: "Verified Clinic Feedback",
      initials: "Southsea Client"
    }
  ];

  return (
    <section 
      aria-label="Client Testimonials and Reviews"
      className="py-16 sm:py-24 bg-blush-pale border-b border-border-blush"
    >
      <div className="section-inner max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-gradient-to-r from-gold-metallic to-rose-brand"></span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-rose-accent">
              Patient Experiences
            </span>
            <span className="w-6 h-px bg-gradient-to-l from-gold-metallic to-rose-brand"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-text-charcoal font-normal tracking-tight">
            Words from <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-rose-plum inline-block ml-1 font-normal">our clients.</span>
          </h2>

          <p className="text-base text-text-muted font-light leading-relaxed">
            A space for client experiences, with approved feedback to be added by Katie.
          </p>
        </div>

        {/* Professional Review Policy Banner */}
        <div className="mb-10 max-w-3xl mx-auto p-4.5 rounded-2xl bg-white/80 border border-border-blush flex items-center justify-center gap-3 text-center shadow-xs">
          <ShieldCheck className="w-5 h-5 text-rose-button shrink-0" />
          <p className="text-xs sm:text-sm text-text-muted">
            <strong className="text-text-charcoal font-medium">Authenticity Standard:</strong> In adherence to UK medical advertising ethics, reviews are not fabricated. Verified client testimonials will appear here once approved.
          </p>
        </div>

        {/* 3 Review Cards Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleLayouts.map((item, index) => (
            <div 
              key={index}
                className="bg-white rounded-lg p-7 border border-border-blush shadow-xs flex flex-col justify-between relative group hover:border-rose-brand/70 transition-colors"
            >
              <div>
                <Quote className="w-8 h-8 text-border-blush mb-4 group-hover:text-rose-brand/50 transition-colors" />

                <span className="text-[11px] font-semibold uppercase tracking-wider text-rose-accent block mb-2">
                  {item.treatment}
                </span>

                <p className="font-serif italic text-base sm:text-lg text-text-charcoal leading-relaxed mb-6">
                  "{item.previewQuote}"
                </p>
              </div>

              <div className="pt-4 border-t border-border-blush/60 flex items-center justify-between text-xs text-text-muted">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-rose-soft text-rose-accent font-serif font-medium flex items-center justify-center text-xs">
                    {item.initials.charAt(0)}
                  </div>
                  <div>
                    <span className="font-medium text-text-charcoal block">{item.initials}</span>
                    <span className="text-[10px] text-rose-accent">{item.source}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

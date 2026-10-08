import React from 'react';
import { Quote, Sparkles, ShieldCheck, Heart } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  // Demonstration template cards displaying the architecture ready for Katie's verified testimonials
  const sampleLayouts = [
    {
      treatment: "Facial Aesthetics Consultation",
      previewQuote: "Client reviews and feedback quotes will appear here once approved by Katie Osborne.",
      source: "Verified Consultation Feedback",
      dateLabel: "Pending Client Review",
      initials: "K.O. Client"
    },
    {
      treatment: "Skin Quality & Biorevitalisation",
      previewQuote: "Client reviews and feedback quotes will appear here once approved by Katie Osborne.",
      source: "Google / Clinic Feedback",
      dateLabel: "Pending Client Review",
      initials: "Aesthetics Patient"
    },
    {
      treatment: "Bespoke Treatment Planning",
      previewQuote: "Client reviews and feedback quotes will appear here once approved by Katie Osborne.",
      source: "Verified Clinic Feedback",
      dateLabel: "Pending Client Review",
      initials: "Southsea Client"
    }
  ];

  return (
    <section 
      aria-label="Client Testimonials and Reviews"
      className="py-16 sm:py-24 bg-[#F9EDF2] border-b border-[#EAD7DF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-gradient-to-r from-[#D4AF37] to-[#C08EA1]"></span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8D5A6F]">
              Patient Experiences
            </span>
            <span className="w-6 h-px bg-gradient-to-l from-[#D4AF37] to-[#C08EA1]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#282924] font-normal tracking-tight">
            Words from <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-[#7F5668] inline-block ml-1 font-normal">our clients.</span>
          </h2>

          <p className="text-base text-[#74786E] font-light leading-relaxed">
            Real feedback from individuals who have visited Katie Osborne for personalised consultations.
          </p>
        </div>

        {/* Professional Review Policy Banner */}
        <div className="mb-10 max-w-3xl mx-auto p-4.5 rounded-2xl bg-white/80 border border-[#EAD7DF] flex items-center justify-center gap-3 text-center shadow-xs">
          <ShieldCheck className="w-5 h-5 text-[#A96883] shrink-0" />
          <p className="text-xs sm:text-sm text-[#74786E]">
            <strong className="text-[#282924] font-medium">Authenticity Standard:</strong> In adherence to UK medical advertising ethics, reviews are not fabricated. Verified client testimonials will appear here once approved.
          </p>
        </div>

        {/* 3 Review Cards Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleLayouts.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-7 border border-[#EAD7DF] shadow-xs flex flex-col justify-between relative group hover:border-[#C08EA1]/70 transition-colors"
            >
              <div>
                <Quote className="w-8 h-8 text-[#EAD7DF] mb-4 group-hover:text-[#C08EA1]/50 transition-colors" />

                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8D5A6F] block mb-2">
                  {item.treatment}
                </span>

                <p className="font-serif italic text-base sm:text-lg text-[#282924] leading-relaxed mb-6">
                  "{item.previewQuote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAD7DF]/60 flex items-center justify-between text-xs text-[#74786E]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#F6E6ED] text-[#8D5A6F] font-serif font-medium flex items-center justify-center text-xs">
                    {item.initials.charAt(0)}
                  </div>
                  <div>
                    <span className="font-medium text-[#282924] block">{item.initials}</span>
                    <span className="text-[10px] text-[#8D5A6F]">{item.source}</span>
                  </div>
                </div>

                <span className="text-[10px] italic">{item.dateLabel}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

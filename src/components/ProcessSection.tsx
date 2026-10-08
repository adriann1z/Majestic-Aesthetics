import React from 'react';
import { MessageSquare, ClipboardCheck, Sparkles, HeartHandshake } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Let's Talk",
      description: "Every journey begins with a conversation about your concerns, goals and expectations.",
      icon: MessageSquare,
      detail: "In-depth review of your medical history, skin habits, and individual aesthetic wishes with zero sales pressure."
    },
    {
      num: "02",
      title: "Personalised Planning",
      description: "Explore an individual treatment approach informed by your needs, preferences and clinical considerations.",
      icon: ClipboardCheck,
      detail: "Bespoke assessment of facial anatomy, symmetry, and product choices tailored strictly to your natural features."
    },
    {
      num: "03",
      title: "Continued Support",
      description: "Receive clear information and appropriate aftercare guidance to support your treatment journey.",
      icon: HeartHandshake,
      detail: "Comprehensive written aftercare documentation and prompt, direct follow-up access for reassurance at every stage."
    }
  ];

  return (
    <section 
      id="approach"
      className="py-16 sm:py-24 bg-[#F9EDF2] border-b border-[#EAD7DF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-gradient-to-r from-[#D4AF37] to-[#C08EA1]"></span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8D5A6F]">
              The Majestic Experience
            </span>
            <span className="w-6 h-px bg-gradient-to-l from-[#D4AF37] to-[#C08EA1]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#282924] font-normal tracking-tight">
            Considered care, <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-[#7F5668] inline-block ml-1 font-normal">every step.</span>
          </h2>

          <p className="text-base text-[#74786E] font-light leading-relaxed">
            A thoughtful approach to consultations, treatment planning and ongoing support.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.num}
                className="bg-white rounded-3xl p-8 sm:p-9 border border-[#EAD7DF] hover:border-[#D4AF37]/40 shadow-xs hover:shadow-lg hover:shadow-[#C08EA1]/10 transition-all relative flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#EAD7DF]/80">
                    <span className="font-serif text-4xl sm:text-5xl text-gold-shimmer font-medium tracking-tight">
                      {step.num}
                    </span>
                    <div className="p-3 rounded-2xl bg-[#FFF8FB] border border-[#D4AF37]/30 text-[#7F5668] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-2xl text-[#282924] mb-3 font-medium">
                    {step.title}
                  </h3>

                  <p className="text-sm font-medium text-[#282924] leading-relaxed mb-3">
                    {step.description}
                  </p>

                  <p className="text-xs text-[#74786E] leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EAD7DF]/50 flex items-center gap-2 text-[11px] text-[#8D5A6F] font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-[#A96883]" />
                  <span>Clinical Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

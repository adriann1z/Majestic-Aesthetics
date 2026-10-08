import React from 'react';
import { MessageSquare, ClipboardCheck, Sparkles, HeartHandshake } from 'lucide-react';
import { DecorativeBackground } from './DecorativeBackground';

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
      className="py-16 sm:py-24 bg-blush-pale border-b border-border-blush"
    >
      <DecorativeBackground variant="wash" />
      <div className="section-inner max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
                {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-gradient-to-r from-gold-metallic to-rose-brand"></span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-rose-accent">
              The Majestic Experience
            </span>
            <span className="w-6 h-px bg-gradient-to-l from-gold-metallic to-rose-brand"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-text-charcoal font-normal tracking-tight">
            Considered care, <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-rose-plum inline-block ml-1 font-normal">every step.</span>
          </h2>

          <p className="text-base text-text-muted font-light leading-relaxed">
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
                className="process-step transition-all relative flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-border-blush/80">
                    <span className="font-serif text-4xl sm:text-5xl text-gold-shimmer font-medium tracking-tight">
                      {step.num}
                    </span>
                    <div className="process-icon p-4 bg-blush-white border border-gold-metallic/30 text-rose-plum group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-gold-metallic" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-2xl text-text-charcoal mb-3 font-medium">
                    {step.title}
                  </h3>

                  <p className="text-sm font-medium text-text-charcoal leading-relaxed mb-3">
                    {step.description}
                  </p>

                  <p className="text-xs text-text-muted leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-border-blush/50 flex items-center gap-2 text-[11px] text-rose-accent font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-rose-button" />
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

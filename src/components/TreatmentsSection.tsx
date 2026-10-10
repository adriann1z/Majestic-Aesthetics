import React from 'react';
import { Treatment, treatmentsData } from '../data/treatments';
import { TreatmentCard } from './TreatmentCard';
import { DecorativeBackground } from './DecorativeBackground';

interface TreatmentsSectionProps {
  onSelectTreatment: (treatment: Treatment) => void;
  onOpenBooking: () => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  onSelectTreatment,
  onOpenBooking
}) => {
  return (
    <section 
      id="treatments"
      className="py-16 sm:py-24 bg-blush-white border-b border-border-blush"
    >
      <DecorativeBackground variant="botanical" />
      <div className="section-inner treatment-section-inner mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-gradient-to-r from-gold-metallic to-rose-brand"></span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-rose-accent">
              Our Treatments
            </span>
            <span className="w-6 h-px bg-gradient-to-l from-gold-metallic to-rose-brand"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-text-charcoal font-normal tracking-tight">
            Discover your <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-rose-plum inline-block ml-1 font-normal">treatment.</span>
          </h2>

          <p className="text-base text-text-muted font-light leading-relaxed">
            Explore personalised aesthetic treatments with your individual goals, comfort and wellbeing at the centre.
          </p>
        </div>

        {/* Four treatments share one row on desktop. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-6 items-stretch">
          {treatmentsData.map((treatment) => (
            <TreatmentCard
              key={treatment.id}
              treatment={treatment}
              onSelect={onSelectTreatment}
            />
          ))}
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="consultation-band mt-12 sm:mt-16 border-y border-border-blush flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-base font-medium text-text-charcoal">
              Unsure which treatment suits your skin goals?
            </h4>
            <p className="text-xs sm:text-sm text-text-muted mt-0.5">
              Every appointment begins with an in-depth clinical consultation with Katie Osborne before any treatment plan is agreed.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            type="button"
            className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-rose-button hover:bg-rose-accent rounded-full shadow-xs transition-colors shrink-0 cursor-pointer"
          >
            Arrange a Consultation
          </button>
        </div>

      </div>
    </section>
  );
};

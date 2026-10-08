import React from 'react';
import { Treatment, treatmentsData } from '../data/treatments';
import { TreatmentCard } from './TreatmentCard';

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
      className="py-16 sm:py-24 bg-[#FFF8FB] border-b border-[#EAD7DF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-gradient-to-r from-[#D4AF37] to-[#C08EA1]"></span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8D5A6F]">
              Our Treatments
            </span>
            <span className="w-6 h-px bg-gradient-to-l from-[#D4AF37] to-[#C08EA1]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#282924] font-normal tracking-tight">
            Feel like yourself, <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-[#7F5668] inline-block ml-1 font-normal">at your best.</span>
          </h2>

          <p className="text-base text-[#74786E] font-light leading-relaxed">
            Explore personalised aesthetic treatments with your individual goals, comfort and wellbeing at the centre.
          </p>
        </div>

        {/* 3-Column Treatment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatmentsData.map((treatment) => (
            <TreatmentCard
              key={treatment.id}
              treatment={treatment}
              onSelect={onSelectTreatment}
            />
          ))}
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="mt-12 sm:mt-16 p-6 rounded-2xl bg-[#F9EDF2] border border-[#EAD7DF] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-base font-medium text-[#282924]">
              Unsure which treatment suits your skin goals?
            </h4>
            <p className="text-xs sm:text-sm text-[#74786E] mt-0.5">
              Every appointment begins with an in-depth clinical consultation with Katie Osborne before any treatment plan is agreed.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            type="button"
            className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#A96883] hover:bg-[#8D5A6F] rounded-full shadow-xs transition-colors shrink-0 cursor-pointer"
          >
            Arrange a Consultation
          </button>
        </div>

      </div>
    </section>
  );
};

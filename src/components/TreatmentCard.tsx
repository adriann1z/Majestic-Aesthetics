import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Treatment } from '../data/treatments';

interface TreatmentCardProps {
  treatment: Treatment;
  onSelect: (treatment: Treatment) => void;
}

export const TreatmentCard: React.FC<TreatmentCardProps> = ({ treatment, onSelect }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <article 
      onClick={() => onSelect(treatment)}
      className="group bg-white rounded-2xl overflow-hidden border border-[#EAD7DF] shadow-sm hover:shadow-xl hover:shadow-[#C08EA1]/15 transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
    >
      {/* Edge-to-edge photography container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F9EDF2]">
        {!imgError ? (
          <img
            src={treatment.image}
            alt={treatment.imageAlt}
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
              imgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#F6E6ED] text-[#8D5A6F] font-serif text-lg">
            {treatment.title}
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white relative">
        <div className="absolute top-0 right-8 w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div>
          <span className="text-[11px] font-semibold tracking-widest text-[#8D5A6F] uppercase">
            {treatment.category}
          </span>

          <h3 className="font-serif text-2xl text-[#282924] font-medium mt-1.5 mb-3 group-hover:text-[#7F5668] transition-colors">
            {treatment.title}
          </h3>

          <p className="text-sm text-[#74786E] leading-relaxed line-clamp-3">
            {treatment.shortDescription}
          </p>
        </div>

        <div className="pt-6 mt-4 border-t border-[#EAD7DF]/60 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A96883] group-hover:text-[#7F5668] transition-colors">
            Explore Treatment
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </span>
          <span className="text-[11px] text-[#74786E]">In-person assessment</span>
        </div>
      </div>
    </article>
  );
};

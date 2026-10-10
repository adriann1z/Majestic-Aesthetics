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
    <button
      type="button"
      onClick={() => onSelect(treatment)}
      aria-label={`Explore ${treatment.title}`}
      className="treatment-card group text-left w-full min-w-0 bg-white overflow-hidden border border-border-blush transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-2 focus-visible:-translate-y-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-button motion-reduce:transform-none"
    >
      {/* Edge-to-edge photography container */}
      <div className="relative aspect-square w-full overflow-hidden bg-blush-pale shrink-0">
        {!imgError ? (
          <img
            src={treatment.image}
            alt={treatment.imageAlt}
            className={`w-full h-full ${treatment.imageFit === 'contain' ? 'object-contain' : 'object-cover group-hover:scale-105'} transition-transform duration-700 ${
              imgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-rose-soft text-rose-accent font-serif text-lg">
            {treatment.title}
          </div>
        )}

        {treatment.imageFit !== 'contain' && <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />}
      </div>

      {/* Card Content */}
      <div className="p-5 xl:p-6 flex flex-col flex-1 justify-between bg-white relative w-full">
        <div className="absolute top-0 right-8 w-20 h-1 bg-gradient-to-r from-transparent via-gold-metallic/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div>
          <span className="block min-h-8 text-[10px] leading-4 font-semibold text-rose-accent uppercase">
            {treatment.category}
          </span>

          <h3 className="font-serif text-[23px] leading-tight lg:min-h-[87px] xl:min-h-[58px] text-text-charcoal font-medium mt-1.5 mb-3 group-hover:text-rose-plum group-focus-visible:text-rose-plum transition-colors">
            {treatment.title}
          </h3>

          <p className="text-sm text-text-muted leading-relaxed">
            {treatment.shortDescription}
          </p>
        </div>

        <div className="pt-4 mt-5 border-t border-border-blush/60 flex flex-col items-start gap-2">
          <span className="inline-flex items-center justify-between w-full gap-2 text-[11px] font-semibold uppercase text-rose-button group-hover:text-rose-plum transition-colors">
            Explore Treatment
            <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transform-none" />
          </span>
          <span className="text-[11px] text-text-muted">In-person assessment</span>
        </div>
      </div>
    </button>
  );
};

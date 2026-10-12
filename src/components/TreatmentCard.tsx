import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Treatment } from '../data/treatments';
import { treatmentPricing } from '../data/pricing';

interface TreatmentCardProps {
  treatment: Treatment;
  onSelect: (treatment: Treatment) => void;
}

export const TreatmentCard: React.FC<TreatmentCardProps> = ({ treatment, onSelect }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const pricing = treatmentPricing.filter((entry) => entry.treatmentId === treatment.id && !entry.isSignaturePackage);
  const startingPrice = pricing.length > 0
    ? Math.min(...pricing.flatMap((entry) => entry.items.map((item) => item.amount)))
    : null;

  return (
    <button
      type="button"
      onClick={() => onSelect(treatment)}
      aria-label={startingPrice !== null ? `View prices for ${treatment.title}` : `Explore ${treatment.title}`}
      className="treatment-card group text-left w-full min-w-0 bg-white overflow-hidden border border-border-blush transition-colors flex flex-col cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-button"
    >
      {/* Edge-to-edge photography container */}
      <div className="relative aspect-square w-full overflow-hidden bg-blush-pale shrink-0">
        {!imgError ? (
          <img
            src={treatment.image}
            alt={treatment.imageAlt}
            className={`w-full h-full ${treatment.imageFit === 'contain' ? 'object-contain' : 'object-cover'} transition-opacity duration-300 ${
              imgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            loading="lazy"
            decoding="async"
            width={1080}
            height={1080}
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-rose-soft text-rose-accent font-serif text-lg">
            {treatment.title}
          </div>
        )}

      </div>

      <div className="w-full h-10 shrink-0 flex items-center justify-between gap-2 px-5 xl:px-6 border-b border-border-blush bg-blush-pale/40 text-xs text-text-muted">
        <span>{startingPrice !== null ? 'From' : 'Pricing'}</span>
        <span className="font-semibold text-rose-plum tabular-nums">{startingPrice !== null
          ? new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(startingPrice)
          : 'On enquiry'}</span>
      </div>

      {/* Card Content */}
      <div className="p-4 xl:p-5 flex flex-col flex-1 justify-between bg-white relative w-full">
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

        <div className="pt-3 mt-4 border-t border-border-blush/60 flex flex-col items-start gap-1.5">
          <span className="inline-flex items-center justify-between w-full gap-2 text-[11px] font-semibold uppercase text-rose-button group-hover:text-rose-plum transition-colors">
            {startingPrice !== null ? 'View Prices' : 'Explore Treatment'}
            <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transform-none" />
          </span>
          <span className="text-[11px] text-text-muted">In-person assessment</span>
        </div>
      </div>
    </button>
  );
};

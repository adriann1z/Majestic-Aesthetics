import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { BookingFocus } from '../data/booking';
import { WellnessProgramme } from '../data/wellness';

interface WellnessProgrammeCardProps {
  programme: WellnessProgramme;
  onEnquire: (focus: BookingFocus) => void;
}

export const WellnessProgrammeCard: React.FC<WellnessProgrammeCardProps> = ({ programme, onEnquire }) => (
  <article
    id={programme.id}
    className="wellness-programme-card group flex h-full flex-col border border-border-blush bg-white p-5 sm:p-7"
    aria-labelledby={`${programme.id}-title`}
  >
    <div className="flex items-center gap-3 border-b border-gold-metallic/35 pb-4">
      <span className="font-serif text-2xl text-gold-deep/70" aria-hidden="true">{programme.number}</span>
      <span className="text-[11px] font-semibold uppercase text-rose-accent">{programme.stage}</span>
    </div>

    <div className="pt-5">
      <h3 id={`${programme.id}-title`} className="font-serif text-2xl leading-tight text-text-charcoal sm:text-[1.7rem]">
        {programme.name}
      </h3>
      <div className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className="font-serif text-4xl text-rose-plum">{programme.price}</span>
        <span className="text-sm text-text-muted">· {programme.duration}</span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-text-muted">{programme.bestFor}</p>
    </div>

    <div className="mt-6 flex-1 border-t border-border-blush pt-5">
      <p className="mb-4 text-xs font-semibold uppercase text-rose-plum">Your programme</p>
      <ul className="space-y-3">
        {programme.inclusions.map((inclusion) => (
          <li key={inclusion} className="flex items-start gap-2.5 text-sm leading-relaxed text-text-charcoal">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold-metallic/70 text-gold-deep" aria-hidden="true">
              <Check className="h-3 w-3" strokeWidth={2} />
            </span>
            <span>{inclusion}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="mt-6 space-y-4">
      <div className="border border-gold-metallic/30 bg-[#FBF6EF] px-4 py-3 text-sm font-semibold text-rose-plum">
        {programme.allowance}
      </div>
      <p className="text-xs leading-relaxed text-text-muted">{programme.value}</p>
      <button
        type="button"
        onClick={() => onEnquire(programme.bookingFocus)}
        className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-rose-button px-5 py-3 text-center text-xs font-semibold uppercase text-white transition-colors hover:bg-rose-accent"
      >
        <span>Enquire about this programme</span>
        <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
      </button>
    </div>
  </article>
);

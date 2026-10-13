import React from 'react';
import { ArrowRight, HeartHandshake, Layers3, Sparkles } from 'lucide-react';
import { BookingFocus } from '../data/booking';
import { discoveryConsultationFocus } from '../data/wellness';

interface WellnessTeaserProps {
  onExplore: () => void;
  onOpenBooking: (focus: BookingFocus) => void;
}

export const WellnessTeaser: React.FC<WellnessTeaserProps> = ({ onExplore, onOpenBooking }) => (
  <section id="collective" className="wellness-teaser overflow-hidden border-b border-border-blush bg-blush-white py-16 sm:py-24" aria-labelledby="collective-teaser-title">
    <div className="wellness-orb wellness-orb--one" aria-hidden="true" />
    <div className="wellness-orb wellness-orb--two" aria-hidden="true" />
    <div className="section-inner relative z-10 mx-auto px-5 sm:px-8 lg:px-12">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <div className="mb-5 flex items-center gap-2.5">
            <span className="h-px w-8 bg-gold-metallic" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase text-rose-accent">New at Majestic Aesthetics</p>
          </div>
          <h2 id="collective-teaser-title" className="font-serif text-3xl leading-tight text-text-charcoal sm:text-4xl lg:text-5xl">
            The Skin &amp; Hormone Collective
            <span className="mt-2 block font-script text-4xl font-normal text-rose-plum sm:text-5xl">at Majestic Aesthetics.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
            Your skin does not exist in isolation. The Collective brings clinical aesthetics, hormone-informed skin health, lifestyle and whole-body wellbeing into one thoughtful, personalised conversation.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={onExplore}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-rose-button px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-accent"
            >
              Explore the Collective <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => onOpenBooking(discoveryConsultationFocus)}
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-gold-metallic/60 bg-white px-7 py-3 text-sm font-semibold text-rose-plum transition-colors hover:bg-blush-pale"
            >
              Book a Consultation
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="wellness-teaser-panel border border-gold-metallic/35 bg-white/85 p-6 shadow-lg shadow-rose-brand/10 sm:p-8">
            <Sparkles className="h-6 w-6 text-gold-deep" aria-hidden="true" />
            <p className="mt-4 font-serif text-2xl leading-snug text-text-charcoal">Understand your skin. Explore the bigger picture.</p>
            <div className="mt-6 space-y-4 border-t border-border-blush pt-5">
              <div className="flex items-start gap-3">
                <Layers3 className="mt-0.5 h-5 w-5 shrink-0 text-rose-button" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-text-muted">Begin with a standalone 60-minute Discovery Consultation, with no programme commitment.</p>
              </div>
              <div className="flex items-start gap-3">
                <HeartHandshake className="mt-0.5 h-5 w-5 shrink-0 text-rose-button" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-text-muted">Or explore three levels of ongoing support, shaped around your individual stage and priorities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

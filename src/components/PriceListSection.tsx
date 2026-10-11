import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { treatmentPricing, TreatmentPricing } from '../data/pricing';

const currency = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' });

export const TreatmentPrices: React.FC<{ pricing: TreatmentPricing }> = ({ pricing }) => (
  <div>
    <h3 className="font-serif text-xl text-rose-plum mb-4">{pricing.title}</h3>
    <dl className="divide-y divide-border-blush border-y border-border-blush">
      {pricing.items.map((item) => (
        <div key={item.label} className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-1 py-4 text-sm">
          <dt className="min-w-0 text-text-charcoal">
            {item.label}
            {item.note && <span className="block mt-1 text-xs text-text-muted leading-relaxed">{item.note}</span>}
          </dt>
          <dd className="font-semibold text-rose-plum whitespace-nowrap tabular-nums">{currency.format(item.amount)}</dd>
        </div>
      ))}
    </dl>
    {pricing.notes.length > 0 && (
      <div className="mt-4 space-y-2 text-sm text-text-muted leading-relaxed">
        {pricing.notes.map((note) => <p key={note}>{note}</p>)}
      </div>
    )}
  </div>
);

export const PriceListSection: React.FC<{ onOpenEnquiry: (treatmentName: string) => void }> = ({ onOpenEnquiry }) => (
  <section id="prices" aria-labelledby="price-list-title" className="py-16 sm:py-24 bg-blush-pale/50 border-b border-border-blush">
    <div className="section-inner mx-auto px-5 sm:px-8 lg:px-12">
      <div className="mb-10 sm:mb-12">
        <h2 id="price-list-title" className="font-serif text-3xl sm:text-4xl text-text-charcoal">Price List &amp; Signature Treatment Packages</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
        {treatmentPricing.map((pricing) => (
          <div key={pricing.treatmentId} className="min-w-0">
            <TreatmentPrices pricing={pricing} />
            <button type="button" onClick={() => onOpenEnquiry(pricing.treatmentId === 'dermal-fillers' ? 'Dermal Fillers' : 'Anti-Wrinkle Consultations')} className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-rose-plum hover:text-rose-accent cursor-pointer">
              Get Started Here <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

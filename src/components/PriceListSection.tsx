import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { treatmentPricing, TreatmentPricing, pricingEnquiryCategories } from '../data/pricing';

const currency = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' });

export const TreatmentPrices: React.FC<{ pricing: TreatmentPricing; compact?: boolean }> = ({ pricing, compact = false }) => (
  <div>
    <h3 className={`font-serif ${compact ? 'text-base' : 'text-lg'} text-rose-plum mb-2`}>{pricing.title}</h3>
    <dl className="divide-y divide-border-blush border-y border-border-blush">
      {pricing.items.map((item) => (
        <div key={item.label} className={`grid grid-cols-[minmax(0,1fr)_7rem] ${compact ? 'gap-x-2 py-2 text-xs' : 'gap-x-3 py-2.5 text-sm'} gap-y-1 items-baseline`}>
          <dt className="min-w-0 text-text-charcoal">
            {item.label}
          </dt>
          <dd className="font-semibold text-rose-plum whitespace-nowrap tabular-nums text-right">{item.from && <span className="text-xs font-normal mr-1">From</span>}{currency.format(item.amount)}</dd>
          {item.note && <dd className="col-span-2 text-xs text-text-muted leading-relaxed">{item.note}</dd>}
        </div>
      ))}
    </dl>
    {pricing.notes.length > 0 && (
      <div className="mt-2 space-y-1 text-xs text-text-muted leading-relaxed">
        {pricing.notes.map((note) => <p key={note}>{note}</p>)}
      </div>
    )}
  </div>
);

export const PriceListSection: React.FC<{ onOpenEnquiry: (treatmentName: string) => void }> = ({ onOpenEnquiry }) => (
  <section id="prices" aria-labelledby="price-list-title" className="py-16 sm:py-24 bg-blush-pale/50 border-b border-border-blush">
    <div className="section-inner mx-auto px-5 sm:px-8 lg:px-12">
      <div className="mb-10 sm:mb-12">
        <h2 id="price-list-title" className="font-serif text-3xl sm:text-4xl text-text-charcoal">Client Favourite Packages</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-7">
        {treatmentPricing.filter((pricing) => pricing.isSignaturePackage).map((pricing) => (
          <div key={pricing.title} className="min-w-0">
            <TreatmentPrices pricing={pricing} />
            <button type="button" onClick={() => onOpenEnquiry(pricingEnquiryCategories[pricing.treatmentId])} className="inline-flex items-center gap-2 mt-3 text-xs font-semibold text-rose-plum hover:text-rose-accent cursor-pointer">
              Get Started Here <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-12 border-t border-border-blush pt-6 text-sm text-text-muted">
        <p>Consultations are {currency.format(30)}, deductible from any treatment package you book.</p>
        <button type="button" onClick={() => onOpenEnquiry('General Consultation')} className="inline-flex items-center gap-2 mt-4 font-semibold text-rose-plum hover:text-rose-accent cursor-pointer">
          Book a Consultation <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  </section>
);

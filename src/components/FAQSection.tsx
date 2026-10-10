import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqList } from '../data/faq';
import { DecorativeBackground } from './DecorativeBackground';
import { siteConfig } from '../data/siteConfig';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section 
      id="faq"
      className="py-16 sm:py-24 bg-blush-white border-b border-border-blush"
    >
      <DecorativeBackground variant="wash" />
      <div className="section-inner faq-inner max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-gradient-to-r from-gold-metallic to-rose-brand"></span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-rose-accent">
              Clear Information
            </span>
            <span className="w-6 h-px bg-gradient-to-l from-gold-metallic to-rose-brand"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-text-charcoal font-normal tracking-tight">
            Your questions, <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-rose-plum inline-block ml-1 font-normal">answered.</span>
          </h2>

          <p className="text-base text-text-muted font-light leading-relaxed">
            Everything you need to know about preparing for your visit to Majestic Aesthetics.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {faqList.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id}
                className="bg-white rounded-lg border border-border-blush overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`${item.id}-answer`}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-blush-white transition-colors"
                  type="button"
                >
                  <span className="font-serif text-base sm:text-lg text-text-charcoal font-medium">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-blush-pale text-rose-accent transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-rose-brand text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div id={`${item.id}-answer`} className="px-6 pb-6 pt-1 text-sm text-text-muted leading-relaxed border-t border-border-blush/40 animate-in fade-in-50 duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional support note */}
        <div className="mt-8 text-center text-xs text-text-muted">
          Have a specific clinical inquiry or medical question?{' '}
          <a href={`mailto:${siteConfig.contact.email}`} className="text-rose-accent hover:underline font-medium">
            Contact Katie directly via email
          </a>
        </div>

      </div>
    </section>
  );
};

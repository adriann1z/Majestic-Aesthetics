import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqList } from '../data/faq';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section 
      id="faq"
      className="py-16 sm:py-24 bg-[#FFF8FB] border-b border-[#EAD7DF]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-gradient-to-r from-[#D4AF37] to-[#C08EA1]"></span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8D5A6F]">
              Clear Information
            </span>
            <span className="w-6 h-px bg-gradient-to-l from-[#D4AF37] to-[#C08EA1]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#282924] font-normal tracking-tight">
            Your questions, <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-[#7F5668] inline-block ml-1 font-normal">answered.</span>
          </h2>

          <p className="text-base text-[#74786E] font-light leading-relaxed">
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
                className="bg-white rounded-2xl border border-[#EAD7DF] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FFF8FB] transition-colors"
                  type="button"
                >
                  <span className="font-serif text-base sm:text-lg text-[#282924] font-medium">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-[#F9EDF2] text-[#8D5A6F] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-[#C08EA1] text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#74786E] leading-relaxed border-t border-[#EAD7DF]/40 animate-in fade-in-50 duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional support note */}
        <div className="mt-8 text-center text-xs text-[#74786E]">
          Have a specific clinical inquiry or medical question?{' '}
          <a href="mailto:info@majesticaesthetics.co.uk" className="text-[#8D5A6F] hover:underline font-medium">
            Contact Katie directly via email
          </a>
        </div>

      </div>
    </section>
  );
};

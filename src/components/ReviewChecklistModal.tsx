import React from 'react';
import { X, CheckCircle, AlertTriangle, HelpCircle, FileText, ExternalLink, ShieldCheck } from 'lucide-react';
import { clientReviewItems, siteConfig } from '../data/siteConfig';
import { BrandLogo } from './BrandLogo';
import { useDialogFocus } from '../hooks/useDialogFocus';

interface ReviewChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReviewChecklistModal: React.FC<ReviewChecklistModalProps> = ({ isOpen, onClose }) => {
  useDialogFocus(isOpen, onClose);
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Katie's verification checklist"
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-border-blush my-auto relative animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-text-charcoal text-white px-6 py-4 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-4">
            <div className="w-44 sm:w-52">
              <BrandLogo variant="light" showSubtitle={true} />
            </div>
            <div className="hidden sm:block border-l border-stone-700 pl-4">
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-rose-button text-white block w-fit">
                Client Review Deck
              </span>
              <span className="text-[11px] text-stone-300">Katie Osborne Verification</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-stone-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close review checklist"
            type="button"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="p-4 rounded-2xl bg-blush-white border border-border-blush text-xs text-text-muted leading-relaxed">
            <strong className="text-text-charcoal block mb-1 font-medium">Dear Katie,</strong>
            This private design concept was created to showcase how Majestic Aesthetics can transition into a modern luxury clinic brand. 
            Before taking this website live or setting up production hosting, the following items should be checked and confirmed with you:
          </div>

          <div className="space-y-3.5">
            {clientReviewItems.map((item, idx) => (
              <div 
                key={item.id}
                className="p-4 rounded-2xl bg-white border border-border-blush shadow-xs space-y-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-rose-soft text-rose-button text-xs flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    <h4 className="font-serif text-base text-text-charcoal font-medium">
                      {item.item}
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-accent bg-blush-pale px-2.5 py-0.5 rounded-full">
                    <AlertTriangle className="w-3 h-3 text-rose-button" />
                    {item.status}
                  </span>
                </div>

                <div className="text-xs bg-blush-white p-2.5 rounded-xl border border-border-blush/60 text-text-charcoal">
                  <span className="text-text-muted block text-[10px] uppercase tracking-wider mb-0.5">
                    Currently in Design Concept:
                  </span>
                  <span className="font-mono text-xs">{item.currentConceptValue}</span>
                </div>

                <p className="text-xs text-text-muted leading-relaxed">
                  <strong className="text-rose-plum">Action Required:</strong> {item.actionRequired}
                </p>
              </div>
            ))}
          </div>

          {/* Clinical & UK Advertising Compliance Notice */}
          <div className="p-4 rounded-2xl bg-rose-soft/60 border border-border-blush flex items-start gap-3 text-xs text-text-muted">
            <ShieldCheck className="w-5 h-5 text-rose-accent shrink-0 mt-0.5" />
            <div>
              <strong className="text-text-charcoal block mb-0.5">UK Regulatory Compliance Adherence</strong>
              The website deliberately avoids direct promotional claims for prescription-only medicines, complies with ASA/CAP guidelines, and frames anti-wrinkle appointments as professional consultations with an Independent Prescriber.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-blush-white px-6 py-4 border-t border-border-blush flex items-center justify-between">
          <span className="text-xs text-text-muted">
            Majestic Aesthetics Concept · Southsea
          </span>
          <button
            onClick={onClose}
            type="button"
            className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-rose-button hover:bg-rose-accent rounded-full transition-colors cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>

      </div>
    </div>
  );
};

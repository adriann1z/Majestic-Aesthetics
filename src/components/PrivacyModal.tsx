import React from 'react';
import { X, ShieldCheck, Lock, FileText, AlertCircle } from 'lucide-react';
import { useDialogFocus } from '../hooks/useDialogFocus';
import { siteConfig } from '../data/siteConfig';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  useDialogFocus(isOpen, onClose);
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Privacy and data policy"
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-border-blush my-auto relative animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-blush-white px-6 py-5 border-b border-border-blush flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-rose-button" />
            <div>
              <span className="text-[11px] font-semibold tracking-wider text-rose-accent uppercase block">
                UK Compliance Notice
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-text-charcoal">
                Privacy & Data Policy
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-blush-pale text-text-muted hover:text-text-charcoal transition-colors cursor-pointer"
            aria-label="Close modal"
            type="button"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-sm text-text-muted leading-relaxed">
          <div className="p-3.5 rounded-xl bg-rose-soft/60 border border-border-blush flex items-start gap-2 text-xs text-rose-plum">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-button" />
            <span>
              <strong>Draft Policy Notice:</strong> This policy structure is prepared as part of the private design concept for Majestic Aesthetics (Katie Osborne). It will be reviewed and finalised prior to live launch.
            </span>
          </div>

          <section className="space-y-2">
            <h4 className="font-serif text-base text-text-charcoal font-medium">1. Data Controller</h4>
            <p>
              Majestic Aesthetics is the data controller for personal information gathered through this website. Clinical enquiries are handled in confidence by clinic practitioner Katie Osborne.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-serif text-base text-text-charcoal font-medium">2. Information We Collect</h4>
            <p>
              When submitting an enquiry or booking request, we collect your name, email address, optional contact telephone number, and message contents strictly to manage consultation scheduling.
            </p>
            <p>
              We do not collect sensitive clinical records or medical histories via online public web forms; medical histories are taken during your private in-clinic consultation.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-serif text-base text-text-charcoal font-medium">3. Use of Information</h4>
            <p>
              Personal details are used solely to communicate regarding requested appointments, answer treatment queries, and provide aftercare documentation. We never sell, rent, or trade your contact information to third parties.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-serif text-base text-text-charcoal font-medium">4. Cookies & Analytics</h4>
            <p>
              This website uses only essential session storage for navigational preferences. No invasive marketing trackers or third-party advertising cookies are active.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-serif text-base text-text-charcoal font-medium">5. Your UK GDPR Rights</h4>
            <p>
              Under UK GDPR, you have the right to request access to, rectification of, or erasure of your personal contact data at any time by emailing{' '}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-rose-button underline">
                {siteConfig.contact.email}
              </a>.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="bg-blush-white px-6 py-4 border-t border-border-blush flex justify-end">
          <button
            onClick={onClose}
            type="button"
            className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-rose-button hover:bg-rose-accent rounded-full transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

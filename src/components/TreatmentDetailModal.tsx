import React from 'react';
import { X, CheckCircle2, AlertCircle, Calendar, ArrowRight, HelpCircle, HeartPulse, Sparkles } from 'lucide-react';
import { Treatment } from '../data/treatments';
import { BrandLogo } from './BrandLogo';
import { useDialogFocus } from '../hooks/useDialogFocus';

interface TreatmentDetailModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onBookTreatment: (treatmentName: string) => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  treatment,
  onClose,
  onBookTreatment
}) => {
  useDialogFocus(treatment !== null, onClose);
  if (!treatment) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 lg:p-6 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-treatment-title"
    >
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-border-blush my-auto relative animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
      >
        {/* Modal Header Bar */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-border-blush flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-36 sm:w-44 hidden sm:block">
              <BrandLogo variant="compact" showSubtitle={false} />
            </div>
            <div className="sm:border-l sm:border-border-blush sm:pl-4">
              <span className="text-[11px] font-semibold tracking-widest text-rose-accent uppercase">
                {treatment.category}
              </span>
              <h2 id="modal-treatment-title" className="font-serif text-xl sm:text-2xl text-text-charcoal">
                {treatment.title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-blush-pale text-text-muted hover:text-text-charcoal transition-colors cursor-pointer"
            aria-label="Close dialog"
            type="button"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Banner Image & Overview */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className={`md:col-span-5 rounded-2xl overflow-hidden ${treatment.imageFit === 'contain' ? 'aspect-square' : 'aspect-[4/3]'} bg-blush-pale border border-border-blush`}>
              <img
                src={treatment.image}
                alt={treatment.imageAlt}
                className={`w-full h-full ${treatment.imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="font-serif text-lg text-text-charcoal">Clinical Overview</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {treatment.fullOverview}
              </p>
              <div className="p-3.5 rounded-xl bg-blush-white border border-border-blush flex items-start gap-2.5 text-xs text-rose-plum">
                <HeartPulse className="w-4 h-4 shrink-0 text-rose-button mt-0.5" />
                <span>
                  Administered following face-to-face medical assessment by Katie Osborne (Independent Prescriber).
                </span>
              </div>
            </div>
          </div>

          {/* Suitability & Candidate Assessment */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg text-text-charcoal flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-button"></span>
              Who May Be Suitable
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {treatment.suitability.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-blush-pale/60 border border-border-blush/60 text-xs text-text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-rose-button shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* The Consultation Process */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg text-text-charcoal flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-button"></span>
              The Consultation & Treatment Process
            </h3>
            <ol className="space-y-2.5">
              {treatment.consultationSteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-border-blush text-xs">
                  <span className="font-serif font-bold text-rose-button w-5 shrink-0">
                    0{idx + 1}.
                  </span>
                  <span className="text-text-charcoal">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Appointment Information & Aftercare */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-blush-white border border-border-blush space-y-2">
              <h4 className="font-serif text-sm font-medium text-text-charcoal flex items-center gap-2">
                <Calendar className="w-4 h-4 text-rose-button" />
                Appointment Information
              </h4>
              <p className="text-xs text-text-muted leading-relaxed">
                {treatment.appointmentInformation}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-blush-white border border-border-blush space-y-2">
              <h4 className="font-serif text-sm font-medium text-text-charcoal flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-button" />
                Aftercare Guidelines
              </h4>
              <ul className="text-xs text-text-muted space-y-1.5 list-disc list-inside">
                {treatment.aftercareGuidelines.slice(0, 3).map((guide, idx) => (
                  <li key={idx}>{guide}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Relevant Risks and Limitations */}
          <div className="p-4 rounded-2xl bg-rose-soft/50 border border-border-blush space-y-2">
            <h4 className="font-serif text-sm font-medium text-rose-plum flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-accent" />
              Risks & Ethical Clinical Guidance
            </h4>
            <ul className="text-xs text-text-muted space-y-1 leading-relaxed">
              {treatment.risksAndLimitations.map((risk, idx) => (
                <li key={idx}>• {risk}</li>
              ))}
            </ul>
          </div>

          {/* FAQs for this treatment */}
          {treatment.faqs.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-serif text-lg text-text-charcoal flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-rose-button" />
                Common Questions
              </h3>
              <div className="space-y-2">
                {treatment.faqs.map((faq, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-border-blush text-xs">
                    <strong className="block text-text-charcoal font-medium mb-1">{faq.question}</strong>
                    <p className="text-text-muted leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Sticky Footer CTA */}
        <div className="sticky bottom-0 bg-blush-white px-6 py-4 border-t border-border-blush flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-text-muted">
            Personalised medical consultation with Katie Osborne
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              type="button"
              className="px-4 py-2.5 text-xs text-text-muted hover:text-text-charcoal transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookTreatment(treatment.title);
              }}
              type="button"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-rose-button hover:bg-rose-accent rounded-full shadow-xs transition-colors cursor-pointer"
            >
              <span>Request Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

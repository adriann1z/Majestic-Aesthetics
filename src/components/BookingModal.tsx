import React, { useEffect, useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { BrandLogo } from './BrandLogo';
import { useDialogFocus } from '../hooks/useDialogFocus';
import { BookingFocus, bookingChoices, generalBookingFocus } from '../data/booking';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultFocus?: BookingFocus;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultFocus = generalBookingFocus,
}) => {
  const [treatmentChoice, setTreatmentChoice] = useState(defaultFocus.label);
  const [preferredDays, setPreferredDays] = useState<string[]>([]);
  const [timeOfDay, setTimeOfDay] = useState("Morning (10:00 - 13:00)");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  useDialogFocus(isOpen, onClose);

  useEffect(() => {
    if (isOpen) {
      setTreatmentChoice(defaultFocus.label);
      setPreferredDays([]);
      setTimeOfDay('Morning (10:00 - 13:00)');
      setClientName('');
      setClientEmail('');
      setClientPhone('');
      setNotes('');
      setIsSuccess(false);
    }
  }, [isOpen, defaultFocus]);

  if (!isOpen) return null;

  const toggleDay = (day: string) => {
    if (preferredDays.includes(day)) {
      setPreferredDays(preferredDays.filter(d => d !== day));
    } else {
      setPreferredDays([...preferredDays, day]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail) return;
    setIsSuccess(true);
  };

  return (
    <div
      className="booking-modal-overlay fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-2 backdrop-blur-xs sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      aria-describedby="booking-modal-description"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="booking-modal-panel relative my-auto flex max-h-[calc(100dvh-1rem)] w-full max-w-xl flex-col overflow-hidden rounded-xl border border-border-blush bg-white shadow-2xl sm:max-h-[calc(100dvh-2rem)]">
        
        {/* Header with Official Logo */}
        <div className="flex shrink-0 items-center justify-between border-b border-border-blush bg-blush-white px-5 py-3 sm:px-6 sm:py-4">
          <div className="w-48 sm:w-56">
            <BrandLogo variant="full" showSubtitle={true} />
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-blush-pale text-text-muted hover:text-text-charcoal transition-colors cursor-pointer"
            aria-label="Close booking modal"
            type="button"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {isSuccess ? (
          <div className="space-y-4 overflow-y-auto p-6 text-center sm:p-8">
            <div className="w-16 h-16 rounded-full bg-rose-soft text-rose-button flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 id="booking-modal-title" className="font-serif text-2xl text-text-charcoal">
              Your Consultation Email Is Ready
            </h2>
            <p id="booking-modal-description" className="text-sm text-text-muted leading-relaxed max-w-md mx-auto">
              Thank you, <strong>{clientName}</strong>. Send the email draft below to request your preferred appointment. Your request has not been submitted and no appointment is confirmed yet.
            </p>

            <div className="p-4 rounded-2xl bg-blush-white border border-border-blush text-xs text-rose-plum text-left space-y-1">
              <div><strong>Requested Service:</strong> {treatmentChoice}</div>
              <div><strong>Preferred Window:</strong> {timeOfDay}</div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href={`mailto:${siteConfig.contact.email}?subject=Consultation%20Request%20-%20${encodeURIComponent(clientName)}&body=${encodeURIComponent(`Name: ${clientName}\nEmail: ${clientEmail}\nService: ${treatmentChoice}\nPreferred days: ${preferredDays.join(', ') || 'Flexible'}\nPreferred time: ${timeOfDay}\nPhone: ${clientPhone}\nNotes: ${notes}`)}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-rose-button hover:bg-rose-accent rounded-full transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send via Email Client</span>
              </a>

              <button
                onClick={onClose}
                type="button"
                className="px-6 py-2.5 text-xs text-text-muted hover:text-text-charcoal border border-border-blush rounded-full transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 overflow-y-auto overscroll-contain p-5 sm:p-7">
            <div>
              <p className="text-[11px] font-semibold uppercase text-rose-accent">Private consultation request</p>
              <h2 id="booking-modal-title" className="mt-1 font-serif text-2xl text-text-charcoal">Begin your conversation with Katie</h2>
              <p id="booking-modal-description" className="mt-1 text-xs leading-relaxed text-text-muted">Choose a focus and tell us when you are generally available. You will review and send the request from your own email app.</p>
            </div>
            
            {/* Treatment Selector */}
            <div>
              <label htmlFor="booking-treatment" className="block text-xs font-medium text-text-charcoal mb-1.5">
                Consultation Focus
              </label>
              <select
                value={treatmentChoice}
                id="booking-treatment"
                onChange={(e) => setTreatmentChoice(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-border-blush bg-blush-white text-text-charcoal focus:outline-hidden focus:ring-2 focus:ring-rose-brand/40"
              >
                {!bookingChoices.some((choice) => choice.label === defaultFocus.label) && (
                  <option value={defaultFocus.label}>{defaultFocus.label}</option>
                )}
                {bookingChoices.map((choice) => (
                  <option key={choice.label} value={choice.label}>{choice.label}</option>
                ))}
              </select>
            </div>

            {/* Preferred Days of Week */}
            <div>
              <label className="block text-xs font-medium text-text-charcoal mb-1.5">
                Preferred Days of Week <span className="text-text-muted font-normal">(Select multiple)</span>
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => toggleDay(day)}
                    aria-pressed={preferredDays.includes(day)}
                    className={`py-2 px-1 text-xs rounded-xl font-medium border transition-colors cursor-pointer text-center ${
                      preferredDays.includes(day)
                        ? 'bg-rose-button text-white border-rose-button'
                        : 'bg-white border-border-blush text-text-muted hover:border-rose-brand'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* Preferred Time Window */}
            <div>
              <label className="block text-xs font-medium text-text-charcoal mb-1.5">
                Preferred Time of Day
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Morning (10:00 - 13:00)",
                  "Afternoon (13:00 - 17:00)",
                  "Late Afternoon (17:00 - 19:00)",
                  "Flexible on appointment time"
                ].map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setTimeOfDay(slot)}
                    aria-pressed={timeOfDay === slot}
                    className={`p-2.5 text-xs text-left rounded-xl border transition-colors cursor-pointer ${
                      timeOfDay === slot
                        ? 'bg-rose-soft border-rose-button text-rose-plum font-medium'
                        : 'bg-white border-border-blush text-text-muted'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <label htmlFor="booking-name" className="block text-xs font-medium text-text-charcoal mb-1">
                  Full Name <span className="text-rose-button">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={clientName}
                  id="booking-name"
                  autoComplete="name"
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-border-blush bg-blush-white text-text-charcoal"
                />
              </div>

              <div>
                <label htmlFor="booking-email" className="block text-xs font-medium text-text-charcoal mb-1">
                  Email Address <span className="text-rose-button">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={clientEmail}
                  id="booking-email"
                  autoComplete="email"
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="your.email@example.co.uk"
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-border-blush bg-blush-white text-text-charcoal"
                />
              </div>
            </div>

            <div>
              <label htmlFor="booking-phone" className="block text-xs font-medium text-text-charcoal mb-1">
                Phone Number <span className="text-stone-400 font-normal">(Optional)</span>
              </label>
              <input
                type="tel"
                value={clientPhone}
                id="booking-phone"
                autoComplete="tel"
                onChange={(e) => setClientPhone(e.target.value)}
                placeholder="Mobile number"
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-border-blush bg-blush-white text-text-charcoal"
              />
            </div>

            <div>
              <label htmlFor="booking-notes" className="block text-xs font-medium text-text-charcoal mb-1">
                Brief scheduling note <span className="text-stone-400 font-normal">(Optional)</span>
              </label>
              <textarea
                rows={2}
                value={notes}
                id="booking-notes"
                onChange={(e) => setNotes(e.target.value)}
                placeholder="For example, access needs or a brief non-medical question."
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-border-blush bg-blush-white text-text-charcoal"
              />
            </div>

            <div className="pt-2 flex flex-wrap gap-3 items-center justify-between border-t border-border-blush">
              <span className="flex max-w-xs items-start gap-1.5 text-[11px] leading-relaxed text-text-muted">
                <ShieldCheck className="w-3.5 h-3.5 text-rose-button" />
                Please do not share medical history or intimate health information here. Those details can be discussed privately with Katie.
              </span>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-rose-button hover:bg-rose-accent rounded-full shadow-xs transition-colors cursor-pointer"
              >
                <span>Prepare Booking Email</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};

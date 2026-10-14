import React, { useEffect, useRef, useState } from 'react';
import { AlertCircle, ArrowRight, CheckCircle2, LoaderCircle, Mail, ShieldCheck } from 'lucide-react';
import { BookingFocus, bookingChoices, generalBookingFocus } from '../data/booking';
import { siteConfig } from '../data/siteConfig';

interface ConsultationRequestFormProps {
  defaultFocus?: BookingFocus;
  idPrefix: string;
  onClose?: () => void;
  scrollable?: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
}

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

const web3FormsEndpoint = 'https://api.web3forms.com/submit';

const preferredDayOptions = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const preferredTimeOptions = [
  'Morning (10:00 - 13:00)',
  'Afternoon (13:00 - 17:00)',
  'Late Afternoon (17:00 - 19:00)',
  'Flexible on appointment time',
];

export const ConsultationRequestForm: React.FC<ConsultationRequestFormProps> = ({
  defaultFocus = generalBookingFocus,
  idPrefix,
  onClose,
  scrollable = false,
}) => {
  const [treatmentChoice, setTreatmentChoice] = useState(defaultFocus.label);
  const [preferredDays, setPreferredDays] = useState<string[]>([]);
  const [timeOfDay, setTimeOfDay] = useState(preferredTimeOptions[0]);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');
  const [submissionError, setSubmissionError] = useState('');
  const statusHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setTreatmentChoice(defaultFocus.label);
    setPreferredDays([]);
    setTimeOfDay(preferredTimeOptions[0]);
    setClientName('');
    setClientEmail('');
    setClientPhone('');
    setNotes('');
    setHoneypot('');
    setErrors({});
    setSubmissionStatus('idle');
    setSubmissionError('');
  }, [defaultFocus]);

  useEffect(() => {
    if (submissionStatus === 'success' || submissionStatus === 'error') {
      statusHeadingRef.current?.focus({ preventScroll: true });
    }
  }, [submissionStatus]);

  const toggleDay = (day: string) => {
    setPreferredDays((current) => current.includes(day)
      ? current.filter((selectedDay) => selectedDay !== day)
      : [...current, day]);
  };

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (!clientName.trim()) nextErrors.name = 'Please enter your name';
    if (!clientEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientEmail)) {
      nextErrors.email = 'Please enter a valid email address';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const resetForm = () => {
    setTreatmentChoice(defaultFocus.label);
    setPreferredDays([]);
    setTimeOfDay(preferredTimeOptions[0]);
    setClientName('');
    setClientEmail('');
    setClientPhone('');
    setNotes('');
    setHoneypot('');
    setErrors({});
    setSubmissionStatus('idle');
    setSubmissionError('');
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (honeypot || submissionStatus === 'submitting' || !validate()) return;

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();
    if (!accessKey) {
      setSubmissionError('Online enquiries are temporarily unavailable because the delivery service has not been configured. Please email or call Katie directly.');
      setSubmissionStatus('error');
      return;
    }

    setSubmissionStatus('submitting');
    setSubmissionError('');

    const preferredDaysText = preferredDays.join(', ') || 'Flexible';
    const message = [
      `Consultation focus: ${treatmentChoice}`,
      `Preferred days: ${preferredDaysText}`,
      `Preferred time: ${timeOfDay}`,
      `Phone: ${clientPhone.trim() || 'Not provided'}`,
      `Brief note: ${notes.trim() || 'None'}`,
      '',
      'The visitor understands this is an enquiry and no appointment is confirmed yet.',
    ].join('\n');

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 15000);

    try {
      const formData = new FormData();
      formData.append('access_key', accessKey);
      formData.append('subject', `New Majestic Aesthetics enquiry - ${treatmentChoice}`);
      formData.append('from_name', 'Majestic Aesthetics Website');
      formData.append('name', clientName.trim());
      formData.append('email', clientEmail.trim());
      formData.append('phone', clientPhone.trim() || 'Not provided');
      formData.append('Consultation Focus', treatmentChoice);
      formData.append('Preferred Days', preferredDaysText);
      formData.append('Preferred Time', timeOfDay);
      formData.append('Brief Note', notes.trim() || 'None');
      formData.append('Page URL', window.location.href);
      formData.append('message', message);
      formData.append('botcheck', honeypot);

      const response = await fetch(web3FormsEndpoint, {
        method: 'POST',
        body: formData,
        signal: controller.signal,
      });

      const result = await response.json().catch(() => ({})) as { success?: boolean };
      if (!response.ok || !result.success) throw new Error('Web3Forms rejected the submission');

      setSubmissionStatus('success');
    } catch {
      setSubmissionError('We could not send your enquiry just now. Please try again, or contact Katie directly using the details below.');
      setSubmissionStatus('error');
    } finally {
      window.clearTimeout(timeoutId);
    }
  };
  const contentClassName = scrollable ? 'overflow-y-auto overscroll-contain' : '';

  if (submissionStatus === 'success') {
    return (
      <div className={`space-y-4 p-5 text-center sm:p-7 ${contentClassName}`} aria-live="polite">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-soft text-rose-button">
          <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
        </div>
        <h2
          id={`${idPrefix}-title`}
          ref={statusHeadingRef}
          tabIndex={-1}
          className="font-serif text-2xl text-text-charcoal focus:outline-none"
        >
          Your Enquiry Has Been Sent
        </h2>
        <p id={`${idPrefix}-description`} className="mx-auto max-w-md text-sm leading-relaxed text-text-muted">
          Thank you, <strong>{clientName}</strong>. Your consultation enquiry has been delivered to Katie. She will contact you to discuss availability; no appointment is confirmed yet.
        </p>

        <div className="space-y-1 rounded-xl border border-border-blush bg-blush-white p-4 text-left text-xs text-rose-plum">
          <div><strong>To:</strong> {siteConfig.contact.email}</div>
          <div><strong>Requested service:</strong> {treatmentChoice}</div>
          <div><strong>Preferred window:</strong> {timeOfDay}</div>
        </div>

        <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row">
          <button
            onClick={() => onClose ? onClose() : resetForm()}
            type="button"
            className="min-h-11 rounded-full bg-rose-button px-6 py-2.5 text-xs font-semibold uppercase text-white transition-colors hover:bg-rose-accent"
          >
            {onClose ? 'Close Window' : 'Start Another Enquiry'}
          </button>
        </div>
      </div>
    );
  }

  if (submissionStatus === 'error') {
    return (
      <div className={`space-y-4 p-5 text-center sm:p-7 ${contentClassName}`} role="alert" aria-live="assertive">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-soft text-rose-button">
          <AlertCircle className="h-8 w-8" aria-hidden="true" />
        </div>
        <h2
          id={`${idPrefix}-title`}
          ref={statusHeadingRef}
          tabIndex={-1}
          className="font-serif text-2xl text-text-charcoal focus:outline-none"
        >
          We Couldn&apos;t Send Your Enquiry
        </h2>
        <p id={`${idPrefix}-description`} className="mx-auto max-w-md text-sm leading-relaxed text-text-muted">
          {submissionError}
        </p>
        <div className="rounded-xl border border-border-blush bg-blush-white p-4 text-sm text-rose-plum">
          <a className="inline-flex items-center gap-2 underline decoration-rose-brand/50 underline-offset-4" href={`mailto:${siteConfig.contact.email}`}>
            <Mail className="h-4 w-4" aria-hidden="true" />
            {siteConfig.contact.email}
          </a>
          <span className="mx-2 text-border-blush" aria-hidden="true">|</span>
          <a className="underline decoration-rose-brand/50 underline-offset-4" href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}>
            {siteConfig.contact.phone}
          </a>
        </div>
        <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row">
          <button
            onClick={() => {
              setSubmissionError('');
              setSubmissionStatus('idle');
            }}
            type="button"
            className="min-h-11 rounded-full bg-rose-button px-6 py-2.5 text-xs font-semibold uppercase text-white transition-colors hover:bg-rose-accent"
          >
            Try Again
          </button>
          {onClose && (
            <button
              onClick={onClose}
              type="button"
              className="min-h-11 rounded-full border border-border-blush px-6 py-2.5 text-xs text-text-muted transition-colors hover:text-text-charcoal"
            >
              Close Window
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-5 p-5 sm:p-7 ${contentClassName}`} noValidate aria-busy={submissionStatus === 'submitting'}>
      <div>
        <p className="text-[11px] font-semibold uppercase text-rose-accent">Private consultation request</p>
        <h2 id={`${idPrefix}-title`} className="mt-1 font-serif text-2xl text-text-charcoal">Begin your conversation with Katie</h2>
        <p id={`${idPrefix}-description`} className="mt-1 text-xs leading-relaxed text-text-muted">
          Choose a focus and tell us when you are generally available. Your enquiry will be sent securely to Katie for a personal response.
        </p>
      </div>

      <input
        type="text"
        name="website_url"
        value={honeypot}
        onChange={(event) => setHoneypot(event.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div>
        <label htmlFor={`${idPrefix}-treatment`} className="mb-1.5 block text-xs font-medium text-text-charcoal">
          Consultation Focus
        </label>
        <select
          value={treatmentChoice}
          id={`${idPrefix}-treatment`}
          onChange={(event) => setTreatmentChoice(event.target.value)}
          className="w-full rounded-xl border border-border-blush bg-blush-white px-3.5 py-2.5 text-sm text-text-charcoal focus:outline-hidden focus:ring-2 focus:ring-rose-brand/40"
        >
          {!bookingChoices.some((choice) => choice.label === defaultFocus.label) && (
            <option value={defaultFocus.label}>{defaultFocus.label}</option>
          )}
          {bookingChoices.map((choice) => (
            <option key={choice.label} value={choice.label}>{choice.label}</option>
          ))}
        </select>
      </div>

      <fieldset>
        <legend className="mb-1.5 block text-xs font-medium text-text-charcoal">
          Preferred Days of Week <span className="font-normal text-text-muted">(Select multiple)</span>
        </legend>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
          {preferredDayOptions.map((day) => (
            <button
              key={day}
              type="button"
              onClick={() => toggleDay(day)}
              aria-pressed={preferredDays.includes(day)}
              className={`min-h-10 rounded-xl border px-1 py-2 text-center text-xs font-medium transition-colors ${
                preferredDays.includes(day)
                  ? 'border-rose-button bg-rose-button text-white'
                  : 'border-border-blush bg-white text-text-muted hover:border-rose-brand'
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-1.5 block text-xs font-medium text-text-charcoal">Preferred Time of Day</legend>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {preferredTimeOptions.map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() => setTimeOfDay(slot)}
              aria-pressed={timeOfDay === slot}
              className={`min-h-10 rounded-xl border p-2.5 text-left text-xs transition-colors ${
                timeOfDay === slot
                  ? 'border-rose-button bg-rose-soft font-medium text-rose-plum'
                  : 'border-border-blush bg-white text-text-muted'
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-2">
        <div>
          <label htmlFor={`${idPrefix}-name`} className="mb-1 block text-xs font-medium text-text-charcoal">
            Full Name <span className="text-rose-button">*</span>
          </label>
          <input
            type="text"
            required
            value={clientName}
            id={`${idPrefix}-name`}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${idPrefix}-name-error` : undefined}
            onChange={(event) => setClientName(event.target.value)}
            placeholder="Your name"
            className={`w-full rounded-xl border bg-blush-white px-3.5 py-2 text-sm text-text-charcoal ${errors.name ? 'border-red-400' : 'border-border-blush'}`}
          />
          {errors.name && <p id={`${idPrefix}-name-error`} className="mt-1 text-[11px] text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor={`${idPrefix}-email`} className="mb-1 block text-xs font-medium text-text-charcoal">
            Email Address <span className="text-rose-button">*</span>
          </label>
          <input
            type="email"
            required
            value={clientEmail}
            id={`${idPrefix}-email`}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${idPrefix}-email-error` : undefined}
            onChange={(event) => setClientEmail(event.target.value)}
            placeholder="your.email@example.co.uk"
            className={`w-full rounded-xl border bg-blush-white px-3.5 py-2 text-sm text-text-charcoal ${errors.email ? 'border-red-400' : 'border-border-blush'}`}
          />
          {errors.email && <p id={`${idPrefix}-email-error`} className="mt-1 text-[11px] text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor={`${idPrefix}-phone`} className="mb-1 block text-xs font-medium text-text-charcoal">
          Phone Number <span className="font-normal text-stone-400">(Optional)</span>
        </label>
        <input
          type="tel"
          value={clientPhone}
          id={`${idPrefix}-phone`}
          autoComplete="tel"
          onChange={(event) => setClientPhone(event.target.value)}
          placeholder="Mobile number"
          className="w-full rounded-xl border border-border-blush bg-blush-white px-3.5 py-2 text-sm text-text-charcoal"
        />
      </div>

      <div>
        <label htmlFor={`${idPrefix}-notes`} className="mb-1 block text-xs font-medium text-text-charcoal">
          Brief scheduling note <span className="font-normal text-stone-400">(Optional)</span>
        </label>
        <textarea
          rows={2}
          value={notes}
          id={`${idPrefix}-notes`}
          onChange={(event) => setNotes(event.target.value)}
          placeholder="For example, access needs or a brief non-medical question."
          className="w-full rounded-xl border border-border-blush bg-blush-white px-3.5 py-2 text-sm text-text-charcoal"
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border-blush pt-2">
        <span className="flex max-w-xs items-start gap-1.5 text-[11px] leading-relaxed text-text-muted">
          <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-rose-button" aria-hidden="true" />
          Please do not share medical history or intimate health information here. Those details can be discussed privately with Katie.
        </span>

        <button
          type="submit"
          disabled={submissionStatus === 'submitting'}
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-rose-button px-6 py-2.5 text-xs font-semibold uppercase text-white shadow-xs transition-colors hover:bg-rose-accent disabled:cursor-wait disabled:opacity-70"
        >
          {submissionStatus === 'submitting' ? (
            <>
              <span>Sending Enquiry...</span>
              <LoaderCircle className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
            </>
          ) : (
            <>
              <span>Send Enquiry Securely</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

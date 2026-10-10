import React, { useEffect, useState } from 'react';
import { Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, ArrowRight, Phone } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { DecorativeBackground } from './DecorativeBackground';
import { SocialLinks } from './SocialLinks';

interface ContactSectionProps {
  enquiryCategory: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  enquiryCategory
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'General Consultation',
    message: '',
    consent: false,
    honeypot: '' // Spam trap
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setFormData(previous => ({ ...previous, category: enquiryCategory }));
  }, [enquiryCategory]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Please write a brief message (at least 10 characters)";
    }
    if (!formData.consent) {
      errs.consent = "Please agree to the privacy policy regarding your enquiry";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Spam bot detected
    if (!validate()) return;

    setSubmitted(true);
  };

  return (
    <section 
      id="contact"
      className="py-16 sm:py-24 bg-blush-pale border-b border-border-blush"
    >
      <DecorativeBackground variant="botanical" />
      <div className="section-inner max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-gradient-to-r from-gold-metallic to-rose-brand"></span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-rose-accent">
              Get In Touch
            </span>
            <span className="w-6 h-px bg-gradient-to-l from-gold-metallic to-rose-brand"></span>
          </div>

          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-text-charcoal font-normal tracking-tight">
              Your confidence journey <br className="hidden sm:inline" />
              <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-rose-plum block mt-1 font-normal">
                starts here.
              </span>
            </h2>
          </div>

          <p className="text-base text-text-muted font-light leading-relaxed">
            Whether you're exploring aesthetic treatments for the first time or looking for personalised skincare advice, get in touch with Majestic Aesthetics.
          </p>
        </div>

        {/* 2-Column Layout: Clinic Information & Functional Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct Info & Location Context (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="contact-information space-y-6">
              <h3 className="font-serif text-2xl text-text-charcoal">
                Contact Information
              </h3>
              <SocialLinks />

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-blush-white border border-border-blush text-rose-button shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-text-muted font-medium uppercase block">Call the Clinic</span>
                    <a href={siteConfig.contact.phoneHref} className="inline-block py-1 text-xl font-semibold text-rose-plum hover:text-rose-accent transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-blush-white border border-border-blush text-rose-accent shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-rose-button" />
                  </div>
                  <div>
                    <span className="text-xs text-text-muted font-medium uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <a 
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-base text-text-charcoal hover:text-rose-plum font-medium transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                    <p className="text-xs text-text-muted mt-0.5">
                      Replies typically provided within 24–48 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-blush-white border border-border-blush text-rose-accent shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-rose-button" />
                  </div>
                  <div>
                    <span className="text-xs text-text-muted font-medium uppercase tracking-wider block">
                      Clinic Location
                    </span>
                    <p className="text-sm font-medium text-text-charcoal">
                      {siteConfig.location.addressLine}
                    </p>
                    <p className="text-xs text-text-muted">
                      {siteConfig.location.town}, {siteConfig.location.city}, {siteConfig.location.postcode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-blush-white border border-border-blush text-rose-accent shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-rose-button" />
                  </div>
                  <div>
                    <span className="text-xs text-text-muted font-medium uppercase tracking-wider block">
                      Consultation Schedule
                    </span>
                    <p className="text-sm text-text-charcoal font-medium">
                      By Private Appointment Only
                    </p>
                    <p className="text-xs text-text-muted">
                      Dedicated one-to-one consultation slots
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact & Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div id="consultation-form" tabIndex={-1} aria-label="Consultation enquiry form" className="contact-form scroll-mt-72 bg-white p-6 sm:p-8 border border-border-blush focus-visible:outline-2 focus-visible:outline-rose-button">
              
              <div className="mb-6">
                <h3 className="font-serif text-2xl text-text-charcoal">
                  Send a Confidential Enquiry
                </h3>
                <p className="text-xs text-text-muted mt-1">
                  Share your questions or aesthetic goals with Katie Osborne.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-blush-white border border-border-blush text-center space-y-4 animate-in fade-in-50">
                  <div className="w-14 h-14 rounded-full bg-rose-soft text-rose-button flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif text-2xl text-text-charcoal">
                    Thank you, {formData.name}
                  </h4>
                  <p className="text-sm text-text-muted max-w-md mx-auto leading-relaxed">
                    Your enquiry regarding <strong>{formData.category}</strong> is ready to send.
                    Open the draft below and send it from your email app. Nothing has been submitted yet.
                  </p>
                  
                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <a
                      href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(formData.category)}&body=${encodeURIComponent(`Hello Katie,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`)}`}
                      className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-rose-button hover:bg-rose-accent rounded-full transition-colors"
                    >
                      <span>Open in Your Email Client</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => setSubmitted(false)}
                      type="button"
                      className="px-5 py-2.5 text-xs text-text-muted hover:text-text-charcoal underline cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  
                  {/* Anti-spam Honeypot */}
                  <input
                    type="text"
                    name="website_url"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-medium text-text-charcoal mb-1.5">
                        Full Name <span className="text-rose-button">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        id="contact-name"
                        autoComplete="name"
                        aria-invalid={Boolean(errors.name)}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Eleanor Vance"
                        className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-blush-white/50 text-text-charcoal focus:outline-hidden focus:ring-2 focus:ring-rose-brand/40 transition-colors ${
                          errors.name ? 'border-red-400 bg-red-50/30' : 'border-border-blush'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-medium text-text-charcoal mb-1.5">
                        Email Address <span className="text-rose-button">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        id="contact-email"
                        autoComplete="email"
                        aria-invalid={Boolean(errors.email)}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. eleanor@example.co.uk"
                        className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-blush-white/50 text-text-charcoal focus:outline-hidden focus:ring-2 focus:ring-rose-brand/40 transition-colors ${
                          errors.email ? 'border-red-400 bg-red-50/30' : 'border-border-blush'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number (Optional) */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-medium text-text-charcoal mb-1.5">
                        Contact Phone <span className="text-stone-400 text-[10px]">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        id="contact-phone"
                        autoComplete="tel"
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 07123 456789"
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-border-blush bg-blush-white/50 text-text-charcoal focus:outline-hidden focus:ring-2 focus:ring-rose-brand/40 transition-colors"
                      />
                    </div>

                    {/* Enquiry Category */}
                    <div>
                      <label htmlFor="contact-category" className="block text-xs font-medium text-text-charcoal mb-1.5">
                        Treatment Interest
                      </label>
                      <select
                        value={formData.category}
                        id="contact-category"
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-border-blush bg-blush-white/50 text-text-charcoal focus:outline-hidden focus:ring-2 focus:ring-rose-brand/40 transition-colors cursor-pointer"
                      >
                        <option value="General Consultation">General Consultation / First Visit</option>
                        <option value="Dermal Fillers">Dermal Fillers (Facial Balance)</option>
                        <option value="Anti-Wrinkle Consultations">Anti-Wrinkle Assessment</option>
                        <option value="Skin Boosters & Polynucleotides">Skin Boosters & Polynucleotides</option>
                        <option value="SkinPen Microneedling">SkinPen Microneedling</option>
                        <option value="Obagi Skincare Enquiry">Obagi Skincare Range Enquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium text-text-charcoal mb-1.5">
                      Your Message or Consultation Goals <span className="text-rose-button">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      id="contact-message"
                      aria-invalid={Boolean(errors.message)}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share what you'd like to discuss or any questions you have regarding your consultation..."
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-blush-white/50 text-text-charcoal focus:outline-hidden focus:ring-2 focus:ring-rose-brand/40 transition-colors ${
                        errors.message ? 'border-red-400 bg-red-50/30' : 'border-border-blush'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Consent checkbox */}
                  <div className="pt-1">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-0.5 rounded border-border-blush text-rose-button focus:ring-rose-brand cursor-pointer"
                      />
                      <span className="text-xs text-text-muted leading-snug">
                        I consent to Majestic Aesthetics securely processing my provided contact details solely to respond to this consultation enquiry in accordance with UK data privacy principles.
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-[11px] text-red-500 mt-1">{errors.consent}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-white bg-rose-button hover:bg-rose-accent active:bg-rose-plum disabled:opacity-50 rounded-full shadow-xs transition-colors cursor-pointer"
                    >
                      <span>Send Email Enquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                    <p className="text-[11px] text-center text-text-muted mt-2">
                      No sensitive medical history is collected through this preliminary enquiry form.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

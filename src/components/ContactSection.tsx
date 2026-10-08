import React, { useState } from 'react';
import { Mail, MapPin, Calendar, Clock, Send, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface ContactSectionProps {
  onOpenBooking: () => void;
  onOpenChecklist: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenBooking,
  onOpenChecklist
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

    setIsSubmitting(true);
    // Simulate secure client delivery feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section 
      id="contact"
      className="py-16 sm:py-24 bg-[#F9EDF2] border-b border-[#EAD7DF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-gradient-to-r from-[#D4AF37] to-[#C08EA1]"></span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8D5A6F]">
              Get In Touch
            </span>
            <span className="w-6 h-px bg-gradient-to-l from-[#D4AF37] to-[#C08EA1]"></span>
          </div>

          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#282924] font-normal tracking-tight">
              Your confidence journey <br className="hidden sm:inline" />
              <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-[#7F5668] block mt-1 font-normal">
                starts here.
              </span>
            </h2>
          </div>

          <p className="text-base text-[#74786E] font-light leading-relaxed">
            Whether you're exploring aesthetic treatments for the first time or looking for personalised skincare advice, get in touch with Majestic Aesthetics.
          </p>
        </div>

        {/* 2-Column Layout: Clinic Information & Functional Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct Info & Location Context (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-white rounded-3xl p-8 border border-[#EAD7DF] shadow-xs space-y-6">
              <h3 className="font-serif text-2xl text-[#282924]">
                Contact Information
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-[#FFF8FB] border border-[#EAD7DF] text-[#8D5A6F] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-[#A96883]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#74786E] font-medium uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <a 
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-base text-[#282924] hover:text-[#7F5668] font-medium transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                    <p className="text-xs text-[#74786E] mt-0.5">
                      Replies typically provided within 24–48 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-[#FFF8FB] border border-[#EAD7DF] text-[#8D5A6F] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#A96883]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#74786E] font-medium uppercase tracking-wider block">
                      Clinic Location
                    </span>
                    <p className="text-sm font-medium text-[#282924]">
                      {siteConfig.location.addressLine}
                    </p>
                    <p className="text-xs text-[#74786E]">
                      {siteConfig.location.town}, {siteConfig.location.city}, {siteConfig.location.postcode}
                    </p>
                    <button
                      onClick={onOpenChecklist}
                      type="button"
                      className="text-[11px] text-[#8D5A6F] hover:underline mt-1 block cursor-pointer"
                    >
                      * Address verification pending Katie's confirmation
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-[#FFF8FB] border border-[#EAD7DF] text-[#8D5A6F] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-[#A96883]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#74786E] font-medium uppercase tracking-wider block">
                      Consultation Schedule
                    </span>
                    <p className="text-sm text-[#282924] font-medium">
                      By Private Appointment Only
                    </p>
                    <p className="text-xs text-[#74786E]">
                      Dedicated one-to-one consultation slots
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Booking Action */}
              <div className="pt-4 border-t border-[#EAD7DF] space-y-3">
                <button
                  onClick={onOpenBooking}
                  type="button"
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 text-xs font-semibold uppercase tracking-wider text-white bg-[#A96883] hover:bg-[#8D5A6F] rounded-full shadow-xs transition-colors cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Consultation Slot</span>
                </button>

                <a
                  href={`mailto:${siteConfig.contact.email}?subject=Consultation%20Enquiry%20-%20Majestic%20Aesthetics`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 text-xs font-medium text-[#282924] bg-[#FFF8FB] hover:bg-white border border-[#EAD7DF] rounded-full transition-colors text-center"
                >
                  <span>Email the Clinic Directly →</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EAD7DF] shadow-xs">
              
              <div className="mb-6">
                <h3 className="font-serif text-2xl text-[#282924]">
                  Send a Confidential Enquiry
                </h3>
                <p className="text-xs text-[#74786E] mt-1">
                  Share your questions or aesthetic goals with Katie Osborne.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#FFF8FB] border border-[#EAD7DF] text-center space-y-4 animate-in fade-in-50">
                  <div className="w-14 h-14 rounded-full bg-[#F6E6ED] text-[#A96883] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#282924]">
                    Thank you, {formData.name}
                  </h4>
                  <p className="text-sm text-[#74786E] max-w-md mx-auto leading-relaxed">
                    Your enquiry regarding <strong>{formData.category}</strong> has been received. 
                    In this concept demonstration, a pre-filled email draft can also be opened directly:
                  </p>
                  
                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <a
                      href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(formData.category)}&body=${encodeURIComponent(`Hello Katie,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`)}`}
                      className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#A96883] hover:bg-[#8D5A6F] rounded-full transition-colors"
                    >
                      <span>Open in Your Email Client</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => setSubmitted(false)}
                      type="button"
                      className="px-5 py-2.5 text-xs text-[#74786E] hover:text-[#282924] underline cursor-pointer"
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
                      <label className="block text-xs font-medium text-[#282924] mb-1.5">
                        Full Name <span className="text-[#A96883]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Eleanor Vance"
                        className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-[#FFF8FB]/50 text-[#282924] focus:outline-hidden focus:ring-2 focus:ring-[#C08EA1]/40 transition-colors ${
                          errors.name ? 'border-red-400 bg-red-50/30' : 'border-[#EAD7DF]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-[#282924] mb-1.5">
                        Email Address <span className="text-[#A96883]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. eleanor@example.co.uk"
                        className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-[#FFF8FB]/50 text-[#282924] focus:outline-hidden focus:ring-2 focus:ring-[#C08EA1]/40 transition-colors ${
                          errors.email ? 'border-red-400 bg-red-50/30' : 'border-[#EAD7DF]'
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
                      <label className="block text-xs font-medium text-[#282924] mb-1.5">
                        Contact Phone <span className="text-stone-400 text-[10px]">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 07123 456789"
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#EAD7DF] bg-[#FFF8FB]/50 text-[#282924] focus:outline-hidden focus:ring-2 focus:ring-[#C08EA1]/40 transition-colors"
                      />
                    </div>

                    {/* Enquiry Category */}
                    <div>
                      <label className="block text-xs font-medium text-[#282924] mb-1.5">
                        Treatment Interest
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#EAD7DF] bg-[#FFF8FB]/50 text-[#282924] focus:outline-hidden focus:ring-2 focus:ring-[#C08EA1]/40 transition-colors cursor-pointer"
                      >
                        <option value="General Consultation">General Consultation / First Visit</option>
                        <option value="Dermal Fillers">Dermal Fillers (Facial Balance)</option>
                        <option value="Anti-Wrinkle Consultations">Anti-Wrinkle Assessment</option>
                        <option value="Skin Boosters & Polynucleotides">Skin Boosters & Polynucleotides</option>
                        <option value="Obagi Skincare Enquiry">Obagi Skincare Range Enquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-[#282924] mb-1.5">
                      Your Message or Consultation Goals <span className="text-[#A96883]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share what you'd like to discuss or any questions you have regarding your consultation..."
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-[#FFF8FB]/50 text-[#282924] focus:outline-hidden focus:ring-2 focus:ring-[#C08EA1]/40 transition-colors ${
                        errors.message ? 'border-red-400 bg-red-50/30' : 'border-[#EAD7DF]'
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
                        className="mt-0.5 rounded border-[#EAD7DF] text-[#A96883] focus:ring-[#C08EA1] cursor-pointer"
                      />
                      <span className="text-xs text-[#74786E] leading-snug">
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
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-white bg-[#A96883] hover:bg-[#8D5A6F] active:bg-[#7F5668] disabled:opacity-50 rounded-full shadow-xs transition-colors cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Sending Enquiry...</span>
                      ) : (
                        <>
                          <span>Submit Consultation Enquiry</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-[#74786E] mt-2">
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

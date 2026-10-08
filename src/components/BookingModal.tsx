import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, ArrowRight, ShieldCheck, Mail, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { BrandLogo } from './BrandLogo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTreatment?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultTreatment = "General Facial Aesthetics Consultation"
}) => {
  const [treatmentChoice, setTreatmentChoice] = useState(defaultTreatment);
  const [preferredDays, setPreferredDays] = useState<string[]>([]);
  const [timeOfDay, setTimeOfDay] = useState("Morning (10:00 - 13:00)");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

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
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#EAD7DF] relative my-auto animate-in zoom-in-95 duration-200">
        
        {/* Header with Official Logo */}
        <div className="bg-[#FFF8FB] px-6 py-4 border-b border-[#EAD7DF] flex items-center justify-between">
          <div className="w-48 sm:w-56">
            <BrandLogo variant="full" showSubtitle={true} />
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F9EDF2] text-[#74786E] hover:text-[#282924] transition-colors cursor-pointer"
            aria-label="Close booking modal"
            type="button"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#F6E6ED] text-[#A96883] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-2xl text-[#282924]">
              Consultation Request Received
            </h4>
            <p className="text-sm text-[#74786E] leading-relaxed max-w-md mx-auto">
              Thank you, <strong>{clientName}</strong>. Katie Osborne will review your preferred appointment options and reach out to you at <strong>{clientEmail}</strong> with confirmed availability.
            </p>

            <div className="p-4 rounded-2xl bg-[#FFF8FB] border border-[#EAD7DF] text-xs text-[#7F5668] text-left space-y-1">
              <div><strong>Requested Service:</strong> {treatmentChoice}</div>
              <div><strong>Preferred Window:</strong> {timeOfDay}</div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href={`mailto:${siteConfig.contact.email}?subject=Consultation%20Request%20-%20${encodeURIComponent(clientName)}&body=${encodeURIComponent(`Name: ${clientName}\nService: ${treatmentChoice}\nPhone: ${clientPhone}\nNotes: ${notes}`)}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#A96883] hover:bg-[#8D5A6F] rounded-full transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send via Email Client</span>
              </a>

              <button
                onClick={onClose}
                type="button"
                className="px-6 py-2.5 text-xs text-[#74786E] hover:text-[#282924] border border-[#EAD7DF] rounded-full transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-5">
            
            {/* Treatment Selector */}
            <div>
              <label className="block text-xs font-medium text-[#282924] mb-1.5">
                Consultation Focus
              </label>
              <select
                value={treatmentChoice}
                onChange={(e) => setTreatmentChoice(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#EAD7DF] bg-[#FFF8FB] text-[#282924] focus:outline-hidden focus:ring-2 focus:ring-[#C08EA1]/40"
              >
                <option value="General Facial Aesthetics Consultation">General Facial Aesthetics Consultation</option>
                <option value="Dermal Fillers (Facial Balance & Volume)">Dermal Fillers (Facial Balance & Volume)</option>
                <option value="Anti-Wrinkle Assessment">Anti-Wrinkle Assessment</option>
                <option value="Skin Boosters & Polynucleotides">Skin Boosters & Polynucleotides</option>
                <option value="Obagi Medical Skincare Consultation">Obagi Medical Skincare Consultation</option>
              </select>
            </div>

            {/* Preferred Days of Week */}
            <div>
              <label className="block text-xs font-medium text-[#282924] mb-1.5">
                Preferred Days of Week <span className="text-[#74786E] font-normal">(Select multiple)</span>
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => toggleDay(day)}
                    className={`py-2 px-1 text-xs rounded-xl font-medium border transition-colors cursor-pointer text-center ${
                      preferredDays.includes(day)
                        ? 'bg-[#A96883] text-white border-[#A96883]'
                        : 'bg-white border-[#EAD7DF] text-[#74786E] hover:border-[#C08EA1]'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* Preferred Time Window */}
            <div>
              <label className="block text-xs font-medium text-[#282924] mb-1.5">
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
                    className={`p-2.5 text-xs text-left rounded-xl border transition-colors cursor-pointer ${
                      timeOfDay === slot
                        ? 'bg-[#F6E6ED] border-[#A96883] text-[#7F5668] font-medium'
                        : 'bg-white border-[#EAD7DF] text-[#74786E]'
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
                <label className="block text-xs font-medium text-[#282924] mb-1">
                  Full Name <span className="text-[#A96883]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-[#EAD7DF] bg-[#FFF8FB] text-[#282924]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#282924] mb-1">
                  Email Address <span className="text-[#A96883]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="your.email@example.co.uk"
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-[#EAD7DF] bg-[#FFF8FB] text-[#282924]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#282924] mb-1">
                Phone Number <span className="text-stone-400 font-normal">(Optional)</span>
              </label>
              <input
                type="tel"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                placeholder="Mobile number"
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-[#EAD7DF] bg-[#FFF8FB] text-[#282924]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#282924] mb-1">
                Any specific areas you wish to focus on?
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Optional notes or questions..."
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-[#EAD7DF] bg-[#FFF8FB] text-[#282924]"
              />
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-[#EAD7DF]">
              <span className="text-[11px] text-[#74786E] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#A96883]" />
                Confidential clinic inquiry
              </span>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#A96883] hover:bg-[#8D5A6F] rounded-full shadow-xs transition-colors cursor-pointer"
              >
                <span>Request Appointment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};

export type BookingFocusKind = 'aesthetics' | 'skincare' | 'collective';

export interface BookingFocus {
  label: string;
  kind: BookingFocusKind;
}

export const generalBookingFocus: BookingFocus = {
  label: 'General Facial Aesthetics Consultation',
  kind: 'aesthetics',
};

export const bookingChoices: BookingFocus[] = [
  generalBookingFocus,
  { label: 'Dermal Fillers', kind: 'aesthetics' },
  { label: 'Anti-Wrinkle Consultations', kind: 'aesthetics' },
  { label: 'Skin Boosters & Polynucleotides', kind: 'aesthetics' },
  { label: 'SkinPen Microneedling', kind: 'aesthetics' },
  { label: 'Health & Wellness', kind: 'aesthetics' },
  { label: 'Personalised Skincare Plans', kind: 'skincare' },
  { label: 'Obagi Medical Skincare Consultation', kind: 'skincare' },
  { label: 'The Skin & Hormone Discovery Consultation — £295', kind: 'collective' },
  { label: 'The Skin & Wellbeing Method — £995', kind: 'collective' },
  { label: 'The Skin Longevity Approach — £1,650', kind: 'collective' },
  { label: 'The Whole Woman Longevity Experience — £2,750', kind: 'collective' },
];

export const bookingFocusFor = (
  label?: string,
  kind: BookingFocusKind = 'aesthetics',
): BookingFocus => label ? { label, kind } : generalBookingFocus;

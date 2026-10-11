export interface TreatmentPricing {
  treatmentId: string;
  title: string;
  enquirySubject: string;
  items: { label: string; amount: number; note?: string }[];
  notes: string[];
}

export const treatmentPricing: TreatmentPricing[] = [
  {
    treatmentId: 'anti-wrinkle-consultations',
    title: 'Anti Wrinkle Treatment',
    enquirySubject: 'Anti wrinkle Booking Enquiry',
    items: [
      { label: "1 x Area (Crow's Feet)", amount: 180 },
      { label: '2 x Areas (Forehead & Frown)', amount: 230 },
      { label: "3 x Areas (Forehead, Frown and Crow's Feet)", amount: 260, note: 'Includes an optional brow lift.' },
    ],
    notes: [
      'A 2-week review is available for \u00a310.00.',
      'Any additional or late top-ups will incur a \u00a350.00 fee.',
    ],
  },
  {
    treatmentId: 'dermal-fillers',
    title: 'Lip Enhancement',
    enquirySubject: 'Lip Enhancement Booking Enquiry',
    items: [
      { label: 'Premium Filler: 0.5ml', amount: 180 },
      { label: 'Premium Filler: 1.1ml', amount: 240 },
      { label: 'Classic Filler: 1.1ml', amount: 190 },
      { label: 'Dissolving Lip Filler', amount: 195 },
      { label: 'Dissolving Lip Filler & 1ml Refill Package', amount: 395, note: 'Subject to consultation. A 2-4 week wait is required before refill.' },
    ],
    notes: [],
  },
];

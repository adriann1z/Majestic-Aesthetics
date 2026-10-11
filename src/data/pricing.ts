export interface TreatmentPricing {
  treatmentId: string;
  title: string;
  enquirySubject: string;
  items: { label: string; amount: number; note?: string; from?: boolean }[];
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
  {
    treatmentId: 'dermal-fillers', title: 'Cheek Filler & Contour', enquirySubject: 'Cheek Filler',
    items: [{ label: 'Premium Filler: 1ml', amount: 240 }, { label: 'Premium Filler: 2ml', amount: 395 }],
    notes: ['Premium filler lasts around 12-18 months.'],
  },
  {
    treatmentId: 'dermal-fillers', title: 'Chin Filler', enquirySubject: 'Chin Filler',
    items: [{ label: '1ml', amount: 240 }], notes: [],
  },
  {
    treatmentId: 'dermal-fillers', title: 'Smile Lines, Nasolabial Folds & Marionette Lines', enquirySubject: 'Mid & Lower Face Dermal Fillers',
    items: [{ label: '1.1ml', amount: 240 }, { label: '2.2ml', amount: 400 }], notes: [],
  },
  {
    treatmentId: 'dermal-fillers', title: 'Dermal Filler Packages', enquirySubject: 'Dermal Filler Packages',
    items: [
      { label: '3.3ml', amount: 495 }, { label: '4.4ml', amount: 595 },
      { label: '5.5ml', amount: 695 }, { label: '6.6ml', amount: 795 }, { label: '7.7ml', amount: 895 },
    ],
    notes: ['For lips, cheeks, jawline or chin.', 'Deposit: \u00a3100 for 3.3ml-4.4ml packages; \u00a3150 for 5.5ml-7.7ml packages.'],
  },
  {
    treatmentId: 'skin-boosters', title: 'Profhilo Skin Booster (Premium)', enquirySubject: 'Profhilo Skin Booster',
    items: [{ label: '1 x Face or Neck Treatment', amount: 350, note: '2ml total' }, { label: '2 x Face or Neck Treatments', amount: 600, note: '4ml total' }],
    notes: ['Two sessions, 4 weeks apart, are recommended.', 'Lasts around 9-12 months.'],
  },
  {
    treatmentId: 'skin-boosters', title: 'Seventy Hyal Skin Booster', enquirySubject: 'Seventy Hyal Skin Booster',
    items: [
      { label: '1 x Face or Neck Treatment', amount: 150, note: '2ml total' },
      { label: '2 x Face or Neck Treatments', amount: 300, note: '4ml total' },
      { label: '3 x Face or Neck Treatments', amount: 400, note: '6ml total' },
    ], notes: ['Three sessions, 4 weeks apart, are recommended.', 'Lasts around 6-12 months.'],
  },
  {
    treatmentId: 'polynucleotides', title: 'Polynucleotides - Eye Area', enquirySubject: 'Polynucleotides',
    items: [{ label: 'One Session', amount: 175 }, { label: 'Three Sessions', amount: 500 }],
    notes: ['Includes under and around the eyes, focusing on your areas of concern.', 'Three sessions, 4 weeks apart, are recommended.'],
  },
  {
    treatmentId: 'polynucleotides', title: 'Polynucleotides - Full Face', enquirySubject: 'Full Face Polynucleotides',
    items: [{ label: 'One Session', amount: 250 }, { label: 'Three Sessions', amount: 700 }],
    notes: ['Includes areas of concern across the eyes, midface, lip lines, chin, forehead and nasolabial folds.'],
  },
  {
    treatmentId: 'health-wellness', title: 'Health & Wellbeing Injections', enquirySubject: 'Health & Wellness',
    items: [
      { label: 'Vitamin B12 Injection (Hydroxocobalamin)', amount: 35, note: 'Courses are subject to consultation.' },
      { label: 'Vitamin B12 - Course of 5', amount: 165 },
      { label: 'Hayfever Injection (Kenalog)', amount: 140, note: 'Subject to an in-depth medical consultation, when other prescribed treatments have not worked.' },
      { label: 'Kenalog - Additional Dose', amount: 60, note: 'Subject to consultation.' },
    ], notes: [],
  },
  {
    treatmentId: 'dermal-fillers', title: 'Lift & Glow Package', enquirySubject: 'Lift & Glow Package',
    items: [{ label: '2-3ml Filler + 2 Skin Boosters or Polynucleotides', amount: 695, from: true,
      note: 'Cheek filler initially, followed by skin-quality treatments at weeks 4 and 8.' }],
    notes: ['Tailored following a facial assessment. Additional filler is charged separately.'],
  },
  {
    treatmentId: 'dermal-fillers', title: 'Lift & Contour Package', enquirySubject: 'Lift & Contour Package',
    items: [{ label: '6ml Filler', amount: 795, from: true, note: 'Tailored placement across cheeks, chin, nasolabial folds or lips.' }],
    notes: ['Includes consultation, facial planning and personalised aftercare. Additional filler is charged separately.'],
  },
  {
    treatmentId: 'dermal-fillers', title: 'Lift, Glow & Contour - Signature Package', enquirySubject: 'Lift, Glow & Contour',
    items: [{ label: '5ml Filler + 2 Skin Boosters + 1 Anti-Wrinkle Area or Brow Lift', amount: 1350, from: true,
      note: 'Initial filler and upper-face treatment, followed by skin boosters at weeks 4 and 8.' }],
    notes: ['Includes consultation, facial planning and personalised aftercare. Additional filler is charged separately.'],
  },
  {
    treatmentId: 'dermal-fillers', title: 'Signature Lip Enhance', enquirySubject: 'Signature Lip Enhance',
    items: [{ label: '0.5ml Filler', amount: 180, from: true }, { label: '1ml Filler', amount: 240, from: true }],
    notes: ['Tailored lip definition, hydration and shape, with personalised aftercare.'],
  },
  {
    treatmentId: 'anti-wrinkle-consultations', title: 'Ultimate Glow Package', enquirySubject: 'Ultimate Glow Package',
    items: [{ label: '3 Anti-Wrinkle Areas + 2 Skin Boosters', amount: 595, from: true,
      note: 'Initial anti-wrinkle treatment and skin booster, with review and second skin booster at week 2.' }], notes: ['Includes personalised aftercare.'],
  },
  {
    treatmentId: 'anti-wrinkle-consultations', title: 'Refresh Package', enquirySubject: 'Refresh Package',
    items: [{ label: 'Anti-Wrinkle Treatment Only', amount: 260, note: 'Treatment plan for 1-3 areas, with a review at week 2.' }], notes: [],
  },
];

export const pricingEnquiryCategories: Record<string, string> = {
  'dermal-fillers': 'Dermal Fillers',
  'anti-wrinkle-consultations': 'Anti-Wrinkle Consultations',
  'skin-boosters': 'Skin Boosters & Polynucleotides',
  polynucleotides: 'Skin Boosters & Polynucleotides',
  'health-wellness': 'Health & Wellness',
};

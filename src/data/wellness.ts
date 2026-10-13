import { BookingFocus } from './booking';

export interface WellnessProgramme {
  id: string;
  number: string;
  stage: string;
  name: string;
  price: string;
  duration: string;
  consultations: string;
  allowance: string;
  bestFor: string;
  value: string;
  inclusions: string[];
  bookingFocus: BookingFocus;
}

export const discoveryConsultationFocus: BookingFocus = {
  label: 'The Skin & Hormone Discovery Consultation — £295',
  kind: 'collective',
};

export const wellnessProgrammes: WellnessProgramme[] = [
  {
    id: 'skin-wellbeing-method',
    number: '01',
    stage: 'Understand',
    name: 'The Skin & Wellbeing Method',
    price: '£995',
    duration: '12 weeks',
    consultations: 'Initial consultation + follow-up review',
    allowance: '£150 aesthetic treatment allowance',
    bestFor: 'Women looking to understand their skin and create a personalised starting plan.',
    value: 'Clarity, practical guidance and a supported starting point—without guesswork or exaggerated promises.',
    inclusions: [
      'Comprehensive skin, health and lifestyle consultation',
      'Review of relevant hormonal symptoms, medications, stress, sleep and nutrition',
      'Personalised hormone-informed wellbeing plan',
      'Tailored home skincare routine and skin-support guidance',
      'Initial clinically suitable aesthetic treatment plan',
      'Follow-up review across the 12-week programme',
    ],
    bookingFocus: { label: 'The Skin & Wellbeing Method — £995', kind: 'collective' },
  },
  {
    id: 'skin-longevity-approach',
    number: '02',
    stage: 'Support & Restore',
    name: 'The Skin Longevity Approach',
    price: '£1,650',
    duration: '12 weeks',
    consultations: 'Three consultations across 12 weeks',
    allowance: '£350 aesthetic treatment allowance',
    bestFor: 'Women wanting a more structured, supported approach to skin health, aesthetic choices and whole-body wellbeing.',
    value: 'More time to review progress, adjust the plan and bring skin health and wider wellbeing into one considered strategy.',
    inclusions: [
      'The relevant scope of The Skin & Wellbeing Method',
      'Three consultations across 12 weeks',
      'Detailed progress checks and plan adjustments',
      'A structured skin-longevity strategy',
      'Ongoing skin-barrier, hydration and home skincare guidance',
      'Planning of clinically suitable aesthetic treatments and review of changing wellbeing goals',
    ],
    bookingFocus: { label: 'The Skin Longevity Approach — £1,650', kind: 'collective' },
  },
  {
    id: 'whole-woman-longevity-experience',
    number: '03',
    stage: 'Integrate & Longevity',
    name: 'The Whole Woman Longevity Experience',
    price: '£2,750',
    duration: '6 months',
    consultations: 'Six consultations across six months',
    allowance: '£650 aesthetic treatment allowance',
    bestFor: 'Women seeking a longer-term, joined-up partnership through changing skin needs and life-stage changes, including perimenopause and menopause.',
    value: 'A longer view, with space for priorities and recommendations to evolve as your skin and wellbeing needs change.',
    inclusions: [
      'The relevant scope of the earlier programmes',
      'Six consultations across six months',
      'Longer-term review of skin, hormonal symptoms and wellbeing goals',
      'Ongoing refinement of skincare and wellbeing strategies',
      'More time to coordinate and assess clinically suitable aesthetic treatments',
      'Personalised support as individual needs and priorities evolve',
    ],
    bookingFocus: { label: 'The Whole Woman Longevity Experience — £2,750', kind: 'collective' },
  },
];

export const discoveryDetails = [
  {
    title: 'Your skin assessment',
    summary: 'A detailed look at how your skin currently looks, feels and functions.',
    content: 'Katie will explore dryness, dehydration, pigmentation, sensitivity, texture, elasticity and visible signs of ageing, alongside your current routine and individual skin goals.',
  },
  {
    title: 'The wider health conversation',
    summary: 'Time to consider the context around changing skin—not skin in isolation.',
    content: 'The conversation may include life stage, menstrual health, perimenopause or menopause, relevant symptoms, medical history and current medication, plus nutrition, supplementation, stress, sleep, lifestyle and emotional wellbeing.',
  },
  {
    title: 'Your written, personalised roadmap',
    summary: 'Clear priorities and practical next steps shaped around you.',
    content: 'You will receive an individual skin and wellbeing strategy, home skincare and skin-barrier guidance, practical hormone-informed lifestyle recommendations, and clinically appropriate aesthetic options. Where indicated and within professional scope, next steps may include a referral or a recommendation to seek further assessment or blood or hormone investigations.',
  },
];

export const wellnessFaqs = [
  {
    question: 'How is this different from the £30 aesthetic consultation?',
    answer: 'The £30 consultation focuses on assessing suitability and planning for an individual aesthetic treatment. The £295 Skin & Hormone Discovery Consultation is a standalone 60-minute appointment exploring skin, hormonal health and wider wellbeing in more depth, followed by personalised written recommendations.',
  },
  {
    question: 'Do I need to be in perimenopause or menopause?',
    answer: 'No. The Collective is for women who want a more considered understanding of their skin and wellbeing. A diagnosed hormone imbalance or a particular life stage is not required to enquire.',
  },
  {
    question: 'Do I need to join a longer programme after the Discovery Consultation?',
    answer: 'No. The Discovery Consultation is complete as a standalone service. A longer programme may be discussed if it appears suitable, but there is no commitment to continue.',
  },
  {
    question: 'Are aesthetic treatments guaranteed within a programme?',
    answer: 'No. Each programme includes an aesthetic treatment allowance, but any treatment remains subject to consultation, clinical suitability and your personal goals. The allowance is not described as a cash rebate or a guaranteed quantity of treatment.',
  },
  {
    question: 'How does an enquiry work?',
    answer: 'Choose the consultation or programme you would like to discuss and prepare an email request. Your own email app will open so you can review and send it. No appointment is reserved until the clinic replies and confirms it with you.',
  },
];

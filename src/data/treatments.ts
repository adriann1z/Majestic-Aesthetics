import boostersImage from '../assets/images/treatment_skin_boosters_1791474722864.webp';

export interface Treatment {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  image: string;
  imageAlt: string;
  imageFit?: 'cover' | 'contain';
  fullOverview: string;
  suitability: string[];
  consultationSteps: string[];
  appointmentInformation: string;
  aftercareGuidelines: string[];
  risksAndLimitations: string[];
  faqs: { question: string; answer: string }[];
  isConfirmed: boolean;
}

export const treatmentsData: Treatment[] = [
  {
    id: "dermal-fillers",
    slug: "dermal-fillers",
    title: "Dermal Fillers",
    category: "Facial Harmony & Balance",
    shortDescription: "Considered treatments designed to enhance facial harmony, balance and subtle structural definition.",
    image: "/images/dermal-fillers-before-after.webp",
    imageAlt: "Majestic Aesthetics lip filler before-and-after comparison",
    imageFit: 'contain',
    fullOverview: "Dermal fillers are hyaluronic acid-based injectable treatments thoughtfully administered to restore volume loss, soften deeper facial contours, and support facial architecture. At Majestic Aesthetics, our philosophy prioritises understated elegance—enhancing your existing features rather than changing the character of your face.",
    suitability: [
      "Individuals experiencing age-related volume reduction in cheek, marionette, or jawline regions",
      "Clients seeking delicate definition and contour support without exaggerated fullness",
      "Adults over 18 in good general health with realistic expectations",
      "Suitability is determined through a comprehensive face-to-face clinical medical assessment"
    ],
    consultationSteps: [
      "Comprehensive medical history evaluation and assessment of facial anatomy",
      "Discussion of your aesthetic goals, anatomical proportions, and comfort levels",
      "Formulation of a bespoke treatment plan with clear product explanation",
      "Informed consent and cooling-off period before proceeding"
    ],
    appointmentInformation: "Initial appointments typically allow 45 to 60 minutes to ensure a relaxed consultation, precise anatomical marking, and patient comfort. Topical anaesthesia is available.",
    aftercareGuidelines: [
      "Avoid touching or applying makeup to injection sites for at least 12 hours",
      "Refrain from strenuous exercise, saunas, and steam rooms for 48 hours",
      "Avoid alcohol for 24 hours post-treatment to reduce bruising risk",
      "Follow any specific guidance provided in your take-home aftercare literature"
    ],
    risksAndLimitations: [
      "Common transient responses include minor tenderness, localised swelling, and temporary bruising",
      "Rare complications are discussed comprehensively during consultation with emergency protocols in place",
      "Results vary depending on metabolism, lifestyle, and individual anatomical factors"
    ],
    faqs: [
      {
        question: "How long do dermal filler treatments typically last?",
        answer: "Hyaluronic acid fillers typically break down naturally over 6 to 18 months, depending on the area treated, individual metabolic rates, and the specific premium product selected."
      },
      {
        question: "Will the results look obvious or unnatural?",
        answer: "Our clinical focus is strictly on subtle refinement. We work with micro-dosing and respect your natural proportions so you simply look rested and refreshed, never overfilled."
      }
    ],
    isConfirmed: true
  },
  {
    id: "anti-wrinkle-consultations",
    slug: "anti-wrinkle-consultations",
    title: "Anti-Wrinkle Consultations",
    category: "Expression Line Softening",
    shortDescription: "Personalised consultations to explore suitable options for softening the appearance of expression lines.",
    image: "/images/treatment-before-after.webp",
    imageAlt: "Majestic Aesthetics before-and-after forehead comparison, labelled Anti Ageing",
    imageFit: 'contain',
    fullOverview: "In accordance with UK regulatory standards, prescription-only treatments require an in-person clinical assessment by an Independent Prescriber. During your private consultation at Majestic Aesthetics, Katie will assess dynamic and static facial movement, discuss your skin history, and determine whether medical muscle-relaxing treatments are appropriate for your concerns.",
    suitability: [
      "Clients noticing forehead expression lines, frown creases (glabella), or crow's feet",
      "Those wishing to soften facial tension whilst retaining natural movement and expression",
      "Men and women seeking preventative or restorative skin rejuvenation",
      "Subject to clinical medical assessment with an Independent Prescriber"
    ],
    consultationSteps: [
      "Face-to-face consultation with Katie Osborne (Independent Prescriber)",
      "Dynamic expression analysis during animation and relaxation",
      "Transparent discussion of benefits, contraindications, and potential alternatives",
      "Prescription review and bespoke dosage recommendation tailored to your muscle strength"
    ],
    appointmentInformation: "Consultations take approximately 30 minutes. If medically indicated and mutually agreed following appropriate consent, treatment can be planned with precision.",
    aftercareGuidelines: [
      "Remain upright for 4 hours following any injectable procedure",
      "Avoid rubbing or massaging the treated facial areas for 24 hours",
      "Skip vigorous gym sessions, saunas, and extreme heat for 48 hours",
      "Allow 10 to 14 days for the full treatment effect to settle"
    ],
    risksAndLimitations: [
      "Mild redness, slight headache, or tiny pinpoint marks at injection sites which resolve rapidly",
      "Not suitable for pregnant or breastfeeding individuals, or those with neuromuscular disorders",
      "Temporary effects requiring periodic maintenance consultations to sustain"
    ],
    faqs: [
      {
        question: "Why is a consultation mandatory before treatment?",
        answer: "Muscle-relaxing injectables are prescription-only medicines in the UK. Legally and clinically, an Independent Prescriber must review your full medical history in person before prescribing or administering."
      },
      {
        question: "Will I lose facial expression or look 'frozen'?",
        answer: "No. Our approach prioritises movement and natural personality. We aim to soften harsh tension lines while preserving authentic expressions and eyebrow elevation."
      }
    ],
    isConfirmed: true
  },
  {
    id: "skin-boosters-polynucleotides",
    slug: "skin-boosters-polynucleotides",
    title: "Skin Boosters & Polynucleotides",
    category: "Skin Quality & Biorevitalisation",
    shortDescription: "Explore personalised options focused on deep skin hydration, cellular renewal and natural texture refinement.",
    image: boostersImage,
    imageAlt: "Biorevitalisation serums and ampoules arranged elegantly on rose travertine marble",
    fullOverview: "Unlike traditional fillers that add structural volume, skin boosters and polynucleotides work biologically to restore cellular vitality, stimulate collagen and elastin production, and deeply hydrate the dermal layers from within. Ideal for crepey skin, dullness, fine dehydration lines, and tired-looking skin around the eyes, neck, and face.",
    suitability: [
      "Dehydrated, lacklustre skin with reduced firmness or micro-crepiness",
      "Under-eye skin laxity, dark shadows, or delicate peri-oral lines",
      "Skin preparation ahead of special milestones or as a seasonal restorative boost",
      "All skin types looking to improve innate tissue elasticity and glow"
    ],
    consultationSteps: [
      "Skin barrier and elasticity diagnostic evaluation",
      "Selection between hyaluronic acid biorevitalisers or regenerative polynucleotide protocols",
      "Establishing a progressive treatment course (typically 2 to 3 sessions spaced 2–4 weeks apart)",
      "Integration with tailored medical homecare recommendations"
    ],
    appointmentInformation: "Treatment sessions last approximately 45 minutes, including pre-treatment cleansing and micro-injections using ultra-fine needles.",
    aftercareGuidelines: [
      "Expect tiny raised blebs at injection points which naturally disperse within 24 to 48 hours",
      "Keep the skin clean and hydrated with recommended post-procedure balms",
      "Apply broad-spectrum mineral SPF 50 daily and avoid direct sun exposure"
    ],
    risksAndLimitations: [
      "Mild swelling, pinpoint bruising, and temporary localised bumps at injection points",
      "Polynucleotides are derived from purified salmon or trout DNA and are not suitable for those with fish allergies"
    ],
    faqs: [
      {
        question: "What is the difference between fillers and skin boosters?",
        answer: "Fillers are designed to build volume, sculpt contours, or lift tissues. Skin boosters do not alter face shape; instead, they act as an intensive internal moisturiser and collagen stimulant to improve skin bounce and texture."
      },
      {
        question: "How many sessions are recommended?",
        answer: "Most biorevitalisation protocols deliver optimal outcomes through a course of 2 to 3 sessions, followed by a maintenance session every 6 months."
      }
    ],
    isConfirmed: true
  }
];

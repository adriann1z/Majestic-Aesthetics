import { siteConfig } from './siteConfig';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "booking" | "consultations" | "treatments" | "skincare" | "location";
}

export const faqList: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do I book a consultation?",
    answer: `You can send an enquiry directly via our online consultation form, or email Katie at ${siteConfig.contact.email}. Once approved by the clinic, direct online calendar scheduling may also be integrated.`,
    category: "booking"
  },
  {
    id: "faq-2",
    question: "What happens during my first appointment?",
    answer: "Your initial appointment is an unrushed, private consultation. Katie will review your medical history, discuss your areas of concern, perform an anatomical assessment, and explain suitable treatment options without pressure to proceed on the same day.",
    category: "consultations"
  },
  {
    id: "faq-3",
    question: "How do I know which treatment is right for me?",
    answer: "You do not need to diagnose yourself or choose a specific procedure beforehand. During your consultation, we evaluate your facial proportions, skin vitality, and expectations to recommend a tailored plan suited to your natural anatomy.",
    category: "treatments"
  },
  {
    id: "faq-4",
    question: "Is aftercare information provided?",
    answer: "Yes, comprehensive written and verbal aftercare guidance is provided following every clinical treatment. You will also receive direct contact details should you have any questions or require guidance during your recovery period.",
    category: "treatments"
  },
  {
    id: "faq-5",
    question: "Can I enquire about Obagi skincare products?",
    answer: "Majestic Aesthetics is currently exploring the introduction of medical-grade Obagi skincare. You are welcome to submit an enquiry or register your interest so Katie can contact you as soon as skincare consultations and product availability are confirmed.",
    category: "skincare"
  },
  {
    id: "faq-6",
    question: "Where is Majestic Aesthetics located?",
    answer: "The clinic serves clients in Southsea, Portsmouth, and surrounding Hampshire areas. In the existing design concept, 166 Eastney Road, Southsea (PO4 8DY) is listed, pending Katie's final verification of the active clinical consultation premises.",
    category: "location"
  }
];

export interface ClinicInfo {
  name: string;
  tagline: string;
  type: string;
  practitioner: {
    name: string;
    titles: string[];
    role: string;
    bioProposed: string;
    keyHighlights: string[];
    isApproved: boolean;
  };
  location: {
    town: string;
    city: string;
    county: string;
    country: string;
    addressLine: string;
    postcode: string;
    isAddressConfirmed: boolean;
  };
  contact: {
    email: string;
    phone: string;
    phoneHref: string;
    existingWebsite: string;
    bookingProviderUrl?: string; // If confirmed
  };
  obagiExpansion: {
    status: 'proposed_coming_soon';
    label: string;
    description: string;
  };
}

export const siteConfig: ClinicInfo = {
  name: "Majestic Aesthetics",
  tagline: "Expert aesthetics. Beautifully refined.",
  type: "Medical Aesthetics Clinic",
  practitioner: {
    name: "Katie Osborne",
    titles: ["Registered Midwife", "Independent Prescriber", "Aesthetics Practitioner"],
    role: "Clinical Lead & Founder",
    bioProposed: `At Majestic Aesthetics, every treatment journey starts with understanding you.

Katie Osborne brings a clinical background and a personal approach to aesthetic care, focusing on thoughtful consultations, individual treatment planning and natural-looking results.

Her aim is to help clients make informed, confident decisions about their aesthetic treatments in a professional and welcoming environment.`,
    keyHighlights: [
      "Clinically led aesthetic consultations",
      "Individualised facial assessment & planning",
      "Focus on subtlety and facial harmony",
      "Attentive aftercare & continuous client support"
    ],
    isApproved: false // Marked for client review
  },
  location: {
    town: "Southsea",
    city: "Portsmouth",
    county: "Hampshire",
    country: "England",
    addressLine: "166 Eastney Road",
    postcode: "PO4 8DY",
    isAddressConfirmed: true
  },
  contact: {
    email: "info@majesticaesthetics.uk",
    phone: "023 9281 6845",
    phoneHref: "tel:+442392816845",
    existingWebsite: "https://www.majesticaesthetics.co.uk/"
  },
  obagiExpansion: {
    status: 'proposed_coming_soon',
    label: "Proposed addition — coming soon, subject to confirmation",
    description: "We're exploring a new approach to professional skincare at Majestic Aesthetics, with the possibility of introducing a carefully selected Obagi range to complement personalised skin consultations."
  }
};

export const trustPillars = [
  {
    title: "Registered Midwife",
    subtitle: "Clinical medical background & patient-first ethics",
    needsVerification: true
  },
  {
    title: "Independent Prescriber",
    subtitle: "Qualified to prescribe suitable medical formulations",
    needsVerification: true
  },
  {
    title: "Personalised Consultations",
    subtitle: "Unrushed one-to-one facial assessment",
    needsVerification: false
  },
  {
    title: "Natural-Looking Results",
    subtitle: "Subtle enhancements designed to maintain individuality",
    needsVerification: false
  }
];

export const clientReviewItems = [
  {
    id: "gallery-consent",
    item: "Gallery Photography Consent",
    currentConceptValue: "Six owner-supplied treatment photographs retained in the gallery",
    status: "Owner review required",
    actionRequired: "Confirm documented permission for public display of every client photograph and approve the captions."
  },
  {
    id: "address",
    item: "Clinic Address",
    currentConceptValue: "166 Eastney Road, Southsea, Portsmouth, PO4 8DY",
    status: "Owner confirmed",
    actionRequired: "Clinic address confirmed for display on the website."
  },
  {
    id: "qualifications",
    item: "Practitioner Credentials",
    currentConceptValue: "Registered Midwife & Independent Prescriber",
    status: "Pending verification",
    actionRequired: "Confirm registration details and prescribing credential wording for compliance."
  },
  {
    id: "phone",
    item: "Clinic Telephone",
    currentConceptValue: "023 9281 6845",
    status: "Owner supplied",
    actionRequired: "Telephone number supplied and added to the site's contact links."
  },
  {
    id: "obagi",
    item: "Obagi Medical Skincare Stocking",
    currentConceptValue: "Presented as proposed concept expansion",
    status: "Exploratory concept",
    actionRequired: "Confirm initial product selection or desired enquiry workflow when stockist partnership commences."
  },
  {
    id: "portrait",
    item: "Katie Osborne Photography",
    currentConceptValue: "Owner-supplied photograph added to Meet Your Practitioner; hero concept image retained",
    status: "Profile photo supplied",
    actionRequired: "Review the supplied profile photo and confirm the preferred approved image for the homepage hero."
  }
];

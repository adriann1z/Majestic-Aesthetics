export interface SkincareProduct {
  id: string;
  name: string;
  line: string;
  shortDesc: string;
  benefits: string[];
  volume: string;
  keyIngredients: string[];
  statusNote: string;
}

export const obagiSkincarePreview: SkincareProduct[] = [
  {
    id: "obagi-nu-derm-cleanser",
    name: "Gentle Medical Cleanser",
    line: "Obagi Nu-Derm® System Preview",
    shortDesc: "A mild, purifying gel wash formulated to gently remove impurities and excess oils without stripping moisture.",
    benefits: ["Maintains skin barrier moisture", "Soothes sensitive or redness-prone skin", "Prepares skin for active serums"],
    volume: "200 ml",
    keyIngredients: ["Oat Amino Acids", "Aloe Vera Extract", "Chamomile"],
    statusNote: "Concept preview — subject to confirmed stockist launch"
  },
  {
    id: "obagi-c-rx-serum",
    name: "10% L-Ascorbic Acid Serum",
    line: "Obagi-C® System Preview",
    shortDesc: "Potent medical-grade antioxidant serum targeting environmental photodamage, uneven tone, and dullness.",
    benefits: ["Brightens dull complexion", "Protects against oxidative stressors", "Supports healthy skin texture"],
    volume: "30 ml",
    keyIngredients: ["10% Pure L-Ascorbic Acid", "Hyaluronic Acid"],
    statusNote: "Concept preview — subject to confirmed stockist launch"
  },
  {
    id: "obagi-hydrate-facial-moisturizer",
    name: "Hydrate Luxe Rich Moisture",
    line: "Obagi Hydrate® Range Preview",
    shortDesc: "An ultra-nourishing hydrator engineered with Hydromanil technology to provide continuous 8-hour cellular hydration.",
    benefits: ["Deep long-lasting hydration", "Helps prevent moisture evaporation", "Non-comedogenic comforting balm"],
    volume: "48 g",
    keyIngredients: ["Hydromanil (Tara Seed Extract)", "Shea Butter", "Avocado Oil"],
    statusNote: "Concept preview — subject to confirmed stockist launch"
  },
  {
    id: "obagi-sun-shield-matte",
    name: "Sun Shield Broad Spectrum SPF 50",
    line: "Obagi Sun Shield™ Preview",
    shortDesc: "High-level UVA/UVB defence combining chemical and physical filters with an elegant matte, non-greasy finish.",
    benefits: ["Complete daily photo-protection", "Matte finish with zero white cast", "Dermatologist-tested base"],
    volume: "85 g",
    keyIngredients: ["Zinc Oxide 10.5%", "Octinoxate 7.5%"],
    statusNote: "Concept preview — subject to confirmed stockist launch"
  }
];

export const skincareHeroData = {
  eyebrow: "A NEW CHAPTER IN SKINCARE",
  heading: "Beautiful skin goes beyond the treatment room.",
  description: "We're exploring a new approach to professional skincare at Majestic Aesthetics, with the possibility of introducing a carefully selected Obagi range to complement personalised skin consultations.",
  statusLabel: "Proposed addition — coming soon, subject to confirmation",
  image: "/src/assets/images/obagi_skincare_bottles_1791474733199.jpg",
  imageAlt: "Luxury medical-grade skincare formulation droppers and creams on pale blush marble",
  disclaimer: "Please note: Majestic Aesthetics is exploring the introduction of Obagi Medical skincare. Products and pricing will be finalized once authorized stocking arrangements are verified by Katie Osborne."
};

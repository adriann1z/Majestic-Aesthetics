
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
  eyebrow: "OBAGI SKINCARE",
  heading: "Beautiful skin goes beyond the treatment room.",
  description: "Explore Obagi skincare as part of a personalised homecare plan. From cleansing and moisturising to targeted serums and daily sun protection, discuss a routine with Katie that fits your skin concerns, lifestyle and existing treatments.",
  statusLabel: "Future interest only - not yet a live treatment or retail service",
  image: `${import.meta.env.BASE_URL}images/skincare-plans.png`,
  imageAlt: "Obagi Medical skincare collection for personalised skincare plans",
  disclaimer: "Please note: skincare products, pricing and stockist arrangements are not currently confirmed. You can register interest so Katie can shape future options around client demand."
};

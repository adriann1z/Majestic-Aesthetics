export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: string;
  caption: string;
  editorialTag: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g-1",
    title: "Natural Skin Radiance",
    category: "Skin Aesthetics",
    image: "/src/assets/images/regenerated_image_1791482961876.png",
    aspect: "col-span-1 md:col-span-2 row-span-2",
    caption: "Healthy skin texture and calm refinement — the cornerstone of our aesthetic philosophy.",
    editorialTag: "Editorial Concept"
  },
  {
    id: "g-2",
    title: "Bespoke Consultation Suite",
    category: "Clinic Environment",
    image: "/src/assets/images/clinic_interior_suite_1791474743453.jpg",
    aspect: "col-span-1 md:col-span-2 row-span-1",
    caption: "A welcoming, clinically private consultation setting designed for unhurried conversations.",
    editorialTag: "Environment Inspiration"
  },
  {
    id: "g-3",
    title: "Facial Proportion & Contour",
    category: "Facial Harmony",
    image: "/src/assets/images/treatment_dermal_contour_1791474713954.jpg",
    aspect: "col-span-1 row-span-1",
    caption: "Understated balance and preservation of natural facial dynamics.",
    editorialTag: "Clinical Focus"
  },
  {
    id: "g-4",
    title: "Biorevitalisation & Serums",
    category: "Skin Health",
    image: "/src/assets/images/treatment_skin_boosters_1791474722864.jpg",
    aspect: "col-span-1 row-span-1",
    caption: "Hyaluronic acid skin boosters and targeted cellular hydrators.",
    editorialTag: "Treatment Concept"
  },
  {
    id: "g-5",
    title: "Medical Skincare Formulas",
    category: "Prescription Skincare",
    image: "/src/assets/images/obagi_skincare_bottles_1791474733199.jpg",
    aspect: "col-span-1 md:col-span-2 row-span-1",
    caption: "Future-ready clinical skincare range to sustain long-term dermal health at home.",
    editorialTag: "Proposed Expansion"
  }
];

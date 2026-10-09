export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  caption: string;
  editorialTag: string;
}

export const galleryItems: GalleryItem[] = [
  { id: 'g-1', title: 'Lip Filler: Side Profile', image: `${import.meta.env.BASE_URL}gallery/7.webp`, caption: 'Lip filler treatment, shown before and after in profile.', editorialTag: 'Lip Enhancement' },
  { id: 'g-2', title: 'Cheek Contour', image: `${import.meta.env.BASE_URL}gallery/14.webp`, caption: 'Before and after a 1ml cheek filler treatment.', editorialTag: 'Cheek Filler' },
  { id: 'g-3', title: 'A Personalised Approach', image: `${import.meta.env.BASE_URL}gallery/9.webp`, caption: 'A personalised treatment plan, photographed six weeks apart.', editorialTag: 'Treatment Plan' },
  { id: 'g-4', title: 'Mid-Face & Chin Rejuvenation', image: `${import.meta.env.BASE_URL}gallery/6.webp`, caption: 'Mid-face and chin rejuvenation with a lip refill, before and after.', editorialTag: 'Facial Rejuvenation' },
  { id: 'g-5', title: 'Dermaplane & Glow', image: `${import.meta.env.BASE_URL}gallery/10.webp`, caption: 'Skin following a dermaplaning treatment.', editorialTag: 'Skin Treatments' },
  { id: 'g-6', title: 'Lip Filler: Definition & Volume', image: `${import.meta.env.BASE_URL}gallery/4.webp`, caption: 'Before and after a 1.1ml lip filler treatment.', editorialTag: 'Lip Enhancement' },
  { id: 'g-7', title: 'Before & After: Profile', image: `${import.meta.env.BASE_URL}gallery/before-after-8.png`, caption: 'A side-by-side comparison of an individual client before and after treatment.', editorialTag: 'Client Results' },
  { id: 'g-8', title: 'Before & After: Facial Detail', image: `${import.meta.env.BASE_URL}gallery/before-after-4.png`, caption: 'A closer look at an individual client before and after treatment.', editorialTag: 'Client Results' },
  { id: 'g-9', title: 'Before & After: Close-Up', image: `${import.meta.env.BASE_URL}gallery/before-after-9.png`, caption: 'An individual client result, shown in a close-up before-and-after comparison.', editorialTag: 'Client Results' },
];

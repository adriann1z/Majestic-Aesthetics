export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  caption: string;
  editorialTag: string;
}

export const galleryItems: GalleryItem[] = [
  { id: 'g-1', title: 'Lip Filler: Side Profile', image: '/gallery/7.webp', caption: 'Lip filler treatment, shown before and after in profile.', editorialTag: 'Lip Enhancement' },
  { id: 'g-2', title: 'Cheek Contour', image: '/gallery/14.webp', caption: 'Before and after a 1ml cheek filler treatment.', editorialTag: 'Cheek Filler' },
  { id: 'g-3', title: 'A Personalised Approach', image: '/gallery/9.webp', caption: 'A personalised treatment plan, photographed six weeks apart.', editorialTag: 'Treatment Plan' },
  { id: 'g-4', title: 'Mid-Face & Chin Rejuvenation', image: '/gallery/6.webp', caption: 'Mid-face and chin rejuvenation with a lip refill, before and after.', editorialTag: 'Facial Rejuvenation' },
  { id: 'g-5', title: 'Dermaplane & Glow', image: '/gallery/10.webp', caption: 'Skin following a dermaplaning treatment.', editorialTag: 'Skin Treatments' },
  { id: 'g-6', title: 'Lip Filler: Definition & Volume', image: '/gallery/4.webp', caption: 'Before and after a 1.1ml lip filler treatment.', editorialTag: 'Lip Enhancement' },
];

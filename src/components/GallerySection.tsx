import React, { useState } from 'react';
import { X, Maximize2, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';
import { galleryItems, GalleryItem } from '../data/gallery';

export const GallerySection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const handleNext = () => {
    if (!activeItem) return;
    const currentIndex = galleryItems.findIndex(i => i.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setActiveItem(galleryItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeItem) return;
    const currentIndex = galleryItems.findIndex(i => i.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setActiveItem(galleryItems[prevIndex]);
  };

  return (
    <section 
      id="gallery"
      className="py-16 sm:py-24 bg-[#FFF8FB] border-b border-[#EAD7DF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-gradient-to-r from-[#D4AF37] to-[#C08EA1]"></span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8D5A6F]">
              The Majestic Look
            </span>
            <span className="w-6 h-px bg-gradient-to-l from-[#D4AF37] to-[#C08EA1]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#282924] font-normal tracking-tight">
            Beauty in the <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-[#7F5668] inline-block ml-1 font-normal">details.</span>
          </h2>

          <p className="text-base text-[#74786E] font-light leading-relaxed">
            A curated glimpse into our clinic atmosphere, aesthetic focus and skincare philosophy.
          </p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-3xl overflow-hidden border border-[#EAD7DF] bg-[#F9EDF2] cursor-pointer shadow-xs hover:shadow-xl hover:shadow-[#C08EA1]/15 transition-all duration-300 aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Editorial Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#282924]/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#EAD7DF] mb-1">
                  {item.editorialTag}
                </span>
                <h4 className="font-serif text-xl font-medium leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-white/80 mt-1 line-clamp-2">
                  {item.caption}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-[#F9EDF2]">
                  <Maximize2 className="w-3.5 h-3.5 text-[#C08EA1]" />
                  <span>Click to expand view</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Note for Katie */}
        <div className="mt-8 text-center text-xs text-[#74786E] italic">
          * Gallery showcases design atmosphere. Once Katie provides authentic clinic & consultation room photos, they will seamlessly replace these placeholders.
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative max-w-4xl w-full bg-[#282924] rounded-3xl overflow-hidden border border-[#3D3E38] shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Topbar */}
            <div className="flex items-center justify-between p-4 px-6 border-b border-[#3D3E38] text-white">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#C08EA1] block">
                  {activeItem.editorialTag}
                </span>
                <h3 className="font-serif text-xl">{activeItem.title}</h3>
              </div>
              <button
                onClick={() => setActiveItem(null)}
                className="p-2 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
                aria-label="Close image viewer"
                type="button"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Image Stage */}
            <div className="relative aspect-[16/10] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-contain"
              />

              {/* Prev / Next Controls */}
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors cursor-pointer"
                aria-label="Previous image"
                type="button"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors cursor-pointer"
                aria-label="Next image"
                type="button"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Caption */}
            <div className="p-4 px-6 text-xs text-stone-300 flex items-center justify-between border-t border-[#3D3E38]">
              <span>{activeItem.caption}</span>
              <span className="text-[11px] text-[#A96883] font-mono">Majestic Aesthetics</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

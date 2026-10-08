import React, { useEffect, useRef, useState } from 'react';
import { X, Maximize2, ChevronRight, ChevronLeft } from 'lucide-react';
import { galleryItems, GalleryItem } from '../data/gallery';
import { DecorativeBackground } from './DecorativeBackground';

export const GallerySection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const isOpen = activeItem !== null;

  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButton.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveItem(null);
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        setActiveItem(current => {
          const index = galleryItems.findIndex(item => item.id === current?.id);
          return galleryItems[(index + (event.key === 'ArrowRight' ? 1 : -1) + galleryItems.length) % galleryItems.length];
        });
      }
      if (event.key === 'Tab') {
        const buttons = closeButton.current?.closest('[role="dialog"]')?.querySelectorAll<HTMLButtonElement>('button');
        if (!buttons?.length) return;
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      previousFocus?.focus();
    };
  }, [isOpen]);

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
      className="py-16 sm:py-24 bg-blush-white border-b border-border-blush"
    >
      <DecorativeBackground variant="botanical" />
      <div className="section-inner max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-gradient-to-r from-gold-metallic to-rose-brand"></span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-rose-accent">
              The Results Gallery
            </span>
            <span className="w-6 h-px bg-gradient-to-l from-gold-metallic to-rose-brand"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-text-charcoal font-normal tracking-tight">
            Beauty in the <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-rose-plum inline-block ml-1 font-normal">details.</span>
          </h2>

          <p className="text-base text-text-muted font-light leading-relaxed">
            A closer look at our treatments and the individual results of our clients.
          </p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-label={`View ${item.title}`}
              onClick={() => setActiveItem(item)}
              className="group relative text-left rounded-lg overflow-hidden border border-border-blush bg-white cursor-pointer hover:-translate-y-1 hover:border-rose-brand hover:shadow-xl hover:shadow-rose-brand/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-plum transition-all duration-500 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <div className="relative aspect-square">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.015] motion-reduce:transform-none"
                width={750}
                height={750}
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              <span title="View image" className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-rose-plum shadow-sm opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300"><Maximize2 className="w-4 h-4" /></span>
              </div>
              <div className="p-5 border-t border-border-blush">
                <span className="block text-[11px] font-semibold uppercase text-rose-accent mb-2">
                  {item.editorialTag}
                </span>
                <h4 className="font-serif text-xl font-medium leading-snug text-text-charcoal">
                  {item.title}
                </h4>
                <p className="text-sm text-text-muted mt-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Content Note for Katie */}
        <div className="mt-8 text-center text-xs text-text-muted italic">
          Individual results vary. Treatments are tailored following a consultation.
          <span className="block mt-2">Owner review: confirm client photography consent before public launch.</span>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveItem(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
        >
          <div 
            className="relative max-w-3xl w-full max-h-[92dvh] bg-text-charcoal rounded-lg overflow-y-auto border border-[#3D3E38] shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Topbar */}
            <div className="flex items-center justify-between p-4 px-6 border-b border-[#3D3E38] text-white">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-rose-brand block">
                  {activeItem.editorialTag}
                </span>
                <h3 className="font-serif text-xl">{activeItem.title}</h3>
              </div>
              <button
                ref={closeButton}
                onClick={() => setActiveItem(null)}
                className="p-2 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
                aria-label="Close image viewer"
                type="button"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Image Stage */}
            <div className="relative bg-black flex items-center justify-center min-h-0">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full max-h-[65dvh] object-contain"
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
            <div className="p-4 px-6 text-xs text-stone-300 flex flex-wrap gap-3 items-center justify-between border-t border-[#3D3E38]">
              <span>{activeItem.caption}</span>
              <span className="text-[11px] text-rose-button font-mono">Majestic Aesthetics</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

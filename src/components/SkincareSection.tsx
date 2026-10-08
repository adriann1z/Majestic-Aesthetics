import React, { useState } from 'react';
import { ArrowRight, Sparkles, Check, Package, AlertCircle } from 'lucide-react';
import { obagiSkincarePreview, skincareHeroData, SkincareProduct } from '../data/skincare';
import { DecorativeBackground } from './DecorativeBackground';

interface SkincareSectionProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const SkincareSection: React.FC<SkincareSectionProps> = ({ onOpenEnquiry }) => {
  const [selectedProduct, setSelectedProduct] = useState<SkincareProduct | null>(null);

  return (
    <section 
      id="skincare"
      className="py-16 sm:py-24 bg-blush-white border-b border-border-blush"
    >
      <DecorativeBackground variant="botanical" />
      <div className="section-inner max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Main Editorial Hero Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          
          {/* Left Column: Text & Strategic Expansion Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="flex items-center gap-2">
              <span className="w-6 h-px bg-gradient-to-r from-gold-metallic to-rose-brand"></span>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-rose-accent">
                {skincareHeroData.eyebrow}
              </span>
            </div>

            <div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-text-charcoal font-normal tracking-tight leading-[1.18]">
                Beautiful skin goes beyond <br />
                <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-rose-plum block mt-1 font-normal">
                  the treatment room.
                </span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-text-muted font-light leading-relaxed">
              True to our clinic philosophy of comprehensive <em>Aesthetics &amp; Skin Care</em>, we're exploring a new dimension in professional dermal health at Majestic Aesthetics, with the possibility of introducing a carefully selected Obagi Medical range to complement clinical appointments.
            </p>

            {/* Status Indicator */}
            <div className="p-4 rounded-2xl bg-rose-soft border border-gold-metallic/35 flex items-start gap-3 shadow-2xs">
              <Sparkles className="w-5 h-5 text-gold-metallic shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-rose-plum block">
                  {skincareHeroData.statusLabel}
                </span>
                <p className="text-xs text-text-muted mt-1">
                  {skincareHeroData.disclaimer}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenEnquiry("Obagi Skincare Interest")}
                type="button"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-rose-button hover:bg-rose-accent rounded-full shadow-xs transition-colors cursor-pointer"
              >
                <span>Enquire About Skincare</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <span className="text-xs text-text-muted">
                Personalised homecare consultation protocols
              </span>
            </div>
          </div>

          {/* Right Column: Skincare Product Photography (5 cols) */}
          <div className="lg:col-span-5">
            <div className="skincare-photo relative overflow-hidden border border-border-blush shadow-lg shadow-rose-brand/15 bg-blush-pale">
              <img
                src={skincareHeroData.image}
                alt={skincareHeroData.imageAlt}
                className="w-full h-[400px] sm:h-[480px] object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 rounded-2xl border border-border-blush shadow-xs">
                <span className="text-[11px] font-semibold tracking-widest text-rose-accent uppercase block">
                  A considered skincare collection
                </span>
                <p className="text-xs text-text-charcoal mt-0.5 font-medium">
                  Proposed range, subject to Katie's approval and confirmed availability.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Future Capabilities: Reusable Product Component Grid Preview */}
        <div className="pt-8 border-t border-border-blush">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-rose-accent">
                The Skincare Edit
              </span>
              <h3 className="font-serif text-2xl text-text-charcoal">
                Proposed Skincare Catalog Preview
              </h3>
            </div>
            <span className="text-xs text-text-muted italic">
              * Demonstration layout — pricing & availability to be configured upon launch
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {obagiSkincarePreview.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg border border-border-blush p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-rose-accent font-semibold mb-2">
                    <span className="truncate">{product.line}</span>
                    <span className="text-text-muted">{product.volume}</span>
                  </div>

                  <h4 className="font-serif text-lg text-text-charcoal group-hover:text-rose-plum transition-colors mb-2">
                    {product.name}
                  </h4>

                  <p className="text-xs text-text-muted leading-relaxed mb-4">
                    {product.shortDesc}
                  </p>

                  <div className="space-y-1 mb-4">
                    {product.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-text-charcoal">
                        <Check className="w-3 h-3 text-rose-button" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border-blush/60">
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="text-text-muted">Price</span>
                    <span className="text-rose-accent italic">Upon consultation</span>
                  </div>
                  <button
                    onClick={() => onOpenEnquiry(`Skincare: ${product.name}`)}
                    type="button"
                    className="w-full py-2 px-3 text-xs font-semibold uppercase tracking-wider text-rose-plum hover:text-white bg-white hover:bg-rose-button border border-border-blush rounded-xl transition-colors cursor-pointer"
                  >
                    Register Interest
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

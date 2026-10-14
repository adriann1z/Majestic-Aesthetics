import React, { useEffect, useRef, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { TreatmentsSection } from './components/TreatmentsSection';
import { PriceListSection } from './components/PriceListSection';
import { PractitionerSection } from './components/PractitionerSection';
import { SkincareSection } from './components/SkincareSection';
import { ProcessSection } from './components/ProcessSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TreatmentDetailModal } from './components/TreatmentDetailModal';
import { ReviewChecklistModal } from './components/ReviewChecklistModal';
import { PrivacyModal } from './components/PrivacyModal';
import { Treatment } from './data/treatments';
import { SectionReveal } from './components/SectionReveal';
import { FloralEdges } from './components/FloralEdges';
import { BookingModal } from './components/BookingModal';
import { WellnessTeaser } from './components/WellnessTeaser';
import { WellnessPage } from './components/WellnessPage';
import { Phone, ArrowDown } from 'lucide-react';
import { siteConfig } from './data/siteConfig';
import { BookingFocus, bookingFocusFor, generalBookingFocus } from './data/booking';

type SitePage = 'home' | 'collective';

const collectiveSlug = 'skin-hormone-collective';
const basePath = import.meta.env.BASE_URL;

const pageFromLocation = (): SitePage => {
  const withoutBase = window.location.pathname.startsWith(basePath)
    ? window.location.pathname.slice(basePath.length)
    : window.location.pathname.replace(/^\//, '');
  return withoutBase.replace(/\/$/, '') === collectiveSlug ? 'collective' : 'home';
};

const setMetaContent = (selector: string, content: string) => {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', content);
};

export default function App() {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingFocus, setBookingFocus] = useState<BookingFocus>(generalBookingFocus);
  const [reviewChecklistOpen, setReviewChecklistOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<SitePage>(() => pageFromLocation());
  const pendingScroll = useRef<number | string | null>(null);

  const handleOpenBooking = (focus?: string | BookingFocus) => {
    const nextFocus = typeof focus === 'string'
      ? focus === 'Consultation with Katie Osborne' || focus === 'General Consultation'
        ? generalBookingFocus
        : bookingFocusFor(focus, /skin|obagi/i.test(focus) ? 'skincare' : 'aesthetics')
      : focus ?? generalBookingFocus;
    setBookingFocus(nextFocus);

    if (selectedTreatment) {
      setSelectedTreatment(null);
      window.requestAnimationFrame(() => setIsBookingOpen(true));
      return;
    }
    setIsBookingOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    if (currentPage !== 'home') {
      window.history.replaceState({ ...window.history.state, scrollY: window.scrollY }, '');
      window.history.pushState({ scrollY: 0 }, '', `${basePath}#${sectionId}`);
      pendingScroll.current = sectionId;
      setCurrentPage('home');
      return;
    }
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  };

  const handleNavigateCollective = () => {
    if (currentPage === 'collective') return;
    window.history.replaceState({ ...window.history.state, scrollY: window.scrollY }, '');
    window.history.pushState({ scrollY: 0 }, '', `${basePath}${collectiveSlug}`);
    pendingScroll.current = 0;
    setCurrentPage('collective');
  };

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      pendingScroll.current = typeof event.state?.scrollY === 'number'
        ? event.state.scrollY
        : window.location.hash.slice(1) || 0;
      setCurrentPage(pageFromLocation());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (pendingScroll.current === null) return;
    const target = pendingScroll.current;
    pendingScroll.current = null;
    window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
      if (typeof target === 'string') {
        document.getElementById(target)?.scrollIntoView({ behavior: 'auto' });
      } else {
        window.scrollTo({ top: target, behavior: 'auto' });
      }
    }));
  }, [currentPage]);

  useEffect(() => {
    const isCollective = currentPage === 'collective';
    const title = isCollective
      ? 'The Skin & Hormone Collective | Majestic Aesthetics Southsea'
      : 'Majestic Aesthetics | Medical Aesthetics Southsea, Portsmouth';
    const description = isCollective
      ? 'Explore hormone-informed skin health, the £295 Discovery Consultation and personalised women’s wellness programmes at Majestic Aesthetics in Southsea.'
      : 'Premium medical aesthetics clinic in Southsea, Portsmouth led by Katie Osborne. Bespoke consultations, natural-looking results, and clinical skin treatments.';
    const canonicalUrl = `${siteConfig.contact.existingWebsite.replace(/\/$/, '')}${isCollective ? `/${collectiveSlug}` : '/'}`;

    document.title = title;
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', description);
    setMetaContent('meta[property="og:url"]', canonicalUrl);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [currentPage]);

  return (
    <div className="site-shell relative min-h-screen bg-blush-white text-text-charcoal flex flex-col selection:bg-rose-brand/20 selection:text-rose-plum">
      <SectionReveal />
      {currentPage === 'home' && <div className="reference-art" aria-hidden="true" />}
      
      {/* 2. Sticky Luxury Navigation */}
      <Header
        onOpenBooking={() => handleOpenBooking()}
        onNavigate={handleNavigate}
        onNavigateCollective={handleNavigateCollective}
        currentPage={currentPage}
      />

      {currentPage === 'home' ? <main id="main-content" className="site-main relative flex-1">
        <FloralEdges />
        
        {/* 3. Editorial Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreTreatments={() => handleNavigate('treatments')}
        />

        {/* 4. Clinical Trust Strip */}
        <TrustStrip />
        <div className="relative z-10 flex justify-center bg-blush-white py-2">
          <button
            type="button"
            onClick={() => handleNavigate('treatments')}
            aria-label="Scroll down to treatments"
            title="Explore treatments"
            className="flex h-11 w-11 items-center justify-center rounded-full text-rose-button hover:text-rose-plum hover:bg-blush-pale transition-colors cursor-pointer"
          >
            <ArrowDown aria-hidden="true" className="h-6 w-6 animate-bounce motion-reduce:animate-none" />
          </button>
        </div>

        {/* 5. Our Treatments */}
        <TreatmentsSection
          onSelectTreatment={(treatment) => setSelectedTreatment(treatment)}
          onOpenBooking={() => handleOpenBooking()}
        />

        <PriceListSection onOpenEnquiry={handleOpenBooking} />

        {/* 6. Meet Katie Section */}
        <PractitionerSection
          onOpenBooking={() => handleOpenBooking("Consultation with Katie Osborne")}
          onOpenChecklist={() => setReviewChecklistOpen(true)}
        />

        {/* 7. Obagi Skincare Expansion */}
        <SkincareSection
          onOpenEnquiry={(productName) => handleOpenBooking(productName || "Obagi Skincare Enquiry")}
        />

        {/* 8. Our Approach */}
        <ProcessSection />

        <WellnessTeaser
          onExplore={handleNavigateCollective}
          onOpenBooking={handleOpenBooking}
        />

        {/* 9. Image Gallery */}
        <GallerySection />

        {/* 10. Testimonials & Social Proof */}
        <TestimonialsSection />

        {/* 11. Frequently Asked Questions */}
        <FAQSection />

        {/* 12. Booking & Contact */}
        <ContactSection />

      </main> : (
        <WellnessPage
          onOpenBooking={handleOpenBooking}
          onNavigateHome={handleNavigate}
        />
      )}

      {/* 13. Luxury Plum Rose Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenChecklist={() => setReviewChecklistOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
        onNavigateCollective={handleNavigateCollective}
      />

      {/* Modals & Drawers */}
      <div className="mobile-call-bar">
        <a href={siteConfig.contact.phoneHref} aria-label={`Call Majestic Aesthetics on ${siteConfig.contact.phone}`} className="flex min-h-12 items-center justify-center gap-3 rounded-lg bg-rose-button px-4 py-3 text-white font-semibold shadow-sm hover:bg-rose-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-plum">
          <Phone className="w-5 h-5 shrink-0" />
          <span>Call Now</span>
          <span className="text-sm font-normal">{siteConfig.contact.phone}</span>
        </a>
      </div>
      <TreatmentDetailModal
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
        onBookTreatment={(treatmentName) => handleOpenBooking(treatmentName)}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultFocus={bookingFocus}
      />

      <ReviewChecklistModal
        isOpen={reviewChecklistOpen}
        onClose={() => setReviewChecklistOpen(false)}
      />

      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

    </div>
  );
}

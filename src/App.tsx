import React, { useState } from 'react';
import { ConceptNotice } from './components/ConceptNotice';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { TreatmentsSection } from './components/TreatmentsSection';
import { PractitionerSection } from './components/PractitionerSection';
import { SkincareSection } from './components/SkincareSection';
import { ProcessSection } from './components/ProcessSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TreatmentDetailModal } from './components/TreatmentDetailModal';
import { BookingModal } from './components/BookingModal';
import { ReviewChecklistModal } from './components/ReviewChecklistModal';
import { PrivacyModal } from './components/PrivacyModal';
import { Treatment } from './data/treatments';
import { SectionReveal } from './components/SectionReveal';
import { FloralEdges } from './components/FloralEdges';

export default function App() {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingTreatmentFocus, setBookingTreatmentFocus] = useState<string>("General Facial Aesthetics Consultation");
  const [reviewChecklistOpen, setReviewChecklistOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const handleOpenBooking = (defaultFocus?: string) => {
    if (defaultFocus) {
      setBookingTreatmentFocus(defaultFocus);
    }
    setBookingModalOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }
  };

  return (
    <div className="site-shell relative min-h-screen bg-blush-white text-text-charcoal flex flex-col selection:bg-rose-brand/20 selection:text-rose-plum">
      <SectionReveal />
      <div className="reference-art" aria-hidden="true" />
      
      {/* 1. Client Presentation Concept Banner */}
      <ConceptNotice onOpenChecklist={() => setReviewChecklistOpen(true)} />

      {/* 2. Sticky Luxury Navigation */}
      <Header
        onOpenBooking={() => handleOpenBooking()}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="site-main relative flex-1">
        <FloralEdges />
        
        {/* 3. Editorial Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreTreatments={() => handleNavigate('treatments')}
        />

        {/* 4. Clinical Trust Strip */}
        <TrustStrip />

        {/* 5. Our Treatments */}
        <TreatmentsSection
          onSelectTreatment={(treatment) => setSelectedTreatment(treatment)}
          onOpenBooking={() => handleOpenBooking()}
        />

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

        {/* 9. Image Gallery */}
        <GallerySection />

        {/* 10. Testimonials & Social Proof */}
        <TestimonialsSection />

        {/* 11. Frequently Asked Questions */}
        <FAQSection />

        {/* 12. Booking & Contact */}
        <ContactSection
          onOpenBooking={() => handleOpenBooking()}
          onOpenChecklist={() => setReviewChecklistOpen(true)}
        />

      </main>

      {/* 13. Luxury Plum Rose Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenChecklist={() => setReviewChecklistOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Modals & Drawers */}
      <TreatmentDetailModal
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
        onBookTreatment={(treatmentName) => handleOpenBooking(treatmentName)}
      />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultTreatment={bookingTreatmentFocus}
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

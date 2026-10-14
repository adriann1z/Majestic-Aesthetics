import React from 'react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { ConsultationRequestForm } from './ConsultationRequestForm';
import { DecorativeBackground } from './DecorativeBackground';
import { SocialLinks } from './SocialLinks';

export const ContactSection: React.FC = () => (
  <section id="contact" className="border-b border-border-blush bg-blush-pale py-16 sm:py-24">
    <DecorativeBackground variant="botanical" />
    <div className="section-inner mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <div className="mx-auto mb-14 max-w-2xl space-y-3 text-center sm:mb-20">
        <div className="flex items-center justify-center gap-2">
          <span className="h-px w-6 bg-gradient-to-r from-gold-metallic to-rose-brand" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase text-rose-accent">Get In Touch</span>
          <span className="h-px w-6 bg-gradient-to-l from-gold-metallic to-rose-brand" aria-hidden="true" />
        </div>

        <h2 className="font-serif text-3xl font-normal tracking-tight text-text-charcoal sm:text-4xl lg:text-5xl">
          Your confidence journey <br className="hidden sm:inline" />
          <span className="mt-1 block font-script text-4xl font-normal text-rose-plum sm:text-5xl lg:text-6xl">starts here.</span>
        </h2>

        <p className="text-base font-light leading-relaxed text-text-muted">
          Whether you&apos;re exploring aesthetic treatments for the first time or looking for personalised skincare advice, get in touch with Majestic Aesthetics.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="space-y-8 lg:col-span-5">
          <div className="contact-information space-y-6">
            <h3 className="font-serif text-2xl text-text-charcoal">Contact Information</h3>
            <SocialLinks />

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 shrink-0 rounded-lg border border-border-blush bg-blush-white p-2.5 text-rose-button">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="block text-xs font-medium uppercase text-text-muted">Call the Clinic</span>
                  <a href={siteConfig.contact.phoneHref} className="inline-block py-1 text-xl font-semibold text-rose-plum transition-colors hover:text-rose-accent">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-0.5 shrink-0 rounded-xl border border-border-blush bg-blush-white p-2.5 text-rose-accent">
                  <Mail className="h-5 w-5 text-rose-button" aria-hidden="true" />
                </div>
                <div>
                  <span className="block text-xs font-medium uppercase text-text-muted">Direct Email</span>
                  <a href={`mailto:${siteConfig.contact.email}`} className="font-medium text-text-charcoal transition-colors hover:text-rose-plum">
                    {siteConfig.contact.email}
                  </a>
                  <p className="mt-0.5 text-xs text-text-muted">Replies are typically provided within 24–48 hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-0.5 shrink-0 rounded-xl border border-border-blush bg-blush-white p-2.5 text-rose-accent">
                  <MapPin className="h-5 w-5 text-rose-button" aria-hidden="true" />
                </div>
                <div>
                  <span className="block text-xs font-medium uppercase text-text-muted">Clinic Location</span>
                  <p className="text-sm font-medium text-text-charcoal">{siteConfig.location.addressLine}</p>
                  <p className="text-xs text-text-muted">{siteConfig.location.town}, {siteConfig.location.city}, {siteConfig.location.postcode}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-0.5 shrink-0 rounded-xl border border-border-blush bg-blush-white p-2.5 text-rose-accent">
                  <Clock className="h-5 w-5 text-rose-button" aria-hidden="true" />
                </div>
                <div>
                  <span className="block text-xs font-medium uppercase text-text-muted">Consultation Schedule</span>
                  <p className="text-sm font-medium text-text-charcoal">By Private Appointment Only</p>
                  <p className="text-xs text-text-muted">Dedicated one-to-one consultation slots</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div
            id="consultation-form"
            tabIndex={-1}
            aria-label="Consultation enquiry form"
            className="contact-form scroll-mt-72 border border-border-blush bg-white focus-visible:outline-2 focus-visible:outline-rose-button"
          >
            <ConsultationRequestForm idPrefix="contact-form" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

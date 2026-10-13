import React from 'react';
import { ArrowLeft, ArrowRight, Check, ChevronDown, Clock3, FileText, HeartPulse, ShieldCheck, Sparkles } from 'lucide-react';
import { BookingFocus } from '../data/booking';
import { siteConfig } from '../data/siteConfig';
import { discoveryConsultationFocus, discoveryDetails, wellnessFaqs, wellnessProgrammes } from '../data/wellness';
import { WellnessProgrammeCard } from './WellnessProgrammeCard';

interface WellnessPageProps {
  onOpenBooking: (focus: BookingFocus) => void;
  onNavigateHome: (sectionId: string) => void;
}

const processSteps = [
  {
    number: '01',
    title: 'Understand your skin',
    copy: 'Explore your concerns, current routine, skin quality and personal goals through a detailed, individual assessment.',
  },
  {
    number: '02',
    title: 'Look beyond the surface',
    copy: 'Consider the wider context—including life stage, relevant health history, medication, nutrition, stress and sleep.',
  },
  {
    number: '03',
    title: 'Create your personalised plan',
    copy: 'Bring together practical skincare, wellbeing guidance and clinically suitable aesthetic options in a written roadmap.',
  },
];

export const WellnessPage: React.FC<WellnessPageProps> = ({ onOpenBooking, onNavigateHome }) => (
  <main id="main-content" className="wellness-page relative flex-1 bg-blush-white">
    <section className="wellness-hero overflow-hidden border-b border-border-blush" aria-labelledby="wellness-page-title">
      <div className="wellness-orb wellness-orb--one" aria-hidden="true" />
      <div className="wellness-orb wellness-orb--two" aria-hidden="true" />
      <div className="section-inner relative z-10 mx-auto px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <button type="button" onClick={() => onNavigateHome('hero')} className="mb-10 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-rose-plum hover:text-rose-accent">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to Majestic Aesthetics
        </button>
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-gold-metallic" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase text-rose-accent">Majestic Aesthetics · The Skin &amp; Hormone Collective</p>
          </div>
          <h1 id="wellness-page-title" className="font-serif text-4xl leading-[1.08] text-text-charcoal sm:text-6xl lg:text-7xl">
            Your skin is part of
            <span className="mt-2 block font-script text-[1.15em] font-normal text-rose-plum">a bigger picture.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-text-muted sm:text-xl">
            A considered approach to skin health and aesthetic care that makes space for hormonal changes, lifestyle and whole-body wellbeing—without losing sight of what matters to you.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={() => onOpenBooking(discoveryConsultationFocus)}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-rose-button px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-accent"
            >
              Book Your Skin &amp; Hormone Consultation <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </button>
            <a href="#collective-programmes" className="inline-flex min-h-12 items-center justify-center rounded-md border border-gold-metallic/60 bg-white/80 px-7 py-3 text-sm font-semibold text-rose-plum transition-colors hover:bg-blush-pale">
              Compare the Programmes
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="border-b border-border-blush bg-[#FBF6EF] py-10 sm:py-12" aria-label="Clinical leadership">
      <div className="section-inner mx-auto grid gap-6 px-5 sm:px-8 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:px-12">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-metallic/50 bg-white text-rose-plum">
          <ShieldCheck className="h-6 w-6" aria-hidden="true" />
        </div>
        <div>
          <p className="font-serif text-2xl text-text-charcoal">Clinically led, personally considered.</p>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-text-muted">
            Katie Osborne is a Registered Midwife, Independent Prescriber, Aesthetics Practitioner and Women&apos;s Hormone Health Practitioner (IMH-C). Her approach brings careful consultation, professional scope and individual treatment planning together in a welcoming Southsea clinic.
          </p>
        </div>
        <p className="max-w-xs text-xs leading-relaxed text-text-muted lg:text-right">
          Professional title and scope wording are owner-supplied and remain subject to Katie&apos;s final verification before publication.
        </p>
      </div>
    </section>

    <section className="border-b border-border-blush bg-white py-16 sm:py-24" aria-labelledby="collective-approach-title">
      <div className="section-inner mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase text-rose-accent">A joined-up approach</p>
          <h2 id="collective-approach-title" className="mt-3 font-serif text-3xl text-text-charcoal sm:text-5xl">From understanding to a clear way forward.</h2>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {processSteps.map((step) => (
            <li key={step.number} className="wellness-process-card border-t border-gold-metallic bg-blush-white p-6 sm:p-7">
              <span className="font-serif text-3xl text-gold-deep/65" aria-hidden="true">{step.number}</span>
              <h3 className="mt-5 font-serif text-2xl text-text-charcoal">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section id="discovery-consultation" className="border-b border-border-blush bg-blush-pale/55 py-16 sm:py-24" aria-labelledby="discovery-title">
      <div className="section-inner mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase text-rose-accent">The place to begin</p>
            <h2 id="discovery-title" className="mt-3 font-serif text-3xl leading-tight text-text-charcoal sm:text-5xl">The Skin &amp; Hormone Discovery Consultation</h2>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-gold-metallic/45 py-5">
              <span className="font-serif text-5xl text-rose-plum">£295</span>
              <span className="inline-flex items-center gap-2 text-sm text-text-muted"><Clock3 className="h-4 w-4 text-gold-deep" aria-hidden="true" /> 60 minutes</span>
            </div>
            <p className="mt-6 font-serif text-2xl text-text-charcoal">Understand your skin. Explore the bigger picture.</p>
            <p className="mt-4 text-base leading-relaxed text-text-muted">A comprehensive, personalised consultation exploring your skin, hormonal health and wider wellbeing.</p>
            <div className="mt-6 flex items-start gap-3 border border-gold-metallic/30 bg-white p-4">
              <FileText className="mt-0.5 h-5 w-5 shrink-0 text-rose-button" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-text-muted">Leave with an individualised written wellness and aesthetic treatment plan, with priorities and next steps tailored to you.</p>
            </div>
            <p className="mt-5 text-sm font-semibold text-rose-plum">A complete standalone assessment—there is no commitment to join a longer programme.</p>
            <button
              type="button"
              onClick={() => onOpenBooking(discoveryConsultationFocus)}
              className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-rose-button px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-accent sm:w-auto"
            >
              Book Your Skin &amp; Hormone Consultation <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </button>
          </div>

          <div className="lg:col-span-7">
            <p className="mb-4 text-xs font-semibold uppercase text-rose-plum">What&apos;s included</p>
            <div className="space-y-3">
              {discoveryDetails.map((detail, index) => (
                <details key={detail.title} className="wellness-details group border border-border-blush bg-white" open={index === 0}>
                  <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 sm:px-6">
                    <span>
                      <span className="block font-serif text-xl text-text-charcoal">{detail.title}</span>
                      <span className="mt-1 block text-xs leading-relaxed text-text-muted">{detail.summary}</span>
                    </span>
                    <ChevronDown className="h-5 w-5 shrink-0 text-rose-button transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <div className="border-t border-border-blush px-5 py-4 text-sm leading-relaxed text-text-muted sm:px-6">{detail.content}</div>
                </details>
              ))}
            </div>
            <div className="mt-5 flex items-start gap-3 text-xs leading-relaxed text-text-muted">
              <HeartPulse className="mt-0.5 h-4 w-4 shrink-0 text-rose-button" aria-hidden="true" />
              <p>This is a consultation and planning service, not a promise of diagnosis or a guaranteed treatment outcome. Further assessment, testing or referral may be recommended where appropriate; it is not automatically included.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="collective-programmes" className="border-b border-border-blush bg-white py-16 sm:py-24" aria-labelledby="programmes-title">
      <div className="wellness-programmes-inner mx-auto px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase text-rose-accent">The Skin &amp; Hormone Collective</p>
          <h2 id="programmes-title" className="mt-3 font-serif text-3xl text-text-charcoal sm:text-5xl">Choose the level of support that feels right.</h2>
          <p className="mt-5 text-base leading-relaxed text-text-muted">Each programme builds in more time for review, adjustment and joined-up support. Aesthetic treatments are considered only where clinically suitable and aligned with your goals.</p>
        </div>
        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {wellnessProgrammes.map((programme) => (
            <WellnessProgrammeCard key={programme.id} programme={programme} onEnquire={onOpenBooking} />
          ))}
        </div>
      </div>
    </section>

    <section className="border-b border-border-blush bg-[#FBF6EF] py-16 sm:py-24" aria-labelledby="comparison-title">
      <div className="section-inner mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase text-rose-accent">A simple comparison</p>
          <h2 id="comparison-title" className="mt-3 font-serif text-3xl text-text-charcoal sm:text-5xl">Which approach is right for me?</h2>
        </div>
        <div className="mt-10 overflow-hidden border-y border-gold-metallic/45">
          <div className="wellness-comparison-row bg-white/50 font-semibold text-rose-plum">
            <span>Service</span><span>Time together</span><span>Best for</span>
          </div>
          <div className="wellness-comparison-row">
            <div><strong className="block font-serif text-lg text-text-charcoal">Discovery Consultation</strong><span className="text-sm text-rose-plum">£295</span></div>
            <span>One standalone 60-minute consultation</span>
            <span>A detailed assessment and written recommendations, with no longer programme commitment.</span>
          </div>
          {wellnessProgrammes.map((programme) => (
            <div key={programme.id} className="wellness-comparison-row">
              <div><strong className="block font-serif text-lg text-text-charcoal">{programme.name}</strong><span className="text-sm text-rose-plum">{programme.price}</span></div>
              <span>{programme.consultations}</span>
              <span>{programme.bestFor}</span>
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs leading-relaxed text-text-muted">Programme allowances are aesthetic treatment allowances, not cash rebates. No assumptions are made here about transfer, expiry, package credit or a guaranteed quantity of injectable treatment.</p>
      </div>
    </section>

    <section className="border-b border-border-blush bg-blush-white py-16 sm:py-24" aria-labelledby="audience-title">
      <div className="section-inner mx-auto grid gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:px-12">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase text-rose-accent">Made around the individual</p>
          <h2 id="audience-title" className="mt-3 font-serif text-3xl text-text-charcoal sm:text-5xl">Who is the Collective for?</h2>
          <p className="mt-5 text-base leading-relaxed text-text-muted">For women who want to understand their skin more deeply and make thoughtful decisions about skincare, wellbeing and aesthetics—especially when familiar routines no longer seem to meet their needs.</p>
          <p className="mt-4 text-sm font-semibold text-rose-plum">You do not need a diagnosed hormone imbalance or to be going through menopause to enquire.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
          {[
            'You are noticing changes in your skin in your 30s, 40s or beyond.',
            'Perimenopause, menopause or another life-stage change is shifting how your skin feels.',
            'Your usual skincare or individual treatments no longer feel sufficient.',
            'You want to understand how sleep, stress, nutrition and general health may fit into your skin goals.',
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 border border-border-blush bg-white p-5 text-sm leading-relaxed text-text-muted">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" aria-hidden="true" /> {item}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="border-b border-border-blush bg-white py-16 sm:py-24" aria-labelledby="wellness-faq-title">
      <div className="faq-inner mx-auto px-5 sm:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase text-rose-accent">Questions, answered clearly</p>
          <h2 id="wellness-faq-title" className="mt-3 font-serif text-3xl text-text-charcoal sm:text-5xl">Before you enquire.</h2>
        </div>
        <div className="mt-10 space-y-3">
          {wellnessFaqs.map((faq) => (
            <details key={faq.question} className="wellness-details group border border-border-blush bg-blush-white">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 sm:px-6">
                <span className="font-serif text-lg text-text-charcoal">{faq.question}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-rose-button transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="border-t border-border-blush px-5 py-4 text-sm leading-relaxed text-text-muted sm:px-6">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>

    <section className="wellness-final-cta overflow-hidden bg-rose-plum py-16 text-blush-white sm:py-24" aria-labelledby="wellness-cta-title">
      <div className="section-inner relative z-10 mx-auto px-5 text-center sm:px-8 lg:px-12">
        <Sparkles className="mx-auto h-6 w-6 text-gold-light" aria-hidden="true" />
        <h2 id="wellness-cta-title" className="mx-auto mt-4 max-w-3xl font-serif text-3xl sm:text-5xl">Begin with a conversation shaped around you.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-blush-pale/85 sm:text-base">Request a consultation to discuss your skin and wellbeing goals. The email is prepared for you to review and send; no booking or payment is taken online.</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button type="button" onClick={() => onOpenBooking(discoveryConsultationFocus)} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-7 py-3 text-sm font-semibold text-rose-plum transition-colors hover:bg-blush-pale">
            Book Your Skin &amp; Hormone Consultation <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => onNavigateHome('treatments')} className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/45 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
            Explore Established Treatments
          </button>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-xs leading-relaxed text-blush-pale/70">The Collective supports informed discussion and personalised planning. It does not replace care from your GP or another appropriate medical specialist and does not guarantee diagnosis, treatment or a particular result.</p>
        <p className="mt-4 text-xs text-blush-pale/70">Questions? Email <a className="underline underline-offset-4 hover:text-white" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.</p>
      </div>
    </section>
  </main>
);

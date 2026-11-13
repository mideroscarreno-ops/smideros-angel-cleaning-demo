import { ArrowRight, Phone } from 'lucide-react';
import { FaqAccordion } from '../components/FaqAccordion';
import { ResilientImage } from '../components/ResilientImage';
import { ServiceAreaChecker } from '../components/ServiceAreaChecker';
import { SITE_IMAGES } from '../data/assets';
import {
  BUSINESS_INFO,
  CREDIBILITY_CLAIMS,
  FAQ_ITEMS,
  HOW_IT_WORKS_STEPS,
  SERVICE_CATEGORIES,
  TAILORED_FACTORS,
  VERIFIED_TESTIMONIAL,
} from '../data/content';
import type { NavigateFn } from '../types/navigation';

interface HomePageProps {
  onNavigate: NavigateFn;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      {/* B. Cinematic Hero */}
      <section className="relative bg-[#1C2B43] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={SITE_IMAGES.hero.src}
            alt={SITE_IMAGES.hero.alt}
            width={SITE_IMAGES.hero.width}
            height={SITE_IMAGES.hero.height}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#1C2B43]/92 via-[#1C2B43]/72 to-[#1C2B43]/25"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-2xl space-y-6">
            <p className="text-xs sm:text-sm font-medium tracking-wide text-[#C7A878]">
              {BUSINESS_INFO.name} · Family-Owned · Locally Operated · Oklahoma City
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.75rem] font-medium leading-[1.08] tracking-tight text-white">
              Beautifully Clean Spaces. More Time for What Matters.
            </h1>

            <p className="text-base sm:text-lg text-[#FAF8F3]/90 leading-relaxed max-w-xl">
              Professional residential, commercial, and post-construction cleaning throughout Oklahoma City and surrounding communities.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('estimate')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C7A878] text-[#1C2B43] text-sm font-semibold rounded-sm hover:bg-[#d5b98d] transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Request My Free Estimate</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-sm font-medium rounded-sm hover:bg-white/20 transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Explore Our Cleaning Services</span>
              </button>
            </div>

            <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#FAF8F3]/85">
              <span className="font-serif italic text-base text-[#C7A878]">
                {BUSINESS_INFO.concept}
              </span>
              <span aria-hidden="true" className="hidden sm:inline text-white/30">
                ·
              </span>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-2 hover:text-[#C7A878] transition-colors tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#C7A878]" aria-hidden="true" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* C. Three Ways to Experience a Cleaner Space */}
      <section className="py-20 lg:py-28 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 lg:mb-16 space-y-3">
            <p className="text-xs font-medium tracking-wider text-[#C7A878]">
              Three Ways to Experience a Cleaner Space
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1C2B43] leading-tight">
              Dedicated Care for Homes, Businesses, and New Builds
            </h2>
            <p className="text-base text-[#343B43] leading-relaxed">
              Every property carries its own rhythm and standard of detail. Choose the cleaning service built around your space.
            </p>
          </div>

          <div className="space-y-12 lg:space-y-16">
            {SERVICE_CATEGORIES.map((service, index) => {
              const image = SITE_IMAGES[service.imageKey];
              const isReversed = index % 2 === 1;
              return (
                <article
                  key={service.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch bg-white border border-[#1C2B43]/10 rounded-sm overflow-hidden"
                >
                  <div
                    className={`lg:col-span-6 ${
                      isReversed ? 'lg:order-2' : ''
                    } min-h-[260px] lg:min-h-[380px]`}
                  >
                    <ResilientImage
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      fallbackTitle={service.title}
                      className="lg:h-full"
                      aspectClassName="h-full aspect-[4/3] lg:aspect-auto"
                    />
                  </div>

                  <div
                    className={`lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between ${
                      isReversed ? 'lg:order-1' : ''
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-xs font-medium text-[#343B43]/70">
                        <span className="tabular-nums text-[#C7A878] font-semibold">
                          {service.number}
                        </span>
                        <span aria-hidden="true">/</span>
                        <span>{service.title}</span>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-[#1C2B43] leading-snug">
                        {service.panelHeadline}
                      </h3>

                      <p className="text-sm sm:text-base text-[#343B43] leading-relaxed">
                        {service.shortDescription}
                      </p>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-3 border-t border-[#1C2B43]/10 text-sm text-[#1C2B43]">
                        {service.highlights.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span
                              aria-hidden="true"
                              className="w-1.5 h-1.5 rounded-full bg-[#C7A878] shrink-0"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-8">
                      <button
                        type="button"
                        onClick={() => onNavigate(service.route)}
                        className="inline-flex items-center gap-2 px-5 py-3 bg-[#1C2B43] text-white text-sm font-medium rounded-sm hover:bg-[#1C2B43]/90 transition-colors cursor-pointer"
                      >
                        <span>{service.homeCta}</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* D & E. A Family-Owned Difference + Cleaning Tailored to Your Needs */}
      <section className="py-20 lg:py-28 bg-white border-y border-[#1C2B43]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div className="space-y-5">
                <p className="text-xs font-medium tracking-wider text-[#C7A878]">
                  A Family-Owned Difference
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1C2B43] leading-tight">
                  Personal Care. Professional Results.
                </h2>
                <p className="text-base text-[#343B43] leading-relaxed">
                  As a family-owned and locally managed company in Oklahoma City, Angel Cleaning LLC approaches every home and workplace with personal accountability. Our uniformed cleaning professionals work from customizable plans shaped around your household or business—not rigid one-size checklists.
                </p>
                <p className="text-sm text-[#343B43]/80 leading-relaxed">
                  Bonded, insured, and committed to your satisfaction, our team brings quiet reliability to busy Oklahoma City households and workplaces—true to our longstanding promise as {BUSINESS_INFO.heritageTagline}.
                </p>
              </div>

              <div className="rounded-sm overflow-hidden border border-[#1C2B43]/10">
                <ResilientImage
                  src={SITE_IMAGES.calmLiving.src}
                  alt={SITE_IMAGES.calmLiving.alt}
                  width={SITE_IMAGES.calmLiving.width}
                  height={SITE_IMAGES.calmLiving.height}
                  fallbackTitle="Serene Residential Interior"
                  aspectClassName="aspect-[3/4]"
                />
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between bg-[#FAF8F3] border border-[#1C2B43]/10 rounded-sm p-6 sm:p-10 lg:p-12">
              <div className="space-y-4 pb-8 border-b border-[#1C2B43]/10">
                <p className="text-xs font-medium tracking-wider text-[#C7A878]">
                  Cleaning Tailored to Your Needs
                </p>
                <h3 className="font-serif text-3xl sm:text-4xl font-medium text-[#1C2B43] leading-tight">
                  No Two Spaces Are the Same. Neither Are Their Cleaning Needs.
                </h3>
                <p className="text-sm sm:text-base text-[#343B43] leading-relaxed">
                  When you speak with Angel Cleaning LLC or request a free estimate, we start by understanding what matters most in your space.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 py-8">
                {TAILORED_FACTORS.map((factor) => (
                  <div key={factor.number} className="space-y-1.5">
                    <div className="text-xs font-medium tabular-nums text-[#C7A878]">
                      {factor.number}
                    </div>
                    <h4 className="font-serif text-xl font-medium text-[#1C2B43]">
                      {factor.title}
                    </h4>
                    <p className="text-sm text-[#343B43]/85 leading-relaxed">{factor.detail}</p>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-[#1C2B43]/10 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('estimate')}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#1C2B43] text-white text-sm font-medium rounded-sm hover:bg-[#1C2B43]/90 transition-colors cursor-pointer"
                >
                  <span>Discuss Your Cleaning Plan</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('approach')}
                  className="text-sm font-medium text-[#1C2B43] underline underline-offset-4 hover:text-[#C7A878] transition-colors cursor-pointer"
                >
                  Read About Our Approach
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* F. Residential Cleaning Experience */}
      <section className="py-20 lg:py-24 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-5">
              <p className="text-xs font-medium tracking-wider text-[#C7A878]">
                Residential Cleaning Experience
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1C2B43] leading-tight">
                Thoughtful Upkeep for Every Room You Live In
              </h2>
              <p className="text-base text-[#343B43] leading-relaxed">
                From busy weekday kitchens to quiet weekend bedrooms, Angel Cleaning LLC cares for the rooms your family relies on every day—leaving surfaces spotless, fresh, and ready to enjoy.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { title: 'Beautiful Kitchens', note: 'Counters, sinks, exterior appliances, and dining spaces.' },
                  { title: 'Fresh Bathrooms', note: 'Vanities, fixtures, mirrors, tubs, showers, and floors.' },
                  { title: 'Comfortable Bedrooms', note: 'Detailed dusting, floors, and calm, orderly finishes.' },
                  { title: 'Optional Add-Ons', note: 'Customizable extra tasks tailored to your home.' },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-4 bg-white border border-[#1C2B43]/10 rounded-sm"
                  >
                    <h3 className="font-serif text-lg font-medium text-[#1C2B43]">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-[#343B43]/80 mt-1">{item.note}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-[#343B43]/80 leading-relaxed pt-1">
                Pricing is personalized based on home size, condition, and whether you select recurring scheduled visits (weekly, biweekly, monthly) or a first-time / one-time cleaning. Request a free estimate to confirm your tailored rate.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('estimate', { preselectedService: 'residential' })}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#1C2B43] text-white text-sm font-medium rounded-sm hover:bg-[#1C2B43]/90 transition-colors cursor-pointer"
                >
                  <span>Request a Residential Estimate</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-sm overflow-hidden border border-[#1C2B43]/10">
                <ResilientImage
                  src={SITE_IMAGES.residential.src}
                  alt={SITE_IMAGES.residential.alt}
                  width={SITE_IMAGES.residential.width}
                  height={SITE_IMAGES.residential.height}
                  fallbackTitle="Residential Kitchen & Dining"
                  aspectClassName="aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* G. Commercial Cleaning Experience */}
      <section className="py-20 lg:py-24 bg-[#E7EFF3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-5">
              <p className="text-xs font-medium tracking-wider text-[#1C2B43]/75">
                Commercial Cleaning Experience
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1C2B43] leading-tight">
                Clean Spaces Help Businesses Shine.
              </h2>
              <p className="text-base text-[#343B43] leading-relaxed">
                A spotless lobby, showroom, or office sets the tone before a single word is spoken. Angel Cleaning LLC partners with Oklahoma City businesses to build customized cleaning packages aligned with your hours, foot traffic, and facility requirements.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-sm text-[#1C2B43]">
                {[
                  'Offices',
                  'Showrooms',
                  'Retail Stores',
                  'Banks',
                  'Churches',
                  'Dealerships',
                ].map((space) => (
                  <div
                    key={space}
                    className="px-3.5 py-2.5 bg-white/85 border border-[#1C2B43]/10 rounded-sm font-medium"
                  >
                    {space}
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-[#343B43]/85 leading-relaxed">
                Commercial pricing varies by facility type, size, and frequency and is prepared as a tailored plan following a conversation about your business.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('estimate', { preselectedService: 'commercial' })}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#1C2B43] text-white text-sm font-medium rounded-sm hover:bg-[#1C2B43]/90 transition-colors cursor-pointer"
                >
                  <span>Request a Commercial Cleaning Estimate</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-1">
              <div className="rounded-sm overflow-hidden border border-[#1C2B43]/10">
                <ResilientImage
                  src={SITE_IMAGES.commercial.src}
                  alt={SITE_IMAGES.commercial.alt}
                  width={SITE_IMAGES.commercial.width}
                  height={SITE_IMAGES.commercial.height}
                  fallbackTitle="Commercial Office & Lobby"
                  aspectClassName="aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H. Post-Construction Cleaning Experience */}
      <section className="py-20 lg:py-24 bg-[#1C2B43] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-5">
              <p className="text-xs font-medium tracking-wider text-[#C7A878]">
                Post-Construction Cleaning Experience
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-white leading-tight">
                The Final Detail Before the Big Reveal.
              </h2>
              <p className="text-base text-[#FAF8F3]/85 leading-relaxed">
                Construction and remodeling leave behind fine dust and lingering residue that hide the craftsmanship of a finished project. Angel Cleaning LLC helps transition renovated interiors, newly completed homes, and finished commercial spaces from active job sites into welcoming, move-in-ready rooms.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-[#FAF8F3]/90">
                {[
                  'Renovated residential interiors',
                  'Single-room remodels',
                  'Newly completed homes',
                  'Finished commercial spaces',
                  'Restaurant remodels',
                  'Detailed post-work cleanup',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-[#C7A878] shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={() =>
                    onNavigate('estimate', { preselectedService: 'post-construction' })
                  }
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#C7A878] text-[#1C2B43] text-sm font-semibold rounded-sm hover:bg-[#d5b98d] transition-colors cursor-pointer"
                >
                  <span>Discuss Your Cleanup Project</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-sm overflow-hidden border border-white/15">
                <ResilientImage
                  src={SITE_IMAGES.postConstruction.src}
                  alt={SITE_IMAGES.postConstruction.alt}
                  width={SITE_IMAGES.postConstruction.width}
                  height={SITE_IMAGES.postConstruction.height}
                  fallbackTitle="Post-Construction Reveal"
                  aspectClassName="aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* I & J. Why Choose Angel Cleaning + Authentic Testimonial */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <div>
            <div className="max-w-2xl mb-12 space-y-3">
              <p className="text-xs font-medium tracking-wider text-[#C7A878]">
                Why Choose Angel Cleaning LLC
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1C2B43]">
                Built on Local Trust and Consistent Standards
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#1C2B43]/10">
              {CREDIBILITY_CLAIMS.map((claim) => (
                <div
                  key={claim.number}
                  className="p-6 sm:p-8 border-r border-b border-[#1C2B43]/10 bg-[#FAF8F3]/40 space-y-2.5"
                >
                  <div className="text-xs font-medium tabular-nums text-[#C7A878]">
                    {claim.number}
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-[#1C2B43]">{claim.title}</h3>
                  <p className="text-sm text-[#343B43]/85 leading-relaxed">{claim.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Authentic Testimonial */}
          <div className="bg-[#FAF8F3] border border-[#1C2B43]/12 rounded-sm p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <p className="text-xs font-medium tracking-wider text-[#C7A878]">
                Client Experience
              </p>
              <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-[2.15rem] text-[#1C2B43] leading-snug">
                “{VERIFIED_TESTIMONIAL.quote}”
              </blockquote>
              <div className="pt-2 space-y-1">
                <p className="text-sm font-semibold text-[#1C2B43]">
                  {VERIFIED_TESTIMONIAL.author}
                </p>
                <p className="text-xs text-[#343B43]/70">{VERIFIED_TESTIMONIAL.context}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* K. How It Works */}
      <section className="py-20 lg:py-24 bg-[#FAF8F3] border-t border-[#1C2B43]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 space-y-3">
            <p className="text-xs font-medium tracking-wider text-[#C7A878]">How It Works</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1C2B43]">
              A Straightforward Path to a Tailored Cleaning Plan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOW_IT_WORKS_STEPS.map((item) => (
              <div
                key={item.step}
                className="bg-white border border-[#1C2B43]/10 rounded-sm p-6 sm:p-8 space-y-3"
              >
                <div className="font-serif text-3xl font-medium tabular-nums text-[#C7A878]">
                  {item.step}
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#1C2B43]">{item.title}</h3>
                <p className="text-sm text-[#343B43]/85 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* L. Service Areas */}
      <section className="py-20 lg:py-24 bg-[#E7EFF3] border-y border-[#1C2B43]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-xs font-medium tracking-wider text-[#1C2B43]/75">Service Areas</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1C2B43] leading-tight">
                Proudly Serving Oklahoma City and Surrounding Communities.
              </h2>
              <p className="text-sm sm:text-base text-[#343B43] leading-relaxed">
                Located at {BUSINESS_INFO.fullAddress}, Angel Cleaning LLC serves homes and businesses throughout Oklahoma City and nearby communities. Enter your city or ZIP code to start confirming coverage for your address.
              </p>
            </div>

            <div className="lg:col-span-7">
              <ServiceAreaChecker onNavigate={onNavigate} variant="mist" />
            </div>
          </div>
        </div>
      </section>

      {/* M. Frequently Asked Questions */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 space-y-3">
            <p className="text-xs font-medium tracking-wider text-[#C7A878]">
              Frequently Asked Questions
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1C2B43]">
              Answers Before You Request an Estimate
            </h2>
          </div>

          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* N. Final Conversion Section */}
      <section className="py-20 lg:py-28 bg-[#FAF8F3] border-t border-[#1C2B43]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-xs font-medium tracking-wider text-[#C7A878]">
            {BUSINESS_INFO.concept}
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium text-[#1C2B43] leading-tight">
            Let Us Take Cleaning Off Your List.
          </h2>
          <p className="text-base sm:text-lg text-[#343B43] leading-relaxed max-w-2xl mx-auto">
            Tell us about your home, business, or construction project and explore a cleaning plan that fits your needs.
          </p>
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('estimate')}
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#1C2B43] text-white text-sm font-medium rounded-sm hover:bg-[#1C2B43]/90 transition-colors cursor-pointer"
            >
              <span>Request a Free Estimate</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center gap-2 px-7 py-4 bg-white border border-[#1C2B43]/20 text-[#1C2B43] text-sm font-medium rounded-sm hover:border-[#1C2B43] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C7A878]" aria-hidden="true" />
              <span>Call Our Team</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

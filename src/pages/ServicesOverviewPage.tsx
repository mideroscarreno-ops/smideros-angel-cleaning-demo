import { ArrowRight, Phone } from 'lucide-react';
import { ResilientImage } from '../components/ResilientImage';
import { SITE_IMAGES } from '../data/assets';
import { BUSINESS_INFO, SERVICE_CATEGORIES } from '../data/content';
import type { NavigateFn } from '../types/navigation';

interface ServicesOverviewPageProps {
  onNavigate: NavigateFn;
}

export function ServicesOverviewPage({ onNavigate }: ServicesOverviewPageProps) {
  return (
    <div>
      {/* Section 1: Introduction */}
      <section className="py-16 sm:py-24 bg-[#1C2B43] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-medium tracking-wider text-[#C7A878]">
              All Cleaning Services · Angel Cleaning LLC
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight">
              The Right Clean for Every Space.
            </h1>
            <p className="text-base sm:text-lg text-[#FAF8F3]/85 leading-relaxed">
              Whether you need dependable weekly upkeep at home, a welcoming commercial lobby for clients, or detailed cleanup after a renovation, Angel Cleaning LLC organizes its work into three distinct, customizable service lines across Oklahoma City and surrounding communities.
            </p>
          </div>
        </div>
      </section>

      {/* Sections 2, 3, 4: Residential, Commercial, Post-Construction Directory */}
      <section className="py-20 lg:py-24 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICE_CATEGORIES.map((service, idx) => {
            const img = SITE_IMAGES[service.imageKey];
            const isOdd = idx % 2 === 1;
            const extraDetail =
              service.id === 'residential'
                ? 'Choose from weekly, biweekly, monthly, or one-time visits, with optional cleaning add-ons coordinated around your household priorities.'
                : service.id === 'commercial'
                ? 'Every commercial cleaning plan is individually tailored for offices, showrooms, retail stores, banks, churches, and dealerships.'
                : 'Built for home renovations, single-room remodels, new home construction, commercial construction, and restaurant remodels.';

            return (
              <article
                key={service.id}
                className="bg-white border border-[#1C2B43]/12 rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch"
              >
                <div className={`lg:col-span-5 ${isOdd ? 'lg:order-2' : ''}`}>
                  <ResilientImage
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    fallbackTitle={service.title}
                    className="lg:h-full"
                    aspectClassName="h-full aspect-[4/3] lg:aspect-auto"
                  />
                </div>

                <div
                  className={`lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6 ${
                    isOdd ? 'lg:order-1' : ''
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-medium text-[#C7A878]">
                      <span className="tabular-nums">{service.number}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#343B43]/75">{service.title}</span>
                    </div>

                    <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1C2B43]">
                      {service.panelHeadline}
                    </h2>

                    <p className="text-base text-[#343B43] leading-relaxed">
                      {service.shortDescription}
                    </p>
                    <p className="text-sm text-[#343B43]/80 leading-relaxed">{extraDetail}</p>

                    <div className="pt-3 border-t border-[#1C2B43]/10">
                      <h3 className="text-xs font-semibold tracking-wider text-[#1C2B43] mb-3">
                        Key Offerings
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#343B43]">
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
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                      type="button"
                      onClick={() =>
                        onNavigate('estimate', { preselectedService: service.id })
                      }
                      className="inline-flex items-center gap-2 px-5 py-3 bg-[#1C2B43] text-white text-sm font-medium rounded-sm hover:bg-[#1C2B43]/90 transition-colors cursor-pointer"
                    >
                      <span>Request {service.title} Quote</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onNavigate(service.route)}
                      className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-[#1C2B43] border border-[#1C2B43]/20 rounded-sm hover:bg-[#FAF8F3] transition-colors cursor-pointer"
                    >
                      <span>View Service Details</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Section 5: Help Choosing a Service */}
      <section className="py-20 bg-white border-y border-[#1C2B43]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 space-y-3">
            <p className="text-xs font-medium tracking-wider text-[#C7A878]">
              Help Choosing a Service
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1C2B43]">
              Which Option Fits Your Situation?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 sm:p-8 bg-[#FAF8F3] border border-[#1C2B43]/10 rounded-sm space-y-3">
              <h3 className="font-serif text-2xl font-medium text-[#1C2B43]">
                Ongoing Home Care or One-Time Refresh
              </h3>
              <p className="text-sm text-[#343B43] leading-relaxed">
                Choose <strong>Residential Cleaning</strong> if you live in the home and want recurring weekly, biweekly, or monthly support—or a thorough one-time visit for lived-in rooms.
              </p>
            </div>

            <div className="p-6 sm:p-8 bg-[#FAF8F3] border border-[#1C2B43]/10 rounded-sm space-y-3">
              <h3 className="font-serif text-2xl font-medium text-[#1C2B43]">
                Workplaces &amp; Customer-Facing Spaces
              </h3>
              <p className="text-sm text-[#343B43] leading-relaxed">
                Choose <strong>Commercial Cleaning</strong> if you manage an office, showroom, retail store, bank, church, or dealership needing consistent presentation and tailored scheduling.
              </p>
            </div>

            <div className="p-6 sm:p-8 bg-[#FAF8F3] border border-[#1C2B43]/10 rounded-sm space-y-3">
              <h3 className="font-serif text-2xl font-medium text-[#1C2B43]">
                After Contractors Wrap Up
              </h3>
              <p className="text-sm text-[#343B43] leading-relaxed">
                Choose <strong>Post-Construction Cleaning</strong> if contractors recently completed a remodel, renovation, restaurant update, or new home or commercial build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="py-20 bg-[#E7EFF3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#1C2B43]">
            Not Sure Which Service You Need? Let’s Talk.
          </h2>
          <p className="text-base text-[#343B43] leading-relaxed max-w-xl mx-auto">
            Select “Not Sure Yet” in our quick estimate guide or call our Oklahoma City office to talk through your space directly.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('estimate', { preselectedService: 'not-sure' })}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1C2B43] text-white text-sm font-medium rounded-sm hover:bg-[#1C2B43]/90 transition-colors cursor-pointer"
            >
              <span>Start Estimate Guide</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-[#1C2B43]/20 text-[#1C2B43] text-sm font-medium rounded-sm hover:border-[#1C2B43] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C7A878]" aria-hidden="true" />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

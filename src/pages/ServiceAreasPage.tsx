import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { ServiceAreaChecker } from '../components/ServiceAreaChecker';
import { BUSINESS_INFO } from '../data/content';
import type { NavigateFn } from '../types/navigation';

interface ServiceAreasPageProps {
  onNavigate: NavigateFn;
}

export function ServiceAreasPage({ onNavigate }: ServiceAreasPageProps) {
  return (
    <div>
      <section className="py-16 sm:py-24 bg-[#1C2B43] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-medium tracking-wider text-[#C7A878]">
              Service Areas · Oklahoma City &amp; Surrounding Communities
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight">
              Proudly Serving Oklahoma City and Surrounding Communities.
            </h1>
            <p className="text-base sm:text-lg text-[#FAF8F3]/85 leading-relaxed">
              Angel Cleaning LLC is locally managed from South Oklahoma City and provides residential, commercial, and post-construction cleaning throughout Oklahoma City and nearby communities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#1C2B43]/12 rounded-sm p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2.5 text-xs font-medium tracking-wider text-[#C7A878]">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span>Primary Service Hub</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C2B43]">
                Oklahoma City, Oklahoma
              </h2>
              <p className="text-sm text-[#343B43] leading-relaxed">
                Our office is located at {BUSINESS_INFO.fullAddress}. From here, our uniformed teams coordinate cleaning routes across Oklahoma City and surrounding areas.
              </p>
              <div className="pt-3 border-t border-[#1C2B43]/10 space-y-2 text-sm text-[#1C2B43]">
                <p className="font-medium">How Coverage Is Confirmed</p>
                <p className="text-[#343B43]/85 leading-relaxed">
                  Rather than publishing an unverified boundary list, Angel Cleaning LLC confirms local availability individually for each home, commercial facility, or construction project based on address and schedule.
                </p>
              </div>
            </div>

            <div className="bg-[#E7EFF3] border border-[#1C2B43]/10 rounded-sm p-6 sm:p-8 space-y-3">
              <h3 className="font-serif text-2xl font-medium text-[#1C2B43]">
                Want an immediate answer?
              </h3>
              <p className="text-sm text-[#343B43] leading-relaxed">
                Call our team directly to check route availability for your neighborhood or job site.
              </p>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1C2B43] hover:text-[#C7A878] transition-colors pt-1 tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#C7A878]" aria-hidden="true" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <h2 className="font-serif text-3xl font-medium text-[#1C2B43]">
                Check Availability for Your City or ZIP Code
              </h2>
              <p className="text-sm text-[#343B43]/85">
                Enter your location below to prepare a local availability check or carry your location straight into an estimate request.
              </p>
            </div>

            <ServiceAreaChecker onNavigate={onNavigate} variant="light" />

            <div className="pt-4">
              <button
                type="button"
                onClick={() => onNavigate('estimate')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1C2B43] text-white text-sm font-medium rounded-sm hover:bg-[#1C2B43]/90 transition-colors cursor-pointer"
              >
                <span>Request a Free Estimate</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

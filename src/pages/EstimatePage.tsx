import { Mail, MapPin, Phone } from 'lucide-react';
import { EstimateWizard } from '../components/EstimateWizard';
import { BUSINESS_INFO } from '../data/content';
import type { ServiceSelection } from '../types/navigation';

interface EstimatePageProps {
  initialService?: ServiceSelection;
  initialLocation?: string;
}

export function EstimatePage({ initialService, initialLocation }: EstimatePageProps) {
  return (
    <div>
      <section className="py-14 sm:py-20 bg-[#1C2B43] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-medium tracking-wider text-[#C7A878]">
              Request a Free Estimate · {BUSINESS_INFO.name}
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-medium leading-tight">
              Tell Us About Your Space in Four Simple Steps.
            </h1>
            <p className="text-base text-[#FAF8F3]/85 leading-relaxed">
              Select your cleaning category, share only the details relevant to your property, and review your request before coordinating directly with our Oklahoma City team.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8">
            <EstimateWizard
              initialService={initialService}
              initialLocation={initialLocation}
            />
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-[#1C2B43]/12 rounded-sm p-6 sm:p-8 space-y-5">
              <h2 className="font-serif text-2xl font-medium text-[#1C2B43]">
                Prefer to Reach Us Directly?
              </h2>
              <p className="text-sm text-[#343B43]/85 leading-relaxed">
                Call or email Angel Cleaning LLC anytime to discuss your home, business, or post-construction cleanup in Oklahoma City and surrounding areas.
              </p>

              <div className="space-y-3 pt-2 border-t border-[#1C2B43]/10 text-sm">
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="flex items-center gap-3 text-[#1C2B43] font-medium hover:text-[#C7A878] transition-colors tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#C7A878] shrink-0" aria-hidden="true" />
                  <span>{BUSINESS_INFO.phoneDisplay}</span>
                </a>

                <a
                  href={BUSINESS_INFO.emailHref}
                  className="flex items-center gap-3 text-[#1C2B43] font-medium hover:text-[#C7A878] transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-[#C7A878] shrink-0" aria-hidden="true" />
                  <span>{BUSINESS_INFO.email}</span>
                </a>

                <div className="flex items-start gap-3 text-[#343B43]">
                  <MapPin className="w-4 h-4 text-[#C7A878] shrink-0 mt-0.5" aria-hidden="true" />
                  <address className="not-italic leading-relaxed">
                    {BUSINESS_INFO.addressLine1}
                    <br />
                    {BUSINESS_INFO.addressLine2}
                    <br />
                    {BUSINESS_INFO.cityState}
                  </address>
                </div>
              </div>
            </div>

            <div className="bg-[#E7EFF3] border border-[#1C2B43]/10 rounded-sm p-6 sm:p-8 space-y-3">
              <h3 className="font-serif text-xl font-medium text-[#1C2B43]">
                What to Expect Next
              </h3>
              <ul className="space-y-2.5 text-sm text-[#343B43] leading-relaxed">
                <li>1. Exact square footage is never required to request an estimate.</li>
                <li>2. All optional fields—including how you heard about us—never block submission.</li>
                <li>3. Final pricing, availability, and cleaning tasks are always confirmed directly with Angel Cleaning LLC.</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

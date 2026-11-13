import { Mail, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import type { NavigateFn, PageRoute } from '../types/navigation';

interface FooterProps {
  onNavigate: NavigateFn;
}

export function Footer({ onNavigate }: FooterProps) {
  const linkClass =
    'text-sm text-[#FAF8F3]/80 hover:text-[#C7A878] transition-colors text-left cursor-pointer py-1';

  const navClick = (route: PageRoute) => {
    onNavigate(route);
  };

  return (
    <footer className="bg-[#1C2B43] text-[#FAF8F3] border-t border-[#C7A878]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Brand summary */}
          <div className="lg:col-span-4 space-y-4">
            <button
              type="button"
              onClick={() => navClick('home')}
              className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-white cursor-pointer text-left"
            >
              {BUSINESS_INFO.name}
            </button>
            <p className="text-base font-serif italic text-[#C7A878]">
              {BUSINESS_INFO.concept}
            </p>
            <p className="text-sm text-[#FAF8F3]/75 leading-relaxed max-w-sm">
              Family-owned, locally operated cleaning services for homes, businesses, and post-construction spaces throughout Oklahoma City and surrounding areas.
            </p>
            <p className="text-xs text-[#FAF8F3]/60 pt-1">
              {BUSINESS_INFO.heritageTagline}
            </p>
          </div>

          {/* Services links */}
          <div className="lg:col-span-3 space-y-3">
            <h2 className="font-serif text-lg font-medium text-white">Cleaning Services</h2>
            <ul className="space-y-1.5 flex flex-col items-start">
              <li>
                <button type="button" onClick={() => navClick('services')} className={linkClass}>
                  All Cleaning Services
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navClick('residential')} className={linkClass}>
                  Residential Cleaning
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navClick('commercial')} className={linkClass}>
                  Commercial Cleaning
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navClick('post-construction')}
                  className={linkClass}
                >
                  Post-Construction Cleaning
                </button>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div className="lg:col-span-2 space-y-3">
            <h2 className="font-serif text-lg font-medium text-white">Company</h2>
            <ul className="space-y-1.5 flex flex-col items-start">
              <li>
                <button type="button" onClick={() => navClick('about')} className={linkClass}>
                  About Angel Cleaning
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navClick('approach')} className={linkClass}>
                  Our Approach
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navClick('service-areas')}
                  className={linkClass}
                >
                  Service Areas
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navClick('faqs')} className={linkClass}>
                  FAQs
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navClick('estimate')} className={linkClass}>
                  Request a Free Estimate
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navClick('contact')} className={linkClass}>
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-serif text-lg font-medium text-white">Oklahoma City Office</h2>
            <div className="space-y-3 text-sm text-[#FAF8F3]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C7A878] shrink-0 mt-0.5" aria-hidden="true" />
                <address className="not-italic leading-relaxed">
                  {BUSINESS_INFO.addressLine1}
                  <br />
                  {BUSINESS_INFO.addressLine2}
                  <br />
                  {BUSINESS_INFO.cityState}
                </address>
              </div>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="flex items-center gap-2.5 hover:text-[#C7A878] transition-colors tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#C7A878] shrink-0" aria-hidden="true" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <a
                href={BUSINESS_INFO.emailHref}
                className="flex items-center gap-2.5 hover:text-[#C7A878] transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-[#C7A878] shrink-0" aria-hidden="true" />
                <span>{BUSINESS_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar with discreet concept disclosure */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#FAF8F3]/65">
          <p>{BUSINESS_INFO.name} · Oklahoma City, Oklahoma</p>
          <p>{BUSINESS_INFO.agencyCredit}</p>
        </div>
      </div>
    </footer>
  );
}

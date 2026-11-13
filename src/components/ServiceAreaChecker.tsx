import { useState, type FormEvent } from 'react';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import type { NavigateFn } from '../types/navigation';

interface ServiceAreaCheckerProps {
  onNavigate: NavigateFn;
  variant?: 'light' | 'mist';
}

export function ServiceAreaChecker({
  onNavigate,
  variant = 'light',
}: ServiceAreaCheckerProps) {
  const [query, setQuery] = useState('');
  const [submittedLocation, setSubmittedLocation] = useState<string | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cleaned = query.trim();
    if (!cleaned) {
      setError('Please enter your city or ZIP code to check local availability.');
      return;
    }
    setError('');
    setSubmittedLocation(cleaned);
  };

  return (
    <div
      className={`rounded-sm border border-[#1C2B43]/12 p-6 sm:p-8 ${
        variant === 'mist' ? 'bg-white' : 'bg-[#FAF8F3]'
      }`}
    >
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div>
          <label
            htmlFor="service-area-input"
            className="block text-sm font-medium text-[#1C2B43] mb-2"
          >
            Enter your Oklahoma City neighborhood, surrounding city, or ZIP code
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <MapPin
                className="w-4 h-4 text-[#343B43]/60 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="service-area-input"
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  if (error) setError('');
                }}
                placeholder="e.g., Oklahoma City or 73159"
                className="w-full h-12 pl-10 pr-4 bg-white border border-[#1C2B43]/20 rounded-sm text-sm text-[#1C2B43] placeholder:text-[#343B43]/50 focus:border-[#1C2B43]"
              />
            </div>
            <button
              type="submit"
              className="h-12 px-6 bg-[#1C2B43] text-white text-sm font-medium rounded-sm hover:bg-[#1C2B43]/90 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Confirm Local Availability
            </button>
          </div>
          {error && (
            <p role="alert" className="text-xs text-red-700 mt-2">
              {error}
            </p>
          )}
        </div>
      </form>

      {submittedLocation ? (
        <div
          aria-live="polite"
          className="mt-5 pt-5 border-t border-[#1C2B43]/10 space-y-3"
        >
          <p className="text-sm text-[#1C2B43] leading-relaxed">
            Thank you. Coverage for <strong className="font-semibold">{submittedLocation}</strong> is confirmed individually by Angel Cleaning LLC based on your property location and desired schedule.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <button
              type="button"
              onClick={() =>
                onNavigate('estimate', { prefilledLocation: submittedLocation })
              }
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1C2B43] text-white text-xs sm:text-sm font-medium rounded-sm hover:bg-[#1C2B43]/90 transition-colors cursor-pointer"
            >
              <span>Include {submittedLocation} in an Estimate Request</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#1C2B43] hover:text-[#C7A878] transition-colors"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      ) : (
        <p className="mt-4 text-xs text-[#343B43]/75 leading-relaxed">
          Angel Cleaning LLC serves Oklahoma City and surrounding areas. Because route availability varies outside central Oklahoma City, our team confirms local coverage individually with each customer.
        </p>
      )}
    </div>
  );
}

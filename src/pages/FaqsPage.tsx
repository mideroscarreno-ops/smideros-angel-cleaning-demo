import { useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { FaqAccordion } from '../components/FaqAccordion';
import { BUSINESS_INFO, FAQ_ITEMS, type FaqItem } from '../data/content';
import type { NavigateFn } from '../types/navigation';

interface FaqsPageProps {
  onNavigate: NavigateFn;
}

type CategoryFilter = 'All' | FaqItem['category'];

const CATEGORIES: CategoryFilter[] = [
  'All',
  'General',
  'Residential',
  'Commercial',
  'Post-Construction',
  'Estimates',
];

export function FaqsPage({ onNavigate }: FaqsPageProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  const filteredItems =
    activeCategory === 'All'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div>
      <section className="py-16 sm:py-24 bg-[#FAF8F3] border-b border-[#1C2B43]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <p className="text-xs font-medium tracking-wider text-[#C7A878]">
            Frequently Asked Questions
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-[#1C2B43] leading-tight">
            Clear Answers About Our Cleaning Services.
          </h1>
          <p className="text-base sm:text-lg text-[#343B43] leading-relaxed">
            Browse common questions about residential schedules, commercial cleaning plans, post-construction cleanups, estimates, and Oklahoma City service availability.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Interactive Category Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter questions by category"
            className="flex flex-wrap items-center gap-2"
          >
            {CATEGORIES.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-sm border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#1C2B43] text-white border-[#1C2B43]'
                      : 'bg-[#FAF8F3] text-[#343B43] border-[#1C2B43]/15 hover:border-[#1C2B43]/40'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <FaqAccordion items={filteredItems} />

          <div className="bg-[#FAF8F3] border border-[#1C2B43]/12 rounded-sm p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C2B43]">
                Have a specific question about your property?
              </h2>
              <p className="text-sm text-[#343B43]/85">
                Confirm details directly with Angel Cleaning LLC by requesting an estimate or calling our office.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onNavigate('estimate')}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#1C2B43] text-white text-sm font-medium rounded-sm hover:bg-[#1C2B43]/90 transition-colors cursor-pointer"
              >
                <span>Request Estimate</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-2 px-4 py-3 bg-white border border-[#1C2B43]/20 text-[#1C2B43] text-sm font-medium rounded-sm hover:border-[#1C2B43] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C7A878]" aria-hidden="true" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

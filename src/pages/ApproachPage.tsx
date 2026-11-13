import { ArrowRight } from 'lucide-react';
import { ResilientImage } from '../components/ResilientImage';
import { SITE_IMAGES } from '../data/assets';
import { HOW_IT_WORKS_STEPS, TAILORED_FACTORS } from '../data/content';
import type { NavigateFn } from '../types/navigation';

interface ApproachPageProps {
  onNavigate: NavigateFn;
}

export function ApproachPage({ onNavigate }: ApproachPageProps) {
  return (
    <div>
      <section className="py-16 sm:py-24 bg-[#1C2B43] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <p className="text-xs font-medium tracking-wider text-[#C7A878]">Our Approach</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight">
              A Cleaner Space. A Lighter Day.
            </h1>
            <p className="text-base sm:text-lg text-[#FAF8F3]/85 leading-relaxed">
              Angel Cleaning LLC believes great cleaning feels effortless to live and work inside. Rather than forcing your household or business into a rigid template, our team listens first and coordinates a plan around your actual priorities.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-sm overflow-hidden border border-white/15">
              <ResilientImage
                src={SITE_IMAGES.hero.src}
                alt={SITE_IMAGES.hero.alt}
                width={SITE_IMAGES.hero.width}
                height={SITE_IMAGES.hero.height}
                fallbackTitle="Our Approach"
                aspectClassName="aspect-[16/9]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Personalization factors */}
      <section className="py-20 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 space-y-3">
            <p className="text-xs font-medium tracking-wider text-[#C7A878]">
              Customizable Planning
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1C2B43]">
              Six Details We Review Together
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TAILORED_FACTORS.map((item) => (
              <div
                key={item.number}
                className="p-6 sm:p-8 bg-white border border-[#1C2B43]/10 rounded-sm space-y-2"
              >
                <div className="text-xs font-medium tabular-nums text-[#C7A878]">{item.number}</div>
                <h3 className="font-serif text-2xl font-medium text-[#1C2B43]">{item.title}</h3>
                <p className="text-sm text-[#343B43]/85 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coordination Steps */}
      <section className="py-20 bg-white border-t border-[#1C2B43]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 space-y-3">
            <p className="text-xs font-medium tracking-wider text-[#C7A878]">
              Direct Coordination
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1C2B43]">
              How Every Estimate Moves Forward
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-6 sm:p-8 bg-[#FAF8F3] border border-[#1C2B43]/10 rounded-sm space-y-3"
              >
                <div className="font-serif text-3xl font-medium tabular-nums text-[#C7A878]">
                  {step.step}
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#1C2B43]">{step.title}</h3>
                <p className="text-sm text-[#343B43]/85 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => onNavigate('estimate')}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1C2B43] text-white text-sm font-medium rounded-sm hover:bg-[#1C2B43]/90 transition-colors cursor-pointer"
            >
              <span>Request My Free Estimate</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

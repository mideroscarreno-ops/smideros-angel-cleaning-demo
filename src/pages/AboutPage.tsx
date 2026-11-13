import { ArrowRight, Phone } from 'lucide-react';
import { ResilientImage } from '../components/ResilientImage';
import { SITE_IMAGES } from '../data/assets';
import { BUSINESS_INFO, CREDIBILITY_CLAIMS, VERIFIED_TESTIMONIAL } from '../data/content';
import type { NavigateFn } from '../types/navigation';

interface AboutPageProps {
  onNavigate: NavigateFn;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-[#FAF8F3] border-b border-[#1C2B43]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <p className="text-xs font-medium tracking-wider text-[#C7A878]">
              About {BUSINESS_INFO.name}
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-[#1C2B43] leading-tight">
              Family-Owned Care Rooted in Oklahoma City.
            </h1>
            <p className="text-base sm:text-lg text-[#343B43] leading-relaxed">
              Angel Cleaning LLC is a family-owned, locally operated cleaning company based in Oklahoma City, Oklahoma. Built around long-term customer relationships and customizable service, our team serves homeowners, local businesses, and renovation projects with dependable, uniformed care.
            </p>
            <p className="text-sm text-[#343B43]/80 leading-relaxed">
              Known to returning clients by our classic line, “{BUSINESS_INFO.heritageTagline},” we pair warm, approachable communication with bonded and insured professionalism.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('estimate')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1C2B43] text-white text-sm font-medium rounded-sm hover:bg-[#1C2B43]/90 transition-colors cursor-pointer"
              >
                <span>Request a Free Estimate</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('approach')}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-white border border-[#1C2B43]/20 text-[#1C2B43] text-sm font-medium rounded-sm hover:border-[#1C2B43] transition-colors cursor-pointer"
              >
                <span>Explore Our Approach</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-sm overflow-hidden border border-[#1C2B43]/10">
              <ResilientImage
                src={SITE_IMAGES.calmLiving.src}
                alt={SITE_IMAGES.calmLiving.alt}
                width={SITE_IMAGES.calmLiving.width}
                height={SITE_IMAGES.calmLiving.height}
                fallbackTitle="Angel Cleaning LLC Oklahoma City"
                aspectClassName="aspect-[3/4]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Commitments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 space-y-3">
            <p className="text-xs font-medium tracking-wider text-[#C7A878]">
              What Guides Our Work
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1C2B43]">
              Standards Published, Kept, and Verified in Every Visit
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CREDIBILITY_CLAIMS.map((item) => (
              <div
                key={item.number}
                className="p-6 sm:p-8 bg-[#FAF8F3] border border-[#1C2B43]/10 rounded-sm space-y-2.5"
              >
                <div className="text-xs font-medium tabular-nums text-[#C7A878]">{item.number}</div>
                <h3 className="font-serif text-2xl font-medium text-[#1C2B43]">{item.title}</h3>
                <p className="text-sm text-[#343B43]/85 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentic Testimonial & Local Presence */}
      <section className="py-20 bg-[#E7EFF3] border-t border-[#1C2B43]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <blockquote className="font-serif italic text-2xl sm:text-3xl text-[#1C2B43] leading-snug">
            “{VERIFIED_TESTIMONIAL.quote}”
          </blockquote>
          <div className="space-y-1">
            <p className="text-sm font-semibold text-[#1C2B43]">{VERIFIED_TESTIMONIAL.author}</p>
            <p className="text-xs text-[#343B43]/75">{VERIFIED_TESTIMONIAL.context}</p>
          </div>
          <div className="pt-4">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1C2B43] text-white text-sm font-medium rounded-sm hover:bg-[#1C2B43]/90 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C7A878]" aria-hidden="true" />
              <span>Speak With Our Oklahoma City Team · {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

import { ArrowLeft, ArrowRight, Phone } from 'lucide-react';
import { ResilientImage } from '../components/ResilientImage';
import { SITE_IMAGES } from '../data/assets';
import { BUSINESS_INFO, VERIFIED_TESTIMONIAL } from '../data/content';
import type { NavigateFn, ServiceSelection } from '../types/navigation';

interface ServiceDetailPageProps {
  serviceType: 'residential' | 'commercial' | 'post-construction';
  onNavigate: NavigateFn;
}

const DETAIL_CONFIG: Record<
  'residential' | 'commercial' | 'post-construction',
  {
    kicker: string;
    headline: string;
    lead: string;
    imageKey: 'residential' | 'commercial' | 'postConstruction';
    preselect: ServiceSelection;
    ctaLabel: string;
    sectionsTitle: string;
    areas: { title: string; description: string }[];
    schedulingNoteTitle: string;
    schedulingNoteBody: string;
    pricingNote: string;
  }
> = {
  residential: {
    kicker: 'Residential Cleaning · Oklahoma City',
    headline: 'Come Home to Something Wonderful.',
    lead: 'Customizable house cleaning designed by a family-owned Oklahoma City team—whether you prefer weekly upkeep, biweekly maintenance, monthly care, or a thorough one-time clean.',
    imageKey: 'residential',
    preselect: 'residential',
    ctaLabel: 'Request My Residential Estimate',
    sectionsTitle: 'Areas & Options We Tailor Around Your Home',
    areas: [
      {
        title: 'Kitchens & Dining Spaces',
        description:
          'Detailed attention to countertops, sinks, cabinet exteriors, stovetops, appliance exteriors, and swept and mopped floors.',
      },
      {
        title: 'Fresh Bathrooms',
        description:
          'Careful sanitizing and polishing of vanities, mirrors, fixtures, tubs, showers, and bathroom flooring.',
      },
      {
        title: 'Bedrooms & Living Areas',
        description:
          'Dusting surfaces, baseboards, and fixtures along with vacuuming and floor care to leave living rooms calm and inviting.',
      },
      {
        title: 'Recurring & One-Time Schedules',
        description:
          'Choose weekly, biweekly, or monthly recurring visits—or schedule a single one-time cleaning when your home needs extra attention.',
      },
      {
        title: 'Optional Cleaning Add-Ons',
        description:
          'Ask about customizable additional tasks when planning your visit so the checklist matches your home’s priorities.',
      },
      {
        title: 'Uniformed, Bonded & Insured Team',
        description:
          'Locally managed professionals backed by Angel Cleaning LLC’s satisfaction guarantee.',
      },
    ],
    schedulingNoteTitle: 'Recurring vs. First-Time Pricing',
    schedulingNoteBody:
      'Because every home varies in layout, surface materials, and current upkeep, first-time visits and ongoing recurring schedules (weekly, biweekly, monthly) are quoted individually after discussing your space.',
    pricingNote:
      'Share your approximate home size and priorities in a quick estimate request, and Angel Cleaning LLC will confirm your tailored rate directly.',
  },
  commercial: {
    kicker: 'Commercial Cleaning · Oklahoma City',
    headline: 'Clean Spaces Help Businesses Shine.',
    lead: 'Dependable, tailored commercial cleaning for offices, showrooms, retail stores, banks, churches, and dealerships across Oklahoma City and surrounding areas.',
    imageKey: 'commercial',
    preselect: 'commercial',
    ctaLabel: 'Request a Commercial Cleaning Estimate',
    sectionsTitle: 'Commercial Environments & Tailored Care',
    areas: [
      {
        title: 'Offices & Executive Suites',
        description:
          'Clean workstations, conference rooms, reception desks, breakrooms, and restrooms for productive, welcoming days.',
      },
      {
        title: 'Showrooms & Dealerships',
        description:
          'Spotless display floors, crisp glass entryways, and well-kept customer waiting lounges that reflect your brand.',
      },
      {
        title: 'Retail Stores & Banks',
        description:
          'Consistent floor care, clean counters, and polished customer-facing areas built around daily foot traffic.',
      },
      {
        title: 'Churches & Community Spaces',
        description:
          'Respectful, thorough care for sanctuaries, gathering halls, classrooms, and shared common areas.',
      },
      {
        title: 'Custom Business Packages',
        description:
          'Cleaning schedules and task lists tailored around your operating hours and building-specific priorities.',
      },
      {
        title: 'Reliable Local Accountability',
        description:
          'Bonded and insured, uniformed teams locally managed right here in Oklahoma City.',
      },
    ],
    schedulingNoteTitle: 'Tailored Commercial Pricing',
    schedulingNoteBody:
      'Commercial cleaning pricing varies by facility type, square footage, traffic level, and cleaning frequency. Rather than forcing businesses into generic tiers, Angel Cleaning LLC prepares a customized plan for each facility.',
    pricingNote:
      'Tell us about your business type and preferred schedule to receive a custom commercial quote.',
  },
  'post-construction': {
    kicker: 'Post-Construction Cleaning · Oklahoma City',
    headline: 'From Construction Site to Finished Space.',
    lead: 'Detailed final-stage cleanup following home renovations, single-room remodels, new home construction, commercial builds, and restaurant remodels.',
    imageKey: 'postConstruction',
    preselect: 'post-construction',
    ctaLabel: 'Discuss Your Cleanup Project',
    sectionsTitle: 'Project Types We Prepare for Handover',
    areas: [
      {
        title: 'Home Renovations & Remodels',
        description:
          'Clearing fine drywall dust and contractor residue after whole-home renovations or single-room remodels.',
      },
      {
        title: 'New Home Construction',
        description:
          'Detailed interior surface, cabinet, fixture, and floor cleanup so newly built homes are ready for move-in day.',
      },
      {
        title: 'Commercial Construction',
        description:
          'Thorough post-build cleanup preparing new offices, retail build-outs, and tenant improvements for opening.',
      },
      {
        title: 'Restaurant Remodels',
        description:
          'Careful post-renovation cleanup of dining areas and finished surfaces ahead of reopening.',
      },
      {
        title: 'Finish-Safe Attention',
        description:
          'Respectful care around freshly painted walls, new cabinetry, stone countertops, glass, and newly laid flooring.',
      },
      {
        title: 'Coordinated Project Timing',
        description:
          'Share your target completion window so cleanup aligns smoothly with contractors and move-in dates.',
      },
    ],
    schedulingNoteTitle: 'Project-Based Estimates',
    schedulingNoteBody:
      'Post-construction needs depend on whether a project is residential or commercial, renovation or new build, and its completion timeline. Angel Cleaning LLC reviews each project individually.',
    pricingNote:
      'Share your project type, city or ZIP code, and target timeframe to start planning your post-construction cleanup.',
  },
};

export function ServiceDetailPage({ serviceType, onNavigate }: ServiceDetailPageProps) {
  const config = DETAIL_CONFIG[serviceType];
  const image = SITE_IMAGES[config.imageKey];

  return (
    <div>
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-[#FAF8F3] border-b border-[#1C2B43]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-xs font-medium text-[#1C2B43]/80 hover:text-[#1C2B43] mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Back to All Cleaning Services</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-5">
              <p className="text-xs font-medium tracking-wider text-[#C7A878]">{config.kicker}</p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-medium text-[#1C2B43] leading-[1.1]">
                {config.headline}
              </h1>
              <p className="text-base sm:text-lg text-[#343B43] leading-relaxed">{config.lead}</p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('estimate', { preselectedService: config.preselect })}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1C2B43] text-white text-sm font-medium rounded-sm hover:bg-[#1C2B43]/90 transition-colors cursor-pointer"
                >
                  <span>{config.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex items-center gap-2 px-5 py-3.5 bg-white border border-[#1C2B43]/20 text-[#1C2B43] text-sm font-medium rounded-sm hover:border-[#1C2B43] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C7A878]" aria-hidden="true" />
                  <span>{BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-sm overflow-hidden border border-[#1C2B43]/10">
                <ResilientImage
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  fallbackTitle={config.kicker}
                  aspectClassName="aspect-[4/3]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 space-y-2">
            <p className="text-xs font-medium tracking-wider text-[#C7A878]">Scope &amp; Detail</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1C2B43]">
              {config.sectionsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.areas.map((area, index) => (
              <div
                key={area.title}
                className="p-6 sm:p-8 bg-[#FAF8F3] border border-[#1C2B43]/10 rounded-sm space-y-2.5"
              >
                <div className="text-xs font-medium tabular-nums text-[#C7A878]">
                  0{index + 1}
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#1C2B43]">{area.title}</h3>
                <p className="text-sm text-[#343B43]/85 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent Pricing & Testimonial */}
      <section className="py-20 bg-[#E7EFF3] border-t border-[#1C2B43]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-7 bg-white border border-[#1C2B43]/10 rounded-sm p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-medium tracking-wider text-[#C7A878]">
                Estimate &amp; Pricing Transparency
              </p>
              <h2 className="font-serif text-3xl font-medium text-[#1C2B43]">
                {config.schedulingNoteTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#343B43] leading-relaxed">
                {config.schedulingNoteBody}
              </p>
              <p className="text-sm text-[#343B43]/80 leading-relaxed">{config.pricingNote}</p>
            </div>
            <div>
              <button
                type="button"
                onClick={() => onNavigate('estimate', { preselectedService: config.preselect })}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1C2B43] text-white text-sm font-medium rounded-sm hover:bg-[#1C2B43]/90 transition-colors cursor-pointer"
              >
                <span>{config.ctaLabel}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#1C2B43] text-white rounded-sm p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <p className="text-xs font-medium tracking-wider text-[#C7A878]">
                Client Perspective
              </p>
              <blockquote className="font-serif italic text-xl sm:text-2xl leading-relaxed text-[#FAF8F3]">
                “{VERIFIED_TESTIMONIAL.quote}”
              </blockquote>
            </div>
            <div className="pt-4 border-t border-white/15">
              <p className="text-sm font-medium text-white">{VERIFIED_TESTIMONIAL.author}</p>
              <p className="text-xs text-[#FAF8F3]/70">{VERIFIED_TESTIMONIAL.context}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

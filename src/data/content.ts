import type { PageRoute, ServiceSelection } from '../types/navigation';

export const BUSINESS_INFO = {
  name: 'Angel Cleaning LLC',
  concept: 'A Cleaner Space. A Lighter Day.',
  heritageTagline: "Heaven's Best Cleaners for Earth's Busiest People",
  phoneDisplay: '(405) 921-0145',
  phoneHref: 'tel:+14059210145',
  email: 'Contact@AngelCleaningLLC.com',
  emailHref: 'mailto:Contact@AngelCleaningLLC.com',
  addressLine1: '9300 S. Pennsylvania Avenue',
  addressLine2: 'Suite D',
  cityState: 'Oklahoma City, Oklahoma',
  fullAddress: '9300 S. Pennsylvania Avenue, Suite D, Oklahoma City, Oklahoma',
  agencyCredit: 'Independent website redesign concept by S.Mideros Agency.',
};

export interface ServiceCategoryInfo {
  id: ServiceSelection;
  route: PageRoute;
  number: string;
  title: string;
  panelHeadline: string;
  homeCta: string;
  shortDescription: string;
  highlights: string[];
  imageKey: 'residential' | 'commercial' | 'postConstruction';
}

export const SERVICE_CATEGORIES: ServiceCategoryInfo[] = [
  {
    id: 'residential',
    route: 'residential',
    number: '01',
    title: 'Residential Cleaning',
    panelHeadline: 'Come Home to Something Wonderful.',
    homeCta: 'Explore Home Cleaning',
    shortDescription:
      'Customizable home care built around your household rhythm, from routine upkeep to thorough one-time refreshes.',
    highlights: [
      'Recurring house cleaning',
      'Weekly cleaning',
      'Biweekly cleaning',
      'Monthly cleaning',
      'One-time cleaning',
      'Optional cleaning add-ons',
    ],
    imageKey: 'residential',
  },
  {
    id: 'commercial',
    route: 'commercial',
    number: '02',
    title: 'Commercial Cleaning',
    panelHeadline: 'A Professional Space That Makes an Impression.',
    homeCta: 'Explore Business Cleaning',
    shortDescription:
      'Dependable, tailored commercial maintenance for workplaces and public-facing properties across the Oklahoma City area.',
    highlights: [
      'Offices',
      'Showrooms',
      'Retail stores',
      'Banks',
      'Churches',
      'Dealerships',
    ],
    imageKey: 'commercial',
  },
  {
    id: 'post-construction',
    route: 'post-construction',
    number: '03',
    title: 'Post-Construction Cleaning',
    panelHeadline: 'From Construction Site to Finished Space.',
    homeCta: 'Explore Post-Construction Cleaning',
    shortDescription:
      'Detailed final-stage cleanup that clears dust and construction residue so renovated or newly built interiors are ready to enjoy.',
    highlights: [
      'Home renovations',
      'Single-room remodels',
      'New home construction',
      'Commercial construction',
      'Restaurant remodels',
    ],
    imageKey: 'postConstruction',
  },
];

export const TAILORED_FACTORS = [
  {
    number: '01',
    title: 'Property Type',
    detail: 'Private residences, commercial workplaces, showrooms, or newly completed construction sites.',
  },
  {
    number: '02',
    title: 'Approximate Size',
    detail: 'An estimate of rooms or layout helps guide the scope—exact square footage is never required to begin.',
  },
  {
    number: '03',
    title: 'Cleaning Frequency',
    detail: 'Choose weekly, biweekly, monthly, recurring commercial schedules, or a single one-time visit.',
  },
  {
    number: '04',
    title: 'Specific Priorities',
    detail: 'Tell us which rooms, high-traffic zones, or surfaces matter most to your household or team.',
  },
  {
    number: '05',
    title: 'Special Requests',
    detail: 'Include optional add-on tasks or site-specific instructions directly in your conversation.',
  },
  {
    number: '06',
    title: 'Preferred Timing',
    detail: 'Share your ideal window or project handover timeline so scheduling can be coordinated with our team.',
  },
];

export const CREDIBILITY_CLAIMS = [
  {
    number: '01',
    title: 'Family-Owned & Operated',
    description: 'Locally managed in Oklahoma City with personal accountability on every visit.',
  },
  {
    number: '02',
    title: 'Bonded & Insured',
    description: 'Professional protection and peace of mind for both residential homes and commercial properties.',
  },
  {
    number: '03',
    title: 'Customizable Services',
    description: 'Cleaning plans are shaped around your rooms, business requirements, and schedule rather than rigid checklists.',
  },
  {
    number: '04',
    title: 'Uniformed Cleaning Professionals',
    description: 'Courteous, recognizable team members who treat private homes and active workplaces with respect.',
  },
  {
    number: '05',
    title: 'Satisfaction Guarantee',
    description: 'Backed by Angel Cleaning LLC’s commitment to dependable work and attentive follow-through.',
  },
  {
    number: '06',
    title: 'Residential & Commercial Experience',
    description: 'Equipped to care for lived-in homes, busy customer lobbies, and detailed post-renovation spaces.',
  },
];

export const VERIFIED_TESTIMONIAL = {
  quote:
    'Angela and her crew have been cleaning my home for almost two years. They are dependable, courteous, and very trustworthy. I am always impressed when I return home and see the job they have done to make my house shine. I highly recommend Angel Cleaning!',
  author: 'Melissa Hofferber-Harwell',
  context: 'Residential Client · Published on AngelCleaningLLC.com',
};

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Tell Us About Your Space',
    description: 'Choose the cleaning service—residential, commercial, or post-construction—and share basic property details.',
  },
  {
    step: '02',
    title: 'Discuss Your Cleaning Needs',
    description: 'Share your priorities, preferred timing, frequency, and any special requests or add-on tasks.',
  },
  {
    step: '03',
    title: 'Confirm Your Cleaning Plan',
    description: 'Coordinate customized pricing and scheduling directly with Angel Cleaning LLC before your service begins.',
  },
];

export interface FaqItem {
  id: string;
  category: 'General' | 'Residential' | 'Commercial' | 'Post-Construction' | 'Estimates';
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'services-available',
    category: 'General',
    question: 'What cleaning services are available?',
    answer:
      'Angel Cleaning LLC provides three core services in Oklahoma City and surrounding areas: Residential Cleaning (weekly, biweekly, monthly, one-time, and optional add-ons), Commercial Cleaning (offices, showrooms, retail stores, banks, churches, and dealerships), and Post-Construction Cleaning (home renovations, single-room remodels, new home construction, commercial construction, and restaurant remodels).',
  },
  {
    id: 'residential-schedules',
    category: 'Residential',
    question: 'How do residential cleaning schedules work?',
    answer:
      'Homeowners can arrange recurring maintenance on a weekly, biweekly, or monthly rhythm, or schedule a one-time cleaning. Because every home differs, exact scheduling windows and pricing are confirmed directly with Angel Cleaning LLC after discussing your property.',
  },
  {
    id: 'one-time-cleaning',
    category: 'Residential',
    question: 'Can customers request one-time cleaning?',
    answer:
      'Yes. In addition to recurring house cleaning, Angel Cleaning LLC offers one-time residential cleaning and post-renovation cleanups. Share your preferred timeframe when requesting an estimate so our team can confirm availability.',
  },
  {
    id: 'commercial-customized',
    category: 'Commercial',
    question: 'Are commercial plans customized?',
    answer:
      'Yes. Commercial cleaning pricing and scope are tailored to each property—whether an office, showroom, retail store, bank, church, or dealership—based on facility layout, cleaning frequency, and business-specific requirements.',
  },
  {
    id: 'post-construction-included',
    category: 'Post-Construction',
    question: 'What is included in post-construction cleaning?',
    answer:
      'Post-construction cleaning prepares newly built or remodeled spaces for use after contractors finish—addressing fine dust, surface residue, and detailed interior cleanup across residential renovations, single-room remodels, new homes, commercial builds, and restaurant remodels. Exact task scope is finalized with you for your specific project.',
  },
  {
    id: 'how-estimates-prepared',
    category: 'Estimates',
    question: 'How are estimates prepared?',
    answer:
      'Estimates are prepared individually based on your service category, city or ZIP code, approximate property size, desired frequency, and any special priorities. Submitting an inquiry starts the conversation; Angel Cleaning LLC confirms final pricing and scheduling directly with you.',
  },
  {
    id: 'additional-tasks',
    category: 'Residential',
    question: 'Can customers request additional cleaning tasks?',
    answer:
      'Yes. Angel Cleaning LLC offers customizable cleaning plans and optional add-on tasks. Mention any special priorities or extra areas you would like addressed when speaking with the team or completing the estimate request.',
  },
  {
    id: 'locations-served',
    category: 'General',
    question: 'Which locations are served?',
    answer:
      'Angel Cleaning LLC is based in Oklahoma City (9300 S. Pennsylvania Avenue, Suite D) and serves Oklahoma City and surrounding areas. Because coverage outside central Oklahoma City depends on location and schedule, local availability is confirmed individually when you share your city or ZIP code.',
  },
  {
    id: 'how-to-contact',
    category: 'General',
    question: 'How can customers contact the company?',
    answer:
      'You can call Angel Cleaning LLC directly at (405) 921-0145, email Contact@AngelCleaningLLC.com, or submit your project details through the Request a Free Estimate experience.',
  },
];

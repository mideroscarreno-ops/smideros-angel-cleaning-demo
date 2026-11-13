import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Copy,
  Edit3,
  Info,
  Mail,
  Phone,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import type { ServiceSelection } from '../types/navigation';

interface EstimateWizardProps {
  initialService?: ServiceSelection;
  initialLocation?: string;
}

interface EstimateFormData {
  service: ServiceSelection;
  location: string;
  // Residential
  homeSize: string;
  residentialFrequency: string;
  residentialPriorities: string[];
  // Commercial
  businessType: string;
  facilitySize: string;
  commercialFrequency: string;
  commercialRequirements: string;
  // Post-Construction
  projectCategory: string;
  projectType: string;
  projectSize: string;
  projectTimeframe: string;
  // Not sure yet
  generalSpaceDescription: string;
  // Contact
  fullName: string;
  email: string;
  phone: string;
  additionalDetails: string;
  referralSource: string;
}

const SERVICE_OPTIONS: {
  id: ServiceSelection;
  title: string;
  subtitle: string;
}[] = [
  {
    id: 'residential',
    title: 'Residential Cleaning',
    subtitle: 'Weekly, biweekly, monthly, or one-time house cleaning and optional add-ons.',
  },
  {
    id: 'commercial',
    title: 'Commercial Cleaning',
    subtitle: 'Tailored care for offices, showrooms, retail stores, banks, churches, and dealerships.',
  },
  {
    id: 'post-construction',
    title: 'Post-Construction Cleaning',
    subtitle: 'Final-stage cleanup after renovations, remodels, or new residential and commercial builds.',
  },
  {
    id: 'not-sure',
    title: 'Not Sure Yet',
    subtitle: 'Share a few details about your space and our team will recommend the right fit.',
  },
];

const RESIDENTIAL_PRIORITIES = [
  'Kitchens',
  'Bathrooms',
  'Bedrooms & Living Spaces',
  'Detailed Surface Cleaning',
  'Optional Cleaning Add-Ons',
];

export function EstimateWizard({
  initialService = 'residential',
  initialLocation = '',
}: EstimateWizardProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState<EstimateFormData>({
    service: initialService,
    location: initialLocation,
    homeSize: '',
    residentialFrequency: 'Biweekly',
    residentialPriorities: [],
    businessType: 'Office',
    facilitySize: '',
    commercialFrequency: 'Weekly',
    commercialRequirements: '',
    projectCategory: 'Residential Project',
    projectType: 'Home Renovation',
    projectSize: '',
    projectTimeframe: '',
    generalSpaceDescription: '',
    fullName: '',
    email: '',
    phone: '',
    additionalDetails: '',
    referralSource: '',
  });

  useEffect(() => {
    if (initialService) {
      setForm((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialLocation) {
      setForm((prev) => ({ ...prev, location: initialLocation }));
    }
  }, [initialLocation]);

  const serviceLabel =
    SERVICE_OPTIONS.find((s) => s.id === form.service)?.title ?? 'Cleaning Service';

  const togglePriority = (priority: string) => {
    setForm((prev) => {
      const exists = prev.residentialPriorities.includes(priority);
      return {
        ...prev,
        residentialPriorities: exists
          ? prev.residentialPriorities.filter((p) => p !== priority)
          : [...prev.residentialPriorities, priority],
      };
    });
  };

  const validateStep2 = (): boolean => {
    const nextErrors: Record<string, string> = {};
    if (!form.location.trim()) {
      nextErrors.location = 'Please enter your city or ZIP code so we can confirm local coverage.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const validateStep3 = (): boolean => {
    const nextErrors: Record<string, string> = {};
    if (!form.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!emailPattern.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    const digits = form.phone.replace(/\D/g, '');
    if (!form.phone.trim()) {
      nextErrors.phone = 'Please enter a phone number.';
    } else if (digits.length < 7) {
      nextErrors.phone = 'Please enter a valid 10-digit phone number.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1) {
      setErrors({});
      setStep(2);
    } else if (step === 2) {
      if (validateStep2()) {
        setStep(3);
      }
    } else if (step === 3) {
      if (validateStep3()) {
        setStep(4);
      }
    }
  };

  const buildPlainSummary = () => {
    const lines = [
      `Angel Cleaning LLC — Free Estimate Request`,
      `Service Category: ${serviceLabel}`,
      `City / ZIP Code: ${form.location || 'Not provided'}`,
    ];

    if (form.service === 'residential') {
      lines.push(`Approximate Home Size (Optional): ${form.homeSize || 'Not specified'}`);
      lines.push(`Preferred Frequency: ${form.residentialFrequency}`);
      lines.push(
        `Main Priorities (Optional): ${
          form.residentialPriorities.length > 0
            ? form.residentialPriorities.join(', ')
            : 'None selected'
        }`
      );
    } else if (form.service === 'commercial') {
      lines.push(`Business Type: ${form.businessType}`);
      lines.push(`Approximate Facility Size (Optional): ${form.facilitySize || 'Not specified'}`);
      lines.push(`Desired Frequency: ${form.commercialFrequency}`);
      lines.push(`Main Requirements (Optional): ${form.commercialRequirements || 'None noted'}`);
    } else if (form.service === 'post-construction') {
      lines.push(`Project Setting: ${form.projectCategory}`);
      lines.push(`Project Type: ${form.projectType}`);
      lines.push(`Approximate Project Size (Optional): ${form.projectSize || 'Not specified'}`);
      lines.push(`Desired Completion Timeframe (Optional): ${form.projectTimeframe || 'Flexible'}`);
    } else {
      lines.push(
        `Space Description (Optional): ${form.generalSpaceDescription || 'Not specified'}`
      );
    }

    lines.push('');
    lines.push(`Name: ${form.fullName}`);
    lines.push(`Email: ${form.email}`);
    lines.push(`Phone: ${form.phone}`);
    if (form.additionalDetails.trim()) {
      lines.push(`Additional Details: ${form.additionalDetails.trim()}`);
    }
    if (form.referralSource.trim()) {
      lines.push(`How They Heard About Us (Optional): ${form.referralSource.trim()}`);
    }
    return lines.join('\n');
  };

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(buildPlainSummary());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const mailtoHref = `mailto:${BUSINESS_INFO.email}?subject=${encodeURIComponent(
    `Free Estimate Request — ${serviceLabel}`
  )}&body=${encodeURIComponent(buildPlainSummary())}`;

  if (submitted) {
    return (
      <div className="bg-white border border-[#1C2B43]/12 rounded-sm p-6 sm:p-10 space-y-6">
        <div className="bg-[#E7EFF3]/70 border border-[#1C2B43]/15 rounded-sm p-4 flex items-start gap-3">
          <Info className="w-5 h-5 text-[#1C2B43] shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-sm text-[#1C2B43] leading-relaxed">
            <strong className="font-semibold">Interactive Concept Demonstration:</strong> Because this redesign concept does not connect to a live Angel Cleaning LLC server, no inquiry has been transmitted or booked automatically. Use the email or phone options below to send your prepared estimate directly to the company.
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-medium tracking-wider text-[#C7A878]">
            Prepared Estimate Summary
          </p>
          <h3 className="font-serif text-3xl font-medium text-[#1C2B43]">
            Ready to Send to Angel Cleaning LLC
          </h3>
          <p className="text-sm text-[#343B43] leading-relaxed">
            Angel Cleaning LLC reviews each request individually to confirm service availability, custom scope, and pricing with you directly.
          </p>
        </div>

        <div className="bg-[#FAF8F3] border border-[#1C2B43]/10 rounded-sm p-5 text-sm text-[#343B43] whitespace-pre-line leading-relaxed">
          {buildPlainSummary()}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={mailtoHref}
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#1C2B43] text-white text-sm font-medium rounded-sm hover:bg-[#1C2B43]/90 transition-colors"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            <span>Open in Email App</span>
          </a>

          <a
            href={BUSINESS_INFO.phoneHref}
            className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-[#1C2B43]/20 text-[#1C2B43] text-sm font-medium rounded-sm hover:bg-[#FAF8F3] transition-colors"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span>Call {BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <button
            type="button"
            onClick={handleCopySummary}
            className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-[#1C2B43] hover:text-[#C7A878] transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                <span>Copied Details</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" aria-hidden="true" />
                <span>Copy Summary</span>
              </>
            )}
          </button>
        </div>

        <div className="pt-4 border-t border-[#1C2B43]/10">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setStep(1);
            }}
            className="text-sm font-medium text-[#1C2B43] underline underline-offset-4 hover:text-[#C7A878] cursor-pointer"
          >
            Edit or start another estimate preview
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#1C2B43]/12 rounded-sm p-6 sm:p-10">
      {/* Progress Steps */}
      <nav aria-label="Estimate request steps" className="mb-8 pb-6 border-b border-[#1C2B43]/10">
        <ol className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { num: 1, label: 'Select Service' },
            { num: 2, label: 'Property Details' },
            { num: 3, label: 'Contact Details' },
            { num: 4, label: 'Review Request' },
          ].map((item) => {
            const isCurrent = step === item.num;
            const isDone = step > item.num;
            return (
              <li key={item.num}>
                <button
                  type="button"
                  disabled={item.num > step}
                  onClick={() => {
                    if (item.num < step) setStep(item.num as 1 | 2 | 3 | 4);
                  }}
                  className={`w-full text-left group ${
                    item.num <= step ? 'cursor-pointer' : 'cursor-default opacity-50'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className={`w-6 h-6 rounded-full text-xs font-medium tabular-nums flex items-center justify-center transition-colors ${
                        isCurrent
                          ? 'bg-[#1C2B43] text-white'
                          : isDone
                          ? 'bg-[#C7A878] text-[#1C2B43]'
                          : 'bg-[#E7EFF3] text-[#1C2B43]'
                      }`}
                    >
                      {isDone ? <Check className="w-3.5 h-3.5" aria-hidden="true" /> : item.num}
                    </span>
                    <span className="text-xs font-medium text-[#343B43]/70">Step 0{item.num}</span>
                  </div>
                  <div
                    className={`text-sm font-medium ${
                      isCurrent ? 'text-[#1C2B43]' : 'text-[#343B43]'
                    }`}
                  >
                    {item.label}
                  </div>
                </button>
              </li>
            );
          })}
        </ol>
      </nav>

      {/* STEP 1: Select Service */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C2B43]">
              Which cleaning service are you looking for?
            </h2>
            <p className="text-sm text-[#343B43]/80 mt-1">
              We will only ask follow-up questions relevant to your selection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="radiogroup" aria-label="Cleaning service category">
            {SERVICE_OPTIONS.map((option) => {
              const selected = form.service === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setForm((prev) => ({ ...prev, service: option.id }))}
                  className={`text-left p-5 rounded-sm border transition-all cursor-pointer ${
                    selected
                      ? 'border-[#1C2B43] bg-[#E7EFF3]/45'
                      : 'border-[#1C2B43]/15 bg-[#FAF8F3]/50 hover:border-[#1C2B43]/40'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-serif text-xl font-medium text-[#1C2B43]">
                      {option.title}
                    </span>
                    <span
                      className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                        selected
                          ? 'border-[#1C2B43] bg-[#1C2B43] text-white'
                          : 'border-[#1C2B43]/30'
                      }`}
                    >
                      {selected && <Check className="w-3 h-3" aria-hidden="true" />}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#343B43]/80 mt-2 leading-relaxed">
                    {option.subtitle}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* STEP 2: Relevant Property Details */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C2B43]">
              Tell us about your {serviceLabel.toLowerCase()} needs
            </h2>
            <p className="text-sm text-[#343B43]/80 mt-1">
              Exact square footage is never required—approximate details are completely fine.
            </p>
          </div>

          {/* Shared City / ZIP field */}
          <div>
            <label htmlFor="est-location" className="block text-sm font-medium text-[#1C2B43] mb-1.5">
              City or ZIP Code <span className="text-[#C7A878]">*</span>
            </label>
            <input
              id="est-location"
              type="text"
              value={form.location}
              onChange={(e) => {
                setForm((prev) => ({ ...prev, location: e.target.value }));
                if (errors.location) setErrors((prev) => ({ ...prev, location: '' }));
              }}
              placeholder="e.g., Oklahoma City, 73159"
              className="w-full h-12 px-4 bg-white border border-[#1C2B43]/20 rounded-sm text-sm text-[#1C2B43]"
            />
            {errors.location && (
              <p role="alert" className="text-xs text-red-700 mt-1.5">
                {errors.location}
              </p>
            )}
          </div>

          {/* Residential-specific questions */}
          {form.service === 'residential' && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="res-frequency"
                    className="block text-sm font-medium text-[#1C2B43] mb-1.5"
                  >
                    Preferred Cleaning Frequency
                  </label>
                  <select
                    id="res-frequency"
                    value={form.residentialFrequency}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, residentialFrequency: e.target.value }))
                    }
                    className="w-full h-12 px-4 bg-white border border-[#1C2B43]/20 rounded-sm text-sm text-[#1C2B43]"
                  >
                    <option value="Weekly">Weekly cleaning</option>
                    <option value="Biweekly">Biweekly cleaning</option>
                    <option value="Monthly">Monthly cleaning</option>
                    <option value="One-time">One-time cleaning</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="res-size"
                    className="block text-sm font-medium text-[#1C2B43] mb-1.5"
                  >
                    Approximate Home Size <span className="text-[#343B43]/60 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="res-size"
                    type="text"
                    value={form.homeSize}
                    onChange={(e) => setForm((prev) => ({ ...prev, homeSize: e.target.value }))}
                    placeholder="e.g., 3 bedrooms, 2 baths or ~2,000 sq ft"
                    className="w-full h-12 px-4 bg-white border border-[#1C2B43]/20 rounded-sm text-sm text-[#1C2B43]"
                  />
                </div>
              </div>

              <div>
                <span className="block text-sm font-medium text-[#1C2B43] mb-2">
                  Main Cleaning Priorities <span className="text-[#343B43]/60 font-normal">(Optional)</span>
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {RESIDENTIAL_PRIORITIES.map((priority) => {
                    const active = form.residentialPriorities.includes(priority);
                    return (
                      <button
                        key={priority}
                        type="button"
                        aria-pressed={active}
                        onClick={() => togglePriority(priority)}
                        className={`px-3.5 py-2 text-xs sm:text-sm rounded-sm border transition-colors cursor-pointer ${
                          active
                            ? 'bg-[#1C2B43] text-white border-[#1C2B43]'
                            : 'bg-[#FAF8F3] text-[#1C2B43] border-[#1C2B43]/15 hover:border-[#1C2B43]/40'
                        }`}
                      >
                        {priority}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Commercial-specific questions */}
          {form.service === 'commercial' && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="com-type"
                    className="block text-sm font-medium text-[#1C2B43] mb-1.5"
                  >
                    Business Type
                  </label>
                  <select
                    id="com-type"
                    value={form.businessType}
                    onChange={(e) => setForm((prev) => ({ ...prev, businessType: e.target.value }))}
                    className="w-full h-12 px-4 bg-white border border-[#1C2B43]/20 rounded-sm text-sm text-[#1C2B43]"
                  >
                    <option value="Office">Office</option>
                    <option value="Showroom">Showroom</option>
                    <option value="Retail Store">Retail Store</option>
                    <option value="Bank">Bank</option>
                    <option value="Church">Church</option>
                    <option value="Dealership">Dealership</option>
                    <option value="Other Commercial Space">Other Commercial Space</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="com-frequency"
                    className="block text-sm font-medium text-[#1C2B43] mb-1.5"
                  >
                    Desired Cleaning Frequency
                  </label>
                  <select
                    id="com-frequency"
                    value={form.commercialFrequency}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, commercialFrequency: e.target.value }))
                    }
                    className="w-full h-12 px-4 bg-white border border-[#1C2B43]/20 rounded-sm text-sm text-[#1C2B43]"
                  >
                    <option value="Daily">Daily</option>
                    <option value="Multiple times per week">Multiple times per week</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Biweekly">Biweekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="One-time / Custom">One-time or custom schedule</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="com-size"
                  className="block text-sm font-medium text-[#1C2B43] mb-1.5"
                >
                  Approximate Facility Size <span className="text-[#343B43]/60 font-normal">(Optional)</span>
                </label>
                <input
                  id="com-size"
                  type="text"
                  value={form.facilitySize}
                  onChange={(e) => setForm((prev) => ({ ...prev, facilitySize: e.target.value }))}
                  placeholder="e.g., Small suite, 4,500 sq ft showroom, multi-room office"
                  className="w-full h-12 px-4 bg-white border border-[#1C2B43]/20 rounded-sm text-sm text-[#1C2B43]"
                />
              </div>

              <div>
                <label
                  htmlFor="com-req"
                  className="block text-sm font-medium text-[#1C2B43] mb-1.5"
                >
                  Main Requirements <span className="text-[#343B43]/60 font-normal">(Optional)</span>
                </label>
                <textarea
                  id="com-req"
                  rows={3}
                  value={form.commercialRequirements}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, commercialRequirements: e.target.value }))
                  }
                  placeholder="e.g., Lobby glass, customer restrooms, breakroom, after-hours preference"
                  className="w-full p-3.5 bg-white border border-[#1C2B43]/20 rounded-sm text-sm text-[#1C2B43]"
                />
              </div>
            </div>
          )}

          {/* Post-Construction-specific questions */}
          {form.service === 'post-construction' && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="pc-category"
                    className="block text-sm font-medium text-[#1C2B43] mb-1.5"
                  >
                    Residential or Commercial Project
                  </label>
                  <select
                    id="pc-category"
                    value={form.projectCategory}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, projectCategory: e.target.value }))
                    }
                    className="w-full h-12 px-4 bg-white border border-[#1C2B43]/20 rounded-sm text-sm text-[#1C2B43]"
                  >
                    <option value="Residential Project">Residential Project</option>
                    <option value="Commercial Project">Commercial Project</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="pc-type"
                    className="block text-sm font-medium text-[#1C2B43] mb-1.5"
                  >
                    New Construction or Renovation
                  </label>
                  <select
                    id="pc-type"
                    value={form.projectType}
                    onChange={(e) => setForm((prev) => ({ ...prev, projectType: e.target.value }))}
                    className="w-full h-12 px-4 bg-white border border-[#1C2B43]/20 rounded-sm text-sm text-[#1C2B43]"
                  >
                    <option value="Home Renovation">Home renovation</option>
                    <option value="Single-Room Remodel">Single-room remodel</option>
                    <option value="New Home Construction">New home construction</option>
                    <option value="Commercial Construction">Commercial construction</option>
                    <option value="Restaurant Remodel">Restaurant remodel</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="pc-size"
                    className="block text-sm font-medium text-[#1C2B43] mb-1.5"
                  >
                    Approximate Project Size <span className="text-[#343B43]/60 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="pc-size"
                    type="text"
                    value={form.projectSize}
                    onChange={(e) => setForm((prev) => ({ ...prev, projectSize: e.target.value }))}
                    placeholder="e.g., Kitchen remodel or full 2,800 sq ft build"
                    className="w-full h-12 px-4 bg-white border border-[#1C2B43]/20 rounded-sm text-sm text-[#1C2B43]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="pc-time"
                    className="block text-sm font-medium text-[#1C2B43] mb-1.5"
                  >
                    Desired Completion Timeframe <span className="text-[#343B43]/60 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="pc-time"
                    type="text"
                    value={form.projectTimeframe}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, projectTimeframe: e.target.value }))
                    }
                    placeholder="e.g., Late November or before move-in"
                    className="w-full h-12 px-4 bg-white border border-[#1C2B43]/20 rounded-sm text-sm text-[#1C2B43]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Not Sure Yet */}
          {form.service === 'not-sure' && (
            <div>
              <label
                htmlFor="ns-desc"
                className="block text-sm font-medium text-[#1C2B43] mb-1.5"
              >
                Tell us briefly about your space <span className="text-[#343B43]/60 font-normal">(Optional)</span>
              </label>
              <textarea
                id="ns-desc"
                rows={4}
                value={form.generalSpaceDescription}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, generalSpaceDescription: e.target.value }))
                }
                placeholder="e.g., Moving into a remodeled home, or looking for regular cleaning for an office space"
                className="w-full p-3.5 bg-white border border-[#1C2B43]/20 rounded-sm text-sm text-[#1C2B43]"
              />
            </div>
          )}
        </div>
      )}

      {/* STEP 3: Contact Details */}
      {step === 3 && (
        <div className="space-y-5">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C2B43]">
              Where should we reach you?
            </h2>
            <p className="text-sm text-[#343B43]/80 mt-1">
              Angel Cleaning LLC uses these details strictly to follow up on your estimate inquiry.
            </p>
          </div>

          <div>
            <label htmlFor="est-name" className="block text-sm font-medium text-[#1C2B43] mb-1.5">
              Full Name <span className="text-[#C7A878]">*</span>
            </label>
            <input
              id="est-name"
              type="text"
              value={form.fullName}
              onChange={(e) => {
                setForm((prev) => ({ ...prev, fullName: e.target.value }));
                if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: '' }));
              }}
              placeholder="Your full name"
              className="w-full h-12 px-4 bg-white border border-[#1C2B43]/20 rounded-sm text-sm text-[#1C2B43]"
            />
            {errors.fullName && (
              <p role="alert" className="text-xs text-red-700 mt-1.5">
                {errors.fullName}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="est-email" className="block text-sm font-medium text-[#1C2B43] mb-1.5">
                Email Address <span className="text-[#C7A878]">*</span>
              </label>
              <input
                id="est-email"
                type="email"
                value={form.email}
                onChange={(e) => {
                  setForm((prev) => ({ ...prev, email: e.target.value }));
                  if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                }}
                placeholder="you@example.com"
                className="w-full h-12 px-4 bg-white border border-[#1C2B43]/20 rounded-sm text-sm text-[#1C2B43]"
              />
              {errors.email && (
                <p role="alert" className="text-xs text-red-700 mt-1.5">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="est-phone" className="block text-sm font-medium text-[#1C2B43] mb-1.5">
                Phone Number <span className="text-[#C7A878]">*</span>
              </label>
              <input
                id="est-phone"
                type="tel"
                value={form.phone}
                onChange={(e) => {
                  setForm((prev) => ({ ...prev, phone: e.target.value }));
                  if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
                }}
                placeholder="(405) 555-0199"
                className="w-full h-12 px-4 bg-white border border-[#1C2B43]/20 rounded-sm text-sm text-[#1C2B43] tabular-nums"
              />
              {errors.phone && (
                <p role="alert" className="text-xs text-red-700 mt-1.5">
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="est-notes" className="block text-sm font-medium text-[#1C2B43] mb-1.5">
              Additional Details <span className="text-[#343B43]/60 font-normal">(Optional)</span>
            </label>
            <textarea
              id="est-notes"
              rows={3}
              value={form.additionalDetails}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, additionalDetails: e.target.value }))
              }
              placeholder="Any special requests, pets, access notes, or preferred callback times"
              className="w-full p-3.5 bg-white border border-[#1C2B43]/20 rounded-sm text-sm text-[#1C2B43]"
            />
          </div>

          <div>
            <label htmlFor="est-referral" className="block text-sm font-medium text-[#1C2B43] mb-1.5">
              How did you hear about us? <span className="text-[#343B43]/60 font-normal">(Optional)</span>
            </label>
            <input
              id="est-referral"
              type="text"
              value={form.referralSource}
              onChange={(e) => setForm((prev) => ({ ...prev, referralSource: e.target.value }))}
              placeholder="e.g., Friend, Google search, saw a vehicle nearby"
              className="w-full h-12 px-4 bg-white border border-[#1C2B43]/20 rounded-sm text-sm text-[#1C2B43]"
            />
          </div>
        </div>
      )}

      {/* STEP 4: Review Request */}
      {step === 4 && (
        <div className="space-y-6">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C2B43]">
              Review your estimate request
            </h2>
            <p className="text-sm text-[#343B43]/80 mt-1">
              Confirm everything looks right below. Angel Cleaning LLC will review your details and contact you directly to confirm pricing and availability.
            </p>
          </div>

          <div className="divide-y divide-[#1C2B43]/10 border border-[#1C2B43]/12 rounded-sm bg-[#FAF8F3]/60">
            <div className="p-4 sm:p-5 flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-medium text-[#343B43]/70">Selected Service</div>
                <div className="text-base font-medium text-[#1C2B43] mt-0.5">{serviceLabel}</div>
              </div>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-1 text-xs font-medium text-[#1C2B43] hover:text-[#C7A878] cursor-pointer py-1"
              >
                <Edit3 className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Edit</span>
              </button>
            </div>

            <div className="p-4 sm:p-5 flex items-start justify-between gap-4">
              <div className="space-y-1 text-sm text-[#343B43]">
                <div className="text-xs font-medium text-[#343B43]/70">Property Details</div>
                <div>
                  <span className="font-medium text-[#1C2B43]">Location:</span> {form.location}
                </div>
                {form.service === 'residential' && (
                  <>
                    <div>
                      <span className="font-medium text-[#1C2B43]">Frequency:</span>{' '}
                      {form.residentialFrequency}
                    </div>
                    {form.homeSize && (
                      <div>
                        <span className="font-medium text-[#1C2B43]">Approx. Size:</span>{' '}
                        {form.homeSize}
                      </div>
                    )}
                    {form.residentialPriorities.length > 0 && (
                      <div>
                        <span className="font-medium text-[#1C2B43]">Priorities:</span>{' '}
                        {form.residentialPriorities.join(', ')}
                      </div>
                    )}
                  </>
                )}
                {form.service === 'commercial' && (
                  <>
                    <div>
                      <span className="font-medium text-[#1C2B43]">Business Type:</span>{' '}
                      {form.businessType}
                    </div>
                    <div>
                      <span className="font-medium text-[#1C2B43]">Desired Frequency:</span>{' '}
                      {form.commercialFrequency}
                    </div>
                    {form.facilitySize && (
                      <div>
                        <span className="font-medium text-[#1C2B43]">Approx. Size:</span>{' '}
                        {form.facilitySize}
                      </div>
                    )}
                    {form.commercialRequirements && (
                      <div>
                        <span className="font-medium text-[#1C2B43]">Requirements:</span>{' '}
                        {form.commercialRequirements}
                      </div>
                    )}
                  </>
                )}
                {form.service === 'post-construction' && (
                  <>
                    <div>
                      <span className="font-medium text-[#1C2B43]">Project:</span>{' '}
                      {form.projectCategory} · {form.projectType}
                    </div>
                    {form.projectSize && (
                      <div>
                        <span className="font-medium text-[#1C2B43]">Approx. Size:</span>{' '}
                        {form.projectSize}
                      </div>
                    )}
                    {form.projectTimeframe && (
                      <div>
                        <span className="font-medium text-[#1C2B43]">Timeframe:</span>{' '}
                        {form.projectTimeframe}
                      </div>
                    )}
                  </>
                )}
                {form.service === 'not-sure' && form.generalSpaceDescription && (
                  <div>
                    <span className="font-medium text-[#1C2B43]">Space Notes:</span>{' '}
                    {form.generalSpaceDescription}
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-1 text-xs font-medium text-[#1C2B43] hover:text-[#C7A878] cursor-pointer py-1 shrink-0"
              >
                <Edit3 className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Edit</span>
              </button>
            </div>

            <div className="p-4 sm:p-5 flex items-start justify-between gap-4">
              <div className="space-y-1 text-sm text-[#343B43]">
                <div className="text-xs font-medium text-[#343B43]/70">Contact Information</div>
                <div className="font-medium text-[#1C2B43]">{form.fullName}</div>
                <div>{form.email}</div>
                <div className="tabular-nums">{form.phone}</div>
                {form.additionalDetails && (
                  <div className="pt-1 text-[#343B43]/80">{form.additionalDetails}</div>
                )}
              </div>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="inline-flex items-center gap-1 text-xs font-medium text-[#1C2B43] hover:text-[#C7A878] cursor-pointer py-1 shrink-0"
              >
                <Edit3 className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Edit</span>
              </button>
            </div>
          </div>

          <p className="text-xs text-[#343B43]/75 leading-relaxed">
            Concept notice: This website redesign is a demonstration experience. Submitting prepares your request summary for direct email or phone follow-up with Angel Cleaning LLC.
          </p>
        </div>
      )}

      {/* Navigation controls */}
      <div className="mt-8 pt-6 border-t border-[#1C2B43]/10 flex flex-wrap items-center justify-between gap-4">
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep((prev) => (prev - 1) as 1 | 2 | 3 | 4)}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#1C2B43] hover:text-[#C7A878] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back</span>
          </button>
        ) : (
          <span className="text-xs text-[#343B43]/70">
            Prefer to talk directly?{' '}
            <a href={BUSINESS_INFO.phoneHref} className="underline text-[#1C2B43]">
              {BUSINESS_INFO.phoneDisplay}
            </a>
          </span>
        )}

        {step < 4 ? (
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C2B43] text-white text-sm font-medium rounded-sm hover:bg-[#1C2B43]/90 transition-colors cursor-pointer"
          >
            <span>Continue</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setSubmitted(true)}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1C2B43] text-white text-sm font-medium rounded-sm hover:bg-[#1C2B43]/90 transition-colors cursor-pointer"
          >
            <span>Request My Free Cleaning Estimate</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}

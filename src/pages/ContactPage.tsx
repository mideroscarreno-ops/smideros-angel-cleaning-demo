import { useState, type FormEvent } from 'react';
import { ArrowRight, Info, Mail, MapPin, Phone } from 'lucide-react';
import { ServiceAreaChecker } from '../components/ServiceAreaChecker';
import { BUSINESS_INFO } from '../data/content';
import type { NavigateFn, ServiceSelection } from '../types/navigation';

interface ContactPageProps {
  onNavigate: NavigateFn;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState<ServiceSelection>('residential');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [demoPrepared, setDemoPrepared] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!name.trim()) nextErrors.name = 'Please enter your name.';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!message.trim()) nextErrors.message = 'Please share a brief note about your inquiry.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setDemoPrepared(true);
    }
  };

  const mailtoBody = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nService Interest: ${service}\n\nMessage:\n${message}`;
  const mailtoHref = `${BUSINESS_INFO.emailHref}?subject=${encodeURIComponent(
    `Website Inquiry — ${BUSINESS_INFO.name}`
  )}&body=${encodeURIComponent(mailtoBody)}`;

  return (
    <div>
      <section className="py-16 sm:py-24 bg-[#1C2B43] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-medium tracking-wider text-[#C7A878]">
              Contact {BUSINESS_INFO.name}
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight">
              Let’s Talk About Your Space.
            </h1>
            <p className="text-base sm:text-lg text-[#FAF8F3]/85 leading-relaxed">
              Reach our Oklahoma City team by phone or email, check local coverage, or jump straight into our guided free estimate experience.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left column: Direct contact info + local coverage */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-[#1C2B43]/12 rounded-sm p-6 sm:p-8 space-y-6">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C2B43]">
                  {BUSINESS_INFO.name}
                </h2>
                <p className="text-sm text-[#343B43]/75 mt-1">
                  Family-Owned · Locally Operated in Oklahoma City
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#1C2B43]/10 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C7A878] shrink-0 mt-1" aria-hidden="true" />
                  <address className="not-italic text-[#343B43] leading-relaxed">
                    {BUSINESS_INFO.addressLine1}
                    <br />
                    {BUSINESS_INFO.addressLine2}
                    <br />
                    {BUSINESS_INFO.cityState}
                  </address>
                </div>

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
              </div>

              <div className="pt-4 border-t border-[#1C2B43]/10">
                <button
                  type="button"
                  onClick={() => onNavigate('estimate')}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#1C2B43] text-white text-sm font-medium rounded-sm hover:bg-[#1C2B43]/90 transition-colors cursor-pointer"
                >
                  <span>Use Guided 4-Step Estimate Request</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-2xl font-medium text-[#1C2B43]">
                Local Coverage Inquiry
              </h3>
              <ServiceAreaChecker onNavigate={onNavigate} variant="light" />
            </div>
          </div>

          {/* Right column: Simple Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#1C2B43]/12 rounded-sm p-6 sm:p-10">
              <div className="space-y-2 mb-6">
                <h2 className="font-serif text-3xl font-medium text-[#1C2B43]">
                  Send a Simple Message
                </h2>
                <p className="text-sm text-[#343B43]/80">
                  Have a quick question before requesting a full estimate? Share your note below.
                </p>
              </div>

              {demoPrepared ? (
                <div className="space-y-5">
                  <div className="bg-[#E7EFF3]/70 border border-[#1C2B43]/15 rounded-sm p-4 flex items-start gap-3">
                    <Info className="w-5 h-5 text-[#1C2B43] shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="text-sm text-[#1C2B43] leading-relaxed">
                      <strong className="font-semibold">Demonstration Notice:</strong> No backend mail server is connected to this redesign concept, so this form does not automatically transmit messages. Click below to open your prepared message directly in your email app or call our team.
                    </div>
                  </div>

                  <div className="bg-[#FAF8F3] border border-[#1C2B43]/10 rounded-sm p-5 text-sm text-[#343B43] whitespace-pre-line">
                    {mailtoBody}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={mailtoHref}
                      className="inline-flex items-center gap-2 px-5 py-3 bg-[#1C2B43] text-white text-sm font-medium rounded-sm hover:bg-[#1C2B43]/90 transition-colors"
                    >
                      <Mail className="w-4 h-4" aria-hidden="true" />
                      <span>Send via Email App</span>
                    </a>
                    <a
                      href={BUSINESS_INFO.phoneHref}
                      className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-[#1C2B43]/20 text-[#1C2B43] text-sm font-medium rounded-sm hover:border-[#1C2B43] transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#C7A878]" aria-hidden="true" />
                      <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setDemoPrepared(false)}
                      className="text-sm font-medium text-[#1C2B43] underline underline-offset-4 cursor-pointer"
                    >
                      Edit message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="c-name" className="block text-sm font-medium text-[#1C2B43] mb-1.5">
                        Full Name <span className="text-[#C7A878]">*</span>
                      </label>
                      <input
                        id="c-name"
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                        }}
                        placeholder="Your name"
                        className="w-full h-12 px-4 bg-white border border-[#1C2B43]/20 rounded-sm text-sm text-[#1C2B43]"
                      />
                      {errors.name && (
                        <p role="alert" className="text-xs text-red-700 mt-1.5">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="c-phone" className="block text-sm font-medium text-[#1C2B43] mb-1.5">
                        Phone <span className="text-[#343B43]/60 font-normal">(Optional)</span>
                      </label>
                      <input
                        id="c-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(405) 555-0199"
                        className="w-full h-12 px-4 bg-white border border-[#1C2B43]/20 rounded-sm text-sm text-[#1C2B43] tabular-nums"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="c-email" className="block text-sm font-medium text-[#1C2B43] mb-1.5">
                        Email Address <span className="text-[#C7A878]">*</span>
                      </label>
                      <input
                        id="c-email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
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
                      <label htmlFor="c-service" className="block text-sm font-medium text-[#1C2B43] mb-1.5">
                        Service Interest
                      </label>
                      <select
                        id="c-service"
                        value={service}
                        onChange={(e) => setService(e.target.value as ServiceSelection)}
                        className="w-full h-12 px-4 bg-white border border-[#1C2B43]/20 rounded-sm text-sm text-[#1C2B43]"
                      >
                        <option value="residential">Residential Cleaning</option>
                        <option value="commercial">Commercial Cleaning</option>
                        <option value="post-construction">Post-Construction Cleaning</option>
                        <option value="not-sure">Not Sure Yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="c-msg" className="block text-sm font-medium text-[#1C2B43] mb-1.5">
                      Message <span className="text-[#C7A878]">*</span>
                    </label>
                    <textarea
                      id="c-msg"
                      rows={5}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors((prev) => ({ ...prev, message: '' }));
                      }}
                      placeholder="How can Angel Cleaning LLC help with your home, office, or construction cleanup?"
                      className="w-full p-3.5 bg-white border border-[#1C2B43]/20 rounded-sm text-sm text-[#1C2B43]"
                    />
                    {errors.message && (
                      <p role="alert" className="text-xs text-red-700 mt-1.5">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1C2B43] text-white text-sm font-medium rounded-sm hover:bg-[#1C2B43]/90 transition-colors cursor-pointer"
                  >
                    <span>Prepare Contact Message</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

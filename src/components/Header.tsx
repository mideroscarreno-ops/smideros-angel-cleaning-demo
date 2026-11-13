import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import type { NavigateFn, PageRoute } from '../types/navigation';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: NavigateFn;
}

const SERVICE_SUBMENU: { label: string; route: PageRoute; description: string }[] = [
  {
    label: 'All Cleaning Services',
    route: 'services',
    description: 'Complete overview of residential, commercial, and post-construction care',
  },
  {
    label: 'Residential Cleaning',
    route: 'residential',
    description: 'Weekly, biweekly, monthly, and one-time home cleaning',
  },
  {
    label: 'Commercial Cleaning',
    route: 'commercial',
    description: 'Offices, showrooms, retail stores, banks, churches, dealerships',
  },
  {
    label: 'Post-Construction Cleaning',
    route: 'post-construction',
    description: 'Home renovations, new builds, commercial and restaurant remodels',
  },
];

export function Header({ currentRoute, onNavigate }: HeaderProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isServicesActive =
    currentRoute === 'services' ||
    currentRoute === 'residential' ||
    currentRoute === 'commercial' ||
    currentRoute === 'post-construction';

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [currentRoute]);

  const handleNav = (route: PageRoute) => {
    setServicesOpen(false);
    setMobileOpen(false);
    onNavigate(route);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#1C2B43]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: Single-line brand wordmark */}
        <button
          type="button"
          onClick={() => handleNav('home')}
          className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-[#1C2B43] whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
        >
          {BUSINESS_INFO.name}
        </button>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#343B43]"
        >
          <button
            type="button"
            onClick={() => handleNav('home')}
            className={`whitespace-nowrap shrink-0 py-1 border-b transition-colors cursor-pointer ${
              currentRoute === 'home'
                ? 'border-[#C7A878] text-[#1C2B43]'
                : 'border-transparent hover:border-[#C7A878]/60 hover:text-[#1C2B43]'
            }`}
          >
            Home
          </button>

          {/* Services dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((prev) => !prev)}
              className={`inline-flex items-center gap-1 whitespace-nowrap shrink-0 py-1 border-b transition-colors cursor-pointer ${
                isServicesActive
                  ? 'border-[#C7A878] text-[#1C2B43]'
                  : 'border-transparent hover:border-[#C7A878]/60 hover:text-[#1C2B43]'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${
                  servicesOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {servicesOpen && (
              <div
                role="menu"
                className="absolute left-0 top-full mt-3 w-80 bg-white border border-[#1C2B43]/12 shadow-lg rounded-md p-2 z-50"
              >
                {SERVICE_SUBMENU.map((item) => (
                  <button
                    key={item.route}
                    type="button"
                    role="menuitem"
                    onClick={() => handleNav(item.route)}
                    className={`w-full text-left px-3.5 py-2.5 rounded transition-colors cursor-pointer block ${
                      currentRoute === item.route
                        ? 'bg-[#E7EFF3]/60 text-[#1C2B43]'
                        : 'hover:bg-[#FAF8F3] text-[#343B43]'
                    }`}
                  >
                    <div className="text-sm font-medium text-[#1C2B43]">{item.label}</div>
                    <div className="text-xs text-[#343B43]/75 mt-0.5 leading-snug">
                      {item.description}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => handleNav('about')}
            className={`whitespace-nowrap shrink-0 py-1 border-b transition-colors cursor-pointer ${
              currentRoute === 'about' || currentRoute === 'approach'
                ? 'border-[#C7A878] text-[#1C2B43]'
                : 'border-transparent hover:border-[#C7A878]/60 hover:text-[#1C2B43]'
            }`}
          >
            About
          </button>

          <button
            type="button"
            onClick={() => handleNav('service-areas')}
            className={`whitespace-nowrap shrink-0 py-1 border-b transition-colors cursor-pointer ${
              currentRoute === 'service-areas'
                ? 'border-[#C7A878] text-[#1C2B43]'
                : 'border-transparent hover:border-[#C7A878]/60 hover:text-[#1C2B43]'
            }`}
          >
            Service Areas
          </button>

          <button
            type="button"
            onClick={() => handleNav('faqs')}
            className={`whitespace-nowrap shrink-0 py-1 border-b transition-colors cursor-pointer ${
              currentRoute === 'faqs'
                ? 'border-[#C7A878] text-[#1C2B43]'
                : 'border-transparent hover:border-[#C7A878]/60 hover:text-[#1C2B43]'
            }`}
          >
            FAQs
          </button>

          <button
            type="button"
            onClick={() => handleNav('contact')}
            className={`whitespace-nowrap shrink-0 py-1 border-b transition-colors cursor-pointer ${
              currentRoute === 'contact'
                ? 'border-[#C7A878] text-[#1C2B43]'
                : 'border-transparent hover:border-[#C7A878]/60 hover:text-[#1C2B43]'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleNav('estimate')}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-medium text-white bg-[#1C2B43] rounded-sm hover:bg-[#1C2B43]/90 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Get a Free Estimate
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-sm border border-[#1C2B43]/15 text-[#1C2B43] hover:bg-white transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#FAF8F3] border-t border-[#1C2B43]/10 px-4 py-6 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav aria-label="Mobile Navigation" className="space-y-1">
            <button
              type="button"
              onClick={() => handleNav('home')}
              className="w-full text-left px-3 py-3 text-base font-medium text-[#1C2B43] hover:bg-white rounded-sm transition-colors cursor-pointer"
            >
              Home
            </button>

            <div className="pt-2 pb-2 border-y border-[#1C2B43]/10">
              <div className="px-3 py-1.5 text-xs font-medium tracking-wider text-[#343B43]/70">
                Services
              </div>
              {SERVICE_SUBMENU.map((item) => (
                <button
                  key={item.route}
                  type="button"
                  onClick={() => handleNav(item.route)}
                  className="w-full text-left px-3 py-2.5 text-base text-[#1C2B43] hover:bg-white rounded-sm transition-colors cursor-pointer block"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => handleNav('about')}
              className="w-full text-left px-3 py-3 text-base font-medium text-[#1C2B43] hover:bg-white rounded-sm transition-colors cursor-pointer"
            >
              About Angel Cleaning
            </button>

            <button
              type="button"
              onClick={() => handleNav('approach')}
              className="w-full text-left px-3 py-3 text-base font-medium text-[#1C2B43] hover:bg-white rounded-sm transition-colors cursor-pointer"
            >
              Our Approach
            </button>

            <button
              type="button"
              onClick={() => handleNav('service-areas')}
              className="w-full text-left px-3 py-3 text-base font-medium text-[#1C2B43] hover:bg-white rounded-sm transition-colors cursor-pointer"
            >
              Service Areas
            </button>

            <button
              type="button"
              onClick={() => handleNav('faqs')}
              className="w-full text-left px-3 py-3 text-base font-medium text-[#1C2B43] hover:bg-white rounded-sm transition-colors cursor-pointer"
            >
              FAQs
            </button>

            <button
              type="button"
              onClick={() => handleNav('contact')}
              className="w-full text-left px-3 py-3 text-base font-medium text-[#1C2B43] hover:bg-white rounded-sm transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          <div className="mt-6 pt-5 border-t border-[#1C2B43]/10 space-y-3">
            <button
              type="button"
              onClick={() => handleNav('estimate')}
              className="w-full py-3.5 px-5 text-sm font-medium text-white bg-[#1C2B43] rounded-sm text-center cursor-pointer"
            >
              Get a Free Estimate
            </button>
            <a
              href={BUSINESS_INFO.phoneHref}
              className="w-full py-3.5 px-5 text-sm font-medium text-[#1C2B43] bg-white border border-[#1C2B43]/15 rounded-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

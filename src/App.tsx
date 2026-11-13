import { useCallback, useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AboutPage } from './pages/AboutPage';
import { ApproachPage } from './pages/ApproachPage';
import { ContactPage } from './pages/ContactPage';
import { EstimatePage } from './pages/EstimatePage';
import { FaqsPage } from './pages/FaqsPage';
import { HomePage } from './pages/HomePage';
import { ServiceAreasPage } from './pages/ServiceAreasPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ServicesOverviewPage } from './pages/ServicesOverviewPage';
import type { NavigateOptions, PageRoute, ServiceSelection } from './types/navigation';

const VALID_ROUTES: PageRoute[] = [
  'home',
  'services',
  'residential',
  'commercial',
  'post-construction',
  'about',
  'approach',
  'service-areas',
  'faqs',
  'estimate',
  'contact',
];

function getRouteFromHash(): PageRoute {
  const raw = window.location.hash.replace(/^#\/?/, '').trim() as PageRoute;
  return VALID_ROUTES.includes(raw) ? raw : 'home';
}

export default function App() {
  const [route, setRoute] = useState<PageRoute>(() => getRouteFromHash());
  const [preselectedService, setPreselectedService] = useState<ServiceSelection>('residential');
  const [prefilledLocation, setPrefilledLocation] = useState<string>('');

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRouteFromHash());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((nextRoute: PageRoute, options?: NavigateOptions) => {
    if (options?.preselectedService) {
      setPreselectedService(options.preselectedService);
    }
    if (options?.prefilledLocation !== undefined) {
      setPrefilledLocation(options.prefilledLocation);
    }
    const targetHash = nextRoute === 'home' ? '#home' : `#${nextRoute}`;
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setRoute(nextRoute);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F3] text-[#343B43] overflow-x-clip">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-[#1C2B43] focus:text-white focus:rounded-sm"
      >
        Skip to main content
      </a>

      <Header currentRoute={route} onNavigate={navigate} />

      <main id="main-content" className="flex-1">
        {route === 'home' && <HomePage onNavigate={navigate} />}
        {route === 'services' && <ServicesOverviewPage onNavigate={navigate} />}
        {route === 'residential' && (
          <ServiceDetailPage serviceType="residential" onNavigate={navigate} />
        )}
        {route === 'commercial' && (
          <ServiceDetailPage serviceType="commercial" onNavigate={navigate} />
        )}
        {route === 'post-construction' && (
          <ServiceDetailPage serviceType="post-construction" onNavigate={navigate} />
        )}
        {route === 'about' && <AboutPage onNavigate={navigate} />}
        {route === 'approach' && <ApproachPage onNavigate={navigate} />}
        {route === 'service-areas' && <ServiceAreasPage onNavigate={navigate} />}
        {route === 'faqs' && <FaqsPage onNavigate={navigate} />}
        {route === 'estimate' && (
          <EstimatePage
            initialService={preselectedService}
            initialLocation={prefilledLocation}
          />
        )}
        {route === 'contact' && <ContactPage onNavigate={navigate} />}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}

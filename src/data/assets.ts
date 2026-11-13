export interface SiteImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export const SITE_IMAGES: Record<
  'hero' | 'residential' | 'commercial' | 'postConstruction' | 'calmLiving',
  SiteImageAsset
> = {
  hero: {
    src: '/images/hero-sunlit-interior.webp',
    alt: 'Sunlit modern Oklahoma City residence with wide-plank oak floors, marble kitchen island, and calm uncluttered living room',
    width: 1376,
    height: 768,
  },
  residential: {
    src: '/images/residential-kitchen.webp',
    alt: 'Spotlessly maintained contemporary kitchen and sunny breakfast nook with honed stone countertops and folded linen towel',
    width: 1200,
    height: 896,
  },
  commercial: {
    src: '/images/commercial-office.webp',
    alt: 'Clean modern commercial office lobby and glass-walled conference room with polished stone flooring and neatly arranged seating',
    width: 1200,
    height: 896,
  },
  postConstruction: {
    src: '/images/post-construction.webp',
    alt: 'Newly renovated residential interior ready for reveal, featuring dust-free oak flooring, custom cabinetry, and sunlit glass doors',
    width: 1200,
    height: 896,
  },
  calmLiving: {
    src: '/images/calm-living-bedroom.webp',
    alt: 'Serene sunlit primary bedroom and linen reading chair casting soft morning window shadows across smooth plaster walls',
    width: 896,
    height: 1200,
  },
};

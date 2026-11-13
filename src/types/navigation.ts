export type PageRoute =
  | 'home'
  | 'services'
  | 'residential'
  | 'commercial'
  | 'post-construction'
  | 'about'
  | 'approach'
  | 'service-areas'
  | 'faqs'
  | 'estimate'
  | 'contact';

export type ServiceSelection =
  | 'residential'
  | 'commercial'
  | 'post-construction'
  | 'not-sure';

export interface NavigateOptions {
  preselectedService?: ServiceSelection;
  prefilledLocation?: string;
}

export type NavigateFn = (route: PageRoute, options?: NavigateOptions) => void;

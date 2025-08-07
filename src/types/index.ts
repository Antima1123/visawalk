// Main types export file

export * from './visa';
export * from './form';
export * from './api';

// Common utility types
export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  icon?: string;
  children?: NavItem[];
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
    linkedin: string;
  };
}

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

// Component prop types
export interface ComponentWithChildren {
  children: React.ReactNode;
}

export interface ComponentWithClassName {
  className?: string;
}

export interface LoadingState {
  isLoading: boolean;
  error?: string | null;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
}

export interface FilterProps {
  filters: Record<string, any>;
  onFilterChange: (filters: Record<string, any>) => void;
  onClearFilters: () => void;
}

export interface SearchProps {
  query: string;
  onSearch: (query: string) => void;
  placeholder?: string;
  debounceMs?: number;
}

// Animation and transition types
export interface AnimationConfig {
  duration: number;
  easing: string;
  delay?: number;
}

export interface TransitionProps {
  show: boolean;
  enter?: string;
  enterFrom?: string;
  enterTo?: string;
  leave?: string;
  leaveFrom?: string;
  leaveTo?: string;
}

// Theme and styling types
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
  muted: string;
  border: string;
  input: string;
  ring: string;
  success: string;
  warning: string;
  error: string;
  info: string;
}

export interface BreakpointConfig {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

// Event handler types
export type EventHandler<T = any> = (event: T) => void;
export type ChangeHandler<T = any> = (value: T) => void;
export type SubmitHandler<T = any> = (data: T) => void | Promise<void>;

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

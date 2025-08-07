// Visa-related types and interfaces

export type VisaType = 'tourist' | 'business' | 'student' | 'work' | 'transit';

export type Country = 'canada' | 'australia' | 'uk' | 'germany';

export interface CountryInfo {
  code: Country;
  name: string;
  flag: string;
  currency: string;
  processingTime: string;
  requirements: string[];
  visaTypes: VisaType[];
}

export interface VisaService {
  id: string;
  country: Country;
  type: VisaType;
  title: string;
  description: string;
  price: number;
  processingTime: string;
  requirements: string[];
  features: string[];
  popular?: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  services: VisaService[];
}

export interface PricingTier {
  id: string;
  name: 'basic' | 'premium' | 'enterprise';
  title: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
  estimatedTime: string;
  status?: 'pending' | 'in-progress' | 'completed';
}

export interface Document {
  id: string;
  name: string;
  required: boolean;
  description: string;
  format: string[];
  maxSize: string;
  example?: string;
}

export interface DocumentChecklist {
  country: Country;
  visaType: VisaType;
  documents: Document[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  country: Country;
  visaType: VisaType;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
  verified: boolean;
}

export interface VideoTestimonial {
  id: string;
  name: string;
  country: Country;
  visaType: VisaType;
  videoUrl: string;
  thumbnail: string;
  duration: string;
  title: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  country: Country;
  visaType: VisaType;
  challenge: string;
  solution: string;
  result: string;
  timeline: string;
  image?: string;
}

export interface CompanyStats {
  totalApplications: number;
  successRate: number;
  countriesServed: number;
  yearsExperience: number;
  clientSatisfaction: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  experience: string;
  specialization: Country[];
  linkedin?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
}

export interface OfficeLocation {
  id: string;
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  workingHours: string;
}

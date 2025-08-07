// Application constants

import { Country, VisaType, CountryInfo, PricingTier } from '@/types';

// Supported countries
export const COUNTRIES: Record<Country, CountryInfo> = {
  canada: {
    code: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    currency: 'CAD',
    processingTime: '2-4 weeks',
    requirements: [
      'Valid passport',
      'Completed application form',
      'Passport-sized photographs',
      'Proof of financial support',
      'Travel itinerary',
      'Letter of invitation (if applicable)'
    ],
    visaTypes: ['tourist', 'business', 'student', 'work']
  },
  australia: {
    code: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    currency: 'AUD',
    processingTime: '1-3 weeks',
    requirements: [
      'Valid passport',
      'Completed application form',
      'Passport-sized photographs',
      'Health insurance',
      'Proof of financial capacity',
      'Character documents'
    ],
    visaTypes: ['tourist', 'business', 'student', 'work']
  },
  uk: {
    code: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    currency: 'GBP',
    processingTime: '3-6 weeks',
    requirements: [
      'Valid passport',
      'Completed application form',
      'Passport-sized photographs',
      'Financial documents',
      'Accommodation proof',
      'Travel insurance'
    ],
    visaTypes: ['tourist', 'business', 'student', 'work']
  },
  germany: {
    code: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    currency: 'EUR',
    processingTime: '2-4 weeks',
    requirements: [
      'Valid passport',
      'Completed application form',
      'Passport-sized photographs',
      'Travel insurance',
      'Proof of accommodation',
      'Financial statements'
    ],
    visaTypes: ['tourist', 'business', 'student', 'work']
  }
};

// Visa types
export const VISA_TYPES: Record<VisaType, { name: string; description: string; icon: string }> = {
  tourist: {
    name: 'Tourist Visa',
    description: 'For leisure travel and sightseeing',
    icon: '🏖️'
  },
  business: {
    name: 'Business Visa',
    description: 'For business meetings and conferences',
    icon: '💼'
  },
  student: {
    name: 'Student Visa',
    description: 'For educational purposes and studies',
    icon: '🎓'
  },
  work: {
    name: 'Work Visa',
    description: 'For employment and work opportunities',
    icon: '💼'
  },
  transit: {
    name: 'Transit Visa',
    description: 'For passing through the country',
    icon: '✈️'
  }
};

// Pricing tiers
export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'basic',
    name: 'basic',
    title: 'Basic Package',
    price: 99,
    description: 'Essential visa processing services',
    features: [
      'Application form assistance',
      'Document checklist',
      'Basic review',
      'Email support',
      'Standard processing time'
    ],
    buttonText: 'Get Started'
  },
  {
    id: 'premium',
    name: 'premium',
    title: 'Premium Package',
    price: 199,
    description: 'Comprehensive visa services with priority support',
    features: [
      'Everything in Basic',
      'Priority processing',
      'Document preparation',
      'Phone support',
      'Application tracking',
      'Interview preparation'
    ],
    popular: true,
    buttonText: 'Most Popular'
  },
  {
    id: 'enterprise',
    name: 'enterprise',
    title: 'Enterprise Package',
    price: 399,
    description: 'Full-service visa solution with dedicated support',
    features: [
      'Everything in Premium',
      'Dedicated visa consultant',
      'Express processing',
      '24/7 support',
      'Document pickup/delivery',
      'Multiple applications discount'
    ],
    buttonText: 'Contact Sales'
  }
];

// Application steps
export const APPLICATION_STEPS = [
  {
    id: 1,
    title: 'Personal Details',
    description: 'Basic information and passport details',
    icon: '👤'
  },
  {
    id: 2,
    title: 'Travel Information',
    description: 'Destination, dates, and purpose of visit',
    icon: '✈️'
  },
  {
    id: 3,
    title: 'Document Upload',
    description: 'Upload required documents and photos',
    icon: '📄'
  },
  {
    id: 4,
    title: 'Payment',
    description: 'Review and complete payment',
    icon: '💳'
  }
];

// Process timeline steps
export const PROCESS_STEPS = [
  {
    id: '1',
    step: 1,
    title: 'Document Submission',
    description: 'Submit your application and required documents through our secure portal',
    icon: '📋',
    estimatedTime: '1-2 days'
  },
  {
    id: '2',
    step: 2,
    title: 'Verification',
    description: 'Our experts review and verify all submitted documents for completeness',
    icon: '🔍',
    estimatedTime: '2-3 days'
  },
  {
    id: '3',
    step: 3,
    title: 'Embassy Processing',
    description: 'Your application is submitted to the embassy for official processing',
    icon: '🏛️',
    estimatedTime: '1-4 weeks'
  },
  {
    id: '4',
    step: 4,
    title: 'Delivery',
    description: 'Receive your processed visa through secure delivery or pickup',
    icon: '📦',
    estimatedTime: '1-2 days'
  }
];

// Contact form priorities
export const CONTACT_PRIORITIES = [
  { value: 'low', label: 'Low Priority' },
  { value: 'medium', label: 'Medium Priority' },
  { value: 'high', label: 'High Priority' },
  { value: 'urgent', label: 'Urgent' }
];

// Contact form departments
export const CONTACT_DEPARTMENTS = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'support', label: 'Technical Support' },
  { value: 'sales', label: 'Sales' },
  { value: 'technical', label: 'Technical Issues' }
];

// Company statistics
export const COMPANY_STATS = {
  totalApplications: 50000,
  successRate: 98.5,
  countriesServed: 4,
  yearsExperience: 15,
  clientSatisfaction: 4.9
};

// Navigation items
export const NAV_ITEMS = [
  { title: 'Home', href: '/' },
  { title: 'Services', href: '/services' },
  { title: 'Process', href: '/process' },
  { title: 'About Us', href: '/about' },
  { title: 'Testimonials', href: '/testimonials' },
  { title: 'Contact', href: '/contact' }
];

// File upload constraints
export const FILE_UPLOAD = {
  maxSize: 5 * 1024 * 1024, // 5MB
  allowedTypes: [
    'image/jpeg',
    'image/png',
    'image/webp',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ],
  allowedExtensions: ['.jpg', '.jpeg', '.png', '.webp', '.pdf', '.doc', '.docx']
};

// API endpoints
export const API_ENDPOINTS = {
  applications: '/api/applications',
  contact: '/api/contact',
  upload: '/api/upload',
  testimonials: '/api/testimonials',
  services: '/api/services',
  newsletter: '/api/newsletter'
};

// Social media links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/visawalk',
  twitter: 'https://twitter.com/visawalk',
  linkedin: 'https://linkedin.com/company/visawalk',
  instagram: 'https://instagram.com/visawalk'
};

// Form-related types and interfaces

import { Country, VisaType } from './visa';

export interface PersonalDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  nationality: string;
  passportNumber: string;
  passportExpiry: string;
  maritalStatus: 'single' | 'married' | 'divorced' | 'widowed';
  occupation: string;
  employer?: string;
}

export interface TravelInformation {
  destinationCountry: Country;
  visaType: VisaType;
  purposeOfVisit: string;
  intendedArrival: string;
  intendedDeparture: string;
  durationOfStay: number;
  previousVisits: boolean;
  previousVisitDetails?: string;
  accommodationAddress?: string;
  invitationLetter?: boolean;
}

export interface UploadedDocument {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
  uploadedAt: string;
  status: 'pending' | 'approved' | 'rejected';
  rejectionReason?: string;
}

export interface DocumentUpload {
  documents: UploadedDocument[];
  additionalNotes?: string;
}

export interface PaymentInformation {
  servicePackage: 'basic' | 'premium' | 'enterprise';
  amount: number;
  currency: string;
  paymentMethod: 'card' | 'bank_transfer' | 'paypal';
  billingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

export interface ApplicationForm {
  id?: string;
  personalDetails: PersonalDetails;
  travelInformation: TravelInformation;
  documentUpload: DocumentUpload;
  paymentInformation: PaymentInformation;
  currentStep: number;
  status: 'draft' | 'submitted' | 'under_review' | 'approved' | 'rejected';
  createdAt?: string;
  updatedAt?: string;
  submittedAt?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  department: 'general' | 'support' | 'sales' | 'technical';
  country?: Country;
  visaType?: VisaType;
}

export interface PopupForm {
  email: string;
  phone?: string;
  interestedCountry: Country;
  visaType?: VisaType;
  source: string;
}

export interface NewsletterForm {
  email: string;
  firstName?: string;
  interests: Country[];
}

export interface FormValidationError {
  field: string;
  message: string;
}

export interface FormState<T> {
  data: T;
  errors: FormValidationError[];
  isSubmitting: boolean;
  isValid: boolean;
  isDirty: boolean;
}

export interface StepperProps {
  currentStep: number;
  totalSteps: number;
  steps: {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
  }[];
}

// Form validation schemas (to be used with Zod)
export interface ValidationSchema {
  personalDetails: any;
  travelInformation: any;
  documentUpload: any;
  paymentInformation: any;
  contactForm: any;
  popupForm: any;
}

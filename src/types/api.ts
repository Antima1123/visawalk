// API-related types and interfaces

import { ApplicationForm, ContactForm, PopupForm } from './form';
import { Testimonial, VisaService, FAQ, CaseStudy } from './visa';

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  errors?: Record<string, string[]>;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Application API
export interface SubmitApplicationRequest {
  application: ApplicationForm;
}

export interface SubmitApplicationResponse extends ApiResponse {
  data: {
    applicationId: string;
    referenceNumber: string;
    status: string;
    estimatedProcessingTime: string;
  };
}

export interface GetApplicationStatusRequest {
  applicationId: string;
  referenceNumber?: string;
}

export interface GetApplicationStatusResponse extends ApiResponse {
  data: {
    applicationId: string;
    referenceNumber: string;
    status: 'draft' | 'submitted' | 'under_review' | 'approved' | 'rejected';
    currentStep: string;
    progress: number;
    lastUpdated: string;
    estimatedCompletion?: string;
    notes?: string;
  };
}

// Contact API
export interface SubmitContactFormRequest {
  form: ContactForm;
}

export interface SubmitContactFormResponse extends ApiResponse {
  data: {
    ticketId: string;
    estimatedResponse: string;
  };
}

// Popup Form API
export interface SubmitPopupFormRequest {
  form: PopupForm;
}

export interface SubmitPopupFormResponse extends ApiResponse {
  data: {
    leadId: string;
    followUpScheduled: boolean;
  };
}

// Services API
export interface GetServicesRequest {
  country?: string;
  visaType?: string;
  priceRange?: {
    min: number;
    max: number;
  };
}

export interface GetServicesResponse extends ApiResponse {
  data: VisaService[];
}

// Testimonials API
export interface GetTestimonialsRequest {
  country?: string;
  visaType?: string;
  rating?: number;
  page?: number;
  limit?: number;
}

export interface GetTestimonialsResponse extends PaginatedResponse<Testimonial> {}

// FAQ API
export interface GetFAQsRequest {
  category?: string;
  search?: string;
  popular?: boolean;
}

export interface GetFAQsResponse extends ApiResponse {
  data: FAQ[];
}

// Case Studies API
export interface GetCaseStudiesRequest {
  country?: string;
  visaType?: string;
  page?: number;
  limit?: number;
}

export interface GetCaseStudiesResponse extends PaginatedResponse<CaseStudy> {}

// File Upload API
export interface UploadFileRequest {
  file: File;
  documentType: string;
  applicationId?: string;
}

export interface UploadFileResponse extends ApiResponse {
  data: {
    fileId: string;
    fileName: string;
    fileUrl: string;
    fileSize: number;
    uploadedAt: string;
  };
}

// Newsletter API
export interface SubscribeNewsletterRequest {
  email: string;
  firstName?: string;
  interests: string[];
}

export interface SubscribeNewsletterResponse extends ApiResponse {
  data: {
    subscriptionId: string;
    confirmationRequired: boolean;
  };
}

// Chat API
export interface SendChatMessageRequest {
  message: string;
  sessionId?: string;
  userId?: string;
}

export interface SendChatMessageResponse extends ApiResponse {
  data: {
    messageId: string;
    response: string;
    sessionId: string;
    timestamp: string;
  };
}

// Analytics API
export interface TrackEventRequest {
  event: string;
  properties?: Record<string, any>;
  userId?: string;
  sessionId?: string;
}

export interface TrackEventResponse extends ApiResponse {}

// Error types
export interface ApiError {
  code: string;
  message: string;
  details?: any;
}

export interface ValidationError {
  field: string;
  code: string;
  message: string;
}

// Request/Response interceptor types
export interface RequestConfig {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  params?: Record<string, any>;
  data?: any;
  timeout?: number;
}

export interface ResponseConfig<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

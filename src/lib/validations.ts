// Validation schemas using Zod

import { z } from 'zod';

// Personal Details Schema
export const personalDetailsSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  nationality: z.string().min(1, 'Nationality is required'),
  passportNumber: z.string().min(6, 'Passport number must be at least 6 characters'),
  passportExpiry: z.string().min(1, 'Passport expiry date is required'),
  maritalStatus: z.enum(['single', 'married', 'divorced', 'widowed']),
  occupation: z.string().min(2, 'Occupation is required'),
  employer: z.string().optional()
});

// Travel Information Schema
export const travelInformationSchema = z.object({
  destinationCountry: z.enum(['canada', 'australia', 'uk', 'germany']),
  visaType: z.enum(['tourist', 'business', 'student', 'work', 'transit']),
  purposeOfVisit: z.string().min(10, 'Purpose of visit must be at least 10 characters'),
  intendedArrival: z.string().min(1, 'Intended arrival date is required'),
  intendedDeparture: z.string().min(1, 'Intended departure date is required'),
  durationOfStay: z.number().min(1, 'Duration of stay must be at least 1 day'),
  previousVisits: z.boolean(),
  previousVisitDetails: z.string().optional(),
  accommodationAddress: z.string().optional(),
  invitationLetter: z.boolean().optional()
});

// Document Upload Schema
export const documentUploadSchema = z.object({
  documents: z.array(z.object({
    id: z.string(),
    name: z.string(),
    type: z.string(),
    size: z.number(),
    url: z.string(),
    uploadedAt: z.string(),
    status: z.enum(['pending', 'approved', 'rejected']),
    rejectionReason: z.string().optional()
  })).min(1, 'At least one document is required'),
  additionalNotes: z.string().optional()
});

// Payment Information Schema
export const paymentInformationSchema = z.object({
  servicePackage: z.enum(['basic', 'premium', 'enterprise']),
  amount: z.number().min(1, 'Amount must be greater than 0'),
  currency: z.string().min(3, 'Currency is required'),
  paymentMethod: z.enum(['card', 'bank_transfer', 'paypal']),
  billingAddress: z.object({
    street: z.string().min(5, 'Street address is required'),
    city: z.string().min(2, 'City is required'),
    state: z.string().min(2, 'State is required'),
    zipCode: z.string().min(3, 'ZIP code is required'),
    country: z.string().min(2, 'Country is required')
  })
});

// Complete Application Form Schema
export const applicationFormSchema = z.object({
  personalDetails: personalDetailsSchema,
  travelInformation: travelInformationSchema,
  documentUpload: documentUploadSchema,
  paymentInformation: paymentInformationSchema,
  currentStep: z.number().min(1).max(4),
  status: z.enum(['draft', 'submitted', 'under_review', 'approved', 'rejected'])
});

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
  priority: z.enum(['low', 'medium', 'high', 'urgent']),
  department: z.enum(['general', 'support', 'sales', 'technical']),
  country: z.enum(['canada', 'australia', 'uk', 'germany']).optional(),
  visaType: z.enum(['tourist', 'business', 'student', 'work', 'transit']).optional()
});

// Popup Form Schema
export const popupFormSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  interestedCountry: z.enum(['canada', 'australia', 'uk', 'germany']),
  visaType: z.enum(['tourist', 'business', 'student', 'work', 'transit']).optional(),
  source: z.string().min(1, 'Source is required')
});

// Newsletter Form Schema
export const newsletterFormSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  firstName: z.string().optional(),
  interests: z.array(z.enum(['canada', 'australia', 'uk', 'germany'])).min(1, 'Please select at least one country')
});

// File Upload Schema
export const fileUploadSchema = z.object({
  file: z.instanceof(File),
  documentType: z.string().min(1, 'Document type is required'),
  applicationId: z.string().optional()
}).refine((data) => {
  const allowedTypes = [
    'image/jpeg',
    'image/png', 
    'image/webp',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];
  return allowedTypes.includes(data.file.type);
}, {
  message: 'File type not supported. Please upload JPG, PNG, WebP, PDF, DOC, or DOCX files.'
}).refine((data) => {
  const maxSize = 5 * 1024 * 1024; // 5MB
  return data.file.size <= maxSize;
}, {
  message: 'File size must be less than 5MB.'
});

// Search Schema
export const searchSchema = z.object({
  query: z.string().min(1, 'Search query is required'),
  filters: z.object({
    country: z.enum(['canada', 'australia', 'uk', 'germany']).optional(),
    visaType: z.enum(['tourist', 'business', 'student', 'work', 'transit']).optional(),
    priceRange: z.object({
      min: z.number().min(0),
      max: z.number().min(0)
    }).optional()
  }).optional()
});

// Review/Testimonial Schema
export const testimonialSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  country: z.enum(['canada', 'australia', 'uk', 'germany']),
  visaType: z.enum(['tourist', 'business', 'student', 'work', 'transit']),
  rating: z.number().min(1, 'Rating must be at least 1').max(5, 'Rating cannot exceed 5'),
  comment: z.string().min(20, 'Comment must be at least 20 characters'),
  verified: z.boolean().default(false)
});

// Chat Message Schema
export const chatMessageSchema = z.object({
  message: z.string().min(1, 'Message cannot be empty').max(1000, 'Message too long'),
  sessionId: z.string().optional(),
  userId: z.string().optional()
});

// Validation helper functions
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
  return phoneRegex.test(phone);
};

export const validatePassport = (passport: string): boolean => {
  const passportRegex = /^[A-Z0-9]{6,9}$/;
  return passportRegex.test(passport.toUpperCase());
};

export const validateDate = (date: string): boolean => {
  const dateObj = new Date(date);
  return dateObj instanceof Date && !isNaN(dateObj.getTime());
};

export const validateFutureDate = (date: string): boolean => {
  const dateObj = new Date(date);
  const today = new Date();
  return dateObj > today;
};

export const validateAge = (dateOfBirth: string, minAge: number = 18): boolean => {
  const birthDate = new Date(dateOfBirth);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1 >= minAge;
  }
  
  return age >= minAge;
};

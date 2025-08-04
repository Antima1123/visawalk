// Base required fields for any destination
export interface BaseDestination {
  id: string
  name: string
  slug: string
  country: string
  continent: string
}

// Optional card display data
export interface CardData {
  image?: string
  visaCount?: string
  visaInfo?: string
  date?: string
  time?: string
  trending?: boolean
  rating?: number
  reviewCount?: number
}

// Basic location information
export interface LocationInfo {
  capital?: string
  currency?: string
  language?: string
  population?: string
}

// Visa processing details
export interface VisaDetails {
  visaType?: string
  processingTime?: string
  validity?: string
  stayDuration?: string
  entryType?: string
  method?: string
  guaranteedDays?: number
}

// Pricing information for sidebar
export interface PricingInfo {
  governmentFee?: number
  atlysFee?: number
  totalAmount?: number
  currency?: string
  freeAtlysFeesUntilVisa?: boolean
}

// Detailed page content
export interface PageContent {
  heroImage?: string
  description?: string
  requirements?: string[]
  documents?: string[]
  faqs?: Array<{
    question: string
    answer: string
  }>
  // Special sections for specific countries
  emirates?: Array<{
    name: string
    image: string
    description: string
  }>
  states?: Array<{
    name: string
    image: string
    description: string
  }>
}

// Complete destination type (composition of all interfaces)
export interface Destination extends BaseDestination {
  // Optional sections
  card?: CardData
  location?: LocationInfo
  visa?: VisaDetails
  pricing?: PricingInfo
  content?: PageContent
}

export type CategoryKey = "all" | "instant" | "week" | "month"

// Helper functions for type safety
export const hasCardData = (destination: Destination): destination is Destination & { card: CardData } => {
  return destination.card !== undefined
}

export const hasPricingInfo = (destination: Destination): destination is Destination & { pricing: PricingInfo } => {
  return destination.pricing !== undefined
}

export const hasVisaDetails = (destination: Destination): destination is Destination & { visa: VisaDetails } => {
  return destination.visa !== undefined
}

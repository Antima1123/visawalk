import { CategoryKey, Destination } from "../types/destination-types"

export const destinationData: Record<CategoryKey, Destination[]> = {
  all: [
    {
      id: "1",
      name: "United Arab Emirates",
      slug: "united-arab-emirates",
      country: "United Arab Emirates",
      continent: "Asia",
      card: {
        image: "/placeholder.svg?height=300&width=400",
        visaCount: "53K+ Visas on Time",
        date: "06 Aug",
        time: "09:36 AM",
        rating: 4.7,
        reviewCount: 1250,
      },
      location: {
        capital: "Abu Dhabi",
        currency: "AED",
        language: "Arabic, English",
        population: "9.9 million",
      },
      visa: {
        visaType: "E-Visa",
        processingTime: "2 days",
        validity: "60 days",
        stayDuration: "30 days",
        entryType: "Single",
        method: "Paperless",
        guaranteedDays: 2,
      },
      pricing: {
        governmentFee: 6250,
        atlysFee: 1000,
        totalAmount: 6250,
        currency: "INR",
        freeAtlysFeesUntilVisa: true,
      },
      content: {
        heroImage: "/placeholder.svg?height=600&width=1200",
        description: "Experience the luxury and innovation of the UAE with guaranteed visa processing in just 2 days.",
        requirements: [
          "Passport valid for at least 6 months",
          "Recent passport-size photograph",
          "Confirmed return flight tickets",
          "Hotel booking confirmation",
        ],
        documents: ["Passport copy", "Photograph", "Flight itinerary", "Hotel reservation"],
        faqs: [
          {
            question: "How long does it take to process a UAE visa?",
            answer: "UAE visa processing typically takes 2-3 working days with our guaranteed service.",
          },
          {
            question: "What is the validity of a UAE tourist visa?",
            answer: "The UAE tourist visa is valid for 60 days from the date of issue.",
          },
        ],
        emirates: [
          {
            name: "Dubai",
            image: "/placeholder.svg?height=200&width=300",
            description: "The most populous city and business hub of UAE",
          },
          {
            name: "Abu Dhabi",
            image: "/placeholder.svg?height=200&width=300",
            description: "The capital and largest emirate of UAE",
          },
          {
            name: "Sharjah",
            image: "/placeholder.svg?height=200&width=300",
            description: "Known as the cultural capital of UAE",
          },
        ],
      },
    },
    {
      id: "2",
      name: "Thailand",
      slug: "thailand",
      country: "Thailand",
      continent: "Asia",
      card: {
        image: "/placeholder.svg?height=300&width=400",
        visaCount: "32K+ Visas on Time",
        date: "03 Aug",
        time: "04:20 PM",
        rating: 4.5,
        reviewCount: 980,
      },
      location: {
        capital: "Bangkok",
        currency: "THB",
        language: "Thai, English",
        population: "69.8 million",
      },
      visa: {
        visaType: "Tourist Visa",
        processingTime: "3 days",
        validity: "90 days",
        stayDuration: "60 days",
        entryType: "Multiple",
        method: "Online",
        guaranteedDays: 3,
      },
      pricing: {
        governmentFee: 2500,
        atlysFee: 800,
        totalAmount: 2500,
        currency: "INR",
        freeAtlysFeesUntilVisa: true,
      },
      content: {
        heroImage: "/placeholder.svg?height=600&width=1200",
        description: "Discover the Land of Smiles with easy visa processing and guaranteed approval.",
        requirements: [
          "Passport valid for at least 6 months",
          "Bank statement showing sufficient funds",
          "Travel itinerary",
          "Accommodation proof",
        ],
        documents: ["Passport copy", "Bank statement", "Flight booking", "Hotel confirmation"],
        faqs: [
          {
            question: "Do I need a visa for Thailand?",
            answer: "Most nationalities require a visa to enter Thailand for tourism purposes.",
          },
        ],
      },
    },
    {
      id: "3",
      name: "Vietnam",
      slug: "vietnam",
      country: "Vietnam",
      continent: "Asia",
      card: {
        image: "/placeholder.svg?height=300&width=400",
        visaCount: "27K+ Visas on Time",
        date: "07 Aug",
        time: "09:02 PM",
        rating: 4.3,
        reviewCount: 750,
      },
      location: {
        capital: "Hanoi",
        currency: "VND",
        language: "Vietnamese, English",
        population: "97.3 million",
      },
      visa: {
        visaType: "E-Visa",
        processingTime: "3 days",
        validity: "30 days",
        stayDuration: "30 days",
        entryType: "Single",
        method: "Electronic",
        guaranteedDays: 3,
      },
      pricing: {
        governmentFee: 1500,
        atlysFee: 600,
        totalAmount: 1500,
        currency: "INR",
        freeAtlysFeesUntilVisa: true,
      },
      content: {
        heroImage: "/placeholder.svg?height=600&width=1200",
        description: "Explore Vietnam's rich culture and stunning landscapes with our streamlined visa service.",
        requirements: [
          "Passport valid for at least 6 months",
          "Digital photograph",
          "Travel insurance",
          "Proof of accommodation",
        ],
        documents: ["Passport scan", "Photo", "Insurance certificate", "Hotel booking"],
        faqs: [
          {
            question: "How long is a Vietnam visa valid?",
            answer: "Vietnam tourist visa is typically valid for 30 days from entry date.",
          },
        ],
      },
    },
    {
      id: "4",
      name: "Indonesia",
      slug: "indonesia",
      country: "Indonesia",
      continent: "Asia",
      // Minimal card data - some destinations might have less info
      card: {
        image: "/placeholder.svg?height=300&width=400",
        visaCount: "16K+ Visas on Time",
        date: "05 Aug",
        time: "03:50 PM",
        rating: 4.2,
      },
      location: {
        capital: "Jakarta",
        currency: "IDR",
        language: "Indonesian, English",
      },
      visa: {
        visaType: "Visa on Arrival",
        processingTime: "Instant",
        validity: "30 days",
        stayDuration: "30 days",
        entryType: "Single",
        method: "On Arrival",
        guaranteedDays: 0,
      },
      // Simple pricing for visa-on-arrival
      pricing: {
        governmentFee: 500,
        atlysFee: 300,
        totalAmount: 500,
        currency: "INR",
      },
      content: {
        heroImage: "/placeholder.svg?height=600&width=1200",
        description: "Get instant visa on arrival for Indonesia and explore the beautiful archipelago.",
        requirements: [
          "Passport valid for at least 6 months",
          "Return flight ticket",
          "Proof of sufficient funds",
          "Accommodation booking",
        ],
      },
    },
  ],
  instant: [
    {
      id: "5",
      name: "Maldives",
      slug: "maldives",
      country: "Maldives",
      continent: "Asia",
      card: {
        image: "/placeholder.svg?height=300&width=400",
        visaInfo: "No Visa Required",
        rating: 4.9,
        reviewCount: 850,
      },
      location: {
        capital: "Malé",
        currency: "MVR",
        language: "Dhivehi, English",
        population: "540,000",
      },
      visa: {
        visaType: "Visa Free",
        processingTime: "Instant",
        validity: "30 days",
        stayDuration: "30 days",
        entryType: "Single",
        method: "On Arrival",
        guaranteedDays: 0,
      },
      // No pricing for visa-free destinations
      pricing: {
        governmentFee: 0,
        atlysFee: 0,
        totalAmount: 0,
        currency: "INR",
      },
      content: {
        heroImage: "/placeholder.svg?height=600&width=1200",
        description: "Visit the Maldives visa-free and enjoy pristine beaches and luxury resorts.",
        requirements: [
          "Passport valid for at least 6 months",
          "Return flight ticket",
          "Hotel booking confirmation",
          "Sufficient funds proof",
        ],
      },
    },
  ],
  week: [
    {
      id: "6",
      name: "Nepal",
      slug: "nepal",
      country: "Nepal",
      continent: "Asia",
      card: {
        image: "/placeholder.svg?height=300&width=400",
        visaInfo: "Visa on Arrival",
        rating: 4.4,
        reviewCount: 600,
      },
      location: {
        capital: "Kathmandu",
        currency: "NPR",
        language: "Nepali, English",
        population: "29.1 million",
      },
      visa: {
        visaType: "Tourist Visa",
        processingTime: "On Arrival",
        validity: "150 days",
        stayDuration: "90 days",
        entryType: "Multiple",
        method: "On Arrival",
        guaranteedDays: 0,
      },
      pricing: {
        governmentFee: 2500,
        atlysFee: 500,
        totalAmount: 2500,
        currency: "INR",
      },
      content: {
        heroImage: "/placeholder.svg?height=600&width=1200",
        description: "Get visa on arrival for Nepal and explore the Himalayas and rich culture.",
        requirements: [
          "Passport valid for at least 6 months",
          "Passport-size photograph",
          "Visa fee payment",
          "Completed application form",
        ],
      },
    },
  ],
  month: [
    {
      id: "7",
      name: "United States",
      slug: "united-states",
      country: "United States",
      continent: "North America",
      card: {
        image: "/placeholder.svg?height=300&width=400",
        visaCount: "25K+ Visas on Time",
        date: "18 Sep",
        time: "04:13 PM",
        rating: 4.6,
        reviewCount: 2000,
      },
      location: {
        capital: "Washington D.C.",
        currency: "USD",
        language: "English",
        population: "331 million",
      },
      visa: {
        visaType: "B1/B2 Visa",
        processingTime: "30 days",
        validity: "10 years",
        stayDuration: "180 days",
        entryType: "Multiple",
        method: "Interview Required",
        guaranteedDays: 30,
      },
      pricing: {
        governmentFee: 15000,
        atlysFee: 3000,
        totalAmount: 15000,
        currency: "INR",
        freeAtlysFeesUntilVisa: true,
      },
      content: {
        heroImage: "/placeholder.svg?height=600&width=1200",
        description: "Apply for US tourist visa with comprehensive support and interview preparation.",
        requirements: [
          "Valid passport",
          "DS-160 form completion",
          "Interview appointment",
          "Financial documents",
          "Travel itinerary",
        ],
        documents: ["Passport", "DS-160 confirmation", "Bank statements", "Employment letter", "Travel plans"],
        faqs: [
          {
            question: "How long does US visa processing take?",
            answer: "US tourist visa processing typically takes 15-30 days after the interview.",
          },
        ],
      },
    },
  ],
}

export const getAllDestinations = (): Destination[] => {
  return Object.values(destinationData).flat()
}

export const getDestinationBySlug = (slug: string): Destination | undefined => {
  return getAllDestinations().find((dest) => dest.slug === slug)
}

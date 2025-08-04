import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Destination } from "../types/destination-types"

interface DestinationCardProps {
  destination: Destination
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  const cardData = destination.card
  const pricing = destination.pricing

  return (
    <Link href={`/destination/${destination.slug}`}>
      <div className="group cursor-pointer h-full">
        {/* Card Container with border and shadow - Fixed Height */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-full flex flex-col">
          {/* Image Container */}
          <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-60 overflow-hidden flex-shrink-0">
            <Image
              src={cardData?.image || "/placeholder.svg"}
              alt={destination.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Apply Visa Overlay Button */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-black/60 text-white px-4 py-2 rounded-lg text-sm font-medium">
                Apply for {destination.name} Visa
              </div>
            </div>

            {/* Visa Count Badge */}
            {cardData?.visaCount && (
              <div className="absolute bottom-4 left-4">
                <Badge className="bg-blue-600 text-white px-3 py-1.5 text-sm font-medium rounded-lg shadow-sm">
                  {cardData.visaCount}
                </Badge>
              </div>
            )}

            {/* Visa Info Badge for visa-free destinations */}
            {cardData?.visaInfo && (
              <div className="absolute bottom-4 left-4">
                <Badge className="bg-green-600 text-white px-3 py-1.5 text-sm font-medium rounded-lg shadow-sm">
                  {cardData.visaInfo}
                </Badge>
              </div>
            )}
          </div>

          {/* Content - Flex grow to fill remaining space */}
          <div className="p-4 flex flex-col justify-between flex-grow">
            {/* Country Name and Price */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1 pr-2">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight min-h-[3.5rem] flex items-center">
                  {destination.name}
                </h3>
              </div>

              {/* Pricing */}
              {pricing && pricing.totalAmount !== undefined && (
                <div className="text-right flex-shrink-0">
                  {pricing.totalAmount === 0 ? (
                    <span className="text-lg font-bold text-green-600">Free</span>
                  ) : (
                    <div className="flex flex-col items-end">
                      {/* Original Price (strikethrough) */}
                      {pricing.governmentFee && pricing.governmentFee > pricing.totalAmount && (
                        <span className="text-sm text-gray-400 line-through">
                          ₹{(pricing.governmentFee + (pricing.atlysFee || 0)).toLocaleString()}
                        </span>
                      )}
                      {/* Current Price */}
                      <span className="text-lg font-bold text-gray-900">₹{pricing.totalAmount.toLocaleString()}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Date and Time - Always at bottom */}
            <div className="mt-auto">
              {cardData?.date && cardData?.time ? (
                <p className="text-blue-600 text-sm font-medium">
                  Get by{" "}
                  <span className="font-semibold">
                    {cardData.date}, {cardData.time}
                  </span>
                </p>
              ) : cardData?.visaInfo ? (
                <p className="text-green-600 text-sm font-medium">{cardData.visaInfo}</p>
              ) : (
                <p className="text-gray-500 text-sm">Contact for details</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

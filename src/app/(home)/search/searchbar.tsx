"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { DestinationType } from "../types/destination-types"
import { getAllDestinations } from "../data/destination-data"

interface SearchSectionProps {
  onSearchResults?: (results: DestinationType[]) => void
  onSearchQuery?: (query: string) => void
}

export function SearchSection({ onSearchResults, onSearchQuery }: SearchSectionProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [allDestinations] = useState<DestinationType[]>(getAllDestinations())

  useEffect(() => {
    const filteredDestinations =
      searchQuery.trim() === ""
        ? allDestinations
        : allDestinations.filter(
            (destination) =>
              destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              destination.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
              destination.continent.toLowerCase().includes(searchQuery.toLowerCase()) ||
              destination.capital.toLowerCase().includes(searchQuery.toLowerCase()) ||
              destination.visaType.toLowerCase().includes(searchQuery.toLowerCase()),
          )

    onSearchResults?.(filteredDestinations)
    onSearchQuery?.(searchQuery)
  }, [searchQuery, allDestinations, onSearchResults, onSearchQuery])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className="bg-[#01867a] text-white">
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        {/* Success Rate */}
        <div className="mb-4">
          <span className="text-green-400 font-semibold text-lg md:text-xl">99.2% visas on time</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl lg:text-5xl font-bold mb-8 md:mb-12 leading-tight">
          Get Your Visa on Time with Visawalk
        </h1>

        {/* Search Bar */}
        <div className="relative mb-6 md:mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search for a destination..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-12 pr-4 py-4 md:py-6 text-base md:text-lg rounded-xl md:rounded-2xl border-0 bg-white text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-white/20"
            />
          </div>
        </div>

        {/* Search Results Count */}
        {searchQuery && (
          <div className="text-white/80 text-sm">
            {
              allDestinations.filter(
                (destination) =>
                  destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  destination.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  destination.continent.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  destination.capital.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  destination.visaType.toLowerCase().includes(searchQuery.toLowerCase()),
              ).length
            }{" "}
            destinations found for "{searchQuery}"
          </div>
        )}
      </div>
    </div>
  )
}

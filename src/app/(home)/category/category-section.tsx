"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Globe, Grid3X3, Map } from "lucide-react"
import type { CategoryKey, Destination } from "../types/destination-types"
import DestinationCard from "./destination-card"
import { destinationData, getAllDestinations } from "../data/destination-data"
import { SearchSection } from "../search/searchbar"

interface Category {
  key: CategoryKey
  label: string
}

const categories: Category[] = [
  { key: "all", label: "All" },
  { key: "instant", label: "Instant" },
  { key: "week", label: "In a week" },
  { key: "month", label: "In a month" },
]

export default function CategorySection() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all")
  const [searchResults, setSearchResults] = useState<Destination[]>(getAllDestinations())
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearchResults = (results: Destination[]) => {
    setSearchResults(results)
  }

  const handleSearchQuery = (query: string) => {
    setSearchQuery(query)
  }

  // If there's a search query, show search results, otherwise show category results
  const displayDestinations = searchQuery.trim() !== "" ? searchResults : destinationData[activeCategory]

  const handleCategoryChange = (category: CategoryKey) => {
    setActiveCategory(category)
    // Clear search when changing categories
    if (searchQuery.trim() !== "") {
      setSearchResults(getAllDestinations())
    }
  }

  return (
    <div className="w-full">
      {/* Search Section */}
      <SearchSection onSearchResults={handleSearchResults} onSearchQuery={handleSearchQuery} />

      <div className="max-w-7xl mx-auto p-6">
        {/* Header with Logo and Categories */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-6">
            <div className="p-2 bg-gray-100 rounded-lg">
              <Globe className="w-6 h-6 text-gray-600" />
            </div>

            {/* Only show category tabs when not searching */}
            {searchQuery.trim() === "" && (
              <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                {categories.map((category) => (
                  <Button
                    key={category.key}
                    variant={activeCategory === category.key ? "default" : "ghost"}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      activeCategory === category.key
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-gray-600 hover:text-gray-900 hover:bg-white"
                    }`}
                    onClick={() => handleCategoryChange(category.key)}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Results Header */}
        <div className="mb-6">
          {searchQuery.trim() !== "" ? (
            <h2 className="text-2xl font-bold text-center">
              Search Results for "{searchQuery}" ({displayDestinations.length} found)
            </h2>
          ) : (
            <h2 className="text-2xl font-bold text-center">
              {categories.find((cat) => cat.key === activeCategory)?.label} Destinations
            </h2>
          )}
        </div>

        {/* Destination Cards Grid */}
        {displayDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
            {displayDestinations.map((Destination) => (
              <DestinationCard key={Destination.id} destination={Destination} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-2">No destinations found</div>
            <p className="text-gray-400">Try searching with different keywords</p>
          </div>
        )}

        {/* Bottom Action Buttons */}
        <div className="flex items-center justify-center gap-4">
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <Grid3X3 className="w-4 h-4" />
            Show Grid
          </Button>
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <Map className="w-4 h-4" />
            Show Map
          </Button>
        </div>
      </div>
    </div>
  )
}

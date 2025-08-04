"use client"

import { User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function Navigation() {
  return (
    <nav className="fixed top-10 left-0 right-0 z-50 shadow-lg bg-white text-black px-4 py-3 md:px-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image src="/visa/visawalk-logo.png" alt="visawalk logo" width={150} height={150} />
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3 md:space-x-4">
          {/* On Time Guaranteed Badge - Hidden on mobile */}
          <Badge
            variant="outline"
            className="hidden md:flex items-center space-x-2 bg-white/10 border-white/20 hover:bg-white/20"
          >
            <div className="w-4 h-4 rounded-full border border-black flex items-center justify-center">
              <div className="w-2 h-2 bg-black rounded-full"></div>
            </div>
            <span className="text-sm font-medium">
              On Time
              <br />
              Guaranteed
            </span>
          </Badge>

          {/* User Profile Button */}
          <Button variant="ghost" size="icon" className="text-black hover:bg-white/10 rounded-full">
            <User className="h-16 w-16"  />
            <span className="sr-only text-black">User profile</span>
          </Button>
        </div>
      </div>
    </nav>
  )
}

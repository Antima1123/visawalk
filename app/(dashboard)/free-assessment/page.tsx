"use client"

import { useState } from "react"
import { Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function BookConsultation() {
  const [file, setFile] = useState<File | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 items-center max-w-screen-lg mx-auto">
        <Card className="w-full border-none">
          <CardHeader>
            <CardTitle className="text-2xl">Book consultation</CardTitle>
            <p className="text-muted-foreground mt-2">
              Great! You took a first step towards your goals
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Please fill in the details so that we can analyse and align our best suited expert to your query
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Input
                    id="firstName"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    id="lastName"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Phone"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Input
                    id="education"
                    placeholder="Education Qualification"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="relative">
                    <Input
                      id="date"
                      type="date"
                      required
                      className="pl-10"
                    />
                    <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select visa type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student Visa</SelectItem>
                      <SelectItem value="work">Work Visa</SelectItem>
                      <SelectItem value="tourist">Tourist Visa</SelectItem>
                      <SelectItem value="business">Business Visa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Select defaultValue="australia">
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="australia">Australia</SelectItem>
                      <SelectItem value="newzealand">New Zealand</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="resume">Upload Resume</Label>
                <Input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="cursor-pointer"
                />
                <p className="text-xs text-muted-foreground">
                  Accepted formats: PDF, DOC, DOCX
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <Button type="submit" className="w-full md:w-auto">
                  Submit
                </Button>
                <Button
                  type="button"
                  variant="link"
                  className="text-primary hover:text-primary/90"
                >
                  Back to home
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="hidden lg:block">
          <img
            src="free assessment.png"
            alt="Consultation Illustration"
            className="w-[20rem] max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  )
}


'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TestimonialsGrid, VideoTestimonialCard } from "@/components/common/testimonial-card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { COUNTRIES, VISA_TYPES } from "@/lib/constants";
import { ArrowRight, Star, Play, Filter } from "lucide-react";
import Link from "next/link";
import { Testimonial, VideoTestimonial, Country, VisaType } from "@/types";

// Sample testimonial data
const sampleTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    country: 'canada',
    visaType: 'tourist',
    rating: 5,
    comment: 'VisaWalk made my Canadian visa application incredibly smooth. Their expert guidance and attention to detail ensured my application was approved without any issues. The document checklist was comprehensive and the support team was always available to answer my questions. Highly recommended for anyone applying for a Canadian visa!',
    date: '2024-12-15',
    avatar: '/testimonials/sarah.jpg',
    verified: true
  },
  {
    id: '2',
    name: 'Michael Chen',
    country: 'australia',
    visaType: 'work',
    rating: 5,
    comment: 'The team at VisaWalk was professional and efficient. They helped me navigate the complex Australian work visa process and I got my approval in just 3 weeks! The premium package was worth every penny - having a dedicated consultant made all the difference.',
    date: '2024-12-10',
    avatar: '/testimonials/michael.jpg',
    verified: true
  },
  {
    id: '3',
    name: 'Emma Thompson',
    country: 'uk',
    visaType: 'student',
    rating: 5,
    comment: 'Excellent service! The document checklist and step-by-step guidance made the UK student visa process stress-free. Thank you for making my dream of studying in London possible. The interview preparation was particularly helpful.',
    date: '2024-12-08',
    avatar: '/testimonials/emma.jpg',
    verified: true
  },
  {
    id: '4',
    name: 'David Rodriguez',
    country: 'germany',
    visaType: 'business',
    rating: 5,
    comment: 'Outstanding support throughout my German business visa application. The premium package was worth every penny - dedicated consultant and express processing delivered results faster than I expected.',
    date: '2024-12-05',
    avatar: '/testimonials/david.jpg',
    verified: true
  },
  {
    id: '5',
    name: 'Priya Patel',
    country: 'canada',
    visaType: 'student',
    rating: 5,
    comment: 'VisaWalk exceeded my expectations. Their expertise in Canadian student visas is unmatched. Got my study permit approved in record time with their premium service. The team was incredibly supportive throughout the process.',
    date: '2024-12-01',
    avatar: '/testimonials/priya.jpg',
    verified: true
  },
  {
    id: '6',
    name: 'James Wilson',
    country: 'australia',
    visaType: 'tourist',
    rating: 5,
    comment: 'Fantastic experience from start to finish. The online platform made it easy to track my application progress, and the customer support was exceptional. Received my Australian tourist visa in just 2 weeks!',
    date: '2024-11-28',
    avatar: '/testimonials/james.jpg',
    verified: true
  },
  {
    id: '7',
    name: 'Lisa Anderson',
    country: 'uk',
    visaType: 'work',
    rating: 5,
    comment: 'Professional, reliable, and efficient. VisaWalk handled my UK work visa application with expertise and care. The document preparation service saved me so much time and stress. Highly recommend!',
    date: '2024-11-25',
    avatar: '/testimonials/lisa.jpg',
    verified: true
  },
  {
    id: '8',
    name: 'Carlos Martinez',
    country: 'germany',
    visaType: 'student',
    rating: 5,
    comment: 'The best visa service I have ever used. The team at VisaWalk made my German student visa application seamless. Their knowledge of the requirements and attention to detail is impressive.',
    date: '2024-11-20',
    avatar: '/testimonials/carlos.jpg',
    verified: true
  }
];

const videoTestimonials: VideoTestimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    country: 'canada',
    visaType: 'tourist',
    videoUrl: '/videos/sarah-testimonial.mp4',
    thumbnail: '/videos/thumbnails/sarah.jpg',
    duration: '2:15',
    title: 'My Canadian Visa Success Story'
  },
  {
    id: '2',
    name: 'Michael Chen',
    country: 'australia',
    visaType: 'work',
    videoUrl: '/videos/michael-testimonial.mp4',
    thumbnail: '/videos/thumbnails/michael.jpg',
    duration: '3:20',
    title: 'How VisaWalk Helped Me Get My Australian Work Visa'
  },
  {
    id: '3',
    name: 'Emma Thompson',
    country: 'uk',
    visaType: 'student',
    videoUrl: '/videos/emma-testimonial.mp4',
    thumbnail: '/videos/thumbnails/emma.jpg',
    duration: '2:45',
    title: 'UK Student Visa - A Smooth Journey'
  }
];

export default function TestimonialsPage() {
  const [filteredTestimonials, setFilteredTestimonials] = useState(sampleTestimonials);
  const [selectedCountry, setSelectedCountry] = useState<Country | 'all'>('all');
  const [selectedVisaType, setSelectedVisaType] = useState<VisaType | 'all'>('all');
  const [selectedRating, setSelectedRating] = useState<number | 'all'>('all');

  const handleFilter = () => {
    let filtered = sampleTestimonials;

    if (selectedCountry !== 'all') {
      filtered = filtered.filter(t => t.country === selectedCountry);
    }

    if (selectedVisaType !== 'all') {
      filtered = filtered.filter(t => t.visaType === selectedVisaType);
    }

    if (selectedRating !== 'all') {
      filtered = filtered.filter(t => t.rating >= selectedRating);
    }

    setFilteredTestimonials(filtered);
  };

  const clearFilters = () => {
    setSelectedCountry('all');
    setSelectedVisaType('all');
    setSelectedRating('all');
    setFilteredTestimonials(sampleTestimonials);
  };

  const averageRating = sampleTestimonials.reduce((acc, t) => acc + t.rating, 0) / sampleTestimonials.length;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="visa-hero-bg visa-section-padding">
        <div className="visa-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Real stories from real people who achieved their visa goals with our expert guidance and support.
          </p>
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center space-x-1">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <div className="text-lg font-semibold">
              {averageRating.toFixed(1)} out of 5
            </div>
            <div className="text-muted-foreground">
              ({sampleTestimonials.length} reviews)
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="visa-section-padding bg-muted/50">
        <div className="visa-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Video Testimonials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear directly from our clients about their visa application experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((video) => (
              <Dialog key={video.id}>
                <DialogTrigger asChild>
                  <div>
                    <VideoTestimonialCard testimonial={video} />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <div className="aspect-video">
                    <video
                      controls
                      className="w-full h-full rounded-lg"
                      poster={video.thumbnail}
                    >
                      <source src={video.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="visa-container">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Filter Reviews:</span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Select value={selectedCountry} onValueChange={(value) => setSelectedCountry(value as Country | 'all')}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Countries" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Countries</SelectItem>
                  {Object.values(COUNTRIES).map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      {country.flag} {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedVisaType} onValueChange={(value) => setSelectedVisaType(value as VisaType | 'all')}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Visa Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Visa Types</SelectItem>
                  {Object.entries(VISA_TYPES).map(([key, type]) => (
                    <SelectItem key={key} value={key}>
                      {type.icon} {type.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedRating.toString()} onValueChange={(value) => setSelectedRating(value === 'all' ? 'all' : parseInt(value))}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Ratings" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ratings</SelectItem>
                  <SelectItem value="5">5 Stars Only</SelectItem>
                  <SelectItem value="4">4+ Stars</SelectItem>
                  <SelectItem value="3">3+ Stars</SelectItem>
                </SelectContent>
              </Select>

              <Button onClick={handleFilter} variant="outline">
                Apply Filters
              </Button>
              
              <Button onClick={clearFilters} variant="ghost">
                Clear All
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="visa-section-padding">
        <div className="visa-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Client Reviews</h2>
            <p className="text-muted-foreground">
              Showing {filteredTestimonials.length} of {sampleTestimonials.length} reviews
            </p>
          </div>

          <TestimonialsGrid testimonials={filteredTestimonials} />

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No testimonials match your current filters.</p>
              <Button onClick={clearFilters} variant="outline">
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="visa-section-padding bg-primary text-primary-foreground">
        <div className="visa-container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let us help you achieve your visa goals with the same expertise and care our clients rave about.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/application">
                Start Your Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="/contact">
                Get Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

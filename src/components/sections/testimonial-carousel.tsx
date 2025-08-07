'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Testimonial } from '@/types';
import { COUNTRIES, VISA_TYPES } from '@/lib/constants';
import { cn } from '@/lib/utils';

// Sample testimonial data
const sampleTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    country: 'canada',
    visaType: 'tourist',
    rating: 5,
    comment: 'VisaWalk made my Canadian visa application incredibly smooth. Their expert guidance and attention to detail ensured my application was approved without any issues. Highly recommended!',
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
    comment: 'The team at VisaWalk was professional and efficient. They helped me navigate the complex Australian work visa process and I got my approval in just 3 weeks!',
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
    comment: 'Excellent service! The document checklist and step-by-step guidance made the UK student visa process stress-free. Thank you for making my dream of studying in London possible.',
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
    comment: 'Outstanding support throughout my German business visa application. The premium package was worth every penny - dedicated consultant and express processing delivered results.',
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
    comment: 'VisaWalk exceeded my expectations. Their expertise in Canadian student visas is unmatched. Got my study permit approved in record time with their premium service.',
    date: '2024-12-01',
    avatar: '/testimonials/priya.jpg',
    verified: true
  }
];

interface TestimonialCarouselProps {
  testimonials?: Testimonial[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

export function TestimonialCarousel({
  testimonials = sampleTestimonials,
  autoPlay = true,
  autoPlayInterval = 5000,
  className
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const interval = setInterval(nextTestimonial, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, isHovered, nextTestimonial]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={cn(
          "h-4 w-4",
          i < rating 
            ? "fill-yellow-400 text-yellow-400" 
            : "text-gray-300"
        )}
      />
    ));
  };

  if (testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];
  const country = COUNTRIES[currentTestimonial.country];
  const visaType = VISA_TYPES[currentTestimonial.visaType];

  return (
    <div 
      className={cn("relative w-full", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg bg-background border">
        <div className="p-8 md:p-12 text-center">
          {/* Quote */}
          <div className="mb-8">
            <div className="text-4xl text-primary mb-4">&ldquo;</div>
            <blockquote className="text-lg md:text-xl text-muted-foreground italic leading-relaxed">
              {currentTestimonial.comment}
            </blockquote>
            <div className="text-4xl text-primary mt-4 rotate-180">&rdquo;</div>
          </div>

          {/* Rating */}
          <div className="flex justify-center mb-6">
            {renderStars(currentTestimonial.rating)}
          </div>

          {/* Author Info */}
          <div className="flex items-center justify-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage 
                src={currentTestimonial.avatar} 
                alt={currentTestimonial.name} 
              />
              <AvatarFallback className="text-lg">
                {currentTestimonial.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="text-left">
              <div className="flex items-center space-x-2 mb-1">
                <h4 className="font-semibold text-lg">{currentTestimonial.name}</h4>
                {currentTestimonial.verified && (
                  <Badge variant="secondary" className="text-xs">
                    Verified
                  </Badge>
                )}
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>{country.flag}</span>
                <span>{country.name}</span>
                <span>•</span>
                <span>{visaType.name}</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {new Date(currentTestimonial.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        {testimonials.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 hover:bg-background"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 hover:bg-background"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </>
        )}
      </div>

      {/* Dots Indicator */}
      {testimonials.length > 1 && (
        <div className="flex justify-center space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-3 h-3 rounded-full transition-colors",
                index === currentIndex 
                  ? "bg-primary" 
                  : "bg-muted hover:bg-muted-foreground/50"
              )}
              onClick={() => goToTestimonial(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Compact testimonial carousel for smaller sections
interface CompactTestimonialCarouselProps {
  testimonials?: Testimonial[];
  className?: string;
}

export function CompactTestimonialCarousel({
  testimonials = sampleTestimonials.slice(0, 3),
  className
}: CompactTestimonialCarouselProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6", className)}>
      {testimonials.map((testimonial) => {
        const country = COUNTRIES[testimonial.country];
        const visaType = VISA_TYPES[testimonial.visaType];
        
        return (
          <div key={testimonial.id} className="visa-card p-6">
            <div className="flex justify-center mb-4">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-4 w-4",
                    i < testimonial.rating 
                      ? "fill-yellow-400 text-yellow-400" 
                      : "text-gray-300"
                  )}
                />
              ))}
            </div>
            
            <blockquote className="text-sm text-muted-foreground mb-4 line-clamp-3">
              "              {testimonial.comment}"
            </blockquote>
            
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium text-sm">{testimonial.name}</div>
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <span>{country.flag}</span>
                  <span>{visaType.name}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

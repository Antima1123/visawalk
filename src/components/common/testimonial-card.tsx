import { Star, Quote, Verified } from 'lucide-react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Testimonial, VideoTestimonial } from '@/types';
import { COUNTRIES, VISA_TYPES } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
  variant?: 'default' | 'compact' | 'featured';
}

export function TestimonialCard({ 
  testimonial, 
  className,
  variant = 'default' 
}: TestimonialCardProps) {
  const country = COUNTRIES[testimonial.country];
  const visaType = VISA_TYPES[testimonial.visaType];

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

  if (variant === 'compact') {
    return (
      <div className={cn("visa-card p-4", className)}>
        <div className="flex items-start space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <h4 className="text-sm font-medium truncate">{testimonial.name}</h4>
              {testimonial.verified && (
                <Verified className="h-3 w-3 text-blue-500" />
              )}
            </div>
            <div className="flex items-center space-x-1 mb-2">
              {renderStars(testimonial.rating)}
            </div>
            <p className="text-xs text-muted-foreground line-clamp-2">
              {testimonial.comment}
            </p>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-xs">{country.flag}</span>
              <span className="text-xs text-muted-foreground">{visaType.name}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div className={cn("visa-card p-8 text-center", className)}>
        <Quote className="h-8 w-8 text-primary mx-auto mb-4" />
        <blockquote className="text-lg italic mb-6">
          "          {testimonial.comment}"
        </blockquote>
        <div className="flex justify-center mb-4">
          {renderStars(testimonial.rating)}
        </div>
        <div className="flex items-center justify-center space-x-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="text-left">
            <div className="flex items-center space-x-2">
              <h4 className="font-semibold">{testimonial.name}</h4>
              {testimonial.verified && (
                <Verified className="h-4 w-4 text-blue-500" />
              )}
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>{country.flag}</span>
              <span>{visaType.name}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={cn("visa-card p-6", className)}>
      <div className="flex items-start space-x-4 mb-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <h3 className="font-semibold">{testimonial.name}</h3>
            {testimonial.verified && (
              <Badge variant="secondary" className="text-xs">
                <Verified className="h-3 w-3 mr-1" />
                Verified
              </Badge>
            )}
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
            <span>{country.flag}</span>
            <span>{country.name}</span>
            <span>•</span>
            <span>{visaType.name}</span>
          </div>
          <div className="flex items-center space-x-1">
            {renderStars(testimonial.rating)}
            <span className="text-sm text-muted-foreground ml-2">
              {testimonial.rating}/5
            </span>
          </div>
        </div>
      </div>

      <blockquote className="text-muted-foreground mb-4">
        "        {testimonial.comment}"
      </blockquote>

      <div className="text-xs text-muted-foreground">
        {new Date(testimonial.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </div>
    </div>
  );
}

// Video Testimonial Card
interface VideoTestimonialCardProps {
  testimonial: VideoTestimonial;
  onPlay?: () => void;
  className?: string;
}

export function VideoTestimonialCard({ 
  testimonial, 
  onPlay, 
  className 
}: VideoTestimonialCardProps) {
  const country = COUNTRIES[testimonial.country];
  const visaType = VISA_TYPES[testimonial.visaType];

  return (
    <div className={cn("visa-card overflow-hidden group cursor-pointer", className)} onClick={onPlay}>
      <div className="relative">
        <Image
          src={testimonial.thumbnail}
          alt={testimonial.title}
          width={400}
          height={192}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-200" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-200">
            <div className="w-0 h-0 border-l-[12px] border-l-primary border-y-[8px] border-y-transparent ml-1" />
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
          {testimonial.duration}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
          {testimonial.title}
        </h3>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <span>{country.flag}</span>
          <span>{testimonial.name}</span>
          <span>•</span>
          <span>{visaType.name}</span>
        </div>
      </div>
    </div>
  );
}

// Testimonials Grid
interface TestimonialsGridProps {
  testimonials: Testimonial[];
  className?: string;
  variant?: 'default' | 'compact';
}

export function TestimonialsGrid({ 
  testimonials, 
  className,
  variant = 'default' 
}: TestimonialsGridProps) {
  return (
    <div className={cn(
      "grid gap-6",
      variant === 'compact' 
        ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
        : "grid-cols-1 md:grid-cols-2",
      className
    )}>
      {testimonials.map((testimonial) => (
        <TestimonialCard
          key={testimonial.id}
          testimonial={testimonial}
          variant={variant}
        />
      ))}
    </div>
  );
}

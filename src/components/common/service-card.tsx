import { ArrowRight, Clock, DollarSign, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { VisaService } from '@/types';
import { COUNTRIES, VISA_TYPES } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: VisaService;
  onSelect?: () => void;
  className?: string;
  variant?: 'default' | 'compact' | 'detailed';
}

export function ServiceCard({ 
  service, 
  onSelect, 
  className,
  variant = 'default' 
}: ServiceCardProps) {
  const country = COUNTRIES[service.country];
  const visaType = VISA_TYPES[service.type];

  if (variant === 'compact') {
    return (
      <div className={cn("visa-card p-4", className)}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg">{country.flag}</span>
            <div>
              <h4 className="font-medium text-sm">{service.title}</h4>
              <p className="text-xs text-muted-foreground">{visaType.name}</p>
            </div>
          </div>
          {service.popular && (
            <Badge variant="secondary" className="text-xs">Popular</Badge>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{service.processingTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <DollarSign className="h-3 w-3" />
              <span>${service.price}</span>
            </div>
          </div>
          <Button size="sm" variant="ghost" onClick={onSelect}>
            <ArrowRight className="h-3 w-3" />
          </Button>
        </div>
      </div>
    );
  }

  if (variant === 'detailed') {
    return (
      <div className={cn("visa-card p-6 h-full flex flex-col", className)}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{country.flag}</span>
            <div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{visaType.name}</p>
            </div>
          </div>
          {service.popular && (
            <Badge className="bg-accent text-accent-foreground">Most Popular</Badge>
          )}
        </div>

        <p className="text-sm text-muted-foreground mb-4 flex-1">
          {service.description}
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{service.processingTime}</span>
            </div>
            <div className="text-2xl font-bold text-primary">
              ${service.price}
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Key Features:</h4>
            <ul className="space-y-1">
              {service.features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
              {service.features.length > 4 && (
                <li className="text-xs text-primary">
                  +{service.features.length - 4} more features
                </li>
              )}
            </ul>
          </div>

          <Button className="w-full" onClick={onSelect}>
            Choose This Service
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={cn("visa-card p-6 group hover:shadow-lg transition-all duration-200", className)}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-xl">{country.flag}</span>
          <div>
            <h3 className="font-semibold group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <p className="text-sm text-muted-foreground">{visaType.name}</p>
          </div>
        </div>
        {service.popular && (
          <Badge variant="secondary">Popular</Badge>
        )}
      </div>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {service.description}
      </p>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{service.processingTime}</span>
          </div>
        </div>
        <div className="text-xl font-bold text-primary">
          ${service.price}
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-medium mb-2">Includes:</h4>
          <div className="flex flex-wrap gap-1">
            {service.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-muted text-muted-foreground"
              >
                {feature}
              </span>
            ))}
            {service.features.length > 3 && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                +{service.features.length - 3} more
              </span>
            )}
          </div>
        </div>

        <Button 
          className="w-full group-hover:bg-primary/90 transition-colors" 
          onClick={onSelect}
        >
          Select Service
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}

// Service comparison component
interface ServiceComparisonProps {
  services: VisaService[];
  onSelect: (service: VisaService) => void;
  className?: string;
}

export function ServiceComparison({ services, onSelect, className }: ServiceComparisonProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6", className)}>
      {services.map((service, index) => (
        <div
          key={service.id}
          className={cn(
            "relative",
            service.popular && "md:scale-105 md:z-10"
          )}
        >
          <ServiceCard
            service={service}
            onSelect={() => onSelect(service)}
            variant="detailed"
            className={cn(
              service.popular && "border-primary shadow-lg"
            )}
          />
        </div>
      ))}
    </div>
  );
}

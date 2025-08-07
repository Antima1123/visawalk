import { Check, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PricingTier } from '@/types';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  tier: PricingTier;
  onSelect?: () => void;
  className?: string;
  variant?: 'default' | 'compact' | 'featured';
  showAnnualDiscount?: boolean;
  isSelected?: boolean;
}

export function PricingCard({
  tier,
  onSelect,
  className,
  variant = 'default',
  showAnnualDiscount = false,
  isSelected = false
}: PricingCardProps) {
  const annualPrice = Math.round(tier.price * 12 * 0.8); // 20% discount for annual
  const monthlyPrice = tier.price;

  if (variant === 'compact') {
    return (
      <div className={cn(
        "visa-card p-4 transition-all duration-200",
        isSelected && "border-primary shadow-lg",
        className
      )}>
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-semibold text-sm">{tier.title}</h3>
            <p className="text-xs text-muted-foreground">{tier.description}</p>
          </div>
          {tier.popular && (
            <Badge variant="secondary" className="text-xs">Popular</Badge>
          )}
        </div>
        
        <div className="flex items-baseline space-x-1 mb-3">
          <span className="text-2xl font-bold">${tier.price}</span>
          <span className="text-sm text-muted-foreground">per application</span>
        </div>

        <Button 
          size="sm" 
          className="w-full" 
          variant={isSelected ? "default" : "outline"}
          onClick={onSelect}
        >
          {tier.buttonText}
        </Button>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div className={cn(
        "visa-card p-8 text-center relative overflow-hidden",
        tier.popular && "border-primary shadow-xl scale-105",
        isSelected && "border-primary shadow-lg",
        className
      )}>
        {tier.popular && (
          <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-sm font-medium py-2">
            <Star className="inline h-4 w-4 mr-1" />
            Most Popular Choice
          </div>
        )}

        <div className={cn("space-y-6", tier.popular && "mt-8")}>
          <div>
            <h2 className="text-2xl font-bold mb-2">{tier.title}</h2>
            <p className="text-muted-foreground">{tier.description}</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-baseline justify-center space-x-1">
              <span className="text-5xl font-bold">${tier.price}</span>
              <span className="text-lg text-muted-foreground">per application</span>
            </div>
            {showAnnualDiscount && (
              <div className="text-sm text-muted-foreground">
                <span className="line-through">${annualPrice}/year</span>
                <span className="ml-2 text-green-600 font-medium">
                  Save 20% annually
                </span>
              </div>
            )}
          </div>

          <ul className="space-y-3 text-left">
            {tier.features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          <Button 
            size="lg" 
            className={cn(
              "w-full",
              tier.popular && "bg-primary hover:bg-primary/90"
            )}
            onClick={onSelect}
          >
            {tier.buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={cn(
      "visa-card p-6 h-full flex flex-col transition-all duration-200 hover:shadow-lg",
      tier.popular && "border-primary relative",
      isSelected && "border-primary shadow-lg",
      className
    )}>
      {tier.popular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
          Most Popular
        </Badge>
      )}

      <div className="flex-1 space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-2">{tier.title}</h3>
          <p className="text-sm text-muted-foreground">{tier.description}</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-baseline space-x-1">
            <span className="text-3xl font-bold">${tier.price}</span>
            <span className="text-sm text-muted-foreground">per application</span>
          </div>
          {showAnnualDiscount && (
            <p className="text-xs text-muted-foreground">
              Or ${Math.round(tier.price * 0.8)}/month billed annually
            </p>
          )}
        </div>

        <ul className="space-y-3">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button 
        className={cn(
          "w-full mt-6",
          tier.popular && "bg-primary hover:bg-primary/90"
        )}
        variant={tier.popular ? "default" : "outline"}
        onClick={onSelect}
      >
        {tier.buttonText}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}

// Pricing comparison component
interface PricingComparisonProps {
  tiers: PricingTier[];
  onSelect: (tier: PricingTier) => void;
  selectedTier?: string;
  className?: string;
  showAnnualToggle?: boolean;
}

export function PricingComparison({
  tiers,
  onSelect,
  selectedTier,
  className,
  showAnnualToggle = false
}: PricingComparisonProps) {
  return (
    <div className={cn("space-y-8", className)}>
      {showAnnualToggle && (
        <div className="text-center">
          <div className="inline-flex items-center bg-muted rounded-lg p-1">
            <button className="px-4 py-2 text-sm font-medium rounded-md bg-background shadow-sm">
              Monthly
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground">
              Annual
              <Badge variant="secondary" className="ml-2 text-xs">
                Save 20%
              </Badge>
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier) => (
          <PricingCard
            key={tier.id}
            tier={tier}
            onSelect={() => onSelect(tier)}
            isSelected={selectedTier === tier.id}
            variant="featured"
            showAnnualDiscount={showAnnualToggle}
          />
        ))}
      </div>
    </div>
  );
}

// Simple pricing display
interface SimplePricingProps {
  price: number;
  originalPrice?: number;
  currency?: string;
  period?: string;
  className?: string;
}

export function SimplePricing({
  price,
  originalPrice,
  currency = '$',
  period = 'per application',
  className
}: SimplePricingProps) {
  return (
    <div className={cn("flex items-baseline space-x-2", className)}>
      {originalPrice && originalPrice > price && (
        <span className="text-sm text-muted-foreground line-through">
          {currency}{originalPrice}
        </span>
      )}
      <span className="text-2xl font-bold">
        {currency}{price}
      </span>
      <span className="text-sm text-muted-foreground">{period}</span>
    </div>
  );
}

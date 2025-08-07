'use client';

import { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { COUNTRIES } from '@/lib/constants';
import { Country } from '@/types';
import { cn } from '@/lib/utils';

interface CountrySelectorProps {
  value?: Country;
  onValueChange: (value: Country) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export function CountrySelector({
  value,
  onValueChange,
  placeholder = "Select country...",
  className,
  disabled = false
}: CountrySelectorProps) {
  const [open, setOpen] = useState(false);

  const selectedCountry = value ? COUNTRIES[value] : null;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between", className)}
          disabled={disabled}
        >
          {selectedCountry ? (
            <div className="flex items-center space-x-2">
              <span className="text-lg">{selectedCountry.flag}</span>
              <span>{selectedCountry.name}</span>
            </div>
          ) : (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Command>
          <CommandInput placeholder="Search countries..." />
          <CommandEmpty>No country found.</CommandEmpty>
          <CommandGroup>
            {Object.values(COUNTRIES).map((country) => (
              <CommandItem
                key={country.code}
                value={country.code}
                onSelect={() => {
                  onValueChange(country.code);
                  setOpen(false);
                }}
                className="flex items-center space-x-2"
              >
                <span className="text-lg">{country.flag}</span>
                <span className="flex-1">{country.name}</span>
                <div className="text-xs text-muted-foreground">
                  {country.processingTime}
                </div>
                <Check
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === country.code ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

// Quick Country Selector for hero sections
interface QuickCountrySelectorProps {
  onSelect: (country: Country) => void;
  className?: string;
}

export function QuickCountrySelector({ onSelect, className }: QuickCountrySelectorProps) {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-3", className)}>
      {Object.values(COUNTRIES).map((country) => (
        <Button
          key={country.code}
          variant="outline"
          className="h-auto p-4 flex flex-col items-center space-y-2 hover:border-primary hover:bg-primary/5"
          onClick={() => onSelect(country.code)}
        >
          <span className="text-2xl">{country.flag}</span>
          <span className="text-sm font-medium">{country.name}</span>
          <span className="text-xs text-muted-foreground">{country.processingTime}</span>
        </Button>
      ))}
    </div>
  );
}

// Country Card Component
interface CountryCardProps {
  country: Country;
  onClick?: () => void;
  className?: string;
  showDetails?: boolean;
}

export function CountryCard({ 
  country, 
  onClick, 
  className,
  showDetails = false 
}: CountryCardProps) {
  const countryInfo = COUNTRIES[country];

  return (
    <div
      className={cn(
        "visa-card p-6 cursor-pointer transition-all duration-200 hover:shadow-lg",
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-center space-x-4 mb-4">
        <span className="text-3xl">{countryInfo.flag}</span>
        <div>
          <h3 className="text-lg font-semibold">{countryInfo.name}</h3>
          <p className="text-sm text-muted-foreground">
            Processing: {countryInfo.processingTime}
          </p>
        </div>
      </div>

      {showDetails && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Currency:</span>
            <span className="font-medium">{countryInfo.currency}</span>
          </div>
          
          <div>
            <span className="text-sm text-muted-foreground">Visa Types:</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {countryInfo.visaTypes.map((type) => (
                <span
                  key={type}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="text-sm text-muted-foreground">Key Requirements:</span>
            <ul className="mt-1 text-xs text-muted-foreground space-y-1">
              {countryInfo.requirements.slice(0, 3).map((req, index) => (
                <li key={index} className="flex items-center space-x-1">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <span>{req}</span>
                </li>
              ))}
              {countryInfo.requirements.length > 3 && (
                <li className="text-primary text-xs">
                  +{countryInfo.requirements.length - 3} more requirements
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

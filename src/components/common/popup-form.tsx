'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CountrySelector } from './country-selector';
import type { PopupForm as PopupFormType } from '@/types';
import { popupFormSchema } from '@/lib/validations';
import { VISA_TYPES } from '@/lib/constants';
import { X, Gift, ArrowRight, Clock } from 'lucide-react';
import { toast } from 'sonner';

interface PopupFormProps {
  delay?: number; // Delay in milliseconds before showing popup
  onSubmit?: (data: PopupFormType) => void;
  onClose?: () => void;
}

export function PopupForm({ 
  delay = 5000, 
  onSubmit, 
  onClose 
}: PopupFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const form = useForm<PopupFormType>({
    resolver: zodResolver(popupFormSchema),
    defaultValues: {
      source: 'popup_form'
    }
  });

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window === 'undefined') return;

    // Check if popup has already been shown in this session
    const popupShown = sessionStorage.getItem('popup-form-shown');
    if (popupShown) {
      setHasShown(true);
      return;
    }

    // Set timer to show popup after delay
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('popup-form-shown', 'true');
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, hasShown]);

  const handleSubmit = async (data: PopupFormType) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (onSubmit) {
        await onSubmit(data);
      }
      
      toast.success('Thank you! We\'ll contact you soon with personalized visa guidance.');
      setIsOpen(false);
      
      // Store submission to prevent showing again
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('popup-form-submitted', 'true');
      }
      
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  // Don't render if already submitted
  if (typeof window !== 'undefined' && sessionStorage.getItem('popup-form-submitted')) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Gift className="h-6 w-6 text-primary" />
              <DialogTitle className="text-xl">Free Visa Consultation!</DialogTitle>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <DialogDescription className="text-left">
            Get personalized guidance for your visa application. Our experts will contact you 
            within 24 hours with tailored advice for your destination.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="your.email@example.com" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number (Optional)</FormLabel>
                  <FormControl>
                    <Input 
                      type="tel" 
                      placeholder="+1 (555) 123-4567" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="interestedCountry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Which country are you interested in?</FormLabel>
                  <FormControl>
                    <CountrySelector
                      value={field.value}
                      onValueChange={field.onChange}
                      placeholder="Select destination country"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="visaType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Visa Type (Optional)</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select visa type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.entries(VISA_TYPES).map(([key, type]) => (
                        <SelectItem key={key} value={key}>
                          <div className="flex items-center space-x-2">
                            <span>{type.icon}</span>
                            <span>{type.name}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex space-x-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                className="flex-1"
              >
                Maybe Later
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1"
              >
                {isSubmitting ? 'Submitting...' : 'Get Free Consultation'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </Form>

        {/* Trust indicators */}
        <div className="border-t pt-4 mt-4">
          <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>24hr response</span>
            </div>
            <div>•</div>
            <div>98.5% success rate</div>
            <div>•</div>
            <div>No spam, ever</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Hook for managing popup form state
export function usePopupForm() {
  const [isEnabled, setIsEnabled] = useState(true);

  const disable = () => {
    setIsEnabled(false);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('popup-form-disabled', 'true');
    }
  };

  const enable = () => {
    setIsEnabled(true);
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('popup-form-disabled');
    }
  };

  const reset = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('popup-form-shown');
      sessionStorage.removeItem('popup-form-submitted');
      sessionStorage.removeItem('popup-form-disabled');
    }
    setIsEnabled(true);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const disabled = sessionStorage.getItem('popup-form-disabled');
    if (disabled) {
      setIsEnabled(false);
    }
  }, []);

  return {
    isEnabled,
    disable,
    enable,
    reset
  };
}

// Exit-intent popup variant
export function ExitIntentPopup({ onSubmit, onClose }: Omit<PopupFormProps, 'delay'>) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('exit-popup-shown', 'true');
      }
    };

    // Check if already shown
    const exitPopupShown = sessionStorage.getItem('exit-popup-shown');
    if (exitPopupShown) {
      setHasShown(true);
      return;
    }

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (hasShown && !isOpen) return null;

  return (
    <PopupForm
      delay={0}
      onSubmit={onSubmit}
      onClose={() => {
        setIsOpen(false);
        if (onClose) onClose();
      }}
    />
  );
}

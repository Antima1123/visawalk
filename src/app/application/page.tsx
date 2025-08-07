'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ApplicationForm } from '@/components/forms/application-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ApplicationForm as ApplicationFormType, Country, VisaType } from '@/types';
import { COUNTRIES, VISA_TYPES, PRICING_TIERS } from '@/lib/constants';
import { ArrowLeft, FileText, Clock, Shield, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

function ApplicationPageContent() {
  const searchParams = useSearchParams();
  const [applicationData, setApplicationData] = useState<Partial<ApplicationFormType>>({});
  const [isLoading, setIsLoading] = useState(false);

  // Get URL parameters
  const preSelectedCountry = searchParams.get('country') as Country;
  const preSelectedVisaType = searchParams.get('type') as VisaType;
  const preSelectedPackage = searchParams.get('package');

  useEffect(() => {
    // Initialize form with URL parameters
    const initialData: Partial<ApplicationFormType> = {
      currentStep: 1,
      status: 'draft',
      travelInformation: {
        destinationCountry: preSelectedCountry || undefined,
        visaType: preSelectedVisaType || undefined,
        purposeOfVisit: '',
        intendedArrival: '',
        intendedDeparture: '',
        durationOfStay: 0,
        previousVisits: false
      },
      paymentInformation: preSelectedPackage ? {
        servicePackage: preSelectedPackage as any,
        amount: PRICING_TIERS.find(t => t.id === preSelectedPackage)?.price || 0,
        currency: 'USD',
        paymentMethod: 'card',
        billingAddress: {
          street: '',
          city: '',
          state: '',
          zipCode: '',
          country: ''
        }
      } : undefined
    };

    setApplicationData(initialData);
  }, [preSelectedCountry, preSelectedVisaType, preSelectedPackage]);

  const handleSave = async (data: Partial<ApplicationFormType>) => {
    setIsLoading(true);
    try {
      // Simulate API call to save progress
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setApplicationData(prev => ({
        ...prev,
        ...data,
        updatedAt: new Date().toISOString()
      }));
      
      // In a real app, you would save to your backend here
      localStorage.setItem('visa-application-draft', JSON.stringify(data));
      
    } catch (error) {
      throw new Error('Failed to save application');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (data: ApplicationFormType) => {
    setIsLoading(true);
    try {
      // Simulate API call to submit application
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate application ID
      const applicationId = `VW${Date.now()}`;
      const referenceNumber = `REF${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
      
      const finalData = {
        ...data,
        id: applicationId,
        submittedAt: new Date().toISOString(),
        status: 'submitted' as const
      };
      
      // Clear draft from localStorage
      localStorage.removeItem('visa-application-draft');
      
      // In a real app, redirect to success page or show confirmation
      toast.success(`Application submitted successfully! Reference: ${referenceNumber}`);
      
    } catch (error) {
      throw new Error('Failed to submit application');
    } finally {
      setIsLoading(false);
    }
  };

  const selectedCountry = preSelectedCountry ? COUNTRIES[preSelectedCountry] : null;
  const selectedVisaType = preSelectedVisaType ? VISA_TYPES[preSelectedVisaType] : null;

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <section className="bg-background border-b">
        <div className="visa-container py-8">
          <div className="flex items-center justify-between mb-6">
            <Button variant="ghost" asChild>
              <Link href="/services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Link>
            </Button>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Need help?</div>
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Visa Application Form
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Complete your visa application with our step-by-step guided process. 
              Your progress is automatically saved.
            </p>

            {/* Pre-selected Information */}
            {(selectedCountry || selectedVisaType) && (
              <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                {selectedCountry && (
                  <Badge variant="outline" className="text-sm py-2 px-4">
                    <span className="mr-2">{selectedCountry.flag}</span>
                    Destination: {selectedCountry.name}
                  </Badge>
                )}
                {selectedVisaType && (
                  <Badge variant="outline" className="text-sm py-2 px-4">
                    <span className="mr-2">{selectedVisaType.icon}</span>
                    Type: {selectedVisaType.name}
                  </Badge>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Application Process Info */}
      <section className="py-8 bg-background">
        <div className="visa-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Step-by-Step</h3>
                <p className="text-sm text-muted-foreground">
                  Guided application process with clear instructions
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Secure & Safe</h3>
                <p className="text-sm text-muted-foreground">
                  Your data is encrypted and protected at all times
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Auto-Save</h3>
                <p className="text-sm text-muted-foreground">
                  Progress is automatically saved as you complete each step
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Expert Review</h3>
                <p className="text-sm text-muted-foreground">
                  Professional review before embassy submission
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12">
        <div className="visa-container">
          <ApplicationForm
            initialData={applicationData}
            onSave={handleSave}
            onSubmit={handleSubmit}
          />
        </div>
      </section>

      {/* Help Section */}
      <section className="py-8 bg-muted/50">
        <div className="visa-container text-center">
          <h2 className="text-2xl font-bold mb-4">Need Assistance?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our expert team is here to help you complete your application successfully. 
            Get personalized guidance and support throughout the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link href="/contact">
                Contact Support
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/process">
                View Process Guide
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ApplicationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ApplicationPageContent />
    </Suspense>
  );
}

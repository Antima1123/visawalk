'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FormStepper } from '@/components/common/step-indicator';
import { PersonalDetailsForm } from './personal-details-form';
import { TravelInformationForm } from './travel-information-form';
import { DocumentUploadForm } from './document-upload-form';
import { PaymentInformationForm } from './payment-information-form';
import { ApplicationForm as ApplicationFormType } from '@/types';
import { applicationFormSchema } from '@/lib/validations';
import { ArrowLeft, ArrowRight, Save } from 'lucide-react';
import { toast } from 'sonner';

interface ApplicationFormProps {
  initialData?: Partial<ApplicationFormType>;
  onSubmit?: (data: ApplicationFormType) => void;
  onSave?: (data: Partial<ApplicationFormType>) => void;
}

export function ApplicationForm({ 
  initialData, 
  onSubmit, 
  onSave 
}: ApplicationFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const stepTitles = [
    'Personal Details',
    'Travel Information', 
    'Document Upload',
    'Payment'
  ];

  const form = useForm<ApplicationFormType>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      currentStep: 1,
      status: 'draft',
      ...initialData
    },
    mode: 'onChange'
  });

  const { watch, trigger, getValues, setValue } = form;
  const formData = watch();

  const validateCurrentStep = async () => {
    let fieldsToValidate: (keyof ApplicationFormType)[] = [];
    
    switch (currentStep) {
      case 1:
        fieldsToValidate = ['personalDetails'];
        break;
      case 2:
        fieldsToValidate = ['travelInformation'];
        break;
      case 3:
        fieldsToValidate = ['documentUpload'];
        break;
      case 4:
        fieldsToValidate = ['paymentInformation'];
        break;
    }

    const isValid = await trigger(fieldsToValidate);
    return isValid;
  };

  const handleNext = async () => {
    const isValid = await validateCurrentStep();
    
    if (isValid) {
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1);
        setValue('currentStep', currentStep + 1);
        
        // Auto-save progress
        handleSave();
      } else {
        // Final submission
        handleSubmit();
      }
    } else {
      toast.error('Please fix the errors before proceeding');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setValue('currentStep', currentStep - 1);
    }
  };

  const handleSave = async () => {
    if (!onSave) return;
    
    setIsSaving(true);
    try {
      const currentData = getValues();
      await onSave(currentData);
      toast.success('Progress saved successfully');
    } catch (error) {
      toast.error('Failed to save progress');
    } finally {
      setIsSaving(false);
    }
  };

  const handleSubmit = async () => {
    if (!onSubmit) return;
    
    const isValid = await form.trigger();
    if (!isValid) {
      toast.error('Please complete all required fields');
      return;
    }

    setIsSubmitting(true);
    try {
      const finalData = {
        ...getValues(),
        status: 'submitted' as const,
        submittedAt: new Date().toISOString()
      };
      
      await onSubmit(finalData);
      toast.success('Application submitted successfully!');
    } catch (error) {
      toast.error('Failed to submit application');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <PersonalDetailsForm form={form} />;
      case 2:
        return <TravelInformationForm form={form} />;
      case 3:
        return <DocumentUploadForm form={form} />;
      case 4:
        return <PaymentInformationForm form={form} />;
      default:
        return null;
    }
  };

  const getStepDescription = () => {
    switch (currentStep) {
      case 1:
        return 'Please provide your personal information and passport details';
      case 2:
        return 'Tell us about your travel plans and visa requirements';
      case 3:
        return 'Upload the required documents for your application';
      case 4:
        return 'Review your application and complete the payment';
      default:
        return '';
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Progress Stepper */}
      <FormStepper
        currentStep={currentStep}
        totalSteps={4}
        stepTitles={stepTitles}
      />

      {/* Form Content */}
      <Card>
        <CardHeader>
          <CardTitle>
            Step {currentStep}: {stepTitles[currentStep - 1]}
          </CardTitle>
          <CardDescription>
            {getStepDescription()}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {renderStepContent()}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {currentStep > 1 && (
            <Button
              type="button"
              variant="outline"
              onClick={handlePrevious}
              disabled={isSubmitting}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
          )}
          
          <Button
            type="button"
            variant="ghost"
            onClick={handleSave}
            disabled={isSaving || isSubmitting}
          >
            <Save className="mr-2 h-4 w-4" />
            {isSaving ? 'Saving...' : 'Save Progress'}
          </Button>
        </div>

        <div className="flex items-center space-x-4">
          {currentStep < 4 ? (
            <Button
              type="button"
              onClick={handleNext}
              disabled={isSubmitting}
            >
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-green-600 hover:bg-green-700"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Form Summary */}
      <Card className="bg-muted/50">
        <CardContent className="pt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <div className="font-medium text-muted-foreground">Application ID</div>
              <div>{formData.id || 'Not assigned'}</div>
            </div>
            <div>
              <div className="font-medium text-muted-foreground">Status</div>
              <div className="capitalize">{formData.status}</div>
            </div>
            <div>
              <div className="font-medium text-muted-foreground">Current Step</div>
              <div>{currentStep} of 4</div>
            </div>
            <div>
              <div className="font-medium text-muted-foreground">Last Saved</div>
              <div>{formData.updatedAt ? new Date(formData.updatedAt).toLocaleString() : 'Not saved'}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

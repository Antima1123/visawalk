import { Check, Circle } from 'lucide-react';
import { ProcessStep } from '@/types';
import { cn } from '@/lib/utils';

interface StepIndicatorProps {
  steps: ProcessStep[];
  currentStep?: number;
  className?: string;
  variant?: 'horizontal' | 'vertical';
  showDescription?: boolean;
}

export function StepIndicator({
  steps,
  currentStep = 1,
  className,
  variant = 'horizontal',
  showDescription = true
}: StepIndicatorProps) {
  if (variant === 'vertical') {
    return (
      <div className={cn("space-y-8", className)}>
        {steps.map((step, index) => {
          const isCompleted = step.status === 'completed' || step.step < currentStep;
          const isCurrent = step.step === currentStep || step.status === 'in-progress';
          const isPending = step.status === 'pending' || step.step > currentStep;

          return (
            <div key={step.id} className="flex items-start space-x-4">
              {/* Step indicator */}
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors",
                    isCompleted && "bg-green-500 border-green-500 text-white",
                    isCurrent && "bg-primary border-primary text-primary-foreground",
                    isPending && "bg-background border-muted-foreground text-muted-foreground"
                  )}
                >
                  {isCompleted ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <span className="text-sm font-semibold">{step.step}</span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      "w-0.5 h-16 mt-2 transition-colors",
                      isCompleted ? "bg-green-500" : "bg-muted"
                    )}
                  />
                )}
              </div>

              {/* Step content */}
              <div className="flex-1 pb-8">
                <div className="flex items-center space-x-2 mb-2">
                  <h3
                    className={cn(
                      "text-lg font-semibold transition-colors",
                      isCompleted && "text-green-600",
                      isCurrent && "text-primary",
                      isPending && "text-muted-foreground"
                    )}
                  >
                    {step.title}
                  </h3>
                  {step.estimatedTime && (
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                      {step.estimatedTime}
                    </span>
                  )}
                </div>
                {showDescription && (
                  <p className="text-muted-foreground">{step.description}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // Horizontal variant
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, index) => {
          const isCompleted = step.status === 'completed' || step.step < currentStep;
          const isCurrent = step.step === currentStep || step.status === 'in-progress';
          const isPending = step.status === 'pending' || step.step > currentStep;

          return (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                {/* Step indicator */}
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors mb-2",
                    isCompleted && "bg-green-500 border-green-500 text-white",
                    isCurrent && "bg-primary border-primary text-primary-foreground",
                    isPending && "bg-background border-muted-foreground text-muted-foreground"
                  )}
                >
                  {isCompleted ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <span className="text-sm font-semibold">{step.step}</span>
                  )}
                </div>

                {/* Step title */}
                <h4
                  className={cn(
                    "text-sm font-medium text-center transition-colors",
                    isCompleted && "text-green-600",
                    isCurrent && "text-primary",
                    isPending && "text-muted-foreground"
                  )}
                >
                  {step.title}
                </h4>

                {showDescription && (
                  <p className="text-xs text-muted-foreground text-center mt-1 max-w-[120px]">
                    {step.description}
                  </p>
                )}
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "h-0.5 flex-1 mx-4 transition-colors",
                    isCompleted ? "bg-green-500" : "bg-muted"
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Simple progress stepper for forms
interface FormStepperProps {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[];
  className?: string;
}

export function FormStepper({
  currentStep,
  totalSteps,
  stepTitles,
  className
}: FormStepperProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between mb-4">
        {Array.from({ length: totalSteps }, (_, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <div key={stepNumber} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors",
                    isCompleted && "bg-green-500 text-white",
                    isCurrent && "bg-primary text-primary-foreground",
                    !isCompleted && !isCurrent && "bg-muted text-muted-foreground"
                  )}
                >
                  {isCompleted ? <Check className="h-4 w-4" /> : stepNumber}
                </div>
                <span
                  className={cn(
                    "text-xs mt-1 text-center transition-colors",
                    isCurrent && "text-primary font-medium",
                    !isCurrent && "text-muted-foreground"
                  )}
                >
                  {stepTitles[index]}
                </span>
              </div>

              {index < totalSteps - 1 && (
                <div
                  className={cn(
                    "h-0.5 flex-1 mx-2 transition-colors",
                    isCompleted ? "bg-green-500" : "bg-muted"
                  )}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Progress bar */}
      <div className="w-full bg-muted rounded-full h-2">
        <div
          className="bg-primary h-2 rounded-full transition-all duration-300"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  );
}

// Compact step indicator for mobile
interface CompactStepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

export function CompactStepIndicator({
  currentStep,
  totalSteps,
  className
}: CompactStepIndicatorProps) {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <span className="text-sm font-medium">
        Step {currentStep} of {totalSteps}
      </span>
      <div className="flex space-x-1">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              index + 1 <= currentStep ? "bg-primary" : "bg-muted"
            )}
          />
        ))}
      </div>
    </div>
  );
}

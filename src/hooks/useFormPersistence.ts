'use client';

import { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';

interface UseFormPersistenceOptions {
  key: string;
  debounceMs?: number;
  enabled?: boolean;
}

export function useFormPersistence<T extends Record<string, any>>({
  key,
  debounceMs = 1000,
  enabled = true
}: UseFormPersistenceOptions) {
  const [data, setData] = useState<Partial<T>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  // Load data from localStorage on mount
  useEffect(() => {
    if (!enabled) {
      setIsLoading(false);
      return;
    }

    try {
      const stored = localStorage.getItem(key);
      if (stored) {
        const parsed = JSON.parse(stored);
        setData(parsed.data || {});
        setLastSaved(parsed.timestamp ? new Date(parsed.timestamp) : null);
      }
    } catch (error) {
      console.error('Failed to load persisted form data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [key, enabled]);

  // Debounced save function
  const debouncedSave = useCallback(
    (dataToSave: Partial<T>) => {
      const debouncedFn = debounce(() => {
        if (!enabled) return;

        try {
          const timestamp = new Date().toISOString();
          localStorage.setItem(key, JSON.stringify({
            data: dataToSave,
            timestamp
          }));
          setLastSaved(new Date(timestamp));
        } catch (error) {
          console.error('Failed to persist form data:', error);
        }
      }, debounceMs);

      debouncedFn();
    },
    [key, enabled, debounceMs]
  );

  // Save data to localStorage
  const saveData = useCallback((newData: Partial<T>) => {
    setData(newData);
    debouncedSave(newData);
  }, [debouncedSave]);

  // Clear persisted data
  const clearData = useCallback(() => {
    if (!enabled) return;

    try {
      localStorage.removeItem(key);
      setData({});
      setLastSaved(null);
    } catch (error) {
      console.error('Failed to clear persisted form data:', error);
    }
  }, [key, enabled]);

  // Update specific field
  const updateField = useCallback((field: keyof T, value: any) => {
    const newData = { ...data, [field]: value };
    saveData(newData);
  }, [data, saveData]);

  // Check if data exists
  const hasPersistedData = Object.keys(data).length > 0;

  return {
    data,
    saveData,
    updateField,
    clearData,
    isLoading,
    lastSaved,
    hasPersistedData
  };
}

// Hook for auto-saving form data
export function useAutoSave<T extends Record<string, any>>(
  formData: T,
  options: UseFormPersistenceOptions
) {
  const { saveData, ...persistence } = useFormPersistence<T>(options);

  useEffect(() => {
    if (!persistence.isLoading && formData) {
      saveData(formData);
    }
  }, [formData, saveData, persistence.isLoading]);

  return persistence;
}

// Hook for managing draft states
export function useDraftManager<T extends Record<string, any>>(
  key: string,
  initialData?: Partial<T>
) {
  const [isDraft, setIsDraft] = useState(false);
  const [draftData, setDraftData] = useState<Partial<T>>(initialData || {});

  const persistence = useFormPersistence<T>({
    key: `draft_${key}`,
    debounceMs: 500
  });

  useEffect(() => {
    if (persistence.hasPersistedData) {
      setDraftData(persistence.data);
      setIsDraft(true);
    }
  }, [persistence.hasPersistedData, persistence.data]);

  const saveDraft = useCallback((data: Partial<T>) => {
    setDraftData(data);
    setIsDraft(true);
    persistence.saveData(data);
  }, [persistence]);

  const clearDraft = useCallback(() => {
    setDraftData({});
    setIsDraft(false);
    persistence.clearData();
  }, [persistence]);

  const restoreDraft = useCallback(() => {
    return draftData;
  }, [draftData]);

  return {
    isDraft,
    draftData,
    saveDraft,
    clearDraft,
    restoreDraft,
    lastSaved: persistence.lastSaved
  };
}

// Hook for form step persistence
export function useStepPersistence(formKey: string, totalSteps: number) {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const stepKey = `${formKey}_step`;
  const completedKey = `${formKey}_completed`;

  useEffect(() => {
    try {
      const savedStep = localStorage.getItem(stepKey);
      const savedCompleted = localStorage.getItem(completedKey);

      if (savedStep) {
        const step = parseInt(savedStep, 10);
        if (step >= 1 && step <= totalSteps) {
          setCurrentStep(step);
        }
      }

      if (savedCompleted) {
        const completed = JSON.parse(savedCompleted);
        if (Array.isArray(completed)) {
          setCompletedSteps(completed);
        }
      }
    } catch (error) {
      console.error('Failed to load step persistence:', error);
    }
  }, [stepKey, completedKey, totalSteps]);

  const goToStep = useCallback((step: number) => {
    if (step >= 1 && step <= totalSteps) {
      setCurrentStep(step);
      localStorage.setItem(stepKey, step.toString());
    }
  }, [stepKey, totalSteps]);

  const markStepCompleted = useCallback((step: number) => {
    if (!completedSteps.includes(step)) {
      const newCompleted = [...completedSteps, step];
      setCompletedSteps(newCompleted);
      localStorage.setItem(completedKey, JSON.stringify(newCompleted));
    }
  }, [completedSteps, completedKey]);

  const nextStep = useCallback(() => {
    if (currentStep < totalSteps) {
      markStepCompleted(currentStep);
      goToStep(currentStep + 1);
    }
  }, [currentStep, totalSteps, markStepCompleted, goToStep]);

  const previousStep = useCallback(() => {
    if (currentStep > 1) {
      goToStep(currentStep - 1);
    }
  }, [currentStep, goToStep]);

  const resetSteps = useCallback(() => {
    setCurrentStep(1);
    setCompletedSteps([]);
    localStorage.removeItem(stepKey);
    localStorage.removeItem(completedKey);
  }, [stepKey, completedKey]);

  const isStepCompleted = useCallback((step: number) => {
    return completedSteps.includes(step);
  }, [completedSteps]);

  const canGoToStep = useCallback((step: number) => {
    // Can go to current step, next step, or any completed step
    return step <= currentStep + 1 || isStepCompleted(step);
  }, [currentStep, isStepCompleted]);

  return {
    currentStep,
    completedSteps,
    goToStep,
    nextStep,
    previousStep,
    markStepCompleted,
    resetSteps,
    isStepCompleted,
    canGoToStep,
    progress: (completedSteps.length / totalSteps) * 100
  };
}

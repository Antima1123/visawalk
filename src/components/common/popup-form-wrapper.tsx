'use client';

import { PopupForm } from './popup-form';
import type { PopupForm as PopupFormType } from '@/types';

export function PopupFormWrapper() {
  const handlePopupSubmit = async (data: PopupFormType) => {
    // In a real app, this would send data to your API
    console.log('Popup form submitted:', data);
    // You could also trigger analytics events here
  };

  return (
    <PopupForm
      delay={5000}
      onSubmit={handlePopupSubmit}
    />
  );
}

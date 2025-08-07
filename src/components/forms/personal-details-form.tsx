'use client';

import { UseFormReturn } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ApplicationForm } from '@/types';
import { User, Mail, Phone, Calendar, MapPin, CreditCard } from 'lucide-react';

interface PersonalDetailsFormProps {
  form: UseFormReturn<ApplicationForm>;
}

export function PersonalDetailsForm({ form }: PersonalDetailsFormProps) {
  return (
    <Form {...form}>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <FormField
            control={form.control}
            name="personalDetails.firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>First Name</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter your first name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Last Name */}
          <FormField
            control={form.control}
            name="personalDetails.lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Last Name</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter your last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <FormField
            control={form.control}
            name="personalDetails.email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>Email Address</span>
                </FormLabel>
                <FormControl>
                  <Input type="email" placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormDescription>
                  We&apos;ll use this email for all communication regarding your application
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="personalDetails.phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Phone Number</span>
                </FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
                </FormControl>
                <FormDescription>
                  Include country code (e.g., +1 for US/Canada)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Date of Birth */}
          <FormField
            control={form.control}
            name="personalDetails.dateOfBirth"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Date of Birth</span>
                </FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Nationality */}
          <FormField
            control={form.control}
            name="personalDetails.nationality"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Nationality</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="e.g., American, Canadian, British" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Passport Number */}
          <FormField
            control={form.control}
            name="personalDetails.passportNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center space-x-2">
                  <CreditCard className="h-4 w-4" />
                  <span>Passport Number</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter passport number" {...field} />
                </FormControl>
                <FormDescription>
                  Enter the number exactly as it appears on your passport
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Passport Expiry */}
          <FormField
            control={form.control}
            name="personalDetails.passportExpiry"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Passport Expiry Date</span>
                </FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormDescription>
                  Your passport should be valid for at least 6 months from travel date
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Marital Status */}
          <FormField
            control={form.control}
            name="personalDetails.maritalStatus"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Marital Status</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select marital status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="married">Married</SelectItem>
                    <SelectItem value="divorced">Divorced</SelectItem>
                    <SelectItem value="widowed">Widowed</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Occupation */}
          <FormField
            control={form.control}
            name="personalDetails.occupation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Occupation</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Software Engineer, Teacher, Student" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Employer (Optional) */}
        <FormField
          control={form.control}
          name="personalDetails.employer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Employer (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Company name or organization" {...field} />
              </FormControl>
              <FormDescription>
                If you&apos;re employed, please provide your employer&apos;s name
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Important Notes */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-medium text-blue-900 mb-2">Important Notes:</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• All information must match exactly with your passport</li>
            <li>• Double-check spelling and dates for accuracy</li>
            <li>• Your passport must be valid for at least 6 months from your intended travel date</li>
            <li>• Any discrepancies may result in application delays or rejection</li>
          </ul>
        </div>
      </div>
    </Form>
  );
}

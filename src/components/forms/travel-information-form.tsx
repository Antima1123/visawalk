'use client';

import { UseFormReturn } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { CountrySelector } from '@/components/common/country-selector';
import { ApplicationForm } from '@/types';
import { VISA_TYPES } from '@/lib/constants';
import { Plane, Calendar, MapPin, FileText, Clock } from 'lucide-react';

interface TravelInformationFormProps {
  form: UseFormReturn<ApplicationForm>;
}

export function TravelInformationForm({ form }: TravelInformationFormProps) {
  const watchedCountry = form.watch('travelInformation.destinationCountry');
  const watchedPreviousVisits = form.watch('travelInformation.previousVisits');

  return (
    <Form {...form}>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Destination Country */}
          <FormField
            control={form.control}
            name="travelInformation.destinationCountry"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Destination Country</span>
                </FormLabel>
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

          {/* Visa Type */}
          <FormField
            control={form.control}
            name="travelInformation.visaType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>Visa Type</span>
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
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
        </div>

        {/* Purpose of Visit */}
        <FormField
          control={form.control}
          name="travelInformation.purposeOfVisit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Purpose of Visit</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Please describe the purpose of your visit in detail..."
                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                Provide a detailed explanation of why you&apos;re visiting (e.g., tourism, business meetings, study, etc.)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Intended Arrival */}
          <FormField
            control={form.control}
            name="travelInformation.intendedArrival"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Intended Arrival Date</span>
                </FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Intended Departure */}
          <FormField
            control={form.control}
            name="travelInformation.intendedDeparture"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Intended Departure Date</span>
                </FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Duration of Stay */}
          <FormField
            control={form.control}
            name="travelInformation.durationOfStay"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Duration (Days)</span>
                </FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    placeholder="Number of days"
                    {...field}
                    onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Previous Visits */}
        <FormField
          control={form.control}
          name="travelInformation.previousVisits"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Have you previously visited {watchedCountry ? watchedCountry.toUpperCase() : 'this country'}?
                </FormLabel>
                <FormDescription>
                  Check this box if you have visited this country before
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        {/* Previous Visit Details (Conditional) */}
        {watchedPreviousVisits && (
          <FormField
            control={form.control}
            name="travelInformation.previousVisitDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Previous Visit Details</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Please provide details about your previous visits (dates, purpose, duration, etc.)"
                    className="min-h-[80px]"
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  Include dates, purpose, and duration of previous visits
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {/* Accommodation Address */}
        <FormField
          control={form.control}
          name="travelInformation.accommodationAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Accommodation Address (Optional)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Hotel name and address, or host's address if staying with someone"
                  className="min-h-[80px]"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                Provide the address where you&apos;ll be staying during your visit
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Invitation Letter */}
        <FormField
          control={form.control}
          name="travelInformation.invitationLetter"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Do you have an invitation letter?
                </FormLabel>
                <FormDescription>
                  Check this if you have an invitation letter from a host, company, or institution
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        {/* Travel Tips */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-medium text-green-900 mb-2">Travel Planning Tips:</h4>
          <ul className="text-sm text-green-800 space-y-1">
            <li>• Plan your travel dates carefully - visa processing can take several weeks</li>
            <li>• Book refundable flights until your visa is approved</li>
            <li>• Ensure your passport is valid for at least 6 months beyond your intended stay</li>
            <li>• Consider travel insurance for your trip</li>
            <li>• Research entry requirements and COVID-19 restrictions for your destination</li>
          </ul>
        </div>
      </div>
    </Form>
  );
}

'use client';

import { UseFormReturn } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ApplicationForm } from '@/types';
import { PRICING_TIERS } from '@/lib/constants';
import { CreditCard, MapPin, Shield, CheckCircle } from 'lucide-react';

interface PaymentInformationFormProps {
  form: UseFormReturn<ApplicationForm>;
}

export function PaymentInformationForm({ form }: PaymentInformationFormProps) {
  const watchedPackage = form.watch('paymentInformation.servicePackage');
  const selectedTier = PRICING_TIERS.find(tier => tier.name === watchedPackage);

  return (
    <Form {...form}>
      <div className="space-y-6">
        {/* Service Package Selection */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Select Service Package</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PRICING_TIERS.map((tier) => (
              <Card 
                key={tier.id}
                className={`cursor-pointer transition-all ${
                  watchedPackage === tier.name 
                    ? 'border-primary shadow-md' 
                    : 'hover:border-primary/50'
                }`}
                onClick={() => {
                  form.setValue('paymentInformation.servicePackage', tier.name);
                  form.setValue('paymentInformation.amount', tier.price);
                  form.setValue('paymentInformation.currency', 'USD');
                }}
              >
                <CardHeader className="text-center">
                  {tier.popular && (
                    <Badge className="w-fit mx-auto mb-2">Most Popular</Badge>
                  )}
                  <CardTitle className="text-xl">{tier.title}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-2">
                    ${tier.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tier.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {tier.features.length > 4 && (
                      <li className="text-xs text-primary">
                        +{tier.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Payment Method */}
        <FormField
          control={form.control}
          name="paymentInformation.paymentMethod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Payment Method</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="card">
                    <div className="flex items-center space-x-2">
                      <CreditCard className="h-4 w-4" />
                      <span>Credit/Debit Card</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="bank_transfer">
                    <div className="flex items-center space-x-2">
                      <CreditCard className="h-4 w-4" />
                      <span>Bank Transfer</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="paypal">
                    <div className="flex items-center space-x-2">
                      <CreditCard className="h-4 w-4" />
                      <span>PayPal</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Billing Address */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center space-x-2">
            <MapPin className="h-5 w-5" />
            <span>Billing Address</span>
          </h3>
          
          <FormField
            control={form.control}
            name="paymentInformation.billingAddress.street"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Street Address</FormLabel>
                <FormControl>
                  <Input placeholder="123 Main Street, Apt 4B" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="paymentInformation.billingAddress.city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="New York" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="paymentInformation.billingAddress.state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State/Province</FormLabel>
                  <FormControl>
                    <Input placeholder="NY" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="paymentInformation.billingAddress.zipCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ZIP/Postal Code</FormLabel>
                  <FormControl>
                    <Input placeholder="10001" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="paymentInformation.billingAddress.country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input placeholder="United States" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Order Summary */}
        {selectedTier && (
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span>{selectedTier.title}</span>
                <span className="font-semibold">${selectedTier.price}</span>
              </div>
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>Processing Fee</span>
                <span>$0</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total</span>
                  <span>${selectedTier.price}</span>
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <p>• Payment will be processed securely</p>
                <p>• You will receive a confirmation email</p>
                <p>• Refund available if visa is rejected</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Security Notice */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Shield className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-green-900 mb-2">Secure Payment</h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Your payment information is encrypted and secure</li>
                <li>• We use industry-standard SSL encryption</li>
                <li>• Your card details are never stored on our servers</li>
                <li>• Full refund if your visa application is rejected</li>
                <li>• 24/7 customer support for payment issues</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-medium text-blue-900 mb-2">Terms & Conditions</h4>
          <div className="text-sm text-blue-800 space-y-2">
            <p>
              By proceeding with payment, you agree to our Terms of Service and Privacy Policy. 
              You understand that:
            </p>
            <ul className="space-y-1 ml-4">
              <li>• Visa approval is not guaranteed and depends on embassy decisions</li>
              <li>• Our service fee covers professional consultation and application assistance</li>
              <li>• Embassy fees (if any) are separate and non-refundable</li>
              <li>• Processing times are estimates and may vary</li>
              <li>• You will provide accurate and truthful information</li>
            </ul>
          </div>
        </div>
      </div>
    </Form>
  );
}

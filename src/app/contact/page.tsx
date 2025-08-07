'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { CountrySelector } from '@/components/common/country-selector';
import { ContactForm } from '@/types';
import { contactFormSchema } from '@/lib/validations';
import { CONTACT_PRIORITIES, CONTACT_DEPARTMENTS, VISA_TYPES } from '@/lib/constants';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      priority: 'medium',
      department: 'general'
    }
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Generate ticket ID
      const ticketId = `TK${Date.now()}`;
      
      toast.success(`Message sent successfully! Ticket ID: ${ticketId}`);
      form.reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const officeLocations = [
    {
      id: '1',
      city: 'New York',
      country: 'United States',
      address: '123 Business Ave, Suite 100\nNew York, NY 10001',
      phone: '+1 (555) 123-4567',
      email: 'ny@visawalk.com',
      workingHours: 'Mon-Fri: 9:00 AM - 6:00 PM EST'
    },
    {
      id: '2',
      city: 'Toronto',
      country: 'Canada',
      address: '456 King Street West, Floor 15\nToronto, ON M5V 1L7',
      phone: '+1 (416) 555-0123',
      email: 'toronto@visawalk.com',
      workingHours: 'Mon-Fri: 9:00 AM - 6:00 PM EST'
    },
    {
      id: '3',
      city: 'London',
      country: 'United Kingdom',
      address: '789 Oxford Street, Suite 200\nLondon W1C 1DX',
      phone: '+44 20 7123 4567',
      email: 'london@visawalk.com',
      workingHours: 'Mon-Fri: 9:00 AM - 5:00 PM GMT'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="visa-hero-bg visa-section-padding">
        <div className="visa-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Get in touch with our expert team for personalized assistance with your visa application. 
            We&apos;re here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-muted/50">
        <div className="visa-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
                <p className="text-muted-foreground mb-4">
                  Speak directly with our visa experts
                </p>
                <div className="space-y-2">
                  <div className="font-medium">+1 (555) 123-4567</div>
                  <div className="text-sm text-muted-foreground">
                    Mon-Fri: 9:00 AM - 6:00 PM EST
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                <p className="text-muted-foreground mb-4">
                  Send us your questions anytime
                </p>
                <div className="space-y-2">
                  <div className="font-medium">info@visawalk.com</div>
                  <div className="text-sm text-muted-foreground">
                    Response within 24 hours
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                <p className="text-muted-foreground mb-4">
                  Get instant help from our team
                </p>
                <Sheet open={isChatOpen} onOpenChange={setIsChatOpen}>
                  <SheetTrigger asChild>
                    <Button>Start Chat</Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Live Chat Support</SheetTitle>
                      <SheetDescription>
                        Chat with our visa experts in real-time
                      </SheetDescription>
                    </SheetHeader>
                    <div className="mt-6">
                      <div className="bg-muted p-4 rounded-lg mb-4">
                        <p className="text-sm">
                          👋 Hello! I&apos;m here to help with your visa questions.
                          How can I assist you today?
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <Input placeholder="Type your message..." />
                        <Button size="icon">
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="visa-section-padding">
        <div className="visa-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number (Optional)</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="department"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Department</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select department" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {CONTACT_DEPARTMENTS.map((dept) => (
                                <SelectItem key={dept.value} value={dept.value}>
                                  {dept.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="priority"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Priority</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select priority" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {CONTACT_PRIORITIES.map((priority) => (
                                <SelectItem key={priority.value} value={priority.value}>
                                  {priority.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Brief description of your inquiry" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Destination Country (Optional)</FormLabel>
                          <FormControl>
                            <CountrySelector
                              value={field.value}
                              onValueChange={field.onChange}
                              placeholder="Select country"
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
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please provide details about your inquiry..."
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Please provide as much detail as possible to help us assist you better
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Form>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Offices</h2>
              <div className="space-y-6">
                {officeLocations.map((office) => (
                  <Card key={office.id}>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <MapPin className="h-5 w-5" />
                        <span>{office.city}, {office.country}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <div className="font-medium">Address:</div>
                        <div className="text-sm text-muted-foreground whitespace-pre-line">
                          {office.address}
                        </div>
                      </div>
                      <div>
                        <div className="font-medium">Phone:</div>
                        <div className="text-sm text-muted-foreground">{office.phone}</div>
                      </div>
                      <div>
                        <div className="font-medium">Email:</div>
                        <div className="text-sm text-muted-foreground">{office.email}</div>
                      </div>
                      <div>
                        <div className="font-medium flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>Working Hours:</span>
                        </div>
                        <div className="text-sm text-muted-foreground">{office.workingHours}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="visa-section-padding bg-primary text-primary-foreground">
        <div className="visa-container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Application?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don&apos;t wait - begin your visa application process today with our expert guidance.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/application">
              Start Application Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

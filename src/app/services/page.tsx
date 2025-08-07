'use client';

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { CountryCard } from "@/components/common/country-selector";
import { PricingComparison } from "@/components/common/pricing-card";
import { COUNTRIES, PRICING_TIERS, VISA_TYPES } from "@/lib/constants";
import { ArrowRight, Clock, CheckCircle, Plane, Building, GraduationCap, Briefcase, Star, Shield, Users, Globe } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="visa-hero-bg visa-section-padding">
        <div className="visa-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Visa Services
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Expert visa application services for Canada, Australia, UK, and Germany. 
            Choose from our comprehensive packages designed to meet your specific needs.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="visa-section-padding">
        <div className="visa-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Visa Types We Handle</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From tourist visas to work permits, we provide comprehensive services for all visa categories.
            </p>
          </div>

          <Tabs defaultValue="tourist" className="w-full">
            <TabsList className="grid w-full grid-cols-4 h-auto p-1">
              <TabsTrigger value="tourist" className="flex flex-col items-center space-y-2 p-4">
                <Plane className="h-5 w-5" />
                <span className="text-xs font-medium">Tourist</span>
              </TabsTrigger>
              <TabsTrigger value="business" className="flex flex-col items-center space-y-2 p-4">
                <Building className="h-5 w-5" />
                <span className="text-xs font-medium">Business</span>
              </TabsTrigger>
              <TabsTrigger value="student" className="flex flex-col items-center space-y-2 p-4">
                <GraduationCap className="h-5 w-5" />
                <span className="text-xs font-medium">Student</span>
              </TabsTrigger>
              <TabsTrigger value="work" className="flex flex-col items-center space-y-2 p-4">
                <Briefcase className="h-5 w-5" />
                <span className="text-xs font-medium">Work</span>
              </TabsTrigger>
            </TabsList>

            {Object.entries(VISA_TYPES).slice(0, 4).map(([key, type]) => (
              <TabsContent key={key} value={key} className="mt-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{type.name}</h3>
                  <p className="text-muted-foreground">{type.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {Object.values(COUNTRIES).map((country) => (
                    <CountryCard
                      key={country.code}
                      country={country.code}
                      showDetails={true}
                      onClick={() => {
                        // Navigate to application with pre-selected country and visa type
                        window.location.href = `/application?country=${country.code}&type=${key}`;
                      }}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="visa-section-padding bg-muted/50">
        <div className="visa-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Service Package</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. All packages include expert guidance and support.
            </p>
          </div>

          <PricingComparison
            tiers={PRICING_TIERS}
            onSelect={(tier) => {
              // Navigate to application with selected tier
              window.location.href = `/application?package=${tier.id}`;
            }}
          />
        </div>
      </section>

      {/* Features Comparison */}
      <section className="visa-section-padding">
        <div className="visa-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What&apos;s Included</h2>
            <p className="text-muted-foreground">
              Compare our service packages and choose what works best for you.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-semibold">Features</th>
                  {PRICING_TIERS.map((tier) => (
                    <th key={tier.id} className="text-center p-4 font-semibold">
                      {tier.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  'Application form assistance',
                  'Document checklist',
                  'Application review',
                  'Email support',
                  'Phone support',
                  'Priority processing',
                  'Interview preparation',
                  'Document preparation',
                  'Application tracking',
                  'Dedicated consultant',
                  'Express processing',
                  '24/7 support'
                ].map((feature, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50">
                    <td className="p-4">{feature}</td>
                    {PRICING_TIERS.map((tier) => (
                      <td key={tier.id} className="text-center p-4">
                        {tier.features.includes(feature) || 
                         tier.features.some(f => f.toLowerCase().includes(feature.toLowerCase())) ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="visa-section-padding bg-primary text-primary-foreground">
        <div className="visa-container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Choose your destination and let our experts handle the rest. 
            Your visa application journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/application">
                Start Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="/contact">
                Get Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { Button } from "@/components/ui/button";
import { QuickCountrySelector } from "@/components/common/country-selector";
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel";
import { COMPANY_STATS, COUNTRIES } from "@/lib/constants";
import { ArrowRight, CheckCircle, Users, Globe, Award, Clock, Plane, FileCheck } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="visa-hero-bg visa-section-padding">
        <div className="visa-container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Your Trusted Partner for
              <span className="visa-text-gradient block">Visa Applications</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Make your visa application process simple, fast, and reliable with our expert guidance.
              We&apos;ve helped over 50,000 people achieve their travel dreams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" asChild>
                <Link href="/application">
                  Start Your Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">
                  View Services
                </Link>
              </Button>
            </div>

            {/* Quick Country Selector */}
            <div className="max-w-2xl mx-auto">
              <h2 className="text-lg font-semibold mb-4">Choose Your Destination</h2>
              <QuickCountrySelector
                onSelect={(country) => {
                  // Navigate to services page with selected country
                  window.location.href = `/services?country=${country}`;
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-muted/50">
        <div className="visa-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">{COMPANY_STATS.totalApplications.toLocaleString()}+</div>
              <div className="text-sm text-muted-foreground">Applications Processed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">{COMPANY_STATS.successRate}%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">{COMPANY_STATS.countriesServed}</div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">{COMPANY_STATS.yearsExperience}+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="visa-section-padding">
        <div className="visa-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose VisaWalk?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make visa applications simple with our comprehensive services and expert guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Expert Guidance</h3>
              <p className="text-muted-foreground">
                Professional visa consultants with years of experience guide you through every step.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Fast Processing</h3>
              <p className="text-muted-foreground">
                Quick turnaround times with priority processing options available.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">24/7 Support</h3>
              <p className="text-muted-foreground">
                Round-the-clock customer support to answer all your questions.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">High Success Rate</h3>
              <p className="text-muted-foreground">
                98.5% success rate with thousands of satisfied customers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Country-Specific Services */}
      <section className="visa-section-padding bg-muted/50">
        <div className="visa-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Visa Services by Country</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized expertise for your destination country with tailored guidance and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.values(COUNTRIES).map((country) => (
              <div key={country.code} className="visa-card p-6 text-center group hover:shadow-lg transition-all duration-200">
                <div className="text-4xl mb-4">{country.flag}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {country.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Processing: {country.processingTime}
                </p>
                <div className="space-y-2 mb-6">
                  <div className="text-xs text-muted-foreground">Popular visa types:</div>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {country.visaTypes.slice(0, 3).map((type) => (
                      <span
                        key={type}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full group-hover:border-primary group-hover:text-primary" asChild>
                  <Link href={`/services?country=${country.code}`}>
                    View Services
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="visa-section-padding">
        <div className="visa-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from real people who achieved their visa goals with our help.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <TestimonialCarousel />
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/testimonials">
                View All Testimonials
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="visa-section-padding bg-muted/50">
        <div className="visa-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple 4-Step Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We&apos;ve streamlined the visa application process to make it as simple as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">1. Submit Documents</h3>
              <p className="text-sm text-muted-foreground">
                Upload your documents through our secure portal with guided assistance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">2. Expert Review</h3>
              <p className="text-sm text-muted-foreground">
                Our visa experts review and verify all your documents for completeness.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">3. Embassy Processing</h3>
              <p className="text-sm text-muted-foreground">
                We submit your application to the embassy and track its progress.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">4. Visa Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Receive your approved visa and start planning your journey.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/process">
                Learn More About Our Process
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="visa-section-padding bg-primary text-primary-foreground">
        <div className="visa-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Visa Application?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trusted us with their visa applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/application">
                Apply Now - It&apos;s Free to Start
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
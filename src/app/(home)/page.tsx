'use client';

import { Button } from "@/components/ui/button";
import { QuickCountrySelector } from "@/components/common/country-selector";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { FloatingElements } from "@/components/ui/floating-elements";
import { Spotlight } from "@/components/ui/spotlight";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { COMPANY_STATS, COUNTRIES } from "@/lib/constants";
import { ArrowRight, CheckCircle, Users, Globe, Award, Clock, Plane, FileCheck, Star, Shield, Zap, Heart } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "VisaWalk made my dream of studying in Canada a reality. Their expert guidance and personalized support throughout the entire process was exceptional. I couldn't have done it without them!",
    name: "Sarah Johnson",
    title: "Student Visa to Canada"
  },
  {
    quote: "The team at VisaWalk handled my work visa application with such professionalism. They kept me informed at every step and ensured all documents were perfect. Highly recommended!",
    name: "Michael Chen",
    title: "Work Visa to Australia"
  },
  {
    quote: "After being rejected twice by other agencies, VisaWalk successfully got my tourist visa approved. Their attention to detail and expertise made all the difference.",
    name: "Priya Patel",
    title: "Tourist Visa to USA"
  },
  {
    quote: "The family reunion visa process seemed impossible until I found VisaWalk. They made it smooth and stress-free. Forever grateful for their dedication and support.",
    name: "Ahmed Hassan",
    title: "Family Visa to UK"
  },
  {
    quote: "Professional, reliable, and results-driven. VisaWalk exceeded my expectations in every way. My business visa was approved faster than I ever imagined possible.",
    name: "Elena Rodriguez",
    title: "Business Visa to Germany"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Ultra Modern Hero Section with Spotlight & Background Beams */}
      <section className="relative h-screen w-full overflow-hidden bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        {/* Spotlight Effect */}
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

        {/* Background Beams */}
        <BackgroundBeams className="absolute inset-0 z-0" />

        {/* Main Content */}
        <div className="relative z-10 flex h-full w-full items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
              </span>
              ✨ 98.5% Success Rate • 50,000+ Applications Processed
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-4">
                Your Gateway to
              </h1>
              <TextGenerateEffect
                words="Global Opportunities"
                className="text-4xl md:text-7xl lg:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400"
                filter={false}
                duration={1.2}
              />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-lg md:text-xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Transform your visa application journey with AI-powered guidance, expert consultation,
              and a proven track record of success. Join thousands who've achieved their dreams.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Button
                size="lg"
                className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                asChild
              >
                <Link href="/application">
                  <span className="relative z-10 flex items-center">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 border-2 border-neutral-600 text-neutral-300 hover:bg-neutral-800 hover:border-neutral-500 font-semibold rounded-full transition-all duration-300 backdrop-blur-sm"
                asChild
              >
                <Link href="/services">
                  Explore Services
                </Link>
              </Button>
            </motion.div>

            {/* Quick Country Selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-lg font-semibold mb-6 text-neutral-200">Choose Your Destination</h2>
              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
                <QuickCountrySelector
                  onSelect={(country) => {
                    window.location.href = `/services?country=${country}`;
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Trust Indicators with Animations */}
      <section className="relative py-16 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
        <FloatingElements />
        <div className="visa-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-2 group"
            >
              <div className="relative">
                <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter value={COMPANY_STATS.totalApplications} suffix="+" />
                </div>
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-sm text-slate-400">Applications Processed</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-2 group"
            >
              <div className="relative">
                <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter value={COMPANY_STATS.successRate} suffix="%" />
                </div>
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-sm text-slate-400">Success Rate</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-2 group"
            >
              <div className="relative">
                <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter value={COMPANY_STATS.countriesServed} />
                </div>
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-sm text-slate-400">Countries Served</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-2 group"
            >
              <div className="relative">
                <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter value={COMPANY_STATS.yearsExperience} suffix="+" />
                </div>
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-sm text-slate-400">Years Experience</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modern Service Highlights */}
      <section className="visa-section-padding bg-slate-900">
        <div className="visa-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose VisaWalk?</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We make visa applications simple with our comprehensive services and expert guidance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden"
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Holographic border effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px]">
                <div className="w-full h-full bg-slate-800/90 rounded-xl"></div>
              </div>

              {/* Main card content */}
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center space-y-4 hover:border-primary/50 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                {/* Animated icon container */}
                <div className="relative w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <CheckCircle className="h-8 w-8 text-white relative z-10" />
                  {/* Rotating background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </div>

                <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors duration-300">Expert Guidance</h3>
                <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                  Professional visa consultants with years of experience guide you through every step.
                </p>

                {/* Floating particles effect */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-secondary/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px]">
                <div className="w-full h-full bg-slate-800/90 rounded-xl"></div>
              </div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center space-y-4 hover:border-primary/50 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                <div className="relative w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <Clock className="h-8 w-8 text-white relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors duration-300">Fast Processing</h3>
                <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                  Quick turnaround times with priority processing options available.
                </p>
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-secondary/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px]">
                <div className="w-full h-full bg-slate-800/90 rounded-xl"></div>
              </div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center space-y-4 hover:border-primary/50 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                <div className="relative w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <Users className="h-8 w-8 text-white relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors duration-300">24/7 Support</h3>
                <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                  Round-the-clock customer support to answer all your questions.
                </p>
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-secondary/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px]">
                <div className="w-full h-full bg-slate-800/90 rounded-xl"></div>
              </div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center space-y-4 hover:border-primary/50 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                <div className="relative w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <Award className="h-8 w-8 text-white relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors duration-300">High Success Rate</h3>
                <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                  98.5% success rate with thousands of satisfied customers worldwide.
                </p>
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-secondary/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
              </div>
            </motion.div>
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

      {/* Modern Testimonials with Infinite Moving Cards */}
      <section className="relative py-20 bg-gradient-to-b from-slate-900 to-black overflow-hidden">
        <div className="visa-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-300">
              Success Stories
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied clients who've achieved their visa dreams with VisaWalk's expert guidance and proven success strategies.
            </p>
          </motion.div>

          {/* Infinite Moving Cards */}
          <div className="relative">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
              pauseOnHover={true}
              className="mb-8"
            />
            <InfiniteMovingCards
              items={testimonials.slice().reverse()}
              direction="left"
              speed="slow"
              pauseOnHover={true}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button
              variant="outline"
              className="px-8 py-4 border-2 border-neutral-600 text-neutral-300 hover:bg-neutral-800 hover:border-neutral-500 font-semibold rounded-full transition-all duration-300 backdrop-blur-sm"
              asChild
            >
              <Link href="/testimonials">
                View All Success Stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Ultra Modern Process Section with Interactive Timeline */}
      <section className="relative py-20 bg-gradient-to-b from-slate-900 to-black overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

        <div className="visa-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-300">
              Streamlined Process
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              Experience our revolutionary 4-step visa application process designed for maximum efficiency and success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-30"></div>

            {[
              {
                icon: FileCheck,
                title: "Submit Documents",
                description: "Upload your documents through our AI-powered secure portal with intelligent guidance.",
                color: "from-blue-500 to-cyan-500",
                delay: 0.1
              },
              {
                icon: CheckCircle,
                title: "Expert Review",
                description: "Our certified visa experts review and optimize your application for maximum approval chances.",
                color: "from-purple-500 to-pink-500",
                delay: 0.2
              },
              {
                icon: Globe,
                title: "Embassy Processing",
                description: "We handle embassy submission and provide real-time tracking with automated updates.",
                color: "from-green-500 to-emerald-500",
                delay: 0.3
              },
              {
                icon: Plane,
                title: "Visa Delivery",
                description: "Receive your approved visa with comprehensive travel preparation assistance.",
                color: "from-orange-500 to-red-500",
                delay: 0.4
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: step.delay }}
                viewport={{ once: true }}
                className="group relative text-center"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold z-10">
                  {index + 1}
                </div>

                {/* Main card */}
                <div className="relative bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                  {/* Icon container */}
                  <div className={`relative w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden`}>
                    <step.icon className="h-10 w-10 text-white relative z-10" />
                    {/* Rotating background effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                    {step.description}
                  </p>

                  {/* Floating particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              asChild
            >
              <Link href="/process">
                Discover Our Complete Process
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
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
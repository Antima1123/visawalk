import { StepIndicator } from "@/components/common/step-indicator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { PROCESS_STEPS } from "@/lib/constants";
import { ArrowRight, FileText, Clock, Shield, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ProcessPage() {
  const faqs = [
    {
      question: "How long does the visa application process take?",
      answer: "Processing times vary by country and visa type. Tourist visas typically take 1-4 weeks, while work visas may take 2-8 weeks. We provide estimated timelines for each country and keep you updated throughout the process."
    },
    {
      question: "What documents do I need for my visa application?",
      answer: "Required documents vary by destination and visa type. Common requirements include a valid passport, completed application form, passport photos, proof of financial support, and travel itinerary. We provide a personalized checklist based on your specific application."
    },
    {
      question: "Can you help if my visa application is rejected?",
      answer: "Yes, we offer appeal services and can help you understand the reasons for rejection. Our experts will review your case and advise on the best course of action, including reapplication with improved documentation."
    },
    {
      question: "Do you offer expedited processing?",
      answer: "Yes, we offer priority and express processing options for urgent applications. These services come with additional fees but can significantly reduce processing times."
    },
    {
      question: "Is my personal information secure?",
      answer: "Absolutely. We use bank-level encryption and follow strict data protection protocols. Your personal information is never shared with third parties without your consent."
    }
  ];

  const documentChecklist = [
    { id: 1, name: "Valid Passport", required: true, completed: false },
    { id: 2, name: "Completed Application Form", required: true, completed: false },
    { id: 3, name: "Passport-sized Photographs", required: true, completed: false },
    { id: 4, name: "Proof of Financial Support", required: true, completed: false },
    { id: 5, name: "Travel Itinerary", required: true, completed: false },
    { id: 6, name: "Travel Insurance", required: false, completed: false },
    { id: 7, name: "Letter of Invitation", required: false, completed: false },
    { id: 8, name: "Employment Letter", required: false, completed: false }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="visa-hero-bg visa-section-padding">
        <div className="visa-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Visa Application Process
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A transparent, step-by-step process designed to make your visa application 
            as smooth and stress-free as possible.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="visa-section-padding">
        <div className="visa-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our proven 4-step process ensures your application is handled professionally 
              from start to finish.
            </p>
          </div>

          <StepIndicator
            steps={PROCESS_STEPS}
            variant="vertical"
            showDescription={true}
            className="max-w-4xl mx-auto"
          />
        </div>
      </section>

      {/* Document Checklist */}
      <section className="visa-section-padding bg-muted/50">
        <div className="visa-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Document Checklist</h2>
              <p className="text-muted-foreground mb-8">
                Keep track of your required documents with our interactive checklist. 
                We&apos;ll guide you through exactly what you need for your specific application.
              </p>

              <div className="space-y-4">
                {documentChecklist.map((doc) => (
                  <div key={doc.id} className="flex items-center space-x-3 p-4 bg-background rounded-lg border">
                    <Checkbox id={`doc-${doc.id}`} />
                    <div className="flex-1">
                      <label 
                        htmlFor={`doc-${doc.id}`} 
                        className="text-sm font-medium cursor-pointer"
                      >
                        {doc.name}
                      </label>
                      {doc.required && (
                        <span className="ml-2 text-xs text-red-500">Required</span>
                      )}
                    </div>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm text-muted-foreground">0/8 completed</span>
                </div>
                <Progress value={0} className="h-2" />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Why Our Process Works</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Secure & Confidential</h4>
                    <p className="text-sm text-muted-foreground">
                      Your documents and personal information are protected with bank-level security 
                      and handled by certified professionals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Time-Efficient</h4>
                    <p className="text-sm text-muted-foreground">
                      Our streamlined process reduces processing time and eliminates common delays 
                      that cause application rejections.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Expert Review</h4>
                    <p className="text-sm text-muted-foreground">
                      Every application is reviewed by experienced visa consultants before submission 
                      to ensure maximum success rate.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="w-full mt-8" asChild>
                <Link href="/application">
                  Start Your Application
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="visa-section-padding">
        <div className="visa-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about our visa application process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="visa-section-padding bg-primary text-primary-foreground">
        <div className="visa-container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let our experts guide you through every step of the visa application process.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/application">
              Start Your Application Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

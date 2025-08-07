import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { COMPANY_STATS } from "@/lib/constants";
import { ArrowRight, Award, Users, Globe, Clock, Shield, CheckCircle, MapPin, Mail, Linkedin, Calendar, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const teamMembers = [
    {
      id: '1',
      name: 'Sarah Mitchell',
      role: 'CEO & Founder',
      bio: 'Former immigration lawyer with 15+ years of experience in visa applications and immigration law.',
      avatar: '/team/sarah.jpg',
      experience: '15+ years',
      specialization: ['canada', 'uk'],
      linkedin: 'https://linkedin.com/in/sarahmitchell'
    },
    {
      id: '2',
      name: 'David Chen',
      role: 'Head of Operations',
      bio: 'Expert in streamlining visa processes with a background in international business and operations.',
      avatar: '/team/david.jpg',
      experience: '12+ years',
      specialization: ['australia', 'canada'],
      linkedin: 'https://linkedin.com/in/davidchen'
    },
    {
      id: '3',
      name: 'Emma Rodriguez',
      role: 'Senior Visa Consultant',
      bio: 'Specialized in European visa applications with extensive knowledge of German immigration policies.',
      avatar: '/team/emma.jpg',
      experience: '10+ years',
      specialization: ['germany', 'uk'],
      linkedin: 'https://linkedin.com/in/emmarodriguez'
    },
    {
      id: '4',
      name: 'Michael Thompson',
      role: 'Customer Success Manager',
      bio: 'Dedicated to ensuring exceptional client experience throughout the visa application journey.',
      avatar: '/team/michael.jpg',
      experience: '8+ years',
      specialization: ['australia', 'canada'],
      linkedin: 'https://linkedin.com/in/michaelthompson'
    }
  ];

  const certifications = [
    {
      id: '1',
      name: 'ICCRC Certified',
      issuer: 'Immigration Consultants of Canada Regulatory Council',
      date: '2020',
      image: '/certifications/iccrc.png',
      description: 'Authorized to provide immigration advice for Canada'
    },
    {
      id: '2',
      name: 'MARA Registered',
      issuer: 'Migration Agents Registration Authority',
      date: '2019',
      image: '/certifications/mara.png',
      description: 'Licensed migration agent for Australia'
    },
    {
      id: '3',
      name: 'OISC Regulated',
      issuer: 'Office of the Immigration Services Commissioner',
      date: '2021',
      image: '/certifications/oisc.png',
      description: 'Regulated immigration advisor for the UK'
    },
    {
      id: '4',
      name: 'ISO 27001 Certified',
      issuer: 'International Organization for Standardization',
      date: '2023',
      image: '/certifications/iso.png',
      description: 'Information security management certification'
    }
  ];

  const timeline = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'VisaWalk was established with a mission to simplify visa applications for everyone.'
    },
    {
      year: '2012',
      title: 'First 1,000 Applications',
      description: 'Reached our first milestone of successfully processing 1,000 visa applications.'
    },
    {
      year: '2015',
      title: 'International Expansion',
      description: 'Expanded services to include Australia and UK visa applications.'
    },
    {
      year: '2018',
      title: 'Digital Transformation',
      description: 'Launched our online platform for streamlined application processing.'
    },
    {
      year: '2020',
      title: '25,000 Applications',
      description: 'Celebrated processing over 25,000 successful visa applications.'
    },
    {
      year: '2022',
      title: 'Premium Services Launch',
      description: 'Introduced premium and enterprise packages for enhanced service levels.'
    },
    {
      year: '2024',
      title: '50,000+ Success Stories',
      description: 'Reached 50,000+ successful applications with 98.5% success rate.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="visa-hero-bg visa-section-padding">
        <div className="visa-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About VisaWalk
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            For over a decade, we&apos;ve been helping people achieve their travel and immigration dreams
            with expert visa application services and unwavering commitment to success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/application">
                Start Your Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                Contact Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Stats */}
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
              <div className="text-3xl font-bold text-primary">{COMPANY_STATS.yearsExperience}+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">{COMPANY_STATS.clientSatisfaction}/5</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="visa-section-padding">
        <div className="visa-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  VisaWalk was born from a simple yet powerful vision: to make visa applications 
                  accessible, transparent, and stress-free for everyone. Our founder, Sarah Mitchell, 
                  experienced firsthand the complexities and frustrations of the traditional visa 
                  application process.
                </p>
                <p>
                  What started as a small consultancy in 2010 has grown into a trusted partner for
                  thousands of individuals and families worldwide. We&apos;ve built our reputation on
                  expertise, transparency, and an unwavering commitment to our clients&apos; success.
                </p>
                <p>
                  Today, we&apos;re proud to be one of the leading visa service providers, with a team
                  of certified professionals and a track record that speaks for itself. Every 
                  application we handle is a step toward someone&apos;s dream, and we take that
                  responsibility seriously.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="visa-card p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Our Mission</h3>
                    <p className="text-sm text-muted-foreground">
                      To simplify visa applications and make global mobility accessible to everyone.
                    </p>
                  </div>
                </div>
              </div>
              <div className="visa-card p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Our Vision</h3>
                    <p className="text-sm text-muted-foreground">
                      A world where borders don&apos;t limit dreams and opportunities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="visa-card p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Our Values</h3>
                    <p className="text-sm text-muted-foreground">
                      Integrity, expertise, transparency, and client-first approach in everything we do.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="visa-section-padding bg-muted/50">
        <div className="visa-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From a small startup to a trusted global visa service provider - here&apos;s our story.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {item.year.slice(-2)}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-16 bg-primary/20 mt-4" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <Badge variant="outline">{item.year}</Badge>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="visa-section-padding">
        <div className="visa-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Expert Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our certified professionals bring decades of combined experience in immigration and visa services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} variant="interactive" className="group text-center">
                <CardHeader>
                  <Avatar className="h-24 w-24 mx-auto mb-4 ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="text-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>

                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>

                  <div className="flex justify-center items-center space-x-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{member.experience} experience</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {member.bio}
                  </p>

                  <div className="flex justify-center flex-wrap gap-1 mb-4">
                    {member.specialization.map((country) => (
                      <Badge key={country} variant="visa" size="sm">
                        {country.toUpperCase()}
                      </Badge>
                    ))}
                  </div>

                  <Separator className="my-4" />

                  <Button variant="ghost" size="sm" asChild className="group-hover:bg-primary/10">
                    <Link href={member.linkedin} target="_blank">
                      <Linkedin className="h-4 w-4 mr-2" />
                      Connect
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="visa-section-padding bg-muted/50">
        <div className="visa-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Certifications & Accreditations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest professional standards with certifications from leading regulatory bodies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert) => (
              <div key={cert.id} className="visa-card p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{cert.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                <Badge variant="outline" className="mb-4">{cert.date}</Badge>
                <p className="text-xs text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="visa-section-padding bg-primary text-primary-foreground">
        <div className="visa-container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Work with Our Expert Team?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let our experienced professionals guide you through your visa application journey.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/application">
              Start Your Application Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

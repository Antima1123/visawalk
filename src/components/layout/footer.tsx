import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { COUNTRIES, NAV_ITEMS, SOCIAL_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="visa-container">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                VW
              </div>
              <span className="text-xl font-bold visa-text-gradient">VisaWalk</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for visa applications. We make the complex visa process simple, 
              fast, and reliable with our expert guidance and comprehensive services.
            </p>
            <div className="flex space-x-4">
              <Link href={SOCIAL_LINKS.facebook} className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href={SOCIAL_LINKS.twitter} className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href={SOCIAL_LINKS.linkedin} className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href={SOCIAL_LINKS.instagram} className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/application"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Visa Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Visa Services</h3>
            <ul className="space-y-2">
              {Object.values(COUNTRIES).map((country) => (
                <li key={country.code}>
                  <Link 
                    href={`/services?country=${country.code}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2"
                  >
                    <span>{country.flag}</span>
                    <span>{country.name} Visa</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@visawalk.com</span>
              </div>
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>123 Business Ave, Suite 100<br />New York, NY 10001</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-2">
              <h4 className="font-medium">Stay Updated</h4>
              <p className="text-xs text-muted-foreground">
                Get visa updates and travel tips
              </p>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className="text-sm"
                />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 VisaWalk. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t py-6">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-center">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

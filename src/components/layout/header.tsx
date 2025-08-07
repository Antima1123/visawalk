'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NAV_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground">
        <div className="visa-container">
          <div className="flex h-10 items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-3 w-3" />
                <span>info@visawalk.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>🌟 98.5% Success Rate | 50,000+ Applications Processed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="visa-container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
              VW
            </div>
            <span className="text-xl font-bold visa-text-gradient">VisaWalk</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  isActive(item.href)
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-muted-foreground'
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button asChild className="hidden md:inline-flex">
              <Link href="/application">Apply Now</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {/* Mobile Logo */}
                  <Link 
                    href="/" 
                    className="flex items-center space-x-2 pb-4 border-b"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                      VW
                    </div>
                    <span className="text-xl font-bold visa-text-gradient">VisaWalk</span>
                  </Link>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-4">
                    {NAV_ITEMS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          'text-sm font-medium transition-colors hover:text-primary py-2',
                          isActive(item.href)
                            ? 'text-primary font-semibold'
                            : 'text-muted-foreground'
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile CTA */}
                  <div className="pt-4 border-t">
                    <Button asChild className="w-full">
                      <Link href="/application" onClick={() => setIsOpen(false)}>
                        Apply Now
                      </Link>
                    </Button>
                  </div>

                  {/* Mobile Contact Info */}
                  <div className="pt-4 space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span>info@visawalk.com</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

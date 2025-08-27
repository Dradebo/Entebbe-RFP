import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">EC</span>
              </div>
              <span className="text-xl font-bold text-neutral-900">
                Entebbe Club
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              About
            </Link>
            <Link 
              href="/membership" 
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Membership
            </Link>
            <Link 
              href="/facilities" 
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Facilities
            </Link>
            <Link 
              href="/contact" 
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Book Tee Time
            </Button>
            <Button size="sm">
              Join Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { City, State, formatNumber } from '@/data/locations';
import { getCurrentDateInfo } from '@/lib/location-utils';

interface LocationCTAProps {
  city: City;
  state: State;
}

export function LocationCTA({ city, state }: LocationCTAProps) {
  const { year } = getCurrentDateInfo();

  const benefits = [
    'No credit card required',
    'Set up in under 5 minutes',
    'Cancel anytime',
    'Full access to AI features',
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Start Growing Your {city.name} Business Today
        </h2>
        <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
          Join {formatNumber(city.businessCount)} businesses in {city.name} and across {state.name} who are ready to dominate social media in {year}.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2"
            >
              <CheckCircle className="h-4 w-4 text-white" />
              <span className="text-white text-sm font-medium">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="https://app.kontentfire.com">
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-orange-50 shadow-xl w-full sm:w-auto"
            >
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/pricing">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
            >
              View Pricing
            </Button>
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
          <Link href="/features" className="text-orange-100 hover:text-white transition-colors">Features</Link>
          <Link href="/how-it-works" className="text-orange-100 hover:text-white transition-colors">How It Works</Link>
          <Link href="/use-cases" className="text-orange-100 hover:text-white transition-colors">Use Cases</Link>
          <Link href="/faq" className="text-orange-100 hover:text-white transition-colors">FAQ</Link>
        </div>

        <p className="mt-4 text-orange-100 text-sm">
          Serving businesses in {city.name} and all 50 US states
        </p>
      </div>
    </section>
  );
}

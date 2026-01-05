import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight, Building2, TrendingUp } from 'lucide-react';
import { getAllStates, getCitiesForState, formatNumber, State } from '@/data/locations';

export const metadata: Metadata = {
  title: 'Locations - Social Media Marketing Across the USA | KontentFire',
  description: 'KontentFire serves businesses in all 50 US states. Find AI-powered social media marketing solutions for your city and discover local insights.',
  keywords: 'social media marketing locations, US marketing, local SEO, city marketing, state marketing, AI content marketing',
  alternates: {
    canonical: '/locations',
  },
  openGraph: {
    title: 'Social Media Marketing in All 50 US States | KontentFire',
    description: 'AI-powered content automation serving businesses across the United States. Find your state and city for local insights.',
    type: 'website',
    url: 'https://kontentfire.com/locations',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Marketing Nationwide | KontentFire',
    description: 'AI-powered content for businesses in all 50 states and 100+ cities.',
  },
};

// Group states by region
function groupStatesByRegion(states: State[]): Record<string, State[]> {
  const regions: Record<string, State[]> = {
    Northeast: [],
    Southeast: [],
    Midwest: [],
    Southwest: [],
    West: [],
  };

  states.forEach(state => {
    regions[state.region].push(state);
  });

  // Sort states alphabetically within each region
  Object.keys(regions).forEach(region => {
    regions[region].sort((a, b) => a.name.localeCompare(b.name));
  });

  return regions;
}

export default function LocationsPage() {
  const allStates = getAllStates();
  const statesByRegion = groupStatesByRegion(allStates);
  const totalBusinesses = allStates.reduce((sum, state) => sum + state.businessCount, 0);
  const totalCities = allStates.reduce((sum, state) => sum + getCitiesForState(state.slug).length, 0);

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <MapPin className="h-4 w-4" />
              <span>Serving All 50 States</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Social Media Marketing <span className="fire-text">Nationwide</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              KontentFire helps businesses across the United States automate their social media content.
              Find your state and city to see local marketing insights.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <Building2 className="h-6 w-6 text-orange-500" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">{formatNumber(totalBusinesses)}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Businesses Served</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-6 w-6 text-blue-500" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">50</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">States</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-green-500" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">{totalCities}+</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Cities</div>
                </div>
              </div>
            </div>

            <Link href="https://app.kontentfire.com">
              <Button size="lg">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* States by Region */}
          {Object.entries(statesByRegion).map(([region, states]) => (
            <section key={region} className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 pb-2 border-b border-slate-200 dark:border-slate-700">
                {region}
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {states.map(state => {
                  const cities = getCitiesForState(state.slug);
                  return (
                    <Link
                      key={state.slug}
                      href={`/locations/${state.slug}`}
                      className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-700 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">
                            {state.name}
                          </h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {formatNumber(state.businessCount)} businesses
                          </p>
                        </div>
                        <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                          {state.abbreviation}
                        </span>
                      </div>
                      {cities.length > 0 && (
                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
                          {cities.length} {cities.length === 1 ? 'city' : 'cities'} covered
                        </p>
                      )}
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}

          {/* Explore More */}
          <section className="mb-16 mt-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Explore More</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/features" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Features</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">See all capabilities</div>
              </Link>
              <Link href="/pricing" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Pricing</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Plans starting at $29/mo</div>
              </Link>
              <Link href="/use-cases" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Use Cases</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">See who uses KontentFire</div>
              </Link>
              <Link href="/how-it-works" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">How It Works</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">3 simple steps</div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              No matter where you&apos;re located in the US, KontentFire helps you create engaging social media content that resonates with your local audience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://app.kontentfire.com">
                <Button size="lg">
                  Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  View Pricing
                </Button>
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/features" className="text-slate-400 hover:text-white transition-colors">Features</Link>
              <Link href="/how-it-works" className="text-slate-400 hover:text-white transition-colors">How It Works</Link>
              <Link href="/demo" className="text-slate-400 hover:text-white transition-colors">Watch Demo</Link>
              <Link href="/faq" className="text-slate-400 hover:text-white transition-colors">FAQ</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'KontentFire Social Media Marketing',
            description: 'AI-powered social media content automation for businesses across the United States',
            provider: {
              '@type': 'Organization',
              name: 'KontentFire',
              url: 'https://kontentfire.com',
            },
            areaServed: {
              '@type': 'Country',
              name: 'United States',
            },
            serviceType: 'Social Media Marketing Automation',
          }),
        }}
      />
    </>
  );
}

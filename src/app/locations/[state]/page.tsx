import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight, Building2, TrendingUp, ArrowLeft } from 'lucide-react';
import { getAllStates, getStateBySlug, getCitiesForState, formatNumber } from '@/data/locations';

interface PageProps {
  params: Promise<{ state: string }>;
}

export async function generateStaticParams() {
  const states = getAllStates();
  return states.map(state => ({ state: state.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const state = getStateBySlug(stateSlug);

  if (!state) return {};

  return {
    title: `Social Media Marketing in ${state.name} | KontentFire`,
    description: `AI-powered social media automation for ${formatNumber(state.businessCount)} businesses in ${state.name}. Discover local marketing insights and grow your ${state.abbreviation} business.`,
    alternates: {
      canonical: `/locations/${stateSlug}`,
    },
  };
}

export default async function StatePage({ params }: PageProps) {
  const { state: stateSlug } = await params;
  const state = getStateBySlug(stateSlug);

  if (!state) {
    notFound();
  }

  const cities = getCitiesForState(stateSlug);
  const sortedCities = [...cities].sort((a, b) => b.businessCount - a.businessCount);

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-8">
            <Link href="/locations" className="hover:text-orange-500 transition-colors flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              All Locations
            </Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-white font-medium">{state.name}</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <MapPin className="h-4 w-4" />
              <span>{state.name} ({state.abbreviation})</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Social Media Marketing in <span className="fire-text">{state.name}</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-4">
              {state.description}
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 my-8">
              <div className="flex items-center gap-2">
                <Building2 className="h-6 w-6 text-orange-500" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">{formatNumber(state.businessCount)}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Small Businesses</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-6 w-6 text-blue-500" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">{cities.length}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Cities Covered</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-green-500" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">{state.marketingSpendIndex > 1 ? '+' : ''}{((state.marketingSpendIndex - 1) * 100).toFixed(0)}%</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">vs National Avg Spend</div>
                </div>
              </div>
            </div>

            <Link href="https://app.kontentfire.com">
              <Button size="lg">
                Start Free in {state.name} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Top Industries */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Top Industries in {state.name}
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {state.topIndustries.map((industry, index) => (
                <div
                  key={industry}
                  className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-orange-500 mb-2">#{index + 1}</div>
                  <div className="font-semibold text-slate-900 dark:text-white">{industry}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Cities */}
          {cities.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Cities in {state.name}
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {sortedCities.map(city => (
                  <Link
                    key={city.slug}
                    href={`/locations/${stateSlug}/${city.slug}`}
                    className="group bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-700 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">
                        {city.name}
                      </h3>
                      {city.isCapital && (
                        <span className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full">
                          Capital
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                      {formatNumber(city.businessCount)} businesses
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {city.topIndustries.slice(0, 2).map(industry => (
                        <span
                          key={industry}
                          className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700">
                      <span className="text-xs text-orange-500 font-medium group-hover:text-orange-600">
                        View {city.name} Insights →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Explore More */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Explore More</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/features" className="group bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Features</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">See all capabilities</div>
              </Link>
              <Link href="/pricing" className="group bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Pricing</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Plans starting at $29/mo</div>
              </Link>
              <Link href="/use-cases" className="group bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Use Cases</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">See who uses KontentFire</div>
              </Link>
              <Link href="/locations/states" className="group bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">All States</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">View all 50 states</div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Grow Your {state.name} Business?
            </h2>
            <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
              Join {formatNumber(state.businessCount)} businesses in {state.name} using AI-powered social media marketing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://app.kontentfire.com">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  View Pricing
                </Button>
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/features" className="text-orange-100 hover:text-white transition-colors">Features</Link>
              <Link href="/how-it-works" className="text-orange-100 hover:text-white transition-colors">How It Works</Link>
              <Link href="/demo" className="text-orange-100 hover:text-white transition-colors">Watch Demo</Link>
              <Link href="/faq" className="text-orange-100 hover:text-white transition-colors">FAQ</Link>
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
            name: `KontentFire Social Media Marketing - ${state.name}`,
            description: `AI-powered social media content automation for businesses in ${state.name}`,
            provider: {
              '@type': 'Organization',
              name: 'KontentFire',
              url: 'https://kontentfire.com',
            },
            areaServed: {
              '@type': 'State',
              name: state.name,
              containedInPlace: {
                '@type': 'Country',
                name: 'United States',
              },
            },
            serviceType: 'Social Media Marketing Automation',
          }),
        }}
      />
    </>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight, Building2, TrendingUp, Users, HelpCircle } from 'lucide-react';
import { getAllStates, getCitiesForState, formatNumber, State } from '@/data/locations';

export const metadata: Metadata = {
  title: 'All 50 US States - Social Media Marketing Locations | KontentFire',
  description: 'Find AI-powered social media marketing solutions in all 50 US states. Local business statistics, industry insights, and marketing automation for every state.',
  keywords: 'social media marketing by state, US states marketing, local SEO, state marketing automation, AI content by state',
  alternates: {
    canonical: '/locations/states',
  },
  openGraph: {
    title: 'Social Media Marketing in All 50 US States | KontentFire',
    description: 'AI-powered content automation serving businesses across all 50 United States. Find your state for local insights.',
    type: 'website',
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

  Object.keys(regions).forEach(region => {
    regions[region].sort((a, b) => b.businessCount - a.businessCount);
  });

  return regions;
}

const regionDescriptions: Record<string, string> = {
  Northeast: 'Home to major financial centers and tech hubs, the Northeast leads in professional services marketing.',
  Southeast: 'Fast-growing markets with strong tourism, healthcare, and manufacturing sectors.',
  Midwest: 'The heartland of American business with strong manufacturing, agriculture, and healthcare industries.',
  Southwest: 'Rapidly expanding tech corridors and business-friendly environments driving marketing innovation.',
  West: 'Technology leaders and innovation hubs setting trends in digital marketing.',
};

const faqs = [
  {
    question: 'Does KontentFire work in all 50 US states?',
    answer: 'Yes! KontentFire serves businesses in all 50 United States. Our AI-powered platform works for any business regardless of location, generating content optimized for your local audience.',
  },
  {
    question: 'How does KontentFire tailor content for different states?',
    answer: 'Our AI understands regional differences in industries, audience preferences, and local trends. Whether you\'re in California\'s tech sector or Texas\'s energy industry, we generate relevant, engaging content.',
  },
  {
    question: 'Can I target customers in multiple states?',
    answer: 'Absolutely! KontentFire supports multi-location businesses. You can create content strategies for each state or region you serve, all from one dashboard.',
  },
  {
    question: 'What states have the highest social media marketing adoption?',
    answer: 'States like California, New York, Texas, and Florida lead in digital marketing adoption due to their large business populations and competitive markets. However, all states are seeing increased AI content adoption.',
  },
];

export default function AllStatesPage() {
  const allStates = getAllStates();
  const statesByRegion = groupStatesByRegion(allStates);
  const totalBusinesses = allStates.reduce((sum, state) => sum + state.businessCount, 0);
  const totalCities = allStates.reduce((sum, state) => sum + getCitiesForState(state.slug).length, 0);
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-8">
            <Link href="/locations" className="hover:text-orange-500 transition-colors">
              Locations
            </Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-white font-medium">All States</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <MapPin className="h-4 w-4" />
              <span>Complete US Coverage</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Social Media Marketing in <span className="fire-text">All 50 States</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              KontentFire provides AI-powered social media automation to businesses across the entire United States.
              Find your state below for local market insights and industry data.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 rounded-xl px-6 py-4">
                <MapPin className="h-8 w-8 text-orange-500" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">50</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">US States</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 rounded-xl px-6 py-4">
                <Building2 className="h-8 w-8 text-blue-500" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">{formatNumber(totalBusinesses)}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Businesses Nationwide</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 rounded-xl px-6 py-4">
                <Users className="h-8 w-8 text-green-500" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">{totalCities}+</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Cities Covered</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="https://app.kontentfire.com">
                <Button size="lg">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/locations/cities">
                <Button variant="outline" size="lg">
                  View All Cities
                </Button>
              </Link>
            </div>
          </div>

          {/* States by Region */}
          {Object.entries(statesByRegion).map(([region, states]) => (
            <section key={region} className="mb-16">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {region} States
                </h2>
                <p className="text-slate-600 dark:text-slate-300">
                  {regionDescriptions[region]}
                </p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {states.map(state => {
                  const cities = getCitiesForState(state.slug);
                  return (
                    <Link
                      key={state.slug}
                      href={`/locations/${state.slug}`}
                      className="group bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-700 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">
                          {state.name}
                        </h3>
                        <span className="text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-1 rounded">
                          {state.abbreviation}
                        </span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                          <span>Businesses:</span>
                          <span className="font-semibold">{formatNumber(state.businessCount)}</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                          <span>Cities:</span>
                          <span className="font-semibold">{cities.length}</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                          <span>Mkt Index:</span>
                          <span className={`font-semibold ${state.marketingSpendIndex >= 1 ? 'text-green-600' : 'text-slate-500'}`}>
                            {state.marketingSpendIndex >= 1 ? '+' : ''}{((state.marketingSpendIndex - 1) * 100).toFixed(0)}%
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700">
                        <span className="text-xs text-orange-500 font-medium">
                          View {state.name} →
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}

          {/* FAQ Section for AEO */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <span className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <HelpCircle className="h-4 w-4" />
                <span>Frequently Asked Questions</span>
              </span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Common Questions About State Coverage
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700"
                >
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Explore More */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Explore More</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/features" className="group bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Features</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">See all capabilities</div>
              </Link>
              <Link href="/pricing" className="group bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Pricing</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Plans starting at $29/mo</div>
              </Link>
              <Link href="/use-cases" className="group bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Use Cases</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">See who uses KontentFire</div>
              </Link>
              <Link href="/locations/cities" className="group bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">All Cities</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Browse 100+ cities</div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Automate Your Social Media?
            </h2>
            <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses across all 50 states using KontentFire to create engaging content in {currentYear}.
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

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'US States Served by KontentFire',
            description: 'Complete list of all 50 US states where KontentFire provides social media marketing automation',
            numberOfItems: 50,
            itemListElement: allStates.map((state, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'Place',
                name: state.name,
                url: `https://kontentfire.com/locations/${state.slug}`,
              },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'KontentFire Social Media Marketing',
            description: 'AI-powered social media content automation serving businesses in all 50 US states',
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

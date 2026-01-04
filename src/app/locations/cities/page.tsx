import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight, Building2, TrendingUp, Search, HelpCircle } from 'lucide-react';
import { getAllCities, getAllStates, getStateBySlug, formatNumber, formatPercent, City } from '@/data/locations';

export const metadata: Metadata = {
  title: 'All US Cities - Social Media Marketing Locations | KontentFire',
  description: 'Browse 100+ major US cities for AI-powered social media marketing. Local business data, industry insights, and content automation for your city.',
  keywords: 'social media marketing by city, US cities marketing, local business marketing, city SEO, AI content marketing cities',
  alternates: {
    canonical: '/locations/cities',
  },
  openGraph: {
    title: 'Social Media Marketing in 100+ US Cities | KontentFire',
    description: 'AI-powered content automation for major US cities. Find your city for local marketing insights and business statistics.',
    type: 'website',
  },
};

// Sort cities by business count (largest first)
function sortCitiesBySize(cities: City[]): City[] {
  return [...cities].sort((a, b) => b.businessCount - a.businessCount);
}

// Group cities by first letter for easy browsing
function groupCitiesByLetter(cities: City[]): Record<string, City[]> {
  const groups: Record<string, City[]> = {};

  cities.forEach(city => {
    const letter = city.name[0].toUpperCase();
    if (!groups[letter]) {
      groups[letter] = [];
    }
    groups[letter].push(city);
  });

  // Sort cities within each letter group by business count
  Object.keys(groups).forEach(letter => {
    groups[letter].sort((a, b) => b.businessCount - a.businessCount);
  });

  return groups;
}

const faqs = [
  {
    question: 'How many cities does KontentFire cover?',
    answer: 'KontentFire provides detailed market insights and serves businesses in over 100 major US cities across all 50 states. Our AI platform works for any business location in the United States.',
  },
  {
    question: 'What city-specific data do you provide?',
    answer: 'Each city page includes local business counts, social media adoption rates (LinkedIn, Instagram, Facebook), top industries, marketing spend indices, and growth rates to help you understand your local market.',
  },
  {
    question: 'Can I use KontentFire if my city isn\'t listed?',
    answer: 'Absolutely! While we provide detailed pages for major cities, KontentFire works for businesses in any US location. Our AI generates content optimized for your specific audience regardless of city size.',
  },
  {
    question: 'Which cities have the most businesses using social media marketing?',
    answer: 'Major metro areas like New York City, Los Angeles, Chicago, Houston, and Miami lead in social media adoption. However, smaller cities often have less competition, making it easier to stand out.',
  },
];

export default function AllCitiesPage() {
  const allCities = getAllCities();
  const sortedCities = sortCitiesBySize(allCities);
  const citiesByLetter = groupCitiesByLetter(allCities);
  const topCities = sortedCities.slice(0, 20);
  const totalBusinesses = allCities.reduce((sum, city) => sum + city.businessCount, 0);
  const currentYear = new Date().getFullYear();
  const letters = Object.keys(citiesByLetter).sort();

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
            <span className="text-slate-900 dark:text-white font-medium">All Cities</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <MapPin className="h-4 w-4" />
              <span>{allCities.length}+ Cities Covered</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Social Media Marketing in <span className="fire-text">Every Major City</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Browse our complete directory of US cities with local market insights, business statistics,
              and AI-powered content solutions tailored for each location.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 rounded-xl px-6 py-4">
                <MapPin className="h-8 w-8 text-orange-500" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">{allCities.length}+</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Cities</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 rounded-xl px-6 py-4">
                <Building2 className="h-8 w-8 text-blue-500" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">{formatNumber(totalBusinesses)}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Total Businesses</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 rounded-xl px-6 py-4">
                <TrendingUp className="h-8 w-8 text-green-500" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">50</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">States Represented</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="https://app.kontentfire.com">
                <Button size="lg">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/locations/states">
                <Button variant="outline" size="lg">
                  Browse by State
                </Button>
              </Link>
            </div>
          </div>

          {/* Top 20 Cities */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Top 20 Largest Markets
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {topCities.map((city, index) => {
                const state = getStateBySlug(city.stateSlug);
                if (!state) return null;
                return (
                  <Link
                    key={city.slug}
                    href={`/locations/${city.stateSlug}/${city.slug}`}
                    className="group bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-700 hover:shadow-lg transition-all relative"
                  >
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center">
                      <span className="text-sm font-bold text-orange-600 dark:text-orange-400">#{index + 1}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors mb-1">
                      {city.name}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{state.name}</p>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                        <span>Businesses:</span>
                        <span className="font-semibold">{formatNumber(city.businessCount)}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                        <span>Instagram:</span>
                        <span className="font-semibold">{formatPercent(city.socialMediaStats.instagramPenetration)}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Alphabetical Directory */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Complete City Directory (A-Z)
            </h2>

            {/* Letter Navigation */}
            <div className="flex flex-wrap gap-2 mb-8">
              {letters.map(letter => (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-orange-100 hover:text-orange-600 dark:hover:bg-orange-900/50 dark:hover:text-orange-400 font-semibold transition-colors"
                >
                  {letter}
                </a>
              ))}
            </div>

            {/* Cities by Letter */}
            <div className="space-y-8">
              {letters.map(letter => (
                <div key={letter} id={`letter-${letter}`} className="scroll-mt-24">
                  <h3 className="text-xl font-bold text-orange-500 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
                    {letter}
                  </h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                    {citiesByLetter[letter].map(city => {
                      const state = getStateBySlug(city.stateSlug);
                      if (!state) return null;
                      return (
                        <Link
                          key={city.slug}
                          href={`/locations/${city.stateSlug}/${city.slug}`}
                          className="group flex items-center justify-between bg-slate-50 dark:bg-slate-800 rounded-lg px-4 py-3 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors"
                        >
                          <div>
                            <span className="font-medium text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">
                              {city.name}
                            </span>
                            <span className="text-slate-400 dark:text-slate-500 ml-1 text-sm">
                              {state.abbreviation}
                            </span>
                          </div>
                          <span className="text-xs text-slate-400 dark:text-slate-500">
                            {formatNumber(city.businessCount)}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section for AEO */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <span className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <HelpCircle className="h-4 w-4" />
                <span>Frequently Asked Questions</span>
              </span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Questions About City Coverage
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

          {/* CTA */}
          <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Start Growing Your Local Business
            </h2>
            <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
              Join businesses in {allCities.length}+ cities using AI-powered social media marketing in {currentYear}.
            </p>
            <Link href="https://app.kontentfire.com">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
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
            name: 'US Cities Served by KontentFire',
            description: 'Complete list of major US cities where KontentFire provides social media marketing automation',
            numberOfItems: allCities.length,
            itemListElement: topCities.slice(0, 50).map((city, index) => {
              const state = getStateBySlug(city.stateSlug);
              return {
                '@type': 'ListItem',
                position: index + 1,
                item: {
                  '@type': 'Place',
                  name: `${city.name}, ${state?.abbreviation}`,
                  url: `https://kontentfire.com/locations/${city.stateSlug}/${city.slug}`,
                },
              };
            }),
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
    </>
  );
}

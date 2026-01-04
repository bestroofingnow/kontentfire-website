import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { LocationHero } from '@/components/sections/location-hero';
import { LocationStats } from '@/components/sections/location-stats';
import { LocationBenefits } from '@/components/sections/location-benefits';
import { LocationCTA } from '@/components/sections/location-cta';
import { HelpCircle, MapPin } from 'lucide-react';
import {
  getAllStates,
  getAllCities,
  getStateBySlug,
  getCityBySlug,
  getCitiesForState,
  formatNumber,
} from '@/data/locations';
import { getLocationFAQs, getRelatedCities, getCurrentDateInfo } from '@/lib/location-utils';

interface PageProps {
  params: Promise<{ state: string; city: string }>;
}

export async function generateStaticParams() {
  const allCities = getAllCities();
  return allCities.map(city => ({
    state: city.stateSlug,
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state: stateSlug, city: citySlug } = await params;
  const state = getStateBySlug(stateSlug);
  const city = getCityBySlug(citySlug);

  if (!state || !city) return {};

  const { year } = getCurrentDateInfo();

  return {
    title: `Social Media Marketing in ${city.name}, ${state.abbreviation} | KontentFire`,
    description: `Automate your social media marketing in ${city.name}, ${state.name}. Join ${formatNumber(city.businessCount)} local businesses using AI-powered content creation in ${year}. Start free today.`,
    alternates: {
      canonical: `/locations/${stateSlug}/${citySlug}`,
    },
    openGraph: {
      title: `Social Media Marketing in ${city.name}, ${state.abbreviation}`,
      description: `AI-powered content automation for ${city.name} businesses. Save time, grow faster.`,
      type: 'website',
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { state: stateSlug, city: citySlug } = await params;
  const state = getStateBySlug(stateSlug);
  const city = getCityBySlug(citySlug);

  if (!state || !city || city.stateSlug !== stateSlug) {
    notFound();
  }

  const faqs = getLocationFAQs(city, state);
  const allCities = getAllCities();
  const relatedCities = getRelatedCities(city, allCities, 6);
  const stateCities = getCitiesForState(stateSlug).filter(c => c.slug !== citySlug);
  const { year } = getCurrentDateInfo();

  return (
    <>
      <Navigation />
      <main className="bg-white dark:bg-slate-900 min-h-screen">
        {/* Hero Section */}
        <LocationHero city={city} state={state} />

        {/* Stats Section */}
        <LocationStats city={city} state={state} />

        {/* Benefits Section */}
        <LocationBenefits city={city} state={state} />

        {/* FAQs Section */}
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <HelpCircle className="h-4 w-4" />
                <span>FAQs</span>
              </span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Common Questions About KontentFire in {city.name}
              </h2>
            </div>
            <div className="space-y-6">
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
          </div>
        </section>

        {/* Related Cities */}
        <section className="py-16 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Other cities in state */}
            {stateCities.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Other Cities in {state.name}
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {stateCities.slice(0, 8).map(relCity => (
                    <Link
                      key={relCity.slug}
                      href={`/locations/${stateSlug}/${relCity.slug}`}
                      className="group bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-700 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-orange-500" />
                        <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">
                          {relCity.name}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        {formatNumber(relCity.businessCount)} businesses
                      </p>
                    </Link>
                  ))}
                </div>
                {stateCities.length > 8 && (
                  <div className="mt-4 text-center">
                    <Link
                      href={`/locations/${stateSlug}`}
                      className="text-orange-500 hover:text-orange-600 font-medium"
                    >
                      View all {stateCities.length + 1} cities in {state.name} →
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Similar markets */}
            {relatedCities.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Similar Markets You May Be Interested In
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {relatedCities.map(relCity => {
                    const relState = getStateBySlug(relCity.stateSlug);
                    if (!relState) return null;
                    return (
                      <Link
                        key={`${relCity.stateSlug}-${relCity.slug}`}
                        href={`/locations/${relCity.stateSlug}/${relCity.slug}`}
                        className="group bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-700 hover:shadow-md transition-all"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="h-4 w-4 text-orange-500" />
                          <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">
                            {relCity.name}, {relState.abbreviation}
                          </h3>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                          {formatNumber(relCity.businessCount)} businesses
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {relCity.topIndustries.slice(0, 2).map(industry => (
                            <span
                              key={industry}
                              className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded"
                            >
                              {industry}
                            </span>
                          ))}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <LocationCTA city={city} state={state} />
      </main>
      <Footer />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: `KontentFire Social Media Marketing - ${city.name}, ${state.abbreviation}`,
            description: `AI-powered social media content automation for businesses in ${city.name}, ${state.name}`,
            provider: {
              '@type': 'Organization',
              name: 'KontentFire',
              url: 'https://kontentfire.com',
            },
            areaServed: {
              '@type': 'City',
              name: city.name,
              containedInPlace: {
                '@type': 'State',
                name: state.name,
              },
            },
            serviceType: 'Social Media Marketing Automation',
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

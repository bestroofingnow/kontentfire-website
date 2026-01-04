'use client';

import Link from 'next/link';
import { MapPin, ArrowRight, Building2, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { City, State, formatNumber, formatPercent } from '@/data/locations';
import { getHeroTagline } from '@/lib/location-utils';

interface LocationHeroProps {
  city: City;
  state: State;
}

export function LocationHero({ city, state }: LocationHeroProps) {
  const tagline = getHeroTagline(city, state);

  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-8">
          <Link href="/locations" className="hover:text-orange-500 transition-colors">
            Locations
          </Link>
          <span>/</span>
          <Link href={`/locations/${state.slug}`} className="hover:text-orange-500 transition-colors">
            {state.name}
          </Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white font-medium">{city.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium">
                <MapPin className="h-4 w-4" />
                {city.name}, {state.abbreviation}
              </span>
              {city.isCapital && (
                <span className="inline-flex items-center gap-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-2 rounded-full text-sm font-medium">
                  State Capital
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Social Media Marketing in{' '}
              <span className="fire-text">{city.name}</span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-300 mb-4">
              {tagline}
            </p>

            <p className="text-lg text-slate-500 dark:text-slate-400 mb-8">
              Automate your content creation with AI-powered tools designed for {city.name}&apos;s
              thriving {city.topIndustries[0].toLowerCase()} and {city.topIndustries[1].toLowerCase()} businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="https://app.kontentfire.com">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Watch Demo
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-orange-500" />
                <span className="text-slate-600 dark:text-slate-300">
                  <strong className="text-slate-900 dark:text-white">{formatNumber(city.businessCount)}</strong> local businesses
                </span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <span className="text-slate-600 dark:text-slate-300">
                  <strong className="text-slate-900 dark:text-white">{(city.growthRate * 100).toFixed(1)}%</strong> YoY growth
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Stats */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-100 dark:border-slate-700">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
              {city.name} Social Media Landscape
            </h2>

            <div className="space-y-6">
              {/* LinkedIn */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-600 dark:text-slate-300">LinkedIn Adoption</span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {formatPercent(city.socialMediaStats.linkedinPenetration)}
                  </span>
                </div>
                <div className="h-3 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all duration-500"
                    style={{ width: `${city.socialMediaStats.linkedinPenetration * 100}%` }}
                  />
                </div>
              </div>

              {/* Instagram */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-600 dark:text-slate-300">Instagram Adoption</span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {formatPercent(city.socialMediaStats.instagramPenetration)}
                  </span>
                </div>
                <div className="h-3 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                    style={{ width: `${city.socialMediaStats.instagramPenetration * 100}%` }}
                  />
                </div>
              </div>

              {/* Facebook */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-600 dark:text-slate-300">Facebook Adoption</span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {formatPercent(city.socialMediaStats.facebookPenetration)}
                  </span>
                </div>
                <div className="h-3 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${city.socialMediaStats.facebookPenetration * 100}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Top industries in {city.name}:
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {city.topIndustries.map((industry) => (
                  <span
                    key={industry}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { TrendingUp, Clock, DollarSign, Users, Zap, Target } from 'lucide-react';
import { City, State } from '@/data/locations';
import { getCityStats, getSeasonalTip, getWeeklyTip, getQuarterlyFocus, getCompetitorInsight } from '@/lib/location-utils';

interface LocationStatsProps {
  city: City;
  state: State;
}

export function LocationStats({ city, state }: LocationStatsProps) {
  const stats = getCityStats(city, state);
  const seasonalTip = getSeasonalTip(city);
  const weeklyTip = getWeeklyTip();
  const quarterlyFocus = getQuarterlyFocus();
  const competitorInsight = getCompetitorInsight(city);

  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Market Overview */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            {city.name} Market Overview
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Real-time insights for {city.name}, {state.abbreviation} businesses looking to dominate social media in {stats.year}.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-6 text-white">
            <Users className="h-8 w-8 mb-4 opacity-90" />
            <div className="text-3xl font-bold mb-1">{stats.businessCount}</div>
            <div className="text-orange-100">Local Businesses</div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl p-6 text-white">
            <DollarSign className="h-8 w-8 mb-4 opacity-90" />
            <div className="text-3xl font-bold mb-1">${stats.marketingSpend}</div>
            <div className="text-blue-100">Annual Marketing Spend</div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 text-white">
            <TrendingUp className="h-8 w-8 mb-4 opacity-90" />
            <div className="text-3xl font-bold mb-1">{stats.growthRate}</div>
            <div className="text-green-100">YoY Business Growth</div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl p-6 text-white">
            <Clock className="h-8 w-8 mb-4 opacity-90" />
            <div className="text-3xl font-bold mb-1">{stats.timeSaved}</div>
            <div className="text-purple-100">Saved Weekly with AI</div>
          </div>

          <div className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl p-6 text-white">
            <Zap className="h-8 w-8 mb-4 opacity-90" />
            <div className="text-3xl font-bold mb-1">{stats.projectedROI}</div>
            <div className="text-pink-100">Average ROI</div>
          </div>

          <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 text-white">
            <Target className="h-8 w-8 mb-4 opacity-90" />
            <div className="text-3xl font-bold mb-1 capitalize">{city.competitorDensity}</div>
            <div className="text-slate-300">Market Competition</div>
          </div>
        </div>

        {/* Competitor Insight */}
        <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 mb-12">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
            Competitive Landscape
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            {competitorInsight}
          </p>
        </div>

        {/* Dynamic Tips Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Seasonal Tip */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-8 border border-amber-200 dark:border-amber-800">
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Seasonal Insight
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Marketing Tip for {city.name} {city.topIndustries[0]} Businesses
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              {seasonalTip}
            </p>
          </div>

          {/* Weekly Tip */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Week {weeklyTip.week} Tip
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              This Week&apos;s Content Strategy
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              {weeklyTip.tip}
            </p>
          </div>
        </div>

        {/* Quarterly Focus */}
        <div className="mt-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="text-purple-200 text-sm font-medium mb-2">{quarterlyFocus.title}</div>
              <h3 className="text-2xl font-bold mb-4">{city.name} Businesses: Focus Areas</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {quarterlyFocus.focus.map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                  <div className="w-2 h-2 bg-amber-400 rounded-full" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

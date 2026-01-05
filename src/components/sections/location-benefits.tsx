'use client';

import { CheckCircle, Sparkles, Calendar, BarChart3, Image, Wand2 } from 'lucide-react';
import { City, State } from '@/data/locations';
import { getIndustryContent, getCurrentDateInfo } from '@/lib/location-utils';

interface LocationBenefitsProps {
  city: City;
  state: State;
}

export function LocationBenefits({ city, state }: LocationBenefitsProps) {
  const { year } = getCurrentDateInfo();
  const industryContent = getIndustryContent(city.topIndustries[0]);

  const benefits = [
    {
      icon: Sparkles,
      title: 'AI-Powered Content',
      description: `Generate engaging posts tailored for ${city.name}'s ${city.topIndustries[0].toLowerCase()} audience using GPT-4 and Claude AI.`,
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: `Automatically post when ${city.name} audiences are most active, optimized for ${state.name}'s timezone.`,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: BarChart3,
      title: 'Local Analytics',
      description: `Track what resonates with your ${city.name} audience and optimize your content strategy accordingly.`,
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Image,
      title: 'Visual Content',
      description: `Create stunning graphics and images that capture the attention of ${city.name}'s social media users.`,
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Wand2,
      title: 'Multi-Platform',
      description: 'Publish to LinkedIn, Instagram, Facebook, and Twitter from one dashboard - all platforms your local customers use.',
      color: 'from-orange-500 to-amber-500',
    },
  ];

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Why {city.name} Businesses Choose KontentFire
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Join thousands of businesses in {state.name} using AI to automate their social media and focus on what matters most - growing their business.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${benefit.color} text-white mb-4`}>
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Industry-Specific Content Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Perfect for {city.name} {city.topIndustries[0]} Businesses
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Our AI understands the unique content needs of the {city.topIndustries[0].toLowerCase()} industry.
              Here are content topics that resonate with your {city.name} audience:
            </p>
            <ul className="space-y-3">
              {industryContent.topics.map((topic, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-200">{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Content Types That Work in {year}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Based on {city.name} market data, these content formats drive the most engagement:
            </p>
            <ul className="space-y-3">
              {industryContent.contentTypes.map((type, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-200">{type}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

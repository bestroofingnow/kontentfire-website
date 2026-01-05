"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const topCities = [
  { name: "New York City", state: "NY", href: "/locations/new-york/new-york-city" },
  { name: "Los Angeles", state: "CA", href: "/locations/california/los-angeles" },
  { name: "Chicago", state: "IL", href: "/locations/illinois/chicago" },
  { name: "Houston", state: "TX", href: "/locations/texas/houston" },
  { name: "Miami", state: "FL", href: "/locations/florida/miami" },
  { name: "Atlanta", state: "GA", href: "/locations/georgia/atlanta" },
  { name: "Dallas", state: "TX", href: "/locations/texas/dallas" },
  { name: "San Francisco", state: "CA", href: "/locations/california/san-francisco" },
  { name: "Boston", state: "MA", href: "/locations/massachusetts/boston" },
  { name: "Seattle", state: "WA", href: "/locations/washington/seattle" },
  { name: "Denver", state: "CO", href: "/locations/colorado/denver" },
  { name: "Phoenix", state: "AZ", href: "/locations/arizona/phoenix" },
];

export function PopularLocations() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MapPin className="h-4 w-4" />
            <span>Serving All 50 States</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Social Media Marketing in <span className="fire-text">Your City</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            KontentFire helps businesses across the United States automate their social media content.
            Find local marketing insights for your area.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-8"
        >
          {topCities.map((city, index) => (
            <Link
              key={index}
              href={city.href}
              className="group bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 hover:shadow-md transition-all text-center"
            >
              <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">
                {city.name}
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">{city.state}</div>
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/locations/states"
            className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors"
          >
            Browse All 50 States <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
          <Link
            href="/locations/cities"
            className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors"
          >
            View All 100+ Cities <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

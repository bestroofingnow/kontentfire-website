"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc.",
    avatar: "SJ",
    content:
      "KontentFire completely transformed our social media strategy. We went from posting 2-3 times a week to daily content across all platforms. Our engagement is up 340%!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder",
    company: "GrowthLabs",
    avatar: "MC",
    content:
      "The AI content generation is incredible. It understands our brand voice perfectly and creates posts that actually resonate with our audience. Total game changer.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Social Media Manager",
    company: "BrandBoost Agency",
    avatar: "ER",
    content:
      "I manage 15 client accounts and KontentFire saves me at least 20 hours every week. The automation features are worth every penny.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "E-commerce Owner",
    company: "StyleHaven",
    avatar: "DP",
    content:
      "Our Instagram following grew from 5K to 50K in 6 months using KontentFire. The content templates and scheduling features are phenomenal.",
    rating: 5,
  },
  {
    name: "Jessica Williams",
    role: "Content Creator",
    company: "Self-employed",
    avatar: "JW",
    content:
      "As a solo creator, I dont have time to manage multiple platforms. KontentFire lets me focus on what I love while it handles the rest.",
    rating: 5,
  },
  {
    name: "Alex Thompson",
    role: "CEO",
    company: "Digital First Media",
    avatar: "AT",
    content:
      "Weve tried every social media tool out there. KontentFire is the only one that actually delivers on its promises. The ROI is incredible.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="h-4 w-4 fill-current" />
            <span>Customer Love</span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Trusted by <span className="fire-text">Thousands</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            See what our customers are saying about their experience with KontentFire.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-orange-200 dark:text-orange-900" />
              
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-6 relative z-10">
                &quot;{testimonial.content}&quot;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

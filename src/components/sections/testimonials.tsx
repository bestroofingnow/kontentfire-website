"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Rocket, Users, Zap, TrendingUp, ArrowRight } from "lucide-react";

const earlyAdopterBenefits = [
  {
    icon: Zap,
    title: "Early Access",
    description: "Be among the first to use our cutting-edge AI content automation tools.",
  },
  {
    icon: TrendingUp,
    title: "Shape the Product",
    description: "Your feedback directly influences our roadmap and feature development.",
  },
  {
    icon: Users,
    title: "Founder Support",
    description: "Get direct access to our team for onboarding and personalized assistance.",
  },
  {
    icon: Rocket,
    title: "Launch Pricing",
    description: "Lock in special early adopter pricing that you keep forever.",
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
            <Rocket className="h-4 w-4" />
            <span>Join Early Adopters</span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Be Part of the <span className="fire-text">Revolution</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            KontentFire is transforming how businesses create and manage social media content. 
            Join our growing community of early adopters.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {earlyAdopterBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700"
            >
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white mb-4">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Social Media?
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Join forward-thinking businesses and creators who are automating their content 
            creation with AI. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://app.kontentfire.com/register">
              <Button size="lg" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-700">
                Talk to Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Flame, Sparkles, Zap } from "lucide-react";

const plans = [
  {
    name: "Spark",
    icon: Sparkles,
    price: 29,
    description: "Perfect for getting started with social media automation",
    credits: 50,
    features: [
      "50 AI content credits/month",
      "All social platforms",
      "Basic templates",
      "Manual scheduling",
      "Email support",
    ],
    cta: "Start with Spark",
    popular: false,
  },
  {
    name: "Blaze",
    icon: Flame,
    price: 79,
    description: "For creators serious about growing their presence",
    credits: 200,
    features: [
      "200 AI content credits/month",
      "All social platforms",
      "Premium templates",
      "Smart auto-scheduling",
      "Analytics dashboard",
      "AI image generation",
      "Priority support",
    ],
    cta: "Go Blaze",
    popular: true,
  },
  {
    name: "Inferno",
    icon: Zap,
    price: 199,
    description: "Maximum power for agencies and power users",
    credits: 500,
    features: [
      "500 AI content credits/month",
      "All social platforms",
      "All templates + custom",
      "Full automation workflows",
      "Advanced analytics",
      "Unlimited AI images",
      "API access",
      "Dedicated support",
      "White-label options",
    ],
    cta: "Unleash Inferno",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Flame className="h-4 w-4" />
            <span>Simple Pricing</span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Choose Your <span className="fire-text">Fire Power</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Start free, upgrade when you are ready. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg",
                plan.popular
                  ? "ring-2 ring-orange-500 scale-105 lg:scale-110"
                  : "border border-slate-200 dark:border-slate-700"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div
                  className={cn(
                    "p-2 rounded-lg",
                    plan.popular
                      ? "bg-gradient-to-br from-orange-500 to-amber-500 text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                  )}
                >
                  <plan.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {plan.name}
                </h3>
              </div>

              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-5xl font-bold text-slate-900 dark:text-white">
                  ${plan.price}
                </span>
                <span className="text-slate-500 dark:text-slate-400">/month</span>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 font-semibold mb-4">
                  <Sparkles className="h-5 w-5" />
                  <span>{plan.credits} credits/month</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 dark:text-slate-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="https://app.kontentfire.com/register" className="block">
                <Button
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 text-slate-500 dark:text-slate-400"
        >
          Need more? Buy additional credits anytime at $1/credit.
          <br />
          All plans include a 14-day money-back guarantee.
        </motion.p>
      </div>
    </section>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

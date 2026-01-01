"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 fire-gradient opacity-90" />
      
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            y: [0, 50, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl"
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-8">
            <Flame className="h-8 w-8 text-white" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Ignite Your Social Media?
          </h2>
          
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of creators and businesses who are saving time and growing their audience with KontentFire.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://app.kontentfire.com">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-slate-100 hover:text-orange-700 group"
              >
                Sign Up Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#pricing">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                View Pricing
              </Button>
            </Link>
          </div>

          <p className="mt-6 text-white/70 text-sm">
            Limited time 80% off.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

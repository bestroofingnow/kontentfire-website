"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Calendar,
  BarChart3,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  Bot,
  Zap,
  Image as ImageIcon,
  FileText,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Content Generation",
    description:
      "Create engaging posts, articles, and captions powered by GPT-4 and Claude. Our multi-AI approach ensures high-quality content every time.",
    color: "from-purple-500 to-indigo-500",
    link: "/features/ai-content",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description:
      "Schedule content weeks in advance. Set optimal posting times based on when your audience is most active.",
    color: "from-blue-500 to-cyan-500",
    link: "/features/scheduling",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track performance across all platforms. Get insights to improve engagement and understand what works.",
    color: "from-green-500 to-emerald-500",
    link: "/features/analytics",
  },
  {
    icon: ImageIcon,
    title: "AI Image Generation",
    description:
      "Create stunning visuals with DALL-E and Stable Diffusion. Generate custom images that match your brand.",
    color: "from-pink-500 to-rose-500",
    link: "/features/image-generation",
  },
  {
    icon: FileText,
    title: "Content Templates",
    description:
      "Choose from proven templates for different content types. Battle Royale, Myth Busters, How-To guides and more.",
    color: "from-amber-500 to-orange-500",
    link: "/features/templates",
  },
  {
    icon: Bot,
    title: "Full Automation",
    description:
      "Set up automated workflows that create and publish content on your schedule without manual intervention.",
    color: "from-red-500 to-pink-500",
    link: "/features/automation",
  },
];

const platforms = [
  { icon: Linkedin, name: "LinkedIn", color: "text-[#0A66C2]" },
  { icon: Facebook, name: "Facebook", color: "text-[#1877F2]" },
  { icon: Instagram, name: "Instagram", color: "text-[#E4405F]" },
  { icon: Twitter, name: "X/Twitter", color: "text-slate-800 dark:text-white" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Features() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="h-4 w-4" />
            <span>Powerful Features</span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Everything You Need to
            <span className="fire-text"> Dominate Social</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            From AI-powered content creation to automated publishing, KontentFire
            has all the tools you need to build a powerful social media presence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700"
            >
              <div
                className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {feature.description}
              </p>
              <Link 
                href={feature.link}
                className="inline-flex items-center text-orange-500 font-medium hover:gap-2 transition-all"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Platform Integration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
            Publish to All Major Platforms
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-3 bg-slate-100 dark:bg-slate-800 px-6 py-4 rounded-xl hover:shadow-lg transition-all"
              >
                <platform.icon className={`h-8 w-8 ${platform.color}`} />
                <span className="font-semibold text-slate-700 dark:text-slate-200">
                  {platform.name}
                </span>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-slate-500 dark:text-slate-400">
            + Google My Business and WordPress integration coming soon
          </p>
        </motion.div>
      </div>
    </section>
  );
}

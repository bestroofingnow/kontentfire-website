"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play, Sparkles, ArrowRight, CheckCircle, Share2, MessageCircle, Heart, ThumbsUp, Send, AtSign, Hash, Bell, Camera, Video, Megaphone, TrendingUp } from "lucide-react";
import { useEffect, useState, ReactNode } from "react";

const benefits = [
  "AI-powered content generation",
  "Multi-platform publishing",
  "Smart scheduling automation",
];

// Element types for the matrix
type MatrixElement = { type: 'emoji'; value: string } | { type: 'icon'; icon: string };

// Matrix elements - emojis
const emojiElements = [
  "📱", "💬", "❤️", "🔥", "✨", "📈", "🚀", "💡", "🎯", "📊",
  "👍", "💪", "🌟", "📣", "🎨", "✅", "💰", "🏆", "⚡", "🎉",
  "📝", "🔔", "💼", "🌐", "📸", "🎬", "💻", "📧", "🤖", "💎",
];

// Social/engagement icons
const iconNames = ['share', 'message', 'heart', 'thumbsUp', 'send', 'at', 'hash', 'bell', 'camera', 'video', 'megaphone', 'trending'];

function getRandomElement(): MatrixElement {
  // 35% chance for icon, 65% for emoji
  if (Math.random() < 0.35) {
    return { type: 'icon', icon: iconNames[Math.floor(Math.random() * iconNames.length)] };
  }
  return { type: 'emoji', value: emojiElements[Math.floor(Math.random() * emojiElements.length)] };
}

function renderIcon(iconName: string): ReactNode {
  const iconClass = "h-9 w-9";
  switch (iconName) {
    case 'share': return <Share2 className={iconClass} />;
    case 'message': return <MessageCircle className={iconClass} />;
    case 'heart': return <Heart className={iconClass} />;
    case 'thumbsUp': return <ThumbsUp className={iconClass} />;
    case 'send': return <Send className={iconClass} />;
    case 'at': return <AtSign className={iconClass} />;
    case 'hash': return <Hash className={iconClass} />;
    case 'bell': return <Bell className={iconClass} />;
    case 'camera': return <Camera className={iconClass} />;
    case 'video': return <Video className={iconClass} />;
    case 'megaphone': return <Megaphone className={iconClass} />;
    case 'trending': return <TrendingUp className={iconClass} />;
    default: return null;
  }
}

function MatrixColumn({ delay, duration, left }: { delay: number; duration: number; left: string }) {
  const [elements] = useState(() =>
    Array.from({ length: 5 }, () => getRandomElement())
  );

  return (
    <div
      className="absolute top-0 flex flex-col gap-16 md:gap-14 text-4xl animate-matrix-fall pointer-events-none select-none"
      style={{
        left,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      {elements.map((el, i) => (
        <span
          key={i}
          className="text-orange-500"
          style={{
            opacity: 0.6 + Math.random() * 0.3,
          }}
        >
          {el.type === 'emoji' ? el.value : renderIcon(el.icon)}
        </span>
      ))}
    </div>
  );
}

function MatrixBackground() {
  const [columns, setColumns] = useState<Array<{ id: number; delay: number; duration: number; left: string }>>([]);

  useEffect(() => {
    // Fewer columns on mobile for better spacing
    const isMobile = window.innerWidth < 768;
    const columnCount = isMobile ? 12 : 22;

    const cols = Array.from({ length: columnCount }, (_, i) => ({
      id: i,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 10,
      left: `${(i / columnCount) * 100}%`,
    }));
    setColumns(cols);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {columns.map((col) => (
        <MatrixColumn key={col.id} delay={col.delay} duration={col.duration} left={col.left} />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Matrix-style animated background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-50 via-orange-50/50 to-amber-50/70">
        <MatrixBackground />
        {/* Lighter gradient overlay for better visibility of matrix elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/50 to-white/80" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-orange-100/90 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-8"
          >
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered Content Automation</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="text-slate-900">Set Your</span>
            <br />
            <span className="fire-text">Social Media on Fire</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl text-slate-700 max-w-3xl mx-auto mb-8"
          >
            Generate, schedule, and publish stunning content across LinkedIn, Facebook,
            Instagram, and Twitter. Let AI handle content creation while you focus on
            growing your business.
          </motion.p>

          {/* Benefits list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-slate-700 bg-white/70 px-3 py-1 rounded-full">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>{benefit}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link href="https://app.kontentfire.com">
              <Button size="lg" className="group">
                Sign Up Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="outline" size="lg" className="group bg-white/80 hover:bg-white">
                <Play className="mr-2 h-5 w-5" />
                See How It Works
              </Button>
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-sm text-slate-600 bg-white/70 inline-block px-4 py-2 rounded-full"
          >
            Limited time 80% off.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { Calendar, CheckCircle, ArrowRight, Clock, Globe, BarChart3, Repeat, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Smart Scheduling - Automate Your Social Media Calendar',
  description: 'Schedule social media content weeks in advance with KontentFire. Optimal posting times, visual calendar, and timezone support for global audiences.',
  alternates: {
    canonical: '/features/scheduling',
  },
};

const capabilities = [
  { icon: Clock, title: 'Optimal Timing', description: 'AI analyzes your audience engagement patterns to suggest the best times to post for maximum reach.' },
  { icon: Globe, title: 'Timezone Support', description: 'Schedule content for audiences around the world. Posts go live at the right local time.' },
  { icon: Calendar, title: 'Visual Calendar', description: 'See your entire content plan at a glance. Drag and drop to reschedule, spot gaps, and maintain consistency.' },
  { icon: Repeat, title: 'Recurring Posts', description: 'Set up evergreen content to post automatically on a recurring schedule without manual intervention.' },
];

const benefits = [
  'Schedule weeks or months in advance',
  'Batch content creation sessions',
  'Never miss a posting window',
  'Maintain consistent presence',
  'Cross-platform coordination',
  'Holiday and event planning',
  'Team collaboration support',
  'Queue management',
];

const faqs = [
  { question: 'How far in advance can I schedule content?', answer: 'You can schedule content up to 12 months in advance. This allows you to plan campaigns, seasonal content, and maintain a consistent posting schedule without daily effort.' },
  { question: 'Does the scheduler support all platforms?', answer: 'Yes. KontentFire scheduling works with LinkedIn, Facebook, Instagram, Twitter/X, and Google My Business. Each platform receives content optimized for its specific format.' },
  { question: 'What happens if a scheduled post fails?', answer: 'You receive an immediate notification with the reason for failure. Most issues are auto-retried. You can also reschedule or edit the post directly from the notification.' },
  { question: 'Can I schedule the same content to multiple platforms?', answer: 'Absolutely. Create once, publish everywhere. The content is automatically adapted for each platform optimal format, hashtags, and character limits.' },
];

export default function SchedulingPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Calendar className="h-4 w-4" />
              <span>Smart Scheduling</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Schedule Content <span className="fire-text">Weeks Ahead</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Plan your social media calendar in advance. Set optimal posting times, visualize your content plan, and maintain a consistent presence effortlessly.
            </p>
            <Link href="https://app.kontentfire.com">
              <Button size="lg">
                Start Scheduling <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Capabilities */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
              Scheduling Made Simple
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {capabilities.map((cap, index) => (
                <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white mb-4">
                    <cap.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{cap.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{cap.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                Why Schedule Your Content?
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                    <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <HelpCircle className="h-4 w-4" />
                <span>FAQs</span>
              </span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Common Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{faq.question}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Features */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Related Features</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/features/ai-content" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">AI Content</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Generate engaging posts</div>
              </Link>
              <Link href="/features/analytics" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Analytics</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Track performance</div>
              </Link>
              <Link href="/features/automation" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Full Automation</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Set and forget workflows</div>
              </Link>
              <Link href="/features/templates" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Content Templates</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Proven content formats</div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Plan Your Content Calendar?</h2>
            <p className="text-slate-300 mb-8">Stop posting on the fly. Start scheduling like a pro.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://app.kontentfire.com">
                <Button size="lg">Sign Up Now <ArrowRight className="ml-2 h-5 w-5" /></Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  View Pricing
                </Button>
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/features" className="text-slate-400 hover:text-white transition-colors">All Features</Link>
              <Link href="/how-it-works" className="text-slate-400 hover:text-white transition-colors">How It Works</Link>
              <Link href="/use-cases" className="text-slate-400 hover:text-white transition-colors">Use Cases</Link>
              <Link href="/locations" className="text-slate-400 hover:text-white transition-colors">Locations</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(f => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer }
            }))
          })
        }}
      />
    </>
  );
}

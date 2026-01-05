import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Breadcrumb } from '@/components/seo/breadcrumb-schema';
import { Button } from '@/components/ui/button';
import { BarChart3, CheckCircle, ArrowRight, TrendingUp, PieChart, Users, Target, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Analytics Dashboard - Track Social Media Performance',
  description: 'Monitor your social media performance across all platforms. Get insights on engagement, reach, and growth with KontentFire analytics.',
  alternates: {
    canonical: '/features/analytics',
  },
};

const capabilities = [
  { icon: TrendingUp, title: 'Performance Tracking', description: 'Monitor likes, comments, shares, and reach across all your connected platforms in one unified dashboard.' },
  { icon: PieChart, title: 'Content Insights', description: 'Discover which content types perform best. Understand what resonates with your audience.' },
  { icon: Users, title: 'Audience Analytics', description: 'Learn about your followers - when they are active, what they engage with, and how your audience is growing.' },
  { icon: Target, title: 'Goal Tracking', description: 'Set growth targets and track progress. Get alerts when you hit milestones or need to adjust strategy.' },
];

const metrics = [
  'Engagement rate',
  'Reach and impressions',
  'Follower growth',
  'Click-through rate',
  'Best performing posts',
  'Optimal posting times',
  'Platform comparison',
  'Content type analysis',
];

const faqs = [
  { question: 'Which platforms are tracked in analytics?', answer: 'KontentFire analytics tracks performance across LinkedIn, Facebook, Instagram, and Twitter/X. All data is unified in a single dashboard for easy comparison.' },
  { question: 'How often is analytics data updated?', answer: 'Analytics data is refreshed every hour for connected accounts. You can also manually refresh to get the latest numbers instantly.' },
  { question: 'Can I export analytics reports?', answer: 'Yes. Export detailed reports in PDF or CSV format. Great for client reporting, team meetings, or tracking progress over time.' },
  { question: 'Does analytics show historical data?', answer: 'You get access to historical data from the moment you connect your accounts. View trends over days, weeks, or months to understand long-term performance.' },
];

export default function AnalyticsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Features', href: '/features' }, { label: 'Analytics', href: '/features/analytics' }]} className="mb-8" />
          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <BarChart3 className="h-4 w-4" />
              <span>Analytics Dashboard</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Track What <span className="fire-text">Actually Works</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Understand your social media performance with unified analytics. See what content drives engagement and make data-driven decisions.
            </p>
            <Link href="https://app.kontentfire.com">
              <Button size="lg">
                View Your Analytics <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Capabilities */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
              Data-Driven Growth
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {capabilities.map((cap, index) => (
                <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 text-white mb-4">
                    <cap.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{cap.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{cap.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Metrics */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                Metrics That Matter
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {metrics.map((metric, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                    <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white font-medium">{metric}</span>
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
              <Link href="/features/scheduling" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Smart Scheduling</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Plan content in advance</div>
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
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Understand Your Performance?</h2>
            <p className="text-slate-300 mb-8">Stop guessing. Start growing with data-driven insights.</p>
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

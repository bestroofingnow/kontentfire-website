import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { Bot, CheckCircle, ArrowRight, Workflow, Timer, RefreshCcw, Settings, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Full Automation - Set and Forget Social Media Publishing',
  description: 'Automate your entire social media workflow. Set up content generation and publishing that runs on autopilot with KontentFire automation.',
  alternates: {
    canonical: '/features/automation',
  },
};

const capabilities = [
  { icon: Workflow, title: 'Workflow Builder', description: 'Create custom automation workflows. Define triggers, content rules, and publishing schedules that run without intervention.' },
  { icon: Timer, title: 'Set and Forget', description: 'Configure your automation once, then let it run. Content is generated and published automatically on your schedule.' },
  { icon: RefreshCcw, title: 'Evergreen Content', description: 'Set up recurring content that keeps your feed active. Great for tips, quotes, and content worth resharing.' },
  { icon: Settings, title: 'Fine-Tuned Control', description: 'Full control over what gets automated. Set approval steps, content rules, and quality thresholds.' },
];

const automationFeatures = [
  'Auto content generation',
  'Scheduled publishing',
  'Multi-platform posting',
  'Content recycling',
  'Hashtag automation',
  'Engagement triggers',
  'Performance alerts',
  'Queue management',
];

const faqs = [
  { question: 'How does automation work?', answer: 'Set up your preferences, content themes, and schedule. KontentFire AI generates content based on your settings and automatically publishes to your connected platforms at optimal times.' },
  { question: 'Can I review content before it publishes?', answer: 'Yes. You can set up approval workflows where content is generated automatically but held for your review before publishing. Or go fully automatic if you trust the AI output.' },
  { question: 'What if I want to pause automation?', answer: 'Pause or stop automation anytime with one click. You can also set specific dates where automation is disabled, like holidays or during special campaigns.' },
  { question: 'Is there a limit on automated posts?', answer: 'Automation is governed by your plan credits. Each automated post uses credits just like manual content generation. Higher plans include more credits for more automation.' },
];

export default function AutomationPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Bot className="h-4 w-4" />
              <span>Full Automation</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Social Media on <span className="fire-text">Autopilot</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Set up automated workflows that generate and publish content without manual intervention. Your social media runs while you focus on your business.
            </p>
            <Link href="https://app.kontentfire.com">
              <Button size="lg">
                Start Automating <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Capabilities */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
              True Automation
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {capabilities.map((cap, index) => (
                <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 text-white mb-4">
                    <cap.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{cap.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{cap.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                What You Can Automate
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {automationFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                    <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white font-medium">{feature}</span>
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
              <Link href="/features/analytics" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Analytics</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Track performance</div>
              </Link>
              <Link href="/features/templates" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Content Templates</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Proven content formats</div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Put Your Social Media on Autopilot?</h2>
            <p className="text-slate-300 mb-8">Set it up once. Let it run forever. Focus on what matters.</p>
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

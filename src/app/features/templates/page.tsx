import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { FileText, CheckCircle, ArrowRight, Swords, ShieldQuestion, ListChecks, BookOpen, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Content Templates - Proven Formats for Engaging Social Media Posts',
  description: 'Access proven content templates for social media. Battle Royale, Myth Busters, How-To guides, and more. Create engaging posts with tested formats.',
  alternates: {
    canonical: '/features/templates',
  },
};

const capabilities = [
  { icon: Swords, title: 'Battle Royale', description: 'Compare two options, tools, or approaches. High engagement format that sparks discussions and debates.' },
  { icon: ShieldQuestion, title: 'Myth Busters', description: 'Debunk common misconceptions in your industry. Position yourself as an expert while educating your audience.' },
  { icon: ListChecks, title: 'How-To Guides', description: 'Step-by-step tutorials that provide value. Perfect for establishing authority and driving saves.' },
  { icon: BookOpen, title: 'Case Studies', description: 'Share success stories and real results. Build credibility with data-driven content.' },
];

const templateList = [
  'Battle Royale comparisons',
  'Myth Busters',
  'How-To step guides',
  'Listicles',
  'Industry news summaries',
  'Quote graphics',
  'Poll starters',
  'Case study formats',
  'Behind-the-scenes',
  'Tips and tricks',
  'Question hooks',
  'Trend commentary',
];

const faqs = [
  { question: 'What templates are included?', answer: 'KontentFire includes templates for Battle Royale comparisons, Myth Busters, How-To guides, Listicles, Case Studies, Industry News, Quote cards, Polls, and more. New templates are added regularly based on what performs best.' },
  { question: 'Can I customize templates?', answer: 'Absolutely. Every template is fully customizable. Adjust the structure, add or remove sections, and adapt them to your brand voice. Save your modified versions as custom templates.' },
  { question: 'How do templates improve engagement?', answer: 'Templates are based on proven content formats that consistently drive high engagement. They provide structure that resonates with audiences while allowing your unique perspective to shine through.' },
  { question: 'Can I create my own templates?', answer: 'Yes. Create and save custom templates from scratch or modify existing ones. Your custom templates are available whenever you create new content.' },
];

export default function TemplatesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <FileText className="h-4 w-4" />
              <span>Content Templates</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Proven Formats That <span className="fire-text">Get Results</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Stop staring at a blank screen. Use battle-tested content templates that consistently drive engagement and growth.
            </p>
            <Link href="https://app.kontentfire.com">
              <Button size="lg">
                Explore Templates <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Popular Templates */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
              Popular Templates
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {capabilities.map((cap, index) => (
                <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white mb-4">
                    <cap.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{cap.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{cap.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Template List */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                Template Library
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {templateList.map((template, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                    <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white font-medium">{template}</span>
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
              <Link href="/features/images" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">AI Images</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Generate stunning visuals</div>
              </Link>
              <Link href="/features/scheduling" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Smart Scheduling</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Plan content in advance</div>
              </Link>
              <Link href="/features/automation" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Full Automation</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Set and forget workflows</div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Use Proven Templates?</h2>
            <p className="text-slate-300 mb-8">Create engaging content faster with battle-tested formats.</p>
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

import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { Sparkles, CheckCircle, ArrowRight, Zap, Brain, MessageSquare, PenTool, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Content Generation - Create Engaging Posts with GPT-4 & Claude',
  description: 'Generate high-quality social media content using GPT-4, Claude, and Perplexity AI. Create engaging posts, articles, and captions tailored to your brand voice.',
  alternates: {
    canonical: '/features/ai-content',
  },
};

const capabilities = [
  { icon: Brain, title: 'Multi-AI Approach', description: 'Leverage GPT-4, Claude by Anthropic, and Perplexity to get the best results for different content types.' },
  { icon: MessageSquare, title: 'Platform-Optimized', description: 'Content is automatically tailored for each platform - LinkedIn, Facebook, Instagram, and Twitter.' },
  { icon: PenTool, title: 'Brand Voice', description: 'Set your tone, style, and preferences. The AI learns and adapts to match your unique brand voice.' },
  { icon: Zap, title: 'Instant Generation', description: 'Generate weeks of content in minutes. No more staring at a blank screen wondering what to post.' },
];

const contentTypes = [
  'Social media posts',
  'Long-form articles',
  'Engaging captions',
  'Thread content',
  'Carousel scripts',
  'Poll ideas',
  'Story content',
  'Video scripts',
];

const faqs = [
  { question: 'Which AI models power the content generation?', answer: 'KontentFire uses a multi-AI approach combining GPT-4 for creative writing, Claude by Anthropic for nuanced content, and Perplexity for research-backed posts. This ensures you get the best results for any content type.' },
  { question: 'Can I edit the AI-generated content?', answer: 'Absolutely. All AI-generated content is fully editable. You can refine, adjust, or completely rewrite any suggestion before publishing. The AI also learns from your edits over time.' },
  { question: 'How does the brand voice feature work?', answer: 'You set your preferred tone (professional, casual, witty, etc.), key messages, and style guidelines. The AI incorporates these preferences into every piece of content it generates.' },
  { question: 'Is the content unique and original?', answer: 'Yes. Each piece of content is generated fresh based on your inputs and preferences. The AI creates original content, not repurposed or scraped material.' },
];

export default function AIContentPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              <span>AI Content Generation</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Create Engaging Content with <span className="fire-text">AI Power</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Generate high-quality social media posts, articles, and captions using the world&apos;s most advanced AI models. Tailored to your brand voice, optimized for each platform.
            </p>
            <Link href="https://app.kontentfire.com">
              <Button size="lg">
                Start Creating Content <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Capabilities */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
              Powerful AI Capabilities
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {capabilities.map((cap, index) => (
                <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 text-white mb-4">
                    <cap.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{cap.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{cap.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Content Types */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                Content Types You Can Create
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {contentTypes.map((type, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                    <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white font-medium">{type}</span>
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
              <Link href="/features/scheduling" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Smart Scheduling</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Schedule content in advance</div>
              </Link>
              <Link href="/features/templates" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Content Templates</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Proven content formats</div>
              </Link>
              <Link href="/features/images" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">AI Images</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Generate stunning visuals</div>
              </Link>
              <Link href="/features/automation" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Full Automation</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Set and forget workflows</div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Create Amazing Content?</h2>
            <p className="text-slate-300 mb-8">Join thousands of creators using AI to power their social media presence.</p>
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

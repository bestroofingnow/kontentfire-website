import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { Target, Heart, Zap, Users, HelpCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About KontentFire - Our Mission and Story',
  description: 'Learn about KontentFire, the AI-powered social media automation platform helping businesses create and publish engaging content effortlessly.',
  alternates: {
    canonical: '/about',
  },
};

const values = [
  { icon: Zap, title: 'Innovation First', description: 'We leverage cutting-edge AI technology to solve real content creation challenges.' },
  { icon: Users, title: 'Customer Success', description: 'Your success is our success. We build features that help you grow.' },
  { icon: Heart, title: 'Quality Content', description: 'AI should enhance creativity, not replace it. We focus on authentic content.' },
  { icon: Target, title: 'Results Driven', description: 'Every feature is designed to save you time and improve results.' },
];

const faqs = [
  { question: 'Who founded KontentFire?', answer: 'KontentFire was founded by a team passionate about making AI accessible for content creators and businesses of all sizes.' },
  { question: 'What makes KontentFire different from other tools?', answer: 'We combine multiple AI models (GPT-4, Claude, and more) with deep platform integrations and proven content templates to deliver superior results.' },
  { question: 'Is KontentFire a new company?', answer: 'Yes, we are a growing startup focused on revolutionizing social media content creation through AI automation.' },
  { question: 'Where is KontentFire based?', answer: 'KontentFire operates as a fully remote company with team members across the United States.' },
  { question: 'Does KontentFire have customer support?', answer: 'Absolutely. We offer email support for all users, with priority support for Blaze and Inferno plan subscribers.' },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">About <span className="fire-text">KontentFire</span></h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">Building the future of social media content creation.</p>
          </div>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">KontentFire was built to solve a problem every business faces: creating consistent, engaging social media content takes too much time. We believe AI can handle the heavy lifting of content creation, freeing you to focus on what matters most - building relationships and growing your business.</p>
            <p className="text-lg text-slate-600 dark:text-slate-300">Our platform combines the power of multiple AI models including GPT-4, Claude, and specialized image generation tools to create content that resonates with your audience across LinkedIn, Facebook, Instagram, and Twitter.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">What We Do</h2>
            <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300">
              <p><strong className="text-slate-900 dark:text-white">AI Content Generation:</strong> Our platform uses advanced AI to create posts, articles, and captions tailored to your brand voice.</p>
              <p><strong className="text-slate-900 dark:text-white">Multi-Platform Publishing:</strong> Write once, publish everywhere. We adapt content for each platform automatically.</p>
              <p><strong className="text-slate-900 dark:text-white">Smart Automation:</strong> Set up workflows that run on autopilot. Schedule and maintain presence without daily effort.</p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700">
                  <div className="inline-flex p-3 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 mb-4"><value.icon className="h-6 w-6" /></div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{value.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Built With Modern Technology</h2>
            <ul className="list-disc list-inside text-lg text-slate-600 dark:text-slate-300 space-y-2">
              <li>React and TypeScript for a responsive, type-safe frontend</li>
              <li>Node.js and Express for a robust API backend</li>
              <li>PostgreSQL for reliable data storage</li>
              <li>Integration with OpenAI, Anthropic, and Perplexity AI</li>
              <li>Stripe for secure payment processing</li>
              <li>Official APIs for LinkedIn, Facebook, Instagram, and Twitter</li>
            </ul>
          </section>

          <section className="mb-16">
            <div className="text-center mb-12">
              <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4"><HelpCircle className="h-4 w-4" /><span>About Us FAQs</span></span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Questions About KontentFire</h2>
            </div>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700"><h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{faq.question}</h3><p className="text-slate-600 dark:text-slate-300">{faq.answer}</p></div>))}</div>
          </section>

          {/* Explore More */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Explore More</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/features" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Features</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">See all capabilities</div>
              </Link>
              <Link href="/use-cases" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Use Cases</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">See who uses KontentFire</div>
              </Link>
              <Link href="/pricing" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Pricing</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Plans starting at $29/mo</div>
              </Link>
              <Link href="/locations" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Locations</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Serving all 50 states</div>
              </Link>
            </div>
          </section>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-slate-300 mb-8">Join thousands of businesses using AI to power their social media.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://app.kontentfire.com"><Button size="lg">Sign Up Now<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }) }} />
    </>
  );
}
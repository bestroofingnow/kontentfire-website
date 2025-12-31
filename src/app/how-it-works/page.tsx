import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { UserPlus, Link2, Sparkles, Calendar, Rocket, ArrowRight, CheckCircle, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How KontentFire Works - Get Started in Minutes',
  description: 'Learn how to set up KontentFire and start automating your social media content.',
};

const steps = [
  { number: '01', icon: UserPlus, title: 'Create Your Account', description: 'Sign up for a free 14-day trial. No credit card required.', details: ['Quick email signup', 'No credit card needed', 'Instant access'] },
  { number: '02', icon: Link2, title: 'Connect Your Platforms', description: 'Link social accounts with secure OAuth.', details: ['One-click connection', 'Secure OAuth', 'Multiple accounts'] },
  { number: '03', icon: Sparkles, title: 'Generate AI Content', description: 'Choose templates or describe your needs.', details: ['Multiple AI models', 'Proven templates', 'Brand customization'] },
  { number: '04', icon: Calendar, title: 'Schedule and Automate', description: 'Review, edit, and schedule content.', details: ['Visual calendar', 'Optimal timing', 'Bulk scheduling'] },
  { number: '05', icon: Rocket, title: 'Publish and Grow', description: 'Auto-publish and track performance.', details: ['Auto publishing', 'Analytics', 'Optimization'] },
];

const faqs = [
  { question: 'How long does it take to set up KontentFire?', answer: 'Most users complete setup in under 10 minutes. Create an account, connect platforms, and start generating content.' },
  { question: 'Do I need technical skills?', answer: 'No. KontentFire is intuitive and user-friendly. We provide guides and support.' },
  { question: 'Can I review content before publishing?', answer: 'Yes. Review, edit, and approve every piece before it goes live.' },
  { question: 'What happens after my free trial?', answer: 'Choose a paid plan to continue. Data preserved for 30 days if you downgrade.' },
  { question: 'How does the AI know what content to create?', answer: 'AI uses your input, brand guidelines, and preferences to generate relevant content.' },
];

export default function HowItWorksPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">How <span className="fire-text">KontentFire</span> Works</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">Get started in minutes with our simple 5-step process.</p>
          </div>
          <div className="space-y-12 mb-20">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white flex-shrink-0"><step.icon className="h-8 w-8" /></div>
                <div>
                  <span className="text-sm font-bold text-orange-500">STEP {step.number}</span>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h2>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">{step.description}</p>
                  <ul className="space-y-2">{step.details.map((d, i) => (<li key={i} className="flex items-center gap-2 text-slate-600 dark:text-slate-300"><CheckCircle className="h-5 w-5 text-green-500" />{d}</li>))}</ul>
                </div>
              </div>
            ))}
          </div>
          <section className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4"><HelpCircle className="h-4 w-4" /><span>FAQs</span></span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Common Questions</h2>
            </div>
            <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700"><h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{faq.question}</h3><p className="text-slate-600 dark:text-slate-300">{faq.answer}</p></div>))}</div>
          </section>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-slate-300 mb-8">14-day free trial with full access.</p>
            <Link href="https://app.kontentfire.com/register"><Button size="lg">Start Free Trial<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
          </div>
        </div>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }) }} />
    </>
  );
}
import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { Play, CheckCircle, Clock, Calendar, HelpCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Demo - See KontentFire in Action',
  description: 'Watch a product demo or schedule a personalized walkthrough of KontentFire. See how AI-powered content automation can transform your social media strategy.',
  alternates: {
    canonical: '/demo',
  },
};

const demoHighlights = [
  'AI content generation with GPT-4 and Claude',
  'Multi-platform publishing in one click',
  'Smart scheduling and automation',
  'Analytics dashboard overview',
  'Content template library tour',
  'Brand voice customization',
];

const faqs = [
  { question: 'How long is the demo?', answer: 'Our self-guided demo takes about 5 minutes. Personalized demo calls typically run 20-30 minutes depending on your questions.' },
  { question: 'Do I need to create an account to watch the demo?', answer: 'No account needed for the self-guided demo video. For a personalized demo call, we\'ll just need your email to schedule.' },
  { question: 'Can I get a demo for my team?', answer: 'Absolutely! We offer team demos for businesses evaluating KontentFire. Contact us to schedule a group session.' },
  { question: 'What happens after the demo?', answer: 'Choose a plan and get instant access to all features.' },
  { question: 'Can I see specific features during a live demo?', answer: 'Yes! During personalized demos, we can focus on the features most relevant to your use case and answer specific questions.' },
];

export default function DemoPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Play className="h-4 w-4" />
              <span>Product Demo</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">See KontentFire <span className="fire-text">in Action</span></h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">Watch how KontentFire transforms your content workflow with AI-powered automation.</p>
          </div>

          <section className="mb-16">
            <div className="bg-slate-900 rounded-2xl aspect-video flex items-center justify-center mb-8 border border-slate-700">
              <div className="text-center">
                <div className="inline-flex p-6 rounded-full bg-orange-600 text-white mb-4 cursor-pointer hover:bg-orange-500 transition-colors">
                  <Play className="h-12 w-12" />
                </div>
                <p className="text-slate-400">Demo video coming soon</p>
                <p className="text-slate-500 text-sm mt-2">Start your special offer to explore the platform</p>
              </div>
            </div>
          </section>

          <section className="mb-16 grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Self-Guided Tour</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">Explore KontentFire at your own pace with our interactive demo environment.</p>
              <Link href="https://app.kontentfire.com">
                <Button className="w-full">Sign Up Now <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </Link>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Personalized Demo</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">Schedule a 1-on-1 call with our team for a walkthrough tailored to your needs.</p>
              <Link href="/contact">
                <Button variant="outline" className="w-full">Schedule a Call <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </Link>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">What You&apos;ll See in the Demo</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {demoHighlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">{highlight}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <div className="text-center mb-12">
              <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <HelpCircle className="h-4 w-4" />
                <span>Demo FAQs</span>
              </span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Demo Questions</h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{faq.question}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-slate-300 mb-8">Join businesses already using KontentFire to automate their content.</p>
            <Link href="https://app.kontentfire.com">
              <Button size="lg">Sign Up Now <ArrowRight className="ml-2 h-5 w-5" /></Button>
            </Link>
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

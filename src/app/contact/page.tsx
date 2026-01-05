import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare, Clock, HelpCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch with KontentFire',
  description: 'Contact KontentFire for support, sales inquiries, or partnership opportunities. We typically respond within 24 hours.',
  alternates: {
    canonical: '/contact',
  },
};

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us an email and we\'ll get back to you within 24 hours.',
    action: 'support@kontentfire.com',
    href: 'mailto:support@kontentfire.com',
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Chat with our team during business hours for quick answers.',
    action: 'Start Chat',
    href: 'https://app.kontentfire.com',
  },
];

const faqs = [
  { question: 'How quickly do you respond to support requests?', answer: 'We aim to respond to all support requests within 24 hours during business days. Priority support subscribers typically receive responses within 4 hours.' },
  { question: 'What are your business hours?', answer: 'Our support team is available Monday through Friday, 9 AM to 6 PM Eastern Time. Emergency support is available for enterprise customers.' },
  { question: 'Can I schedule a demo call?', answer: 'Yes! Visit our demo page to book a personalized walkthrough of KontentFire with one of our product specialists.' },
  { question: 'Do you offer phone support?', answer: 'Phone support is available for Inferno plan subscribers and enterprise customers. All other plans receive email and chat support.' },
  { question: 'How do I report a bug or request a feature?', answer: 'You can report bugs or request features through our in-app feedback system, or email us directly at feedback@kontentfire.com.' },
];

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">Get in <span className="fire-text">Touch</span></h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">Have questions? We&apos;re here to help you succeed with KontentFire.</p>
          </div>

          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <a key={index} href={method.href} className="group bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700">
                  <div className="inline-flex p-3 rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 mb-4">
                    <method.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{method.title}</h2>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{method.description}</p>
                  <span className="text-orange-600 dark:text-orange-400 font-medium group-hover:underline">{method.action}</span>
                </a>
              ))}
            </div>
          </section>

          <section className="mb-16 bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Response Times</h2>
            </div>
            <div className="space-y-3 text-slate-600 dark:text-slate-300">
              <p><strong className="text-slate-900 dark:text-white">Spark Plan:</strong> Within 24 business hours</p>
              <p><strong className="text-slate-900 dark:text-white">Blaze Plan:</strong> Within 12 business hours</p>
              <p><strong className="text-slate-900 dark:text-white">Inferno Plan:</strong> Within 4 business hours + phone support</p>
            </div>
          </section>

          <section className="mb-16">
            <div className="text-center mb-12">
              <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <HelpCircle className="h-4 w-4" />
                <span>Contact FAQs</span>
              </span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Support Questions</h2>
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

          {/* Explore More */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Explore More</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/features" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Features</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">See all capabilities</div>
              </Link>
              <Link href="/pricing" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Pricing</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Plans starting at $29/mo</div>
              </Link>
              <Link href="/faq" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">FAQ</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Common questions</div>
              </Link>
              <Link href="/locations" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Locations</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Serving all 50 states</div>
              </Link>
            </div>
          </section>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Want to See KontentFire in Action?</h2>
            <p className="text-slate-300 mb-8">Book a personalized demo and see how AI can transform your content strategy.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/demo">
                <Button size="lg">Schedule a Demo <ArrowRight className="ml-2 h-5 w-5" /></Button>
              </Link>
              <Link href="https://app.kontentfire.com">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Sign Up Now
                </Button>
              </Link>
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

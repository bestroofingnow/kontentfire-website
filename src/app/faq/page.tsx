import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Breadcrumb } from '@/components/seo/breadcrumb-schema';
import { Button } from '@/components/ui/button';
import { HelpCircle, CreditCard, Zap, Shield, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions About KontentFire',
  description: 'Find answers to common questions about KontentFire, pricing, features, AI content generation, and platform integrations.',
  alternates: {
    canonical: '/faq',
  },
};

const faqCategories = [
  {
    icon: Zap,
    title: 'Getting Started',
    faqs: [
      { question: 'What is KontentFire?', answer: 'KontentFire is an AI-powered social media automation platform that helps businesses create, schedule, and publish engaging content across multiple platforms including LinkedIn, Facebook, Instagram, and Twitter.' },
      { question: 'How do I create an account?', answer: 'Visit app.kontentfire.com and click "Sign Up" to create your account. You can start with a limited-time 80% discount that includes full access to all features.' },
      { question: 'Do I need technical skills to use KontentFire?', answer: 'No technical skills required. KontentFire is designed to be user-friendly with an intuitive interface. Simply connect your social accounts, choose a template, and let AI do the heavy lifting.' },
      { question: 'How long does it take to set up?', answer: 'Most users complete setup in under 10 minutes. Connect your social accounts, set your brand preferences, and you\'re ready to create content.' },
      { question: 'Is there a special offer?', answer: 'Yes! We offer a limited-time 80% discount with full access to all features.' },
    ],
  },
  {
    icon: CreditCard,
    title: 'Pricing & Plans',
    faqs: [
      { question: 'What plans are available?', answer: 'We offer three plans: Spark ($29/month) for individuals, Blaze ($79/month) for growing businesses, and Inferno ($149/month) for agencies and teams. Annual billing offers a 20% discount.' },
      { question: 'Can I change my plan later?', answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle, and we\'ll prorate any differences.' },
      { question: 'What payment methods do you accept?', answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover) through our secure Stripe payment processor.' },
      { question: 'Is there a refund policy?', answer: 'If you\'re not satisfied with KontentFire, contact support for assistance.' },
      { question: 'What happens when I run out of credits?', answer: 'You can purchase additional credits at any time, or upgrade to a higher plan for more monthly credits. Your scheduled content will continue to publish even if you\'ve used all credits.' },
    ],
  },
  {
    icon: HelpCircle,
    title: 'Features & Usage',
    faqs: [
      { question: 'Which AI models does KontentFire use?', answer: 'KontentFire uses multiple AI models including GPT-4, Claude by Anthropic, and Perplexity for research. For image generation, we integrate with DALL-E and Stable Diffusion.' },
      { question: 'How many social accounts can I connect?', answer: 'The number of connected accounts depends on your plan: Spark (5 accounts), Blaze (15 accounts), Inferno (unlimited accounts).' },
      { question: 'Can I schedule content in advance?', answer: 'Yes! You can schedule content weeks or months in advance. Our calendar view makes it easy to plan and visualize your content strategy.' },
      { question: 'What content templates are available?', answer: 'We offer templates including Battle Royale comparisons, Myth Busters, How-To guides, Checklists, Case Studies, Industry News, and more. New templates are added regularly.' },
      { question: 'Can I customize the AI-generated content?', answer: 'Absolutely. You can edit any AI-generated content before publishing, set brand voice guidelines, and the AI learns from your preferences over time.' },
    ],
  },
  {
    icon: Shield,
    title: 'Security & Privacy',
    faqs: [
      { question: 'Is my data secure?', answer: 'Yes. We use industry-standard encryption (AES-256) for data at rest and TLS 1.3 for data in transit. Our infrastructure is hosted on secure cloud providers with SOC 2 compliance.' },
      { question: 'Do you store my social media credentials?', answer: 'No. We use OAuth authentication provided by each platform. Your passwords are never stored on our servers.' },
      { question: 'Can I delete my data?', answer: 'Yes. You can delete your account and all associated data at any time from your account settings. Data deletion is permanent and completed within 30 days.' },
      { question: 'Do you sell user data?', answer: 'Never. Your data is yours. We don\'t sell, rent, or share your personal information with third parties for marketing purposes.' },
      { question: 'Is KontentFire GDPR compliant?', answer: 'Yes. We are fully GDPR compliant and offer data processing agreements for enterprise customers.' },
    ],
  },
];

export default function FAQPage() {
  const allFaqs = faqCategories.flatMap(cat => cat.faqs);

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'FAQ', href: '/faq' }]} className="mb-8" />
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <HelpCircle className="h-4 w-4" />
              <span>Help Center</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked <span className="fire-text">Questions</span></h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">Everything you need to know about KontentFire.</p>
          </div>

          {faqCategories.map((category, catIndex) => (
            <section key={catIndex} className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="inline-flex p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                  <category.icon className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{category.title}</h2>
              </div>
              <div className="space-y-4">
                {category.faqs.map((faq, i) => (
                  <div key={i} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{faq.question}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Explore More */}
          <section className="mb-12">
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
              <Link href="/how-it-works" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">How It Works</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">3 simple steps</div>
              </Link>
              <Link href="/locations" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Locations</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Serving all 50 states</div>
              </Link>
            </div>
          </section>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
            <p className="text-slate-300 mb-8">Our support team is ready to help you get started.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg">Contact Support <ArrowRight className="ml-2 h-5 w-5" /></Button>
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
            mainEntity: allFaqs.map(f => ({
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

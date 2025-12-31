import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { Building2, Users, Briefcase, Store, Megaphone, PenTool, HelpCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Use Cases - How Businesses Use KontentFire',
  description: 'Discover how agencies, small businesses, marketers, and content creators use KontentFire to automate social media content creation and grow their audience.',
};

const useCases = [
  {
    icon: Megaphone,
    title: 'Marketing Agencies',
    description: 'Manage multiple client accounts efficiently. Create branded content at scale while maintaining each client\'s unique voice.',
    benefits: ['Manage unlimited client accounts', 'White-label reporting', 'Team collaboration tools', 'Bulk content scheduling'],
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Store,
    title: 'Small Businesses',
    description: 'Maintain a consistent social media presence without hiring a full-time marketer. Save hours every week on content creation.',
    benefits: ['Easy-to-use templates', 'Set-and-forget automation', 'Affordable pricing', 'No marketing expertise needed'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Briefcase,
    title: 'Consultants & Coaches',
    description: 'Build thought leadership with consistent, high-quality content. Share expertise and attract new clients automatically.',
    benefits: ['Personal brand building', 'LinkedIn optimization', 'Thought leadership content', 'Lead generation'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: PenTool,
    title: 'Content Creators',
    description: 'Repurpose content across platforms instantly. Turn blog posts, videos, and podcasts into social media gold.',
    benefits: ['Cross-platform repurposing', 'Image generation', 'Hashtag optimization', 'Engagement tracking'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Building2,
    title: 'Enterprise Teams',
    description: 'Coordinate social media efforts across departments. Maintain brand consistency with approval workflows.',
    benefits: ['Role-based permissions', 'Approval workflows', 'Brand guideline enforcement', 'Enterprise SSO'],
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Users,
    title: 'Real Estate Agents',
    description: 'Showcase listings and build local authority. Generate property descriptions and market updates automatically.',
    benefits: ['Property listing posts', 'Local market content', 'Client testimonial templates', 'Open house promotion'],
    color: 'from-red-500 to-pink-500',
  },
];

const faqs = [
  { question: 'Which industries benefit most from KontentFire?', answer: 'KontentFire works well for any business that needs consistent social media presence. We see particularly strong results with marketing agencies, real estate, professional services, e-commerce, and SaaS companies.' },
  { question: 'Can I use KontentFire for multiple businesses?', answer: 'Yes! Our Blaze and Inferno plans support multiple brand profiles, each with their own voice settings and connected accounts. Perfect for agencies or multi-location businesses.' },
  { question: 'Do you have industry-specific templates?', answer: 'Yes, we offer templates tailored to different industries including real estate, healthcare, legal, finance, and more. Our AI also learns your specific industry terminology over time.' },
  { question: 'How does KontentFire maintain brand voice?', answer: 'You can set detailed brand guidelines including tone, style, and vocabulary preferences. The AI uses these settings to generate content that sounds authentically like your brand.' },
  { question: 'Can KontentFire handle compliance-sensitive industries?', answer: 'Yes. Our platform includes review and approval workflows, and you can add compliance disclaimers to templates. Many financial advisors and healthcare providers use KontentFire with appropriate review processes.' },
];

export default function UseCasesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Briefcase className="h-4 w-4" />
              <span>Use Cases</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">Built for <span className="fire-text">Your Business</span></h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">See how businesses like yours use KontentFire to automate content and grow their social presence.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${useCase.color} text-white mb-4`}>
                  <useCase.icon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{useCase.title}</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <section className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <HelpCircle className="h-4 w-4" />
                <span>Use Case FAQs</span>
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

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Transform Your Content Strategy?</h2>
            <p className="text-slate-300 mb-8">Start your 14-day free trial and see the difference AI automation makes.</p>
            <Link href="https://app.kontentfire.com/register">
              <Button size="lg">Start Free Trial <ArrowRight className="ml-2 h-5 w-5" /></Button>
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

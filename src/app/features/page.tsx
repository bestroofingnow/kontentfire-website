import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Breadcrumb } from '@/components/seo/breadcrumb-schema';
import { Button } from '@/components/ui/button';
import { Sparkles, Calendar, BarChart3, Image as ImageIcon, FileText, Bot, ArrowRight, Zap, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Features - AI Content Generation, Scheduling & Analytics',
  description: 'Explore KontentFire features: AI content generation with GPT-4 and Claude, smart scheduling, multi-platform publishing, analytics, and content templates.',
  alternates: {
    canonical: '/features',
  },
};

const features = [
  { icon: Sparkles, title: 'AI Content Generation', description: 'Create engaging posts and articles powered by GPT-4 and Claude. Our multi-AI approach ensures high-quality content every time.', color: 'from-purple-500 to-indigo-500', href: '/features/ai-content' },
  { icon: Calendar, title: 'Smart Scheduling', description: 'Schedule content weeks in advance. Set optimal posting times based on when your audience is most active.', color: 'from-blue-500 to-cyan-500', href: '/features/scheduling' },
  { icon: BarChart3, title: 'Analytics Dashboard', description: 'Track performance across all platforms. Get insights to improve engagement and understand what works.', color: 'from-green-500 to-emerald-500', href: '/features/analytics' },
  { icon: ImageIcon, title: 'AI Image Generation', description: 'Create stunning visuals with DALL-E and Stable Diffusion. Generate custom images that match your brand.', color: 'from-pink-500 to-rose-500', href: '/features/images' },
  { icon: FileText, title: 'Content Templates', description: 'Choose from proven templates for different content types. Battle Royale, Myth Busters, How-To guides and more.', color: 'from-amber-500 to-orange-500', href: '/features/templates' },
  { icon: Bot, title: 'Full Automation', description: 'Set up automated workflows that create and publish content on your schedule without manual intervention.', color: 'from-red-500 to-pink-500', href: '/features/automation' },
];

const faqs = [
  { question: 'What AI models does KontentFire use?', answer: 'KontentFire integrates with multiple leading AI models including GPT-4, Claude by Anthropic, and Perplexity for research. For images, we use DALL-E and Stable Diffusion.' },
  { question: 'Can I customize the AI output?', answer: 'Yes. You can set brand voice guidelines, preferred tone, and content preferences. The AI learns from your edits over time.' },
  { question: 'How many platforms can I publish to?', answer: 'KontentFire supports LinkedIn, Facebook, Instagram, Twitter/X, and Google My Business. WordPress integration is coming soon.' },
  { question: 'What content templates are available?', answer: 'We offer templates including Battle Royale comparisons, Myth Busters, Technical Guides, Checklists, Case Studies, and more. New templates are added regularly.' },
  { question: 'Is there a limit on content generation?', answer: 'Content generation uses credits based on your plan. Spark includes 50 credits/month, Blaze includes 200, and Inferno includes 500. Additional credits can be purchased.' },
];

export default function FeaturesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Features', href: '/features' }]} className="mb-8" />
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4"><Zap className="h-4 w-4" /><span>Powerful Features</span></span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">Everything You Need to <span className="fire-text">Dominate Social</span></h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">From AI content creation to automated publishing, KontentFire has all the tools to build a powerful social media presence.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <Link key={index} href={feature.href} className="group bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-4`}><feature.icon className="h-6 w-6" /></div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors">{feature.title}</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{feature.description}</p>
                <span className="inline-flex items-center text-orange-500 font-medium text-sm">Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
              </Link>
            ))}
          </div>

          {/* Related Pages */}
          <section className="mb-20">
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Explore More</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                <Link href="/how-it-works" className="group text-center p-4 rounded-xl hover:bg-white dark:hover:bg-slate-900 transition-colors">
                  <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">How It Works</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">5-step setup guide</div>
                </Link>
                <Link href="/use-cases" className="group text-center p-4 rounded-xl hover:bg-white dark:hover:bg-slate-900 transition-colors">
                  <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Use Cases</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">See who uses KontentFire</div>
                </Link>
                <Link href="/pricing" className="group text-center p-4 rounded-xl hover:bg-white dark:hover:bg-slate-900 transition-colors">
                  <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Pricing</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Plans starting at $29/mo</div>
                </Link>
                <Link href="/locations" className="group text-center p-4 rounded-xl hover:bg-white dark:hover:bg-slate-900 transition-colors">
                  <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Locations</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Serving all 50 states</div>
                </Link>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4"><HelpCircle className="h-4 w-4" /><span>Feature FAQs</span></span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Common Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">{faqs.map((faq, i) => (<div key={i} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700"><h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{faq.question}</h3><p className="text-slate-600 dark:text-slate-300">{faq.answer}</p></div>))}</div>
          </section>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Try These Features?</h2>
            <p className="text-slate-300 mb-8">Start your 14-day special offer and experience the power of AI content automation.</p>
            <Link href="https://app.kontentfire.com"><Button size="lg">Sign Up Now<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
          </div>
        </div>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }) }} />
    </>
  );
}

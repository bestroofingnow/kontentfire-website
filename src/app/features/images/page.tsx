import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Breadcrumb } from '@/components/seo/breadcrumb-schema';
import { Button } from '@/components/ui/button';
import { Image as ImageIcon, CheckCircle, ArrowRight, Palette, Wand2, Layers, Sparkles, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Image Generation - Create Stunning Visuals with DALL-E & Stable Diffusion',
  description: 'Generate custom images for social media using DALL-E and Stable Diffusion. Create branded visuals, graphics, and illustrations that match your style.',
  alternates: {
    canonical: '/features/images',
  },
};

const capabilities = [
  { icon: Wand2, title: 'DALL-E Integration', description: 'Generate photorealistic images and creative visuals using OpenAI DALL-E 3, the most advanced image AI.' },
  { icon: Sparkles, title: 'Stable Diffusion', description: 'Access artistic styles and detailed illustrations with Stable Diffusion for unique branded content.' },
  { icon: Palette, title: 'Brand Consistency', description: 'Set brand colors, styles, and preferences. Every generated image aligns with your visual identity.' },
  { icon: Layers, title: 'Multiple Formats', description: 'Generate images optimized for each platform - square for Instagram, landscape for Twitter, and more.' },
];

const imageTypes = [
  'Social media graphics',
  'Blog post headers',
  'Product visuals',
  'Quote cards',
  'Infographic elements',
  'Profile banners',
  'Story backgrounds',
  'Carousel slides',
];

const faqs = [
  { question: 'Which AI models are used for image generation?', answer: 'KontentFire integrates with DALL-E 3 from OpenAI for photorealistic and creative images, and Stable Diffusion for artistic styles and detailed illustrations. You can choose which model works best for your needs.' },
  { question: 'Can I use generated images commercially?', answer: 'Yes. All images generated through KontentFire are yours to use commercially. They are created uniquely for you and do not infringe on existing copyrights.' },
  { question: 'How do I maintain brand consistency?', answer: 'Set your brand colors, preferred styles, and visual guidelines in your settings. The AI incorporates these preferences when generating images to maintain a cohesive look.' },
  { question: 'What image sizes are supported?', answer: 'Images are automatically sized for each platform: 1:1 for Instagram, 16:9 for Twitter/LinkedIn, 9:16 for Stories, and custom sizes for specific needs.' },
];

export default function ImagesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Features', href: '/features' }, { label: 'AI Images', href: '/features/images' }]} className="mb-8" />
          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <ImageIcon className="h-4 w-4" />
              <span>AI Image Generation</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Create Stunning Visuals with <span className="fire-text">AI</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Generate custom images that match your brand using DALL-E and Stable Diffusion. No design skills required.
            </p>
            <Link href="https://app.kontentfire.com">
              <Button size="lg">
                Start Creating Images <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Capabilities */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
              Professional Images in Seconds
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {capabilities.map((cap, index) => (
                <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-white mb-4">
                    <cap.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{cap.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{cap.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Image Types */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                Images You Can Create
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {imageTypes.map((type, index) => (
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
              <Link href="/features/ai-content" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">AI Content</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Generate engaging posts</div>
              </Link>
              <Link href="/features/templates" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Content Templates</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Proven content formats</div>
              </Link>
              <Link href="/features/scheduling" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Smart Scheduling</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Plan content in advance</div>
              </Link>
              <Link href="/features/analytics" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Analytics</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Track performance</div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Create Amazing Visuals?</h2>
            <p className="text-slate-300 mb-8">Generate professional images that make your content stand out.</p>
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

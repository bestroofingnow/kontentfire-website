import { Metadata } from 'next';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Pricing } from '@/components/sections/pricing';
import { Breadcrumb } from '@/components/seo/breadcrumb-schema';

export const metadata: Metadata = {
  title: 'Pricing - KontentFire Plans and Pricing',
  description: 'Choose the perfect KontentFire plan for your needs. Spark, Blaze, and Inferno plans with AI content generation, scheduling, and multi-platform publishing.',
  alternates: {
    canonical: '/pricing',
  },
};

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Breadcrumb items={[{ label: 'Pricing', href: '/pricing' }]} className="mb-4" />
        </div>
        <Pricing />
      </main>
      <Footer />
    </>
  );
}

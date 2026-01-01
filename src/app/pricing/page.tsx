import { Metadata } from 'next';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Pricing } from '@/components/sections/pricing';

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
        <Pricing />
      </main>
      <Footer />
    </>
  );
}

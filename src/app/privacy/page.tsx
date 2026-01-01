import { Metadata } from 'next';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how KontentFire collects, uses, and protects your personal information. Our commitment to your privacy and data security.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  const lastUpdated = 'January 1, 2025';

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Shield className="h-4 w-4" />
              <span>Legal</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Privacy <span className="fire-text">Policy</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Last updated: {lastUpdated}
            </p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Introduction</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                KontentFire (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered social media content automation platform.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                By using KontentFire, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Information We Collect</h2>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Account Information</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                When you create an account, we collect:
              </p>
              <ul className="list-disc list-inside text-lg text-slate-600 dark:text-slate-300 space-y-2 mb-6">
                <li>Email address</li>
                <li>Name (optional)</li>
                <li>Password (encrypted)</li>
                <li>Billing information (processed securely by Stripe)</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Social Media Connections</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                When you connect social media accounts, we use OAuth authentication provided by each platform. We do not store your social media passwords. We receive access tokens that allow us to post content on your behalf.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Usage Data</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                We automatically collect information about how you use our service, including:
              </p>
              <ul className="list-disc list-inside text-lg text-slate-600 dark:text-slate-300 space-y-2">
                <li>Content you create and schedule</li>
                <li>Features you use</li>
                <li>Time and date of your visits</li>
                <li>Device and browser information</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">How We Use Your Information</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-lg text-slate-600 dark:text-slate-300 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Generate and publish content to your connected social media accounts</li>
                <li>Process your transactions and send related information</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Analyze usage patterns to improve user experience</li>
                <li>Detect, prevent, and address technical issues</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Data Sharing</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                We do not sell, rent, or share your personal information with third parties for marketing purposes. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-lg text-slate-600 dark:text-slate-300 space-y-2">
                <li><strong>Service Providers:</strong> We work with third-party services including Stripe (payments), OpenAI, Anthropic, and Perplexity (AI content generation), and social media platforms (content publishing)</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Data Security</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                We implement industry-standard security measures to protect your data:
              </p>
              <ul className="list-disc list-inside text-lg text-slate-600 dark:text-slate-300 space-y-2">
                <li><strong>Encryption at Rest:</strong> AES-256 encryption for stored data</li>
                <li><strong>Encryption in Transit:</strong> TLS 1.3 for all data transmission</li>
                <li><strong>Secure Infrastructure:</strong> Hosted on SOC 2 compliant cloud providers</li>
                <li><strong>OAuth Authentication:</strong> We never store your social media passwords</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Your Rights</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                You have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside text-lg text-slate-600 dark:text-slate-300 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate personal data</li>
                <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
                <li><strong>Portability:</strong> Request your data in a portable format</li>
                <li><strong>Objection:</strong> Object to certain processing of your data</li>
              </ul>
              <p className="text-lg text-slate-600 dark:text-slate-300 mt-4">
                To exercise any of these rights, contact us at <a href="mailto:support@kontentfire.com" className="text-orange-600 hover:text-orange-700">support@kontentfire.com</a>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Data Retention</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                We retain your personal data for as long as your account is active or as needed to provide services. If you delete your account, we will delete your personal data within 30 days, except where we are required to retain it for legal or legitimate business purposes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Cookies</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc list-inside text-lg text-slate-600 dark:text-slate-300 space-y-2">
                <li>Keep you signed in to your account</li>
                <li>Remember your preferences</li>
                <li>Understand how you use our service</li>
                <li>Improve our platform based on usage patterns</li>
              </ul>
              <p className="text-lg text-slate-600 dark:text-slate-300 mt-4">
                You can control cookies through your browser settings. Disabling cookies may affect some functionality of our service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">GDPR Compliance</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                KontentFire is committed to GDPR compliance. If you are located in the European Economic Area (EEA), you have additional rights under the General Data Protection Regulation. We process your data based on your consent, our legitimate interests, or as necessary to provide our services. For enterprise customers, we offer Data Processing Agreements upon request.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Children&apos;s Privacy</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                KontentFire is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal data from a child under 13, we will take steps to delete that information.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Changes to This Policy</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Contact Us</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="list-none text-lg text-slate-600 dark:text-slate-300 space-y-2">
                <li><strong>Email:</strong> <a href="mailto:support@kontentfire.com" className="text-orange-600 hover:text-orange-700">support@kontentfire.com</a></li>
                <li><strong>Website:</strong> <a href="https://kontentfire.com/contact" className="text-orange-600 hover:text-orange-700">kontentfire.com/contact</a></li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

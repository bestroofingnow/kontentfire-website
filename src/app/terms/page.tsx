import { Metadata } from 'next';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the terms and conditions for using KontentFire, our AI-powered social media content automation platform.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  const lastUpdated = 'January 1, 2025';

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <FileText className="h-4 w-4" />
              <span>Legal</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Terms of <span className="fire-text">Service</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Last updated: {lastUpdated}
            </p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                By accessing or using KontentFire (&quot;the Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, you may not use the Service.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                These Terms apply to all users of the Service, including visitors, registered users, and paying subscribers.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Description of Service</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                KontentFire is an AI-powered social media content automation platform that allows users to:
              </p>
              <ul className="list-disc list-inside text-lg text-slate-600 dark:text-slate-300 space-y-2">
                <li>Generate content using artificial intelligence (GPT-4, Claude, and other AI models)</li>
                <li>Schedule and publish content to connected social media platforms</li>
                <li>Create AI-generated images for social media posts</li>
                <li>Analyze content performance and engagement metrics</li>
                <li>Manage multiple social media accounts from a single dashboard</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. User Accounts</h2>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Account Registration</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                To use certain features of the Service, you must create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Account Security</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                You are responsible for safeguarding your password and for all activities that occur under your account. You must notify us immediately of any unauthorized access or use of your account.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Account Eligibility</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                You must be at least 18 years old and capable of forming a binding contract to use the Service. By creating an account, you represent and warrant that you meet these eligibility requirements.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Acceptable Use</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                You agree not to use the Service to:
              </p>
              <ul className="list-disc list-inside text-lg text-slate-600 dark:text-slate-300 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on the intellectual property rights of others</li>
                <li>Generate or distribute spam, malware, or harmful content</li>
                <li>Harass, abuse, or harm other users or third parties</li>
                <li>Impersonate any person or entity</li>
                <li>Generate content that is illegal, defamatory, or violates platform guidelines</li>
                <li>Attempt to gain unauthorized access to the Service or its systems</li>
                <li>Use the Service to generate misleading or false information</li>
                <li>Violate the terms of service of connected social media platforms</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Intellectual Property</h2>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Your Content</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                You retain ownership of any content you create, upload, or generate using the Service. By using the Service, you grant us a limited license to store, process, and display your content as necessary to provide the Service.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">AI-Generated Content</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                Content generated by our AI tools belongs to you. You are responsible for reviewing and editing AI-generated content before publishing. You acknowledge that AI-generated content may require modifications to ensure accuracy and appropriateness.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">KontentFire Property</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                The Service, including its design, features, and functionality, is owned by KontentFire and protected by intellectual property laws. You may not copy, modify, or distribute any part of the Service without our written permission.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Payment Terms</h2>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Subscription Plans</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                KontentFire offers various subscription plans with different features and credit allocations. By subscribing, you agree to pay the applicable fees for your chosen plan.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Billing</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                Subscription fees are billed in advance on a monthly or annual basis, depending on your plan. All payments are processed securely through Stripe.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Refunds</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                If you are not satisfied with the Service, contact our support team for assistance. Refund eligibility is determined on a case-by-case basis.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. AI-Generated Content Disclaimer</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                KontentFire uses artificial intelligence to generate content suggestions. You acknowledge and agree that:
              </p>
              <ul className="list-disc list-inside text-lg text-slate-600 dark:text-slate-300 space-y-2">
                <li>AI-generated content may not always be accurate, complete, or appropriate</li>
                <li>You are solely responsible for reviewing and editing content before publishing</li>
                <li>We do not guarantee that AI-generated content will achieve specific results</li>
                <li>You should not rely on AI-generated content for legal, medical, financial, or other professional advice</li>
                <li>AI-generated images may have limitations and should be reviewed before use</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">8. Third-Party Integrations</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                The Service integrates with third-party platforms including LinkedIn, Facebook, Instagram, and Twitter. By connecting your social media accounts:
              </p>
              <ul className="list-disc list-inside text-lg text-slate-600 dark:text-slate-300 space-y-2">
                <li>You authorize us to access and post content on your behalf</li>
                <li>You agree to comply with each platform&apos;s terms of service</li>
                <li>You understand that platform policies may change and affect functionality</li>
                <li>You acknowledge that we are not responsible for actions taken by third-party platforms</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">9. Limitation of Liability</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, KONTENTFIRE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc list-inside text-lg text-slate-600 dark:text-slate-300 space-y-2">
                <li>Loss of profits, data, or business opportunities</li>
                <li>Damages resulting from AI-generated content</li>
                <li>Service interruptions or downtime</li>
                <li>Actions taken by connected social media platforms</li>
                <li>Unauthorized access to your account due to your failure to maintain security</li>
              </ul>
              <p className="text-lg text-slate-600 dark:text-slate-300 mt-4">
                Our total liability to you for any claims arising from the Service shall not exceed the amount you paid us in the twelve (12) months preceding the claim.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">10. Disclaimer of Warranties</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">11. Termination</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                We may suspend or terminate your account at any time for violation of these Terms or for any other reason at our sole discretion. You may terminate your account at any time by contacting support or through your account settings.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Upon termination, your right to use the Service will immediately cease. We may delete your account data in accordance with our Privacy Policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">12. Indemnification</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                You agree to indemnify, defend, and hold harmless KontentFire and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorneys&apos; fees) arising from your use of the Service, your violation of these Terms, or your violation of any rights of a third party.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">13. Governing Law</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any disputes arising from these Terms or the Service shall be resolved in the state or federal courts located in Delaware.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">14. Changes to Terms</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website and updating the &quot;Last updated&quot; date. Your continued use of the Service after changes become effective constitutes your acceptance of the revised Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">15. Contact Information</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                If you have any questions about these Terms of Service, please contact us:
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

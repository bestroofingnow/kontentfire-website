'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
  consent?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    consent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to the terms to submit';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // In production, this would submit to your backend/CRM
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        consent: false,
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-8 text-center border border-green-200 dark:border-green-800">
        <div className="inline-flex p-3 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-4">
          <CheckCircle className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          Thank you for contacting us. We&apos;ll get back to you within 24 hours.
        </p>
        <Button onClick={() => setSubmitStatus('idle')} variant="outline">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-100 dark:border-slate-700">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Send Us a Message</h2>

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
          <p className="text-red-600 dark:text-red-400 text-sm">
            Something went wrong. Please try again or email us directly at support@kontentfire.com
          </p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border ${errors.firstName ? 'border-red-500' : 'border-slate-200 dark:border-slate-600'} bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all`}
            placeholder="John"
          />
          {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border ${errors.lastName ? 'border-red-500' : 'border-slate-200 dark:border-slate-600'} bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all`}
            placeholder="Doe"
          />
          {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-600'} bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all`}
            placeholder="john@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-slate-200 dark:border-slate-600'} bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all`}
            placeholder="(555) 123-4567"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
          Company <span className="text-slate-400">(optional)</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
          placeholder="Your company name"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-600'} bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none`}
          placeholder="How can we help you?"
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>

      {/* Consent Checkbox */}
      <div className="mb-6">
        <label className={`flex items-start gap-3 cursor-pointer group ${errors.consent ? 'text-red-500' : ''}`}>
          <div className="relative flex-shrink-0 mt-0.5">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="sr-only peer"
            />
            <div className={`w-5 h-5 rounded border-2 ${errors.consent ? 'border-red-500' : 'border-slate-300 dark:border-slate-500'} peer-checked:border-orange-500 peer-checked:bg-orange-500 transition-all flex items-center justify-center`}>
              {formData.consent && (
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </div>
          <span className="text-sm text-slate-600 dark:text-slate-300 leading-snug">
            By checking this box, I agree to the{' '}
            <Link href="/terms" className="text-orange-600 hover:text-orange-700 underline">Terms of Service</Link>
            {' '}and{' '}
            <Link href="/privacy" className="text-orange-600 hover:text-orange-700 underline">Privacy Policy</Link>
            , and I consent to receive AI-generated phone calls, SMS/text messages, emails, and other automated communications from KontentFire at the phone number and email address provided. Message and data rates may apply. I understand I can opt out at any time.
            <span className="text-red-500 ml-1">*</span>
          </span>
        </label>
        {errors.consent && <p className="mt-2 text-sm text-red-500">{errors.consent}</p>}
      </div>

      <Button
        type="submit"
        className="w-full"
        size="lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>
    </form>
  );
}

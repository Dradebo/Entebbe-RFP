'use client';

import React, { useState } from 'react';
import Button from './Button';

interface ContactFormProps {
  type?: 'contact' | 'membership' | 'booking' | 'general';
  title?: string;
  description?: string;
  className?: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm({ 
  type = 'general', 
  title = 'Send us a Message',
  description = 'Fill out the form below and we\'ll get back to you as soon as possible',
  className = ''
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.firstName.trim()) {
      setErrorMessage('First name is required');
      return false;
    }
    if (!formData.lastName.trim()) {
      setErrorMessage('Last name is required');
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage('Email is required');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    if (!formData.subject.trim()) {
      setErrorMessage('Subject is required');
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Message is required');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Failed to send message. Please try again.');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSubjectOptions = () => {
    switch (type) {
      case 'membership':
        return [
          { value: 'membership-inquiry', label: 'Membership Inquiry' },
          { value: 'membership-application', label: 'Membership Application' },
          { value: 'membership-question', label: 'Membership Question' },
          { value: 'corporate-membership', label: 'Corporate Membership' },
          { value: 'junior-membership', label: 'Junior Membership' }
        ];
      case 'booking':
        return [
          { value: 'tee-time-booking', label: 'Tee Time Booking' },
          { value: 'event-booking', label: 'Event Booking' },
          { value: 'group-booking', label: 'Group Booking' },
          { value: 'tournament-inquiry', label: 'Tournament Inquiry' },
          { value: 'lesson-booking', label: 'Golf Lesson Booking' }
        ];
      default:
        return [
          { value: 'general-inquiry', label: 'General Inquiry' },
          { value: 'feedback', label: 'Feedback' },
          { value: 'suggestion', label: 'Suggestion' },
          { value: 'complaint', label: 'Complaint' },
          { value: 'other', label: 'Other' }
        ];
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-lg p-6 text-center ${className}`}>
        <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-green-900 mb-2">Message Sent Successfully!</h3>
        <p className="text-green-700 mb-4">
          Thank you for your message. We will get back to you within 24 hours.
        </p>
        <Button 
          onClick={() => setSubmitStatus('idle')}
          variant="outline"
          className="border-green-300 text-green-700 hover:bg-green-50"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className={`bg-white border border-neutral-200 rounded-lg shadow-sm ${className}`}>
      <div className="p-6 border-b border-neutral-200">
        <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>
        <p className="text-neutral-600 mt-1">{description}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4">
            <p className="text-red-700 text-sm">{errorMessage}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
              disabled={isSubmitting}
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
            disabled={isSubmitting}
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            disabled={isSubmitting}
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
            disabled={isSubmitting}
          >
            <option value="">Select a subject</option>
            {getSubjectOptions().map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Please provide details about your inquiry..."
            required
            disabled={isSubmitting}
          ></textarea>
        </div>
        
        <Button 
          type="submit" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
}
'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const schema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email:    z.string().email('Please enter a valid email address'),
  phone:    z.string().min(10, 'Phone must be at least 10 digits').max(15),
  service:  z.string().min(1, 'Please select a service'),
  message:  z.string().min(20, 'Message must be at least 20 characters'),
});

type FormData = z.infer<typeof schema>;

const services = ['Web Design & Development','App Development','CRM Development','Digital Marketing','E-Commerce Solutions','Enterprise Solutions','API Development','Other'];

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'submitting'|'success'|'error'>('idle');

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus('submitting');
    try {
      await new Promise(res => setTimeout(res, 1500));
      console.log('Form data:', data);
      setStatus('success');
      reset();
    } catch { setStatus('error'); }
  };

  return (
    <div className="rounded-3xl p-8" style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
      <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text)' }}>Send Us a Message</h3>
      <p className="text-sm mb-8" style={{ color: 'var(--muted)' }}>Fill in the details below and we'll get back to you within 24 hours.</p>

      {status === 'success' && (
        <div className="flex items-center gap-3 rounded-xl p-4 mb-6" style={{ background: 'rgba(6,214,160,0.08)', border: '1px solid rgba(6,214,160,0.2)' }}>
          <CheckCircle size={18} style={{ color: 'var(--highlight)' }} />
          <p className="text-sm" style={{ color: 'var(--highlight)' }}>Thank you! Your message has been sent. We'll be in touch soon.</p>
        </div>
      )}
      {status === 'error' && (
        <div className="flex items-center gap-3 rounded-xl p-4 mb-6" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
          <AlertCircle size={18} className="text-red-400" />
          <p className="text-sm text-red-400">Something went wrong. Please try again or email us directly.</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm mb-2" style={{ color: 'var(--text2)' }}>Full Name *</label>
            <input
              {...register('fullName')}
              placeholder="John Doe"
              className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors"
              style={{
                background: 'var(--bg3)',
                border: `1px solid ${errors.fullName ? 'rgba(239,68,68,0.5)' : 'var(--border2)'}`,
                color: 'var(--text)',
              }}
            />
            {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName.message}</p>}
          </div>
          <div>
            <label className="block text-sm mb-2" style={{ color: 'var(--text2)' }}>Phone Number *</label>
            <input
              {...register('phone')}
              placeholder="+91 98765 43210"
              type="tel"
              className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors"
              style={{
                background: 'var(--bg3)',
                border: `1px solid ${errors.phone ? 'rgba(239,68,68,0.5)' : 'var(--border2)'}`,
                color: 'var(--text)',
              }}
            />
            {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm mb-2" style={{ color: 'var(--text2)' }}>Email Address *</label>
          <input
            {...register('email')}
            placeholder="you@company.com"
            type="email"
            className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors"
            style={{
              background: 'var(--bg3)',
              border: `1px solid ${errors.email ? 'rgba(239,68,68,0.5)' : 'var(--border2)'}`,
              color: 'var(--text)',
            }}
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm mb-2" style={{ color: 'var(--text2)' }}>Service Interested In *</label>
          <select
            {...register('service')}
            className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors appearance-none cursor-pointer"
            style={{
              background: 'var(--bg3)',
              border: `1px solid ${errors.service ? 'rgba(239,68,68,0.5)' : 'var(--border2)'}`,
              color: 'var(--text)',
            }}
          >
            <option value="" style={{ background: 'var(--bg2)' }}>Select a service...</option>
            {services.map(s => (
              <option key={s} value={s} style={{ background: 'var(--bg2)' }}>{s}</option>
            ))}
          </select>
          {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>}
        </div>

        <div>
          <label className="block text-sm mb-2" style={{ color: 'var(--text2)' }}>Your Message *</label>
          <textarea
            {...register('message')}
            rows={5}
            placeholder="Tell us about your project — what you need, your timeline, budget range, etc."
            className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none"
            style={{
              background: 'var(--bg3)',
              border: `1px solid ${errors.message ? 'rgba(239,68,68,0.5)' : 'var(--border2)'}`,
              color: 'var(--text)',
            }}
          />
          {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? (
            <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
          ) : (
            <><Send size={16} /> Send Message</>
          )}
        </button>

        <p className="text-center text-xs" style={{ color: 'var(--muted)' }}>
          Or call us directly at{' '}
          <a href="tel:9910963978" className="transition-colors" style={{ color: 'var(--accent)' }}>+91 9910963978</a>
        </p>
      </form>
    </div>
  );
}

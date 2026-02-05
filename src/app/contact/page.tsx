"use client";

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Clock, 
  CheckCircle,
  MessageCircle,
  Calendar,
  Users,
  Shield,
  ArrowRight,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  ChevronRight
} from 'lucide-react';
import { contactInfo, services, faqs, teamContacts } from '@/content/contactData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    preferredContact: 'email',
    timeline: '1-month'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: '',
        preferredContact: 'email',
        timeline: '1-month'
      });
      setSubmitSuccess(false);
    }, 5000);
  };

  const SocialIcon = ({ platform }: { platform: string }) => {
    switch (platform) {
      case 'instagram': return <Instagram size={20} />;
      case 'facebook': return <Facebook size={20} />;
      case 'linkedin': return <Linkedin size={20} />;
      case 'twitter': return <Twitter size={20} />;
      default: return null;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 md:py-28">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute top-0 -right-4 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        </div>
        
        <div className="container-pad relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-lg mb-6">
              <MessageCircle size={16} />
              <span className="text-sm font-semibold">Let&apos;s Grow Together</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-fuchsia-400 to-pink-400">Grow</span> Your Business?
            </h1>
            
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
              Schedule your free 30-minute strategy session. No commitment, just actionable insights for your business.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-white">24h</div>
                <div className="text-xs text-slate-300">Response Time</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-xs text-slate-300">Happy Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-xs text-slate-300">Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-white">Free</div>
                <div className="text-xs text-slate-300">Consultation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container-pad">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-8">
                {/* Contact Details */}
                <div className="card card-pad bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white">
                  <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-white/20 backdrop-blur-xl grid place-items-center flex-shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <div className="font-semibold">Call Us</div>
                        <div className="text-lg font-bold mt-1">{contactInfo.phone}</div>
                        <div className="text-sm opacity-90 mt-1">Mon-Fri, 9AM-6PM IST</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-white/20 backdrop-blur-xl grid place-items-center flex-shrink-0">
                        <Mail size={20} />
                      </div>
                      <div>
                        <div className="font-semibold">Email Us</div>
                        <div className="text-lg font-bold mt-1">{contactInfo.email}</div>
                        <div className="text-sm opacity-90 mt-1">24-hour response</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-white/20 backdrop-blur-xl grid place-items-center flex-shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <div className="font-semibold">Our Offices</div>
                        <div className="text-lg font-bold mt-1">{contactInfo.address}</div>
                        <div className="text-sm opacity-90 mt-1">Pan-India presence</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="card card-pad">
                  <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {contactInfo.social.map((social) => (
                      <a
                        key={social.platform}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-all group"
                      >
                        <div className="h-10 w-10 rounded-lg bg-slate-100 text-slate-700 grid place-items-center group-hover:bg-brand-50 group-hover:text-brand-600">
                          <SocialIcon platform={social.icon} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold">{social.platform}</div>
                          <div className="text-xs text-slate-500">{social.handle}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Team Contacts */}
                <div className="card card-pad">
                  <h3 className="font-bold text-lg mb-4">Direct Contacts</h3>
                  <div className="space-y-4">
                    {teamContacts.map((contact) => (
                      <div key={contact.name} className="p-3 rounded-xl bg-slate-50">
                        <div className="font-semibold text-sm mb-1">{contact.name}</div>
                        <div className="text-xs text-slate-600 mb-2">{contact.description}</div>
                        <div className="text-sm">{contact.email}</div>
                        <div className="text-sm">{contact.phone}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card card-pad shadow-2xl border-t-4 border-brand-600">
                <div className="text-center mb-8">
                  <div className="badge bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0 mb-4">
                    <Send size={16} /> Get Your Free Strategy
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Schedule Free Consultation</h2>
                  <p className="text-slate-600">
                    Fill out the form below and we&apos;ll schedule your 30-minute free strategy session.
                  </p>
                </div>

                {submitSuccess ? (
                  <div className="text-center py-12">
                    <div className="h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 grid place-items-center mx-auto mb-4">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                    <p className="text-slate-600 mb-6">
                      Your message has been sent successfully. We&apos;ll contact you within 24 hours to schedule your free consultation.
                    </p>
                    <div className="inline-flex items-center gap-2 text-sm text-slate-500">
                      <Clock size={14} />
                      Redirecting back to form in 5 seconds...
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300 transition-all"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300 transition-all"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300 transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300 transition-all"
                          placeholder="Your business name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Service Interested In *
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300 bg-white"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Monthly Marketing Budget
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300 bg-white"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-20k">Under ₹20,000</option>
                          <option value="20k-50k">₹20,000 - ₹50,000</option>
                          <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                          <option value="1l-plus">₹1,00,000+</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Preferred Contact Method
                        </label>
                        <div className="flex gap-4">
                          {['email', 'phone', 'whatsapp'].map((method) => (
                            <label key={method} className="flex items-center gap-2">
                              <input
                                type="radio"
                                name="preferredContact"
                                value={method}
                                checked={formData.preferredContact === method}
                                onChange={handleChange}
                                className="text-brand-600 focus:ring-brand-300"
                              />
                              <span className="text-sm capitalize">{method}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Project Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300 bg-white"
                        >
                          <option value="immediate">Immediate Start</option>
                          <option value="1-month">Within 1 Month</option>
                          <option value="1-3-months">1-3 Months</option>
                          <option value="3-plus">3+ Months</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Tell us about your goals *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300 transition-all"
                        placeholder="What are your main business goals? What challenges are you facing? How can we help?"
                      />
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Shield size={16} />
                      <span>Your information is secure and will never be shared with third parties.</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full py-4 text-lg font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message & Schedule Free Call <ArrowRight size={20} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="container-pad">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="badge bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0 mb-4">
              Common Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">Questions</span>
            </h2>
            <p className="text-lg text-slate-600">
              Quick answers to common questions about working with us.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="card card-pad">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : (index as any))}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <h3 className="font-bold text-lg text-ink-900">{faq.question}</h3>
                    <ChevronRight 
                      size={20} 
                      className={`text-slate-400 transition-transform duration-300 ${
                        expandedFaq === index ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  
                  {expandedFaq === index && (
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <p className="text-slate-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

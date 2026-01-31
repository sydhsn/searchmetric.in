"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Calendar,
  Image as ImageIcon,
  BarChart,
  Users,
  Heart,
  TrendingUp,
  CheckCircle,
  ChevronRight,
  ArrowRight,
  Star,
  Shield,
  Clock
} from 'lucide-react';
import { socialMediaService } from '@/content/servicesData';

export default function SocialMediaManagementPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedPackage, setSelectedPackage] = useState(1);

  const FeatureIcon = ({ icon }: { icon: string }) => {
    switch(icon) {
      case 'calendar': return <Calendar size={24} />;
      case 'image': return <ImageIcon size={24} />;
      case 'message-circle': return <MessageCircle size={24} />;
      case 'bar-chart': return <BarChart size={24} />;
      default: return <CheckCircle size={24} />;
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
              <Instagram size={16} />
              <span className="text-sm font-semibold">Social Media Growth</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              {socialMediaService.heroTitle}
            </h1>
            
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
              {socialMediaService.heroDescription}
            </p>
            
            {/* Quick Results */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {socialMediaService.results.map((result, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">{result.metric}</div>
                  <div className="text-xs text-slate-300 mt-1">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0 mb-4">
                Service Overview
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">Social Presence</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                {socialMediaService.description}
              </p>
              
              <div className="space-y-4">
                {[
                  "Monthly content strategy and calendar",
                  "High-quality creative design and copywriting",
                  "Daily community engagement and management",
                  "Performance tracking and optimization"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-emerald-500" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2 bg-gradient-to-r from-brand-600 to-fuchsia-600">
                  Get Free Social Media Audit <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden relative bg-gradient-to-br from-brand-50 to-fuchsia-50">
                <Image 
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80"
                  alt="Social media management dashboard showing engagement metrics"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold text-brand-700">20-40%</div>
                <div className="text-sm text-slate-600">Monthly Growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-slate-50">
        <div className="container-pad">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="badge bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0 mb-4">
              Our Social Media Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">Social Management</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialMediaService.features.map((feature, index) => (
              <div key={index} className="card card-hover card-pad text-center">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-brand-600 to-fuchsia-600 text-white grid place-items-center mx-auto mb-4">
                  <FeatureIcon icon={feature.icon} />
                </div>
                <h3 className="text-lg font-bold text-ink-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container-pad">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="badge bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0 mb-4">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">Engaging Communities</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialMediaService.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-brand-600 to-fuchsia-600 text-white grid place-items-center text-3xl font-bold mx-auto">
                    {step.step}
                  </div>
                  {index < socialMediaService.process.length - 1 && (
                    <div className="absolute -bottom-2 -right-2 h-10 w-10 rounded-xl bg-white border border-slate-200 grid place-items-center shadow-md">
                      <ArrowRight size={20} className="text-brand-600" />
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section bg-slate-50">
        <div className="container-pad">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="badge bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0 mb-4">
              Pricing Plans
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">Growth Plan</span>
            </h2>
            <p className="text-lg text-slate-600">
              Flexible plans for businesses of all sizes. Cancel anytime.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {socialMediaService.packages.map((pkg, index) => (
              <div 
                key={index}
                className={`card card-pad relative ${pkg.popular ? 'border-2 border-brand-600' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-4">
                    <span className="text-4xl font-bold text-ink-900">{pkg.price}</span>
                    <span className="text-slate-600">{pkg.period}</span>
                  </div>
                  <div className="text-sm text-slate-600 italic">{pkg.bestFor}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-emerald-500" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => setSelectedPackage(index)}
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white hover:shadow-lg'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 text-sm text-slate-600">
            *All plans include content creation and community management. First month onboarding fee may apply.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container-pad">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="badge bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0 mb-4">
              Common Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">Questions</span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {socialMediaService.faqs.map((faq, index) => (
                <div key={index} className="card card-pad">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
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

      {/* CTA */}
      <section className="section">
        <div className="container-pad">
          <div className="card overflow-hidden">
            <div className="p-8 md:p-12 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                    Ready to transform your social media?
                  </div>
                  <p className="text-slate-300 mb-6">
                    Get your free social media audit and custom content strategy.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact" className="btn-primary !bg-white !text-slate-900 hover:!bg-slate-100">
                      Get Free Social Audit <ArrowRight size={18} />
                    </Link>
                    <a href="tel:+919876543210" className="btn-ghost !text-white hover:!bg-white/10">
                      Call Now +91 98765 43210
                    </a>
                  </div>
                </div>
                
                <div className="rounded-2xl bg-white/10 p-6">
                  <div className="text-center">
                    <div className="text-2xl font-semibold">Free</div>
                    <div className="text-sm opacity-80">Social Media Audit</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-lg font-semibold">Competitor Analysis</div>
                      <div className="text-xs opacity-80">3 Competitors</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold">Content Strategy</div>
                      <div className="text-xs opacity-80">Custom Plan</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

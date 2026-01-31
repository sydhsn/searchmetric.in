"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Target, 
  TrendingUp, 
  CheckCircle, 
  BarChart,
  Layers,
  FormInput,
  DollarSign,
  Users,
  Clock,
  ChevronRight,
  ArrowRight,
  MessageCircle,
  Calendar,
  Shield
} from 'lucide-react';
import { leadAdsService } from '@/content/servicesData';

export default function LeadAdsPage() {
  const [expandedFaq, setExpandedFaq] = useState<null | number>(null);
  const [selectedPackage, setSelectedPackage] = useState<number>(1);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const FeatureIcon = ({ icon }: { icon: string }) => {
    switch(icon) {
      case 'form': return <FormInput size={24} />;
      case 'target': return <Target size={24} />;
      case 'layers': return <Layers size={24} />;
      case 'trending': return <TrendingUp size={24} />;
      default: return <CheckCircle size={24} />;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
              <Target size={16} />
              <span className="text-sm font-semibold">Performance Marketing</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              {leadAdsService.heroTitle}
            </h1>
            
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
              {leadAdsService.heroDescription}
            </p>
            
            {/* Quick Results */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {leadAdsService.results.map((result, index) => (
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
                Turn Ad Spend into <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">Predictable Revenue</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                {leadAdsService.description}
              </p>
              
              <div className="space-y-4">
                {[
                  "Lead form optimization for higher conversions",
                  "Multi-platform targeting (Meta + Google)",
                  "Real-time campaign optimization",
                  "Transparent reporting and ROI tracking"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-emerald-500" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Get Free Ad Audit <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden relative bg-gradient-to-br from-brand-50 to-fuchsia-50">
                <Image 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80"
                  alt="Lead ads dashboard showing performance metrics"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold text-brand-700">5-10x</div>
                <div className="text-sm text-slate-600">Average ROI</div>
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
              Our Approach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">Lead Generation</span>
            </h2>
            <p className="text-lg text-slate-600">
              End-to-end management of your lead generation campaigns.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadAdsService.features.map((feature, index) => (
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
              How We Deliver <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">Quality Leads</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadAdsService.process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-6">
                  <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-brand-600 to-fuchsia-600 text-white grid place-items-center text-3xl font-bold mx-auto">
                    {step.step}
                  </div>
                  <div className="absolute -bottom-2 -right-2 h-10 w-10 rounded-xl bg-white border border-slate-200 grid place-items-center shadow-md">
                    <ArrowRight size={20} className="text-brand-600" />
                  </div>
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
              Transparent pricing with no hidden fees. All plans include setup and optimization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {leadAdsService.packages.map((pkg, index) => (
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
            *Ad spend billed separately. All plans include a 30-day money-back guarantee.
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
              {leadAdsService.faqs.map((faq, index) => (
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
                    Ready to generate consistent leads?
                  </div>
                  <p className="text-slate-300 mb-6">
                    Schedule your free strategy call and get a custom lead generation plan.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact" className="btn-primary !bg-white !text-slate-900 hover:!bg-slate-100">
                      Book Free Strategy Call <ArrowRight size={18} />
                    </Link>
                    <a href="tel:+919876543210" className="btn-ghost !text-white hover:!bg-white/10">
                      Call Now +91 98765 43210
                    </a>
                  </div>
                </div>
                
                <div className="rounded-2xl bg-white/10 p-6">
                  <div className="text-center">
                    <div className="text-2xl font-semibold">Free</div>
                    <div className="text-sm opacity-80">Strategy Call + Audit</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-lg font-semibold">30 min</div>
                      <div className="text-xs opacity-80">Consultation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold">Ad Audit</div>
                      <div className="text-xs opacity-80">Performance Review</div>
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

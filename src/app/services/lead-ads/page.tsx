"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Target, 
  TrendingUp, 
  CheckCircle, 
  Layers,
  FormInput,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { leadAdsService } from '@/content/servicesData';
import { contact } from '@/content/siteCopy';

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
              <span className="text-sm font-semibold">Lead Generation Agency — Mira Road & Mumbai</span>
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
                Lead Ads Services in Mumbai
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Every Rupee You Spend Should{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">
                  Bring You a Real Lead
                </span>
              </h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                  Running ads without a proper lead generation strategy is one of the most common and costly mistakes local businesses make. You spend money, you get clicks, but the phone doesn&apos;t ring and the enquiries don&apos;t come. That&apos;s not a budget problem — it&apos;s a strategy problem.
                </p>
                <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                  At Searchmetric, we specialise in <strong>lead ads for local businesses in Mira Road, Mumbai, and across India</strong>. We build targeted campaigns on Instagram, Facebook, and Google that are designed with one goal in mind — getting real, qualified enquiries from people who are actively looking for your product or service right now.
                </p>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Unlike generic digital marketing agencies, we don&apos;t just set up your ads and disappear. We monitor your campaigns daily, optimise your targeting and creatives continuously, and share clear monthly reports so you always know exactly what your ad spend is delivering. Every rupee is accounted for, and every lead is tracked.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  "High-converting lead form setup & optimisation",
                  "Multi-platform targeting — Meta + Google",
                  "Daily campaign monitoring & optimisation",
                  "Clear, transparent monthly ROI reports",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-emerald-500" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Get Your Free Ad Audit <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden relative bg-gradient-to-br from-brand-50 to-fuchsia-50">
                <Image 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80"
                  alt="Lead ads performance dashboard — Searchmetric Mumbai"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold text-brand-700">5–10x</div>
                <div className="text-sm text-slate-600">Average ROI for our clients</div>
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
              How We Do It
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Everything Your Campaign{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">
                Needs to Succeed
              </span>
            </h2>
            <p className="text-lg text-slate-600">
              We handle the full cycle — strategy, creative, targeting, and optimisation — so you just focus on converting the leads we deliver.
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
              From Zero to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">
                Leads in Your Inbox
              </span>
            </h2>
            <p className="text-lg text-slate-600">
              We follow a proven 4-step process that gets your lead ad campaigns live quickly and generating results — without the back-and-forth that wastes your time.
            </p>
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

      {/* Why Searchmetric — NEW SEO DEPTH SECTION */}
      <section className="section bg-slate-50">
        <div className="container-pad">
          <div className="max-w-4xl mx-auto">
            <div className="badge bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0 mb-6">
              Why Searchmetric for Lead Ads
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Local Businesses in Mumbai Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">
                Searchmetric for Lead Generation
              </span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  There are hundreds of digital marketing agencies in Mumbai claiming to run lead ads. Most of them set up a basic campaign, charge a management fee, and leave you staring at a dashboard you don&apos;t understand. At Searchmetric, we do things differently — and our clients in Mira Road, Thane, and across Mumbai feel that difference from day one.
                </p>
                <p>
                  We start every engagement with a deep understanding of your business, your ideal customer, and your local market. Whether you run a clinic in Mira Road, a coaching institute in Thane, or an e-commerce store targeting customers across India — we build a campaign strategy that speaks directly to your audience in their language, at the right time, on the right platform.
                </p>
                <p>
                  Our <strong>Instagram lead ads and Facebook lead ads</strong> are designed to capture attention instantly and make it effortless for interested customers to reach you. We build mobile-optimised lead forms that load in seconds, pre-fill user information where possible, and ask only what&apos;s necessary — because every extra field costs you a lead.
                </p>
              </div>
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  On <strong>Google lead ads</strong>, we target high-intent search queries — people who are actively typing in phrases like &quot;best plumber near me&quot; or &quot;digital marketing course in Mumbai&quot; — so your ad appears exactly when they&apos;re ready to take action. This kind of precision targeting is what separates a 2x ROI from a 10x ROI.
                </p>
                <p>
                  We believe in complete transparency. Every month, you receive a detailed performance report in plain language — no jargon, no fluff. You&apos;ll see exactly how many leads came in, what each lead cost, which platform performed best, and what we&apos;re doing next to improve results. You&apos;re never left guessing.
                </p>
                <p>
                  And unlike many agencies that lock you into 6 or 12-month contracts, Searchmetric operates on flexible monthly plans. We earn your business every month by delivering results — not by holding you hostage to a long-term commitment you regret.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container-pad">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="badge bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0 mb-4">
              Transparent Pricing
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Simple Plans.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">
                No Hidden Charges.
              </span>
            </h2>
            <p className="text-lg text-slate-600">
              All plans include full campaign setup, creative design, and ongoing optimisation. No surprises — ever.
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
            * Ad spend is billed separately to the platform. All plans include a 30-day satisfaction guarantee.
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
              Honest Answers to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">
                Your Questions
              </span>
            </h2>
            <p className="text-lg text-slate-600">
              No jargon, no vague promises. Just straight, honest answers about how lead generation ads work for Indian businesses.
            </p>
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
                    Ready to Turn Your Ad Budget Into Real Leads?
                  </div>
                  <p className="text-slate-300 mb-6">
                    Book a free 30-minute strategy call with our lead generation team. We&apos;ll review your current ads, identify exactly what&apos;s wasting your budget, and show you a clear plan to fix it — completely free, no obligation.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact" className="btn-primary !bg-white !text-slate-900 hover:!bg-slate-100">
                      Book Free Strategy Call <ArrowRight size={18} />
                    </Link>
                    <a href={contact.phoneHref} className="btn-ghost !text-white hover:!bg-white/10">
                      Call Now {contact.phone}
                    </a>
                  </div>
                </div>
                
                <div className="rounded-2xl bg-white/10 p-6">
                  <div className="text-center">
                    <div className="text-2xl font-semibold">Free</div>
                    <div className="text-sm opacity-80">Strategy Call + Ad Audit</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-lg font-semibold">30 min</div>
                      <div className="text-xs opacity-80">No-obligation consultation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold">Ad Audit</div>
                      <div className="text-xs opacity-80">Full performance review</div>
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
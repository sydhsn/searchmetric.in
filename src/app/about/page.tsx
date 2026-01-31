"use client";

import React from 'react';
import Image from 'next/image';
import { 
  Target, 
  Users, 
  Award, 
  TrendingUp, 
  Heart, 
  Globe, 
  Shield, 
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  Zap
} from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: <Target size={24} />,
      title: "Results-Driven",
      description: "We focus on measurable outcomes that directly impact your business growth."
    },
    {
      icon: <Shield size={24} />,
      title: "Transparency",
      description: "Clear reporting and honest communication about what's working and what's not."
    },
    {
      icon: <Heart size={24} />,
      title: "Client-Centric",
      description: "Your success is our success. We treat your business like our own."
    },
    {
      icon: <Zap size={24} />,
      title: "Agile Approach",
      description: "Quick adaptation to algorithm changes and market trends to keep you ahead."
    }
  ];

  const team = [
    {
      name: "Rahul Verma",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      description: "12+ years in digital marketing, Google & Meta certified expert.",
      specialties: ["SEO Strategy", "Business Growth", "Team Leadership"]
    },
    {
      name: "Priya Sharma",
      role: "Head of Social Media",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w-400&q=80",
      description: "Expert in Instagram & Facebook marketing with 8+ years experience.",
      specialties: ["Content Strategy", "Community Management", "Ad Campaigns"]
    },
    {
      name: "Amit Patel",
      role: "SEO Director",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005-128?w=400&q=80",
      description: "Specialized in local SEO and Google My Business optimization.",
      specialties: ["Local SEO", "Technical SEO", "Analytics"]
    },
    {
      name: "Neha Kapoor",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
      description: "Brand storytelling and visual content expert.",
      specialties: ["Content Creation", "Brand Design", "Video Strategy"]
    }
  ];

  const milestones = [
    { year: "2018", event: "Founded with 3 team members", clients: "5" },
    { year: "2019", event: "Expanded to full-service agency", clients: "50+" },
    { year: "2020", event: "Launched Local SEO specialty", clients: "150+" },
    { year: "2021", event: "Opened Bangalore office", clients: "300+" },
    { year: "2022", event: "Google Partner certification", clients: "450+" },
    { year: "2023", event: "500+ clients milestone", clients: "500+" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 md:py-28">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute top-0 -right-4 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-lg mb-6">
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-amber-400 text-amber-400" />)}
              </div>
              <span className="text-sm font-semibold">Trusted by 500+ Indian Businesses</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-fuchsia-400 to-pink-400">SearchMetric</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              We&apos;re not just another digital marketing agency. We&apos;re growth partners for ambitious Indian businesses who want real results, not just vanity metrics.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 text-center">
                <div className="text-2xl font-bold text-white">2018</div>
                <div className="text-sm text-slate-300">Founded</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-slate-300">Happy Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 text-center">
                <div className="text-2xl font-bold text-white">4.9★</div>
                <div className="text-sm text-slate-300">Average Rating</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 text-center">
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-sm text-slate-300">Retention Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0 mb-4">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                From startup to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">trusted partner</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Founded in 2018 by Rahul Verma, SearchMetric started as a small team of three passionate digital marketers. We noticed a gap in the market: most agencies used complex jargon that confused business owners, especially in the Indian SME sector.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Our mission was simple: make digital marketing easy to understand and focused on real business outcomes—more calls, more messages, more sales. Today, we&apos;ve grown into a 25+ team of certified experts, but we&apos;ve kept that startup mentality: agile, client-focused, and obsessed with results.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-soft border border-slate-200">
                  <div className="h-12 w-12 rounded-xl bg-brand-50 text-brand-700 grid place-items-center mb-4">
                    <Target size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Our Mission</h3>
                  <p className="text-slate-600 text-sm">Simplify digital marketing for Indian businesses and deliver measurable growth.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-soft border border-slate-200">
                  <div className="h-12 w-12 rounded-xl bg-fuchsia-50 text-fuchsia-700 grid place-items-center mb-4">
                    <Globe size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Our Vision</h3>
                  <p className="text-slate-600 text-sm">Be the most trusted growth partner for 10,000+ Indian businesses by 2030.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden relative">
                <Image 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                  alt="SearchMetric team collaborating in modern office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold text-brand-700">25+</div>
                <div className="text-sm text-slate-600">Expert Team Members</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold">6+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="badge bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0 mb-4">
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The principles that <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">guide us</span>
            </h2>
            <p className="text-lg text-slate-600">
              Our values shape every decision, campaign, and client relationship.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card card-hover card-pad text-center">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-brand-600 to-fuchsia-600 text-white grid place-items-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-ink-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="badge bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0 mb-4">
              Meet Our Leaders
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The minds behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">your growth</span>
            </h2>
            <p className="text-lg text-slate-600">
              Certified experts with years of experience driving results for Indian businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group relative">
                <div className="card overflow-hidden border-l-4 border-brand-600">
                  <div className="aspect-square overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 relative">
                    <Image 
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6">
                    <div>
                      <h3 className="font-bold text-lg text-ink-900">{member.name}</h3>
                      <div className="text-sm text-brand-600 font-semibold mb-3">{member.role}</div>
                      <p className="text-slate-600 text-sm mb-4">{member.description}</p>
                    </div>
                    
                    <div className="border-t border-slate-100 pt-4">
                      <div className="text-xs text-slate-500 mb-2">Specialties:</div>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map((specialty, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="/careers" className="btn-primary inline-flex items-center gap-2">
              Join Our Team <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="badge bg-gradient-to-r from-brand-400 to-fuchsia-400 text-white ring-0 mb-4">
              Our Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Milestones of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-fuchsia-400">growth</span>
            </h2>
            <p className="text-lg text-slate-300">
              From humble beginnings to trusted partner for 500+ businesses.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-brand-400 via-fuchsia-400 to-pink-400 hidden md:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 h-6 w-6 rounded-full bg-gradient-to-r from-brand-600 to-fuchsia-600 border-4 border-slate-900 z-10" />
                  
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="card card-pad bg-gradient-to-r from-slate-800 to-slate-700 border-0">
                      <div className="text-2xl font-bold text-brand-300 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-3 text-white">{milestone.event}</h3>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sm">
                        <Users size={14} />
                        {milestone.clients} Clients
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-white via-brand-50/20 to-fuchsia-50/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="badge bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0 mb-4">
              Why SearchMetric?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What makes us <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">different</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                {[
                  {
                    icon: <MessageCircle size={20} className="text-brand-600" />,
                    title: "No Jargon Policy",
                    description: "We explain everything in simple terms. You'll always understand what we're doing and why."
                  },
                  {
                    icon: <Clock size={20} className="text-fuchsia-600" />,
                    title: "Quick Start",
                    description: "Most clients see first results within 30 days. No waiting months for 'maybe' results."
                  },
                  {
                    icon: <MapPin size={20} className="text-emerald-600" />,
                    title: "India-First Focus",
                    description: "Strategies specifically designed for Indian audience behavior and market trends."
                  },
                  {
                    icon: <TrendingUp size={20} className="text-amber-600" />,
                    title: "Growth-Focused",
                    description: "Every campaign is designed to directly increase your leads, calls, and revenue."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-white ring-1 ring-slate-200 grid place-items-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-ink-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="card card-pad bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white">
              <div className="text-center mb-8">
                <div className="h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-xl grid place-items-center mx-auto mb-4">
                  <Award size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Certifications</h3>
                <p className="text-white/90 mb-6">Industry-recognized expertise you can trust.</p>
              </div>
              
              <div className="space-y-4">
                {[
                  "Google Ads Certified",
                  "Google Analytics Certified",
                  "Meta Blueprint Certified",
                  "HubSpot Certified",
                  "Local SEO Specialist Certification"
                ].map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                    <CheckCircle size={20} className="text-emerald-300" />
                    <span className="font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="card overflow-hidden">
            <div className="p-8 md:p-12 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                    Ready to grow with us?
                  </div>
                  <p className="text-slate-300 mb-6">
                    Let&apos;s discuss how we can help your business achieve its digital marketing goals.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="/contact" className="btn-primary !bg-white !text-slate-900 hover:!bg-slate-100">
                      Schedule Free Consultation <ArrowRight size={18} />
                    </a>
                    <a href="/case-studies" className="btn-ghost !text-white hover:!bg-white/10">
                      View Case Studies
                    </a>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-2xl p-6 text-center">
                    <Phone size={24} className="mx-auto mb-3 text-brand-400" />
                    <div className="text-sm opacity-80">Call Us</div>
                    <div className="font-semibold mt-1">+91 98765 43210</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-6 text-center">
                    <Mail size={24} className="mx-auto mb-3 text-brand-400" />
                    <div className="text-sm opacity-80">Email Us</div>
                    <div className="font-semibold mt-1">hello@searchmetric.in</div>
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

// Reuse styles from your homepage
const badge = "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 font-semibold text-xs";
const card = "bg-white rounded-2xl shadow-soft border border-slate-200 transition-all duration-300";
const cardHover = "hover:shadow-xl hover:-translate-y-1";
const cardPad = "p-6";
const btnPrimary = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white hover:shadow-lg hover:shadow-brand-600/25 transition-all";
const btnGhost = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-transparent border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all";
const shadowSoft = { boxShadow: "0 10px 40px rgba(0, 0, 0, 0.05)" };
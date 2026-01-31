"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Filter, 
  MapPin, 
  TrendingUp, 
  Target, 
  ArrowRight,
  ChevronRight,
  Award,
  CheckCircle,
  Building,
  Clock
} from 'lucide-react';
import { caseStudies, industries, cities, services } from '@/content/caseStudiesData';

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All Industries');
  const [selectedCity, setSelectedCity] = useState<string>('All Cities');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter case studies
  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'All Industries' || study.industry === selectedIndustry;
    const matchesCity = selectedCity === 'All Cities' || study.city === selectedCity;
    const matchesSearch = searchQuery === '' || 
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.industry.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesServices = selectedServices.length === 0 || 
      selectedServices.every(service => study.services.includes(service));
    
    return matchesIndustry && matchesCity && matchesSearch && matchesServices;
  });

  const featuredCaseStudies = caseStudies.filter(study => study.featured);

  const handleServiceToggle = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const clearFilters = () => {
    setSelectedIndustry('All Industries');
    setSelectedCity('All Cities');
    setSelectedServices([]);
    setSearchQuery('');
  };

  // Get success metrics
  const successMetrics = [
    { label: "Average Revenue Growth", value: "250%", icon: <TrendingUp size={20} />, color: "from-emerald-600 to-teal-600" },
    { label: "Client Satisfaction", value: "98%", icon: <Award size={20} />, color: "from-amber-600 to-orange-600" },
    { label: "Projects Completed", value: "150+", icon: <CheckCircle size={20} />, color: "from-brand-600 to-purple-600" },
    { label: "Industries Served", value: "12+", icon: <Building size={20} />, color: "from-fuchsia-600 to-pink-600" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 md:py-28">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute top-0 -right-4 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        </div>
        
        <div className="container-pad relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-lg mb-6">
              <Award size={16} />
              <span className="text-sm font-semibold">Proven Results</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-fuchsia-400 to-pink-400">Success Stories</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
              Discover how we&apos;ve helped businesses across India achieve remarkable growth through strategic digital marketing.
            </p>
            
            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {successMetrics.map((metric, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center">
                  <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${metric.color} text-white grid place-items-center mx-auto mb-2`}>
                    {metric.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">{metric.value}</div>
                  <div className="text-xs text-slate-300 mt-1">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      {featuredCaseStudies.length > 0 && (
        <section className="section bg-gradient-to-b from-white via-slate-50 to-white">
          <div className="container-pad">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="badge bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0">
                  <TrendingUp size={16} /> Featured Success Stories
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mt-2">Highlighted Transformations</h2>
              </div>
              <Link href="/contact" className="btn-secondary inline-flex items-center gap-2">
                Get Your Case Study <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredCaseStudies.map((study) => (
                <div key={study.id} className="group relative">
                  <div className="card overflow-hidden border-t-4 border-brand-600 h-full">
                    <div className="h-48 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 relative">
                      <Image 
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/90 text-slate-900">
                          {study.industry}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <MapPin size={14} />
                          {study.city}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Clock size={14} />
                          {study.duration}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-ink-900 mb-3 group-hover:text-brand-600 transition-colors">
                        {study.title}
                      </h3>
                      
                      <p className="text-slate-600 mb-4 line-clamp-2">
                        {study.desc}
                      </p>
                      
                      {/* Key Results */}
                      <div className="mb-6">
                        <div className="text-sm font-semibold text-slate-700 mb-2">Key Results:</div>
                        <ul className="space-y-1">
                          {study.results.slice(0, 2).map((result, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                              <CheckCircle size={14} className="text-emerald-500" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <div>
                          <div className="text-xs text-slate-500">Client</div>
                          <div className="text-sm font-semibold">{study.client.name}</div>
                        </div>
                        <Link 
                          href={`/case-studies/${study.slug}`}
                          className="text-brand-600 hover:text-brand-700 font-semibold inline-flex items-center gap-1"
                        >
                          View Details <ChevronRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filter & Grid Section */}
      <section className="section bg-slate-50">
        <div className="container-pad">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-8">
                {/* Search */}
                <div className="card card-pad">
                  <h3 className="font-bold text-lg mb-4">Search Case Studies</h3>
                  <input
                    type="text"
                    placeholder="Search by industry, city, or results..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-300"
                  />
                </div>

                {/* Industry Filter */}
                <div className="card card-pad">
                  <div className="flex items-center gap-2 mb-4">
                    <Building size={18} className="text-brand-600" />
                    <h3 className="font-bold text-lg">Industry</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {industries.map((industry) => (
                      <button
                        key={industry.slug}
                        onClick={() => setSelectedIndustry(industry.name)}
                        className={`flex items-center justify-between w-full p-3 rounded-xl transition-all ${
                          selectedIndustry === industry.name 
                            ? 'bg-brand-50 text-brand-700 font-semibold' 
                            : 'hover:bg-slate-100'
                        }`}
                        disabled={industry.count === 0}
                      >
                        <span>{industry.name}</span>
                        <span className={`text-sm px-2 py-1 rounded-full ${
                          selectedIndustry === industry.name 
                            ? 'bg-brand-100 text-brand-700' 
                            : industry.count === 0
                              ? 'bg-slate-100 text-slate-400'
                              : 'bg-slate-100 text-slate-600'
                        }`}>
                          {industry.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* City Filter */}
                <div className="card card-pad">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin size={18} className="text-brand-600" />
                    <h3 className="font-bold text-lg">City</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {cities.map((city) => (
                      <button
                        key={city}
                        onClick={() => setSelectedCity(city)}
                        className={`w-full p-3 rounded-xl text-left transition-all ${
                          selectedCity === city 
                            ? 'bg-brand-50 text-brand-700 font-semibold' 
                            : 'hover:bg-slate-100'
                        }`}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Services Filter */}
                <div className="card card-pad">
                  <div className="flex items-center gap-2 mb-4">
                    <Target size={18} className="text-brand-600" />
                    <h3 className="font-bold text-lg">Services Used</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {services.map((service) => (
                      <button
                        key={service}
                        onClick={() => handleServiceToggle(service)}
                        className={`flex items-center gap-2 w-full p-3 rounded-xl text-left transition-all ${
                          selectedServices.includes(service)
                            ? 'bg-brand-50 text-brand-700 font-semibold' 
                            : 'hover:bg-slate-100'
                        }`}
                      >
                        <CheckCircle 
                          size={16} 
                          className={selectedServices.includes(service) ? 'text-brand-600' : 'text-slate-400'} 
                        />
                        <span>{service}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                {(selectedIndustry !== 'All Industries' || selectedCity !== 'All Cities' || selectedServices.length > 0 || searchQuery) && (
                  <button
                    onClick={clearFilters}
                    className="w-full btn-secondary"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            </div>

            {/* Case Studies Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-ink-900">
                    {selectedIndustry !== 'All Industries' ? selectedIndustry : 'All'} Case Studies
                  </h2>
                  <p className="text-slate-600">
                    Showing {filteredCaseStudies.length} of {caseStudies.length} success stories
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-sm text-slate-500 hidden md:block">
                    Filtered by: 
                    {selectedIndustry !== 'All Industries' && ` ${selectedIndustry}`}
                    {selectedCity !== 'All Cities' && ` • ${selectedCity}`}
                    {selectedServices.length > 0 && ` • ${selectedServices.length} services`}
                  </div>
                </div>
              </div>

              {filteredCaseStudies.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredCaseStudies.map((study) => (
                    <div key={study.id} className="group">
                      <div className="card card-hover card-pad h-full flex flex-col">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-semibold px-2 py-1 rounded bg-brand-50 text-brand-700">
                                {study.industry}
                              </span>
                              <span className="flex items-center gap-1 text-xs text-slate-500">
                                <MapPin size={12} />
                                {study.city}
                              </span>
                            </div>
                            <span className="text-xs text-slate-500">{study.duration}</span>
                          </div>
                          
                          <h3 className="text-lg font-bold text-ink-900 mb-3 group-hover:text-brand-600 transition-colors">
                            {study.title}
                          </h3>
                          
                          <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                            {study.desc}
                          </p>
                          
                          {/* Services */}
                          <div className="mb-4">
                            <div className="text-xs text-slate-500 mb-2">Services Used:</div>
                            <div className="flex flex-wrap gap-1">
                              {study.services.slice(0, 3).map((service) => (
                                <span 
                                  key={service} 
                                  className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600"
                                >
                                  {service}
                                </span>
                              ))}
                              {study.services.length > 3 && (
                                <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600">
                                  +{study.services.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>
                          
                          {/* Key Result */}
                          <div className="bg-gradient-to-r from-brand-50 to-fuchsia-50 rounded-xl p-4 mb-4">
                            <div className="text-sm font-semibold text-brand-700 mb-1">Key Achievement:</div>
                            <div className="text-sm text-slate-700">{study.results[0]}</div>
                          </div>
                        </div>
                        
                        <div className="border-t border-slate-100 pt-4 mt-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-xs text-slate-500">Client Type</div>
                              <div className="text-sm font-semibold">{study.client.type}</div>
                            </div>
                            
                            <Link 
                              href={`/case-studies/${study.slug}`}
                              className="text-brand-600 hover:text-brand-700 font-semibold text-sm inline-flex items-center gap-1"
                            >
                              Full Case Study <ChevronRight size={14} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="h-16 w-16 rounded-full bg-slate-100 grid place-items-center mx-auto mb-4">
                    <Filter size={24} className="text-slate-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-700 mb-2">No case studies found</h3>
                  <p className="text-slate-600 mb-6 max-w-md mx-auto">
                    Try adjusting your filters or search terms. We have success stories across multiple industries and cities.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="btn-primary"
                  >
                    View All Case Studies
                  </button>
                </div>
              )}

              {/* Industry Success Stats */}
              {selectedIndustry === 'All Industries' && (
                <div className="mt-12 card card-pad bg-gradient-to-r from-slate-800 to-slate-900 text-white">
                  <h3 className="text-xl font-bold mb-6 text-center">Success Across Industries</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {industries.filter(i => i.count > 0).map((industry) => (
                      <div key={industry.slug} className="text-center">
                        <div className="text-2xl font-bold">{industry.count}</div>
                        <div className="text-sm text-slate-300">{industry.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container-pad">
          <div className="card overflow-hidden">
            <div className="p-8 md:p-12 bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                    Ready to be our next success story?
                  </div>
                  <p className="text-white/90 mb-6">
                    Let&apos;s discuss how we can achieve similar results for your business.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact" className="btn-primary !bg-white !text-slate-900 hover:!bg-slate-100">
                      Get Free Strategy Session <ArrowRight size={18} />
                    </Link>
                    <a href="tel:+919876543210" className="btn-ghost !text-white hover:!bg-white/10">
                      Call Now +91 98765 43210
                    </a>
                  </div>
                </div>
                
                <div className="rounded-2xl bg-white/10 p-6">
                  <div className="text-center">
                    <div className="text-2xl font-semibold">Free</div>
                    <div className="text-sm opacity-80">Strategy Session</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-lg font-semibold">30 min</div>
                      <div className="text-xs opacity-80">Consultation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold">Custom Plan</div>
                      <div className="text-xs opacity-80">Tailored Strategy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container-pad">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="badge bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0 mb-4">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How We Deliver <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">Results</span>
            </h2>
            <p className="text-lg text-slate-600">
              A proven 5-step framework that drives success for every client.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "1", title: "Discovery", desc: "Deep dive into your business goals and challenges" },
              { step: "2", title: "Strategy", desc: "Customized digital marketing strategy creation" },
              { step: "3", title: "Execution", desc: "Expert implementation of all marketing activities" },
              { step: "4", title: "Optimization", desc: "Continuous testing and improvement for better results" },
              { step: "5", title: "Reporting", desc: "Transparent monthly reports with clear insights" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-brand-600 to-fuchsia-600 text-white grid place-items-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

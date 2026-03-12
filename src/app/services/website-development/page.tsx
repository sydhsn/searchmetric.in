import React from "react";
import Link from "next/link";
import {
  Smartphone, Search, Target, Edit2, CheckCircle, ChevronRight,
  ArrowRight, Star, Clock, Code, Zap, IndianRupee, TrendingUp,
  Globe, Shield, Lightbulb,
  Phone
} from "lucide-react";
import { websiteDevelopmentService } from "@/content/servicesData";
import { contact } from "@/content/siteCopy";
import WebsiteDevFAQ from "@/components/WebsiteDevFAQ";

function FeatureIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "smartphone": return <Smartphone size={24} />;
    case "search": return <Search size={24} />;
    case "target": return <Target size={24} />;
    case "edit-2": return <Edit2 size={24} />;
    case "globe": return <Globe size={24} />;
    case "code": return <Code size={24} />;
    default: return <CheckCircle size={24} />;
  }
}

const testimonials = [
  {
    name: "Rajesh Kumar",
    business: "Medical Clinic Owner, Katihar",
    quote: "Our old website was from 2015. Searchmetric built us a modern site in 3 weeks. Patients now find us easily on Google Maps, and we've seen 40% more new patient enquiries.",
    stars: 5,
  },
  {
    name: "Priya Sharma",
    business: "E-Commerce Shop Owner, Purnea",
    quote: "Finally selling online! The website works perfectly on phones, loads super fast, and I can update product photos myself without calling a developer.",
    stars: 5,
  },
  {
    name: "Vikram Singh",
    business: "Service-Based Business, Baisi",
    quote: "Professional looking website at a fraction of what we were quoted by Delhi agencies. They understood our local market and the website brings in real customers.",
    stars: 5,
  },
];

const businessOutcomes = [
  { emoji: "🏥", sector: "Medical clinics & practitioners", result: "40–60% more patient enquiries" },
  { emoji: "🛍️", sector: "E-commerce & retail shops", result: "20–40% increase in online sales" },
  { emoji: "💇", sector: "Service businesses (salons, gyms)", result: "50–100 new customer enquiries/month" },
  { emoji: "🏢", sector: "Local businesses & traders", result: "Higher Google rankings, more walk-ins" },
];

export default function WebsiteDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ========================================
          HERO SECTION
          ======================================== */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {websiteDevelopmentService.heroTitle}
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
              {websiteDevelopmentService.heroDescription}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href={`tel:${contact.phone}`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition"
              >
                <Phone size={20} />
                Call Now
              </Link>
              <Link
                href={`mailto:${contact.email}`}
                className="border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-lg font-semibold transition"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          FEATURES SECTION
          ======================================== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What Makes Our Websites Different</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {websiteDevelopmentService.features.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100 text-blue-600">
                      <FeatureIcon icon={feature.icon} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          PROCESS SECTION
          ======================================== */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How We Build Your Website</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {websiteDevelopmentService.process.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-xl p-8 shadow-lg h-full border-l-4 border-blue-600">
                  <div className="text-4xl font-bold text-blue-600 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ChevronRight className="text-blue-600" size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          RESULTS SECTION
          ======================================== */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Real Results Our Clients Achieve</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {websiteDevelopmentService.results.map((result, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold mb-3">{result.metric}</div>
                <div className="text-lg opacity-90">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          TESTIMONIALS SECTION
          ======================================== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">{testimonial.quote}</p>
                <div className="border-t pt-4">
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          PACKAGES SECTION
          ======================================== */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Choose Your Package</h2>
          <p className="text-center text-slate-600 mb-16 text-lg">All prices are one-time with free support included</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {websiteDevelopmentService.packages.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`rounded-2xl overflow-hidden shadow-lg transition transform hover:scale-105 ${
                  pkg.popular ? "ring-2 ring-blue-600 lg:scale-105" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="bg-blue-600 text-white py-2 text-center font-bold">MOST POPULAR ⭐</div>
                )}
                
                <div className="bg-white p-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-blue-600">{pkg.price}</span>
                    <span className="text-slate-600 ml-2">{pkg.period}</span>
                  </div>
                  <p className="text-slate-600 mb-8 text-sm">{pkg.bestFor}</p>
                  
                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, fidx) => (
                      <div key={fidx} className="flex gap-3">
                        <CheckCircle size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href={`tel:${contact.phone}`}
                    className={`block text-center py-3 rounded-lg font-bold transition w-full ${
                      pkg.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          BUSINESS OUTCOMES SECTION
          ======================================== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Perfect For All Business Types</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessOutcomes.map((outcome, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg flex gap-6">
                <div className="text-5xl flex-shrink-0">{outcome.emoji}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{outcome.sector}</h3>
                  <p className="text-slate-600">{outcome.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          FAQ SECTION
          ======================================== */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          
          <WebsiteDevFAQ faqs={websiteDevelopmentService.faqs} />
        </div>
      </section>

      {/* ========================================
          FINAL CTA SECTION
          ======================================== */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Your Professional Website?</h2>
          <p className="text-xl mb-10 opacity-90">
            Let&apos;s discuss your project and find the perfect package for your business.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href={`tel:${contact.phone}`}
              className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition"
            >
              <Phone size={20} />
              Call {contact.phone}
            </Link>
            <Link
              href={`mailto:${contact.email}`}
              className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-bold transition"
            >
              Email Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

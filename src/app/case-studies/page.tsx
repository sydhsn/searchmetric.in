import React from "react";
import Link from "next/link";

const sampleCases = [
  {
    title: "Local SEO for Delhi Clinic",
    desc: "Increased Google Maps leads by 300% in 4 months for a healthcare client.",
    industry: "Healthcare",
    city: "Delhi NCR",
    slug: "delhi-clinic-seo"
  },
  {
    title: "Instagram Growth for Mumbai Salon",
    desc: "Doubled Instagram followers and bookings for a beauty brand.",
    industry: "Beauty & Wellness",
    city: "Mumbai",
    slug: "mumbai-salon-instagram"
  },
  {
    title: "Lead Ads for Bangalore Startup",
    desc: "Generated 1200+ qualified leads in 2 months for a SaaS startup.",
    industry: "SaaS",
    city: "Bangalore",
    slug: "bangalore-saas-leads"
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="container-pad py-16 min-h-[60vh]">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-700">Case Studies</h1>
        <p className="text-lg text-slate-600 mb-10">
          Explore our digital marketing success stories and real client results across India.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sampleCases.map((c) => (
          <div key={c.slug} className="card card-hover p-6 rounded-2xl shadow-lg bg-white flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-brand-600 uppercase tracking-wide mb-2">{c.industry} • {c.city}</div>
              <h2 className="text-xl font-bold mb-2 text-ink-900">{c.title}</h2>
              <p className="text-slate-600 mb-4">{c.desc}</p>
            </div>
            <Link href="/contact" className="btn-primary w-full mt-auto">Get Similar Results</Link>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center text-slate-500">
        Want to see more? <Link href="/contact" className="text-brand-600 hover:underline">Request a custom case study</Link>
      </div>
    </main>
  );
}

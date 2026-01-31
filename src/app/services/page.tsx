import React from 'react';
import Link from 'next/link';

const services = [
  {
    name: 'Social Media Management',
    href: '/services/social-media-management',
    description: 'Grow your brand and engage your audience with expert social media management.'
  },
  {
    name: 'Local SEO & Google Map Optimization',
    href: '/services/local-seo',
    description: 'Boost your local visibility and attract nearby customers with proven local SEO strategies.'
  },
  {
    name: 'Lead Ads (Instagram, Facebook, Google)',
    href: '/services/lead-ads',
    description: 'Generate high-quality leads with targeted ad campaigns on top platforms.'
  }
];

export default function ServicesPage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>
      <div className="space-y-6">
        {services.map(service => (
          <Link key={service.name} href={service.href} className="block p-6 rounded-lg border border-gray-200 shadow-sm hover:bg-gray-50 transition">
            <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
            <p className="text-gray-600">{service.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

'use client';

import { useState, useEffect, ReactNode, FC } from 'react';
import Image from 'next/image';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  ArrowRight, 
  CheckCircle, 
  Play,
  Instagram,
  Search,
  Globe,
  TrendingUp,
  Users,
  Target,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  MapPin,
  Send,
  Star,
  MessageCircle,
  Award,
  Clock,
  Shield,
  Zap
} from 'lucide-react';

// Type Definitions
interface NavItem {
  name: string;
  href: string;
  submenu?: { name: string; href: string; }[];
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
  image: string;
}

interface Stat {
  value: string;
  label: string;
  icon: ReactNode;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

// Header Component
const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesSubmenu: { name: string; href: string; }[] = [
    { name: 'Social Media Management', href: '/services/social-media' },
    { name: 'Local SEO & Google Maps', href: '/services/local-seo' },
    { name: 'Lead Ads (Meta & Google)', href: '/services/lead-ads' },
  ];

  const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      submenu: servicesSubmenu
    },
    { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone size={14} className="mr-2" />
              <span>+91 98765 43210</span>
            </div>
            <div className="hidden md:flex items-center">
              <Mail size={14} className="mr-2" />
              <span>info@techmindsolutions.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden md:inline">📍 Delhi, Mumbai, Bangalore</span>
            <button className="bg-white text-primary px-3 py-1 rounded text-xs font-semibold hover:bg-gray-100 transition-colors">
              Free Audit
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary to-secondary w-10 h-10 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">TM</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-dark">TechMinds</h1>
              <p className="text-xs text-gray-600">Digital Solutions</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a 
                  href={item.href} 
                  className="flex items-center text-dark hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.name}
                  {item.submenu && <ChevronDown size={16} className="ml-1" />}
                </a>
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 z-50">
                    {item.submenu.map((sub) => (
                      <a 
                        key={sub.name} 
                        href={sub.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200 border-b border-gray-100 last:border-0"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="btn-primary">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-dark"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-lg shadow-lg p-4 border">
            {navItems.map((item) => (
              <div key={item.name} className="py-2 border-b">
                <a 
                  href={item.href} 
                  className="block text-dark hover:text-primary font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
                {item.submenu && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.submenu.map((sub) => (
                      <a 
                        key={sub.name} 
                        href={sub.href}
                        className="block text-sm text-gray-600 hover:text-primary py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="btn-primary w-full mt-4">
              Get Quote
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

// Hero Component
const Hero: FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden pattern-grid">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-blue-100 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <CheckCircle size={16} className="mr-2" />
              Trusted by 500+ Indian Businesses
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-dark mb-6 leading-tight">
              Transform Your{' '}
              <span className="text-gradient">
                Digital Presence
              </span>{' '}
              in India
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              TechMinds Solutions delivers cutting-edge digital marketing strategies tailored for the Indian market. 
              Boost your local visibility, engagement, and conversions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="btn-gradient btn-glow flex items-center justify-center">
                Start Free Trial
                <ArrowRight size={20} className="ml-2" />
              </button>
              <button className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center">
                <Play size={20} className="mr-2" />
                Watch Demo
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex -space-x-4">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"></div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-white text-xs font-bold">
                  500+
                </div>
              </div>
              <div>
                <p className="font-semibold">500+ Happy Clients</p>
                <p className="text-sm text-gray-600">Across India</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-2 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-xl overflow-hidden">
                <div className="h-96 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">Dashboard Preview</span>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">98%</p>
                  <p className="text-xs text-gray-600">Success Rate</p>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <p className="text-2xl font-bold text-secondary">4.9/5</p>
                  <p className="text-xs text-gray-600">Client Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Component
const Services: FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: 'Social Media Management',
      description: 'We plan, create and post content. We reply to comments and messages. Simple, consistent and friendly.',
      icon: <Instagram className="text-pink-600" size={32} />,
      features: [
        'Monthly Content Calendar',
        'Daily Engagement',
        'Ad Campaign Setup',
        'Simple Reports'
      ],
      image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=800'
    },
    {
      id: 2,
      title: 'Local SEO & Maps',
      description: 'We help you show up on Google near your area. People nearby can find and call you easily.',
      icon: <Search className="text-green-600" size={32} />,
      features: [
        'Google Business Profile setup',
        'Map ranking improvement',
        'Local reviews guidance',
        'NAP & citations'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800'
    },
    {
      id: 3,
      title: 'Lead Ads (Meta & Google)',
      description: 'We run simple ads on Instagram, Facebook and Google to get real leads: calls, forms and messages.',
      icon: <Target className="text-blue-600" size={32} />,
      features: [
        'Lead forms & tracking',
        'Budget-friendly plans',
        'Clear targeting',
        'Weekly lead reports'
      ],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800'
    }
  ];

  const stats: Stat[] = [
    { value: '300+', label: 'Websites Developed', icon: <Globe size={24} /> },
    { value: '95%', label: 'Client Retention', icon: <Users size={24} /> },
    { value: '50M+', label: 'Impressions Managed', icon: <TrendingUp size={24} /> },
    { value: '100%', label: 'SEO Success Rate', icon: <Target size={24} /> },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center bg-blue-100 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Zap size={16} className="mr-2" /> Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
            Digital Marketing Solutions for{' '}
            <span className="text-primary">Indian Businesses</span>
          </h2>
          <p className="text-gray-600">
            We understand the Indian market dynamics and provide tailored solutions 
            to help your business grow in the digital space.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="card-lift overflow-hidden group border-gradient hover-bright"
            >
              <div className="h-48 bg-gradient-to-r from-blue-100 to-purple-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute top-4 left-4">
                  {service.icon}
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="text-primary font-semibold hover:text-blue-700 flex items-center group">
                  Learn More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white animate-pulse-soft">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="icon-badge">
                    {stat.icon}
                  </div>
                </div>
                <p className="text-3xl font-bold mb-2">{stat.value}</p>
                <p className="text-sm opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Benefits for User Component
const BenefitsForUser: FC = () => {
  const benefits = [
    { icon: <Phone size={22} className="text-primary" />, title: 'More Calls', desc: 'Get more phone calls from nearby people.' },
    { icon: <MessageCircle size={22} className="text-primary" />, title: 'More Messages', desc: 'More chats and DMs from real users.' },
    { icon: <MapPin size={22} className="text-primary" />, title: 'Better Local Rank', desc: 'Show up higher on Google Maps.' },
    { icon: <Users size={22} className="text-primary" />, title: 'Right Audience', desc: 'Reach the people who want your service.' },
    { icon: <TrendingUp size={22} className="text-primary" />, title: 'Clear Growth', desc: 'Simple, easy-to-read monthly growth reports.' },
    { icon: <Shield size={22} className="text-primary" />, title: 'Safe & Secure', desc: 'Your data stays protected and private.' },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center bg-blue-100 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <TrendingUp size={16} className="mr-2" /> Benefits for You
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Simple wins for your business</h2>
          <p className="text-gray-600">We keep things easy. No heavy words. Just clear results.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm p-6 border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">{b.icon}</div>
              <h3 className="text-lg font-semibold text-dark mb-1">{b.title}</h3>
              <p className="text-gray-600 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Introductions Component (SEO, SME, Social Media)
const Introductions: FC = () => {
  const introCards = [
    {
      title: 'What is SEO?',
      icon: <Search size={24} className="text-primary" />,
      desc: 'SEO helps your business show up on Google. When people search near you, they can find you easily.'
    },
    {
      title: 'What is SME?',
      icon: <Users size={24} className="text-primary" />,
      desc: 'SME means small and medium business. We make marketing simple for small teams and owners.'
    },
    {
      title: 'Social Media Basics',
      icon: <Instagram size={24} className="text-primary" />,
      desc: 'We create easy posts, stories and ads. People see you often and remember your brand.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center bg-blue-100 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Search size={16} className="mr-2" /> Simple Introductions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Understand the basics in plain words</h2>
          <p className="text-gray-600">No hard English. Just clear, helpful points for quick learning.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {introCards.map((card, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl p-6 border hover:bg-white hover:shadow-sm transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">{card.icon}</div>
              <h3 className="text-lg font-semibold text-dark mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Comparison Component
const Comparison: FC = () => {
  const rows = [
    { label: 'Clear monthly report', tm: true, others: false, diy: false },
    { label: 'Local map ranking', tm: true, others: true, diy: false },
    { label: 'Friendly simple language', tm: true, others: false, diy: false },
    { label: 'Lead form setup', tm: true, others: true, diy: false },
    { label: 'Daily social replies', tm: true, others: false, diy: false },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block bg-blue-100 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Why Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark">TechMinds vs Others</h2>
          <p className="text-gray-600 mt-3">See how we compare with a quick view.</p>
        </div>

        <div className="overflow-hidden rounded-2xl border bg-white card-lift">
          <div className="grid grid-cols-4 bg-gray-50 text-sm font-semibold text-gray-700">
            <div className="p-4">Feature</div>
            <div className="p-4">TechMinds</div>
            <div className="p-4">Other Agencies</div>
            <div className="p-4">Do-It-Yourself</div>
          </div>
          {rows.map((r, i) => (
            <div key={i} className="grid grid-cols-4 border-t">
              <div className="p-4 text-sm">{r.label}</div>
              <div className="p-4 flex items-center">{r.tm ? <CheckCircle size={18} className="text-green-600" /> : <X size={18} className="text-red-500" />}</div>
              <div className="p-4 flex items-center">{r.others ? <CheckCircle size={18} className="text-green-600" /> : <X size={18} className="text-red-500" />}</div>
              <div className="p-4 flex items-center">{r.diy ? <CheckCircle size={18} className="text-green-600" /> : <X size={18} className="text-red-500" />}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Simple Growth Graph Component
const GrowthGraph: FC = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const values = [20, 35, 50, 65, 80, 95];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block bg-blue-100 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Growth Snapshot
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark">Leads rising month by month</h2>
          <p className="text-gray-600 mt-3">A simple view of lead growth over 6 months.</p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 border card-lift border-gradient">
          <div className="grid grid-cols-6 gap-4 items-end h-48">
            {values.map((v, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-full bg-gradient-to-t from-primary to-secondary rounded-t-md" style={{ height: `${v}%` }}></div>
                <span className="mt-2 text-xs text-gray-600">{months[i]}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 text-sm text-gray-600 flex items-center justify-center">
            <TrendingUp size={18} className="text-primary mr-2" />
            Based on sample campaign data
          </div>
        </div>
      </div>
    </section>
  );
};

// Social Clients (Instagram & Facebook) Component
interface SocialClient {
  name: string;
  platform: 'Instagram' | 'Facebook';
  industry: string;
  followers: string;
  engagement: string;
}

const SocialClients: FC = () => {
  const clients: SocialClient[] = [
    { name: 'Urban Style', platform: 'Instagram', industry: 'Fashion', followers: '120k', engagement: '6.2%' },
    { name: 'Desi Delights', platform: 'Instagram', industry: 'F&B', followers: '45k', engagement: '4.8%' },
    { name: 'TechGadgets India', platform: 'Instagram', industry: 'Electronics', followers: '80k', engagement: '5.1%' },
    { name: 'City Clinic', platform: 'Facebook', industry: 'Healthcare', followers: '30k', engagement: '3.9%' },
    { name: 'Bright Tutors', platform: 'Facebook', industry: 'Education', followers: '18k', engagement: '4.2%' },
    { name: 'FreshMart', platform: 'Facebook', industry: 'Grocery', followers: '28k', engagement: '3.5%' },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center bg-blue-100 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Award size={16} className="mr-2" /> Social Proof
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Beautiful client cards</h2>
          <p className="text-gray-600">Instagram and Facebook clients we manage with care.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((c, idx) => (
            <div key={idx} className="glass-card overflow-hidden transition border-gradient hover-bright">
              <div className="h-36 bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-between px-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
                    {c.platform === 'Instagram' ? <Instagram size={18} className="text-pink-600" /> : <Facebook size={18} className="text-blue-600" />}
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{c.industry}</p>
                    <h3 className="text-lg font-semibold text-dark">{c.name}</h3>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-600">Followers</p>
                  <p className="text-xl font-bold">{c.followers}</p>
                </div>
              </div>
              <div className="p-6 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-gray-600">Engagement</p>
                  <p className="text-lg font-semibold">{c.engagement}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-gray-600">Platform</p>
                  <p className="text-lg font-semibold">{c.platform}</p>
                </div>
              </div>
              <div className="px-6 pb-6 flex items-center justify-between">
                <button className="text-primary font-semibold flex items-center">
                  View Case
                  <ArrowRight size={16} className="ml-2" />
                </button>
                <div className="text-xs text-gray-500 flex items-center">
                  <Award size={14} className="mr-1 text-yellow-500" /> Top Performer
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQs Component
interface Faq { q: string; a: string }

const FAQs: FC = () => {
  const faqs: Faq[] = [
    { q: 'How soon can we start?', a: 'We can start within 3–5 days after a quick call.' },
    { q: 'Is there a long contract?', a: 'No. Start monthly. Upgrade later when you see results.' },
    { q: 'Do you share reports?', a: 'Yes. You get a simple monthly report with leads, calls and reach.' },
    { q: 'Can you help with reviews?', a: 'We guide you on getting honest reviews and reply to them.' },
    { q: 'Is setup included?', a: 'Yes. We set up pages, forms and tracking for you.' },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center bg-blue-100 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <MessageCircle size={16} className="mr-2" /> FAQs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark">Quick answers</h2>
          <p className="text-gray-600 mt-3">Short and clear. No complex words.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-xl border p-6 bg-gray-50">
              <h3 className="font-semibold text-dark mb-2">{f.q}</h3>
              <p className="text-gray-600 text-sm">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Strong CTA Component
const StrongCTA: FC = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white card-lift">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient flex items-center">
                <Zap size={24} className="mr-2" /> Ready to make a boom?
              </h2>
              <p className="opacity-90 mb-6">Get a free plan for your business. Simple steps. Real leads. Clear results.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors btn-glow">Get Free Proposal</button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">Book Quick Call</button>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold">95%</p>
                  <p className="text-xs opacity-80">Retention</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">50M+</p>
                  <p className="text-xs opacity-80">Impressions</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">4.9/5</p>
                  <p className="text-xs opacity-80">Ratings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Features Component
const Features: FC = () => {
  const features = [
    {
      icon: <Zap className="text-yellow-500" size={24} />,
      title: 'Fast Results',
      description: 'See measurable improvements within 30 days of our partnership'
    },
    {
      icon: <Shield className="text-green-500" size={24} />,
      title: 'Data Security',
      description: 'Enterprise-grade security for all your business data'
    },
    {
      icon: <Clock className="text-blue-500" size={24} />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for Indian time zones'
    },
    {
      icon: <Award className="text-purple-500" size={24} />,
      title: 'Certified Experts',
      description: 'Google and Meta certified professionals'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-blue-100 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
            Built for <span className="text-primary">Indian Market</span> Success
          </h2>
          <p className="text-gray-600">
            Our strategies are specifically designed considering Indian consumer behavior, 
            regional preferences, and market dynamics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 card-lift border-gradient hover-bright">
              <div className="icon-badge w-16 h-16 mb-6 inline-flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Component
const Testimonials: FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Rahul Sharma',
      role: 'CEO',
      company: 'Urban Style',
      content: 'TechMinds transformed our online presence. Our sales increased by 300% in just 6 months!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200'
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'Marketing Director',
      company: 'Desi Delights',
      content: 'Their local SEO strategy helped us dominate search results across 5 Indian cities.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=200'
    },
    {
      id: 3,
      name: 'Amit Kumar',
      role: 'Founder',
      company: 'TechGadgets India',
      content: 'Best ROI on our digital marketing spend. Highly recommended for Indian startups.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-blue-100 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
            What Our <span className="text-primary">Indian Clients</span> Say
          </h2>
          <p className="text-gray-600">
            Don&apos;t just take our word for it. Here&apos;s what businesses across India have to say about us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-200 mr-4 overflow-hidden">
                  {/* Placeholder for image */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-primary font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">{testimonial.content}</p>
              <div className="flex items-center text-sm text-gray-500">
                <MessageCircle size={16} className="mr-2" />
                Verified Client
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Component
const Contact: FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section className="section-padding bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-blue-100 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Ready to <span className="text-primary">Grow Your Business</span> in India?
            </h2>
            <p className="text-gray-600 mb-8">
              Contact us for a free consultation. Our experts will analyze your business 
              and provide a customized digital marketing strategy.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-gray-600">info@techmindsolutions.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-semibold">Our Offices</p>
                  <p className="text-gray-600">Delhi • Mumbai • Bangalore • Hyderabad</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-dark mb-6">Get Free Consultation</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                  >
                    <option value="">Select a service</option>
                    <option value="social-media">Social Media Management</option>
                    <option value="local-seo">Local SEO & Google Maps</option>
                    <option value="lead-ads">Lead Ads (Meta & Google)</option>
                    <option value="all">All Services</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                  placeholder="Tell us about your business goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center"
              >
                Get Free Proposal
                <ArrowRight size={20} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer: FC = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Social Media Management', href: '/services/social-media' },
    { name: 'Local SEO & Google Maps', href: '/services/local-seo' },
    { name: 'Lead Ads (Meta & Google)', href: '/services/lead-ads' },
  ];

  const indianCities = [
    'Delhi NCR', 'Mumbai', 'Bangalore', 'Hyderabad', 
    'Chennai', 'Kolkata', 'Pune', 'Ahmedabad'
  ];

  const socialIcons = [
    { icon: Facebook, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-primary to-secondary w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TM</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">TechMinds</h2>
                <p className="text-sm text-gray-400">Digital Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Leading digital marketing agency in India helping businesses grow 
              through innovative strategies and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map(({ icon: Icon, href }, idx) => (
                <a 
                  key={idx} 
                  href={href} 
                  className="bg-gray-800 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label={`Follow us on ${Icon.name}`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href} 
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for digital marketing tips and updates.
            </p>
            <form className="mb-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-3 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button 
                  type="submit"
                  className="bg-primary hover:bg-blue-700 px-4 rounded-r-lg transition-colors duration-300"
                  aria-label="Subscribe to newsletter"
                >
                  <Send size={20} />
                </button>
              </div>
            </form>

            <div className="space-y-4">
              <div className="flex items-center">
                <Phone size={18} className="text-primary mr-3" />
                <div>
                  <p className="text-sm text-gray-400">Call Us</p>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-primary mr-3" />
                <div>
                  <p className="text-sm text-gray-400">Email Us</p>
                  <p>info@techmindsolutions.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indian Cities */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h4 className="text-center mb-6 font-semibold">Serving Across India</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {indianCities.map((city) => (
              <span 
                key={city} 
                className="bg-gray-800 px-4 py-2 rounded-full text-sm hover:bg-primary transition-colors duration-300 cursor-default"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/50 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} TechMinds Solutions. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="/sitemap" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
              <a href="/gdpr" className="text-gray-400 hover:text-white transition-colors">GDPR Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Page Component
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <BenefitsForUser />
        <Introductions />
        <Comparison />
        <GrowthGraph />
        <SocialClients />
        <Features />
        <Testimonials />
        <FAQs />
        <StrongCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
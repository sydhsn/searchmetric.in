/* -----------------------------
   Services
------------------------------ */

import { CheckCircle, ArrowRight, Instagram, Search, Target, Globe, Users, TrendingUp, MapPin, Zap } from "lucide-react";
import { FC, ReactNode } from "react";

/* -----------------------------
   Reusable UI
------------------------------ */
const ServiceCard: FC<{
  title: string;
  desc: string;
  icon: ReactNode;
  features: string[];
}> = ({ title, desc, icon, features }) => {
  return (
    <div className="card card-hover overflow-hidden">
      <div className="p-6 flex items-start justify-between gap-4 border-b border-slate-100">
        <div>
          <h3 className="text-lg font-semibold text-ink-900">{title}</h3>
          <p className="text-sm text-slate-600 mt-2">{desc}</p>
        </div>
        <div className="h-11 w-11 rounded-xl bg-brand-50 ring-1 ring-brand-100 flex items-center justify-center text-brand-700">
          {icon}
        </div>
      </div>

      <div className="p-6">
        <ul className="grid grid-cols-2 gap-2 text-sm text-slate-700">
          {features.slice(0, 4).map((f) => (
            <li key={f} className="flex items-center gap-2">
              <CheckCircle size={16} className="text-emerald-600" />
              <span className="font-medium">{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between">
          <a
            href="/contact"
            className="text-sm font-semibold text-brand-700 hover:text-brand-800 inline-flex items-center gap-2"
            aria-label={`Learn more about ${title} service`}
          >
            Learn more <ArrowRight size={16} />
          </a>
          <a 
            href="/contact" 
            className="btn-secondary !py-2 !px-4"
            aria-label={`Get quote for ${title} service`}
          >
            Get quote
          </a>
        </div>
      </div>
    </div>
  );
};


const Services: FC = () => {
  const services = [
    {
      title: "Social Media Management",
      desc: "Beautiful creatives, consistent posting, and community replies that drive leads.",
      icon: <Instagram size={20} />,
      features: ["Content calendar", "Design & captions", "Daily replies", "Monthly reporting"],
    },
    {
      title: "Local SEO & Google Maps",
      desc: "Improve visibility near your area and turn local searches into calls.",
      icon: <Search size={20} />,
      features: ["GBP setup", "Map ranking", "Reviews guidance", "NAP + citations"],
    },
    {
      title: "Lead Ads (Meta & Google)",
      desc: "Budget-smart campaigns designed for forms, calls, and messages.",
      icon: <Target size={20} />,
      features: ["Lead form setup", "Tracking", "Targeting", "Weekly review"],
    },
  ];

  const stats = [
    { value: "300+", label: "Websites Developed", icon: <Globe size={18} /> },
    { value: "95%", label: "Client Retention", icon: <Users size={18} /> },
    { value: "50M+", label: "Impressions Managed", icon: <TrendingUp size={18} /> },
    { value: "Top 3", label: "Maps Wins", icon: <MapPin size={18} /> },
  ];

  return (
    <section id="services" className="section bg-slate-50">
      <div className="container-pad">
        <div className="section-head">
          <div className="section-kicker">
            <Zap size={16} /> Our Services
          </div>
          <h2 className="h2">Premium digital growth for Indian businesses</h2>
          <p className="section-desc">
            One consistent system across creative, SEO, and performance—so it looks branded and converts better.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard
              key={s.title}
              title={s.title}
              desc={s.desc}
              icon={s.icon}
              features={s.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
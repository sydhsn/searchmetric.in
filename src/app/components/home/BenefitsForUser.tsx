import { Phone, MessageCircle, MapPin, Users, TrendingUp, Shield } from "lucide-react";
import { FC } from "react";
import { benefitsSection, benefitsData } from "@/content/homePageData";

/* Icon map */
const iconMap = {
  phone: <Phone size={18} />,
  messageCircle: <MessageCircle size={18} />,
  mapPin: <MapPin size={18} />,
  users: <Users size={18} />,
  trendingUp: <TrendingUp size={18} />,
  shield: <Shield size={18} />,
};

/* -----------------------------
   Benefits
------------------------------ */
const BenefitsForUser: FC = () => {

  return (
    <section className="section bg-gradient-to-br from-slate-50 via-brand-50/20 to-fuchsia-50/20">
      <div className="container-pad">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center">
            <TrendingUp size={16} /> {benefitsSection.badge}
          </div>
          <h2 className="h2 mt-5">{benefitsSection.title}</h2>
          <p className="section-desc">{benefitsSection.description}</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsData.map((b, idx) => (
            <div key={b.id} className="card card-hover card-pad border-t-4 border-brand-600 hover:border-fuchsia-600 transition-all">
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${idx % 3 === 0 ? 'from-brand-600 to-purple-600' : idx % 3 === 1 ? 'from-fuchsia-600 to-pink-600' : 'from-purple-600 to-brand-700'} text-white grid place-items-center shadow-lg`}>
                {iconMap[b.icon as keyof typeof iconMap]}
              </div>
              <div className="mt-4 text-lg font-semibold text-ink-900">{b.title}</div>
              <p className="mt-1 text-slate-600 text-sm">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BenefitsForUser;
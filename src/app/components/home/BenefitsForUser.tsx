import { Phone, MessageCircle, MapPin, Users, TrendingUp, Shield } from "lucide-react";
import { FC } from "react";

/* -----------------------------
   Benefits
------------------------------ */
const BenefitsForUser: FC = () => {
  const benefits = [
    { icon: <Phone size={18} />, title: "More Calls", desc: "Get more phone calls from nearby people." },
    { icon: <MessageCircle size={18} />, title: "More Messages", desc: "More chats and DMs from real users." },
    { icon: <MapPin size={18} />, title: "Better Local Rank", desc: "Show up higher on Google Maps." },
    { icon: <Users size={18} />, title: "Right Audience", desc: "Reach the people who want your service." },
    { icon: <TrendingUp size={18} />, title: "Clear Growth", desc: "Simple monthly growth reports." },
    { icon: <Shield size={18} />, title: "Safe & Secure", desc: "Your data stays protected and private." },
  ];

  return (
    <section className="section bg-gradient-to-br from-slate-50 via-brand-50/20 to-fuchsia-50/20">
      <div className="container-pad">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center">
            <TrendingUp size={16} /> Benefits for You
          </div>
          <h2 className="h2 mt-5">Simple wins for your business</h2>
          <p className="section-desc">We keep things easy. No heavy words. Just clear results.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, idx) => (
            <div key={b.title} className="card card-hover card-pad border-t-4 border-brand-600 hover:border-fuchsia-600 transition-all">
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${idx % 3 === 0 ? 'from-brand-600 to-purple-600' : idx % 3 === 1 ? 'from-fuchsia-600 to-pink-600' : 'from-purple-600 to-brand-700'} text-white grid place-items-center shadow-lg`}>
                {b.icon}
              </div>
              <div className="mt-4 text-lg font-semibold text-ink-900">{b.title}</div>
              <p className="mt-1 text-slate-600 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BenefitsForUser;
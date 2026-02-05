import { Search, Users, Instagram } from "lucide-react";
import { FC } from "react";

/* -----------------------------
   Introductions
------------------------------ */
const Introductions: FC = () => {
  const introCards = [
    {
      title: "What is SEO?",
      icon: <Search size={18} />,
      desc: "SEO helps your business show up on Google. People near you can find you easily.",
    },
    {
      title: "What is SME?",
      icon: <Users size={18} />,
      desc: "SME means small and medium business. We make marketing simple for small teams.",
    },
    {
      title: "Social Media Basics",
      icon: <Instagram size={18} />,
      desc: "We create easy posts, stories and ads. People remember your brand.",
    },
  ];

  return (
    <section className="section bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="container-pad">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center">
            <Search size={16} /> Simple Introductions
          </div>
          <h2 className="h2 mt-5">Understand the basics in plain words</h2>
          <p className="section-desc">No complex English. Just quick, helpful points.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {introCards.map((card, idx) => (
            <div key={card.title} className="card card-hover card-pad relative overflow-hidden">
              <div className={`absolute top-0 right-0 h-24 w-24 rounded-full blur-2xl opacity-20 ${idx % 3 === 0 ? 'bg-brand-400' : idx % 3 === 1 ? 'bg-fuchsia-400' : 'bg-purple-400'}`} />
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-600 to-fuchsia-600 text-white grid place-items-center shadow-md relative z-10">
                {card.icon}
              </div>
              <div className="mt-4 text-lg font-semibold text-ink-900">{card.title}</div>
              <p className="mt-2 text-slate-600 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Introductions;
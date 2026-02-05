import { Search, Users, Instagram } from "lucide-react";
import { FC } from "react";
import { introductionsSection, introductionsData } from "@/content/homePageData";

/* Icon map */
const iconMap = {
  search: <Search size={18} />,
  users: <Users size={18} />,
  instagram: <Instagram size={18} />,
};

/* -----------------------------
   Introductions
------------------------------ */
const Introductions: FC = () => {
  const colors = ["bg-brand-400", "bg-fuchsia-400", "bg-purple-400"];

  return (
    <section className="section bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="container-pad">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center">
            <Search size={16} /> {introductionsSection.badge}
          </div>
          <h2 className="h2 mt-5">{introductionsSection.title}</h2>
          <p className="section-desc">{introductionsSection.description}</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {introductionsData.map((card, idx) => (
            <div key={card.id} className="card card-hover card-pad relative overflow-hidden">
              <div className={`absolute top-0 right-0 h-24 w-24 rounded-full blur-2xl opacity-20 ${colors[idx % colors.length]}`} />
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-600 to-fuchsia-600 text-white grid place-items-center shadow-md relative z-10">
                {iconMap[card.icon as keyof typeof iconMap]}
              </div>
              <div className="mt-4 text-lg font-semibold text-ink-900">{card.title}</div>
              <p className="mt-2 text-slate-600 text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Introductions;
import { Zap, Shield, Clock, Award } from "lucide-react";
import { FC } from "react";
import { featuresData, featuresSection } from "@/content/homePageData";

/* Icon map for flexible icon management */
const iconMap = {
  zap: <Zap size={18} />,
  shield: <Shield size={18} />,
  clock: <Clock size={18} />,
  award: <Award size={18} />,
};

/* -----------------------------
   Features
------------------------------ */
const Features: FC = () => {

  return (
    <section className="section bg-white">
      <div className="container-pad">
        <div className="text-center max-w-3xl mx-auto">
            <div className="badge justify-center">{featuresSection.badge}</div>
            <h2 className="h2 mt-5">
            {featuresSection.title}&nbsp;<span className="text-brand-700">{featuresSection.titleHighlight}</span>
            </h2>
            <p className="section-desc">
            {featuresSection.description}
            </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((f) => (
            <div key={f.id} className="card card-hover card-pad text-center">
              <div className="mx-auto h-12 w-12 rounded-xl bg-slate-50 ring-1 ring-slate-200 grid place-items-center">
                <div className={f.color}>
                  {iconMap[f.icon as keyof typeof iconMap]}
                </div>
              </div>
              <div className="mt-4 text-lg font-semibold text-ink-900">{f.title}</div>
              <p className="mt-2 text-slate-600 text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;
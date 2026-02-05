import { Zap, Shield, Clock, Award } from "lucide-react";
import { FC } from "react";

/* -----------------------------
   Features
------------------------------ */
const Features: FC = () => {
  const features = [
    { icon: <Zap size={18} className="text-amber-600" />, title: "Fast Results", description: "See measurable improvements within 30 days." },
    { icon: <Shield size={18} className="text-emerald-600" />, title: "Data Security", description: "Enterprise-grade security for your business data." },
    { icon: <Clock size={18} className="text-sky-600" />, title: "24/7 Support", description: "Support aligned to Indian time zones." },
    { icon: <Award size={18} className="text-fuchsia-600" />, title: "Certified Experts", description: "Google and Meta certified professionals." },
  ];

  return (
    <section className="section bg-white">
      <div className="container-pad">
        <div className="text-center max-w-3xl mx-auto">
            <div className="badge justify-center">Why Choose Us</div>
            <h2 className="h2 mt-5">
            Engineered for <span className="text-brand-700">Indian Business Growth</span>
            </h2>
            <p className="section-desc">
            Proven strategies, creative excellence, and measurable results—tailored for ambitious Indian brands.
            </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card card-hover card-pad text-center">
              <div className="mx-auto h-12 w-12 rounded-xl bg-slate-50 ring-1 ring-slate-200 grid place-items-center">
                {f.icon}
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
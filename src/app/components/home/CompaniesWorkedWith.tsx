import { Package, Globe, Plane, Heart, BookOpen, ShoppingCart, Award, CheckCircle } from "lucide-react";
import { FC } from "react";

/* -----------------------------
   Companies Worked With
------------------------------ */
const CompaniesWorkedWith: FC = () => {
  const logos = [
    { name: "Round World Logistics", tag: "Logistics", icon: <Package size={24} />, color: "from-blue-600 to-cyan-600" },
    { name: "Immigration Experts", tag: "Consulting", icon: <Globe size={24} />, color: "from-emerald-600 to-teal-600" },
    { name: "Empire World Immigration", tag: "Services", icon: <Plane size={24} />, color: "from-violet-600 to-purple-600" },
    { name: "Prime Healthcare", tag: "Healthcare", icon: <Heart size={24} />, color: "from-rose-600 to-pink-600" },
    { name: "Bright Tutors", tag: "Education", icon: <BookOpen size={24} />, color: "from-amber-600 to-orange-600" },
    { name: "FreshMart", tag: "Grocery", icon: <ShoppingCart size={24} />, color: "from-green-600 to-lime-600" },
  ];

  return (
    <section className="section bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 h-96 w-96 rounded-full bg-brand-200 blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-fuchsia-200 blur-3xl opacity-20" />
      <div className="container-pad relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0">
            <Award size={16} /> Trusted Partners
          </div>
          <h2 className="h2 mt-5">Companies that <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">trust</span> our work</h2>
          <p className="section-desc">Delivering results across diverse industries in India.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {logos.map((l, idx) => (
            <div key={l.name} className="group relative">
              <div className="card card-hover card-pad relative overflow-hidden border-t-4 border-transparent hover:border-brand-600 transition-all">
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-0 group-hover:opacity-10 blur-2xl transition-all" style={{backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`}} />
                
                <div className="flex items-start gap-4">
                  <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${l.color} text-white grid place-items-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                    {l.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-lg text-ink-900 group-hover:text-brand-700 transition-colors">
                      {l.name}
                    </div>
                    <div className="mt-1 inline-flex items-center gap-2 text-xs text-slate-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                      {l.tag}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center gap-2 text-xs text-emerald-600 font-semibold">
                  <CheckCircle size={14} />
                  <span>Active Client</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CompaniesWorkedWith;
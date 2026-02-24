import { Globe, Heart, BookOpen, ShoppingCart, Award, CheckCircle, FileText, Plus, Briefcase } from "lucide-react";
import { FC } from "react";
import { companiesSection, companiesData } from "@/content/homePageData";

/* Inline color map — fixes Tailwind purging */
const colorMap: Record<string, string> = {
  "from-violet-600 to-purple-600": "linear-gradient(135deg, #7c3aed, #9333ea)",
  "from-blue-600 to-cyan-600":     "linear-gradient(135deg, #2563eb, #0891b2)",
  "from-emerald-600 to-teal-600":  "linear-gradient(135deg, #059669, #0d9488)",
  "from-slate-400 to-slate-500":   "linear-gradient(135deg, #94a3b8, #64748b)",
  "from-rose-600 to-pink-600":     "linear-gradient(135deg, #e11d48, #db2777)",
  "from-amber-600 to-orange-600":  "linear-gradient(135deg, #d97706, #ea580c)",
  "from-green-600 to-lime-600":    "linear-gradient(135deg, #16a34a, #65a30d)",
};

/* Icon map */
const iconMap = {
  globe: <Globe size={24} />,
  heart: <Heart size={24} />,
  bookOpen: <BookOpen size={24} />,
  shoppingCart: <ShoppingCart size={24} />,
  fileText: <FileText size={24} />,
  plus: <Plus size={24} />,
  briefcase: <Briefcase size={24} />,
};

const CompaniesWorkedWith: FC = () => {
  return (
    <section className="section bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 h-96 w-96 rounded-full bg-brand-200 blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-fuchsia-200 blur-3xl opacity-20" />

      <div className="container-pad relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0">
            <Award size={16} /> {companiesSection.badge}
          </div>
          <h2 className="h2 mt-5">
            {companiesSection.title}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">
              {companiesSection.titleHighlight}
            </span>{" "}
            {companiesSection.titleEnd}
          </h2>
          <p className="section-desc">{companiesSection.description}</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companiesData.map((l) => (
            <div key={l.id} className="group relative">
              <div className="card card-hover card-pad relative overflow-hidden border-t-4 border-transparent hover:border-brand-600 transition-all">
                <div className="flex items-start gap-4">
                  <div
                    className="h-14 w-14 rounded-xl text-white grid place-items-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all flex-shrink-0"
                    style={{ background: colorMap[l.color] }}
                  >
                    {iconMap[l.icon as keyof typeof iconMap]}
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

                <div
                  className="mt-4 flex items-center gap-2 text-xs font-semibold"
                  style={{ color: l.icon === "plus" ? "#94a3b8" : "#059669" }}
                >
                  <CheckCircle size={14} />
                  <span>{l.icon === "plus" ? "Spot Available" : "Active Client"}</span>
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
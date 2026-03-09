import { Star, MessageCircle } from "lucide-react";
import { testimonialsSection, testimonialsData } from "@/content/homePageData";

/* -----------------------------
   Testimonials
------------------------------ */
const Testimonials = () => {
  const colors = ["bg-brand-400", "bg-fuchsia-400", "bg-purple-400"];

  return (
    <section className="section bg-gradient-to-b from-white via-brand-50/20 to-white">
      <div className="container-pad">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0">{testimonialsSection.badge}</div>
          <h2 className="h2 mt-5">
            {testimonialsSection.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">{testimonialsSection.titleHighlight}</span>
          </h2>
          <p className="section-desc">{testimonialsSection.description}</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonialsData.map((t, idx) => (
            <div key={t.id} className="card card-hover card-pad relative overflow-hidden border-l-4 border-brand-600">
              <div className={`absolute -top-10 -right-10 h-32 w-32 rounded-full blur-2xl opacity-10 ${colors[idx % colors.length]}`} />
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-ink-900">{t.name}</div>
                  <div className="text-xs text-slate-500">
                    {t.role}, {t.company}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-amber-500 fill-amber-500" />
                  ))}
                </div>
              </div>

              <p className="mt-4 text-slate-700 italic">&quot;{t.text}&quot;</p>

              <div className="mt-5 text-xs text-slate-500 inline-flex items-center gap-2">
                <MessageCircle size={14} /> Verified Client
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
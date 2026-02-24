import { Phone, Search, MessageCircle, TrendingUp, Target, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { FC } from "react";
import { challengesSection, challengesData } from "@/content/homePageData";

/* Icon map */
const iconMap = {
  phone: <Phone size={24} />,
  search: <Search size={24} />,
  messageCircle: <MessageCircle size={24} />,
  trendingUp: <TrendingUp size={24} />,
  target: <Target size={24} />,
  zap: <Zap size={24} />,
};

/* Inline color map — fixes Tailwind purging issue */
const colorMap: Record<string, { bg: string; light: string }> = {
  "from-pink-600 to-rose-600":     { bg: "linear-gradient(135deg, #db2777, #e11d48)", light: "#fff1f2" },
  "from-red-600 to-orange-600":    { bg: "linear-gradient(135deg, #dc2626, #ea580c)", light: "#fff7ed" },
  "from-orange-600 to-amber-600":  { bg: "linear-gradient(135deg, #ea580c, #d97706)", light: "#fffbeb" },
  "from-purple-600 to-violet-600": { bg: "linear-gradient(135deg, #9333ea, #7c3aed)", light: "#f5f3ff" },
  "from-blue-600 to-cyan-600":     { bg: "linear-gradient(135deg, #2563eb, #0891b2)", light: "#ecfeff" },
  "from-emerald-600 to-teal-600":  { bg: "linear-gradient(135deg, #059669, #0d9488)", light: "#f0fdfa" },
};

const ChallengesSection: FC = () => {
  return (
    <section className="section bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-red-200 blur-3xl opacity-15" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-orange-200 blur-3xl opacity-15" />

      <div className="container-pad relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center bg-gradient-to-r from-red-600 to-orange-600 text-white ring-0">
            <Target size={16} /> {challengesSection.badge}
          </div>
          <h2 className="h2 mt-5">
            {challengesSection.title}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              {challengesSection.titleHighlight}
            </span>
          </h2>
          <p className="section-desc">{challengesSection.description}</p>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {challengesData.map((c) => {
            const colors = colorMap[c.gradient];
            return (
              <div key={c.id} className="group relative">
                <div
                  className="card overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  style={{ borderTop: `4px solid transparent` }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderTopColor = colors.bg.includes("db2777") ? "#db2777" : colors.bg;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderTopColor = "transparent";
                  }}
                >
                  {/* Hover bg */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ background: colors.light }}
                  />

                  <div className="relative card-pad flex flex-col gap-4 h-full">
                    {/* Icon */}
                    <div
                      className="h-14 w-14 rounded-2xl flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                      style={{ background: colors.bg }}
                    >
                      {iconMap[c.icon as keyof typeof iconMap]}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-ink-900 group-hover:text-slate-800 transition-all">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-slate-600 leading-relaxed text-sm">{c.description}</p>
                    </div>

                    {/* Solution tag */}
                    <div className="flex items-center gap-2 text-xs font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                      style={{ color: "#059669" }}
                    >
                      <CheckCircle size={14} />
                      <span>Searchmetric has a solution</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Solution CTA */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <div className="card overflow-hidden">
            <div className="p-8 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white">
              <div className="h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-xl grid place-items-center mx-auto mb-4">
                <CheckCircle size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">We&apos;ve got solutions</h3>
              <p className="text-white/90 mb-6">Let&apos;s turn these challenges into opportunities for growth</p>
              <a
                href="/contact"
                className="btn !bg-white !text-emerald-700 hover:!bg-slate-100 inline-flex items-center gap-2 shadow-xl"
                aria-label="Get your free personalized growth plan"
              >
                Get Your Free Growth Plan <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
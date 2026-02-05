import { Phone, Search, MessageCircle, TrendingUp, Target, Zap, X, CheckCircle, ArrowRight } from "lucide-react";
import { FC } from "react";

/* -----------------------------
   Challenges
------------------------------ */
const ChallengesSection: FC = () => {
  const challenges = [
    { 
      title: "Not enough calls", 
      desc: "People visit but don't call. We fix that.",
      icon: <Phone size={22} />,
      gradient: "from-pink-600 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50"
    },
    { 
      title: "Low Google visibility", 
      desc: "Your business doesn't show up near you.",
      icon: <Search size={22} />,
      gradient: "from-red-600 to-orange-600",
      bgGradient: "from-red-50 to-orange-50"
    },
    { 
      title: "Weak social engagement", 
      desc: "Likes without real conversations or leads.",
      icon: <MessageCircle size={22} />,
      gradient: "from-orange-600 to-amber-600",
      bgGradient: "from-orange-50 to-amber-50"
    },
    { 
      title: "No tracking or reports", 
      desc: "Hard to know what's working. We simplify.",
      icon: <TrendingUp size={22} />,
      gradient: "from-purple-600 to-violet-600",
      bgGradient: "from-purple-50 to-violet-50"
    },
    { 
      title: "Random posting", 
      desc: "No plan. We bring a simple monthly calendar.",
      icon: <Target size={22} />,
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    { 
      title: "Wasted ad spend", 
      desc: "Money spent without leads. We focus on ROI.",
      icon: <Zap size={22} />,
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50"
    },
  ];

  return (
    <section className="section bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-red-200 blur-3xl opacity-15" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-orange-200 blur-3xl opacity-15" />
      <div className="container-pad relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center bg-gradient-to-r from-red-600 to-orange-600 text-white ring-0">
            <Target size={16} /> Facing these issues?
          </div>
          <h2 className="h2 mt-5">
            We solve common <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">growth blockers</span>
          </h2>
          <p className="section-desc">Short, clear points so you can quickly see the fit.</p>
        </div>

        {/* Responsive grid for challenges */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((c, idx) => (
            <div key={c.title} className="group relative">
              <div className={`card overflow-hidden border-l-4 border-transparent hover:border-red-600 transition-all h-full`}> 
                <div className={`absolute inset-0 bg-gradient-to-r ${c.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-300`} />
                <div className="relative card-pad flex flex-col items-center gap-4 h-full">
                  {/* Problem Indicator */}
                  <div className="relative h-14 w-14 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600 grid place-items-center font-bold text-2xl shadow-md transform group-hover:scale-110 transition-all duration-300">
                    <div className={`absolute -inset-1 bg-gradient-to-br ${c.gradient} rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity`} />
                    <div className="relative">
                      <X size={28} className="text-red-500 group-hover:rotate-90 transition-transform duration-300" />
                    </div>
                  </div>
                  {/* Icon Badge */}
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${c.gradient} text-white grid place-items-center shadow-md transform group-hover:rotate-12 transition-all duration-300`}>
                    {c.icon}
                  </div>
                  {/* Content */}
                  <div className="flex-1 min-w-0 text-center">
                    <h3 className="text-lg font-bold text-ink-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-orange-600 transition-all">
                      {c.title}
                    </h3>
                    <p className="mt-1 text-slate-600 leading-relaxed text-sm">{c.desc}</p>
                  </div>
                  {/* Solution Indicator */}
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
                    <div className="h-10 w-10 rounded-full bg-emerald-500 text-white grid place-items-center shadow-lg mx-auto">
                      <CheckCircle size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
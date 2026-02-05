import { Star, ArrowRight, TrendingUp, MapPin, MessageCircle, Shield } from "lucide-react";
import Image from "next/image";

/* -----------------------------
   Hero
------------------------------ */
const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        <div className="absolute bottom-0 right-20 w-96 h-96 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />
      </div>

      <div className="container-pad pt-10 pb-16 md:pt-10 md:pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-lg">
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-amber-400 text-amber-400" />)}
              </div>
              <span className="text-sm font-semibold">Trusted by 500+ Businesses</span>
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-white">Grow your business with </span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-fuchsia-400 to-pink-400 animate-gradient">
                SEO &amp; Social Media
              </span>
              <span className="text-white block mt-2">— made simple.</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
              Reach more local customers with easy-to-understand SEO, digital marketing, and Instagram &amp; Facebook strategies. Simple plans, clear results.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a 
                href="/contact" 
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white font-semibold rounded-xl shadow-2xl hover:shadow-brand-600/50 transition-all overflow-hidden"
                aria-label="Get free marketing proposal for your business"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Free Proposal <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-700 to-fuchsia-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { icon: <MapPin size={16} />, label: "Maps visibility" },
                { icon: <MessageCircle size={16} />, label: "More DMs" },
                { icon: <Shield size={16} />, label: "Transparent" },
              ].map((i) => (
                <div key={i.label} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 backdrop-blur-xl border border-white/10 text-slate-300 text-sm">
                  <span className="text-brand-400">{i.icon}</span>
                  <span className="font-medium">{i.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:block hidden">
            {/* Floating dashboard mockup */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-600/30 to-fuchsia-600/30 blur-3xl" />
              
              <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500">
                <div className="h-72 overflow-hidden relative">
                    <Image 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
                      alt="Digital marketing analytics dashboard showing growth metrics, leads, and SEO performance for Indian businesses"
                      fill
                      className="object-cover opacity-90"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="eager"
                    />
                  </div>
                <div className="p-6 border-t border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm font-semibold text-white">Growth Snapshot</div>
                      <div className="text-xs text-slate-400">Live performance</div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { k: "Leads", v: "+128%", color: "brand" },
                      { k: "Calls", v: "+64%", color: "emerald" },
                      { k: "Rank", v: "Top 3", color: "amber" },
                    ].map((s) => (
                      <div key={s.k} className="rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 p-4">
                        <div className="text-xs text-slate-400">{s.k}</div>
                        <div className={`text-xl font-bold mt-1 text-${s.color}-400`}>{s.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" fillOpacity="0.1"/>
        </svg>
      </div>
    </section>
  );
};
export default Hero;
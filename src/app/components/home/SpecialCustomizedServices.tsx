import { Instagram, MapPin, Target, Zap, ArrowRight } from "lucide-react";
import { FC } from "react";

/* -----------------------------
   Special Customized Services
------------------------------ */
const SpecialCustomizedServices: FC = () => {
  const items = [
    { 
      number: "01", 
      title: "Social Media Management", 
      desc: "Plan, create, post and reply — simple and consistent.",
      icon: <Instagram size={24} />,
      gradient: "from-pink-600 via-purple-600 to-indigo-600",
      bgGradient: "from-pink-50 to-purple-50"
    },
    { 
      number: "02", 
      title: "Local SEO & Google Maps", 
      desc: "Show up near your area. Get more calls and visits.",
      icon: <MapPin size={24} />,
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    { 
      number: "03", 
      title: "Lead Ads (Instagram, Facebook & Google)", 
      desc: "Run budget-friendly ads to capture real leads.",
      icon: <Target size={24} />,
      gradient: "from-amber-600 via-orange-600 to-red-600",
      bgGradient: "from-amber-50 to-orange-50"
    },
  ];

  return (
    <section className="section bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
      <div className="absolute top-1/4 -left-24 h-96 w-96 rounded-full bg-brand-200 blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 -right-24 h-96 w-96 rounded-full bg-fuchsia-200 blur-3xl opacity-20" />
      
      <div className="container-pad relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0">
            <Zap size={16} /> Tailored for your needs
          </div>
          <h2 className="h2 mt-5">
            Special <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">customized</span> services for you
          </h2>
          <p className="section-desc">Focused on three simple offerings that drive results.</p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto space-y-6">
          {items.map((item, idx) => (
            <div key={item.number} className="group relative">
              <div className={`card card-hover overflow-hidden border-l-4 border-transparent hover:border-brand-600 transition-all`}>
                <div className={`absolute inset-0 bg-gradient-to-r ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-300`} />
                
                <div className="relative card-pad flex items-start gap-6">
                  {/* Animated Number Badge */}
                  <div className={`relative h-16 w-16 rounded-2xl bg-gradient-to-br ${item.gradient} text-white grid place-items-center font-bold text-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    {item.number}
                    <div className={`absolute -inset-1 bg-gradient-to-br ${item.gradient} rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity`} />
                    <div className="relative">{item.number}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-ink-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-600 group-hover:to-fuchsia-600 transition-all">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                      
                      {/* Icon Badge */}
                      <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.gradient} text-white grid place-items-center shadow-md transform group-hover:rotate-12 transition-all duration-300`}>
                        {item.icon}
                      </div>
                    </div>

                    {/* Feature Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {idx === 0 && (
                        <>
                          <span className="text-xs px-3 py-1 rounded-full bg-pink-100 text-pink-700 font-medium">Posts & Stories</span>
                          <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium">Community Management</span>
                        </>
                      )}
                      {idx === 1 && (
                        <>
                          <span className="text-xs px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-medium">Google My Business</span>
                          <span className="text-xs px-3 py-1 rounded-full bg-teal-100 text-teal-700 font-medium">Local Rankings</span>
                        </>
                      )}
                      {idx === 2 && (
                        <>
                          <span className="text-xs px-3 py-1 rounded-full bg-amber-100 text-amber-700 font-medium">Meta Ads</span>
                          <span className="text-xs px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-medium">Google Ads</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Arrow Indicator */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
                  <ArrowRight size={24} className="text-brand-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a 
            href="/contact" 
            className="btn-primary inline-flex items-center gap-2"
            aria-label="Get started with our digital marketing services"
          >
            Get Started Now <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
export default SpecialCustomizedServices;
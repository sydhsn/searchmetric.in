import { Award, Instagram, Facebook, ArrowRight } from "lucide-react";
import { FC } from "react";
import Image from "next/image";

/* -----------------------------
   Social Clients
------------------------------ */
const SocialClients: FC = () => {
  const clients = [
    { name: "Urban Style", platform: "Instagram", industry: "Fashion", followers: "120k", engagement: "6.2%" },
    { name: "Desi Delights", platform: "Instagram", industry: "F&B", followers: "45k", engagement: "4.8%" },
    { name: "TechGadgets India", platform: "Instagram", industry: "Electronics", followers: "80k", engagement: "5.1%" },
    { name: "City Clinic", platform: "Facebook", industry: "Healthcare", followers: "30k", engagement: "3.9%" },
    { name: "Bright Tutors", platform: "Facebook", industry: "Education", followers: "18k", engagement: "4.2%" },
    { name: "FreshMart", platform: "Facebook", industry: "Grocery", followers: "28k", engagement: "3.5%" },
  ];

  return (
    <section className="section bg-gradient-to-b from-slate-50 to-white">
      <div className="container-pad">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white ring-0">
            <Award size={16} /> Social Proof
          </div>
            <h2 className="h2 mt-5">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">Clients</span></h2>
          <p className="section-desc">Instagram and Facebook clients we manage with care.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((c, idx) => (
            <div key={c.name} className="card card-hover overflow-hidden group">
              <div className="h-40 overflow-hidden bg-gradient-to-br from-brand-100 to-fuchsia-100 relative">
                <Image 
                  src={`https://images.unsplash.com/photo-${
                    
                    idx === 0 ? '1460925895917-afdab827c52f' : 
                    idx === 1 ? '1504674900247-0877df9cc836' : 
                    idx === 2 ? '1505740420928-5e560c06d30e' : 
                    idx === 3 ? '1551076805-e1869033e561' : 
                    idx === 4 ? '1503676260728-1c00da094a0b' : 
                    '1542838132-92c53300491e'
                  }?w=600&q=80`}
                  alt={`${c.name} ${c.platform} marketing campaign showing success metrics and growth`}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-slate-50 ring-1 ring-slate-200 grid place-items-center">
                    {c.platform === "Instagram" ? (
                      <Instagram size={18} className="text-pink-600" />
                    ) : (
                      <Facebook size={18} className="text-blue-600" />
                    )}
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">{c.industry}</div>
                    <div className="font-semibold text-ink-900">{c.name}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs text-slate-500">Followers</div>
                  <div className="text-lg font-semibold text-ink-900">{c.followers}</div>
                </div>
              </div>

              <div className="p-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-50 p-4 text-center">
                  <div className="text-xs text-slate-500">Engagement</div>
                  <div className="text-lg font-semibold text-ink-900">{c.engagement}</div>
                </div>
                <div className="rounded-xl bg-slate-50 p-4 text-center">
                  <div className="text-xs text-slate-500">Platform</div>
                  <div className="text-lg font-semibold text-ink-900">{c.platform}</div>
                </div>
              </div>

              <div className="px-6 pb-6 flex items-center justify-between">
                <a 
                  className="text-sm font-semibold text-brand-700 hover:text-brand-800 inline-flex items-center gap-2" 
                  href="/case-studies"
                  aria-label={`View case study for ${c.name}`}
                >
                  View Case <ArrowRight size={16} />
                </a>
                <div className="text-xs text-slate-500 inline-flex items-center gap-2">
                  <Award size={14} className="text-amber-500" /> Top Performer
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SocialClients;
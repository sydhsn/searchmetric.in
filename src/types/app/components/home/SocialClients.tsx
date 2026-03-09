import { Award, Instagram, Facebook, ArrowRight } from "lucide-react";
import { FC } from "react";
import Image from "next/image";
import { socialClientsSection, socialClientsData } from "@/content/homePageData";

/* -----------------------------
   Social Clients
------------------------------ */
const SocialClients: FC = () => {

  return (
    <section className="section bg-gradient-to-b from-slate-50 to-white">
      <div className="container-pad">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white ring-0">
            <Award size={16} /> {socialClientsSection.badge}
          </div>
            <h2 className="h2 mt-5">{socialClientsSection.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">{socialClientsSection.titleHighlight}</span></h2>
          <p className="section-desc">{socialClientsSection.description}</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialClientsData.map((c, idx) => (
            <div key={c.id} className="card card-hover overflow-hidden group">
              <div className="h-40 overflow-hidden bg-gradient-to-br from-brand-100 to-fuchsia-100 relative">
                <Image 
                  src={`https://images.unsplash.com/photo-${c.imageId}?w=600&q=80`}
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
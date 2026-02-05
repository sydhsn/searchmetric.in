import { Instagram, Facebook, CheckCircle, ArrowRight } from "lucide-react";
import { FC } from "react";
import Image from "next/image";

/* -----------------------------
   Platform Marketing
------------------------------ */
const PlatformMarketing: FC = () => {
  const cards = [
    {
      platform: "Instagram Marketing",
      icon: <Instagram size={18} className="text-pink-600" />,
      highlights: ["Reels & Stories", "Hashtag strategy", "Community replies", "Lead ads"],
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80",
    },
    {
      platform: "Facebook Marketing",
      icon: <Facebook size={18} className="text-blue-600" />,
      highlights: ["Page growth", "Groups outreach", "Messenger leads", "Lookalike ads"],
      image: "https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?w=600&q=80",
    },
  ];

  return (
    <section className="section bg-gradient-to-b from-white to-slate-50">
      <div className="container-pad">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center">
            <Instagram size={16} /> Social Platforms
          </div>
          <h2 className="h2 mt-5">Grow on Instagram and Facebook</h2>
          <p className="section-desc">Beautiful creatives, smart posting times, and clean reporting.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {cards.map((c) => (
            <div key={c.platform} className="card card-hover overflow-hidden">
              <div className="h-48 overflow-hidden relative">
                <Image 
                  src={c.image} 
                  alt={`${c.platform} social media marketing services showing successful campaigns`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-slate-50 ring-1 ring-slate-200 grid place-items-center">
                    {c.icon}
                  </div>
                  <div className="font-semibold text-ink-900">{c.platform}</div>
                </div>
                <span className="badge-neutral !px-3 !py-1 text-xs">Popular</span>
              </div>

              <div className="p-6">
                <ul className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                  {c.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-emerald-600" />
                      <span className="font-medium">{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <a 
                    href="/contact" 
                    className="btn-primary"
                    aria-label={`View packages for ${c.platform} marketing`}
                  >
                    See packages <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PlatformMarketing;
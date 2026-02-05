import { Star, MessageCircle } from "lucide-react";

/* -----------------------------
   Testimonials
------------------------------ */
const Testimonials= () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "CEO",
      company: "Urban Style",
      content: "SearchMetric transformed our online presence. Our sales increased by 300% in 6 months!",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Marketing Director",
      company: "Desi Delights",
      content: "Their local SEO strategy helped us dominate search results across 5 Indian cities.",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      role: "Founder",
      company: "TechGadgets India",
      content: "Best ROI on our marketing spend. Highly recommended for Indian startups.",
      rating: 5,
    },
  ];

  return (
    <section className="section bg-gradient-to-b from-white via-brand-50/20 to-white">
      <div className="container-pad">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0">Client Testimonials</div>
          <h2 className="h2 mt-5">
            What our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">clients</span> say
          </h2>
          <p className="section-desc">Real feedback from businesses across India.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={t.name} className="card card-hover card-pad relative overflow-hidden border-l-4 border-brand-600">
              <div className={`absolute -top-10 -right-10 h-32 w-32 rounded-full blur-2xl opacity-10 ${idx % 3 === 0 ? 'bg-brand-400' : idx % 3 === 1 ? 'bg-fuchsia-400' : 'bg-purple-400'}`} />
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

              <p className="mt-4 text-slate-700 italic">&quot;{t.content}&quot;</p>

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
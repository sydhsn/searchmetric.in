import { Clock, FileText, TrendingUp, Star, CheckCircle, MessageCircle, ArrowRight, Phone } from "lucide-react";
import { FC } from "react";

/* -----------------------------
   FAQs
------------------------------ */
const FAQs: FC = () => {
  const faqs = [
    { 
      q: "How soon can we start?", 
      a: "We can start within 3–5 days after a quick call.",
      icon: <Clock size={20} />,
      color: "from-brand-600 to-purple-600"
    },
    { 
      q: "Is there a long contract?", 
      a: "No. Start monthly. Upgrade later when you see results.",
      icon: <FileText size={20} />,
      color: "from-emerald-600 to-teal-600"
    },
    { 
      q: "Do you share reports?", 
      a: "Yes. A simple monthly report with leads, calls and reach.",
      icon: <TrendingUp size={20} />,
      color: "from-amber-600 to-orange-600"
    },
    { 
      q: "Can you help with reviews?", 
      a: "Yes. We guide you on getting honest reviews and reply to them.",
      icon: <Star size={20} />,
      color: "from-fuchsia-600 to-pink-600"
    },
    { 
      q: "Is setup included?", 
      a: "Yes. We set up pages, forms and tracking for you.",
      icon: <CheckCircle size={20} />,
      color: "from-violet-600 to-purple-600"
    },
  ];

  return (
    <section className="section bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      <div className="absolute top-1/4 -left-24 h-96 w-96 rounded-full bg-brand-200 blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 -right-24 h-96 w-96 rounded-full bg-fuchsia-200 blur-3xl opacity-20" />
      
      <div className="container-pad relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0">
            <MessageCircle size={16} /> FAQs
          </div>
          <h2 className="h2 mt-5">
            Quick <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">answers</span>
          </h2>
          <p className="section-desc">Short and clear. No complex words.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.map((f, idx) => (
            <div key={f.q} className="group relative">
              <div className="card card-hover overflow-hidden border-t-4 border-transparent hover:border-brand-600 transition-all">
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-0 group-hover:opacity-10 blur-2xl transition-all" style={{backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`}} />
                
                <div className="card-pad relative">
                  <div className="flex items-start gap-4">
                    <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${f.color} text-white grid place-items-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all flex-shrink-0`}>
                      {f.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg text-ink-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-600 group-hover:to-fuchsia-600 transition-all">
                        {f.q}
                      </h3>
                      <p className="mt-3 text-slate-600 leading-relaxed text-sm">{f.a}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-brand-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                    <ArrowRight size={14} />
                    <span>Learn more</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center card card-pad bg-gradient-to-r from-brand-600 via-purple-600 to-fuchsia-600 text-white max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
          <p className="text-white/90 mb-6 text-sm">Our team is here to help. Get in touch for a friendly chat.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="/contact" 
              className="btn !bg-white !text-slate-900 hover:!bg-slate-100 inline-flex items-center gap-2"
              aria-label="Chat with our marketing experts"
            >
              <MessageCircle size={18} /> Chat with us
            </a>
            <a 
              href="tel:+919876543210" 
              className="btn !bg-white/10 !text-white border border-white/20 hover:!bg-white/20 inline-flex items-center gap-2"
              aria-label="Call our office now"
            >
              <Phone size={18} /> Call now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
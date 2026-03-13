import { FC } from "react";
import { faqsSection, faqsData } from "@/content/homePageData";
import { Clock, FileText, TrendingUp, Star, CheckCircle, MessageCircle, ArrowRight, Phone, Shield } from "lucide-react";

/* Icon map */
const iconMap = {
  clock: <Clock size={20} />,
  fileText: <FileText size={20} />,
  trendingUp: <TrendingUp size={20} />,
  star: <Star size={20} />,
  checkCircle: <CheckCircle size={20} />,
  shield: <Shield size={20} />,
};

const FAQs: FC = () => {
  return (
    <section className="section bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      <div className="absolute top-1/4 -left-24 h-96 w-96 rounded-full bg-brand-200 blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 -right-24 h-96 w-96 rounded-full bg-fuchsia-200 blur-3xl opacity-20" />
      
      <div className="container-pad relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0">
            <MessageCircle size={16} /> {faqsSection.badge}
          </div>
          <h2 className="h2 mt-5">
            {faqsSection.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">{faqsSection.titleHighlight}</span>
          </h2>
          <p className="section-desc">{faqsSection.description}</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqsData.map((f, idx) => (
            <div key={f.id} className="group relative">
              <div className="card card-hover overflow-hidden border-t-4 border-transparent hover:border-brand-600 transition-all">
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-0 group-hover:opacity-10 blur-2xl transition-all" style={{backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`}} />
                
                <div className="card-pad relative">
                  <div className="flex items-start gap-4">
                    <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${f.color} text-white grid place-items-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all flex-shrink-0`}>
                      {iconMap[f.icon as keyof typeof iconMap]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg text-ink-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-600 group-hover:to-fuchsia-600 transition-all">
                        {f.question}
                      </h3>
                      <p className="mt-3 text-slate-600 leading-relaxed text-sm">{f.answer}</p>
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

        <div className="mt-12 text-center card card-pad bg-gradient-to-r from-brand-600 via-purple-600 to-fuchsia-600 text-white max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
          <p className="text-white/90 mb-6 text-sm">Our team is here to help. Get in touch for a friendly chat.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/contact" className="btn !bg-white !text-slate-900 hover:!bg-slate-100 inline-flex items-center gap-2" aria-label="Chat with our marketing experts">
              <MessageCircle size={18} /> Chat with us
            </a>
            <a href="tel:+919080135567" className="btn !bg-white/10 !text-white border border-white/20 hover:!bg-white/20 inline-flex items-center gap-2" aria-label="Call our office now">
              <Phone size={18} /> Call now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
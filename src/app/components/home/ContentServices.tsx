import { Edit3, FileText, CheckCircle, ArrowRight } from "lucide-react";
import { FC } from "react";
import { contentServicesSection, contentServicesData } from "@/content/homePageData";

/* Icon map */
const iconMap = {
  edit3: <Edit3 size={18} className="text-fuchsia-600" />,
  fileText: <FileText size={18} className="text-emerald-600" />,
};

/* -----------------------------
   Content Services
------------------------------ */
const ContentServices: FC = () => {

  return (
    <section className="section bg-slate-50">
      <div className="container-pad">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center">
            <FileText size={16} /> {contentServicesSection.badge}
          </div>
          <h2 className="h2 mt-5">{contentServicesSection.title}</h2>
          <p className="section-desc">{contentServicesSection.description}</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {contentServicesData.map((it) => (
            <div key={it.id} className="card card-hover card-pad">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-slate-50 ring-1 ring-slate-200 grid place-items-center">
                  {iconMap[it.icon as keyof typeof iconMap]}
                </div>
                <div className="text-lg font-semibold text-ink-900">{it.title}</div>
              </div>

              <p className="mt-4 text-slate-600">{it.description}</p>

              <ul className="mt-5 grid grid-cols-2 gap-2 text-sm text-slate-700">
                {it.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-emerald-600" />
                    <span className="font-medium">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <a 
                  href="/contact" 
                  className="btn-primary"
                  aria-label="Request content writing samples"
                >
                  Request Samples <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ContentServices;
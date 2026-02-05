import { CheckCircle, X } from "lucide-react";
import { FC } from "react";
import { comparisonSection, comparisonData } from "@/content/homePageData";

/* -----------------------------
   Comparison
------------------------------ */
const Comparison: FC = () => {

  const IconYes = () => <CheckCircle size={18} className="text-emerald-600" />;
  const IconNo = () => <X size={18} className="text-rose-500" />;

  return (
    <section className="section bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container-pad">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center bg-brand-600 text-white ring-0">{comparisonSection.badge}</div>
          <h2 className="h2 mt-5">{comparisonSection.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">{comparisonSection.titleHighlight}</span> {comparisonSection.titleEnd}</h2>
          <p className="section-desc">{comparisonSection.description}</p>
        </div>

        <div className="mt-10 card overflow-hidden">
          <div className="grid grid-cols-4 bg-slate-50 text-sm font-semibold text-slate-700 border-b border-slate-200">
            <div className="p-4">Feature</div>
            <div className="p-4">SearchMetric</div>
            <div className="p-4">Other Agencies</div>
            <div className="p-4">DIY</div>
          </div>

          {comparisonData.map((r) => (
            <div key={r.id} className="grid grid-cols-4 border-b last:border-b-0 border-slate-100">
              <div className="p-4 text-sm text-slate-700">{r.label}</div>
              <div className="p-4">{r.searchMetric ? <IconYes /> : <IconNo />}</div>
              <div className="p-4">{r.others ? <IconYes /> : <IconNo />}</div>
              <div className="p-4">{r.diy ? <IconYes /> : <IconNo />}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Comparison;
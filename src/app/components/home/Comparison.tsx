import { CheckCircle, X } from "lucide-react";
import { FC } from "react";

/* -----------------------------
   Comparison
------------------------------ */
const Comparison: FC = () => {
  const rows = [
    { label: "Clear monthly report", tm: true, others: false, diy: false },
    { label: "Local map ranking", tm: true, others: true, diy: false },
    { label: "Friendly simple language", tm: true, others: false, diy: false },
    { label: "Lead form setup", tm: true, others: true, diy: false },
    { label: "Daily social replies", tm: true, others: false, diy: false },
  ];

  const IconYes = () => <CheckCircle size={18} className="text-emerald-600" />;
  const IconNo = () => <X size={18} className="text-rose-500" />;

  return (
    <section className="section bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container-pad">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center bg-brand-600 text-white ring-0">Why Us</div>
          <h2 className="h2 mt-5">SearchMetric <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">vs</span> Others</h2>
          <p className="section-desc">A quick comparison.</p>
        </div>

        <div className="mt-10 card overflow-hidden">
          <div className="grid grid-cols-4 bg-slate-50 text-sm font-semibold text-slate-700 border-b border-slate-200">
            <div className="p-4">Feature</div>
            <div className="p-4">SearchMetric</div>
            <div className="p-4">Other Agencies</div>
            <div className="p-4">DIY</div>
          </div>

          {rows.map((r) => (
            <div key={r.label} className="grid grid-cols-4 border-b last:border-b-0 border-slate-100">
              <div className="p-4 text-sm text-slate-700">{r.label}</div>
              <div className="p-4">{r.tm ? <IconYes /> : <IconNo />}</div>
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
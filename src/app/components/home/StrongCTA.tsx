import { ArrowRight, Phone } from "lucide-react";
import { FC } from "react";

/* -----------------------------
   Strong CTA
------------------------------ */
const StrongCTA: FC = () => {
  return (
    <section className="section">
      <div className="container-pad">
        <div className="card overflow-hidden">
          <div className="p-8 md:p-12 bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="text-3xl md:text-4xl font-semibold tracking-tight">
                  Ready to grow your leads?
                </div>
                <p className="mt-3 opacity-90">
                  Get a free plan for your business. Simple steps. Real leads. Clear results.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a 
                    href="/contact" 
                    className="btn-secondary !bg-white !text-ink-900"
                    aria-label="Get free marketing proposal"
                  >
                    Get Free Proposal <ArrowRight size={18} />
                  </a>
                  <a 
                    href="/contact" 
                    className="btn-ghost !text-white hover:!bg-white/10"
                    aria-label="Book quick call with our team"
                  >
                    Book Quick Call <Phone size={18} />
                  </a>
                </div>
              </div>

              <div className="rounded-2xl bg-white/10 p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-semibold">95%</div>
                    <div className="text-xs opacity-80">Retention</div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold">50M+</div>
                    <div className="text-xs opacity-80">Impressions</div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold">4.9/5</div>
                    <div className="text-xs opacity-80">Ratings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default StrongCTA;
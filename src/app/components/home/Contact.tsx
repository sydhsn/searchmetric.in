import { ContactFormData } from "@/types/nav";
import { Send, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { FC, ReactNode, useState } from "react";

/* -----------------------------
   Contact
------------------------------ */
const Contact: FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // integrate your API here
    console.log("Form submitted:", formData);
    // Add form submission logic
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      alert('Thank you! We will contact you soon.');
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    });
  };

  return (
    <section id="contact" className="section bg-gradient-to-br from-slate-50 via-brand-50/30 to-fuchsia-50/30 relative overflow-hidden">
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand-300 blur-3xl opacity-20" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-fuchsia-300 blur-3xl opacity-20" />
      <div className="container-pad relative">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="badge bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0">
              <Send size={16} /> Get in touch
            </div>
            <h2 className="h2 mt-5">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">grow</span> your business?
            </h2>
            <p className="section-desc">
              Contact us for a free consultation. We&apos;ll share a customized plan for your business.
            </p>

            <div className="mt-8 space-y-4">
              <InfoRow icon={<Phone size={18} />} title="Call Us" value="+91 98765 43210" />
              <InfoRow icon={<Mail size={18} />} title="Email Us" value="info@searchmetric.in" />
              <InfoRow icon={<MapPin size={18} />} title="Our Offices" value="Delhi • Mumbai • Bangalore • Hyderabad" />
            </div>
          </div>

          <div className="card card-pad shadow-2xl border-t-4 border-brand-600">
            <div className="text-2xl font-semibold text-ink-900">Get Free Consultation</div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Full Name *">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300"
                    placeholder="Enter your name"
                    aria-label="Your full name"
                  />
                </Field>

                <Field label="Email Address *">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300"
                    placeholder="Enter your email"
                    aria-label="Your email address"
                  />
                </Field>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Phone Number *">
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300"
                    placeholder="+91 98765 43210"
                    aria-label="Your phone number"
                  />
                </Field>

                <Field label="Service Interested In *">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300 bg-white"
                    aria-label="Service you're interested in"
                  >
                    <option value="">Select a service</option>
                    <option value="social-media">Social Media Management</option>
                    <option value="local-seo">Local SEO & Google Maps</option>
                    <option value="lead-ads">Lead Ads (Meta & Google)</option>
                    <option value="all">All Services</option>
                  </select>
                </Field>
              </div>

              <Field label="Your Message">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300"
                  placeholder="Tell us about your business goals..."
                  aria-label="Additional message about your business"
                />
              </Field>

              <button 
                className="btn-primary w-full" 
                type="submit"
                aria-label="Submit form to get free marketing proposal"
              >
                Get Free Proposal <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

const Field: FC<{ label: string; children: ReactNode }> = ({ label, children }) => (
  <label className="block">
    <div className="text-sm font-semibold text-slate-700 mb-2">{label}</div>
    {children}
  </label>
);

const InfoRow: FC<{ icon: ReactNode; title: string; value: string }> = ({ icon, title, value }) => (
  <div className="flex items-center gap-4">
    <div className="h-11 w-11 rounded-xl bg-brand-50 ring-1 ring-brand-100 text-brand-700 grid place-items-center">
      {icon}
    </div>
    <div>
      <div className="font-semibold text-ink-900">{title}</div>
      <div className="text-slate-600 text-sm">{value}</div>
    </div>
  </div>
);
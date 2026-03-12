"use client";

import React, { useState } from "react";
import {
  Phone, Mail, MapPin, Send, Clock, CheckCircle,
  MessageCircle, Shield, ArrowRight, Instagram,
  Facebook, Linkedin, ChevronRight, Star, Users,
  Calendar, Zap
} from "lucide-react";
import Link from "next/link";
import { contact as contactDetails } from "@/content/siteCopy";
import { contactInfo, services, faqs, teamContacts } from "@/content/contactData";

const WHATSAPP_URL = contactDetails.whatsapp;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "",
    service: "", budget: "", message: "",
    preferredContact: "phone", timeline: "1-month",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "contact-page" }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmitSuccess(true);
      setFormData({
        name: "", email: "", phone: "", company: "",
        service: "", budget: "", message: "",
        preferredContact: "phone", timeline: "1-month",
      });
      setTimeout(() => setSubmitSuccess(false), 8000);
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const SocialIcon = ({ platform }: { platform: string }) => {
    switch (platform) {
      case "instagram": return <Instagram size={20} />;
      case "facebook": return <Facebook size={20} />;
      case "linkedin": return <Linkedin size={20} />;
      default: return null;
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 md:py-28">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute top-0 -right-4 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        </div>
        <div className="container-pad relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-lg mb-6">
              <div className="flex gap-1">{[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-amber-400 text-amber-400" />)}</div>
              <span className="text-sm font-semibold">Free audit · No commitment</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Let&apos;s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-fuchsia-400 to-pink-400">Great Together</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
              Tell us about your business and we&apos;ll put together a free, no-obligation growth plan within 24 hours. No jargon, no fluff — just a real plan for real results.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { value: "24h", label: "Response Time" },
                { value: "Free", label: "Audit Available" },
                { value: "Free", label: "Consultation" },
                { value: "0", label: "Lock-in Contracts" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-300 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Action Strip */}
      <section className="bg-white border-b border-slate-100">
        <div className="container-pad py-6">
          <div className="grid md:grid-cols-3 gap-4">
            <a href={contactDetails.phoneHref} className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50 border border-blue-100 hover:border-blue-300 transition-all group">
              <div className="h-12 w-12 rounded-xl bg-blue-600 text-white grid place-items-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone size={22} />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Call us directly</div>
                <div className="font-bold text-slate-900">{contactDetails.phone}</div>
                <div className="text-xs text-blue-600">Mon – Sat, 9 AM – 7 PM</div>
              </div>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-100 hover:border-emerald-300 transition-all group">
              <div className="h-12 w-12 rounded-xl bg-emerald-600 text-white grid place-items-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle size={22} />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Chat on WhatsApp</div>
                <div className="font-bold text-slate-900">Quick Response</div>
                <div className="text-xs text-emerald-600">Usually replies in minutes</div>
              </div>
            </a>
            <a href={contactDetails.emailHref} className="flex items-center gap-4 p-4 rounded-2xl bg-purple-50 border border-purple-100 hover:border-purple-300 transition-all group">
              <div className="h-12 w-12 rounded-xl bg-purple-600 text-white grid place-items-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail size={22} />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Email us anytime</div>
                <div className="font-bold text-slate-900">{contactDetails.email}</div>
                <div className="text-xs text-purple-600">24-hour response guaranteed</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container-pad">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">
                {/* Why us */}
                <div className="card card-pad border-t-4 border-brand-600">
                  <h3 className="font-bold text-lg mb-5 text-ink-900">Why Seemanchal businesses choose us</h3>
                  <div className="space-y-4">
                    {[
                      { icon: <Zap size={16} className="text-amber-500" />, text: "Results visible in 30 days, not 6 months" },
                      { icon: <Shield size={16} className="text-emerald-500" />, text: "No lock-in contracts. Cancel anytime." },
                      { icon: <Users size={16} className="text-blue-500" />, text: "Dedicated account manager for every client" },
                      { icon: <Calendar size={16} className="text-purple-500" />, text: "Monthly reports in plain, simple language" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-lg bg-slate-50 grid place-items-center flex-shrink-0">{item.icon}</div>
                        <p className="text-slate-700 text-sm leading-snug">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social links */}
                <div className="card card-pad">
                  <h3 className="font-bold text-base mb-4 text-ink-900">Follow Us</h3>
                  <div className="flex flex-col gap-2">
                    {contactInfo.social.map((social) => (
                      <a key={social.platform} href={social.link} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:bg-slate-50 hover:border-slate-200 transition-all group">
                        <div className="h-9 w-9 rounded-lg bg-slate-100 text-slate-600 grid place-items-center group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                          <SocialIcon platform={social.icon} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-800">{social.platform}</div>
                          <div className="text-xs text-slate-500">{social.handle}</div>
                        </div>
                        <ArrowRight size={14} className="text-slate-300 ml-auto group-hover:text-brand-500 transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Address */}
                <div className="card card-pad bg-slate-50">
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-lg bg-white border border-slate-200 grid place-items-center flex-shrink-0">
                      <MapPin size={16} className="text-brand-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-ink-900 mb-1">Our Office</div>
                      <p className="text-slate-600 text-sm leading-relaxed">{contactDetails.address.full}</p>
                      <p className="text-xs text-slate-400 mt-2">{contactDetails.hours.weekdays}</p>
                    </div>
                  </div>
                </div>

                {/* Team Contacts */}
                <div className="card card-pad">
                  <h3 className="font-bold text-base mb-4 text-ink-900">Direct Contacts</h3>
                  <div className="space-y-3">
                    {teamContacts.map((tc) => (
                      <div key={tc.name} className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="font-semibold text-sm text-ink-900">{tc.name}</div>
                        <div className="text-xs text-slate-500 mb-2">{tc.description}</div>
                        <a href={`mailto:${tc.email}`} className="text-xs text-brand-600 hover:underline block">{tc.email}</a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card card-pad shadow-2xl border-t-4 border-brand-600">
                <div className="text-center mb-8">
                  <div className="badge bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0 mb-4 inline-flex items-center gap-2">
                    <Send size={14} /> Free Strategy Session
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">Book Your Free Consultation</h2>
                  <p className="text-slate-600 max-w-md mx-auto">
                    Share a bit about your business and goals. We&apos;ll come back with a real, actionable plan — completely free, no strings attached.
                  </p>
                </div>

                {submitSuccess ? (
                  <div className="text-center py-12 px-4">
                    <div className="h-20 w-20 rounded-full bg-emerald-50 text-emerald-600 grid place-items-center mx-auto mb-5">
                      <CheckCircle size={40} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-ink-900">You&apos;re all set! 🎉</h3>
                    <p className="text-slate-600 mb-6 max-w-sm mx-auto">
                      We&apos;ve received your message and sent a confirmation to your email. Expect to hear from us within 24 hours.
                    </p>
                    <div className="inline-flex items-center gap-2 text-sm text-slate-500 bg-slate-50 px-4 py-2 rounded-full">
                      <Clock size={14} />
                      While you wait, check out our <Link href="/case-studies" className="text-brand-600 hover:underline ml-1">case studies</Link>
                    </div>
                    <div className="mt-6">
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-emerald-500 text-white px-5 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-all text-sm">
                        <MessageCircle size={16} /> Chat with us on WhatsApp
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300 transition-all"
                          placeholder="Raj Mehta" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300 transition-all"
                          placeholder="raj@yourbusiness.com" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300 transition-all"
                          placeholder="+91 98765 43210" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Business Name</label>
                        <input type="text" name="company" value={formData.company} onChange={handleChange}
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300 transition-all"
                          placeholder="Your Business Name" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Service Interested In *</label>
                        <select name="service" value={formData.service} onChange={handleChange} required
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300 bg-white">
                          <option value="">Select a service</option>
                          {services.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Monthly Marketing Budget</label>
                        <select name="budget" value={formData.budget} onChange={handleChange}
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300 bg-white">
                          <option value="">Select budget range</option>
                          <option value="Under ₹20,000">Under ₹20,000</option>
                          <option value="₹20,000 – ₹50,000">₹20,000 – ₹50,000</option>
                          <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
                          <option value="₹1,00,000+">₹1,00,000+</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Contact Method</label>
                        <div className="flex gap-3 mt-1">
                          {["phone", "email", "whatsapp"].map((method) => (
                            <label key={method} className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border cursor-pointer text-sm font-medium transition-all ${formData.preferredContact === method ? "border-brand-500 bg-brand-50 text-brand-700" : "border-slate-200 text-slate-600 hover:bg-slate-50"}`}>
                              <input type="radio" name="preferredContact" value={method} checked={formData.preferredContact === method} onChange={handleChange} className="sr-only" />
                              <span className="capitalize">{method}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">When do you want to start?</label>
                        <select name="timeline" value={formData.timeline} onChange={handleChange}
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300 bg-white">
                          <option value="immediate">Right away — ASAP</option>
                          <option value="1-month">Within the next month</option>
                          <option value="1-3-months">In 1–3 months</option>
                          <option value="3-plus">Still exploring, no rush</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Tell us about your goals *</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows={5} required
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300 transition-all resize-none"
                        placeholder="What does your business do? What are your main challenges right now? What results would make you happiest in the next 6 months?" />
                    </div>

                    {submitError && (
                      <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                        <Shield size={16} /> {submitError}
                        <span className="ml-auto">
                          Or call us at <a href={contactDetails.phoneHref} className="font-bold hover:underline">{contactDetails.phone}</a>
                        </span>
                      </div>
                    )}

                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Shield size={14} className="text-emerald-500 flex-shrink-0" />
                      Your information is 100% private and will never be shared with anyone.
                    </div>

                    <button type="submit" disabled={isSubmitting}
                      className="btn-primary w-full py-4 text-base font-bold disabled:opacity-70 disabled:cursor-not-allowed">
                      {isSubmitting ? (
                        <><div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> Sending...</>
                      ) : (
                        <>Send Message & Book Free Call <ArrowRight size={20} /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="container-pad">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="badge bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0 mb-4">Quick Answers</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions We Hear All the Time</h2>
            <p className="text-lg text-slate-600">Straight answers — no sales pitch, no jargon.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card card-pad">
                <button onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="flex items-center justify-between w-full text-left">
                  <h3 className="font-bold text-lg text-ink-900 pr-4">{faq.question}</h3>
                  <ChevronRight size={20} className={`text-slate-400 transition-transform duration-300 flex-shrink-0 ${expandedFaq === index ? "rotate-90" : ""}`} />
                </button>
                {expandedFaq === index && (
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import React from "react";

export default function PrivacyPage() {
  return (
    <main className="container-pad py-16 min-h-[60vh]">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-4 text-brand-700">Privacy Policy</h1>
        <p className="text-slate-700 mb-6">
          We value your privacy. This page explains how we handle your information at SearchMetric.in.
        </p>
        <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
          <li>We do not sell or share your data with third parties.</li>
          <li>Any information you submit via forms is used only to respond to your inquiry.</li>
          <li>We use cookies for analytics and site improvement only.</li>
        </ul>
        <div className="text-slate-500 text-sm">
          For questions, email <a href="mailto:info@searchmetric.in" className="text-brand-600 underline">info@searchmetric.in</a>.
        </div>
      </div>
    </main>
  );
}

import React from "react";

export default function TermsPage() {
  return (
    <main className="container-pad py-16 min-h-[60vh]">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-4 text-brand-700">Terms &amp; Conditions</h1>
        <p className="text-slate-700 mb-6">
          By using SearchMetric.in, you agree to the following terms:
        </p>
        <ul className="list-decimal pl-6 text-slate-600 space-y-2 mb-6">
          <li>All content is for informational purposes only.</li>
          <li>Do not misuse or copy our content without permission.</li>
          <li>We reserve the right to update these terms at any time.</li>
        </ul>
        <div className="text-slate-500 text-sm">
          For questions, email <a href="mailto:info@searchmetric.in" className="text-brand-600 underline">info@searchmetric.in</a>.
        </div>
      </div>
    </main>
  );
}

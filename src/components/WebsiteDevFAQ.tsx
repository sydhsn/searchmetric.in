"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

export type FAQItem = {
  question: string;
  answer: string;
};

interface Props {
  faqs: FAQItem[];
}

const WebsiteDevFAQ: React.FC<Props> = ({ faqs }) => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <div key={idx} className="border rounded-lg overflow-hidden">
          <button
            onClick={() => setExpanded(expanded === idx ? null : idx)}
            className="w-full bg-white p-6 flex justify-between items-center hover:bg-slate-50 transition"
          >
            <span className="font-bold text-lg text-left">{faq.question}</span>
            <ChevronRight
              size={24}
              className={`flex-shrink-0 transition ${
                expanded === idx ? "rotate-90" : ""
              }`}
            />
          </button>
          {expanded === idx && (
            <div className="bg-slate-50 p-6 border-t">
              <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WebsiteDevFAQ;

"use client";

import { motion } from "framer-motion";
import { FiClock } from "react-icons/fi";

import type { ProcessStep } from "@/types/home";

type ProcessSectionProps = {
  process: ProcessStep[];
};

export function ProcessSection({ process }: ProcessSectionProps) {
  return (
    <section id="process" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our 4-Phase Process</h2>
          <p className="text-xl text-gray-600">Structured approach for consistent, scalable results</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-0.5 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 hidden lg:block" />

          <div className="grid lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-4 border-yellow-500 hidden lg:block z-10" />

                <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow h-full lg:mt-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-yellow-600" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="text-sm text-gray-500 flex items-center gap-1">
                    <FiClock className="w-4 h-4" />
                    {step.duration}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

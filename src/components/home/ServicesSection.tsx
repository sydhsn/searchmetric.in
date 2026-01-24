"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheck, FiTrendingUp } from "react-icons/fi";

import type { ServiceCard } from "@/types/home";

type ServicesSectionProps = {
  services: ServiceCard[];
};

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What All We Do
            <span className="block text-3xl text-gray-600 mt-2">We don&apos;t just post, we create impact</span>
          </h2>
          <p className="text-xl text-gray-600">Comprehensive social media solutions for modern brands</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden">
                <div className="text-6xl font-bold text-gray-100 absolute top-4 right-4">0{index + 1}</div>

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">What&apos;s Included</h4>
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center">
                          <FiCheck className="w-3 h-3 text-yellow-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Typical Results</h4>
                    <div className="space-y-2">
                      {service.results.map((result) => (
                        <div key={result} className="flex items-center justify-between">
                          <span className="text-gray-600">{result}</span>
                          <FiTrendingUp className="w-4 h-4 text-green-500" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="mt-8 flex items-center gap-2 text-yellow-600 font-semibold group/btn">
                    Learn More
                    <FiArrowUpRight className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

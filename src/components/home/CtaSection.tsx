"use client";

import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Social Presence?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Let&apos;s create something extraordinary together. Schedule a free strategy session.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-full font-semibold shadow-lg shadow-yellow-500/25 hover:shadow-xl hover:shadow-yellow-500/30 transition-all"
            >
              Book Free Consultation
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border-2 border-white/20 hover:border-yellow-400 hover:text-yellow-400 transition-colors"
            >
              View Our Work
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

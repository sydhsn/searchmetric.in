"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiPlay, FiTrendingUp } from "react-icons/fi";

import type { HeroContent, PortfolioItem } from "@/types/home";

const CTA_BUTTON_STYLES = "px-8 py-4 rounded-full font-semibold flex items-center gap-2";

type HeroSectionProps = {
  hero: HeroContent;
  portfolio: PortfolioItem[];
  backgroundImage: string;
};

export function HeroSection({ hero, portfolio, backgroundImage }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-5">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }} />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-white"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              {hero.eyebrow}
            </span>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              {hero.title}
              <span className="block text-yellow-400">{hero.titleHighlight}</span>
            </h1>

            <p className="text-xl text-gray-200 leading-relaxed">{hero.subtitle}</p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
              {hero.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-yellow-400/20 mb-3">
                    <stat.icon className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div className="text-2xl font-bold text-yellow-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${CTA_BUTTON_STYLES} bg-gradient-to-r from-yellow-500 to-amber-600 text-white shadow-lg shadow-yellow-500/25 hover:shadow-xl hover:shadow-yellow-500/30 transition-all`}
              >
                Start Your Project
                <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${CTA_BUTTON_STYLES} bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 hover:border-yellow-400 hover:text-yellow-400 transition-colors`}
              >
                <FiPlay />
                Watch Showreel
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-2xl overflow-hidden">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">Live Campaign Performance</h3>
                    <p className="text-sm text-gray-300">Real-time metrics from active campaigns</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-xs font-semibold">Live</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white">89%</div>
                    <div className="text-xs text-gray-300">Engagement Rate</div>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      <FiTrendingUp className="w-3 h-3 text-green-400" />
                      <span className="text-xs text-green-400">+12%</span>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white">2.1M</div>
                    <div className="text-xs text-gray-300">Total Reach</div>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      <FiTrendingUp className="w-3 h-3 text-green-400" />
                      <span className="text-xs text-green-400">+25%</span>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white">4.2x</div>
                    <div className="text-xs text-gray-300">ROAS</div>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      <FiTrendingUp className="w-3 h-3 text-green-400" />
                      <span className="text-xs text-green-400">+0.8x</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {portfolio.slice(0, 2).map((project, idx) => (
                    <div key={project.brand + idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-bold text-white">{project.brand}</h4>
                          <p className="text-sm text-gray-300">{project.category}</p>
                        </div>
                        <div className="flex gap-1">
                          {project.services.slice(0, 2).map((service, sIdx) => (
                            <span key={service + sIdx} className="px-2 py-1 bg-yellow-400/10 text-yellow-400 text-xs rounded">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {project.results.map((result, rIdx) => (
                          <div key={result.label + rIdx} className="text-center">
                            <div className="text-lg font-bold text-yellow-400">{result.metric}</div>
                            <div className="text-xs text-gray-400">{result.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

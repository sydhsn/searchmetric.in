import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import type { ClientLogo } from "@/types/home";

type ClientsSectionProps = {
  clients?: ClientLogo[];
};

const SIMPLE_LOGOS = [
  {
    id: "1",
    name: "Google",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    category: "Technology"
  },
  {
    id: "2",
    name: "Microsoft",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    category: "Technology"
  },
  {
    id: "3",
    name: "Apple",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    category: "Technology"
  },
  {
    id: "4",
    name: "Amazon",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    category: "E-commerce"
  },
  {
    id: "5",
    name: "Meta",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    category: "Social Media"
  },
  {
    id: "6",
    name: "Netflix",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    category: "Entertainment"
  },
  {
    id: "7",
    name: "Adobe",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adobe_Corporate_logo.svg",
    category: "Design"
  },
  {
    id: "8",
    name: "Airbnb",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
    category: "Hospitality"
  },
  {
    id: "9",
    name: "Slack",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
    category: "Productivity"
  },
  {
    id: "10",
    name: "Spotify",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    category: "Entertainment"
  },
  {
    id: "11",
    name: "Stripe",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
    category: "Payments"
  },
  {
    id: "12",
    name: "Figma",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    category: "Design"
  },
];

export function ClientsSection({ clients = SIMPLE_LOGOS }: ClientsSectionProps) {
  // State to control marquee animation
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  
  // Duplicate clients for seamless loop
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Simple Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
            Trusted By
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Industry Leaders
          </h2>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Animated Marquee */}
          <motion.div
            className="flex gap-8 md:gap-12"
            animate={{ 
              x: [0, -2000],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
            onMouseEnter={() => setIsMarqueePaused(true)}
            onMouseLeave={() => setIsMarqueePaused(false)}
            style={{ 
              animationPlayState: isMarqueePaused ? 'paused' : 'running'
            }}
          >
            {duplicatedClients.map((client, idx) => (
              <motion.div
                key={`${client.id}-${idx}`}
                whileHover={{ 
                  scale: 1.15,
                  transition: { type: "spring", stiffness: 400, damping: 20 }
                }}
                className="flex-shrink-0"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMarqueePaused(!isMarqueePaused);
                }}
              >
                <div 
                  className="relative w-32 h-20 md:w-40 md:h-24 bg-white rounded-xl border border-gray-100 hover:border-gray-200 transition-colors duration-300 cursor-pointer overflow-hidden"
                >
                  {client.image && (
                    <div className="absolute inset-2 md:inset-3 rounded-lg overflow-hidden">
                      <Image
                        src={client.image}
                        alt={client.name}
                        fill
                        sizes="(max-width: 768px) 128px, 160px"
                        className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        style={{ 
                          width: '100%',
                          height: '100%'
                        }}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { FiFacebook, FiInstagram, FiLinkedin, FiMapPin, FiMail, FiPhone, FiTwitter, FiYoutube } from "react-icons/fi";

import { contactInfo, socialLinks } from "@/constants";
import type { Brand } from "@/types/home";

type FooterProps = {
  brand: Brand;
};

export function Footer({ brand }: FooterProps) {
  const socials = [
    { Icon: FiInstagram, href: socialLinks.instagram },
    { Icon: FiFacebook, href: socialLinks.facebook },
    { Icon: FiLinkedin, href: socialLinks.linkedin },
    { Icon: FiTwitter, href: socialLinks.twitter },
    { Icon: FiYoutube, href: socialLinks.youtube }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-lg font-bold text-white">{brand.name}</span>
            </div>
            <p className="text-sm">{brand.description}</p>
            <div className="flex gap-4 pt-2">
              {socials.map(({ Icon, href }, idx) => (
                <a
                  key={`${Icon.name}-${idx}`}
                  href={href}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Our Work</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Process</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">About Us</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Social Media Management</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Content Creation</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Influencer Marketing</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Performance Ads</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">SEO Services</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FiMail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone className="w-4 h-4" />
                <span>{contactInfo.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <FiMapPin className="w-4 h-4" />
                <span>{contactInfo.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2024 {brand.name}. All rights reserved. | Award-winning Social Media Marketing Agency
          </p>
          <div className="flex justify-center gap-6 mt-4 text-xs text-gray-600">
            <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400">Terms of Service</a>
            <a href="#" className="hover:text-yellow-400">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

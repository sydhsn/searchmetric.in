"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiEye,
  FiFacebook,
  FiHeart,
  FiInstagram,
  FiLinkedin,
  FiMessageCircle,
  FiShare2,
  FiTrendingUp
} from "react-icons/fi";

import type { SocialPost, SocialShowcase } from "@/types/home";

type SocialShowcaseSectionProps = {
  socialShowcases: SocialShowcase;
};

type SocialPlatformCardProps = {
  post: SocialPost;
};

function SocialPlatformCard({ post }: SocialPlatformCardProps) {
  const platformIcon = () => {
    switch (post.platform) {
      case "instagram":
        return <FiInstagram className="w-4 h-4" />;
      case "facebook":
        return <FiFacebook className="w-4 h-4" />;
      case "linkedin":
        return <FiLinkedin className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const platformColor = () => {
    switch (post.platform) {
      case "instagram":
        return "bg-gradient-to-br from-purple-500 to-pink-500";
      case "facebook":
        return "bg-blue-600";
      case "linkedin":
        return "bg-blue-700";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
      onClick={() => window.open(post.redirectUrl, "_blank")}
    >
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-full ${platformColor()} flex items-center justify-center`}>
            {platformIcon()}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{post.username}</p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">{post.postType}</span>
              <span className="text-xs text-gray-400">•</span>
              <span className="text-xs text-gray-500">{post.date}</span>
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <FiShare2 className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4 grid grid-cols-2 gap-3 border-b border-gray-100">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Likes</span>
            <FiHeart className="w-3 h-3 text-red-500" />
          </div>
          <p className="font-bold text-gray-900">{post.engagement.likes}</p>
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Comments</span>
            <FiMessageCircle className="w-3 h-3 text-blue-500" />
          </div>
          <p className="font-bold text-gray-900">{post.engagement.comments}</p>
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Shares</span>
            <FiShare2 className="w-3 h-3 text-green-500" />
          </div>
          <p className="font-bold text-gray-900">{post.engagement.shares}</p>
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Reach</span>
            <FiEye className="w-3 h-3 text-purple-500" />
          </div>
          <p className="font-bold text-gray-900">{post.metrics.reach}</p>
        </div>
      </div>

      <div className="p-4">
        <p className="text-gray-700 mb-3 line-clamp-2">{post.caption}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.hashtags.map((tag) => (
            <span key={tag} className="text-xs text-blue-600 hover:text-blue-800">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <FiTrendingUp className="w-3 h-3 text-green-500" />
              <span>{post.metrics.engagementRate} engagement</span>
            </div>
            <div className="flex items-center gap-1">
              <FiEye className="w-3 h-3 text-blue-500" />
              <span>{post.metrics.impressions} impressions</span>
            </div>
          </div>
          <button className="text-blue-600 hover:text-blue-800 font-medium">View Analytics →</button>
        </div>
      </div>
    </motion.div>
  );
}

export function SocialShowcaseSection({ socialShowcases }: SocialShowcaseSectionProps) {
  const [socialPlatform, setSocialPlatform] = useState<SocialPost["platform"]>("instagram");

  return (
    <section id="social-showcase" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Live Social Media Performance
            <span className="block text-3xl text-gray-600 mt-2">Real posts, real engagement, real results</span>
          </h2>
          <p className="text-xl text-gray-600">
            See how our content performs across different platforms with live metrics
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-xl bg-gray-100 p-1">
            {(["instagram", "facebook", "linkedin"] as const).map((platform) => (
              <button
                key={platform}
                onClick={() => setSocialPlatform(platform)}
                className={`px-6 py-3 rounded-lg font-medium text-sm capitalize transition-all ${
                  socialPlatform === platform ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <div className="flex items-center gap-2">
                  {platform === "instagram" && <FiInstagram className="w-4 h-4" />}
                  {platform === "facebook" && <FiFacebook className="w-4 h-4" />}
                  {platform === "linkedin" && <FiLinkedin className="w-4 h-4" />}
                  {platform}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialShowcases[socialPlatform].map((post) => (
            <SocialPlatformCard key={post.id} post={post} />
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-3xl p-8 border border-yellow-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Platform Performance Comparison</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(socialShowcases).map(([platform, posts]) => {
              const avgEngagement =
                posts.reduce((acc, post) => acc + (parseFloat(post.metrics.engagementRate) || 0), 0) / posts.length;

              const totalReach = posts.reduce((acc, post) => {
                const reach = post.metrics.reach.includes("M")
                  ? parseFloat(post.metrics.reach) * 1000000
                  : parseFloat(post.metrics.reach.replace("K", "")) * 1000;
                return acc + (Number.isNaN(reach) ? 0 : reach);
              }, 0);

              return (
                <div key={platform} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm mb-4">
                    {platform === "instagram" && <FiInstagram className="w-8 h-8 text-purple-600" />}
                    {platform === "facebook" && <FiFacebook className="w-8 h-8 text-blue-600" />}
                    {platform === "linkedin" && <FiLinkedin className="w-8 h-8 text-blue-700" />}
                  </div>
                  <h4 className="font-bold text-gray-900 capitalize mb-2">{platform}</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{avgEngagement.toFixed(1)}%</div>
                      <div className="text-sm text-gray-600">Avg. Engagement</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-gray-900">
                        {totalReach >= 1000000 ? `${(totalReach / 1000000).toFixed(1)}M` : `${(totalReach / 1000).toFixed(0)}K`}
                      </div>
                      <div className="text-sm text-gray-600">Total Reach</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

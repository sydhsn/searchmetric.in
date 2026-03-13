/**
 * IndexNow API Route — /api/indexnow
 * Call this after deploying new content to instantly notify Bing, Yandex, and other
 * IndexNow-supported search engines to crawl your new/updated URLs.
 *
 * Usage: POST https://searchmetric.in/api/indexnow
 * (or trigger manually from Vercel deploy hooks)
 *
 * IndexNow key must be set in env: INDEXNOW_KEY
 * The same key value must be in public/[key].txt
 */

import { NextResponse } from "next/server";

const SITE_URL = "https://searchmetric.in";
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "REPLACE_WITH_YOUR_INDEXNOW_KEY";

const urlsToIndex = [
  `${SITE_URL}`,
  `${SITE_URL}/services`,
  `${SITE_URL}/services/local-seo`,
  `${SITE_URL}/services/local-seo/katihar`,
  `${SITE_URL}/services/local-seo/purnea`,
  `${SITE_URL}/services/local-seo/kishanganj`,
  `${SITE_URL}/services/local-seo/barsoi`,
  `${SITE_URL}/services/local-seo/baisi`,
  `${SITE_URL}/services/local-seo/dalkhola`,
  `${SITE_URL}/services/local-seo/siliguri`,
  `${SITE_URL}/services/social-media-management`,
  `${SITE_URL}/services/lead-ads`,
  `${SITE_URL}/services/website-development`,
  `${SITE_URL}/about`,
  `${SITE_URL}/contact`,
  `${SITE_URL}/free-audit`,
  `${SITE_URL}/blog`,
  `${SITE_URL}/blog/google-maps-seo-2026`,
  `${SITE_URL}/blog/instagram-lead-ads-india`,
  `${SITE_URL}/blog/google-my-business-optimization`,
  `${SITE_URL}/blog/best-digital-marketing-agency-katihar`,
  `${SITE_URL}/blog/seemanchal-businesses-rank-google-2026`,
  `${SITE_URL}/blog/katihar-shop-not-showing-google-maps`,
  `${SITE_URL}/blog/facebook-vs-instagram-india`,
  `${SITE_URL}/blog/content-trends-india-2026`,
  `${SITE_URL}/blog/video-content-indian-audience`,
];

export async function POST() {
  try {
    // Submit to Bing IndexNow
    const bingResponse = await fetch("https://www.bing.com/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: "searchmetric.in",
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: urlsToIndex,
      }),
    });

    // Submit to IndexNow (covers Yandex, Seznam, Naver, Yep)
    const indexNowResponse = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: "searchmetric.in",
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: urlsToIndex,
      }),
    });

    return NextResponse.json({
      success: true,
      bing: bingResponse.status,
      indexNow: indexNowResponse.status,
      urlsSubmitted: urlsToIndex.length,
      message: `Submitted ${urlsToIndex.length} URLs to Bing and IndexNow`,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    info: "POST to this endpoint to submit all URLs to Bing IndexNow",
    urlCount: urlsToIndex.length,
    urls: urlsToIndex,
  });
}

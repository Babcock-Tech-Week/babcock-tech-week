import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      // 2026 edition moved to the /2026 archive (literal 301, not permanent: true which emits 308).
      { source: "/team", destination: "/2026/team", statusCode: 301 },
      { source: "/sessions", destination: "/2026/sessions", statusCode: 301 },
      {
        source: "/news/:slug",
        destination: "/2026/news/:slug",
        statusCode: 301,
      },
      // TODO: point /calendar and /hackathon at real 2027 destinations.
      { source: "/calendar", destination: "/contact", statusCode: 301 },
      { source: "/hackathon", destination: "/contact", statusCode: 301 },
      // Archive: the 2026 calendar and hackathon form.
      {
        source: "/2026/calendar",
        destination: "https://lu.ma/btw26",
        permanent: false,
      },
      {
        source: "/2026/hackathon",
        destination:
          "https://docs.google.com/forms/d/1eG0InqhmCQQBCGAGVDXqhGX5ONaNkERglKmrhiSVqjk/edit?ts=69c06368",
        permanent: false,
      },
      {
        source: "/hackathon/terms",
        destination:
          "https://docs.google.com/document/d/1hMa_9QZhSNA7FV-pRj1HlI_ntcLYnQxm/edit",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

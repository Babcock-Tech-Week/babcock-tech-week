import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      // TODO: point /calendar at the 2027 schedule once it exists.
      {
        source: "/calendar",
        destination: "/contact",
        permanent: false,
      },
      // TODO: point /hackathon at the 2027 hackathon page/form once it exists.
      {
        source: "/hackathon",
        destination: "/contact",
        permanent: false,
      },
      // 2026 archive
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
      { source: "/news/:slug", destination: "/2026/news/:slug", statusCode: 301 },
      { source: "/sessions", destination: "/2026/sessions", statusCode: 301 },
      { source: "/team", destination: "/2026/team", statusCode: 301 },
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

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

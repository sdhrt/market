/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hs3r7loavpmg3p2k.public.blob.vercel-storage.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;

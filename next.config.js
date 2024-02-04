/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/RezaZeraatkar/my-blog-posts/main/images/**",
      },
    ],
  },
};

module.exports = nextConfig;

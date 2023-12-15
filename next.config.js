/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  modularizeImports: {
    "@mui/icons-material/?(((\\w*)?/?)*)": {
      transform: "@mui/icons-material/{{ matches.[1] }}/{{member}}",
    },
    "react-icons/((\\w*)?/?)": {
      transform: "react-icons/{{ matches.[1] }}/{{member}}",
    },
  },
};

module.exports = nextConfig;

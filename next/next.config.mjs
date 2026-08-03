/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  allowedDevOrigins: ["192.168.1.5", "localhost:3000"],
};

export default nextConfig;

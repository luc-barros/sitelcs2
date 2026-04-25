/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // Isso gera a pasta 'out' com o HTML
  images: {
    unoptimized: true,   // Necessário para o GitHub Pages
  },
};

export default nextConfig;
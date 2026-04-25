/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/sitelcs2', // ADICIONE ISSO: é o nome do seu repositório
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
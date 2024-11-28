/** @type {import("next").NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
                pathname: '/**', // Permite todas las rutas en este dominio
            },
        ],
    },
};

export default nextConfig;

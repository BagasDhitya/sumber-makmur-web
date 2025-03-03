/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['example.com', 'i.pinimg.com'], // Ganti dengan domain gambar yang diizinkan
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.i.pinimg.com', // Mengizinkan semua subdomain dari example.com
            },
        ],
    },
}

module.exports = nextConfig

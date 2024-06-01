/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	reactStrictMode: true,
	basePath: process.env.BASE_PATH,
	images: {
		unoptimized: true,
	},
};

export default nextConfig;

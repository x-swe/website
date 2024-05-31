/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	reactStrictMode: true,
	basePath:
		process.env.NODE_ENV !== "production"
			? ""
			: "/Software-Engineering-Community",
	images: {
		unoptimized: true,
	},
};

export default nextConfig;

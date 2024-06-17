import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { Libre_Franklin } from "next/font/google";
import { Rubik } from "next/font/google";
import { ThemeProvider } from "./providers/themeProvider";
import Footer from "@/components/footer";
import dynamic from "next/dynamic";

const Navi = dynamic(() => import("@/components/navi"), { ssr: false });

const libre_franklin = Libre_Franklin({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-libre_franklin",
});
const rubik = Rubik({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-rubik",
});

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const baseUrl =
	"https://odedindi.github.io/Software-Engineering-Community";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
		{ media: "(prefers-color-scheme: dark)", color: "#020817" },
	],
};

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	alternates: {
		canonical: "/",
	},
	title: "Software Engineering on X",
	description: "The best software engineering community on the planet!",
	keywords: ["software", "engineering", "software engineering community"],
	icons: [{ rel: "icon", url: "/assets/logo_standard.svg" }],
	creator: "Oded Winberger",
	openGraph: {
		siteName: "Software Engineering on X",
		title: "Software Engineering on X",
		description: "The best software engineering community on the planet!",
		url: baseUrl,
		type: "website",
		images: [{ url: "/assets/logo_standard.svg" }],
	},
	twitter: {
		card: "summary_large_image",
		title: "Software Engineering on X",
		description: "The best software engineering community on the planet!",
		creator: "Oded Winberger",
		images: [`${baseUrl}/assets/logo_standard.svg`], // Must be an absolute URL
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning className="overflow-x-hidden">
			<body
				className={cn(
					"flex flex-col min-h-[100dvh] bg-background antialiased overflow-x-clip",
					libre_franklin.variable,
					rubik.variable,
					fontSans.variable,
				)}
			>
				<ThemeProvider>
					<Navi />
					<main className="flex-1 min-w-[400px] flex flex-col">{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}

import type { Metadata } from "next";
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

export const metadata: Metadata = {
	title: "Software Engineering on X",
	description: "The best software engineering community on the planet!",
	keywords: ["software", "engineering", "software engineering community"],
	icons: [{ rel: "icon", url: "assets/logo_standard.svg" }],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"flex flex-col min-h-[100dvh] bg-background antialiased",
					libre_franklin.variable,
					rubik.variable,
					fontSans.variable,
				)}
			>
				<ThemeProvider>
					<Navi />
					<main className="flex-1 min-w-[400px]">{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}

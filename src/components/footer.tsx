import Link from "next/link";
import type { FC, SVGProps } from "react";
import { githubLink, xLink } from "@/app/config";

import dynamic from "next/dynamic";

const Logo = dynamic(() => import("./logo"), { ssr: false });
const ModeToggle = dynamic(() => import("./modeToggle"), {
	ssr: false,
});

const Footer: FC = () => (
	<footer className="flex flex-row justify-center gap-2 py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
		<div className="flex items-center gap-2">
			<Link
				className="flex items-center gap-2 text-lg font-semibold sm:text-base"
				href="/"
			>
				<Logo />
			</Link>
			<Link
				className="text-xs hover:underline underline-offset-4"
				href={xLink}
				target="_blank"
				rel="noopener noreferrer"
			>
				<XIcon className="w-6 h-6" />
			</Link>
			<Link
				className="text-xs hover:underline underline-offset-4"
				href={githubLink}
				target="_blank"
				rel="noopener noreferrer"
			>
				<GithubIcon className="w-6 h-6" />
			</Link>

			<ModeToggle />
		</div>
	</footer>
);

export default Footer;

const GithubIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<title>GitHub</title>
		<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
		<path d="M9 18c-4.51 2-5-2-7-2" />
	</svg>
);

const XIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<title>X</title>
		<path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
	</svg>
);

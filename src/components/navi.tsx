"use client";

import type { FC } from "react";
import { usePathname } from "next/navigation";
import { githubLink, xLink } from "@/app/config";
import Link from "next/link";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import { Home } from "lucide-react";

const Logo = dynamic(() => import("./logo"), { ssr: false });

const linkClassName =
	"transition-text duration-200 text-gray-500 dark:text-gray-400 hover:text-inherit dark:hover:text-inherit";
const selectedLinkClassName = "select-none text-inherit dark:text-inherit";

const Navi: FC = () => {
	const pathname = usePathname();

	return (
		<header className="sticky top-0 z-50 bg-background opacity-90 flex items-center h-16 px-4 border-b shrink-0 md:px-6">
			<nav className="font-medium flex flex-row items-center gap-5 text-sm lg:gap-6">
				<Logo />
				<Link
					href="/"
					title="Home"
					className={cn(
						linkClassName,
						pathname === "/" && selectedLinkClassName,
					)}
				>
					<Home className="w-4 h-4" />
				</Link>
				<Link
					className={cn(
						linkClassName,
						pathname === "/contact" && selectedLinkClassName,
					)}
					href="/contact"
					title="Contact"
				>
					Contact
				</Link>
				<Link
					className={linkClassName}
					href={xLink}
					target="_blank"
					rel="noopener noreferrer"
				>
					Community
				</Link>
				<Link
					className={linkClassName}
					href={githubLink}
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</Link>
			</nav>
		</header>
	);
};

export default Navi;

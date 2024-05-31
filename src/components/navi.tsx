"use client";

import type { FC } from "react";
import { usePathname } from "next/navigation";
import { githubLink, xLink } from "@/app/config";
import Link from "next/link";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const Logo = dynamic(() => import("./logo"), { ssr: false });

const Navi: FC = () => {
	const pathname = usePathname();

	return (
		<header className="sticky top-0 z-50 bg-background opacity-90 flex items-center h-16 px-4 border-b shrink-0 md:px-6">
			<Link
				className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4"
				href="/"
			>
				<Logo />
			</Link>
			<nav className="font-medium flex flex-row items-center gap-5 text-sm lg:gap-6">
				<Link
					className="transition-text duration-200 text-gray-500 dark:text-gray-400 hover:text-inherit dark:hover:text-inherit"
					href={xLink}
					target="_blank"
					rel="noopener noreferrer"
				>
					Community
				</Link>
				<Link
					className="transition-text duration-200 text-gray-500 dark:text-gray-400 hover:text-inherit dark:hover:text-inherit"
					href={githubLink}
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</Link>
				<Link
					className={cn(
						"transition-text duration-200 text-gray-500 dark:text-gray-400 hover:text-inherit dark:hover:text-inherit",
						pathname === "/contact" &&
							"font-bold select-none text-inherit dark:text-inherit",
					)}
					href="/contact"
				>
					Contact
				</Link>
			</nav>
		</header>
	);
};

export default Navi;

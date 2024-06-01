import { cn } from "@/lib/utils";
import type { FC, PropsWithChildren } from "react";

interface SectionWelcomProps {
	chip: string;
	title: string;
	text: string;
	dark?: boolean;
}

const Section: FC<PropsWithChildren<SectionWelcomProps>> = ({
	children,
	chip,
	dark,
	title,
	text,
}) => (
	<section
		className={cn(
			"w-full py-12 md:py-24 lg:py-32 px-12",
			dark && "bg-gray-100 dark:bg-gray-800",
		)}
	>
		<div className="container space-y-12 px-4 md:px-6">
			<div className="flex flex-col items-center justify-center space-y-4 text-center">
				<div className="space-y-2">
					<div
						className={cn(
							"inline-block rounded-lg px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800",
							dark && " bg-background dark:bg-background",
						)}
					>
						{chip}
					</div>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
						{title}
					</h2>
					<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
						{text}
					</p>
				</div>
			</div>
			{children}
		</div>
	</section>
);

export default Section;

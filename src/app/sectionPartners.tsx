import type { FC } from "react";
import { Card, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface Partner {
	name: string;
	link: string;
	image: string;
}

const partners: Partner[] = [
	{
		name: "Vercel",
		link: "Cloud Platform",
		image: "https://i.pravatar.cc/300",
	},
	{
		name: "Radix UI",
		link: "UI Library",
		image: "https://i.pravatar.cc/300",
	},
	{
		name: "Tailwind CSS",
		link: "CSS Framework",
		image: "https://i.pravatar.cc/300",
	},
];

const SectionPartners: FC = () => (
	<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
		<div className="container space-y-12 px-4 md:px-6">
			<div className="flex flex-col items-center justify-center space-y-4 text-center">
				<div className="space-y-2">
					<div className="inline-block rounded-lg  px-3 py-1 text-sm bg-background">
						Partners
					</div>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
						Our Community Partners
					</h2>
					<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
						These organizations have been instrumental in supporting and growing
						our community.
					</p>
				</div>
			</div>
			<div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:max-w-4xl md:max-w-5xl">
				{partners.map((partner, i) => (
					<PartnerCard key={i} {...partner} />
				))}
			</div>
		</div>
	</section>
);

export default SectionPartners;

const PartnerCard: FC<Partner> = ({ name, link, image }) => (
	<Card className="rounded-lg py-2 shadow-sm hover:shadow-xl transition duration-200 ease-in-out bg-transparent border-0 dark:border-2 hover:border-gray-700">
		<Link
			href={link}
			className="flex flex-col items-center gap-4"
			prefetch={false}
			target="_blank"
			rel="noopener noreferrer"
		>
			<img
				src={image}
				width="80"
				height="80"
				className="rounded-full"
				alt="Logo"
			/>
			<div className="grid gap-1">
				<CardTitle className="text-lg font-semibold">{name}</CardTitle>
			</div>
		</Link>
	</Card>
);

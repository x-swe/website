import type { FC } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface Moderator {
	name: string;
	link: string;
	image: string;
}

const communityModerators: Moderator[] = [
	{
		name: "Jakie Nackos",
		link: "#",
		image: "assets/mock_images/jakie-nackos-IF9TK5Uy-KI-unsplash.jpg",
	},
	{
		name: "Jonas Kakaroto",
		link: "#",
		image: "assets/mock_images/jonas-kakaroto-KIPqvvTOC1s-unsplash.jpg",
	},
	{
		name: "Logan Weaver",
		link: "#",
		image: "assets/mock_images/logan-weaver-lgnwvr-p0B7ueoZz8E-unsplash.jpg",
	},
	{
		name: "Stephanie Liverani",
		link: "#",
		image: "assets/mock_images/stephanie-liverani-Zz5LQe-VSMY-unsplash.jpg",
	},
];

const SectionModerators: FC = () => (
	<section className="w-full py-12 md:py-24 lg:py-32  px-12">
		<div className="container space-y-12 px-4 md:px-6">
			<div className="flex flex-col items-center justify-center space-y-4 text-center">
				<div className="space-y-2">
					<div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
						Community
					</div>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
						Meet Our Community Moderators
					</h2>
					<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
						These are the dedicated individuals who help keep our community
						thriving and inclusive.
					</p>
				</div>
			</div>
			<div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
				{communityModerators.map((moderator, i) => (
					<ModeratorCard key={i} {...moderator} />
				))}
			</div>
		</div>
	</section>
);

export default SectionModerators;

const ModeratorCard: FC<Moderator> = ({ name, link, image }) => (
	<Card className="cursor-pointer group relative m-0 flex h-48 w-full rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
		<Link
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			prefetch={false}
			className="z-10 h-full w-full overflow-hidden rounded-xl border opacity-80 transition duration-200 ease-in-out group-hover:opacity-100"
		>
			<img
				src="assets/paul-volkmer-qVotvbsuM_c-unsplash.jpg"
				className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-200 group-hover:scale-125"
				alt=""
			/>
			<CardHeader className="absolute bottom-0 z-20 m-0 ps-4 flex items-center w-full">
				<img
					alt={name}
					className="rounded-full w-36 h-36 mb-2 object-cover"
					src={image}
				/>

				<CardTitle className="text-xl font-bold text-white grid gap-1 transition duration-200 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 w-full">
					{name}
				</CardTitle>
			</CardHeader>
		</Link>
	</Card>
);

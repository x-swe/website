import type { FC } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export interface Moderator {
	name: string;
	link: string;
	image: string;
}

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

export default ModeratorCard;

import type { FC } from "react";
import { Card, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export interface Partner {
	name: string;
	link: string;
	image: string;
}

const PartnerCard: FC<Partner> = ({ name, link, image }) => (
	<Card className="rounded-lg py-2 shadow-sm hover:shadow-xl transition duration-200 ease-in-out bg-transparent border-0 dark:border-2 hover:border-gray-700">
		<Link
			href={link}
			className="flex flex-col items-center h-full justify-between gap-4"
			prefetch={false}
			target="_blank"
			rel="noopener noreferrer"
		>
			<img src={image} className="max-h-20 p-1" alt="Logo" />

			<CardTitle className="text-lg font-semibold">{name}</CardTitle>
		</Link>
	</Card>
);

export default PartnerCard;

import type { NextPage } from "next";
import Section from "@/components/section";
import PartnerCard, { type Partner } from "@/components/partnerCard";
import ModeratorCard, { Moderator } from "@/components/moderatorCard";

const moderators: Moderator[] = [
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

const partners: Partner[] = [
	{
		name: "Vercel",
		link: "https://vercel.com",
		image: "assets/mock_images/Vercel_logo.png",
	},
	{
		name: "Shadcn UI",
		link: "https://ui.shadcn.com/",
		image: "assets/mock_images/shadcn_logo.png",
	},
	{
		name: "Tailwind CSS",
		link: "https://tailwindcss.com/",
		image: "assets/mock_images/Tailwind_CSS_Logo.png",
	},
];

const Home: NextPage = () => (
	<>
		<Section
			chip="Welcome to our Software Engineering Community"
			title="Connecting Developers, Sharing Knowledge"
			text="Our community is a vibrant hub where software engineers come
			together to learn, collaborate, and grow. Join us on this exciting
			journey!"
		/>

		<Section
			chip="Empowering the Next Generation of Developers"
			title="Building a Brighter Future, Together"
			text="Our community is dedicated to fostering an inclusive and supportive
			environment where developers can thrive. Join us as we shape the
			future of software engineering."
			dark
		/>

		<Section
			chip="Community"
			title="Meet Our Community Moderators"
			text="These are the dedicated individuals who help keep our community
			thriving and inclusive."
		>
			<div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
				{moderators.map((moderator, i) => (
					<ModeratorCard key={i} {...moderator} />
				))}
			</div>
		</Section>

		<Section
			chip="Partners"
			title="Our Community Partners"
			text="These organizations have been instrumental in supporting and growing
			our community."
			dark
		>
			<div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:max-w-4xl md:max-w-5xl">
				{partners.map((partner, i) => (
					<PartnerCard key={i} {...partner} />
				))}
			</div>
		</Section>
	</>
);

export default Home;

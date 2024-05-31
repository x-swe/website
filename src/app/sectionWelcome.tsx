import type { FC } from "react";

const SectionWelcome: FC = () => (
	<section className="w-full py-12 md:py-24 lg:py-32  px-12">
		<div className="container space-y-12 px-4 md:px-6">
			<div className="flex flex-col items-center justify-center space-y-4 text-center">
				<div className="space-y-2">
					<div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
						Welcome to our Software Engineering Community
					</div>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
						Connecting Developers, Sharing Knowledge
					</h2>
					<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
						Our community is a vibrant hub where software engineers come
						together to learn, collaborate, and grow. Join us on this exciting
						journey!
					</p>
				</div>
			</div>
		</div>
	</section>
);

export default SectionWelcome;

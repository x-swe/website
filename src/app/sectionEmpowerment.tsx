import type { FC } from "react";

const SectionEmpowerment: FC = () => (
	<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800  px-12">
		<div className="container space-y-12 px-4 md:px-6">
			<div className="flex flex-col items-center justify-center space-y-4 text-center">
				<div className="space-y-2">
					<div className="inline-block rounded-lg  px-3 py-1 text-sm bg-background">
						Empowering the Next Generation of Developers
					</div>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
						Building a Brighter Future, Together
					</h2>
					<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
						Our community is dedicated to fostering an inclusive and supportive
						environment where developers can thrive. Join us as we shape the
						future of software engineering.
					</p>
				</div>
			</div>
		</div>
	</section>
);

export default SectionEmpowerment;

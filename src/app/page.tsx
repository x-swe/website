import type { NextPage } from "next";
import dynamic from "next/dynamic";
import SectionWelcome from "./sectionWelcome";
import SectionEmpowerment from "./sectionEmpowerment";
import { Suspense } from "react";
import { Spinner } from "@/components/ui/spinner";

const SectionModerators = dynamic(() => import("./sectionModerators"));
const SectionPartners = dynamic(() => import("./sectionPartners"));

const Home: NextPage = () => (
	<>
		<SectionWelcome />
		<SectionEmpowerment />
		<Suspense fallback={<Spinner />}>
			<SectionModerators />
		</Suspense>
		<Suspense fallback={<Spinner />}>
			<SectionPartners />
		</Suspense>
	</>
);

export default Home;

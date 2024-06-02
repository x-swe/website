import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Software Engineering on X",
		short_name: "Software Engineering on X",
		description: "Software Engineering Community",
		start_url: "/",
		display: "standalone",
		background_color: "#fff",
		theme_color: "#fff",
		icons: [
			{
				src: "assets/logo_standard.svg",
				sizes: "any",
				type: "image/x-icon",
			},
		],
	};
}

"use client";
import type { FC } from "react";
import { useTheme } from "next-themes";

const Logo: FC = () => {
	const { resolvedTheme } = useTheme();

	const logoSrc =
		resolvedTheme === "dark"
			? `assets/logo_white.svg`
			: `assets/logo_black.svg`;
	return (
		<>
			<img src={logoSrc} alt="logo" className="w-6 h-6 min-w-6 min-h-6" />
			<span className="sr-only">Software Engineering Community</span>
		</>
	);
};
export default Logo;

"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import type { FC } from "react";

export const ThemeProvider: FC<ThemeProviderProps> = ({
	attribute = "class",
	defaultTheme = "system",
	enableSystem = true,
	disableTransitionOnChange = false,
	...props
}) => (
	<NextThemesProvider
		attribute={attribute}
		defaultTheme={defaultTheme}
		enableSystem={enableSystem}
		disableTransitionOnChange={disableTransitionOnChange}
		{...props}
	/>
);

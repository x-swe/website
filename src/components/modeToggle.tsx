"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, type FC } from "react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const ModeToggle: FC = () => {
	const [openDropdown, setOpenDropdown] = useState(false);
	const { setTheme, theme } = useTheme();

	const handleToggle = (theme: string) => {
		setTheme(theme);
		setOpenDropdown(false);
	};

	return (
		<DropdownMenu
			open={openDropdown}
			onOpenChange={() => setOpenDropdown((o) => !o)}
		>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					{theme === "dark" ? <Moon className={"h-6 w-6"} /> : null}
					{theme === "system" ? <Monitor className={"h-6 w-6"} /> : null}
					{theme === "light" ? <Sun className={"h-6 w-6"} /> : null}

					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<ToggleGroup type="single" value={theme}>
					<ToggleGroupItem
						value="light"
						aria-label="Toggle bold"
						onClick={() => handleToggle("light")}
					>
						<Sun className="h-4 w-4" />
					</ToggleGroupItem>
					<ToggleGroupItem
						value="dark"
						aria-label="Toggle italic"
						onClick={() => handleToggle("dark")}
					>
						<Moon className="h-4 w-4" />
					</ToggleGroupItem>
					<ToggleGroupItem
						value="system"
						aria-label="Toggle underline"
						onClick={() => handleToggle("system")}
					>
						<Monitor className="h-4 w-4" />
					</ToggleGroupItem>
				</ToggleGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
export default ModeToggle;

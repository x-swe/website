"use client";

import type { FC } from "react";
import { useFormStatus } from "react-dom";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SubmitButton: FC<Omit<ButtonProps, "type" | "loading">> = ({
	className,
	...props
}) => {
	const { pending } = useFormStatus();

	return (
		<Button
			type="submit"
			loading={pending}
			className={cn("w-full", className)}
			{...props}
		>
			Submit
		</Button>
	);
};

export default SubmitButton;

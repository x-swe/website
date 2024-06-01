"use server";

import { sendMail, type MailOptions } from "@/services/mailService";
import { z } from "zod";

const formDataSchema = z.object({
	name: z.string(),
	email: z.string(),
	subject: z.string(),
	message: z.string(),
});

export const formSubmitAction = async (
	initialState: boolean,
	formData: FormData,
) => {
	try {
		const data = formDataSchema.parse({
			name: formData.get("name"),
			email: formData.get("email"),
			subject: formData.get("subject"),
			message: formData.get("message"),
		});

		const mailOptions: MailOptions = {
			subject: data.subject,
			text: `[Name: ${data.name}]: ${data.message}`,
			replyTo: data.email,
		};

		return await sendMail(mailOptions);
	} catch (error) {
		console.error("formSubmitAction -> error", error);
		return initialState;
	}
};

import { type NextRequest, NextResponse } from "next/server";

import { sendMail, type MailOptions } from "@/services/mailService";
import { z } from "zod";

const formDataSchema = z.object({
	name: z.string(),
	email: z.string(),
	subject: z.string(),
	message: z.string(),
});

export async function POST(request: NextRequest) {
	try {
		const data = formDataSchema.parse(await request.json());

		const mailOptions: MailOptions = {
			subject: data.subject,
			text: `[Name: ${data.name}]: ${data.message}`,
			replyTo: data.email,
		};

		await sendMail(mailOptions);
		return NextResponse.json({ message: "Email sent" });
	} catch (error) {
		console.error("formSubmitAction -> error", error);
		return NextResponse.json({ error }, { status: 500 });
	}
}

"use client";
import type { NextPage } from "next";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface FormElements extends HTMLFormControlsCollection {
	name: HTMLTextAreaElement;
	email: HTMLInputElement;
	subject: HTMLTextAreaElement;
	message: HTMLInputElement;
}
interface ContactFormElement extends HTMLFormElement {
	readonly elements: FormElements;
}

const ContactPage: NextPage = () => {
	const [formState, setFormState] = useState({
		submitted: false,
		loading: false,
	});

	const onSubmit = async (e: React.FormEvent<ContactFormElement>) => {
		e.preventDefault();

		setFormState((prev) => ({ ...prev, loading: true }));
		const elements = e.currentTarget.elements;
		const data = {
			name: elements.name.value,
			email: elements.email.value,
			subject: elements.subject.value,
			message: elements.message.value,
		};

		fetch("api/contact", {
			method: "POST",
			body: JSON.stringify(data),
		})
			.then((res) => {
				if (res.ok) {
					setFormState({ submitted: true, loading: false });
				}
			})
			.catch((error) => {
				console.error("onSubmit -> error", error);
				setFormState({ submitted: false, loading: false });
			});
	};

	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex-1">
			<div className="container grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
				<div className="space-y-2 text-center">
					<h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
						Contact Us
					</h1>
					<p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
						Have a question or feedback?
					</p>
					<p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
						Fill out the form below and we'll get back to you as soon as
						possible.
					</p>
				</div>
				<div className="w-full max-w-sm m-auto space-y-2">
					<form className="flex flex-col space-y-4" onSubmit={onSubmit}>
						<div className="grid gap-2">
							<Label htmlFor="name" className="text-base">
								Name
							</Label>
							<Input
								required
								id="name"
								placeholder="Enter your name"
								name="name"
							/>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="email" className="text-base">
								Email
							</Label>
							<Input
								required
								id="email"
								type="email"
								placeholder="Enter your email"
								name="email"
							/>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="subject" className="text-base">
								Subject
							</Label>
							<Input
								required
								id="subject"
								placeholder="What is your message about?"
								name="subject"
							/>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="message" className="text-base">
								Message
							</Label>
							<Textarea
								required
								id="message"
								placeholder="Enter your message"
								className="min-h-[100px]"
								name="message"
							/>
						</div>
						<Button
							type="submit"
							loading={formState.loading}
							className="w-full"
							disabled={formState.submitted}
						>
							Submit
						</Button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactPage;

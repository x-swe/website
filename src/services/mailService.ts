import nodemailer from "nodemailer";

const { NODEMAILER_PASSWORD = "", NODEMAILER_EMAIL = "" } = process.env;

export type MailOptions = {
	subject: string;
	text: string;
	replyTo: string;
};

export const sendMail = async (mailOptions: MailOptions) => {
	const transporter = nodemailer.createTransport({
		service: "gmail",
		/* 
            setting service as 'gmail' is same as providing these setings:

            host: "smtp.gmail.com",
            port: 465,
            secure: true
            
            If you want to use a different email provider other than gmail, you need to provide these manually.
            Or you can go use these well known services and their settings at
            https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
        */
		auth: {
			user: NODEMAILER_EMAIL,
			pass: NODEMAILER_PASSWORD,
		},
	});

	return await new Promise<boolean>((resolve, reject) => {
		// send mail
		transporter.sendMail(
			{ from: NODEMAILER_EMAIL, to: NODEMAILER_EMAIL, ...mailOptions },
			(err) => (!err ? resolve(true) : reject(err)),
		);
	});
};

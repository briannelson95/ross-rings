import nodemailer from 'nodemailer';

const email: string = process.env.EMAIL;
const pass: string = process.env.EMAIL_PASS;
const fromEmail: string = process.env.FROM_EMAIL;

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: fromEmail,
        pass,
    }
});

export const mailOptions = {
    from: fromEmail,
    to: email
}
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const machines = ['graphics@grandways.co.bw', 'clientservices@grandways.co.bw', 'sales@grandways.co.bw'];
let lastMachineIndex = 0;

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    const nextMachine = machines[lastMachineIndex];
    lastMachineIndex = (lastMachineIndex + 1) % machines.length;

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: nextMachine,
      subject: 'New Quote Requested',
      text: message,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}

export function OPTIONS() {
  return NextResponse.json({}, { status: 204 });
}

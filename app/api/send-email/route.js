import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const machines = ['graphics@grandways.co.bw', 'clientservices@grandways.co.bw', 'sales@grandways.co.bw'];
let lastMachineIndex = 0;

export async function POST(request) {
  console.log('API called');
  try {
    const { name, email, message } = await request.json();
    console.log('Request body:', { name, email, message });

    const nextMachine = machines[lastMachineIndex];
    lastMachineIndex = (lastMachineIndex + 1) % machines.length;

    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true, // Use true for port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        // Ensure proper TLS configuration
        rejectUnauthorized: false,
        minVersion: 'TLSv1.2',
      },
      family: 4, // Force Nodemailer to use IPv4
      debug: true, // Enable debug output
      logger: true, // Log information
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: nextMachine,
      subject: 'New Quote Requested',
      text: message,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}

export function OPTIONS() {
  return NextResponse.json({}, { status: 204 });
}

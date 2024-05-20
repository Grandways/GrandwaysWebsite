const nodemailer = require('nodemailer');

const machines = ['graphics@grandways.co.bw', 'clientservices@grandways.co.bw', 'sales@grandways.co.bw'];

// Variable to keep track of the last employee who received an email
let lastMachineIndex = 0;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { name, email, message } = req.body;

  // Determine the next employee to send the email to
  const nextMachine = machines[lastMachineIndex];
  lastMachineIndex = (lastMachineIndex + 1) % machines.length; // Increment and loop back to the beginning if necessary

  let transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other email services
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: nextMachine,
    subject: 'New Quote Requested',
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email.' });
  }
}

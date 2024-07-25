// pages/api/send-email.js
import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    // Your Resend API Key
    const apiKey = process.env.RESEND_API_KEY;

    // Resend API endpoint
    const apiEndpoint = 'https://api.resend.io/v1/send';

    // The payload to send to the Resend API
    const payload = {
      to: 'ckenyon772@gmail.com', // Replace with your email
      from: email,
      subject: subject,
      text: message,
    };

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        res.status(200).json({ message: 'Email sent successfully!' });
      } else {
        res.status(response.status).json({ message: 'Failed to send email' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

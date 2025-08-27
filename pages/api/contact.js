/**
 * API route to handle contact form submissions. This route expects a
 * JSON payload containing name, email and message. In a real‑world
 * scenario you might forward this data to an email service or database.
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    // For demonstration we simply log the data. Replace with
    // integration to email or database as needed.
    console.log('New contact submission:', { name, email, message });
    return res.status(200).json({ message: 'Submission successful' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
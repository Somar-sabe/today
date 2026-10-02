import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const {
      Name,
      Email,
      Phone,
      Communication,
      Time,
      ContactType,
      PropertyId,
      ProjectId,
      Message,
    } = req.body

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"Altair Real Estate" <${process.env.GMAIL_USERNAME}>`,
      to: 'worksgt@gmail.com',
      replyTo: Email || undefined,
      subject: `New Lead - ${Name || 'Unknown'}`,
      text: `
New Lead

Name: ${Name || ''}
Email: ${Email || ''}
Phone: ${Phone || ''}
Communication: ${Communication || ''}
Best Time: ${Time || ''}
Contact Type: ${ContactType || ''}
Property ID: ${PropertyId || ''}
Project ID: ${ProjectId || ''}

${Message || ''}
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Lead email error:', error)

    return res.status(500).json({
      success: false,
      message: 'Failed to send lead email',
    })
  }
}
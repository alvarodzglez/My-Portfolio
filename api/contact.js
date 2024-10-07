const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { firstName, lastName, email, message, phone } = req.body;
    const name = `${firstName} ${lastName}`;

    const contactEmail = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,  
        pass: process.env.EMAIL_PASS,
      },
    });

    contactEmail.verify((error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Ready to Send");
      }
    });

    const mailToSelf = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Contact Form Submission from ${name}`,
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${message}</p>`,
    };

    const thankYouEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting me!',
      html: `<p>Hi ${name},</p>
             <p>Thank you for reaching out! I have received your message and will get back to you shortly.</p>
             <p>Best regards,</p>
             <p>Álvaro Díaz González</p>`,
    };

    try {
      await contactEmail.sendMail(mailToSelf);
      await contactEmail.sendMail(thankYouEmail);
      res.status(200).json({ code: 200, status: 'Message Sent and Thank You Email Sent' });
    } catch (error) {
      res.status(500).json({ code: 500, status: 'Failed to send message', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

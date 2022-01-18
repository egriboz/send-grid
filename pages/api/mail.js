const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;
  const data = {
    to: "egriboz@gmail.com", // Change to your recipient
    from: "egriboz@gmail.com", // Change to your verified sender
    subject: "New web form message!",
    text: message,
    // html: message.replace(/\r\n/g, "<br>"),
    html: `
    <p>You've got a new mail from <strong>${body.name}</strong>, their email is: ✉️${body.email} </p>
    <p><strong>Message:</strong></p>
    <p style="border: 1px solid #9ec0d3;padding: 30px 30px;background: #dff1fb;font-size: 16px;">${body.message}</p>
    `,
  };
  mail.send(data);

  res.status(200).json({ status: "Ok" });
}

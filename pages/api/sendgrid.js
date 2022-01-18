import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {

  try {
    await sendgrid.send({
      to: 'egriboz@gmail.com',
      from: 'egriboz@gmail.com',
      subject: 'Serverless Functions',
      text: 'Hello, world!'
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;

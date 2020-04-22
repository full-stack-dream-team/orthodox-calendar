const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "71db1cc2b1c915",
    pass: "7a47532ddf2a28",
  },
});

const sendEmail = (data) =>
  transport.sendMail({
    from: "React App <noreply@familyilove.com>",
    to: data.to,
    subject: `Hello ${data.name}`,
    text: data.text,
    html: data.html,
  });

module.exports = sendEmail;

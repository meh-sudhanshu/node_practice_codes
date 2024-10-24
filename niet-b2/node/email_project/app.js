
const mailer = require("nodemailer")

const transporter = mailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "cortez.daugherty41@ethereal.email",
      pass: "dAKuNkNC27GDzJqmtr",
    },
  });

const mailOptions = {
    from:"cortez.daugherty41@ethereal.email",
    to:"singhsudhanshu8816@gmail.com",
    subject:"Testing nodemailer",
    text:"testing sucessfulll !!"
}


transporter.sendMail(mailOptions)
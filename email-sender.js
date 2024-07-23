const nodemailer = require('nodemailer');

// Create a transporter object 
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', 
    pass: 'your-password', 
  },
});

// Email options
const mailOptions = {
  from: 'your-email@gmail.com', 
  to: 'test-mail@gmail.com', 
  subject: 'Test Email',
  text: 'Hello, this is a test email!',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
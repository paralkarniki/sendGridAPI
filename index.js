const express = require('express')
const app = express()
const port = 3000

const sgMail = require('@sendgrid/mail')

app.get('/sendEmail', (req, res) => {
  
  console.log('im workig here');
  sgMail.setApiKey('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')
  const msg = {
    to: req.query.to, // expecting to send in query parameter
    from: 'paralkar@sheridancollege.ca', // Change to your verified sender
    subject: 'CoCast - Where your contribution Matters',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    });

  res.send("Email sent Successfully");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
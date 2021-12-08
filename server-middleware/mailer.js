const express = require('express')
const postmark = require('postmark')
const validator = require('validator')
const xssFilters = require('xss-filters')

const app = express()

app.use(express.json())

app.get('/', function (req, res) {
  res.status(405).json({ error: 'sorry!' })
})



app.post('/', function (req, res) {
  const attributes = ['fullname', 'business', 'to','from', 'body']
  const sanitizedAttributes = attributes.map(n => validateAndSanitize(n, req.body[n]))
  const someInvalid = sanitizedAttributes.some(r => !r)

  if (someInvalid) {
    return res.status(422).json({ 'error': 'Ugh.. That looks unprocessable!' })
  }

  sendMail(...sanitizedAttributes)
  res.status(200).json({ 'message': 'OH YEAH' })
})
module.exports = {
  path: '/mailer/send',
  handler: app
}


const validateAndSanitize = (key, value) => {
  const rejectFunctions = {
    fullname: v => v.length < 4,
    // business: v => v.length <= 0,
    from: v => !validator.isEmail(v),
    to: v => !validator.isEmail(v),
    // body: v => v.length <= 0
  }

  // If object has key and function returns false, return sanitized input. Else, return false
  return rejectFunctions.hasOwnProperty(key) && !rejectFunctions[key](value) && xssFilters.inHTMLData(value)
}


// var serverToken = "xxxx-xxxxx-xxxx-xxxxx-xxxxxx";
// var client = new postmark.ServerClient(serverToken);
//
// client.sendEmail({
//   "From": "sender@example.com",
//   "To": "receiver@example.com",
//   "Subject": "Test",
//   "TextBody": "Hello from Postmark!"
// });

const sendMail = (fullname, business, to, from, body) =>{

  console.info("you have send an email via express")

  let serverToken = process.env.SMTPU
  let client = new postmark.ServerClient(serverToken)

    client.sendEmail({
      "From": from,
      "To": to,
      "Subject": "Test from overlay",
      "TextBody": body
  });
  console.log("email sent")
}

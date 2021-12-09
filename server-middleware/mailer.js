console.log("this is mailer 1")
const express = require('express')
const postmark = require('postmark')
const validator = require('validator')
const xssFilters = require('xss-filters')

const app = express()

app.use(express.json())

app.get('/', function (req, res) {
  res.status(405).json({ error: 'sorry!' })
})


console.log("this is mailer 2")
app.post('/', function (req, res) {
  const attributes = ['fullname', 'business', 'to','from', 'body', 'phone']
  const sanitizedAttributes = attributes.map(n => validateAndSanitize(n, req.body[n]))
  // const someInvalid = sanitizedAttributes.some(r => !r)
  //
  // if (someInvalid) {
  //   return res.status(422).json({ 'error': 'Ugh.. That looks unprocessable!' })
  // }

  sendMail(...sanitizedAttributes)
  res.status(200).json({ 'message': 'OH YEAH' })
})
console.log("this is mailer 3")
module.exports = {
  path: '/mailer/send',
  handler: app
}

console.log("this is mailer 4")
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


const sendMail = (fullname, business, to, from, body, phone) =>{

  console.log("you have send an email via express")

  let serverToken = process.env.SMTPU
  let client = new postmark.ServerClient(serverToken)

    client.sendEmail({
      "From":"ashish@kortaben.se",
      "To":"ashish@kortaben.se",
      "Subject": "Message from contact form",
      "TextBody":`
      Name: ${fullname} <br>
      Email: ${from} <br>
      Phone: ${phone} <br>
      Business: ${business}<br>
      Body: ${body}
      `
    });
  console.log("email sent")
}

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
  const attributes = ['fullname', 'business', 'phone','sender', 'body', 'subject']
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
    phone: v => !validator.isLength(v,{min:0}),
    subject: v => !validator.isLength(v,{min:0}),
    business: v => !validator.isLength(v,{min:0}),
    sender: v => !validator.isEmail(v),
    body: v => !validator.isLength(v,{min:0}),

  }

  // If object has key and function returns false, return sanitized input. Else, return false
  return rejectFunctions.hasOwnProperty(key) && !rejectFunctions[key](value) && xssFilters.inHTMLData(value)
}


const sendMail = (fullname, business, phone,sender, from, body, subject) =>{


  let serverToken = process.env.SMTPU
  let client = new postmark.ServerClient(serverToken)

    client.sendEmail({
      "From":"contact@sally-r.com",
      "To":"contact@sally-r.com",
      "Subject": subject,
      "TextBody":`
            Name: ${fullname}
            Email: ${sender}
            Phone: ${phone}
            Business: ${business}
            Body: ${body}
            `
    });
  console.log("email sent")
}

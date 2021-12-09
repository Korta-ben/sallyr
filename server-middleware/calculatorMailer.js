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
  // const attributes = ['fullname', 'business', 'phone','sender', 'body', 'subject']
  const attributes = ['sender']
  const sanitizedAttributes = attributes.map(n => validateAndSanitize(n, req.body[n]))
  // const someInvalid = sanitizedAttributes.some(r => !r)
  //
  // if (someInvalid) {
  //   return res.status(422).json({ 'error': 'Ugh.. That looks unprocessable!' })
  // }

  sendMail(...sanitizedAttributes)
  res.status(200).json({ 'message': 'OH YEAH' })
})

module.exports = {
  path: '/calculator/send',
  handler: app
}


const validateAndSanitize = (key, value) => {
  const rejectFunctions = {
    // fullname: v => v.length < 4,
    // phone: v => !validator.isLength(v,{min:0}),
    // subject: v => !validator.isLength(v,{min:0}),
    // business: v => !validator.isLength(v,{min:0}),
    sender: v => !validator.isEmail(v),
    // body: v => !validator.isLength(v,{min:0}),

  }

  // If object has key and function returns false, return sanitized input. Else, return false
  return rejectFunctions.hasOwnProperty(key) && !rejectFunctions[key](value) && xssFilters.inHTMLData(value)
}


const sendMail = (sender) =>{

  // console.log(sender)

  let serverToken = process.env.SMTPU
  let client = new postmark.ServerClient(serverToken)

  client.sendEmail({
    "From":"hello@sr-stage.kortaben.work",
    "To":sender,
    "Subject": "this is the calculator result",
    "TextBody":'<div class="content">' +
                '<h1>This is a heading</h1>' +
                '<p>This is a paragraph of text.</p>' +
                '<p><strong>Note:</strong> If you don\'t escape "quotes" properly, it will not work.</p>' +
                '</div>'
  });
  console.log("email sent")
}

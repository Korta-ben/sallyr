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

  const attributes = ['sender', 'buildingType', 'zone', 'areaType', 'area', 'savings', 'cost']
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
    buildingType: v => !validator.isLength(v,{min:0}),
    zone: v => !validator.isLength(v,{min:0}),
    areaType: v => !validator.isLength(v,{min:0}),
    area: v => !validator.isLength(v,{min:0}),
    savings: v => !validator.isLength(v,{min:0}),
    cost: v => !validator.isLength(v,{min:0}),

  }

  // If object has key and function returns false, return sanitized input. Else, return false
  return rejectFunctions.hasOwnProperty(key) && !rejectFunctions[key](value) && xssFilters.inHTMLData(value)
}


const sendMail = (sender, buildingType, zone, areaType, area, savings, cost) =>{

  // console.log(sender)

  let serverToken = process.env.SMTPU
  let client = new postmark.ServerClient(serverToken)

  client.sendEmail({
    "From":"hello@sr-stage.kortaben.work",
    "To":sender,
    "Subject": "Sally-R calculation results",
    "HtmlBody":`
    <div style="max-width: 834px; width: 100%; background:#F9F9F9; text-align: center; padding-left: 30px; padding-right: 30px; padding-top: 75px ">
    <h2 style="font-size: 22px; font-weight: 700; ">SALLY R</h2>
    <div style="max-width: 68px; width:100%; margin:0 auto; background:#FFFFFF; padding-top: 39px; padding-bottom:54px">
        <h2 style="font-size: 50px; line-height: 55px; text-align: center; border-bottom:  8px solid #164CD6 ">...and the results are in!</h2>
    </div>
        Building type: ${buildingType},
        Zone: ${zone},
        Area Type: ${areaType},
        Area: ${area},
        Savings: ${savings},
        Cost: ${cost}
    </div>
    `
  });
  console.log("email sent")
}

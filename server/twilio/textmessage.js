require("dotenv").config()

const client = require("twilio")(accountSid, authToken)

const accountSid = process.env.accountSid
const authToken = process.env.authToken

socket.on("sendTXT", (txt) => {
  client.messages.create({
    to: `+1${phonenumber}`,
    from: "+17326914429",
    body: `You've been invited to a WeTube Party Room! Click this link to get started: http://localhost:3000/${props.match.params.id} .`,
  })
})

module.exports = sendTxt()

const router = require('express').Router();

const Contacts = require('./contacts-model.js')

var accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console


const client = require('twilio')(accountSid, authToken);





router.post('/',(req,res) => {
   const msg = req.body;
   console.log(req.body);
   Contacts.add(msg)
   .then(msg => {

        client.messages.create(
            {to:process.env.TARGET_PHONE_NUMBER,
            from:process.env.TWILIO_PHONE_NUMBER,
            body: `${msg.message} from ${msg.name} - ${msg.email}`}
        )
        .then((msg) => {
        console.log("hello")
         
        })
        res.status(201).json(msg)
        
    })

    

    
   .catch(err => 
    {
        console.log('error', err)
    res.status(500).json({error: "Unable to send message"})
}
    )
})

module.exports = router;
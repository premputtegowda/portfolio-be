const router = require('express').Router();

const Contacts = require('./contacts-model.js')


router.post('/',(req,res) => {
   const message = req.body;
   console.log(req.body);
   Contacts.add(message)
   .then(message => res.status(201).json(message))
   .catch(err => 
    {
        console.log('error', err)
    res.status(500).json({error: "Unable to send message"})
}
    )
})

module.exports = router;
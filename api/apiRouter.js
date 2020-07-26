const router = require("express").Router();
const contactsRouter = require("../contacts/contacts-router.js")

router.use("/contacts", contactsRouter);







router.get("/", (req, res) => {
  res.json({ api: "api endpoint is working." });
});



module.exports = router;
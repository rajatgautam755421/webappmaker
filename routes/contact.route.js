const router = require("express").Router();
const { createAComment } = require("../controllers/contact.controller");

router.post("/contact-us", createAComment);

module.exports = router;

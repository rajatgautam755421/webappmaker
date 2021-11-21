const router = require("express").Router();
const { createARequest } = require("../controllers/web.controller");

router.route("/createaapp").post(createARequest);

module.exports = router;

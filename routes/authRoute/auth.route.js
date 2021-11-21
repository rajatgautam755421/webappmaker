const router = require("express").Router();
const {
  userLogin,
  createAUser,
} = require("../../controllers/autoController/auth.controller");
const { verify } = require("../../middlewares/verifyUser");
const sendAMail = require("../../helpers/sendAMessage");

router.route("/register").post(createAUser);
router.route("/login").post(userLogin);
router.get("/visit", verify, (req, res) => {
  sendAMail();
  res.status(200).json({
    status: "success",
    message: "visited",
  });
});

module.exports = router;

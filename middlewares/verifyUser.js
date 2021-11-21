const jwt = require("jsonwebtoken");

//Checking For User Authentication
function verify(req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(403).json({
      status : "fail",
      message : "Not Authenticated"
  });
  try {
    jwt.verify(token, process.env.TOKEN_SECRET);
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
}

module.exports = {verify}
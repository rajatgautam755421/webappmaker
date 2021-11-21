//Globar Imports
const express = require("express");
const app = express();
require("./config/database");
const dotenv = require("dotenv");
const cors = require("cors");
const logger = require("morgan");
//Global Middlewares
app.use(express.json());
app.use(cors());
app.use(logger("dev"));
dotenv.config();
const Port = process.env.PORT || 5000;

//Importing Routes
const authRoute = require("./routes/authRoute/auth.route");
const webRoute = require("./routes/web.route");

//Implementing Routes
app.use("/api/v1/user", authRoute);
app.use("/api/v1", webRoute);

app.get("*", (req, res) => {
  res.status(200).json({
    status: "failed",
    message: "page not found",
  });
});

app.listen(Port, () => {
  console.log(`Server is up and running at ${Port}`);
});

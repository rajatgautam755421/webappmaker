//Globar Imports
const express = require("express");
const app = express();
require("./config/database");
const dotenv = require("dotenv");
const cors = require("cors");
const logger = require("morgan");
//Global Middlewares
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(logger("dev"));
dotenv.config();
const Port = process.env.PORT || 5000;

//Importing Routes
const authRoute = require("./routes/authRoute/auth.route");
const webRoute = require("./routes/web.route");
const contactRoute = require("./routes/contact.route");

//Implementing Routes
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome",
  });
});
app.use("/api/v1/user", authRoute);
app.use("/api/v1", webRoute);
app.use("/api/v1", contactRoute);

app.get("*", (req, res) => {
  res.status(200).json({
    status: "failed",
    message: "page not found",
  });
});

app.listen(Port, () => {
  console.log(`Server is up and running at ${Port}`);
});

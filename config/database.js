const { connect } = require("mongoose");

connect(
  "mongodb+srv://rajat:rajat12345@cluster0.xtjbz.mongodb.net/UsersModel",
  (error) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log("Connected To Database");
    }
  }
);

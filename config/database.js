const { connect } = require("mongoose");

connect(
  "mongodb+srv://rajat:12345@cluster0.uaz2j.mongodb.net/UsersModel?retryWrites=true&w=majority",
  (error) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log("Connected To Database");
    }
  }
);

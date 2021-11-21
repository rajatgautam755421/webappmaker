const WebModel = require("../models/web.model");
const authModel = require("../models/web.model");
let nodemailer = require("nodemailer");

const createARequest = async (req, res) => {
  const response = await WebModel.create(req.body);
  try {
    res.status(201).json({
      status: "success",
      data: response,
    });
    const Id = response.user;
    const response1 = await authModel.findById({ id: Id });
    console.log(response.user.toString());
    console.log(response1);
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "gautamrajat185@gmail.com",
        pass: "1462962708",
      },
    });

    let mailOptions = {
      from: "gautamrajat185@gmail.com",
      to: "amanforedu635@gmai.com",
      subject: "Sending Email using Node.js",
      text: "Bhoot Aayo",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

module.exports = { createARequest };

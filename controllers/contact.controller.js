const ContactModel = require("../models/contact.model");

const createAComment = async (req, res) => {
  const response = await ContactModel.create(req.body);
  try {
    res.status(201).json({
      status: "success",
      message: response,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

module.exports = { createAComment };

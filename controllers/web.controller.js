const WebModel = require("../models/web.model");

const createARequest = async (req, res) => {
  await WebModel.create(req.body);

  try {
    res.status(201).json({
      status: "success",
      data: "Congratulations",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

module.exports = { createARequest };

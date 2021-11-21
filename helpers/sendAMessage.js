function sendingMail() {
  return async (req, res) => {
    // const searchUser = await authModel.findById({ _id: user });
    console.log(searchUser);
    try {
      res.status(200).json({
        status: "success",
        message: searchUser,
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        message: error.message,
      });
    }
  };
}
sendingMail();
module.exports = sendingMail;

const User = require("../models/user");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.read = (req, res) => {
  req.profile.hashed_password = undefined;
  return res.json(req.profile);
};

exports.publicProfile = (req, res) => {
  let username = req.params.username;
  let user;

  User.findOne({ username }).exec((err, userFromDB) => {
    if (err || !userFromDB) {
      return res.status(400).json({
        error: "User not found",
      });
    }
    user = userFromDB;
    let userId = user._id;
    Course.find({ postedBy: userId })
      .populate("categories", "_id name slug")
      .populate("postedBy", "_id name")
      .limit(10)
      .select(
        "_id title slug description categories postedBy createdAt updatedAt"
      )
      .exec((err, data) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler(err),
          });
        }
        user.hashed_password = undefined;
        res.json({
          user,
          courses: data,
        });
      });
  });
};
//update

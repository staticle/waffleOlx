const { check } = require("express-validator");

exports.userSignupValidator = [
  check("firstName").not().isEmpty().withMessage("First Name is required"),
  check("lastName").not().isEmpty().withMessage("Last Name is required"),
  check("phoneNumber")
    .not()
    .isEmpty()
    .isLength({ min: 10 })
    .withMessage("Must be Valid Phone Number"),
  check("email").isEmail().withMessage("Must be a valid Email address"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must contain atleast 6 characters"),
];

exports.userSigninValidator = [
  check("email").isEmail().withMessage("Must be a valid Email address"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must contain atleast 6 characters"),
];

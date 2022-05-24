const mongoose = require("mongoose");
const crypto = require("crypto")

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      unique: true,
      required: true,
      max: 32,
    },
    lastName: {
      type: String,
      max: 32,
    },
    phoneNumber: {
      type: Number,
      max: 10,
      min: 10,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
      lowercase: true,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
    },
    photo: {
      type: String,
    },
  },
  { timestamp: true }
);

userSchema.virtual("password").set((password) => {
  this._password = password;

  this.salt = this.makeSalt();

  this.hashed_password = this.encryptPassword(password);
});

userSchema.methods = {
  authenticate: (plainText) => {
    return this.encryptPassword(plainText) === this.hashed_password;
  },
  encryptPassword: (password) => {
    if (!password) return;
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
  makeSalt: () => {
    return Math.round(new Date().valueOf * Math.random()) + "";
  },
};

module.exports = mongoose.model("User", userSchema);

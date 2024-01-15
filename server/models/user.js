const { Schema, model } = require("mongoose");
const user = new Schema({
  name: {
    type: String,
    require: [true, "Set name for user"],
  },
  email: {
    type: String,
    required: [true, "Set an uniqe email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Set password for user"],
  },
  token: String,
});
const User = model("users", user);

module.exports = User;

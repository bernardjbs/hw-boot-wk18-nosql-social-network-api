const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  {
    id: true,
  }
);


// Initialize our User model
const User = model('user', userSchema);

module.exports = User;

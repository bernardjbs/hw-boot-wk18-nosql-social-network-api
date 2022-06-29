const { Schema, model } = require('mongoose');
const { validateEmail } = require('../utils/helpers');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: [validateEmail, "invalid email"]
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId, 
        ref: 'thought',
      }
    ], 
    friends: [
      {
        type: Schema.Types.ObjectId, 
        ref: 'user',
      }
    ]
  }, 
  {
    toJSON: {
      virtuals: true,
    },
    id: true, 
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});


const User = model('user', userSchema);

module.exports = User;
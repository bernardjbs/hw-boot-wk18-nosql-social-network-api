const { Schema, model } = require('mongoose');

// Reaction Schema
const reactionSchema = new Schema(
  {
    reactionBody: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    username: {
      type: String,
      ref: 'user',
    },
  },
  {
    id: true,
    timestamps: true,
  },
);

// Thought Schema
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    reactions: [reactionSchema],
  },
  {
    id: true, 
    timestamps: true,
  },
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
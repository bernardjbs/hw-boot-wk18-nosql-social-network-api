const { User, Thought } = require('../models');
const { startSession } = require('mongoose');

// Export controller CRUD functions
module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.status(200).json(thoughts);
    } catch (err) {
      res.status(500).json({ message: 'Your request could not be performed, please try again', body: err });
    };
  },

  // Create a thought
  async createThought(req, res) {
    try {
      console.log(req.body);
      const newThought = await Thought.create(req.body);
      res.status(200).json(newThought);
    } catch (err) {
      res.status(400).json({ message: 'Your request could not be performed, please try again', body: err });
    };
  },

  // Find a thought by ID
  async getThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });
      res.status(200).json(thought);
    } catch (err) {
      res.status(500).json({ message: 'Your request could not be performed, please try again', body: err });
    };
  },

  // Update a thought
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { new: true },
      );
      res.status(200).json(thought)
    } catch (err) {
      res.status(400).json({ message: 'Your request could not be performed, please try again', body: err });
    }
  },

  // Delete a thought
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No such thought exists' })
          : User.findOneAndUpdate(
              { thoughts: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtId } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'Thought deleted, but no users found',
            })
          : res.json({ message: 'Thought successfully deleted' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  
  // Create a reaction
  async createReaction(req, res) {
    try {
      const reaction = await Thought.findByIdAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { new: true },
      );
      res.status(200).json(reaction);
    } catch (err) {
      res.status(400).json({ message: 'Your request could not be performed, please try again', body: err });
    }
  },

  // Delete a reaction
  async deleteReaction(req, res) {
    try {
      const reaction = await Thought.findByIdAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true },
      );
      res.status(200).json(reaction);
    } catch (err) {
      res.status(400).json({ message: 'Your request could not be performed, please try again', body: err });
    }
  },
};
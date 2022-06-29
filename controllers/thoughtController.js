const { Thought } = require('../models');

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
  async deleteThought(req, res) {
    try {
      await Thought.findOneAndDelete(
        { _id: req.params.thoughtId },
      );
      res.status(200).json({ message: "Thought deleted!" });
    } catch (err) {
      res.status(400).json({ message: 'Your request could not be performed, please try again', body: err });
    }
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
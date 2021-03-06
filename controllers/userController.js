const { User, Thought } = require('../models');

// Export controller CRUD functions
module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: 'Your request could not be performed, please try again', body: err });
    };
  },

  // Create a user
  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.status(200).json(newUser);
    } catch (err) {
      res.status(400).json({ message: 'Your request could not be performed, please try again', body: err })
    };
  },

  // Find a user by ID
  async getUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId });
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: 'Your request could not be performed, please try again', body: err })
    };
  },

  // Update a user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { new: true },
      );
      res.status(200).json(user)
    } catch (err) {
      res.status(400).json({ message: 'Your request could not be performed, please try again', body: err });
    }
  },

  // Delete a user and associated thoughts
  async deleteUser(req, res) {
    try {
      const user = await User.findById(
        { _id: req.params.userId },
      );
      await Thought.deleteMany({ _id: { $in: user.thoughts } })
      await User.findByIdAndDelete({_id: req.params.userId})
      res.status(200).json({ message: "User deleted!" });
    } catch (err) {
      res.status(400).json({ message: 'Your request could not be performed, please try again', body: err });
    }
  },

  // Add a friend
  async addFriend(req, res) {
    try {
      const friend = await User.findByIdAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { new: true },
      );
      res.status(200).json(friend);
    } catch (err) {
      res.status(400).json({ message: 'Your request could not be performed, please try again', body: err });
    }
  },

  // Delete a friend
  async deleteFriend(req, res) {
    try {
      const friend = await User.findByIdAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { new: true },
      );
      res.status(200).json(friend);
    } catch (err) {
      res.status(400).json({ message: 'Your request could not be performed, please try again', body: err });
    }
  },
};

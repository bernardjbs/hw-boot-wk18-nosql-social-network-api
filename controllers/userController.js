const { User } = require('../models');

// Export controller CRUD functions
module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.status(200).json(users);  
    } catch (err) {
      res.status(500).json({ message: 'Your request could not be performed, please try again', body: err });
    }

  },
  
  // Create a user
  async createUser(req, res) {
    try {
      console.log(req.body)
      const newUser = await User.create(req.body);
      res.status(200).json(newUser);
    } catch (err) {
      res.status(400).json({ message: 'Your request could not be performed, please try again', body: err })
    }
  }
};